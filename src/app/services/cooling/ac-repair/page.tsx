import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { repairSources, repairSymptoms, homeownerChecks, repairDecisions, repairFaqs } from "./content";
import styles from "./repair.module.css";
import { DiagnosticDiagram } from "./DiagnosticDiagram";

const route = "/services/cooling/ac-repair";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "AC Repair & Diagnostics in Great Falls, MT";
const description = "AC repair in Great Falls: warm air, frozen coils, electrical symptoms, safe homeowner checks, and explained repair decisions for your cooling system.";
const imagePath = "/images/ac-repair-outdoor-condenser.webp";
const imageUrl = `${baseUrl}${imagePath}`;
const socialImageUrl = `${baseUrl}/images/ac-repair-outdoor-condenser-social.jpg`;
const imageAlt = "Outdoor central air conditioner on a support pad beside a light-sided home and garden bed.";
const imageCaption = "Residential outdoor condenser with the top fan grille and coil cabinet visible.";
const baseMetadata = buildMetadata({ title, description, canonicalPath: route });
export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [{ url: socialImageUrl, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { ...baseMetadata.twitter, images: [{ url: socialImageUrl, alt: imageAlt }] },
};

function getRepairSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
    ...(verification.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.locality, addressRegion: siteConfig.region, postalCode: siteConfig.postalCode, addressCountry: "US" } } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, url: imageUrl, contentUrl: imageUrl, width: 1200, height: 900, name: "Residential outdoor AC condenser", description: imageAlt, caption: imageCaption },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, isPartOf: { "@id": `${baseUrl}/services/cooling#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(repairSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Residential AC repair & diagnostics in Great Falls, Montana", description, serviceType: "Air conditioning repair and diagnostics", provider, areaServed: { "@type": "AdministrativeArea", name: "Great Falls and Cascade County, Montana" }, mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(repairFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getRepairSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cooling services", url: "/services/cooling" }, { name: "AC repair & diagnostics", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="ac-repair" size={48} />
        <p className="eyebrow">AC repair / Great Falls &amp; Cascade County</p>
        <h1>AC repair in Great Falls starts with finding the cause.</h1>
        <p>Warm air, ice, or an outdoor unit that won’t start? Understand the test findings, proposed work, and repair price before deciding what comes next.</p>
        <div className="hero-actions"><a className="button button-orange" href={`tel:${siteConfig.phoneE164}`}>Call {siteConfig.phoneDisplay} for AC service</a><Link className="text-link" href="/contact?intent=general">Request an AC diagnostic ↗</Link></div>
        <p className={styles.notice}>Call for current availability and diagnostic fees. An online request does not reserve an appointment; forms are not continuously monitored.</p>
      </div>
      <section className={`safety-panel ${styles.safety}`} aria-labelledby="ac-ice-heading">
        <h2 id="ac-ice-heading">Visible ice? Stop cooling and call for guidance.</h2>
        <p>Switch cooling <strong>OFF</strong>. Use fan-only mode only if the blower operates normally and your equipment instructions allow it. Do not chip ice, apply heat, remove panels, or keep restarting cooling. Thawing time varies, and the cause still needs assessment.</p>
        <p>For smoke, sparking, a burning smell, or water near electrical equipment, stop troubleshooting and stay clear. For fire or immediate danger, leave and call 911.</p>
        <p className={styles.source}>Background: <a href={repairSources.frozen}>Carrier: frozen AC coils and underlying causes</a>.</p>
      </section>
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our view / Repair decisions</p>
          <h2>A repair should explain the cause and the next check.</h2>
          <p>A humming condenser or warm vent does not name the failed part. At Great Falls Heating and Air, the repair conversation starts with what testing establishes, the work proposed, and its price. We also explain how operation will be checked afterward and any concern that needs further attention.</p>
          <h3>Useful observations from your home</h3>
          <p>For a Riverview home, a whole-house loss of cooling raises different questions from one room staying warm while the rest cools normally. Tell us which situation you have, when it began, and whether anything changed with filters, thermostat settings, or room use.</p>
          <p>For a property near Sand Coulee, share directions, access details, and the equipment model when requesting service. Location helps arrange the visit; it does not identify the fault or establish parts availability.</p>
          <p>During smoke events, inspect filter condition more often while following the equipment instructions. Changing to a more restrictive filter also belongs in the service history. Fine-smoke filtration and cooling are related planning questions, with guidance on our <Link className="text-link" href="/services/cooling#cooling-smoke-heading">cooling and indoor-air page</Link>.</p>
          <p className={styles.source}>Filter guidance: <a href={repairSources.smoke}>EPA: wildfire smoke and indoor air quality</a>.</p>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="09" subject="Residential outdoor AC condenser" dimensions="1200 × 900" src={imagePath} alt={imageAlt} caption={imageCaption} sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1200px) 45vw, 560px" />
          <aside className={styles.callout}><h2>Before the diagnostic visit</h2><p>Have the model, approximate age, symptoms, and recent service information ready. Confirm the diagnostic fee, included work, and appointment window. Parts and additional testing may need a separate discussion.</p><a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Discuss the problem at {siteConfig.phoneDisplay} →</a></aside>
        </div>
      </div>
      <DiagnosticDiagram />
      <section className={styles.section} aria-labelledby="ac-symptoms-heading">
        <div className="article-copy"><h2 id="ac-symptoms-heading">What the symptoms help us investigate.</h2><p>These are starting points for testing, not remote diagnoses or instructions to open the equipment.</p></div>
        <div className={styles.cards}>{repairSymptoms.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="ac-owner-heading">
        <div className="article-copy"><h2 id="ac-owner-heading">Safe observations before calling for AC service.</h2><p>Keep checks to accessible homeowner controls and the tasks your owner instructions permit. Stop if there are danger signs or you are unsure.</p></div>
        <ol className={styles.checks}>{homeownerChecks.map(([heading, body]) => <li key={heading}><h3>{heading}</h3><p>{body}</p></li>)}</ol>
      </section>
      <section className={styles.section} aria-labelledby="ac-findings-heading">
        <div className="article-copy"><h2 id="ac-findings-heading">What a useful diagnostic explanation includes.</h2><ol><li><strong>The evidence:</strong> The observed symptom and relevant operating tests, with any limits caused by ice or test conditions.</li><li><strong>The proposed work:</strong> The fault being addressed, compatible parts, repair price, exclusions, and any separate diagnosis or follow-up.</li><li><strong>The operation check:</strong> How the repaired equipment will be checked against its requirements and whether the original symptom has been resolved.</li></ol><p>If cooling equipment operates normally but one room remains uncomfortable, discuss a separate airflow or room assessment rather than assuming another replacement part will solve it.</p></div>
        {/* Add a real AC case here only after tests, work, outcome, location, photo rights, and publication permission are confirmed. */}
      </section>
      <section className={styles.section} aria-labelledby="ac-decision-heading">
        <div className="article-copy"><h2 id="ac-decision-heading">Compare the finding before choosing repair or replacement.</h2><p>Use the actual diagnosis, condition, repair history, parts availability, and written scope. An age cutoff or an advertised incentive cannot make the decision for your home.</p></div>
        <p id="ac-table-help" className={styles.tableHelp}>On smaller screens, scroll the comparison sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="AC repair findings and decisions" aria-describedby="ac-table-help" tabIndex={0}><table><caption>Finding / What else to check / Options to compare</caption><thead><tr><th scope="col">Finding</th><th scope="col">What else to check</th><th scope="col">Options to compare</th></tr></thead><tbody>{repairDecisions.map(([finding, checks, options]) => <tr key={finding}><th scope="row">{finding}</th><td>{checks}</td><td>{options}</td></tr>)}</tbody></table></div>
        <div className={styles.callout}><h2>Low refrigerant deserves an explanation.</h2><p>Ask why the charge is low, what investigation is proposed, and which repair options apply. EPA advises locating and repairing leaks rather than repeatedly topping off leaking equipment.</p><p className={styles.source}>Source: <a href={repairSources.refrigerants}>EPA: homeowner refrigerant and servicing questions</a>.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="ac-options-heading">
        <div className="article-copy"><h2 id="ac-options-heading">When a wider equipment comparison makes sense.</h2><p>A major failure or recurring repair history can justify comparing repair with a complete replacement. Review indoor and outdoor compatibility, ductwork, electrical work, controls, and applicable warranties in the full installed scope.</p><p>Existing R-410A equipment can continue to be serviced under applicable requirements. R-22 equipment does not automatically require replacement either, though repair feasibility and cost still need assessment. New refrigerants belong in equipment designed for them.</p><p className={styles.source}>Official background: <a href={repairSources.transition}>EPA: HFC transition questions</a>; <a href={repairSources.refrigerants}>existing R-22 equipment</a>. Reviewed October 19, 2026.</p><p>If cooling needs replacement, a heat pump may be worth comparing alongside standard AC. Keep the complete installation price and operating assumptions visible; confirm any incentive separately for the utility account and exact project.</p></div>
        <div className="related-links"><Link className="text-link" href="/services/cooling/ac-installation">Compare AC installation scope →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Compare heat pumps and furnace backup →</Link><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Check utility eligibility and rebate paperwork →</Link></div>
      </section>
      <section className={styles.section} aria-labelledby="ac-availability-heading"><div className="article-copy"><h2 id="ac-availability-heading">Arrange the visit around your equipment and address.</h2><p>Call to confirm AC repair availability in Great Falls and surrounding Cascade County communities. Share rural access details and describe any unusual noise, water, or visible ice. A submitted form is an inquiry, not a confirmed appointment.</p><Link className="text-link" href="/services/cooling/ac-maintenance">Plan seasonal maintenance after the repair →</Link><p><Link className="text-link" href="/services/cooling">Back to cooling services, seasonal care, and room comfort →</Link></p></div></section>
    </div>
    <section className="faq-section section" aria-labelledby="ac-repair-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before approving a repair</p><h2 id="ac-repair-faq-heading">Frequently asked questions about AC repair in Great Falls.</h2></div><div>{repairFaqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <FinalDarkCTA title="Tell us what your AC is doing." subtitle="Describe the airflow, ice, noise, and rooms affected. Call for diagnostic pricing and availability. Online forms are not continuously monitored." requestHref="/contact?intent=general" requestLabel="Request an AC diagnostic ↗" />
  </>;
}
