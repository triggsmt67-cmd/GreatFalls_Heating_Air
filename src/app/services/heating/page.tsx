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
  ["Your furnace is under 12–15 years old and the heat exchanger is clean and intact.", "Your furnace is 15–20+ years old and replacement parts are obsolete or on backorder."],
  ["The fix is a standard wear item like a flame sensor, ignitor, run capacitor, or pressure switch.", "A single repair costs more than 30% of the cost of a brand-new, warrantied system."],
  ["Your winter utility bills have stayed consistent (aside from utility rate hikes).", "The heat exchanger is cracked or the unit locks out repeatedly every time temps drop below zero."],
];

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHeatingPageSchema(title, baseMetadata.description ?? "")).replace(/</g, "\\u003c") }} />
    <div className="wrap interior">
      <Breadcrumbs schemaId={`${heatingUrl}#breadcrumb`} items={[{ name: "Heating services", url: "/services/heating" }]} />
      <div className="page-heading">
        <ServiceIcon name="heating" size={48} />
        <p className="eyebrow">Winter heating / Great Falls &amp; Cascade County</p>
        <h1>Reliable heat for Great Falls winters—without the guesswork.</h1>
        <p>Straightforward furnace repair, seasonal tune-ups, and honest replacement planning built for high-plains winds and sub-zero snaps.</p>
        <div className="hero-actions">
          <Link className="button button-yellow" href="/contact?intent=estimate">Request service or an estimate ↗</Link>
          <Link className="text-link" href="/services/heating/emergency-furnace-repair">Emergency furnace repair &amp; safety →</Link>
        </div>
      </div>
      <div className="interior-grid">
        <div className="article-copy">
          <h2>Built for Cascade County weather.</h2>
          <p>Heating a home in Great Falls isn&apos;t like heating a home anywhere else. One week your furnace is running nonstop against -25°F arctic air along the Missouri River corridor. The next, 50 mph Chinook winds are buffeting your roof vents and tripping your furnace’s pressure switch.</p>
          <p>Whether you’re maintaining an older forced-air system on the Lower North Side, heating a 1970s split-level in Fox Farm, or running propane out in Black Eagle or Ulm, your equipment takes a beating. We diagnose, repair, and set up residential heating systems specifically for Montana elevation and extreme temperature swings.</p>
          <ul>
            <li>Fast, accurate diagnostics for gas, propane, and electric furnaces</li>
            <li>High-altitude calibration to keep burners clean and efficient</li>
            <li>Honest repair-vs-replace math before you spend a dime</li>
            <li>Dual-fuel &amp; cold-climate heat pump configurations</li>
          </ul>
          <h2>How a service visit works.</h2>
          <p>You shouldn&apos;t have to guess what a technician is doing in your basement or what the bill will look like when they finish. Here is our standard rulebook for every heating call:</p>
          <ol>
            <li><strong>Upfront Diagnostic:</strong> We confirm your appointment window and tell you the exact diagnostic fee before we book the visit.</li>
            <li><strong>Flat-Rate Findings, Zero Pressure:</strong> We test your system from the thermostat to the heat exchanger. Before we turn a wrench on a repair, we show you what failed, explain why, and give you a flat price. If a $150 ignitor safely fixes a 12-year-old furnace, we fix it.</li>
            <li><strong>Complimentary Safety &amp; CO Check:</strong> Every heating repair and tune-up includes a draft test and carbon monoxide check around the heat exchanger so you know your family is safe.</li>
          </ol>
        </div>
        <div className="service-hub-media">
          <PhotoPlaceholder slot="06" subject="Residential furnace and ductwork" dimensions="1600 × 1200" src="/images/heating-furnace-installation.webp" alt="Residential furnace with metal ductwork, gas supply piping, and a condensate pump." caption="Every diagnostic includes a full electrical, airflow, and combustion safety check." />
          <div className="safety-panel">
            <h2>No heat in freezing weather?</h2>
            <p>Call <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a> to check today&apos;s dispatch schedule.</p>
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
        <div className="article-copy"><h2>Common Great Falls heating issues we fix every week.</h2></div>
        <div className="service-symptoms">{symptoms.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="tune-up-heading">
        <div className="article-copy">
          <p className="eyebrow">Fall heating maintenance</p>
          <h2 id="tune-up-heading">What’s included in our pre-winter furnace tune-up?</h2>
          <p>Don’t wait for the first -20°F night to find out your ignitor is cracked. Our seasonal heating inspection covers the parts that actually fail under load:</p>
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
        <div className="article-copy"><h2>Should you repair your furnace or plan a replacement?</h2><p>Nobody wants to buy a new furnace in the middle of winter if a simple part will get another five years out of the system. Here is the honest rule of thumb we use in the field:</p></div>
        <div className={styles.comparison}>{["Stick With a Repair When...", "Start Planning a Replacement When..."].map((heading, index) => <article key={heading}><h3>{heading}</h3><ul>{comparisons.map((row) => <li key={row[index]}>{row[index]}</li>)}</ul></article>)}</div>
        <div className={styles.upgrade}><p><strong>Planning an upgrade?</strong> Upgrading to a high-efficiency furnace or a qualifying cold-climate heat pump can cut your winter gas usage and qualify for local incentives.</p><div className="related-links"><Link className="text-link" href="/services/heating/furnace-installation">Plan furnace installation &amp; replacement →</Link><Link className="text-link" href="/services/heat-pumps/cold-climate">Considering a cold-climate heat pump? →</Link><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Check 2026 Montana HVAC &amp; utility rebates →</Link></div></div>
      </section>
    </div>
    <section className={styles.serviceArea} aria-labelledby="heating-area-heading">
      <div className="wrap article-copy">
        <p className="eyebrow">Great Falls &amp; surrounding communities</p>
        <h2 id="heating-area-heading">Where our heating techs travel</h2>
        <p>Based in Great Falls, we run daily service calls across Cascade County. Whether you’re on city natural gas in town or running a propane furnace on acreage, we service <strong>{new Intl.ListFormat("en-US", { style: "long", type: "conjunction" }).format(heatingCommunities)}</strong>—plus neighborhoods near Malmstrom AFB.</p>
        <p>Not sure if you’re in our dispatch zone? <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>Call {siteConfig.phoneDisplay} and ask.</a></p>
      </div>
    </section>
    <HeatingFaq />
    <section className={styles.logistics} aria-labelledby="heating-logistics-heading">
      <div className="wrap">
        <h2 id="heating-logistics-heading">Straightforward scheduling &amp; payment</h2>
        <div className={styles.logisticsGrid}>
          <article><h3>Licensed &amp; Insured in Montana</h3><p>Registered Montana Contractor #{siteConfig.montanaRegistration}. Standard weekday service hours plus prioritized cold-weather no-heat dispatch.</p></article>
          <article><h3>Simple Payment &amp; Rebate Paperwork</h3><p>We accept major credit cards and checks, and we provide itemized invoices and applicable AHRI certificate paperwork for <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">2026 NorthWestern Energy and Sun River Electric Co-op rebates</Link>.</p></article>
          {/* Restore once verified customer reviews are available.
          <article><h3>Local Homeowner Proof</h3><p className={styles.reviewPlaceholder}>Customer review placeholder</p><p>Add a verified Google Business Profile review here before launch.</p></article>
          */}
        </div>
      </div>
    </section>
    <FinalDarkCTA title="Let’s get your heat sorted out." subtitle="Need a fast repair today, a pre-winter safety check, or a straight number on a new furnace? Give us a call or send a quick note—it goes straight to our desk." />
  </>;
}
