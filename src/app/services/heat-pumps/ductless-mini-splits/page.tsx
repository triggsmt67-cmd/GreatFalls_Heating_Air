import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { FloorPlanDiagram } from "./FloorPlanDiagram";
import { ductlessSources, ductlessUses, indoorStyles, ductlessScope, ductlessFaqs } from "./content";
import styles from "./ductless.module.css";

const route = "/services/heat-pumps/ductless-mini-splits";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "Ductless Mini-Split Installation in Great Falls, MT";
const description = "Ductless mini-split installation in Great Falls: room coverage, closed-bedroom planning, indoor-unit placement, piping and drainage, winter heating, and utility incentives.";
export const metadata = buildMetadata({ title, description, canonicalPath: route });

function getDuctlessSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
    ...(verification.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.locality, addressRegion: siteConfig.region, postalCode: siteConfig.postalCode, addressCountry: "US" } } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", isPartOf: { "@id": `${baseUrl}/services/heat-pumps/cold-climate#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(ductlessSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Ductless mini-split installation in Great Falls, Montana", description, serviceType: "Ductless mini-split installation", provider, areaServed: [{ "@type": "City", name: "Great Falls, Montana" }, { "@type": "AdministrativeArea", name: "Cascade County, Montana" }], mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(ductlessFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getDuctlessSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cold-climate heat pumps", url: "/services/heat-pumps/cold-climate" }, { name: "Ductless mini-split installation", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="heat-pump" size={48} />
        <p className="eyebrow">Zoned heating &amp; cooling / Great Falls &amp; Cascade County</p>
        <h1>Ductless mini-split installation planned around the rooms you actually use.</h1>
        <p>Start with room coverage, normal door positions, and practical equipment locations. Get a written plan for indoor units, piping, drainage, electrical work, and the heating you expect in winter.</p>
        <div className="hero-actions"><Link className="button button-orange" href="/contact?intent=estimate">Request a ductless estimate ↗</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Compare ducted and ductless options →</Link></div>
        <p className={styles.notice}>Call <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> for estimate arrangements and current availability. An online inquiry does not reserve an appointment.</p>
      </div>
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our view / Coverage before head count</p>
          <h2>The room list should come before the equipment list.</h2>
          <p>At Great Falls Heating and Air, our ductless perspective starts with which rooms need conditioning and how people use them. An open living area, a bedroom with its door closed, and a separate workshop need different coverage and installation decisions.</p>
          <h3>A local planning example: cooling a boiler-heated home.</h3>
          <p>Consider a Great Falls homeowner who has a boiler and wants summer cooling in the living room and two bedrooms. If bedroom doors stay closed at night, a living-room unit alone does not establish comfortable bedroom temperatures. Compare the rooms’ loads and suitable distribution options before choosing indoor units.</p>
          <p>For a property in the Great Falls Northside Residential Historic District, confirm the actual wall and ceiling construction, acceptable exterior routes, and responsibility for finish restoration. Agree on protection of existing finishes and where indoor units, piping, and covers will be visible. This is an illustrative planning situation, not a completed customer job.</p>
          <p className={styles.source}>Local naming reference: <a href={ductlessSources.historic}>National Park Service: Great Falls Northside Residential Historic District</a>.</p>
        </div>
        <aside className={styles.callout}><h2>Bring a floor plan and your room priorities.</h2><p>A simple sketch is enough to start: rooms needing cooling or heat, doors normally closed, existing heaters, furniture, and possible indoor-unit locations.</p><p>Discuss piping and drainage routes, electrical supply, outdoor space, appearance, and future cleaning access. Call to confirm availability for your address.</p><Link className="text-link" href="/services/heat-pumps/heat-pump-installation">Review the complete heat pump installation plan →</Link></aside>
      </div>
      <FloorPlanDiagram />
      <p className={styles.source}>Room distribution and selection: <a href={ductlessSources.planning}>PNNL ductless heat-pump planning guidance</a>.</p>
      <section className={styles.section} aria-labelledby="ductless-uses-heading"><div className="article-copy"><h2 id="ductless-uses-heading">Three starting points for a ductless layout.</h2><p>Each calls for a defined coverage goal and a project-specific scope.</p></div><div className={styles.paths}>{ductlessUses.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div></section>
      <section className={styles.section} aria-labelledby="ductless-zones-heading"><div className="article-copy">
        <h2 id="ductless-zones-heading">Single-zone and multi-zone are choices to compare.</h2>
        <p>One outdoor unit serving several indoor units may suit a layout, but compare it with separate single-zone arrangements where appropriate. The number of heads is only part of the decision: approved combinations, minimum output, shared capacity, room loads, routing, outdoor space, and cost also matter.</p>
        <p>Ask what happens when only the smallest bedroom needs cooling. Separate setpoints do not establish fully independent operation; confirm capacity allocation and any shared heating/cooling-mode restrictions for the selected system.</p>
        <p className={styles.source}>Zoning background: <a href={ductlessSources.zoning}>Mitsubishi Electric: zoned systems and changing room demand</a>. Use the actual model documentation to establish its operating limits.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ductless-styles-heading"><div className="article-copy"><h2 id="ductless-styles-heading">Choose indoor-unit locations you can live with and service.</h2><p>Wall, ceiling, and floor-console options have different space and access requirements. Confirm model availability and the proposed location before work begins.</p></div>
        <p id="ductless-styles-help" className={styles.tableHelp}>On smaller screens, scroll the comparison sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="Ductless indoor-unit placement considerations" aria-describedby="ductless-styles-help" tabIndex={0}><table><caption>Indoor style / What to assess / What to agree on</caption><thead><tr><th scope="col">Indoor style</th><th scope="col">What to assess</th><th scope="col">What to agree on</th></tr></thead><tbody>{indoorStyles.map(([style, assess, agree]) => <tr key={style}><th scope="row">{style}</th><td>{assess}</td><td>{agree}</td></tr>)}</tbody></table></div>
      </section>
      <section className={styles.section} aria-labelledby="ductless-routing-heading"><div className="article-copy">
        <h2 id="ductless-routing-heading">See the piping and drainage route before approving the layout.</h2>
        <p>Ask the proposal to show indoor and outdoor routes, wall or ceiling openings, exterior covers, weather sealing, and any visible indoor piping. Assess the actual construction before promising an opening size, concealment, or a particular drilling method. Agree on protection and restoration of finishes.</p>
        <p>Establish where cooling condensate will drain. If gravity drainage is practical, confirm its route; if a pump is needed, discuss its access, sound, protection, and maintenance. Avoid discharge that creates a nuisance or a refreezing hazard.</p>
        <p>Include outdoor support, winter airflow clearances, snow/drifting and defrost drainage, electrical requirements, and permit responsibilities in the full scope. Those details follow the equipment and site.</p>
        <Link className="text-link" href="/services/heat-pumps/heat-pump-installation#hp-winter-heading">Review winter placement and installation considerations →</Link>
      </div></section>
      <section className={styles.section} aria-labelledby="ductless-winter-heading"><div className="article-copy">
        <h2 id="ductless-winter-heading">Define the winter role before replacing existing heat.</h2>
        <p>Identify whether the system is intended for cooling, supplemental heating, or a larger share of the home’s heating demand. Compare room loads with the selected model’s available output at relevant outdoor temperatures. An advertised low operating limit does not establish enough heat for the rooms served.</p>
        <p>If a boiler, baseboard, or another heater remains, explain when and how it will be used. Automatic coordination needs an actual control plan; a wood stove is not automatic backup. Expected energy use depends on equipment performance, weather, coverage, operation, and actual energy prices.</p>
        <p className={styles.source}>Cold-weather selection: <a href={ductlessSources.sizing}>PNNL cold-climate sizing and equipment selection</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ductless-smoke-heading"><div className="article-copy">
        <h2 id="ductless-smoke-heading">Plan cooling and smoke filtration separately.</h2>
        <p>Ductless cooling can help keep windows closed during wildfire smoke events. Standard washable screens should not be assumed to capture fine smoke particles effectively. Assess suitable air cleaning for the room and follow current smoke guidance.</p>
        <p>Leave access to filters, indoor coils and blowers, condensate components, and any fitted pump. At handoff, ask for the model’s owner-care instructions and which work needs professional service.</p>
        <p className={styles.source}>Air-quality guidance: <a href={ductlessSources.smoke}>EPA wildfire smoke and indoor air quality</a>.</p>
        <p><Link className="text-link" href="/services/heat-pumps/repair-maintenance">Existing mini-split acting differently? Review heat pump service →</Link></p><Link className="text-link" href="/services/cooling/ac-maintenance#ac-ductless-care-heading">Read about ductless care and maintenance access →</Link>
      </div></section>
      <section className={styles.section} aria-labelledby="ductless-scope-heading"><div className="article-copy"><h2 id="ductless-scope-heading">Six layout decisions to confirm in writing.</h2><p>The useful estimate explains rooms served, visible changes, installation work, and ownership responsibilities alongside the equipment.</p></div>
        <p id="ductless-scope-help" className={styles.tableHelp}>On smaller screens, scroll the checklist sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="Ductless installation scope checklist" aria-describedby="ductless-scope-help" tabIndex={0}><table><caption>Layout decision / What to confirm in the proposal</caption><thead><tr><th scope="col">Layout decision</th><th scope="col">What to confirm</th></tr></thead><tbody>{ductlessScope.map(([decision, detail]) => <tr key={decision}><th scope="row">{decision}</th><td>{detail}</td></tr>)}</tbody></table></div>
      </section>
      <section className={styles.section} aria-labelledby="ductless-rebates-heading"><div className="article-copy">
        <h2 id="ductless-rebates-heading">Verify incentives for the account and exact equipment.</h2>
        <p>NorthWestern’s 2026–2027 electric existing-home application lists $450 for qualifying ducted or ductless heat pumps: ENERGY STAR rated <strong>or</strong> SEER2 ≥ 15.2 <strong>and</strong> HSPF2 ≥ 8.5, plus account, timing, documentation, and funding conditions. A gas account alone does not establish eligibility.</p>
        <p>Sun River Electric publishes a separate air-source program with approval required before installation. Confirm the current requirements before ordering, and keep the complete project price visible while eligibility is checked.</p>
        <p className={styles.source}>Sources reviewed October 19, 2026: <a href={ductlessSources.northwestern}>NorthWestern electric existing-home application</a>; <a href={ductlessSources.sunRiver}>Sun River air-source heat pumps</a>.</p>
      </div><div className="related-links"><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review dates and rebate documentation →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Back to cold-climate heat pumps →</Link></div>
      {/* Add a real ductless case and indoor photo only after the layout, equipment, findings, outcome, location, photo rights, and publication permission are confirmed. */}</section>
    </div>
    <section className="faq-section section" aria-labelledby="ductless-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before choosing the layout</p><h2 id="ductless-faq-heading">Frequently asked questions about ductless mini-splits.</h2></div><div>{ductlessFaqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <FinalDarkCTA title="Start with the rooms you want to improve." subtitle="Discuss coverage, indoor-unit placement, piping routes, and winter heating goals. Call for estimate arrangements and availability." requestHref="/contact?intent=estimate" requestLabel="Request a ductless estimate ↗" />
  </>;
}
