#!/usr/bin/env python3
"""Check published HTML and Schema.org relationships after a build or release.

Run with the production server active: python3 scripts/verify-search.py
Or verify a deployment: python3 scripts/verify-search.py --origin https://www.greatfallsheatingandair.com --output /tmp/live-search-validation.json
"""
import argparse
import json,urllib.request,xml.etree.ElementTree as ET,concurrent.futures,re,html
from html.parser import HTMLParser
from urllib.parse import urljoin,urlsplit
from pathlib import Path
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--origin', default='http://localhost:3047')
parser.add_argument('--output', default='docs/audits/2026-11-07/built-search-validation.json')
args = parser.parse_args()
origin=args.origin.rstrip('/'); canonical='https://www.greatfallsheatingandair.com'
class P(HTMLParser):
 def __init__(self):super().__init__();self.ld=False;self.skip=0;self.buf='';self.docs=[];self.text=[];self.links=[];self.meta={};self.canon=[];self.h1=0;self.title=False;self.t=''
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='script':self.skip+=1;self.ld=d.get('type')=='application/ld+json';self.buf=''
  if t=='style':self.skip+=1
  if t=='title':self.title=True
  if t=='h1':self.h1+=1
  if t=='a' and d.get('href'):self.links.append(d['href'])
  if t=='meta' and d.get('name'):self.meta[d['name']]=d.get('content')
  if t=='link' and d.get('rel')=='canonical':self.canon.append(d['href'])
 def handle_endtag(self,t):
  if t=='script':
   if self.ld:self.docs.append(json.loads(self.buf))
   self.ld=False;self.skip-=1
  if t=='style':self.skip-=1
  if t=='title':self.title=False
 def handle_data(self,d):
  if self.title:self.t+=d
  if self.ld:self.buf+=d
  if not self.skip:self.text.append(d)
def walk(x):
 if isinstance(x,dict):
  yield x
  for v in x.values():yield from walk(v)
 elif isinstance(x,list):
  for v in x:yield from walk(v)
def compact(x):return re.sub(r'\s+','',html.unescape(x))
def fetch(path):
 with urllib.request.urlopen(urllib.request.Request(origin+path,headers={'User-Agent':'Mozilla/5.0 (compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot)'}),timeout=25) as r:return r.status,r.read().decode()
_,xml=fetch('/sitemap.xml');urls=[e.text for e in ET.fromstring(xml).iter() if e.tag.endswith('loc')]
def audit(u):
 path=urlsplit(u).path or '/';status,body=fetch(path);p=P();p.feed(body);nodes=[n for d in p.docs for n in walk(d)];typed=[n for n in nodes if '@type'in n];byid={n['@id']:n for n in typed if '@id'in n};business=canonical+'/#business';website=canonical+'/#website';page=u+'#webpage';refs=[n['@id'] for n in nodes if set(n)=={'@id'}];faq=[n for n in typed if n.get('@type')=='Question'];text=compact(' '.join(p.text));issues=[]
 def check(c,msg):
  if not c:issues.append(msg)
 check(status==200,'HTTP status');check(p.canon==[u],'canonical');check(p.h1==1,'H1 count');check('noindex' not in p.meta.get('robots',''),'indexability');check(bool(p.meta.get('description')),'description');check(bool(p.t),'title')
 check(sum(n.get('@type')=='HVACBusiness' for n in typed)==1,'one HVACBusiness');check(sum(n.get('@type')=='WebSite' for n in typed)==1,'one WebSite');check(page in byid,'page entity')
 check(len(byid)==len([n for n in typed if '@id'in n]),'duplicate entity IDs')
 if page in byid:
  check(byid[page].get('publisher',{}).get('@id')==business,'page publisher');check({'@id':website} in byid[page].get('isPartOf',[]),'website parent')
 if path.startswith('/services/'):
  svc=byid.get(u+'#service',{});check(svc.get('provider')=={'@id':business},'service provider');check(bool(svc.get('areaServed')),'service area')
 for q in faq:
  check(compact(q['name']) in text,'FAQ question mismatch');check(compact(q['acceptedAnswer']['text']) in text,'FAQ answer mismatch')
 check(not any(k in byid.get(business,{}) for k in ['address','aggregateRating','review','priceRange','hasCredential','sameAs']),'unverified business fields')
 return {'url':u,'title':p.t,'description':p.meta.get('description'),'h1_count':p.h1,'faq_count':len(faq),'issues':issues,'ids':list(byid),'refs':refs,'links':p.links,'schemas':p.docs}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:rows=list(ex.map(audit,urls))
ids={v for r in rows for v in r['ids']};links={urljoin(canonical,l).split('#')[0].split('?')[0].rstrip('/') for r in rows for l in r['links']}
for r in rows:
 r['issues']+=['unresolved reference '+v for v in r['refs'] if v.startswith(canonical) and v not in ids]
 if r['url'] not in links:r['issues'].append('no incoming internal link')
# Check supported Schema.org names and property domains against the official vocabulary.
v=json.load(urllib.request.urlopen('https://schema.org/version/latest/schemaorg-current-https.jsonld',timeout=30))
def short(x):return x.replace('https://schema.org/','schema:').replace('http://schema.org/','schema:')
terms={short(n['@id']):n for n in v['@graph']}
def idlist(x):return [short(a['@id']) for a in (x if isinstance(x,list) else [x]) if isinstance(a,dict) and '@id'in a]
def parents(t,seen=None):
 seen=set() if seen is None else seen
 if t in seen:return seen
 seen.add(t)
 for p in idlist(terms.get(t,{}).get('rdfs:subClassOf',[])):parents(p,seen)
 return seen
for r in rows:
 for n in [n for d in r['schemas'] for n in walk(d) if '@type'in n]:
  types=n['@type'] if isinstance(n['@type'],list) else [n['@type']];sup=set().union(*(parents('schema:'+t) for t in types))
  for t in types:
   if 'schema:'+t not in terms:r['issues'].append('unknown type '+t)
  for k in n:
   if k.startswith('@'):continue
   term=terms.get('schema:'+k)
   if term is None:r['issues'].append('unknown property '+k);continue
   domains=idlist(term.get('schema:domainIncludes',[]))
   if domains and not sup.intersection(domains):r['issues'].append('property domain mismatch '+str(types)+' '+k)
summary={'origin':origin,'canonical_origin':canonical,'pages':len(rows),'faq_count':sum(r['faq_count'] for r in rows),'issue_count':sum(len(r['issues']) for r in rows),'rows':rows}
Path(args.output).write_text(json.dumps(summary,indent=2))
print(json.dumps({k:v for k,v in summary.items() if k!='rows'}))
for r in rows:print(r['url'].replace(canonical,'') or '/',r['issues'])
assert not summary['issue_count']
