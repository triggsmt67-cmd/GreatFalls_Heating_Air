import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { GuideNavigation } from "@/components/ui/GuideNavigation";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { MaintenanceDiagram } from "./MaintenanceDiagram";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { maintenanceSources, maintenanceChecks, ownerCare, maintenanceFaqs } from "./content";
import styles from "./maintenance.module.css";

const route = "/services/cooling/ac-maintenance";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "AC Maintenance & Seasonal Tune-Ups in Great Falls, MT";
const description = "AC maintenance in Great Falls: cottonwood coil care, airflow and filter checks, seasonal planning, drainage, explained findings, and equipment-specific service.";
const imagePath = "/images/ac-repair-outdoor-condenser.webp";
const imageUrl = `${baseUrl}${imagePath}`;
const socialImageUrl = `${baseUrl}/images/ac-repair-outdoor-condenser-social.jpg`;
const imageAlt = "Outdoor central air conditioner on a support pad beside a light-sided home and garden bed.";
const imageCaption = "Outdoor condenser beside a garden bed. Coil condition, vegetation clearance, and service access are maintenance considerations.";
const baseMetadata = buildMetadata({ title, description, canonicalPath: route });
export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [{ url: socialImageUrl, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { ...baseMetadata.twitter, images: [{ url: socialImageUrl, alt: imageAlt }] },
};

function getMaintenanceSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, url: imageUrl, contentUrl: imageUrl, width: 1200, height: 900, name: "Residential outdoor AC condenser", description: imageAlt, caption: imageCaption },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, isPartOf: { "@id": `${baseUrl}/services/cooling#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(maintenanceSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "AC maintenance and seasonal tune-ups in Great Falls, Montana", description, serviceType: "Air conditioning maintenance and coil care", provider, areaServed: { "@type": "AdministrativeArea", name: "Great Falls and Cascade County, Montana" }, mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(maintenanceFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getMaintenanceSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cooling services", url: "/services/cooling" }, { name: "AC maintenance & tune-ups", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="ac-repair" size={48} />
        <p className="eyebrow">Seasonal cooling service / Great Falls &amp; Cascade County</p>
        <h1>Get your AC ready for the next hot spell.</h1>
        <p>Plan seasonal service around your equipment and what it has been exposed to. Understand the cleaning needed, the checks performed, and any work that needs a separate decision.</p>
        <div className="hero-actions"><RequestServiceLink className="button button-orange" intent="maintenance">Request an AC tune-up ↗</RequestServiceLink><Link className="text-link" href="/services/cooling/ac-repair">AC already blowing warm air or icing up? →</Link></div>
        <p className={styles.notice}>Call <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> for current pricing, included service, and availability. An online request does not reserve an appointment; forms are not continuously monitored.</p>
      </div>
      <GuideNavigation route="/services/cooling/ac-maintenance" />
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our approach / Condition and season</p>
          <h2>What has your AC been through since its last check?</h2>
          <p>Cottonwood, dust, smoke, and months of use can leave different problems behind. We look at the outdoor unit, indoor airflow, drainage, and how the system runs. You should know what we found and what needs attention.</p>
          <p>Cottonwood fluff on the outdoor coil and smoke-related indoor filter care involve different parts of the system. A clean-looking outdoor cabinet cannot tell you whether the indoor filter, condensate drain, or controls need attention.</p>
          <p>For a Great Falls home with cottonwoods nearby, describe how quickly debris collects on the coil. For a property near Fort Shaw, share directions, access, the equipment model, and the water source if deposits are a concern. The equipment and its condition determine the work needed.</p>
          <p className={styles.source}>Cleaning and filtration background: <a href={maintenanceSources.coils}>Carrier coil-care guidance</a>; <a href={maintenanceSources.smoke}>EPA wildfire smoke and indoor air guidance</a>.</p>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="09" subject="Residential outdoor AC condenser" dimensions="1200 × 900" src={imagePath} alt={imageAlt} caption={imageCaption} sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1200px) 45vw, 560px" />
        <aside className={styles.callout} aria-labelledby="ac-season-heading">
          <p className="eyebrow">Plan the visit</p><h2 id="ac-season-heading">Before the heat, then as conditions change.</h2>
          <p><strong>Before sustained cooling demand:</strong> arrange seasonal service and discuss any concerns left from last summer. Some operating checks need suitable outdoor conditions.</p>
          <p><strong>After debris builds up:</strong> reassess the outdoor coil if cottonwood or dust accumulates after the visit. Cleaning needs vary with exposure and coil construction.</p>
          <p><strong>During smoke events:</strong> inspect compatible indoor filters more frequently and replace when needed. Do not wait for a calendar reminder if airflow or cooling changes.</p>
          <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Discuss timing and service scope →</a>
        </aside>
        </div>
      </div>
      <MaintenanceDiagram />
      <section className={styles.section} aria-labelledby="ac-maintenance-checks-heading">
        <div className="article-copy"><h2 id="ac-maintenance-checks-heading">What to clean, check, and explain.</h2><p>Confirm the included work for your model before booking. This checklist helps connect each area to its purpose and possible follow-up; cleaning depth, readings, and access requirements vary by system.</p></div>
        <p id="ac-maintenance-table-help" className={styles.tableHelp}>On smaller screens, scroll the checklist sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="AC maintenance checks and follow-up" aria-describedby="ac-maintenance-table-help" tabIndex={0}><table><caption>Check / What it tells you / Possible follow-up</caption><thead><tr><th scope="col">Check</th><th scope="col">What it tells you</th><th scope="col">Possible follow-up</th></tr></thead><tbody>{maintenanceChecks.map(([check, purpose, followup]) => <tr key={check}><th scope="row">{check}</th><td>{purpose}</td><td>{followup}</td></tr>)}</tbody></table></div>
        <p className={styles.source}>Technical context: <a href={maintenanceSources.airflow}>ACCA: airflow depends on the application</a>. Use model-specific requirements rather than a universal airflow or temperature-drop target.</p>
      </section>
      <section className={styles.section} aria-labelledby="ac-coil-care-heading"><div className="article-copy">
        <h2 id="ac-coil-care-heading">Cottonwood cleaning and sprinkler deposits need the right method.</h2>
        <p>Matted debris and visible deposits are reasons to inspect the coil and choose an appropriate cleaning method. Access, rinse direction, cleaners, and any panel removal depend on the equipment and coil manufacturer’s instructions. Deep cleaning may require a separate scope.</p>
        <p>The City of Great Falls reports municipal water hardness of 127–167 milligrams per liter, or 7.4–9.8 grains per gallon. If irrigation repeatedly wets the condenser, redirect the sprinkler and report deposits. Follow the coil’s approved cleaning method. For rural properties, confirm the water source and assess visible deposits before choosing a treatment.</p>
        <p className={styles.source}>Sources: <a href={maintenanceSources.water}>City of Great Falls water-treatment questions</a>; <a href={maintenanceSources.coils}>Carrier: coil-specific cleaning guidance</a>. Reviewed October 19, 2026.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ac-owner-care-heading"><div className="article-copy"><h2 id="ac-owner-care-heading">Useful observations between maintenance visits.</h2><p>Follow your owner instructions and keep homeowner tasks to accessible controls and permitted care. Leave electrical testing, refrigerant work, cabinet disassembly, and unfamiliar cleaning to a qualified technician.</p></div><div className={styles.care}>{ownerCare.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
        <p className={styles.source}>Filter guidance: <a href={maintenanceSources.smoke}>EPA recommends MERV 13 or the highest efficiency the system can accommodate, with frequent inspection during smoke events</a>.</p>
      </section>
      <section className={styles.section} aria-labelledby="ac-ductless-care-heading"><div className="article-copy">
        <h2 id="ac-ductless-care-heading">Ductless systems need their own maintenance plan.</h2>
        <p>A wall-mounted indoor unit has different filter, blower, coil, and drainage arrangements from a furnace-based central system. Follow its instructions for accessible washable filters. Ask whether indoor blower or coil cleaning is indicated and whether it is included in the visit or separately priced.</p>
        <p>Musty odors, poor airflow, visible contamination, and drainage trouble deserve assessment; they do not establish a universal cleaning interval or a particular fault. Deep cleaning needs model-appropriate access and protection for electronics and the surrounding room.</p>
        <p><Link className="text-link" href="/services/heat-pumps/repair-maintenance">Heat pump operating problems or winter maintenance? →</Link></p><p><Link className="text-link" href="/services/heat-pumps/ductless-mini-splits">Planning a new mini-split? Review room coverage and service access →</Link></p><Link className="text-link" href="/services/heat-pumps/cold-climate">Review ductless and central heat-pump options →</Link>
      </div></section>
      <section className={styles.section} aria-labelledby="ac-seasonal-storage-heading"><div className="article-copy">
        <h2 id="ac-seasonal-storage-heading">Seasonal AC and a working heat pump need different winter care.</h2>
        <p>Follow the exact model’s instructions on covering a seasonal air conditioner while it is shut down, and remove any permitted cover before operation. A heat pump running for winter heating needs unobstructed airflow. Do not wrap it or improvise a solid cover or weighted plywood over it.</p>
        <p>Discuss falling ice, drifting snow, or service-access concerns at the actual equipment location.</p><p className={styles.source}>Manufacturer guidance: <a href={maintenanceSources.covers}>Trane seasonal AC care</a>; <a href={maintenanceSources.winter}>heat-pump winter preparation</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ac-records-heading"><div className="article-copy">
        <h2 id="ac-records-heading">Know what was done and what still needs attention.</h2>
        <p>Ask for a dated record of completed work, available measurements, relevant test conditions, and anything that could not be checked. Separate owner care, recommended cleaning, further diagnosis, and proposed repairs so each next step has a clear purpose and price.</p>
        <p>Keep records with the equipment documents and read the actual warranty. Maintenance does not guarantee against future failures or promise that a warranty claim will be approved. Registration, exclusions, parts and labor coverage, and maintenance requirements vary.</p>
        <p className={styles.source}>Example manufacturer terms: <a href={maintenanceSources.warranty}>Trane warranty and registration guidance</a>. Refer to your own equipment’s warranty.</p>
        <p>If the system is already struggling, use the repair page to describe the symptoms. If assessment points toward replacement, compare all the installation work rather than assuming a tune-up or new outdoor unit will solve a room-comfort problem.</p>
      </div><div className="related-links"><Link className="text-link" href="/services/cooling/ac-repair">AC symptoms and repair decisions →</Link><Link className="text-link" href="/services/cooling/ac-installation">AC installation and written estimate scope →</Link><Link className="text-link" href="/services/cooling">Back to Great Falls cooling services →</Link></div>
      {/* Add a real maintenance record or job photo only after checks, findings, outcome, location, photo rights, and publication permission are confirmed. */}
      </section>
    </div>
    <section className="faq-section section" aria-labelledby="ac-maintenance-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Seasonal service questions</p><h2 id="ac-maintenance-faq-heading">Frequently asked questions about AC maintenance.</h2></div><div>{maintenanceFaqs.map(({ question, answer, sources }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>{sources?.length ? <p className="faq-sources">Sources: {sources.map((source, index) => <span key={source.url}>{index > 0 ? "; " : ""}<a className="text-link" href={source.url}>{source.label}</a></span>)}</p> : null}</details>)}</div></div></section>
    <FinalDarkCTA title="Plan the next cooling season around your system." subtitle="Discuss your equipment, recent changes, and seasonal maintenance needs. Call to confirm included work, pricing, and availability." requestHref="/contact?intent=maintenance" requestLabel="Request an AC tune-up ↗" />
  </>;
}
