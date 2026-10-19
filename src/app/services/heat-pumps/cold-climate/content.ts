export const heatPumpSources = {
  doe: "https://www.energy.gov/energysaver/heat-pump-systems",
  sizing: "https://bsesc.energy.gov/lecture-notes/cold-climate-heat-pump-sizing-understand",
  weather: "https://www.weather.gov/media/wrh/online_publications/TMs/TM-64.pdf",
  northwestern: "https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives",
  sunRiver: "https://sunriverelectric.coop/air-source-heat-pumps",
};
export const heatPumpCommunities = ["Great Falls", "Black Eagle", "Belt", "Vaughn", "Ulm", "Sun Prairie", "Cascade", "Fort Shaw", "Simms", "Centerville"];
export const configurations = [
  {
    name: "Dual-fuel: heat pump + furnace",
    fit: "A home with forced-air ducts and a gas or propane furnace worth retaining.",
    description: "For a Fox Farm split-level or a rural home near Ulm, a central heat pump can provide cooling and some of the heating while a compatible furnace supplies backup. The changeover setting should reflect your equipment’s output, heat loss, and actual gas or propane costs—not a preset temperature copied from another house.",
  },
  {
    name: "Ductless: room-by-room heating & cooling",
    fit: "A home with a boiler, electric baseboards, no ducts, or a difficult addition.",
    description: "For a North Side home where adding ductwork would be disruptive, single- or multi-zone equipment may be worth comparing. Each indoor unit needs a suitable location and a plan for moving heat into adjoining spaces. A head in the hallway does not automatically cover every closed bedroom.",
  },
  {
    name: "All-electric: heat pump + a cold-weather plan",
    fit: "A homeowner considering electric heating without gas or propane backup.",
    description: "Start with the home’s winter load, the chosen model’s low-temperature capacity, and available electrical service. Some designs use an air handler with supplemental resistance heat; others retain existing electric heaters. Include backup demand and electrical upgrades in the quote before deciding whether this fits your property.",
  },
];
export const fuelComparisons = [
  ["Natural gas furnace", "Your marginal gas and electricity rates, furnace efficiency, and the heat pump’s efficiency at different temperatures.", "Compare the cost per unit of delivered heat. Set a changeover strategy that also respects equipment capacity and manufacturer requirements."],
  ["Delivered propane", "Your actual delivered propane price, furnace efficiency, electricity rate, and equipment performance.", "Estimate how much heating the heat pump could cover and how much propane backup remains. Delivery location alone does not determine the right setpoint."],
  ["Electric baseboard or wall heaters", "Heat loss room by room, the heat pump’s output and efficiency, and which spaces remain served by resistance heat.", "Compare installation cost and expected electricity use, including supplemental heat. Do not assume one indoor unit replaces every heater in the house."],
];
export const winterDetails = [
  ["Snow clearance & service access", "Choose mounting height for local accumulation and drifting, required clearances, and future service access. A sheltered Great Falls yard and an exposed site outside Belt may need different placement decisions."],
  ["Defrost water & ice management", "Plan where meltwater will drain so it does not collect under the unit or freeze across a walkway. Use base-pan heating only where specified or approved for the selected equipment."],
  ["Wind exposure & outdoor placement", "Consider the site’s exposure to wind, roof runoff, and drifting snow. Follow manufacturer guidance for orientation and any approved baffles; do not enclose the outdoor unit or obstruct airflow."],
  ["Compatible controls & commissioning", "Match the indoor and outdoor equipment, controls, refrigerant piping, and electrical supply. Commission and document operation using the manufacturer’s procedures, including any furnace changeover and supplemental-heat settings."],
];
export const heatPumpFaqs = [
  {
    question: "Can a cold-climate heat pump keep a Great Falls home warm at -20°F?",
    answer: "It depends on the exact model’s heating output at that temperature and your home’s heat loss. A published minimum operating temperature does not show whether the unit can heat the entire house. Compare low-temperature capacity data with a load calculation and design any supplemental heat or furnace backup around the shortfall. Some homes can use an all-electric design; others are better suited to dual fuel. Neither approach should be selected from a temperature claim alone.",
  },
  {
    question: "Is a heat pump cheaper to run than natural gas or propane here?",
    answer: "There is no single Great Falls changeover temperature that works for every household. Compare your electricity rate, natural gas or delivered propane price, furnace efficiency, and the heat pump’s efficiency as outdoor temperature changes. A heat pump may reduce purchased fuel while increasing electricity use, so compare total heating cost rather than just one bill. Ask for the assumptions behind any savings estimate.",
  },
  {
    question: "What is the difference between a thermal and an economic balance point?",
    answer: "The thermal balance point is where the heat pump’s available output matches the home’s heating demand; below it, supplemental heat may be needed. An economic balance point compares the cost of delivered heat from the heat pump with an alternative fuel source. Manufacturer operating limits and control requirements are a separate consideration. These factors inform a dual-fuel changeover strategy, but they are not interchangeable settings.",
  },
  {
    question: "Is vapor coming from my outdoor heat pump normal in winter?",
    answer: "A brief vapor plume can occur during defrost as the system clears frost from the outdoor coil. Timing and fan behavior vary by model and conditions. Do not assume persistent smoke, a burning smell, heavy ice buildup, or abnormal noise is normal defrost. Stay clear and arrange service for abnormal operation; for a fire or immediate danger, leave and call 911. Never chip ice from the coil, apply heat to it, or bypass controls.",
  },
  {
    question: "What heat pump rebates should Great Falls and rural homeowners check?",
    answer: "Check the program offered by the utility serving your property before choosing equipment. NorthWestern Energy offers E+ incentives for qualifying measures, while Sun River Electric Cooperative publishes a separate air-source heat pump program with approval requirements. Eligibility depends on the account, project, equipment, timing, and program rules. Do not assume a model’s ENERGY STAR label or pairing with a furnace guarantees a rebate. Confirm the current application and required documentation with your utility before purchasing.",
  },
  {
    question: "Should I replace my old central AC with a heat pump?",
    answer: "It is worth comparing both options when your AC needs replacement. A heat pump provides cooling and can also supply heating, but the installed price, compatible indoor equipment, controls, electrical work, and operating costs may differ. For a Great Falls home with a serviceable furnace, dual fuel may be one option. Request comparable written quotes and confirm utility incentives separately rather than assuming the upgrade costs very little after a rebate.",
  },
];
