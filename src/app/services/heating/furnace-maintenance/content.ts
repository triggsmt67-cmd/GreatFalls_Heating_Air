import type { FAQItem } from "@/content/faqs";

export const maintenanceSources = {
  annual: "https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters",
  service: "https://www.carrier.com/us/en/residential/hvac-resources/furnaces/furnace-cleaning/",
  exchanger: "https://www.ahrinet.org/search-standards/ahri-guideline-x-induced-draft-furnace-heat-exchanger-inspection",
  warranty: "https://consumer.ftc.gov/articles/warranties",
  smoke: "https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq",
  alarms: "https://www.kidde.com/support/carbon-monoxide-alarms/replacement",
};
export const maintenanceChecks = [
  ["Combustion & heat exchanger assessment", "Assess accessible components, combustion conditions, and venting using the equipment’s procedures. A CO measurement is one part of that assessment.", "Explain abnormal findings, inspection limits, and any further inspection or safety action needed."],
  ["Ignition & flame sensing", "Inspect the ignition and flame-sensing components. Clean or test them against the model’s service requirements.", "Explain any proposed cleaning, further testing, or replacement before extra work is approved."],
  ["Fuel supply & operating setup", "Compare relevant gas-supply and operating readings with the furnace’s fuel and altitude requirements.", "Record findings and explain whether an adjustment or further diagnosis is needed."],
  ["Condensate & pressure-sensing paths", "On applicable condensing equipment, inspect accessible drainage, traps, and pressure-sensing components. Use approved procedures for cleaning, reassembly, and priming where needed.", "Explain restrictions, freeze concerns, or leaks and whether further service is required. Safety switches are never bypassed as a maintenance shortcut."],
  ["Blower & electrical operation", "Assess blower condition, electrical components, and operation; test a run capacitor where fitted.", "Explain abnormal readings and the scope and price of any deeper cleaning or repair."],
  ["Filter, airflow & temperature rise", "Inspect filter fit and condition, accessible airflow paths, and operating temperature rise as applicable. Compare filter resistance and equipment limits rather than choosing by thickness alone.", "Discuss a suitable replacement filter, any airflow concern, and whether ductwork or further measurement needs a separate assessment."],
  ["Vents, controls & service record", "Inspect accessible intake/exhaust routes and thermostat operation. Note shared venting with a water heater and explain any inspection limitations.", "Review completed checks, findings, recommendations, and next steps. Keep the dated invoice and available readings with the equipment records."],
];
export const maintenanceFaqs: FAQItem[] = [
  {
    question: "Does my furnace really need a tune-up every year if it’s working fine?",
    answer: "CPSC recommends a professional inspection of fuel-burning heating systems every year, including gas and propane furnaces. Follow your model’s maintenance instructions too. Producing heat doesn’t tell you whether venting, combustion, or other components need attention. Plan the visit before sustained winter use when practical; late summer or fall can be useful times to book in Great Falls. If the furnace starts behaving differently, don’t wait for the annual appointment.",
    sources: [
      { label: "CPSC: annual inspection of fuel-burning heating systems", url: maintenanceSources.annual },
      { label: "ENERGY STAR: pre-season maintenance checklist", url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist" },
    ],
  },
  {
    question: "What should a furnace tune-up include besides changing the filter?",
    answer: "Ask which checks and cleaning tasks are included for your furnace. Areas to discuss include combustion and venting, ignition, blower and electrical operation, airflow, thermostat controls, and drainage on equipment that has it. Inspection, cleaning, and repairs are different tasks. A visit may identify a need for deeper cleaning, parts, or more testing that requires a separate price and approval. Ask for a record of what was checked, the findings, any limits to the inspection, and what needs attention next.",
    sources: [
      { label: "Carrier: furnace cleaning and professional service", url: maintenanceSources.service },
      { label: "ENERGY STAR: heating maintenance checks", url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist" },
    ],
  },
  {
    question: "How much does a furnace tune-up cost in Great Falls?",
    answer: "Call for the current price and what the visit includes for your equipment. Confirm whether filters, cleaning, operating tests, and service records are included, and what would cost extra. A basic inspection, deep cleaning, and a repair visit can involve different work. National price guides are general budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Actual costs can be lower or substantially higher depending on the equipment, condition, access, included work, and any additional service you approve.",
    sources: [
      { label: "Carrier: furnace service scope and cleaning cost differences", url: maintenanceSources.service },
    ],
  },
  {
    question: "How often should I change my furnace filter, especially after wildfire smoke?",
    answer: "Follow the furnace and filter instructions, then check the filter’s actual condition. Filter design, system use, pets, dust, and smoke can change how quickly it loads up; one replacement schedule won’t fit every home. EPA advises more frequent checks and replacement during heavy smoke. Use the correct size and a filter your system can handle. A thicker filter or higher MERV number alone doesn’t prove compatibility. Turn the system off as instructed before changing the filter, and don’t run without one.",
    sources: [
      { label: "EPA: filter checks during wildfire smoke", url: maintenanceSources.smoke },
      { label: "ENERGY STAR: homeowner filter care", url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist" },
    ],
  },
  {
    question: "What furnace maintenance can I do myself between visits?",
    answer: "Keep homeowner care to the tasks in your owner instructions: inspect or replace an accessible filter, keep supply and return grilles clear, and leave room around the furnace for service. From ground level, look for loose snow around accessible exterior vents; don’t climb, chip ice, disconnect pipes, or alter venting. Leave internal burner or blower cleaning, fuel adjustments, wiring, safety controls, and condensate-trap disassembly to a qualified technician. If you smell gas or a CO alarm sounds, leave immediately and call 911 from a safe location.",
    sources: [
      { label: "Carrier: homeowner care versus professional furnace service", url: maintenanceSources.service },
    ],
  },
  {
    question: "Will a tune-up lower my heating bill or prevent a winter breakdown?",
    answer: "Correcting a dirty filter, restricted airflow, or an operating problem can help a struggling system work as intended. It doesn’t change the furnace’s rated efficiency or guarantee lower bills. Weather, fuel prices, thermostat settings, and the home’s heat loss also affect your costs. Maintenance can identify concerns, but a component can still fail later. Ask what was found and how the proposed work addresses it, rather than relying on a promised savings percentage or a breakdown-free winter.",
    sources: [
      { label: "Carrier: what maintenance can help identify", url: maintenanceSources.service },
    ],
  },
  {
    question: "Will skipping a tune-up void my furnace warranty?",
    answer: "Read your equipment’s actual warranty and maintenance instructions rather than assuming every furnace has the same rule. Maintenance requirements, registration deadlines, exclusions, and parts-versus-labor coverage vary. Keep dated invoices, completed checks, and available readings with the equipment records. A service invoice doesn’t guarantee a claim will be approved, and a maintenance plan is a separate agreement from the equipment warranty. Ask the manufacturer about any unclear condition before relying on coverage.",
    sources: [
      { label: "FTC: written warranty terms and service contracts", url: maintenanceSources.warranty },
    ],
  },
  {
    question: "My furnace keeps shutting off or making a new noise. Should I book a tune-up or a repair?",
    answer: "Describe the symptoms when you call so the right visit can be arranged. Repeated shutdowns, loss of heat, new grinding or banging, and unusual operation may need a diagnostic repair visit rather than routine maintenance. Don’t keep resetting the furnace or wait for a scheduled tune-up while the house gets colder. We offer 24/7 emergency service and repair for urgent no-heat problems. For gas odor, suspected CO exposure, or a sounding CO alarm, leave and call 911 from outside before contacting us.",
    sources: [
      { label: "Carrier: signs that need professional attention", url: maintenanceSources.service },
    ],
  },
];
