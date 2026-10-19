import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { installationSources, installationPaths, estimateChecklist, installationFaqs } from "./content";
import styles from "./installation.module.css";

const route = "/services/cooling/ac-installation";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "AC Installation & Replacement in Great Falls, MT";
const description = "AC installation in Great Falls: room comfort, sizing, furnace compatibility, written installation scope, cost factors, and heat-pump comparisons.";
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

function getInstallationSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
    ...(verification.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.locality, addressRegion: siteConfig.region, postalCode: siteConfig.postalCode, addressCountry: "US" } } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, url: imageUrl, contentUrl: imageUrl, width: 1200, height: 900, name: "Residential outdoor AC condenser", description: imageAlt, caption: imageCaption },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, isPartOf: { "@id": `${baseUrl}/services/cooling#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(installationSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "AC installation and replacement in Great Falls, Montana", description, serviceType: "Air conditioning installation and replacement", provider, areaServed: { "@type": "AdministrativeArea", name: "Great Falls and Cascade County, Montana" }, mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(installationFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getInstallationSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cooling services", url: "/services/cooling" }, { name: "AC installation & replacement", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="ac-repair" size={48} />
        <p className="eyebrow">AC installation / Great Falls &amp; Cascade County</p>
        <h1>AC installation starts with the rooms you need to cool.</h1>
        <p>A useful proposal connects your comfort goal to the equipment, the house, and the work included. Compare central AC replacement, first-time cooling, and room-specific options with the full scope in view.</p>
        <div className="hero-actions"><Link className="button button-orange" href="/contact?intent=estimate">Request an installation estimate ↗</Link><a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Discuss your options: {siteConfig.phoneDisplay}</a></div>
        <p className={styles.notice}>Call to confirm estimate arrangements and current availability. An online inquiry does not reserve an appointment.</p>
      </div>
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our view / Start with the intended result</p>
          <h2>The proposal should name the comfort problem it is meant to solve.</h2>
          <p>At Great Falls Heating and Air, our installation perspective starts with three questions: which rooms need cooling, can the existing house support the proposed equipment, and what work is included? A model number alone cannot explain whether a warm bedroom, a new addition, or a whole-house cooling need has been addressed.</p>
          <p>For a home near Skyline Drive, describe a sunny room’s afternoon temperature and whether the rest of the house already stays comfortable. That is a different planning conversation from adding cooling throughout a home.</p>
          <p>For a property near Cascade, share the project address, access, electrical service information, and existing equipment before a visit. Permit jurisdiction and installation access need to be established for that property rather than assumed from a Great Falls mailing area.</p>
          <p>If your present AC has stopped working, start with the <Link className="text-link" href="/services/cooling/ac-repair">repair and diagnostic assessment</Link> before assuming it needs replacement.</p>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="09" subject="Residential outdoor AC condenser" dimensions="1200 × 900" src={imagePath} alt={imageAlt} caption={imageCaption} sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1200px) 45vw, 560px" />
          <aside className={styles.callout}><h2>Bring your room-by-room priorities.</h2><p>Tell us when rooms get warm, how you use them, whether doors stay closed, and what the current system does well. Share planned window, insulation, or room changes so the proposal reflects the house you intend to use.</p></aside>
        </div>
      </div>
      <section className={styles.section} aria-labelledby="ac-sizing-heading"><div className="article-copy">
        <h2 id="ac-sizing-heading">Size for the house, then check how air reaches each room.</h2>
        <p>Floor area and the old unit’s tonnage are starting information, not a complete selection method. A residential load calculation accounts for the building envelope, windows, orientation, air leakage, occupancy assumptions, and local design conditions. Equipment selection then considers manufacturer performance data and the calculated sensible and moisture loads.</p>
        <p>Great Falls’ dry summer weather does not make moisture load irrelevant or justify a universal airflow setting. Return paths, blower capability, coil condition, and duct restrictions affect delivered cooling. Ask what sizing information supports the proposal, which airflow changes are included, and how the installation will be checked.</p>
        <p className={styles.source}>Technical background: <a href={installationSources.sizing}>ACCA Manual J, Manual S, and duct-design guidance</a>; <a href={installationSources.airflow}>ACCA: cooling airflow depends on the application</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ac-paths-heading"><div className="article-copy"><h2 id="ac-paths-heading">Three installation paths worth separating.</h2><p>Each starts with a different existing system and a different intended result.</p></div><div className={styles.paths}>{installationPaths.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div></section>
      <section className={styles.section} aria-labelledby="ac-cost-heading"><div className="article-copy">
        <h2 id="ac-cost-heading">What changes the installed cost?</h2>
        <p>The useful comparison is the complete work needed for your house. Request a written estimate for your equipment and address, and use these factors to compare proposals:</p>
        <ul><li><strong>Equipment and compatibility:</strong> capacity, controls, indoor coil, blower, and the proposed indoor/outdoor combination.</li><li><strong>Air distribution:</strong> return air, supply changes, filter arrangement, and access to make those changes.</li><li><strong>Electrical work:</strong> available circuit capacity, wiring, disconnect, and any required panel work.</li><li><strong>Piping and drainage:</strong> approved line reuse or replacement, routing, insulation, condensate disposal, and protection.</li><li><strong>Placement and logistics:</strong> support, clearances, service access, removal, and agreed restoration.</li><li><strong>Permits and handoff:</strong> applicable permits, inspections, startup checks, documentation, and warranty responsibilities.</li></ul>
        <p>Within the city, use Great Falls’ applicable code and permit process. Outside a certified local jurisdiction, state permitting may apply. Confirm requirements for the specific address and work.</p>
        <p className={styles.source}>Official guidance: <a href={installationSources.city}>City of Great Falls code adoption</a>; <a href={installationSources.permits}>Montana mechanical permits and jurisdiction</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ac-scope-heading"><div className="article-copy"><h2 id="ac-scope-heading">Seven lines a written AC estimate should explain.</h2><p>Use this checklist to ask questions about the proposed work and differences between estimates.</p></div>
        <p id="ac-scope-help" className={styles.tableHelp}>On smaller screens, scroll the checklist sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="AC installation estimate checklist" aria-describedby="ac-scope-help" tabIndex={0}><table><caption>Installation scope / What to confirm in writing</caption><thead><tr><th scope="col">Installation scope</th><th scope="col">What to confirm</th></tr></thead><tbody>{estimateChecklist.map(([heading, body]) => <tr key={heading}><th scope="row">{heading}</th><td>{body}</td></tr>)}</tbody></table></div>
      </section>
      <section className={styles.section} aria-labelledby="ac-refrigerant-heading"><div className="article-copy">
        <h2 id="ac-refrigerant-heading">Know which refrigerant and components the proposal includes.</h2>
        <p>Ask for the actual refrigerant and exact equipment identification. Many newer systems use lower-GWP refrigerants such as R-32 or R-454B. Component compatibility, installation provisions, and any required safety features follow the chosen equipment’s instructions and applicable code.</p>
        <p>The calendar alone does not identify eligible inventory. EPA’s May 2026 final rule, effective July 27, permits continued installation of qualifying higher-GWP residential and light-commercial equipment manufactured or imported before January 1, 2025. Have the contractor establish eligibility for the proposed equipment. R-32 and R-454B are not drop-in substitutes for R-410A.</p>
        <p className={styles.source}>Source: <a href={installationSources.refrigerants}>EPA final rule: pre-2025 equipment inventory exception</a>. Refrigerant guidance reviewed October 19, 2026.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="ac-heat-pump-heading"><div className="article-copy">
        <h2 id="ac-heat-pump-heading">Compare a heat pump while the cooling scope is open.</h2>
        <p>A heat pump supplies cooling and can also supply heat. When AC already needs replacement, compare it with standard AC using the full installed scope, existing furnace compatibility, controls, documented equipment performance, and actual utility and fuel costs. Keep the backup-heating plan visible for Cascade County winter conditions.</p>
        <p>Standard AC may still fit your priorities. A rebate is a separate eligibility question, not proof that one installation costs less. NorthWestern’s current electric existing-home program has account, equipment, timing, and funding requirements; other utilities have their own rules.</p>
        <p className={styles.source}>Eligibility source: <a href={installationSources.rebate}>NorthWestern Energy’s 2026–2027 electric existing-home application</a>. Recheck before relying on an incentive.</p>
      </div><div className="related-links"><Link className="text-link" href="/services/heat-pumps/heat-pump-installation">Compare heat pump installation scope →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Compare heat pumps and furnace backup →</Link><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review current utility rebate requirements →</Link></div></section>
      <section className={styles.section} aria-labelledby="ac-handoff-heading"><div className="article-copy">
        <h2 id="ac-handoff-heading">Agree on installation access and the final handoff.</h2>
        <p>Before work, confirm the schedule, work areas, access, electrical interruptions, equipment removal, and responsibility for inspections. Existing conditions, parts, inspections, and weather can affect completion; confirm the actual plan rather than assuming a one-day installation.</p>
        <p>At handoff, ask for model information, owner instructions, thermostat operation, filter care, warranty and registration responsibilities, and startup records. If outdoor conditions prevent a required operating check, the written plan should explain the remaining check and follow-up.</p>
        <h3>Plan for smoke season alongside cooling.</h3><p>Cooling can help keep windows shut during wildfire smoke events. Fine-particle filtration still needs a suitable filter or air cleaner and compatible airflow; a standard ductless screen is not automatically a smoke filter. Include filtration requirements in the conversation before selecting equipment.</p>
        <p className={styles.source}>Background: <a href={installationSources.smoke}>EPA: wildfire smoke and indoor air quality</a>.</p>
        <p><Link className="text-link" href="/services/cooling/ac-maintenance">Plan ongoing AC maintenance and coil care →</Link></p><Link className="text-link" href="/services/cooling">Back to Great Falls cooling services and seasonal care →</Link>
      </div>{/* Add an owner-approved installation case only after the original comfort concern, equipment, scope, outcome, photo rights, location, and publication permission are confirmed. */}</section>
    </div>
    <section className="faq-section section" aria-labelledby="ac-installation-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before approving an installation</p><h2 id="ac-installation-faq-heading">Frequently asked questions about AC installation in Great Falls.</h2></div><div>{installationFaqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <FinalDarkCTA title="Tell us which rooms need better cooling." subtitle="Discuss the existing equipment, your comfort priorities, and an installation estimate. Call for current availability; online inquiries do not reserve appointments." requestHref="/contact?intent=estimate" requestLabel="Request an installation estimate ↗" />
  </>;
}
