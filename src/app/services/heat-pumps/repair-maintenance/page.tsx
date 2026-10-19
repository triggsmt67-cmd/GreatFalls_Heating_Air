import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { OperatingPatternDiagram } from "./OperatingPatternDiagram";
import { serviceSources, serviceSymptoms, maintenanceChecks, serviceFaqs } from "./content";
import styles from "./service.module.css";

const route = "/services/heat-pumps/repair-maintenance";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "Heat Pump Repair & Maintenance in Great Falls, MT";
const description = "Heat pump repair and maintenance in Great Falls: defrost patterns, persistent ice, backup heat, ductless care, explained findings, and seasonal service.";
const imagePath = "/images/cold-climate-heat-pump-installation.webp";
const imageUrl = `${baseUrl}${imagePath}`;
const socialImageUrl = `${baseUrl}/images/cold-climate-heat-pump-social.jpg`;
const imageAlt = "Mitsubishi Electric outdoor heat pump on raised supports beside a wood-sided home, with covered refrigerant lines running up the wall.";
const imageCaption = "Outdoor heat pump on raised supports, with covered refrigerant lines routed along the exterior wall.";
const baseMetadata = buildMetadata({ title, description, canonicalPath: route });
export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [{ url: socialImageUrl, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { ...baseMetadata.twitter, images: [{ url: socialImageUrl, alt: imageAlt }] },
};

function getServiceSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
    ...(verification.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.locality, addressRegion: siteConfig.region, postalCode: siteConfig.postalCode, addressCountry: "US" } } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, url: imageUrl, contentUrl: imageUrl, width: 1280, height: 960, name: "Outdoor heat pump beside a wood-sided home", description: imageAlt, caption: imageCaption },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, isPartOf: { "@id": `${baseUrl}/services/heat-pumps/cold-climate#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(serviceSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Heat pump repair and maintenance in Great Falls, Montana", description, serviceType: "Heat pump repair and maintenance", provider, areaServed: [{ "@type": "City", name: "Great Falls, Montana" }, { "@type": "AdministrativeArea", name: "Cascade County, Montana" }], mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(serviceFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cold-climate heat pumps", url: "/services/heat-pumps/cold-climate" }, { name: "Heat pump repair & maintenance", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="maintenance" size={48} />
        <p className="eyebrow">Heat pump service / Great Falls &amp; Cascade County</p>
        <h1>Heat pump repair and maintenance with clear answers about what changed.</h1>
        <p>Persistent ice, unfamiliar backup-heat use, or rooms losing comfort? Describe the operating pattern, understand the findings, and review the proposed work before deciding what comes next.</p>
        <div className="hero-actions"><a className="button button-orange" href={`tel:${siteConfig.phoneE164}`}>Call for heat pump service: {siteConfig.phoneDisplay}</a><Link className="text-link" href="/contact?intent=maintenance">Request seasonal maintenance ↗</Link></div>
        <p className={styles.notice}>Call for diagnostic fees, included service, and availability. For loss of heat, call first; online requests do not reserve appointments and forms are not continuously monitored.</p>
      </div>
      <section className={`safety-panel ${styles.safety}`} aria-labelledby="hp-service-safety-heading"><h2 id="hp-service-safety-heading">Gas odor, a CO alarm, fire, or electrical danger?</h2><p>For gas odor, a sounding CO alarm, fire, or immediate danger, leave and call 911 from a safe place. Stay clear of sparking, suspected smoke, burning smells, or water near electrical equipment. Stop troubleshooting; do not approach a cloud to identify it.</p><p>For a fan striking ice or new grinding, stop using the affected equipment through normal controls if safe and call promptly for guidance. Do not chip ice, apply heat, remove panels, or keep resetting the system.</p></section>
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our view / The pattern before the part</p>
          <h2>Explain what changed before choosing a repair.</h2>
          <p>At Great Falls Heating and Air, our heat-pump service perspective connects the operating pattern with relevant tests and an explained recommendation. A fan pause, a thermostat message, and a cold room are useful observations; none identifies a failed part by itself.</p>
          <h3>A Great Falls winter planning example.</h3><p>Consider a homeowner who notices vapor and a pause at the outdoor unit as conditions shift after a Chinook warm-up. If frost clears and normal heating returns, that pattern may fit defrost. If ice remains and room temperature keeps falling, the service conversation changes. Record the conditions and behavior rather than judging by a cloud alone.</p>
          <p>For a property near Vaughn, share directions, access, the exact equipment, and whether backup is a furnace, electric heat, or another arrangement. The address does not establish the cause or parts availability. These are illustrative service situations, not completed customer jobs.</p>
          <p className={styles.source}>Operating context: <a href={serviceSources.defrost}>Trane: defrost behavior and when to call</a>; <a href={serviceSources.symptoms}>Carrier: persistent ice and heating problems</a>.</p>
        </div>
        <div className="service-hub-media"><PhotoPlaceholder slot="10" subject="Outdoor heat pump beside a wood-sided home" dimensions="1280 × 960" src={imagePath} alt={imageAlt} caption={imageCaption} sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1200px) 45vw, 560px" /><aside className={styles.callout}><h2>Have a few details ready.</h2><p>Share indoor and outdoor model information, displayed codes, indoor temperature, weather, when the change began, and any recent filter, schedule, or service changes. Confirm the diagnostic scope and fee when booking.</p><Link className="text-link" href="/services/heating/emergency-furnace-repair">No heat with furnace backup? Read the safety guidance →</Link></aside></div>
      </div>
      <OperatingPatternDiagram />
      <p className={styles.source}>Diagram background: <a href={serviceSources.defrost}>manufacturer defrost guidance</a>. Use the owner instructions for your model.</p>
      <section className={styles.section} aria-labelledby="hp-service-symptoms-heading"><div className="article-copy"><h2 id="hp-service-symptoms-heading">Symptoms that help focus the assessment.</h2><p>Report what you can observe safely. Testing and equipment documentation establish what needs attention.</p></div><div className={styles.cards}>{serviceSymptoms.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div></section>
      <section className={styles.section} aria-labelledby="hp-backup-service-heading"><div className="article-copy"><h2 id="hp-backup-service-heading">Backup heat is part of a plan, not a diagnosis.</h2><p>Auxiliary or furnace backup may operate because of demand, configured controls, or operating conditions. A change in use deserves context: did the weather change, did the thermostat schedule change, and is the home maintaining temperature?</p><p>Ask how the actual controls are configured and whether testing supports a fault or a setting change. Avoid disabling backup, forcing emergency heat, or changing lockouts without the owner instructions or professional guidance for your system.</p><p className={styles.source}>Background: <a href={serviceSources.auxiliary}>Carrier: auxiliary heat and system-specific operation</a>.</p><Link className="text-link" href="/services/heat-pumps/heat-pump-installation#hp-backup-heading">Review the heating and backup control plan →</Link></div></section>
      <section className={styles.section} aria-labelledby="hp-owner-observations-heading"><div className="article-copy"><h2 id="hp-owner-observations-heading">Useful checks stay outside the equipment cabinet.</h2><ol><li><strong>Read the thermostat:</strong> note mode, setpoint, schedule, indoor temperature, and alerts without changing service settings.</li><li><strong>Note airflow:</strong> identify affected rooms or indoor units. Inspect accessible filters and clear grilles only as the owner instructions permit.</li><li><strong>Observe from a safe position:</strong> note snow, debris, visible ice, noise, and drainage. Do not reach through grilles or remove covers.</li><li><strong>Keep a short history:</strong> record when the issue began and recent filter, room-use, schedule, or service changes.</li></ol><p>Do not open refrigerant connections, bypass protection, force defrost, or repeatedly reset a breaker. If the system is losing heat or you are unsure what is safe, call for guidance.</p></div></section>
      <section className={styles.section} aria-labelledby="hp-service-findings-heading"><div className="article-copy"><h2 id="hp-service-findings-heading">A repair explanation should connect three things.</h2><ol><li><strong>Finding:</strong> what the symptoms and relevant tests establish, with conditions and limits explained.</li><li><strong>Proposed work:</strong> what fault the work addresses, compatible parts, price, exclusions, and any separate testing or follow-up.</li><li><strong>Operation check:</strong> how the equipment will be checked afterward and what remains to be verified under different weather conditions.</li></ol><p>Parts, documentation, warranty terms, and test conditions may affect the next step. Confirm availability and follow-up arrangements rather than assuming a code identifies a part or a first visit completes every repair.</p></div>{/* Add a real service case only after symptoms, tests, diagnosis, work, outcome, location, photo rights, and publication permission are confirmed. Photo 10 is an equipment illustration, not a repair-event photo. */}</section>
      <section className={styles.section} aria-labelledby="hp-maintenance-heading"><div className="article-copy"><h2 id="hp-maintenance-heading">Plan maintenance around heating and cooling use.</h2><p>Follow the model’s maintenance instructions and discuss seasonal timing. Confirm included inspection, cleaning, operating checks, and records before booking. Weather, access, and equipment condition affect which tests can be completed.</p></div><p id="hp-maintenance-help" className={styles.tableHelp}>On smaller screens, scroll the checklist sideways.</p><div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="Heat pump maintenance checks and follow-up" aria-describedby="hp-maintenance-help" tabIndex={0}><table><caption>Maintenance area / What to assess / What to explain</caption><thead><tr><th scope="col">Maintenance area</th><th scope="col">What to assess</th><th scope="col">What to explain</th></tr></thead><tbody>{maintenanceChecks.map(([area, assess, explain]) => <tr key={area}><th scope="row">{area}</th><td>{assess}</td><td>{explain}</td></tr>)}</tbody></table></div><p className={styles.source}>Reference: <a href={serviceSources.maintenance}>Trane heat-pump maintenance guidance</a>. Apply your model’s instructions and actual warranty terms.</p></section>
      <section className={styles.section} aria-labelledby="hp-ductless-maintenance-heading"><div className="article-copy"><h2 id="hp-ductless-maintenance-heading">Ductless and furnace-backed systems need different access.</h2><p>Ductless indoor filters, blowers, coils, drains, and any fitted pump need model-appropriate care. A central system also depends on its indoor coil, blower, ducts, and filter arrangement. Confirm what is included and whether deep cleaning or difficult access is separate work.</p><p>During wildfire smoke events, inspect compatible filters more frequently and replace or clean as instructed. Standard ductless screens are not automatically fine-smoke filters; consider suitable room air cleaning separately.</p><p className={styles.source}>Filter guidance: <a href={serviceSources.smoke}>EPA wildfire smoke and indoor air quality</a>.</p></div><div className="related-links"><Link className="text-link" href="/services/cooling/ac-maintenance">Summer coil care, drainage, and filtration →</Link><Link className="text-link" href="/services/heat-pumps/ductless-mini-splits">Review ductless room coverage and maintenance access →</Link></div></section>
      <section className={styles.section} aria-labelledby="hp-repair-decision-heading"><div className="article-copy"><h2 id="hp-repair-decision-heading">Compare repair and replacement using the findings.</h2><p>The actual fault, remaining condition, repair history, parts availability, written repair price, and applicable warranty should inform the choice. If equipment operates but rooms remain uncomfortable, assess coverage or distribution rather than assuming a replacement part or larger outdoor unit will solve it.</p><p>When replacement warrants discussion, compare the complete installation scope and projected operating assumptions. Age alone or an advertised incentive cannot decide the result for your home.</p></div><div className="related-links"><Link className="text-link" href="/services/heat-pumps/heat-pump-installation">Compare heat pump installation and replacement scope →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Back to Great Falls heat-pump services →</Link></div></section>
    </div>
    <section className="faq-section section" aria-labelledby="hp-service-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Operation and service questions</p><h2 id="hp-service-faq-heading">Frequently asked questions about heat pump repair and maintenance.</h2></div><div>{serviceFaqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <FinalDarkCTA title="Tell us what changed and when." subtitle="Describe the weather, alerts, room comfort, and equipment behavior. Call for diagnostic scope, fees, and availability; online forms are not continuously monitored." requestHref="/contact?intent=general" requestLabel="Request heat pump service ↗" />
  </>;
}
