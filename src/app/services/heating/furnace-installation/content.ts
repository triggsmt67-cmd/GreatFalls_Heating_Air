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
export const installationFaqs = [
  {
    question: "How many BTUs does my Great Falls home need?",
    answer: "There is no reliable furnace size based only on square footage or the old nameplate. A load calculation considers the home’s envelope, windows, air leakage, and appropriate local design conditions. Equipment selection then uses the manufacturer’s output and altitude guidance. Ask whether the quoted BTU number is fuel input or heating output; the two are different. A smaller input rating can be appropriate after efficiency or building improvements, but it must be supported by the calculation.",
  },
  {
    question: "Is a two-stage or variable-speed furnace worth it here?",
    answer: "It may improve comfort in a suitable system, but compare the features separately. Burner staging changes heating output; a variable-speed blower controls airflow. Low-fire capacity and control behavior vary by model. During Great Falls winter warm-ups, lower output can help match a smaller load, but it will not automatically fix duct leakage or cold rooms. Compare installed cost, thermostat compatibility, noise, maintenance, and warranty terms rather than treating a feature label as a guaranteed saving.",
  },
  {
    question: "Should I choose an 80% furnace or a condensing furnace?",
    answer: "Compare installed scope as well as AFUE. A non-condensing model needs an approved combustion-air and venting arrangement. A condensing model also needs approved venting and condensate drainage, with freeze protection where required. A finished basement, shared water-heater chimney, and the route to an exterior termination can change the work involved. The appropriate choice depends on compatible equipment, applicable requirements, fuel use, and total installed cost.",
  },
  {
    question: "What happens to my water heater if the furnace leaves a shared chimney?",
    answer: "The remaining water heater’s venting needs to be assessed. Removing a furnace changes the appliances served by the vent, and an existing chimney or connector may no longer be appropriately sized or configured. That does not mean backdrafting is inevitable, but it does mean the estimate should identify any necessary vent changes and safety checks. Include the water heater in the replacement assessment, even if you are keeping it.",
  },
  {
    question: "Who handles furnace permits in Great Falls and outside city limits?",
    answer: "Confirm the authority for the installation address and put permit and inspection responsibilities in writing. Great Falls publishes a mechanical-permit fee schedule covering furnace work. An address outside city limits may have a different authority and process. Do not assume a homeowner permit is appropriate for a contractor’s furnace installation; ask the relevant building department which applications and inspections apply before work starts.",
  },
  {
    question: "How long will I be without heat during replacement?",
    answer: "Ask for a site-specific schedule before the existing furnace is disconnected. Equipment access, sheet-metal changes, venting, electrical work, inspections, and parts can affect the duration. For a winter replacement in Great Falls, discuss safe temporary arrangements and the plan if work extends beyond the expected window. Do not assume same-day completion, loan heaters, or next-morning availability unless those arrangements are explicitly confirmed.",
  },
  {
    question: "Does a new furnace qualify for a utility rebate?",
    answer: "Confirm current eligibility for your utility account and the exact equipment before purchasing. The Energy West-to-NorthWestern transition does not by itself establish rebate eligibility; gas and electric programs can have different account and project requirements. A heat pump pairing or qualifying thermostat may have separate rules. Use the current utility application and written program guidance rather than assuming every Great Falls household receives the same incentive.",
  },
];
