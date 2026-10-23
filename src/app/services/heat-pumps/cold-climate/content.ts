import type { FAQItem } from "@/content/faqs";

export const heatPumpSources = {
  doe: "https://www.energy.gov/heat-pumps",
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
    description: "A central heat pump can provide cooling and some heating while a compatible furnace supplies backup. Confirm that the indoor equipment and controls work together, then compare the installation work and expected use of each fuel.",
  },
  {
    name: "Ductless: room-by-room heating & cooling",
    fit: "A home with a boiler, electric baseboards, no ducts, or a difficult addition.",
    description: "Where adding ducts would be disruptive, compare single- or multi-zone equipment and the rooms each indoor unit will serve. Placement and a plan for adjoining spaces matter; a hallway unit does not automatically cover closed bedrooms.",
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
export const heatPumpFaqs: FAQItem[] = [
  {
    "question": "Will a heat pump keep my Great Falls home warm when it is below zero?",
    "answer": "A cold-climate model may be suitable, but its minimum operating temperature alone does not tell you whether it can heat your whole house. Compare the exact model’s heating output at local winter design conditions with your home’s calculated heat loss. The design should explain any capacity shortfall and how supplemental heat or a furnace will cover it. Ask for that cold-weather plan before choosing equipment, rather than relying on a claim that a unit works at -20°F.",
    "sources": [
      {
        "label": "PNNL: cold-climate sizing and selection",
        "url": "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection"
      }
    ]
  },
  {
    "question": "Can I keep my gas or propane furnace and add a heat pump?",
    "answer": "That may be an option if the furnace, indoor coil, blower, and controls are compatible with the proposed heat pump. A dual-fuel system uses the heat pump for cooling and some heating, with the furnace available under the agreed control strategy. Ask what equipment stays and how changeover will account for capacity, energy prices, and manufacturer requirements. There is no single outdoor temperature at which every Great Falls system should switch to the furnace.",
    "sources": [
      {
        "label": "Carrier: dual-fuel systems and changeover",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/dual-fuel-heating-system/"
      }
    ]
  },
  {
    "question": "Will switching to a heat pump lower my heating bills?",
    "answer": "It may, but lower energy use does not automatically mean lower cost than your current fuel. Compare your electricity rate, gas or delivered propane price, existing furnace efficiency, and the selected heat pump’s performance as outdoor temperatures change. Include supplemental heat and the planned changeover settings in the estimate. Your electric bill may rise while your fuel bill falls, so compare total heating costs and ask for the assumptions behind any savings claim.",
    "sources": [
      {
        "label": "Carrier: dual-fuel operating costs",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/dual-fuel-heating-system/"
      }
    ]
  },
  {
    "question": "Do I need new ductwork, or can a heat pump use what I already have?",
    "answer": "A ducted heat pump may use existing ducts if their condition, capacity, and supply and return paths suit the proposed equipment. Having a furnace already does not establish that the ducts will deliver the needed heating and cooling to every room. Ductless units are another option for homes without ducts or for individual areas, but placement and room coverage still need planning. Tell the installer which bedrooms stay closed; one hallway unit should not be assumed to heat or cool them all.",
    "sources": [
      {
        "label": "ENERGY STAR: ducted and ductless options",
        "url": "https://www.energystar.gov/products/ductless_heating_cooling"
      }
    ]
  },
  {
    "question": "What affects the cost of installing a heat pump in Great Falls?",
    "answer": "The equipment, indoor units or coil, duct changes, electrical capacity, controls, piping, outdoor placement, and backup-heating plan all affect the installed price. Compare written quotes for the same rooms and included work, with exclusions and warranty responsibilities spelled out. General online prices are budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air; actual costs may be lower or substantially higher. Confirm any incentive with the utility serving your address before counting it toward the price, and approve additional work and its cost before it proceeds.",
    "sources": [
      {
        "label": "Carrier: installation assessment and scope",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/hvac-installation/"
      },
      {
        "label": "PNNL: equipment selection considerations",
        "url": "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection"
      }
    ]
  },
  {
    "question": "My heat pump runs for a long time or briefly blows cooler air. Is something wrong?",
    "answer": "Longer run times can be part of normal operation, and a brief period of cooler air can occur during defrost, but neither observation proves the system is working correctly. Note whether the house reaches its set temperature, any alerts or unusual sounds, and whether ice clears through normal defrost operation. Call for service if it cannot maintain temperature, ice persists, or operation changes unexpectedly; do not chip ice, apply heat, open panels, or bypass controls. Stay clear of smoke or a burning smell; for a fire or immediate threat, leave and call 911.",
    "sources": [
      {
        "label": "Carrier: heat pump symptoms and defrost",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/heat-pumps/heat-pump-troubleshooting/"
      }
    ]
  }
];
