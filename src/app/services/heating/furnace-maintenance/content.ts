export const maintenanceSources = {
  annual: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center/Home-Heating-Equipment",
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
export const maintenanceFaqs = [
  {
    question: "What should a furnace tune-up in Great Falls include?",
    answer: "Confirm the scope for your exact furnace when arranging service. A useful visit covers relevant combustion and venting checks, ignition, airflow, controls, electrical operation, and condensate handling where fitted. Inspection, cleaning, and repairs are different tasks: deeper cleaning, parts, or follow-up diagnosis may require separate approval. Ask what findings and records you will receive, and whether filters or other materials are included. Call Great Falls Heating and Air for current pricing and availability; a time estimate alone is not proof of a thorough inspection.",
  },
  {
    question: "How often should a gas or propane furnace be inspected?",
    answer: "CPSC recommends yearly professional inspection of fuel-burning home heating systems. Follow the furnace manufacturer’s maintenance instructions as well, and arrange service sooner for unusual operation or safety concerns. Propane equipment needs the same attention to model-specific requirements; fuel type alone does not establish a separate universal legal maintenance schedule. A furnace working normally today can still benefit from inspection, but annual service cannot predict or prevent every failure.",
  },
  {
    question: "When should I request a fall tune-up in Great Falls?",
    answer: "Request service before sustained winter heating demand when practical. Late summer or early fall can be useful planning windows, but smoke events, early cold fronts, and appointment availability vary. Do not wait for a particular month if the furnace is behaving abnormally. For a rural property near Fort Shaw or Simms, confirm service availability and access details when calling. A mid-winter problem may need a diagnostic repair visit rather than routine maintenance.",
  },
  {
    question: "Can a tune-up lower my winter heating bill?",
    answer: "Addressing a dirty filter, impaired airflow, or an operating fault can improve a system that is not working as intended. It does not change the furnace’s rated AFUE or guarantee a bill reduction. Outdoor weather, thermostat settings, energy prices, and the home’s heat loss also affect cost. Ask what problem was found and how the proposed work addresses it rather than relying on a promised savings percentage.",
  },
  {
    question: "What can I maintain myself between service visits?",
    answer: "Follow the owner’s instructions for inspecting and replacing the filter, and check it more often during heavy smoke events. Keep registers and accessible equipment space clear. From ground level, check for loose snow around accessible exterior vents; do not climb, chip ice, disconnect pipes, or alter venting. Test CO alarms and replace batteries or expired units according to each alarm’s instructions. Leave internal cleaning, gas adjustments, electrical testing, and condensate-trap service to a qualified technician. If you smell gas or suspect CO exposure, leave immediately and call emergency services or your utility from outside.",
  },
  {
    question: "Will furnace maintenance keep my warranty valid?",
    answer: "Keep dated service records and follow the maintenance requirements in your equipment’s actual warranty and owner instructions. Coverage, registration deadlines, exclusions, and responsibility for parts versus labor vary. A maintenance invoice documents work performed; it does not guarantee claim approval or extend coverage automatically. Do not assume a particular provider or a universal ten-year warranty is required. Review the written terms and ask the manufacturer about unclear requirements.",
  },
];
