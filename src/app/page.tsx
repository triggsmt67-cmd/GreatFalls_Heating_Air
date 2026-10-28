import { RebateNotice } from "@/components/ui/RebateNotice";
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
import styles from "./home.module.css";
export const metadata = buildMetadata({
  title: "HVAC Services in Great Falls, MT",
  description:
    "Residential heating, cooling, furnace repair and heat-pump information for Great Falls and surrounding communities.",
  canonicalPath: "/",
});
export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={`wrap ${styles.heroInner}`}>
          <p className={styles.heroEyebrow}>
            Residential HVAC · Great Falls, Montana
          </p>
          <div className={styles.heroIntro}>
            <h1 id="home-hero-title" className={styles.heroHeading}>
              <span>Heating and cooling</span>{" "}
              <span>
                built for{" "}
                <span className={styles.placeName}>Great Falls weather.</span>
              </span>
            </h1>
            <p className={styles.heroDescription}>
              Know what’s wrong, what the work involves, and what it costs. Whether you need a repair, maintenance, or a new system, start with a clear explanation.
            </p>
            <div className={styles.heroActions}>
              <a
                className="button button-orange"
                href={`tel:${siteConfig.phoneE164}`}
              >
                Call for 24/7 emergency repair <ArrowUpRight size={17} />
              </a>
              <Link
                href="/rebates/2026-montana-hvac-rebates"
                className="button button-yellow"
              >
                Explore 2026 rebates <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <PhotoPlaceholder
            slot="01"
            subject="Installed cold-climate heat pump outside residential home"
            dimensions="1600 × 1200"
            ratio="wide"
            tone="blue"
            className={styles.heroPhoto}
            src="/images/home-exterior.webp"
            alt="Mitsubishi Electric outdoor heat pump beside a dark-sided home, with covered refrigerant lines and an exterior disconnect."
            priority
            sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1248px) calc(100vw - 64px), 1184px"
          />
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
              What does your{" "}
              <br />
              home need?
            </h2>
            <p>
              Need a repair, a tune-up, or a replacement? Choose a service and tell us what’s happening.
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
              subject="Furnace diagnostic and heating system inspection"
              dimensions="960 × 1200"
              ratio="portrait"
              tone="dark"
              className="heating-photo"
              src="/images/furnace-diagnostic.webp"
              alt="Residential furnace with metal ductwork, exhaust venting, and gas piping in a utility closet."
            />
          </article>
          <div className="support-services">
            <article className="cooling-feature">
              <PhotoPlaceholder
                slot="03"
                subject="Residential cooling system and mechanical installation detail"
                dimensions="1200 × 900"
                ratio="landscape"
                tone="light"
                className="service-photo"
                src="/images/ac-service.webp"
                alt="HVAC air handler, insulated ducts, drainage piping, and a work light in a crawl space."
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <div className="support-service-copy">
                <ServiceIcon name="cooling" size={36} />
                <h3>Keep summer comfortable.</h3>
                <p>
                  Warm air, uneven cooling, or an aging AC? Understand your
                  repair and replacement options.
                </p>
                <Link className="text-link" href="/services/cooling/ac-repair">
                  AC repair & diagnostics <ArrowUpRight size={17} />
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
            subject="Outdoor cold-climate heat pump operating in winter snow"
            dimensions="1280 × 960"
            ratio="landscape"
            tone="blue"
            className="guide-photo"
            src="/images/winter-heat-pump.webp"
            alt="Outdoor heat pump on raised supports beside a home, surrounded by snow."
            sizes="(max-width: 900px) 100vw, 45vw"
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
              See which utility incentives may apply, which credits have expired, and where to check the rules.
            </p>
            <Link
              href="/rebates/2026-montana-hvac-rebates"
              className="button button-yellow"
            >
              Explore the rebate guide <ArrowUpRight size={17} />
            </Link>
            <RebateNotice />
          </article>
        </div>
      </section>
      <section className="section wrap local-grid">
        <div className="local-visual">
          <PhotoPlaceholder
            slot="05"
            subject="Great Falls home exterior and HVAC installation in high-plains context"
            dimensions="1400 × 788"
            ratio="wide"
            tone="light"
            className="local-photo"
            src="/images/high-plains-montana.webp"
            alt="Outdoor central air conditioner on a concrete pad beside a home, wood fence, and exterior utility piping."
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="climate-art" aria-hidden="true">
            <span className="climate-place">GREAT FALLS / MONTANA</span>
            <svg viewBox="0 0 480 120" fill="none">
              <path d="M0 62Q100 22 200 62T480 52M0 87Q120 57 240 82T480 72" />
              <path d="m0 37 90-12 80 6 100-28 80 24 130-9" />
              <circle cx="414" cy="22" r="16" />
            </svg>
            <span className="climate-caption">
              High plains. Changing seasons.
            </span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Veteran-owned / Locally operated</p>
          <h2>Meet Robert Ross.</h2>
          <p>
            Robert is the owner of Greatfalls Heating and Air, a United States
            military veteran with more than 20 years of experience in HVAC.
          </p>
          <blockquote className={styles.ownerQuote}>
            “I started this company with a straightforward goal: give customers
            the service and quality of work they’re paying for.”
          </blockquote>
          <p>
            Clear answers. Respect for your time. Work completed carefully.
            Learn what “customers deserve better” means to Robert.
          </p>
          <Link href="/about" className="text-link">
            Meet the owner <ArrowUpRight size={18} />
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
    </div>
  );
}
