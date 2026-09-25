import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { LicenseMark } from "@/components/ui/TrustMarks";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { LeadForm } from "@/components/forms/LeadForm";
import { generalFaqs } from "@/content/faqs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
export const metadata = buildMetadata({
  title: "HVAC Services in Great Falls, MT",
  description:
    "Residential heating, cooling, furnace repair and heat-pump information for Great Falls and surrounding communities.",
  canonicalPath: "/",
});
export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Residential HVAC · Great Falls, Montana</p>
            <h1>
              Heating and cooling built for <em>Great Falls weather.</em>
            </h1>
            <p className="hero-description">
              A cold house. A hot afternoon. A system ready for replacement.
              Start here for heating and cooling help close to home.
            </p>
            <div className="hero-actions">
              <a
                className="button button-orange"
                href={`tel:${siteConfig.phoneE164}`}
              >
                Call for emergency repair <ArrowUpRight size={17} />
              </a>
              <Link
                href="/rebates/2026-montana-hvac-rebates"
                className="button button-yellow"
              >
                Explore 2026 rebates <ArrowUpRight size={17} />
              </Link>
            </div>
            <p className="hero-location">
              <ServiceIcon name="location" size={18} /> Great Falls &
              surrounding communities
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-image-label">
              <span>Made for life in Montana</span>
              <span>Heating / Cooling</span>
            </div>
            <PhotoPlaceholder
              slot="01"
              subject="Home exterior, technician, or installed equipment"
              dimensions="1800 × 1350"
              crop="Keep the subject inside the center 60% for the mobile crop."
              ratio="hero"
              tone="blue"
              className="hero-photo"
            />
          </div>
        </div>
      </section>
      <section
        className="service-concierge"
        id="estimate"
        aria-labelledby="service-concierge-title"
      >
        <div className="wrap concierge-grid">
          <div className="concierge-intro">
            <p className="eyebrow">Let’s start here</p>
            <h2 id="service-concierge-title">
              What does your
              <br />
              home need?
            </h2>
            <p>
              Repair, routine care, or a fresh start. Choose a service and tell
              us a little about your home.
            </p>
            <div className="concierge-credentials">
              <LicenseMark />
              <span>Great Falls, Montana & surrounding communities</span>
            </div>
          </div>
          <LeadForm
            progressive
            headline="How can we help?"
            className="concierge-form"
          />
        </div>
      </section>
      <section className="section wrap">
        <div className="section-intro">
          <p className="eyebrow">01 / Heating & cooling</p>
          <h2>
            Comfort starts with
            <br />
            the right next step.
          </h2>
          <p>
            From a furnace that won’t start to a better way to cool your home.
            Find the information that fits your situation.
          </p>
        </div>
        <div className="service-editorial">
          <article className="heating-feature">
            <div className="heating-feature-copy">
              <ServiceIcon name="heating" size={40} />
              <p className="eyebrow">When the heat goes out</p>
              <h3>
                A Montana winter
                <br />
                doesn’t wait.
              </h3>
              <p>
                Furnace trouble in freezing weather? Call to discuss service
                availability. For a gas odor or carbon monoxide alarm, leave the
                home and contact emergency services.
              </p>
              <Link
                className="text-link"
                href="/services/heating/emergency-furnace-repair"
              >
                Furnace repair & safety <ArrowUpRight size={18} />
              </Link>
              <Link className="quiet-link" href="/services/heating">
                All heating services →
              </Link>
            </div>
            <PhotoPlaceholder
              slot="02"
              subject="Technician diagnosing a furnace"
              dimensions="1200 × 1500"
              crop="Portrait crop. Keep hands, tools, and equipment visible."
              ratio="portrait"
              tone="dark"
              className="heating-photo"
            />
          </article>
          <div className="support-services">
            <article className="cooling-feature">
              <PhotoPlaceholder
                slot="03"
                subject="Outdoor AC service or mechanical detail"
                dimensions="1400 × 1050"
                crop="Landscape crop. Leave clean space near the upper left."
                tone="light"
                className="service-photo"
              />
              <div className="support-service-copy">
                <ServiceIcon name="cooling" size={36} />
                <h3>Keep summer comfortable.</h3>
                <p>
                  Warm air, uneven cooling, or an aging AC? Understand your
                  repair and replacement options.
                </p>
                <Link className="text-link" href="/services/cooling/ac-repair">
                  AC repair & upgrades <ArrowUpRight size={17} />
                </Link>
                <Link className="quiet-link" href="/services/cooling">
                  Cooling services →
                </Link>
              </div>
            </article>
            <article className="heat-pump-feature">
              <ServiceIcon name="heat-pump" size={40} />
              <div>
                <h3>One system. Two seasons.</h3>
                <p>
                  Explore heat pumps, cold-weather performance, and where a
                  backup heat source fits.
                </p>
                <Link
                  className="text-link"
                  href="/services/heat-pumps/cold-climate"
                >
                  Cold-climate heat pumps <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="guide-section">
        <div className="wrap guide-grid">
          <div className="guide-copy">
            <p className="eyebrow">02 / Plan with a clearer picture</p>
            <h2>
              Montana winters.
              <br />
              Modern options.
            </h2>
            <p>
              Can a heat pump work here? The answer depends on the equipment,
              the home, and the plan for the coldest days.
            </p>
            <Link
              className="text-link"
              href="/services/heat-pumps/cold-climate"
            >
              Get to know cold-climate systems <ArrowUpRight size={18} />
            </Link>
          </div>
          <PhotoPlaceholder
            slot="04"
            subject="Cold-climate heat pump in winter"
            dimensions="1600 × 1200"
            crop="Landscape crop. Keep snow clearance and the full unit visible."
            tone="blue"
            className="guide-photo"
          />
          <article className="rebate-feature">
            <ServiceIcon name="efficiency" size={36} />
            <span className="resource-label">Homeowner resource / 2026</span>
            <h3>
              Make sense
              <br />
              of HVAC rebates.
            </h3>
            <p>
              Current utility incentives, expired credits, and eligibility
              details in one source-linked guide.
            </p>
            <Link
              href="/rebates/2026-montana-hvac-rebates"
              className="button button-yellow"
            >
              Explore the rebate guide <ArrowUpRight size={17} />
            </Link>
            <small>Verify eligibility with your utility before purchase.</small>
          </article>
        </div>
      </section>
      <section className="section wrap local-grid">
        <div className="local-visual">
          <PhotoPlaceholder
            slot="05"
            subject="Great Falls home, neighborhood, or high-plains weather"
            dimensions="1920 × 1080"
            crop="Wide establishing image. Avoid dramatic alpine scenery."
            ratio="wide"
            tone="light"
            className="local-photo"
          />
          <div className="climate-art" aria-hidden="true">
            <span className="climate-place">GREAT FALLS / MONTANA</span>
            <svg viewBox="0 0 480 120" fill="none">
              <path d="M0 62Q100 22 200 62T480 52M0 87Q120 57 240 82T480 72" />
              <path d="m0 37 90-12 80 6 100-28 80 24 130-9" />
              <circle cx="414" cy="22" r="16" />
            </svg>
            <span className="climate-caption">
              High plains. Changing seasons. / Wide establishing image.
            </span>
          </div>
        </div>
        <div>
          <p className="eyebrow">03 / A place of its own</p>
          <h2>
            The weather changes.
            <br />
            Home should feel like home.
          </h2>
          <p>
            Winter wind, sudden Chinook warmups, and hot summer afternoons all
            shape how a home heats and cools. So do insulation, ductwork, and
            the age of the building.
          </p>
          <p>
            Whether you’re in town or on an acreage, start with your home’s
            needs—not a one-size-fits-all equipment recommendation.
          </p>
          <Link href="/about" className="text-link">
            About Great Falls Heating & Air LLC <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="area-section">
        <div className="wrap area-grid">
          <div>
            <p className="eyebrow">Close to home</p>
            <h2>
              Great Falls.
              <br />
              And the towns around it.
            </h2>
            <p>
              Contact us to confirm service availability at your address,
              including rural properties and off-base military households.
            </p>
          </div>
          <dl className="region-list">
            <div>
              <dt>In & around Great Falls</dt>
              <dd>Great Falls · Black Eagle · Households near Malmstrom AFB</dd>
            </div>
            <div>
              <dt>West & northwest</dt>
              <dd>Vaughn · Sun Prairie · Sun River</dd>
            </div>
            <div>
              <dt>South & southwest</dt>
              <dd>Ulm · Cascade</dd>
            </div>
            <div>
              <dt>East & the Gulch</dt>
              <dd>Belt · Sand Coulee · Stockett · Tracy · Centerville</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section wrap process-section">
        <div>
          <p className="eyebrow">A simple place to start</p>
          <h2>Tell us what’s happening.</h2>
        </div>
        <ol className="process-list">
          {[
            [
              "Get in touch",
              "Call for urgent heating or cooling needs, or send an estimate request.",
            ],
            [
              "Share the details",
              "Tell us your location, equipment type, and what you’ve noticed.",
            ],
            [
              "Discuss next steps",
              "Ask about availability and the options for your home.",
            ],
          ].map(([t, d], i) => (
            <li key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <FaqAccordion
        faqs={generalFaqs}
        title="A few useful answers."
        subtitle=""
        badge="Before you call"
      />
      <FinalDarkCTA />
    </>
  );
}
