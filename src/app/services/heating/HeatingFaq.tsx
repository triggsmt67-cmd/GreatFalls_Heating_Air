import Link from "next/link";
import { Children, isValidElement, type ReactNode } from "react";
import { getFAQSchema } from "@/lib/schema/jsonLd";
import { heatingUrl } from "./schema";
import styles from "./heating.module.css";

const heatingFaqs = [
  {
    question: "How much does a furnace repair cost?",
    answer: <>
      <p>Angi’s 2026 guide reports a national average of <strong>$318</strong>, with most homeowners paying $133–$505. These are general budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Your repair may cost less or substantially more depending on the fault, parts, equipment access, labor, warranty coverage, and any emergency or after-hours charges.</p>
      <p>Call to confirm the diagnostic fee and what it includes. Review the price for your proposed repair before approving the work.</p>
      <p>Source: <a className="text-link" href="https://www.angi.com/articles/how-much-does-common-furnace-repair-cost.htm">Angi: furnace repair costs, updated September 25, 2026</a>.</p>
    </>,
  },
  {
    question: "Why is my furnace running but blowing cold air?",
    answer: <>
      <p>Check whether the thermostat fan is set to ON. That setting can circulate room-temperature air between heating cycles. If the house is losing heat, an airflow restriction, ignition problem, fuel-supply issue, or safety shutdown may need diagnosis. The symptom alone doesn’t tell you which part has failed.</p>
      <p>Keep panels closed and don’t bypass safety switches or keep resetting the furnace. Call for service if it won’t heat. If you smell gas or a CO alarm sounds, leave immediately and call 911 from a safe location.</p>
      <p>Background: <a className="text-link" href="https://www.carrier.com/us/en/residential/hvac-resources/furnaces/furnace-blowing-cold-air/">Carrier: reasons a furnace blows cold air</a>.</p>
    </>,
  },
  {
    question: "Why does my furnace keep shutting off, especially in windy or freezing weather?",
    answer: <>
      <p>Restricted airflow, an ignition or control fault, or a venting problem can interrupt heating. Wind and snow around outside intake or exhaust openings are useful details to report, but they don’t prove the cause. Tell us when the furnace stops, whether it restarts, and whether the indoor temperature is falling.</p>
      <p>From ground level, look for loose snow blocking accessible vents. Clear only loose snow you can safely reach. Don’t climb, chip ice, disconnect venting, or bypass a safety switch. If it keeps shutting down, stop troubleshooting and call. For gas odor or a CO alarm, leave immediately and call 911 from outside.</p>
      <p>Background: <a className="text-link" href="https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/furnace-hard-lock-out/">Trane: furnace shutdown and lockout</a>.</p>
    </>,
  },
  {
    question: "Should I repair an older furnace or replace it?",
    answer: <>
      <p>Start with what’s wrong and whether a repair can restore safe operation. Compare the repair price with the furnace’s condition, repair history, available parts, and any warranty coverage. Repeated failures or a major repair may make replacement worth considering, but age alone doesn’t settle the decision.</p>
      <p>If some rooms stay cold, the ductwork, insulation, or airflow may also need attention. A new furnace alone may not solve that problem. Compare the full installation work in our <Link className="text-link" href="/services/heating/furnace-installation">furnace replacement guide</Link>.</p>
      <p>Background: <a className="text-link" href="https://www.energystar.gov/saveathome/heating-cooling/replace">ENERGY STAR: when to consider replacement or system improvements</a>.</p>
    </>,
  },
  {
    question: "Does my furnace need an inspection every year if it still works?",
    answer: <>
      <p>Yes. CPSC recommends a professional inspection of fuel-burning heating systems each year, including furnaces. Follow your equipment’s maintenance instructions too. A furnace producing heat can still have a problem that needs attention.</p>
      <p>Ask what the visit includes and whether cleaning, filters, or repairs are priced separately. Maintenance can identify concerns, but it can’t guarantee a winter without breakdowns. See our <Link className="text-link" href="/services/heating/furnace-maintenance">furnace maintenance guide</Link> for the checks to discuss.</p>
      <p>Source: <a className="text-link" href="https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters">CPSC: annual heating-system inspections</a>.</p>
    </>,
  },
  {
    question: "What can I safely check before calling for furnace repair?",
    answer: <>
      <p>If you smell gas, hear a CO alarm, or suspect a gas or carbon monoxide leak, leave immediately and call 911 or your gas utility from outside. Otherwise, keep checks to the homeowner tasks your equipment instructions allow:</p>
      <ol className={styles.checklist}>
        <li><strong>Thermostat:</strong> Check that HEAT is selected, the setting is above room temperature, and a schedule isn’t explaining the change.</li>
        <li><strong>Filter:</strong> Check an accessible filter. Turn the system off as instructed before changing it, use the correct size and type, and don’t run without a filter.</li>
        <li><strong>Power:</strong> Note whether the external furnace switch is off or a breaker has tripped. Don’t open electrical compartments or repeatedly reset a tripping breaker.</li>
        <li><strong>Visible code:</strong> Note a fault code only if it is visible without removing panels. Share it when you call; don’t bypass a door switch to read it.</li>
      </ol>
      <p>If the furnace still won’t heat, call for <Link className="text-link" href="/services/heating/emergency-furnace-repair">24/7 emergency service and repair</Link>. Don’t wait for a form reply when your home is losing heat.</p>
      <p>Background: <a className="text-link" href="https://www.carrier.com/us/en/residential/hvac-resources/furnaces/furnace-blowing-cold-air/">Carrier: thermostat, airflow, and professional service checks</a>.</p>
    </>,
  },
  {
    question: "Can I keep my gas furnace and add a heat pump for Montana winters?",
    answer: <>
      <p>Possibly. A dual-fuel system uses a heat pump with a compatible gas or propane furnace. The furnace’s condition, indoor coil, blower, ductwork, electrical supply, and controls all need to work with the proposed equipment.</p>
      <p>Compare the heat pump’s output in cold weather with your home’s heating needs, then plan how the furnace will take over when needed. The settings depend on the equipment and your fuel costs; there isn’t one changeover temperature for every Great Falls home. Our <Link className="text-link" href="/services/heat-pumps/cold-climate">cold-climate heat pump guide</Link> explains the options.</p>
      <p>Background: <a className="text-link" href="https://www.carrier.com/us/en/residential/hvac-resources/dual-fuel-heating-system/">Carrier: dual-fuel equipment and controls</a>.</p>
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
          <p>Repair costs, cold air, repeated shutdowns, and the decisions homeowners face before approving heating work.</p>
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
