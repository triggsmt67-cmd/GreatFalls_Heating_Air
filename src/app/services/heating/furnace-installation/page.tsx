import { ServiceIntroTrust } from "@/components/ui/ServiceIntroTrust";
import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { GuideNavigation } from "@/components/ui/GuideNavigation";
import { RebateNotice } from "@/components/ui/RebateNotice";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { installationSources, estimateRows, airflowChecks, installationFaqs } from "./content";
import styles from "./installation.module.css";

const route = "/services/heating/furnace-installation";
const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
const url = `${baseUrl}${route}`;
const title = "Furnace Installation & Replacement in Great Falls, MT";
const description = "Plan furnace replacement in Great Falls: home-specific sizing, ductwork, shared-chimney checks, gas or propane compatibility, and written installation estimates.";
export const metadata = buildMetadata({ title, description, canonicalPath: route, ogImage: "/images/heating-furnace-installation-social.jpg", ogImageAlt: "Residential furnace with metal ductwork, gas supply piping, and a condensate pump." });

function getInstallationSchema() {
  const businessId = `${baseUrl}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: baseUrl,
    ...(verification.contactDetails ? { telephone: siteConfig.phoneE164, email: siteConfig.email } : {}),
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, contentUrl: `${baseUrl}/images/heating-furnace-installation.webp`, url: `${baseUrl}/images/heating-furnace-installation.webp`, name: "Residential furnace and duct connections", description: "Residential furnace with metal ductwork, gas supply piping, and a condensate pump.", width: 1600, height: 1200, encodingFormat: "image/webp" },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, isPartOf: { "@id": `${baseUrl}/services/heating#webpage` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(installationSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Residential furnace installation & replacement in Great Falls, Montana", description, serviceType: "Furnace installation and replacement", provider, areaServed: { "@type": "AdministrativeArea", name: "Great Falls and Cascade County, Montana" }, mainEntityOfPage: { "@id": `${url}#webpage` } },
    { ...getFAQSchema(installationFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getInstallationSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior service-interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Heating services", url: "/services/heating" }, { name: "Furnace installation & replacement", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="heating" size={48} />
        <p className="eyebrow">Furnace replacement / Great Falls &amp; Cascade County</p>
        <h1>Replacing your furnace? Start with the house you have today.</h1>
        <p>Compare sizing, ductwork, venting, and gas or propane options before choosing a new furnace. Get a written estimate that explains the work as clearly as the equipment.</p>
        <div className="hero-actions"><RequestServiceLink className="button button-yellow" intent="estimate">Request a replacement estimate ↗</RequestServiceLink><Link className="text-link" href="/services/heating/emergency-furnace-repair">Need a furnace repair instead? →</Link></div>
          <ServiceIntroTrust />
      </div>
      <GuideNavigation route="/services/heating/furnace-installation" />
      <div className="interior-grid">
        <div className="article-copy">
          <h2>The old BTU sticker is a starting point, not a sizing calculation.</h2>
          <p>A furnace installed decades ago may have served a different house: before new windows, attic insulation, or a finished basement. Replacing it with the same input rating does not prove the new equipment matches today’s heating load.</p>
          <p>The sizing calculation needs to separate fuel input from heating output, use local winter conditions, and follow the manufacturer’s altitude requirements. A furnace should suit both a Great Falls cold spell and the lighter demand during a Chinook warm-up.</p>
          <p>For a house in Great Falls’ East Side Neighborhood Historic District, ask what renovations have changed since the existing furnace was installed. Added insulation, different windows, or a finished room may change the assessment. The home’s current condition belongs in the estimate.</p>
          <p className={styles.source}>Sizing background: <a href={installationSources.sizing}>ACCA: why bigger HVAC equipment is not always better</a>.</p>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="06" subject="Residential furnace installation" dimensions="1600 × 1200" src="/images/heating-furnace-installation.webp" alt="Residential furnace with metal ductwork, gas supply piping, and a condensate pump." caption="A replacement assessment includes the surrounding ductwork, fuel connection, venting, and drainage." />
          <aside className={styles.callout}><h2>Already comparing furnace quotes?</h2><p>Bring the model numbers, included work, exclusions, and any comfort problems the quotes are meant to solve. Different prices can reflect different equipment or scope; ask what each proposal includes.</p><a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Call {siteConfig.phoneDisplay} to discuss an estimate →</a></aside>
        </div>
      </div>
      <aside className={styles.callout} aria-labelledby="furnace-perspective-heading">
        <p className="eyebrow">Our approach / Great Falls Heating and Air</p>
        <h2 id="furnace-perspective-heading">A replacement quote should account for the whole system.</h2>
        <p>A furnace replacement quote should explain what happens to the rest of the system—not just name the new furnace. In a Great Falls basement, that means looking at the return air, the venting, and any water heater sharing the chimney.</p>
        <p>The quote should also explain which cold rooms or airflow problems the work should improve, and which need a separate solution.</p>
      </aside>
      {/* Add a confirmed installation example here; use actual scope, findings, and homeowner permission, never an invented neighborhood case. */}
      <section className={styles.section} aria-labelledby="furnace-efficiency-heading">
        <div className="article-copy"><h2 id="furnace-efficiency-heading">80% or condensing? Compare the installation around the furnace.</h2><p>AFUE describes annual fuel-use efficiency; it does not describe the whole installation cost or your home’s distribution losses. Compare the equipment and the work needed to install it safely.</p></div>
        <div className={styles.pair}>
          <article><h3>Non-condensing furnace options</h3><p>An approximately 80% AFUE model needs an approved venting and combustion-air arrangement. Existing metal venting is something to inspect, not automatically reuse. Access, vent condition, remaining appliances, and applicable requirements affect feasibility.</p></article>
          <article><h3>High-efficiency condensing options</h3><p>A condensing furnace needs manufacturer-approved venting and condensate handling. A finished basement may complicate routing; a cold crawlspace may need freeze protection. Pipe material, size, length, termination, and combustion-air provisions are specific to the equipment and installation.</p></article>
        </div>
        <div className={styles.callout}><h3>Keeping a gas water heater on the old chimney?</h3><p>If the furnace moves to a separate exhaust, assess the water heater’s remaining vent. The shared system has changed, so sizing, condition, and draft need review. Any required changes should be identified before installation day.</p><p className={styles.source}>Technical references: <a href={installationSources.venting}>DOE: direct-vent equipment</a>; <a href={installationSources.combustion}>combustion appliance safety and venting (PDF)</a>.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="furnace-airflow-heading">
        <div className="article-copy"><h2 id="furnace-airflow-heading">Four airflow checks before a new furnace goes in.</h2><p>Changing the cabinet or blower does not automatically resolve an airflow restriction. Check the existing distribution system against the selected equipment’s requirements.</p></div>
        <div className={styles.pair}>{airflowChecks.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="furnace-fuel-heading">
        <div className="article-copy"><h2 id="furnace-fuel-heading">Start with the fuel your home actually uses.</h2><p>Check the property’s actual supply rather than inferring fuel from its address. A furnace must be approved for the fuel used; any conversion needs the correct manufacturer-approved kit and procedures. Gas supply, equipment capacity at altitude, combustion, and startup checks must follow the selected model’s requirements.</p><p>For a rural home near Vaughn or Belt, compare delivered propane costs with electricity before considering a heat pump alongside the furnace. There is no single outdoor changeover temperature that fits every household.</p><Link className="text-link" href="/services/heat-pumps/cold-climate">Compare cold-climate heat pumps and dual-fuel planning →</Link></div>
      </section>
      <section className={styles.section} aria-labelledby="furnace-cost-heading">
        <div className="article-copy">
          <h2 id="furnace-cost-heading">What affects furnace replacement cost in Great Falls?</h2>
          <p>To compare prices, first check what’s included. Great Falls Heating and Air can discuss your existing equipment and the work your home needs; a written estimate should separate required work, optional upgrades, and exclusions.</p>
          <ul>
            <li><strong>Equipment and controls:</strong> The selected capacity, efficiency, burner staging, blower features, and thermostat compatibility affect the equipment and installation scope.</li>
            <li><strong>Venting and drainage:</strong> Compare the approved route, access, drainage, and any changes identified in the venting assessment above.</li>
            <li><strong>Ductwork and filtration:</strong> Cabinet transitions, return-air changes, sealing, and a different filter cabinet may add work when the existing setup does not meet the selected equipment’s requirements.</li>
            <li><strong>Fuel and electrical work:</strong> Include any approved fuel conversion, piping changes, electrical updates, or work by other trades identified for your property.</li>
            <li><strong>Access, removal, and permits:</strong> Tight stairs, crawlspace access, old-equipment disposal, and the applicable permit and inspection process can change the scope.</li>
            <li><strong>Optional additions and warranty terms:</strong> Identify any cooling or heat-pump work separately, along with labor coverage, registration responsibilities, and ongoing service costs.</li>
          </ul>
          <p>Ask whether the total includes applicable taxes, permits, disposal, and all required installation work. Compare utility incentives separately until eligibility is confirmed. Your written quote should make clear what could change the price and how additional work would be approved.</p>
          <RequestServiceLink className="text-link" intent="estimate">Request a furnace replacement estimate →</RequestServiceLink>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="furnace-estimate-heading">
        <div className="article-copy"><h2 id="furnace-estimate-heading">Great Falls Heating and Air’s furnace estimate checklist.</h2><p>Use these seven checks to compare our proposal with any others you receive. A lower price may reflect a different model, scope, or warranty; the important thing is understanding the difference before approving work.</p></div>
        <p className={styles.tableHelp} id="furnace-table-help">On smaller screens, scroll the comparison sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} role="region" aria-label="Furnace installation estimate checklist" aria-describedby="furnace-table-help" tabIndex={0}><table><caption>Compare equipment, installation work, and what you receive when it’s done</caption><thead><tr><th scope="col">Item</th><th scope="col">What the estimate should specify</th><th scope="col">Questions to ask</th></tr></thead><tbody>{estimateRows.map(([item, scope, questions]) => <tr key={item}><th scope="row">{item}</th><td>{scope}</td><td>{questions}</td></tr>)}</tbody></table></div>
      </section>
      <section className={styles.section} aria-labelledby="furnace-install-day-heading">
        <div className="article-copy"><h2 id="furnace-install-day-heading">Plan the work—and the time without heat.</h2><p>For a winter replacement, agree on equipment availability, access, expected downtime, and what happens if the work runs longer. Clear the route to the furnace and secure pets. Do not assume same-day completion or temporary heaters unless those arrangements are confirmed.</p><p>Before work starts, clarify permits, inspection, old-equipment disposal, electrical or venting changes, and any work by other trades. When the work is complete, ask for the startup results, operating instructions, filter details, warranty terms, and registration responsibilities.</p><p className={styles.source}>Great Falls publishes a <a href={installationSources.city}>mechanical-permit fee schedule covering furnace work (PDF)</a>. Confirm current fees and inspection requirements with the authority for your installation address; city and out-of-city projects can follow different processes.</p></div>
      </section>
      <section className={`${styles.section} ${styles.incentives}`} aria-labelledby="furnace-rebate-heading">
        <div className="article-copy"><h2 id="furnace-rebate-heading">Check which rebates apply to your utility account.</h2><p>NorthWestern’s current natural-gas existing-home application excludes former Energy West Montana and Cut Bank Gas accounts. A NorthWestern bill alone does not establish eligibility. Electric incentives have separate account and equipment rules.</p><p>Confirm the current application, exact model eligibility, deadlines, and required paperwork before purchasing. Keep the incentive separate from the base installation price until eligibility is established.</p><RebateNotice /><p className={styles.source}>Official source: <a href={installationSources.northwestern}>NorthWestern Energy natural-gas existing-home application</a>.</p><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review Montana HVAC rebate guidance →</Link></div>
      </section>
      <div className="related-links"><Link className="text-link" href="/services/heating/furnace-maintenance">Keeping your furnace? Plan seasonal maintenance →</Link><Link className="text-link" href="/services/heating">Back to heating services →</Link><Link className="text-link" href="/services/heating/emergency-furnace-repair">Repair and no-heat safety guidance →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Explore dual-fuel alternatives →</Link></div>
    </div>
    <section className="faq-section section" aria-labelledby="furnace-install-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before replacing equipment</p><h2 id="furnace-install-faq-heading">Frequently asked questions about furnace installation in Great Falls.</h2></div><div>{installationFaqs.map(({ question, answer, sources }) => (
      <details className="faq-item" key={question}>
        <summary>{question}<span aria-hidden="true">+</span></summary>
        <p>{answer}</p>
        {sources && <p className="faq-sources">Sources: {sources.map((source, index) => (
          <span key={source.url}>{index > 0 && "; "}<a className="text-link" href={source.url}>{source.label}</a></span>
        ))}</p>}
      </details>
    ))}</div></div></section>
    <div className="wrap"><div className="related-links"><Link className="text-link" href="/services/heat-pumps/heat-pump-installation">Combining a furnace with a heat pump? Review the full installation plan →</Link></div></div>
    <FinalDarkCTA title="Get a written estimate you can compare." subtitle="Tell us about your furnace, your home, and what you want to improve. Call to discuss availability or send an estimate request. Online forms are not continuously monitored." />
  </>;
}
