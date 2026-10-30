import { rebateReviewDate } from "@/content/rebates";
import { ServiceIntroTrust } from "@/components/ui/ServiceIntroTrust";
import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { GuideNavigation } from "@/components/ui/GuideNavigation";
import { RebateNotice } from "@/components/ui/RebateNotice";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { siteConfig, verification } from "@/content/site";
import { getFAQSchema, getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { heatPumpSources, heatPumpCommunities, configurations, fuelComparisons, winterDetails, heatPumpFaqs } from "./content";
import styles from "./heat-pumps.module.css";

const route = "/services/heat-pumps/cold-climate";
const url = `${siteConfig.siteUrl.replace(/\/$/, "")}${route}`;
const title = "Cold-Climate Heat Pumps & Dual-Fuel Systems in Great Falls, MT";
const description = "Compare cold-climate heat pumps, dual-fuel heating, and ductless options for Great Falls homes. Plan for Chinook warm-ups, deep freezes, fuel costs, and utility incentives.";
const imagePath = "/images/cold-climate-mitsubishi-outdoor-heat-pump.webp";
const imageUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}${imagePath}`;
const socialImageUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/images/cold-climate-mitsubishi-outdoor-heat-pump-social.jpg`;
const imageAlt = "Mitsubishi Electric outdoor heat pump on an equipment base beside a dark-sided home, with covered refrigerant lines and an exterior electrical disconnect.";
const imageCaption = "Outdoor heat pump beside a dark-sided home, with covered refrigerant piping and an exterior electrical disconnect.";
const baseMetadata = buildMetadata({ title, description, canonicalPath: route });
export const metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, images: [{ url: socialImageUrl, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { ...baseMetadata.twitter, images: [{ url: socialImageUrl, alt: imageAlt }] },
};

function getHeatPumpSchema() {
  const businessId = `${siteConfig.siteUrl.replace(/\/$/, "")}/#business`;
  const provider = getHVACBusinessSchema() ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId, name: siteConfig.businessName, url: siteConfig.siteUrl,
  } : undefined;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "ImageObject", "@id": `${url}#image`, url: imageUrl, contentUrl: imageUrl, width: 1280, height: 960, name: "Mitsubishi Electric outdoor heat pump beside a dark-sided home", encodingFormat: "image/webp", description: imageAlt, caption: imageCaption },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: String(metadata.title), description, inLanguage: "en-US", primaryImageOfPage: { "@id": `${url}#image` }, mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` }, hasPart: { "@id": `${url}#faq` }, citation: Object.values(heatPumpSources) },
    { "@type": "Service", "@id": `${url}#service`, url, name: "Cold-climate heat pump & dual-fuel services in Great Falls, Montana", description, serviceType: ["Heat pump installation", "Heat pump repair", "Heat pump maintenance"], provider, mainEntityOfPage: { "@id": `${url}#webpage` }, areaServed: heatPumpCommunities.map((name) => ({ "@type": "Place", name: `${name}, Montana` })), hasOfferCatalog: { "@type": "OfferCatalog", name: "Heat pump system options", itemListElement: configurations.map(({ name, description }) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description } })) } },
    { ...getFAQSchema(heatPumpFaqs), "@id": `${url}#faq`, isPartOf: { "@id": `${url}#webpage` } },
  ] };
}

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHeatPumpSchema()).replace(/</g, "\\u003c") }} />
    <div className="wrap interior service-interior">
      <Breadcrumbs schemaId={`${url}#breadcrumb`} items={[{ name: "Cold-climate heat pumps", url: route }]} />
      <div className={`page-heading ${styles.hero}`}>
        <ServiceIcon name="heat-pump" size={48} />
        <p className="eyebrow">Great Falls &amp; Cascade County / Heating + cooling</p>
        <h1>Heat pumps for Great Falls winters.</h1>
        <p>A Chinook warm-up and a deep freeze call for different things from your heating system. Compare electric heating, furnace backup, and summer cooling around your home and your fuel bills.</p>
        <div className="hero-actions"><RequestServiceLink className="button button-yellow" intent="estimate">Request a heat pump estimate ↗</RequestServiceLink><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Check Montana heat pump incentives →</Link></div>
          <ServiceIntroTrust />
      </div>
      <GuideNavigation route="/services/heat-pumps/cold-climate" />
      <div className="interior-grid">
        <div className="article-copy">
          <h2>Plan for the cold that follows a warm-up.</h2>
          <p>Chinook winds can bring winter warm-ups to Great Falls. Your heating still needs a plan for the cold that follows. A heat pump moves heat from outdoor air into your home; its available output and efficiency change as outdoor conditions change.</p>
          <p>That is why a low advertised operating temperature is only the start of the conversation. The useful question is how much heat the selected model delivers on a cold design day—and how that compares with what your house loses through its walls, windows, roof, and air leaks.</p>
          <p>Consider two planning situations: keeping a serviceable furnace in a Valley View home or adding comfort to a room in Eagles Crossing. The first raises equipment-pairing questions; the second needs a plan for the space being served. In either case, assess the existing equipment and fuel costs before selecting a system.</p>
          <p className={styles.source}>Background: <a href={heatPumpSources.weather}>National Weather Service: wind and weather regimes at Great Falls (PDF)</a>; <a href={heatPumpSources.doe}>DOE: heat pump systems</a>.</p>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="10" subject="Outdoor heat pump installation" dimensions="1280 × 960" src={imagePath} alt={imageAlt} caption={imageCaption} />
          <aside className={styles.planning} aria-labelledby="heat-pump-planning-heading"><p className="eyebrow">Start with what you have</p><h2 id="heat-pump-planning-heading">Replacing AC? Using propane or baseboard heat?</h2><p>Bring a recent electric bill, your gas bill or delivered propane price, and the model details of your current equipment. Those are more useful than a blanket savings percentage.</p><p>Cooling with windows closed can help during smoky weather, but smoke-particle removal needs suitable filtration or a room air cleaner.</p><Link className="text-link" href="/services/cooling#cooling-smoke-heading">Cooling &amp; wildfire smoke filtration →</Link></aside>
        </div>
      </div>
      <section className={styles.section} aria-labelledby="heat-pump-options-heading">
        <div className="article-copy"><h2 id="heat-pump-options-heading">Three ways to fit a heat pump to a Cascade County home.</h2><p>Start with the distribution system and fuel you already use. Then compare what changes, what stays, and how you’ll heat the home on the coldest days.</p></div>
        <div className={styles.options}>{configurations.map(({ name, fit, description }, index) => <article key={name}><p className="eyebrow">Option 0{index + 1}</p><h3>{name}</h3><p><strong>Worth considering for:</strong> {fit}</p><p>{description}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="heat-pump-cost-heading">
        <div className="article-copy"><p className="eyebrow">Our approach / Equipment choices</p><h2 id="heat-pump-cost-heading">Will a heat pump make sense for your heating bills?</h2><p>A heat-pump recommendation should explain the tradeoffs for your house: installation cost, expected electricity use, remaining fuel use, and the cold-weather plan. Bring your actual utility rates and delivered fuel price so the comparison has a useful starting point.</p><p>The <strong>thermal balance point</strong> concerns heating capacity: where the heat pump’s output meets the house’s demand. An <strong>economic balance point</strong> compares the cost of heat from electricity with an alternative fuel. Equipment operating limits are a third consideration. A control strategy has to account for all three.</p></div>
        {/* Add an actual fuel-comparison job here only with confirmed assumptions, equipment data, results, and publication permission. */}
        <p id="heat-pump-table-help" className={styles.tableHelp}>Compare the three starting points below. On smaller screens, scroll the table sideways.</p>
        <div className={`comparison-scroll ${styles.comparison}`} tabIndex={0} role="region" aria-label="Heating fuel and heat pump planning comparison" aria-describedby="heat-pump-table-help"><table><caption>What changes the heat pump calculation for your home?</caption><thead><tr><th scope="col">Your current heating</th><th scope="col">What affects the calculation</th><th scope="col">What to compare</th></tr></thead><tbody>{fuelComparisons.map(([fuel, costs, evaluation]) => <tr key={fuel}><th scope="row">{fuel}</th><td>{costs}</td><td>{evaluation}</td></tr>)}</tbody></table></div>
        <p className={styles.source}>Technical background: <a href={heatPumpSources.sizing}>DOE Building Science Education: cold-climate heat pump sizing</a>.</p>
        <div className={styles.planning}><h3>Keeping your system may make sense too.</h3><p>If your existing heating and cooling meet your needs and remain serviceable, compare the benefit of an upgrade with keeping them in use. When cooling needs replacement, request comparable standard-AC and heat-pump scopes. Indoor-equipment compatibility, controls, electrical work, and expected heating use can change the value of the additional investment.</p></div>
      </section>
      <section className={styles.section} aria-labelledby="heat-pump-design-heading">
        <div className="article-copy"><h2 id="heat-pump-design-heading">What to look for in your heat pump quote.</h2><ol><li><strong>The home’s demand:</strong> A heating and cooling load calculation, including the assumptions about insulation, air leakage, and rooms being served.</li><li><strong>The exact equipment:</strong> Matched indoor and outdoor model numbers, cold-weather capacity data, duct or room-distribution requirements, and any electrical work.</li><li><strong>The cold-weather plan:</strong> How backup operates, how fuel costs inform controls, and what happens during defrost and low-temperature operation.</li><li><strong>Before the job is done:</strong> Manufacturer-specified commissioning, documented settings, maintenance access, and a clear explanation of the thermostat.</li></ol></div>
        <div className={styles.winterDetails}>{winterDetails.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={`${styles.section} ${styles.service}`} aria-labelledby="heat-pump-service-heading">
        <div className="article-copy"><p className="eyebrow">After installation</p><h2 id="heat-pump-service-heading">Heat pump service when the weather changes.</h2><p>If a system struggles after a cold front, repeated lockouts, persistent icing, unfamiliar noise, or a sudden increase in backup use are useful things to report. Note the model, displayed code, outdoor conditions, and which rooms are affected.</p><p>Keep filters maintained and accessible intake and discharge paths clear of loose debris. Leave ice removal, refrigerant work, electrical testing, and control changes to a qualified technician. Ask about maintenance and repair options for your model when you <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>call {siteConfig.phoneDisplay}</a>.</p><p><Link className="text-link" href="/services/heat-pumps/repair-maintenance">Heat pump symptoms, repair, and seasonal maintenance →</Link></p><Link className="text-link" href="/services/heating/emergency-furnace-repair">No heat with furnace backup? Read the safety guidance →</Link></div>
      </section>
      <section className={styles.section} aria-labelledby="heat-pump-incentives-heading">
        <div className="article-copy"><h2 id="heat-pump-incentives-heading">Check the utility serving your property before choosing equipment.</h2><p>A Great Falls address does not tell us which incentive rules apply. NorthWestern Energy offers E+ incentives for qualifying measures. Sun River Electric Cooperative publishes a separate air-source heat pump program with approval requirements. Confirm the current application, equipment eligibility, timing, and documentation before purchasing.</p><p>Ground-source incentives are a different program; they should not be used to price an air-source installation. An ENERGY STAR label, efficiency number, or furnace pairing alone is not confirmation that your project qualifies.</p><RebateNotice /><p className={styles.source}>Official programs: <a href={heatPumpSources.northwestern}>NorthWestern Energy E+ incentives</a>; <a href={heatPumpSources.sunRiver}>Sun River Electric air-source heat pumps</a>. Reviewed {rebateReviewDate}.</p><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Compare Montana HVAC incentive guidance →</Link></div>
      </section>
      <section className={styles.coverage} aria-labelledby="heat-pump-area-heading"><h2 id="heat-pump-area-heading">Great Falls and the communities around it.</h2><p>Discuss heat pump installation and service in {new Intl.ListFormat("en-US", { style: "long", type: "conjunction" }).format(heatPumpCommunities)}. Call to confirm availability for your address.</p></section>
    </div>
    <section className="faq-section section" aria-labelledby="heat-pump-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before choosing equipment</p><h2 id="heat-pump-faq-heading">Frequently asked questions about cold-climate heat pumps in Great Falls.</h2></div><div>{heatPumpFaqs.map(({ question, answer, sources }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>{sources?.length ? <p className="faq-sources">Sources: {sources.map((source, index) => <span key={source.url}>{index > 0 ? "; " : ""}<a className="text-link" href={source.url}>{source.label}</a></span>)}</p> : null}</details>)}<p className={styles.source}>Further reading: <a href={heatPumpSources.doe}>DOE heat pump guide</a> and <a href={heatPumpSources.sizing}>cold-climate sizing guidance</a>.</p></div></div></section>
    <div className="wrap"><div className="related-links"><Link className="text-link" href="/services/heat-pumps/ductless-mini-splits">Plan ductless room coverage &amp; indoor-unit placement →</Link><Link className="text-link" href="/services/heat-pumps/heat-pump-installation">Plan heat pump installation &amp; replacement →</Link><Link className="text-link" href="/services/heating/furnace-installation">Replacing the furnace too? Review furnace installation scope →</Link></div></div>
    <FinalDarkCTA title="Does a heat pump pencil out for your house?" subtitle="Let’s compare your current equipment, ductwork, and fuel bills—and discuss whether dual fuel, ductless, all-electric, or standard AC makes sense. Call for availability or send an estimate request." />
  </>;
}
