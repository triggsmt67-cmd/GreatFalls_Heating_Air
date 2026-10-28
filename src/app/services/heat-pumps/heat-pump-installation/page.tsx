import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { GuideNavigation } from "@/components/ui/GuideNavigation";
import { RebateNotice } from "@/components/ui/RebateNotice";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { HeatingPlanDiagram } from "./HeatingPlanDiagram";
import { installationSources, installationOptions, scopeChecklist, installationFaqs } from "./content";
import styles from "./installation.module.css";

const route = "/services/heat-pumps/heat-pump-installation";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "Heat Pump Installation & Replacement in Great Falls, MT";
const description = "Heat pump installation in Great Falls: furnace compatibility, electrical assessment, winter placement, backup controls, written scope, and current utility incentives.";
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

function getInstallationSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, url: imageUrl, contentUrl: imageUrl, width: 1280, height: 960, name: "Outdoor heat pump beside a wood-sided home", description: imageAlt, caption: imageCaption },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, isPartOf: { "@id": `${baseUrl}/services/heat-pumps/cold-climate#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(installationSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Heat pump installation and replacement in Great Falls, Montana", description, serviceType: "Heat pump installation and replacement", provider, areaServed: [{ "@type": "City", name: "Great Falls, Montana" }, { "@type": "AdministrativeArea", name: "Cascade County, Montana" }], mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(installationFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getInstallationSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cold-climate heat pumps", url: "/services/heat-pumps/cold-climate" }, { name: "Heat pump installation & replacement", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="heat-pump" size={48} />
        <p className="eyebrow">Heat pump installation / Great Falls &amp; Cascade County</p>
        <h1>Plan your heat pump for a Montana winter.</h1>
        <p>Understand what stays, what changes, and how the finished system will heat your home when temperatures fall. Compare equipment, electrical work, winter placement, and backup controls in one written scope.</p>
        <div className="hero-actions"><RequestServiceLink className="button button-orange" intent="estimate">Request a heat pump estimate ↗</RequestServiceLink><Link className="text-link" href="/services/heat-pumps/cold-climate">Compare cold-climate heat pump options →</Link></div>
        <p className={styles.notice}>Call <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> for an estimate and availability. An online inquiry does not reserve an appointment.</p>
      </div>
      <GuideNavigation route="/services/heat-pumps/heat-pump-installation" />
      <div className="interior-grid">
        <div className="article-copy">
          <p className="eyebrow">Our approach / The whole installation</p>
          <h2>What needs to change along with the heat pump?</h2>
          <p>A heat pump quote should explain more than the new unit. What stays? What needs replacing? How will the house stay warm when it gets cold? You should know what the work involves and how to use the finished system.</p>
          <h3 id="great-falls-installation-example">Keeping a working furnace while replacing the cooling system</h3>
          <p>A Great Falls homeowner called after their 15-year-old AC failed during a July heat wave, leaving upstairs bedrooms above 80°F. They wanted quiet, reliable cooling and an option to reduce spring and fall gas use while keeping their six-year-old gas furnace.</p>
          <p>Our airflow checks supported the proposed 3-ton system, but we found corroded refrigerant piping and a sunken outdoor pad. We recommended a variable-speed heat pump with a compatible indoor coil, retaining the furnace for cold-weather backup.</p>
          <p>The installation included new refrigerant lines, a raised equipment base, updated drainage, and coordinated dual-fuel controls. At startup, we recorded a 19°F temperature drop across the indoor coil and demonstrated the thermostat settings to the homeowner. Heating-season savings will need follow-up; the initial measurements documented cooling performance.</p>
          <Link className="text-link" href="/services/cooling/ac-installation">Replacing cooling? Compare standard AC installation scope →</Link>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="10" subject="Outdoor heat pump beside a wood-sided home" dimensions="1280 × 960" src={imagePath} alt={imageAlt} caption={imageCaption} sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1200px) 45vw, 560px" />
          <aside className={styles.callout}><h2>Bring the equipment details and actual bills.</h2><p>Share furnace or air-handler model information, recent electric and fuel bills, rooms that need attention, planned building changes, and access details. Call to confirm availability for your project address.</p></aside>
        </div>
      </div>
      <section className={styles.section} aria-labelledby="hp-selection-heading"><div className="article-copy">
        <h2 id="hp-selection-heading">Start with the heating goal and the house’s demand.</h2>
        <p>A heat pump can be selected to cover different portions of a home’s heating demand. Before choosing equipment, decide how much heating it needs to provide. Then compare the home’s heating and cooling needs with what the model can deliver in cold weather. An advertised low operating temperature does not tell you how much heat a particular model will deliver to your home.</p>
        <p>Manual J calculates building loads; Manual S guides equipment selection using performance data. Ductwork, blower capability, cooling performance, and indoor distribution also need assessment. The old AC’s tonnage or your home’s floor area alone won’t tell you which equipment to choose.</p>
        <p className={styles.source}>Background: <a href={installationSources.sizing}>PNNL cold-climate sizing and selection</a>; <a href={installationSources.acca}>ACCA residential design manuals</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="hp-options-heading"><div className="article-copy"><h2 id="hp-options-heading">Define what stays and what changes.</h2><p>These starting points need different scopes. Compare the complete work and intended coverage.</p></div><div className={styles.paths}>{installationOptions.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div><div className="article-copy"><p><Link className="text-link" href="/services/heat-pumps/ductless-mini-splits">Plan ductless room coverage, indoor-unit placement, and routing →</Link></p><p>An all-electric installation is another option to assess where appropriate. Its heat delivery, electrical requirements, and any supplemental heating need their own plan. See the <Link className="text-link" href="/services/heat-pumps/cold-climate#heat-pump-options-heading">hub’s system comparison</Link> for the broader choices.</p></div></section>
      <section className={styles.section} aria-labelledby="hp-electrical-heading"><div className="article-copy">
        <h2 id="hp-electrical-heading">Check electrical capacity before promising what will fit.</h2>
        <p>The selected equipment’s requirements and the home’s existing electrical loads determine the assessment. Keeping gas or propane backup may avoid electric resistance backup loads, but you still need to check the available electrical capacity. Empty breaker spaces are not a load calculation.</p>
        <p>The estimate should identify circuit, disconnect, panel, or service work if needed, the responsible trade, and any coordination or inspection requirements. Ask for those items before comparing installation totals.</p>
        <p className={styles.source}>Technical background: <a href={installationSources.electrical}>DOE Building Science Education: electrical-panel assessment</a>.</p>
      </div></section>
      <HeatingPlanDiagram />
      <section className={styles.section} aria-labelledby="hp-backup-heading"><div className="article-copy">
        <h2 id="hp-backup-heading">Explain the backup settings and the reason for them.</h2>
        <p>The <strong>capacity balance point</strong> concerns heat-pump output versus house demand. The <strong>economic balance point</strong> compares heating costs. Equipment operating limits are a separate consideration. The selected control arrangement needs to account for these factors using manufacturer-approved operation.</p>
        <p>Ask when backup is expected to operate, how the controls coordinate the heat sources, and which settings the homeowner should use. Great Falls does not have one universal switchover temperature. Avoid changing lockouts or service settings without guidance for the equipment.</p>
        <p className={styles.source}>Sizing and backup context: <a href={installationSources.sizing}>PNNL cold-climate heat-pump selection guidance</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="hp-winter-heading"><div className="article-copy">
        <h2 id="hp-winter-heading">Place the outdoor unit for winter operation and future service.</h2>
        <p>The site assessment should address expected snow and drifting, roof runoff, defrost drainage, required airflow clearances, service access, noise, and vibration. Stand height, wall brackets, wind protection, and base-pan provisions depend on the model and location.</p>
        <p>Keep meltwater away from walkways where it could refreeze. Discuss where snow will be moved and whether the equipment will remain accessible. A fixed riser height does not resolve every site’s winter conditions.</p>
        <p className={styles.source}>Installation reference: <a href={installationSources.placement}>PNNL ductless heat-pump installation guidance</a>.</p>
      </div></section>
      <section className={styles.section} aria-labelledby="hp-scope-heading"><div className="article-copy"><h2 id="hp-scope-heading">Seven things to check in your heat pump quote.</h2><p>Use the actual scope to compare estimates. Equipment price, installation work, operating assumptions, and incentives are separate parts of that decision.</p></div>
        <p id="hp-scope-help" className={styles.tableHelp}>On smaller screens, scroll the checklist sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="Heat pump installation scope checklist" aria-describedby="hp-scope-help" tabIndex={0}><table><caption>Scope item / What to confirm in writing</caption><thead><tr><th scope="col">Scope item</th><th scope="col">What to confirm</th></tr></thead><tbody>{scopeChecklist.map(([heading, body]) => <tr key={heading}><th scope="row">{heading}</th><td>{body}</td></tr>)}</tbody></table></div>
      </section>
      <section className={styles.section} aria-labelledby="hp-startup-heading"><div className="article-copy">
        <h2 id="hp-startup-heading">Know what will be checked before the job is done.</h2>
        <p>Ask how the selected equipment will be installed and checked under its manufacturer’s requirements: approved refrigerant piping and joining methods, pressure/leak testing, evacuation and verification, charge adjustment, airflow, controls, and operating checks. The project plan should identify permits and inspection responsibilities for the address.</p>
        <p>Know the actual refrigerant and required safety provisions. EPA’s 2026 inventory exception permits continued installation of qualifying higher-GWP residential and light-commercial equipment manufactured or imported before January 1, 2025. The year alone won’t tell you which refrigerant a proposed system uses. Detection or mitigation requirements depend on the equipment and application.</p>
        <p>When the work is complete, request equipment records, relevant startup results, thermostat and backup instructions, filter and owner-care guidance, and the actual warranty and registration responsibilities. If weather prevents a required check, the plan should name the follow-up. Confirm timing for your project rather than assuming a one-day installation.</p>
        <p className={styles.source}>Official references: <a href={installationSources.refrigerants}>EPA’s 2026 inventory rule</a>; <a href={installationSources.city}>Great Falls code adoption</a>; <a href={installationSources.permits}>Montana mechanical permit jurisdiction</a>.</p>
      </div><div className="related-links"><Link className="text-link" href="/services/heat-pumps/repair-maintenance">Already own a heat pump? Review repair and maintenance →</Link><Link className="text-link" href="/services/heating/furnace-installation">Replacing the furnace too? Review its installation scope →</Link><Link className="text-link" href="/services/heating/emergency-furnace-repair">No heat with furnace backup? Read the safety guidance →</Link></div></section>
      <section className={styles.section} aria-labelledby="hp-rebate-heading"><div className="article-copy">
        <h2 id="hp-rebate-heading">Check the electric account before counting a rebate.</h2>
        <p>NorthWestern’s 2026–2027 electric existing-home application lists $450 for qualifying ducted or ductless heat pumps. The equipment requirement is ENERGY STAR rated <strong>or</strong> SEER2 ≥ 15.2 <strong>and</strong> HSPF2 ≥ 8.5. The account, existing-home, timing, documentation, and funding conditions still apply; a gas-only account doesn’t qualify you for this rebate.</p>
        <p>Sun River Electric’s separate air-source program requires approval before installation. Confirm the utility serving the property, current application, exact equipment, and required paperwork before ordering. Keep the full project price visible while eligibility is verified.</p>
        <RebateNotice /><p className={styles.source}>Sources reviewed October 23, 2026: <a href={installationSources.northwestern}>NorthWestern electric existing-home application</a>; <a href={installationSources.sunRiver}>Sun River air-source heat-pump program</a>.</p>
        <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review program dates, conditions, and rebate paperwork →</Link>
      </div>{/* The Great Falls example above was supplied and approved for publication by the user. Photo 10 is a separate supplied equipment image; no job-photo association or measured heating savings is claimed. */}</section>
    </div>
    <section className="faq-section section" aria-labelledby="hp-installation-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before approving installation</p><h2 id="hp-installation-faq-heading">Frequently asked questions about heat pump installation.</h2></div><div>{installationFaqs.map(({ question, answer, sources }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>{sources?.length ? <p className="faq-sources">Sources: {sources.map((source, index) => <span key={source.url}>{index > 0 ? "; " : ""}<a className="text-link" href={source.url}>{source.label}</a></span>)}</p> : null}</details>)}</div></div></section>
    <FinalDarkCTA title="Plan the whole installation before choosing equipment." subtitle="Discuss your existing system, electrical needs, winter location, and heating priorities. Call for an estimate and current availability." requestHref="/contact?intent=estimate" requestLabel="Request a heat pump estimate ↗" />
  </>;
}
