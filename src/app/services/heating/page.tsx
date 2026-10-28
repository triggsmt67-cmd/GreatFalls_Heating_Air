import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { GuideNavigation } from "@/components/ui/GuideNavigation";
import { RebateNotice } from "@/components/ui/RebateNotice";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { siteConfig } from "@/content/site";
import styles from "./heating.module.css";
import { getHeatingPageSchema, heatingUrl, heatingCommunities } from "./schema";
import { HeatingFaq } from "./HeatingFaq";

const title = "Heating & Furnace Repair in Great Falls, MT | Great Falls Heating & Air";
const baseMetadata = buildMetadata({
  title,
  description: "Honest furnace repair, seasonal maintenance, and heating replacement in Great Falls, MT. Upfront diagnostics, CO safety checks, and built for Cascade County winters.",
  canonicalPath: "/services/heating",
  ogImage: "/images/heating-furnace-installation-social.jpg",
  ogImageAlt: "Residential furnace with metal ductwork, gas supply piping, and a condensate pump.",
});
export const metadata = {
  ...baseMetadata,
  title,
  openGraph: { ...baseMetadata.openGraph, title },
  twitter: { ...baseMetadata.twitter, title },
};

const equipment = [
  ["Natural Gas & Propane Furnaces", "From older 80% standard-efficiency workhorses to modern 95%+ AFUE two-stage and modulating condensing furnaces. We handle ignitors, blower motors, control boards, and gas valve conversions."],
  ["Cold-Climate Heat Pumps & Dual-Fuel", "Want efficient electric heating during mild fall and spring weather with automatic gas furnace backup when January hits -20°F? We design and service dual-fuel systems built for Montana utility rates."],
  ["Garage & Shop Unit Heaters", "Keep your detached garage, workshop, or rural outbuilding above freezing with properly vented hanging gas unit heaters and low-clearance infrared tube heaters."],
  ["Thermostats & Airflow Balancing", "Smart thermostat wiring, dual-fuel staging controls, and return-air modifications to fix freezing basement bedrooms and hot upstairs hallways."],
];
const symptoms = [
  ["Blower runs, but the air is cold", "Usually points to a failed ignition sequence. A dirty flame sensor, burned-out hot surface ignitor, or a pressure switch tripped by high wind or a frosted PVC exhaust pipe will shut down the gas burners while the fan keeps blowing."],
  ["Frequent cycling (Short-cycling)", "If your furnace kicks on for three minutes, shuts down, and tries again, it is likely overheating. Check for a clogged air filter or blocked registers first. If the filter is clean, you may have a failing blower motor or bad limit switch."],
  ["Banging, squealing, or scraping noises", "A mini “boom” on startup can mean delayed gas ignition—dirty burners may be letting gas build up before lighting. High-pitched squealing or metallic scraping can point to a failing inducer fan or blower wheel bearing. Stop using the furnace and arrange a professional inspection."],
  ["Yellow burner flames or CO alerts", "Persistent yellow flames, soot, or a change in burner appearance need professional inspection; flame color alone cannot diagnose a carbon monoxide leak. If your CO alarm sounds or you suspect a leak, leave immediately and call 911 from outside. Do not stay inside to inspect or shut down the furnace."],
];
const comparisons = [
  ["Diagnosis identifies a repair that can restore safe operation, with no other major concerns found.", "A significant safety or major-component concern requires comparing available repair and replacement options."],
  ["Compatible parts are available, and the repair cost makes sense alongside the equipment’s condition and repair history.", "Repeated failures, unavailable parts, or substantial repair costs make continued service less practical."],
  ["The existing system meets your comfort needs once the fault is addressed.", "Persistent comfort or operating problems warrant a wider assessment of the furnace, ductwork, and home."],
];

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHeatingPageSchema(title, baseMetadata.description ?? "")).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${heatingUrl}#breadcrumb`} items={[{ name: "Heating services", url: "/services/heating" }]} />
      <div className="page-heading">
        <ServiceIcon name="heating" size={48} />
        <p className="eyebrow">Winter heating / Great Falls &amp; Cascade County</p>
        <h1>Furnace trouble? Let’s find out what’s wrong.</h1>
        <p>Furnace repairs, seasonal tune-ups, and replacement planning for Great Falls homes. Understand the problem and your options before deciding on the work.</p>
        <div className="hero-actions">
          <RequestServiceLink className="button button-yellow" intent="estimate">Request service or an estimate ↗</RequestServiceLink>
          <Link className="text-link" href="/services/heating/emergency-furnace-repair">Emergency furnace repair &amp; safety →</Link>
        </div>
      </div>
      <GuideNavigation route="/services/heating" />
      <div className="interior-grid">
        <div className="article-copy">
          <h2>Built for Cascade County weather.</h2>
          <p>Great Falls heating has to handle long runs during deep freezes and lighter demand during winter warm-ups. Wind exposure, snow around accessible vents, and the equipment’s altitude requirements all belong in the assessment.</p>
          <p>For a home in Riverview or a property near Belt, start with the furnace’s actual condition, fuel supply, and the rooms that need heat. We need to see what’s happening in your home before recommending a repair, an airflow change, or a replacement.</p>
          <ul>
            <li>Diagnostic assessment for gas, propane, and electric furnaces</li>
            <li>Operating checks against manufacturer altitude requirements</li>
            <li>Repair and replacement options explained before approval</li>
            <li>Dual-fuel &amp; cold-climate heat pump configurations</li>
          </ul>
          <h2>How a service visit works.</h2>
          <p>A service visit should leave you understanding the problem and the proposed work. Discuss the scope and charges when arranging the visit.</p>
          <ol>
            <li><strong>Book the visit:</strong> Confirm the appointment window, diagnostic fee, and what the visit includes.</li>
            <li><strong>Understand the findings:</strong> We explain what was found, the proposed repair, and its price before you authorize repair work.</li>
            <li><strong>Understand any safety concerns:</strong> Ask which combustion and venting checks apply to your equipment and visit. We explain any concern and the next action; one normal reading can’t tell us the condition of the whole system.</li>
          </ol>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="06" subject="Residential furnace and ductwork" dimensions="1600 × 1200" src="/images/heating-furnace-installation.webp" alt="Residential furnace with metal ductwork, gas supply piping, and a condensate pump." caption="The furnace, duct connections, fuel supply, and drainage are parts of the heating assessment." />
          <div className="safety-panel">
            <h2>No heat in freezing weather?</h2>
            <p>Call <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> to ask about today&apos;s availability.</p>
            <p><strong>Warning:</strong> If you smell rotten-egg gas odor, your carbon monoxide alarm sounds, or you suspect a gas or CO leak, do not touch your thermostat or light switches. Leave the house immediately and call 911 or your gas utility from outside.</p>
            <Link className="text-link" href="/services/heating/emergency-furnace-repair">Read our winter furnace safety &amp; troubleshooting guide →</Link>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className="article-copy"><h2>Equipment we service and install.</h2><p>We work on major residential forced-air brands (Lennox, Trane, Carrier, Goodman, Rheem, and more)—even if we didn’t install your original unit.</p></div>
        <div className={styles.equipment}>{equipment.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.section}>
        <div className="article-copy"><h2>Heating symptoms worth investigating.</h2><p>Similar symptoms can have different causes. Testing establishes which repair is appropriate.</p></div>
        <div className="service-symptoms">{symptoms.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="tune-up-heading">
        <div className="article-copy">
          <p className="eyebrow">Fall heating maintenance</p>
          <h2 id="tune-up-heading">What’s included in our pre-winter furnace tune-up?</h2>
          <p>Plan a seasonal check before you’re relying on the furnace every day. These are the areas our heating inspection covers:</p>
        </div>
        <ul className={styles.tuneup}>
          <li><strong>Combustion &amp; CO Safety Test</strong><p>Inspecting the heat exchanger, checking flue draft, and testing for carbon monoxide.</p></li>
          <li><strong>Flame Sensor Cleaning &amp; Ignitor Testing</strong><p>Cleaning oxidation from the flame rod and testing ignitor resistance according to the manufacturer’s service instructions.</p></li>
          <li><strong>High-Altitude Gas Pressure Check</strong><p>Verifying manifold pressure against manufacturer requirements so your burners fire clean at 3,300+ feet.</p></li>
          <li><strong>Blower &amp; Amp-Draw Test</strong><p>Checking motor operation, bearings, and the run capacitor where fitted before continuous winter runs wear them out.</p></li>
          <li><strong>Condensate &amp; Pressure Switch Check</strong><p>Flushing drain traps and checking pressure-switch tubing and PVC intake/exhaust lines on high-efficiency condensing furnaces.</p></li>
        </ul>
      </section>
      <p><Link className="text-link" href="/services/heating/furnace-maintenance">Explore furnace maintenance, seasonal checks &amp; homeowner care →</Link></p>
      <section className={styles.section}>
        <div className="article-copy"><p className="eyebrow">Our approach / Heating decisions</p><h2>Give a repair a fair assessment.</h2><p>Our starting point is whether your furnace can be repaired safely and sensibly. We weigh the actual fault, overall condition, repair history, and available parts before recommending replacement. Age belongs in that conversation alongside those findings.</p><h3>What changes the repair-or-replace decision?</h3></div>
        {/* Add a real repair decision here only after the job findings and permission to publish are confirmed. */}
        <div className={styles.comparison}>{["Stick With a Repair When...", "Start Planning a Replacement When..."].map((heading, index) => <article key={heading}><h3>{heading}</h3><ul>{comparisons.map((row) => <li key={row[index]}>{row[index]}</li>)}</ul></article>)}</div>
        <div className={styles.upgrade}><p><strong>Planning an upgrade?</strong> Compare the full installed price and expected energy use before choosing equipment. Utility incentives depend on the account, exact equipment, project, and current program rules; an upgrade does not automatically qualify.</p><RebateNotice /><div className="related-links"><Link className="text-link" href="/services/heating/furnace-installation">Plan furnace installation &amp; replacement →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Considering a cold-climate heat pump? →</Link><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Check 2026 Montana HVAC &amp; utility rebates →</Link></div></div>
      </section>
    </div>
    <section className={styles.serviceArea} aria-labelledby="heating-area-heading">
      <div className="wrap article-copy">
        <p className="eyebrow">Great Falls &amp; surrounding communities</p>
        <h2 id="heating-area-heading">Heating service around Great Falls</h2>
        <p>Based in Great Falls, we discuss heating service in <strong>{new Intl.ListFormat("en-US", { style: "long", type: "conjunction" }).format(heatingCommunities)}</strong>—plus off-base households near Malmstrom AFB. Confirm availability for your address and equipment when calling.</p>
        <p>Not sure whether we can get to your home? <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Call {siteConfig.phoneDisplay} and ask.</a></p>
      </div>
    </section>
    <HeatingFaq />
    <section className={styles.logistics} aria-labelledby="heating-logistics-heading">
      <div className="wrap">
        <h2 id="heating-logistics-heading">Straightforward scheduling &amp; payment</h2>
        <div className={styles.logisticsGrid}>
          <article><h3>Registration &amp; scheduling</h3><p>Montana contractor registration #{siteConfig.montanaRegistration}. Call to discuss service availability, diagnostic charges, and the scope of your visit.</p></article>
          <article><h3>Payment &amp; project records</h3><p>Confirm payment methods and the records needed for your project before approving work. Utility applications can require itemized invoices and equipment documentation; review the current <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Montana HVAC rebate guidance</Link>.</p></article>
          {/* Restore once verified customer reviews are available.
          <article><h3>Local Homeowner Proof</h3><p className={styles.reviewPlaceholder}>Customer review placeholder</p><p>Add a verified Google Business Profile review here before launch.</p></article>
          */}
        </div>
      </div>
    </section>
    <FinalDarkCTA title="Let’s get your heat sorted out." subtitle="Call to discuss a repair, seasonal check, or replacement estimate. For urgent no-heat problems, call first. Online forms are not continuously monitored." />
  </>;
}
