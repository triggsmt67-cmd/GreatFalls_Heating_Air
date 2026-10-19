import Link from "next/link";
import { Children, isValidElement, type ReactNode } from "react";
import { getFAQSchema } from "@/lib/schema/jsonLd";
import { heatingUrl } from "./schema";
import styles from "./heating.module.css";

const heatingFaqs = [
  {
    question: "Why does my furnace keep shutting off when the wind blows in Great Falls?",
    answer: <>
<p>High-plains Chinook winds and sub-zero gusts can cause high-efficiency furnaces to lock out. Strong gusts blowing across roof or side-wall vent pipes can affect venting and trip a safety sensor called the <strong>pressure switch</strong>. In sub-zero weather, freezing condensation can also build up over the exterior intake or exhaust pipe, restricting airflow.</p>
            <p>From ground level, check for loose snow blocking accessible outside vents. Do not climb, chip ice from pipes, disconnect venting, or bypass a safety switch. If the furnace still locks out, we can inspect the pressure switch, tubing, and vent termination and check whether a manufacturer-approved wind solution is appropriate.</p>
    </>,
  },
  {
    question: "Do heat pumps actually work in -20°F Cascade County winters?",
    answer: <>
<p>Yes, a properly designed system can keep your home warm when paired with a backup heat source in a <strong>dual-fuel setup</strong>. Some cold-climate heat pumps operate down to -5°F, -15°F, or below, but heating capacity and efficiency depend on the model and outdoor temperature.</p>
            <p>When an arctic front pushes temperatures down to -20°F or -30°F along the Missouri River corridor, a dual-fuel system switches to your natural gas or propane furnace at its configured changeover point. You get efficient electric heat during mild weather and furnace backup during deep freezes. Correct sizing and controls matter as much as the equipment rating.</p>
    </>,
  },
  {
    question: "Does Great Falls’ elevation affect how a gas furnace runs?",
    answer: <>
<p>It does. Great Falls sits at roughly <strong>3,330 feet above sea level</strong>, and surrounding foothills climb even higher. Thinner air contains less oxygen per cubic foot, so installation requirements can differ from sea-level settings.</p>
            <p>Depending on the model, the manufacturer may require altitude-specific adjustments or a conversion kit. Incorrect setup can affect combustion and safety. During installation and tune-ups, we check combustion and gas pressure against the manufacturer’s requirements for the equipment and local elevation.</p>
    </>,
  },
  {
    question: "Are there 2026 utility rebates for upgrading my heating system in Great Falls?",
    answer: <>
<p>Yes, depending on your utility, equipment, and project. The federal Section 25C tax credit ended for improvements placed in service after December 31, 2025. <strong>NorthWestern Energy</strong>, which took over former Energy West Montana natural gas service on July 1, 2025, offers E+ incentives for qualifying energy-saving measures. Confirm the current program dates, eligible equipment, and account requirements before purchasing; ENERGY STAR® certification alone does not guarantee a rebate.</p>
            <p>If your home is served by <strong>Sun River Electric Cooperative</strong>, you may qualify for its separate heat pump incentives. Eligibility follows your utility service, rather than simply whether you live outside city limits. Review our <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">2026 Montana HVAC Rebates guide</Link> and confirm current qualification rules with your utility.</p>
    </>,
  },
  {
    question: "What should I check on my own before calling for an emergency furnace repair?",
    answer: <>
<p>If you smell gas, hear a CO alarm, or suspect a gas or carbon monoxide leak, leave immediately and call 911 or your gas utility from outside. Otherwise, check these four basics:</p>
            <ol className={styles.checklist}>
              <li><strong>Thermostat settings:</strong> Make sure it is set to <em>Heat</em> and replace batteries if your thermostat uses them and the screen is dim.</li>
              <li><strong>Air filter:</strong> Check for dust or wildfire-smoke buildup and replace a dirty filter with the correct size and type. Turn the system off before changing it, and do not run the furnace without its filter.</li>
              <li><strong>Breaker &amp; furnace switch:</strong> Check whether the breaker has tripped or the furnace’s external power switch was accidentally turned off. Do not open electrical compartments or repeatedly reset a tripping breaker; arrange service if it trips again.</li>
              <li><strong>Exterior PVC vents:</strong> From ground level, look for drifting snow or frost blocking accessible intake and exhaust openings. Do not climb, chip away ice, or alter the vent pipes. Call for service if the blockage cannot be safely cleared.</li>
            </ol>
    </>,
  },
 ];

// Derive schema from the rendered answer content so both stay in sync.
function answerText(content: ReactNode): string {
  return Children.toArray(content).map((child) => {
    if (typeof child === "string" || typeof child === "number") return String(child);
    if (!isValidElement<{ children?: ReactNode }>(child)) return "";
    const text = answerText(child.props.children);
    return ["p", "li", "ol"].includes(String(child.type)) ? `${text} ` : text;
  }).join("");
}

export function HeatingFaq() {
  const faqSchema = getFAQSchema(heatingFaqs.map(({ question, answer }) => ({
    question,
    answer: answerText(answer).replace(/\s+/g, " ").trim(),
  })));

  const schema = { ...faqSchema, "@id": `${heatingUrl}#faq`, isPartOf: { "@id": `${heatingUrl}#webpage` } };

  return (
    <section className="faq-section section" aria-labelledby="heating-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }} />
      <div className="wrap faq-grid">
        <div>
          <p className="eyebrow">Useful answers</p>
          <h2 id="heating-faq-heading">Frequently asked questions about heating in Great Falls.</h2>
          <p>Straight answers on Cascade County weather, high-elevation furnace care, and 2026 utility incentives.</p>
        </div>
        <div>
          {heatingFaqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              {answer}
            </details>
          ))}
          <p className={styles.faqFollowup}>
            Have a specific question about rebates?{" "}
            <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Read our 2026 Montana HVAC Rebates breakdown →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
