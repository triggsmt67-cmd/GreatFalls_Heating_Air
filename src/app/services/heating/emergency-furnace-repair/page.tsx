import Link from "next/link";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
export const metadata = buildMetadata({
  title: "Emergency Furnace Repair in Great Falls, MT",
  description:
    "No-heat guidance, furnace warning signs, and contact information for Great Falls homeowners. Call to discuss service availability.",
  canonicalPath: "/services/heating/emergency-furnace-repair",
});
export default function Page() {
  return (
    <>
      <div className="wrap interior">
        <Breadcrumbs
          items={[
            { name: "Heating", url: "/services/heating" },
            {
              name: "Furnace repair",
              url: "/services/heating/emergency-furnace-repair",
            },
          ]}
        />
        <div className="service-page-hero service-page-hero--emergency">
          <div className="page-heading">
            <p className="eyebrow">Furnace repair / Great Falls</p>
            <h1>
              No heat?
              <br />
              Start with a call.
            </h1>
            <p>
              If your home is losing heat during freezing weather, call to
              discuss service availability. Online forms are not continuously
              monitored.
            </p>
            <div className="hero-actions">
              <a
                className="button button-orange"
                href={`tel:${siteConfig.phoneE164}`}
              >
                Call {siteConfig.phoneDisplay} ↗
              </a>
              <Link className="text-link" href="/services/heating">
                Heating services →
              </Link>
            </div>
          </div>
          <PhotoPlaceholder
            slot="07"
            subject="Furnace diagnostic with technician and tools"
            dimensions="1400 × 1050"
            crop="Landscape crop. Focus on hands, diagnostic tools, and equipment—not a posed portrait."
            tone="dark"
          />
        </div>
        <section className="safety-panel">
          <h2>Gas odor or carbon monoxide alarm?</h2>
          <p>
            Leave the building with everyone in your household. Do not use
            switches or phones inside. Contact emergency services or your gas
            utility from a safe location. Do not re-enter until responders say
            it is safe.
          </p>
          <p>
            Contact an HVAC contractor after the immediate danger has been
            addressed.
          </p>
        </section>
        <div className="interior-grid">
          <div className="article-copy">
            <h2>What to have ready</h2>
            <ul>
              <li>Your address and current indoor temperature.</li>
              <li>The equipment type and approximate age, if known.</li>
              <li>When the problem started and any displayed error code.</li>
              <li>Any unusual odors, noises, or repeated shutdowns.</li>
            </ul>
            <h2>Simple checks, when it is safe</h2>
            <p>
              Check that the thermostat is set to heat and has working batteries
              if required. Look for an obviously blocked filter or supply vent.
              Avoid opening combustion components, bypassing safety controls, or
              repeatedly resetting a system that shuts down.
            </p>
          </div>
          <div className="article-copy">
            <h2>Symptoms to describe</h2>
            <p>
              No heat, weak airflow, rapid on-and-off cycling, or new banging
              and grinding sounds can help explain what is happening. They do
              not identify a single cause without an assessment.
            </p>
            <h2>What happens next?</h2>
            <p>
              Ask about current availability, diagnostic fees, and what a visit
              includes. Timing and repair options depend on the situation.
              Request the findings and proposed costs before authorizing work.
            </p>
            <div className="resource-notice">
              For a non-urgent question,{" "}
              <Link className="text-link" href="/contact?intent=general">
                send an inquiry →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FinalDarkCTA
        title="Tell us what’s happening."
        subtitle="Call to discuss your furnace problem and service availability."
      />
    </>
  );
}
