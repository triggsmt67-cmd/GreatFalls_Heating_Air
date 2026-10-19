import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { maintenanceSources, maintenanceChecks, maintenanceFaqs } from "./content";
import styles from "./maintenance.module.css";

const route = "/services/heating/furnace-maintenance";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "Furnace Maintenance & Fall Tune-Ups in Great Falls, MT";
const description = "Plan furnace maintenance in Great Falls and Cascade County. Understand seasonal checks, gas and propane equipment care, service records, and safe homeowner tasks.";
export const metadata = buildMetadata({ title, description, canonicalPath: route });

function getMaintenanceSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
    ...(verification.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.locality, addressRegion: siteConfig.region, postalCode: siteConfig.postalCode, addressCountry: "US" } } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", isPartOf: { "@id": `${baseUrl}/services/heating#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(maintenanceSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Furnace maintenance & seasonal tune-ups in Great Falls, Montana", description, serviceType: "Residential furnace maintenance", provider, areaServed: [{ "@type": "City", name: "Great Falls, Montana" }, { "@type": "AdministrativeArea", name: "Cascade County, Montana" }], mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(maintenanceFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getMaintenanceSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Heating services", url: "/services/heating" }, { name: "Furnace maintenance & tune-ups", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="heating" size={48} />
        <p className="eyebrow">Seasonal heating service / Great Falls &amp; Cascade County</p>
        <h1>Furnace maintenance for Great Falls winters—with clear checks and explained findings.</h1>
        <p>Seasonal inspection and equipment-specific service for gas and propane furnaces. Understand what was checked, what needs attention, and which work needs your approval.</p>
        <div className="hero-actions"><Link className="button button-yellow" href="/contact?intent=maintenance">Request a furnace tune-up ↗</Link><Link className="text-link" href="/services/heating/emergency-furnace-repair">Furnace already acting up? →</Link></div>
        <p className={styles.formNotice}>Call for current pricing and availability. An online request does not reserve an appointment; forms are not continuously monitored.</p>
      </div>
      <div className="interior-grid">
        <div className="article-copy">
          <h2>Prepare for the heating season, not just the first cold morning.</h2>
          <p>A Great Falls furnace can go from light demand during a Chinook warm-up to long heating runs after a cold front. Planning maintenance before sustained winter demand gives you a chance to discuss findings and any follow-up work before heat becomes urgent.</p>
          <p>The details vary by home. A Fox Farm split-level may have a return-air or room-balance concern. An older North Side home may have a water heater sharing the furnace vent. A propane property near Ulm or Vaughn needs its actual fuel and equipment requirements checked. A generic pressure setting or identical cleaning routine is not a substitute for the model’s instructions.</p>
          <p>Smoke events are another reason to inspect filter condition more frequently, without assuming every burner or internal component needs the same cleaning. CPSC recommends yearly professional inspection of fuel-burning home heating systems.</p>
          <p className={styles.source}>Sources: <a href={maintenanceSources.annual}>CPSC: home heating equipment</a>; <a href={maintenanceSources.smoke}>EPA: wildfire smoke and indoor air quality</a>.</p>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="07" subject="Residential gas furnace and venting" dimensions="1600 × 1200" src="/images/emergency-furnace-repair-great-falls.webp" alt="Residential gas furnace with metal exhaust venting and ductwork in a utility room." caption="Seasonal service considers the furnace, accessible venting, airflow, and controls fitted to the equipment." />
          <aside className={styles.callout}><h2>Tell us what has changed.</h2><p>When requesting maintenance, mention repeated shutdowns, unusual sounds, cold rooms, past repairs, or a new filter type. Those symptoms may call for diagnosis alongside—or instead of—a routine tune-up.</p><a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Call {siteConfig.phoneDisplay} to discuss the visit →</a></aside>
        </div>
      </div>
      <section className={styles.section} aria-labelledby="maintenance-checklist-heading">
        <div className="article-copy"><h2 id="maintenance-checklist-heading">What a useful furnace maintenance visit should cover.</h2><p>Great Falls Heating and Air’s maintenance guide separates the check from its meaning and the next decision. Confirm the scope for your model when arranging service: inspection, cleaning when needed, and repair work are distinct tasks.</p></div>
        <p className={styles.tableHelp} id="maintenance-table-help">Compare the seven areas below. On smaller screens, scroll the table sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} tabIndex={0} role="region" aria-label="Furnace maintenance checks and follow-up" aria-describedby="maintenance-table-help"><table><caption>Check / What it tells us / What happens next</caption><thead><tr><th scope="col">Check</th><th scope="col">What it tells us</th><th scope="col">If attention is needed</th></tr></thead><tbody>{maintenanceChecks.map(([check, meaning, action]) => <tr key={check}><th scope="row">{check}</th><td>{meaning}</td><td>{action}</td></tr>)}</tbody></table></div>
        <p className={styles.source}>Technical guidance: <a href={maintenanceSources.service}>Carrier: furnace cleaning and service</a>; <a href={maintenanceSources.exchanger}>AHRI: induced-draft furnace heat exchanger inspection</a>. Procedures depend on the equipment.</p>
      </section>
      <section className={styles.section} aria-labelledby="maintenance-findings-heading">
        <div className="article-copy"><h2 id="maintenance-findings-heading">Leave with findings you can act on.</h2><p>Ask for a record identifying the furnace, date, completed checks, relevant readings, inspection limitations, and recommendations. A useful explanation tells you what was observed and which action is proposed; it does not turn one normal reading into a guarantee for the winter.</p></div>
        <div className={styles.cards}>
          <article><h3>Maintenance completed</h3><p>Understand which checks and agreed cleaning tasks were performed. Confirm the filter size and type, owner-care instructions, and any suggested service interval.</p></article>
          <article><h3>Further work proposed</h3><p>Ask what additional diagnosis, cleaning, or repair is needed and why. Review scope and price before approving work beyond the arranged visit.</p></article>
          <article><h3>A safety concern identified</h3><p>Follow the technician’s instructions on whether equipment must remain out of service. For gas odor or suspected CO exposure, leave immediately and contact emergency services or your utility from outside.</p></article>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="maintenance-timing-heading">
        <div className="article-copy"><h2 id="maintenance-timing-heading">Scheduling around a Great Falls heating season.</h2><p>Late summer or early fall can be practical times to request service, but smoke season and freezing weather do not follow a fixed calendar. Confirm availability rather than waiting for a particular date. If the equipment has a fault, describe it when calling so the visit can be arranged appropriately.</p><p>For rural access near Belt, Cascade, or Simms, share directions, road or gate details, and the fuel type. For a dual-fuel system, ask whether the planned visit covers the furnace only or also the heat pump and changeover controls.</p><Link className="text-link" href="/services/heat-pumps/cold-climate">Understand heat pump and furnace coordination →</Link><h3>Before the visit</h3><ul><li>Have the furnace model, approximate age, symptoms, and recent service records available.</li><li>Clear access to the equipment and filter location, and secure pets.</li><li>Ask about the fee, included work, filter supply, and approval process for additional tasks.</li><li>Confirm the appointment window and service availability for your address.</li></ul></div>
      </section>
      <section className={`${styles.section} ${styles.ownerCare}`} aria-labelledby="maintenance-owner-heading">
        <div className="article-copy"><h2 id="maintenance-owner-heading">Between visits: simple care, clear limits.</h2><ul><li><strong>Filters:</strong> Follow the equipment and filter instructions. Inspect more often during heavy smoke or dust; replace with a compatible size and type rather than a universal calendar interval.</li><li><strong>Airflow and access:</strong> Keep registers, return grilles, and the equipment area clear. Do not store items against the furnace or venting.</li><li><strong>Outdoor vents:</strong> Check accessible openings from ground level. Clear only loose snow you can safely reach; do not climb, chip ice, alter terminations, or disconnect pipes.</li><li><strong>CO alarms:</strong> Test the alarm—not just its batteries—and follow its instructions for battery replacement, testing frequency, and end-of-life replacement.</li></ul><p>Leave internal components, fuel adjustments, wiring, and condensate-trap disassembly to a qualified technician. A maintenance appointment is not an emergency response: if you smell gas or suspect CO exposure, leave and call for help from a safe location.</p><p className={styles.source}>Further guidance: <a href={maintenanceSources.smoke}>EPA filter care during smoke events</a>; <a href={maintenanceSources.alarms}>Kidde CO alarm replacement guidance</a>.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="maintenance-warranty-heading">
        <div className="article-copy"><h2 id="maintenance-warranty-heading">Keep the records. Read the actual warranty.</h2><p>Save dated invoices, findings, and any available test readings with your equipment documents. Follow the manufacturer’s instructions and check registration deadlines, maintenance requirements, exclusions, and parts-versus-labor coverage.</p><p>A service record documents work performed; it does not promise a claim will be approved. Avoid assuming every furnace has ten-year coverage or requires one particular service provider.</p><p className={styles.source}>Consumer guidance: <a href={maintenanceSources.warranty}>FTC: warranties</a>.</p></div>
      </section>
      <div className="related-links"><Link className="text-link" href="/services/heating">Explore heating services →</Link><Link className="text-link" href="/services/heating/emergency-furnace-repair">No heat or a recurring fault? Repair guidance →</Link><Link className="text-link" href="/services/heating/furnace-installation">Considering replacement? Compare installation scope →</Link></div>
    </div>
    <section className="faq-section section" aria-labelledby="furnace-maintenance-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Seasonal service questions</p><h2 id="furnace-maintenance-faq-heading">Frequently asked questions about furnace maintenance in Great Falls.</h2></div><div>{maintenanceFaqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <FinalDarkCTA requestHref="/contact?intent=maintenance" requestLabel="Request a furnace tune-up ↗" title="Plan your next furnace check." subtitle="Tell us about your equipment, your address, and any changes you’ve noticed. Call to discuss maintenance pricing and availability, or send a service request. Online forms are not continuously monitored." />
  </>;
}
