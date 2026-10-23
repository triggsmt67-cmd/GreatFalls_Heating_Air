import type { FAQItem } from "@/content/faqs";

export const installationSources = {
  sizing: "https://hvac-blog.acca.org/hvac-bigger-frequently-not-better/",
  venting: "https://bsesc.energy.gov/energy-basics/hvac-direct-vent-equipment",
  combustion: "https://www.energy.gov/documents/combustionappliance-safetytech-briefpdf",
  city: "https://www.greatfallsmt.gov/DocumentCenter/View/6117/Mechanical-Permit-Fees-Effective-10-05-2023",
  northwestern: "https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives",
};
export const estimateRows = [
  ["Sizing & equipment", "Exact model numbers, rated input and output, staging, and the basis for equipment selection.", "What heat-loss assumptions and local design conditions were used? How is altitude accounted for in equipment output?"],
  ["Ductwork & filtration", "Included supply/return changes, filter size and type, and how airflow will be checked.", "Which existing ducts stay? Are proposed changes required, optional, or excluded from this price?"],
  ["Venting & drainage", "The approved vent route, combustion-air provision, condensate handling, and any shared-chimney work.", "What happens to the water heater’s vent if the new furnace uses a separate exhaust?"],
  ["Permits & inspection", "The applicable permitting authority, responsibility for applications, fees, and inspection arrangements.", "Are fees included? Who schedules the inspection and closes out any corrections?"],
  ["Gas, electrical & controls", "Necessary fuel conversion, piping or electrical work, thermostat compatibility, and subcontracted work.", "Which upgrades are included, and what site conditions could change the scope?"],
  ["Removal & commissioning", "Old-equipment disposal, startup tests, documented settings, and homeowner instructions.", "What operating checks and records will I receive before the job is complete?"],
  ["Price, schedule & warranty", "Total price, exclusions, payment terms, estimated downtime, and separate parts/labor warranty terms.", "Who registers the equipment, what deadlines apply, and what is the plan if the work takes longer?"],
];
export const airflowChecks = [
  ["Return-air capacity", "Measure the airflow and pressure the proposed equipment needs. A narrow return in an older home may need attention, but age or neighborhood alone does not prove a duct is undersized."],
  ["Filter fit & resistance", "Compare the filter’s pressure drop at the required airflow, cabinet space, and service access. A deeper media cabinet can be an option; no filter has zero resistance or a universal replacement interval."],
  ["Supply transitions & leakage", "Check how the replacement cabinet connects to existing ducts. Specify any transition fabrication, sealing, or vibration treatment in the estimate rather than assuming every installation needs the same parts."],
  ["Room-by-room comfort", "Record which rooms are cold and whether problems change with doors closed. Review supply and return paths, insulation, and balancing before assuming a larger furnace will fix upstairs comfort."],
];
export const installationFaqs: FAQItem[] = [
  {
    question: "How much does it cost to replace a furnace in Great Falls?",
    answer: "There isn’t one replacement price that fits every home. The furnace model and size, ductwork, venting, drainage, fuel and electrical work, access, permits, and removal all affect the total. Ask for a written estimate that separates required work, optional upgrades, and exclusions. National price guides are general budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Your project may cost less or substantially more. Review the price and how any additional work would be approved before committing.",
    sources: [
      { label: "Carrier: factors affecting a new gas furnace’s cost", url: "https://www.carrier.com/us/en/residential/hvac-resources/furnaces/new-gas-furnace-cost/" },
    ],
  },
  {
    question: "What size furnace do I need? Should I get the same BTUs as the old one?",
    answer: "The old rating is useful information, but it isn’t a sizing calculation. New windows, added insulation, air leaks, or a finished room can change how much heat your house needs. Ask for a load calculation using the home’s current condition and local winter design conditions. Compare the selected furnace’s heating output, not just its fuel-input rating, and follow its altitude requirements. A bigger furnace won’t automatically fix a cold bedroom; airflow and insulation may need attention too.",
    sources: [
      { label: "ACCA: why bigger HVAC equipment isn’t always better", url: installationSources.sizing },
    ],
  },
  {
    question: "Is a two-stage furnace worth the extra cost? Is that the same as variable speed?",
    answer: "They describe different features. A two-stage burner has lower and higher heating outputs; a variable-speed blower adjusts airflow. The right combination may improve comfort in a suitable system, but it won’t automatically fix duct problems or guarantee lower bills. Ask what difference the upgrade should make in your home. Compare the added price, controls, noise, service needs, and warranty terms before paying for features you may not need.",
    sources: [
      { label: "Carrier: heating-output controls versus variable-speed airflow", url: "https://www.carrier.com/us/en/residential/hvac-resources/furnaces/modulating-vs-variable-speed/" },
    ],
  },
  {
    question: "Should I choose an 80% furnace or a high-efficiency condensing furnace?",
    answer: "Compare the installation work along with the AFUE efficiency rating. A non-condensing furnace needs suitable combustion air and venting. A condensing furnace also needs approved venting and a way to handle condensate, with freeze protection where needed. A finished basement, exterior vent route, or shared water-heater chimney can change the work involved. Compare the full installed price, expected fuel use, and the equipment that fits your home. The efficiency percentage alone won’t tell you what your bills will be.",
    sources: [
      { label: "DOE Building Science Education: direct-vent equipment", url: installationSources.venting },
    ],
  },
  {
    question: "Can I replace just the furnace and keep my existing air conditioner?",
    answer: "Possibly. The new furnace’s blower, indoor cooling coil, controls, and duct airflow need to work with your existing AC. Have the equipment checked together before deciding what stays. Ask which parts can be reused, which need changing, and how both heating and cooling will be tested. If you expect to replace the AC later or add a heat pump, mention that now so the furnace proposal accounts for that plan. Replacing one system doesn’t automatically mean replacing both.",
    sources: [
      { label: "Carrier: choosing a furnace and assessing existing cooling equipment", url: "https://www.carrier.com/residential/en/ca/products/furnaces/buying-a-furnace/" },
    ],
  },
  {
    question: "Will my gas water heater need changes if the new furnace stops using the chimney?",
    answer: "It needs a venting assessment, even if you’re keeping the water heater. Removing the furnace changes the appliances using the chimney. The remaining vent may need changes so the water heater can vent safely; it isn’t automatically safe to leave it as it was. Ask what was checked and have any required venting work and safety tests included in the written proposal. A furnace replacement doesn’t automatically require a new water heater, but it does require looking at how the remaining appliance will vent.",
    sources: [
      { label: "PNNL: shared flues and an orphaned water heater after furnace replacement", url: "https://basc.pnnl.gov/resource-guides/gas-fired-tankless-water-heaters" },
    ],
  },
  {
    question: "How long will furnace replacement take, and will I be without heat overnight?",
    answer: "Ask for the schedule for your actual job before the old furnace is disconnected. Equipment access, duct changes, venting, electrical work, inspections, and parts can affect completion. For a winter replacement, agree on safe temporary arrangements and what happens if the work runs longer. Don’t assume same-day completion, loan heaters, or overnight heat unless those arrangements are confirmed. Before the job is complete, ask for startup results, operating instructions, filter details, and warranty and registration responsibilities.",
    sources: [
      { label: "Carrier: furnace installation steps and timing considerations", url: "https://www.carrier.com/us/en/residential/hvac-resources/furnaces/furnace-installation/" },
    ],
  },
  {
    question: "Do I need a permit for furnace replacement, and who handles it?",
    answer: "Confirm the requirements for your installation address before work starts. Great Falls publishes mechanical-permit forms, while projects outside a certified local jurisdiction follow the state’s rules, including applicable residential exemptions. Don’t assume the city process applies to every rural home. Ask the relevant building department what is required, and have the proposal state who handles any permits, fees, inspections, and corrections. A homeowner application isn’t automatically the right form for a contractor’s installation.",
    sources: [
      { label: "City of Great Falls: building and mechanical-permit forms", url: "https://greatfallsmt.gov/880/Building-Forms" },
      { label: "Montana DLI: mechanical-permit jurisdiction and exemptions", url: "https://bsd.dli.mt.gov/Building-Codes-Permits/permit-applications/mechanical-permits/" },
    ],
  },
];
