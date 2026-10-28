import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { GuideNavigation } from "@/components/ui/GuideNavigation";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { getFAQSchema } from "@/lib/schema/jsonLd";
import { getHeatingPageSchema, heatingUrl } from "../schema";
import { emergencyFaqs, emergencyFailures, homeownerChecks } from "./content";
import styles from "./emergency.module.css";

const route = "/services/heating/emergency-furnace-repair";
const pageUrl = `${heatingUrl}/emergency-furnace-repair`;
const title = "Emergency Furnace Repair in Great Falls, MT";
const description = "No heat in Great Falls or Cascade County? Call for furnace repair availability, safe homeowner checks, and diagnostic guidance for gas, propane, and electric heating.";
const imagePath = "/images/emergency-furnace-repair-great-falls.webp";
const imageUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}${imagePath}`;
const imageAlt = "Residential gas furnace with metal exhaust venting and ductwork in a utility room.";
const baseMetadata = buildMetadata({ title, description, canonicalPath: route, ogImage: "/images/emergency-furnace-repair-great-falls-social.jpg" });
export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [{ url: `${siteConfig.siteUrl.replace(/\/$/, "")}/images/emergency-furnace-repair-great-falls-social.jpg`, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: [{ url: `${siteConfig.siteUrl.replace(/\/$/, "")}/images/emergency-furnace-repair-great-falls-social.jpg`, alt: imageAlt }],
  },
};

function getEmergencySchema() {
  const heatingSchema = getHeatingPageSchema(title, description);
  const heatingService = heatingSchema["@graph"][1];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject", "@id": `${pageUrl}#image`,
        contentUrl: imageUrl, url: imageUrl, width: 1600, height: 1200,
        name: "Residential gas furnace and venting", description: imageAlt, encodingFormat: "image/webp", caption: imageAlt,
      },
      {
        "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl,
        name: String(metadata.title), description, inLanguage: "en-US",
        primaryImageOfPage: { "@id": `${pageUrl}#image` },
        isPartOf: { "@id": `${heatingUrl}#webpage` },
        mainEntity: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        hasPart: { "@id": `${pageUrl}#faq` },
      },
      {
        "@type": "Service", "@id": `${pageUrl}#service`, url: pageUrl,
        name: "Emergency Furnace Repair & No-Heat Diagnostics in Great Falls, MT",
        serviceType: "Residential furnace repair", description,
        provider: heatingService.provider, areaServed: heatingService.areaServed,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      {
        ...getFAQSchema(emergencyFaqs), "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
      },
    ],
  };
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getEmergencySchema()).replace(/</g, "\\u003c") }} />
      <div className="wrap interior">
        <Breadcrumbs schemaId={`${pageUrl}#breadcrumb`} items={[
          { name: "Heating services", url: "/services/heating" },
          { name: "Emergency furnace repair", url: route },
        ]} />
        <div className={`page-heading ${styles.hero}`}>
          <ServiceIcon name="emergency" size={48} />
          <p className="eyebrow">Cold-weather furnace repair / Great Falls &amp; Cascade County</p>
          <h1>No heat? Let’s get your furnace firing safely.</h1>
          <p>No heat in Great Falls or Cascade County? Call for 24/7 emergency service and repair, diagnostic fees, and next steps.</p>
          <div className="hero-actions">
            <a className="button button-orange" href={`tel:${siteConfig.phoneE164}`}>Call for furnace repair: {siteConfig.phoneDisplay}</a>
            <RequestServiceLink className="text-link" intent="emergency">Send a service request ↗</RequestServiceLink>
          </div>
          <p className={styles.formNotice}>For urgent no-heat problems, call first. Forms are not continuously monitored.</p>
        </div>
        <section className={`safety-panel ${styles.safety}`} aria-labelledby="emergency-safety-heading">
          <p className="eyebrow">Before troubleshooting</p>
          <h2 id="emergency-safety-heading">Gas odor or CO alarm sounding? Stop here.</h2>
          <p><strong>Leave the home immediately with everyone in your household.</strong> Do not try to relight the furnace, use switches or a phone indoors, or operate a garage door. Do not delay leaving to open windows.</p>
          <p>From a safe location outside, call <a href="tel:911">911</a> or your gas utility. NorthWestern Energy’s Montana emergency number is <a href="tel:+18884672669">888-467-2669</a>. If you use propane, contact your propane supplier.</p>
          <p>If anyone has a sudden headache, dizziness, or nausea and CO exposure is suspected, get to fresh air and call 911. A detector chirp can indicate a battery or device fault, but never ignore a sounding alarm or suspected exposure. Do not re-enter until responders say it is safe. Contact us after the immediate danger has been addressed.</p>
        </section>
        <GuideNavigation route="/services/heating/emergency-furnace-repair" />
      <div className="interior-grid">
          <div className="article-copy">
            <p className="eyebrow">Our approach / Urgent repairs</p>
            <h2>Even when it’s urgent, you should understand the repair.</h2>
            <p>When your house is getting cold, you still deserve to understand the repair. We explain what failed, what the proposed work costs, and what happens next if the needed part is unavailable.</p>
            <p>A furnace breakdown during a -20°F snap can put your household and plumbing at risk. Whether the system locked out overnight during a Chinook windstorm or is blowing cold air, start by describing what happened and asking about current service availability.</p>
            <p>Have your address, indoor temperature, furnace brand and approximate age, and any visible fault code ready. Confirm the diagnostic fee and availability when calling. What we can repair, and when, depends on what’s wrong and whether the right parts are available.</p>
            {/* Add a confirmed no-heat job example here when findings, outcome, and publication permission are available. */}
            <h2>What to do while waiting for service.</h2>
            <ol>
              <li><strong>Keep people warm:</strong> If the home is becoming unsafe, move to a warm location, especially with children, older adults, or anyone with health concerns.</li>
              <li><strong>Protect vulnerable plumbing:</strong> Open sink-cabinet doors to let warmer room air reach pipes, keeping chemicals away from children and pets. Follow your water utility’s freeze guidance; if you suspect a frozen pipe, arrange help rather than using an open flame.</li>
              <li><strong>Clear access:</strong> Move storage away from the furnace, secure pets, and make the walkway safe. Leave furnace panels in place and note visible fault codes without opening the cabinet.</li>
            </ol>
          </div>
          <div className="service-hub-media">
            <PhotoPlaceholder slot="07" subject="Residential furnace and venting" dimensions="1600 × 1200" src={imagePath} alt={imageAlt} caption="Furnace diagnostics include checks of heating operation, airflow, and venting." />
            <div className={`article-copy ${styles.callPrep}`}>
              <h2>Before authorizing a repair</h2>
              <ul><li>Confirm the appointment window and diagnostic fee.</li><li>Ask what failed and how it was tested.</li><li>Review the repair price and any applicable warranty.</li><li>Ask about parts availability and safe next steps if repair cannot be completed that day.</li></ul>
            </div>
          </div>
        </div>
        <section className={styles.section} aria-labelledby="homeowner-checks-heading">
          <div className="article-copy"><p className="eyebrow">Only when there are no danger signs</p><h2 id="homeowner-checks-heading">Five things to check before calling for a repair.</h2><p>A thermostat setting, dirty filter, or blocked vent can interrupt heating. These basic observations may help explain the problem; they are not a substitute for diagnosis. If you smell gas, suspect CO, see smoke, or hear new banging or grinding, stop and seek help.</p></div>
          <ol className={styles.checks}>{homeownerChecks.map(([heading, body]) => <li key={heading}><h3>{heading}</h3><p>{body}</p></li>)}</ol>
        </section>
        <section className={styles.section} aria-labelledby="failures-heading">
          <div className="article-copy"><h2 id="failures-heading">Common cold-weather furnace failures.</h2><p>Similar symptoms can have different causes. Here is what a technician may investigate.</p></div>
          <div className="service-symptoms">{emergencyFailures.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div>
        </section>
        <section className={`${styles.section} ${styles.propane}`} aria-labelledby="propane-heading">
          <div className="article-copy"><p className="eyebrow">Rural heating</p><h2 id="propane-heading">On propane outside Great Falls? Check your tank gauge.</h2><p>Homes around Ulm, Vaughn, Belt, Sun Prairie, Cascade, Fort Shaw, and Simms may use propane heating. Very cold weather can reduce a tank’s ability to supply vapor, particularly when fuel is low. A low reading or interrupted supply is a reason to contact your propane supplier.</p><p>If the tank has run out or gas service was interrupted, have the supplier or another qualified professional perform a leak check and restore service. Do not relight appliances yourself, adjust a regulator, or try to thaw it with heat. If you smell gas, leave and call for emergency help from a safe location.</p><p>If supply is confirmed and the furnace still will not heat, <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>call {siteConfig.phoneDisplay}</a> to discuss a diagnostic visit.</p></div>
        </section>
      </div>
      <section className="faq-section section" aria-labelledby="emergency-faq-heading">
        <div className="wrap faq-grid">
          <div><p className="eyebrow">No-heat questions</p><h2 id="emergency-faq-heading">Emergency furnace repair FAQs for Great Falls homeowners.</h2></div>
          <div>{emergencyFaqs.map(({ question, answer, sources }) => (
            <details className="faq-item" key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
              {sources && <p className="faq-sources">Sources: {sources.map((source, index) => (
                <span key={source.url}>{index > 0 && "; "}<a className="text-link" href={source.url}>{source.label}</a></span>
              ))}</p>}
            </details>
          ))}<p className={styles.faqLinks}><Link className="text-link" href="/services/heating/furnace-maintenance">After the repair: furnace maintenance guidance →</Link><Link className="text-link" href="/services/heating/furnace-installation">Considering replacement? Compare furnace installation scope →</Link><Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review current Montana HVAC rebate guidance →</Link><Link className="text-link" href="/services/heating">Explore heating maintenance &amp; replacement →</Link></p></div>
        </div>
      </section>
      <section className="final-cta">
        <div className="wrap">
          <div><p className="eyebrow">Need help with no heat?</p><h2>Talk with us about your furnace.</h2><p>Describe what’s happening and ask about service availability in Great Falls and surrounding Cascade County communities. For urgent no-heat problems, call first.</p></div>
          <div className="cta-actions"><a className="button button-orange" href={`tel:${siteConfig.phoneE164}`}>Call {siteConfig.phoneDisplay}</a><RequestServiceLink className="button button-yellow" intent="emergency">Send a service request ↗</RequestServiceLink><p className={styles.ctaNotice}>Forms are not continuously monitored.</p></div>
        </div>
      </section>
    </>
  );
}
