import Link from "next/link";
import { siteConfig, verification } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { coolingEquipment, coolingSymptoms, coolingTuneup, coolingSources, coolingFaqs } from "./content";
import styles from "./cooling.module.css";

const route = "/services/cooling";
const url = `${siteConfig.siteUrl.replace(/\/$/, "")}${route}`;
const title = "Air Conditioning & Cooling Services in Great Falls, MT";
const description = "Central AC repair, seasonal maintenance, ductless mini-splits, and cooling upgrades for Great Falls and Cascade County homes. Explore airflow and filtration options.";
const imagePath = "/images/cooling-service-great-falls.webp";
const imageUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}${imagePath}`;
const socialImageUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/images/cooling-service-great-falls-social.jpg`;
const imageAlt = "Outdoor HVAC condenser units with connected refrigerant gauges and service hoses beside a metal-sided building.";
const imageCaption = "Refrigerant gauges connected during outdoor cooling-system service.";
const baseMetadata = buildMetadata({ title, description, canonicalPath: route });
export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [{ url: socialImageUrl, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { ...baseMetadata.twitter, images: [{ url: socialImageUrl, alt: imageAlt }] },
};

function getCoolingSchema() {
  const businessId = `${siteConfig.siteUrl.replace(/\/$/, "")}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: siteConfig.siteUrl,
  } : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...getFAQSchema(coolingFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
      {
        "@type": "ImageObject", "@id": `${url}#image`,
        contentUrl: imageUrl, url: imageUrl, width: 1280, height: 960,
        name: "Outdoor cooling equipment with diagnostic gauges", caption: imageCaption,
        description: imageAlt,
      },
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title),
        description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        citation: [...new Set([...Object.values(coolingSources), ...coolingFaqs.flatMap((faq) => faq.sources.map((source) => source.url))])],
        hasPart: { "@id": `${url}#faq` },
      },
      {
        "@type": "Service", "@id": `${url}#service`, url,
        name: "Residential air conditioning & cooling services in Great Falls, Montana",
        description, serviceType: ["Air conditioning repair", "Cooling maintenance", "Cooling installation"],
        provider, mainEntityOfPage: { "@id": `${url}#webpage` },
        areaServed: { "@type": "AdministrativeArea", name: "Cascade County, Montana" },
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "Residential cooling services",
          itemListElement: coolingEquipment.map(({ name, description }) => ({
            "@type": "Offer", itemOffered: { "@type": "Service", name, description },
          })),
        },
      },
    ],
  };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getCoolingSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cooling services", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="cooling" size={48} />
        <p className="eyebrow">Summer cooling / Great Falls &amp; Cascade County</p>
        <h1>Cooling for Great Falls’ hot rooms and smoky summer days.</h1>
        <p>Central AC repair, seasonal maintenance, ductless cooling, and replacement planning for your home—with airflow and filtration options for smoky summer days.</p>
        <div className="hero-actions"><Link className="button button-yellow" href="/contact?intent=estimate">Request service or an estimate ↗</Link><Link className="text-link" href="/services/cooling/ac-repair">AC repair &amp; diagnostics →</Link></div>
      </div>
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our view / Summer comfort</p>
          <h2>The rooms you use belong in the cooling assessment.</h2>
          <p>The thermostat reading is only part of summer comfort. If the basement is cold while upstairs bedrooms remain uncomfortable, those rooms belong in the assessment before we recommend equipment.</p>
          <p>Hot afternoons, cottonwood buildup, and smoky days can make summer comfort more complicated than turning down the thermostat. When outdoor air quality is poor, opening the windows may not be the right way to cool down.</p>
          <p>For a home in Skyline, describe which rooms overheat, when it happens, and whether bedroom doors are open or closed. Sun exposure, room use, and airflow help frame the assessment; an address alone cannot establish the cause.</p>
          <ul><li>Central AC and heat pump diagnostics</li><li>Seasonal coil cleaning and cooling maintenance</li><li>Airflow assessment for uneven room temperatures</li><li>Ductless options for homes without ducts and hot additions</li></ul>
          {/* Add a verified room-comfort job example here when measurements, work performed, outcome, and publication permission are confirmed. */}
          <h2>How a cooling service visit works.</h2>
          <ol>
            <li><strong>Start with the symptoms:</strong> Tell us what changed, which rooms are uncomfortable, and what equipment you have. Confirm the appointment window and diagnostic fee when booking.</li>
            <li><strong>Test before recommending parts:</strong> We assess operation, airflow, and relevant electrical or refrigerant readings using the equipment manufacturer’s procedures.</li>
            <li><strong>Review the findings:</strong> We explain the proposed work and price before you authorize repairs. If replacement is worth considering, we discuss the equipment’s condition, compatible options, and your budget.</li>
          </ol>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="08" subject="Outdoor HVAC condenser units with service gauges" dimensions="1600 × 1200" src={imagePath} alt={imageAlt} caption={imageCaption} />
          <div className="safety-panel">
            <h2>AC blowing warm air or icing up?</h2>
            <p>If you see ice, switch cooling OFF and call <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a>. Use fan-only mode only if the blower is operating normally and your equipment instructions allow it. Do not chip the ice or keep restarting the system.</p>
            <p>If there is smoke, a burning smell, sparking, or water near electrical equipment, stop troubleshooting and stay clear. For a fire or immediate danger, leave and call 911.</p>
            <Link className="text-link" href="/services/cooling/ac-repair">Read our AC repair &amp; troubleshooting guide →</Link>
          </div>
        </div>
      </div>
      <section className={styles.section} aria-labelledby="cooling-equipment-heading">
        <div className="article-copy"><h2 id="cooling-equipment-heading">Cooling equipment we work on.</h2><p>We work on major residential cooling brands, including Lennox, Trane, Carrier, Goodman, and Rheem—even if another company installed your system. Ask about service and installation options for your model.</p></div>
        <div className={styles.equipment}>{coolingEquipment.map(({ name, description }) => <article key={name}><h3>{name}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="cooling-symptoms-heading">
        <div className="article-copy"><h2 id="cooling-symptoms-heading">Common Great Falls cooling problems.</h2><p>These symptoms help start the conversation. Testing is needed to identify the cause.</p></div>
        <div className="service-symptoms">{coolingSymptoms.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="cooling-tuneup-heading">
        <div className="article-copy"><p className="eyebrow">Seasonal maintenance</p><h2 id="cooling-tuneup-heading">What we check during a spring AC tune-up.</h2><p>Arrange a seasonal check before heavy summer use, and keep an eye on outdoor coil buildup during cottonwood season. Maintenance can reduce breakdown risk and reveal problems early; the work needed depends on your equipment and its condition.</p></div>
        <ul className={styles.tuneup}>{coolingTuneup.map(([heading, body]) => <li key={heading}><h3>{heading}</h3><p>{body}</p></li>)}</ul>
      </section>
      <section className={`${styles.section} ${styles.guidance}`} aria-labelledby="cooling-smoke-heading">
        <div className="article-copy"><p className="eyebrow">Cooling &amp; indoor air</p><h2 id="cooling-smoke-heading">Keep cooling and smoke filtration in the same conversation.</h2><p>Air conditioning can help you stay cool with windows closed. Removing fine smoke particles also requires suitable filtration. A ductless system’s standard washable filter should not be treated as a substitute for a dedicated smoke-filtering air cleaner.</p><p>EPA recommends a MERV 13 HVAC filter, or the highest efficiency your system can accommodate, and a properly sized portable air cleaner where needed. We can discuss filter compatibility and airflow so an upgrade does not unnecessarily restrict your system.</p><p>If you cannot keep your home cool during a smoke event, seek a cooler location and follow local safety guidance.</p><p className={styles.source}>Source: <a href={coolingSources.epa}>EPA: Wildfires and Indoor Air Quality</a>. Guidance reviewed October 19, 2026.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="cooling-upgrade-heading">
        <div className="article-copy"><h2 id="cooling-upgrade-heading">Repair, replace, or consider a heat pump?</h2><p>A worn component in otherwise sound equipment may justify a repair. Recurring failures, a major component fault, persistent comfort problems, or expensive repairs can make replacement worth discussing. We help you compare the work needed with suitable equipment options.</p><p>A qualifying heat pump or other efficiency upgrade may be eligible for utility incentives. Eligibility depends on your utility account, equipment, project, and current program rules—not simply pairing a heat pump with a furnace. Confirm eligibility before buying.</p><p className={styles.source}>Program sources: <a href={coolingSources.northwestern}>NorthWestern Energy E+ incentives</a> and <a href={coolingSources.sunRiver}>Sun River Electric Cooperative heat pump rebates</a>. Reviewed October 19, 2026.</p></div>
        <div className="related-links"><Link className="text-link" href="/services/cooling/ac-maintenance">Plan AC maintenance &amp; coil care →</Link><Link className="text-link" href="/services/cooling/ac-installation">Plan AC installation &amp; replacement →</Link><Link className="text-link" href="/services/cooling/ac-repair">Understand AC diagnosis &amp; repair →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Explore cold-climate heat pumps →</Link><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review Montana HVAC rebate guidance →</Link></div>
      </section>
    </div>
    <section className="faq-section section" aria-labelledby="cooling-faq-heading">
      <div className="wrap faq-grid">
        <div><p className="eyebrow">Useful answers</p><h2 id="cooling-faq-heading">Frequently asked questions about air conditioning in Great Falls.</h2><p>Straight answers on Cascade County wildfire smoke filtration, cottonwood coil care, uneven room temperatures, and 2026 cooling rebates.</p></div>
        <div>
          {coolingFaqs.map(({ question, answer, sources }) => <details className="faq-item" key={question}>
            <summary>{question}<span aria-hidden="true">+</span></summary>
            <p>{answer}</p>
            {sources.length > 0 && <p className={styles.source}>Sources: {sources.map((source, index) => <span key={source.url}>{index > 0 ? "; " : ""}<a href={source.url}>{source.label}</a></span>)}</p>}
          </details>)}
          <p className={styles.faqFollowup}>Planning an upgrade? <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review our Montana HVAC rebate guide →</Link></p>
        </div>
      </div>
    </section>
    <FinalDarkCTA title="Let’s get your cooling sorted out." subtitle="Need a repair, seasonal maintenance, or a replacement estimate? Call to discuss availability or send a service inquiry. Online forms are not continuously monitored." />
  </>;
}
