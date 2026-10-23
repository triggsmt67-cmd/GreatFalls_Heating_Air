import type { FAQItem } from "@/content/faqs";

export const installationSources = {
  sizing: "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection",
  acca: "https://www.acca.org/standards/technical-manuals",
  electrical: "https://bsesc.energy.gov/training-modules/hvac-electrical-panel-assessment",
  placement: "https://basc.pnnl.gov/resource-guides/ductless-mini-split-heat-pumps",
  refrigerants: "https://www.govinfo.gov/content/pkg/FR-2026-05-26/pdf/2026-10387.pdf",
  city: "https://greatfallsmt.gov/882/2021-Building-Code-Adoption",
  permits: "https://bsd.dli.mt.gov/Building-Codes-Permits/permit-applications/mechanical-permits/",
  northwestern: "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf",
  sunRiver: "https://sunriverelectric.coop/air-source-heat-pumps",
};
export const installationOptions = [
  ["Keep a suitable furnace", "A central dual-fuel retrofit combines a heat pump with furnace backup. Establish the approved indoor/outdoor combination, blower and coil compatibility, duct airflow, controls, electrical work, and the existing furnace’s condition before deciding what stays."],
  ["Replace the furnace and cooling together", "Compare the complete equipment combination and installation scope. A simultaneous changeout can make sense, but age alone does not decide the answer, and new components do not automatically make a system communicating or rebate-eligible."],
  ["Serve particular rooms with ductless", "An addition, a home without ducts, or a separate workspace may call for a room-by-room plan. Indoor-unit placement, closed-door coverage, drainage, line routing, electrical supply, and cold-weather output determine the scope."],
];
export const scopeChecklist = [
  ["Purpose, loads, and selection", "Rooms served, heating/cooling load assumptions, exact equipment, cold-weather capacity, and any limits to coverage."],
  ["Equipment kept or replaced", "Existing furnace or air handler, indoor coil, blower, ducts, controls, and refrigerant piping; compatibility and required changes."],
  ["Electrical work", "Equipment requirements and household load assessment; circuits, disconnects, panel/service work if needed, and the responsible trade."],
  ["Winter location and support", "Manufacturer clearances, expected snow/drifting, roof runoff, defrost drainage, service access, noise/vibration, and appropriate support."],
  ["Heating controls and backup", "Approved control arrangement, capacity and fuel-cost assumptions, operating limits, and an explanation of when backup is used."],
  ["Piping, permits, and startup", "Approved joining and line reuse/replacement, testing and charge procedures, permit/inspection responsibility, operating checks, and any follow-up test."],
  ["Price, documentation, and handoff", "Included work and exclusions, equipment records, warranty/registration responsibilities, owner instructions, and incentive paperwork requirements."],
];
export const installationFaqs: FAQItem[] = [
  {
    "question": "What size heat pump do I need, and is bigger better for Montana winters?",
    "answer": "Start with a heating and cooling load calculation for your home, not a square-footage chart or the old unit’s tonnage. The installer should compare that demand with the exact model’s output at local winter design conditions and its ability to run at lower output in mild weather. A larger unit can create cycling or comfort problems if its minimum output is too high for the load. Ask which rooms the design covers and how any cold-weather heating shortfall will be handled.",
    "sources": [
      {
        "label": "PNNL: cold-climate sizing and selection",
        "url": "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection"
      }
    ]
  },
  {
    "question": "Will I need to replace my 100-amp electrical panel to install a heat pump?",
    "answer": "The panel rating alone cannot answer that. Have a qualified professional assess the selected equipment, other household loads, existing service and circuits, and any electric backup heat. Keeping a gas or propane furnace may avoid resistance-heater loads, but it does not prove the existing electrical supply is adequate. Before approving the job, confirm which circuits, disconnects, panel or service changes are needed, who will do that work, and whether it is included in the price.",
    "sources": [
      {
        "label": "DOE Building Science Education: electrical panel assessment",
        "url": "https://bsesc.energy.gov/training-modules/hvac-electrical-panel-assessment"
      }
    ]
  },
  {
    "question": "Can I keep my current furnace, and how will the heat pump switch to backup heat?",
    "answer": "A suitable furnace may stay if the proposed indoor coil, blower, heat pump, airflow, and controls work together. Ask the quote to identify the exact equipment combination and the condition of the furnace being retained. The backup plan should account for heat-pump capacity, your home’s demand, fuel costs, and manufacturer operating requirements; there is no universal Great Falls changeover temperature. At handoff, ask how normal and backup operation were checked and which settings you should use.",
    "sources": [
      {
        "label": "Carrier: dual-fuel controls and changeover",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/dual-fuel-heating-system/"
      },
      {
        "label": "PNNL: capacity and supplemental-heat planning",
        "url": "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection"
      }
    ]
  },
  {
    "question": "Where should the outdoor heat pump go, and does it need a stand?",
    "answer": "Choose the location and support for the actual equipment and site, following the manufacturer’s instructions. Account for snow and drifting, roof runoff, defrost drainage, required airflow and service clearances, and noise or vibration near bedrooms. A fixed stand height does not suit every property, and meltwater should not be directed where it can freeze across a walkway. Have the quote show the proposed location, mounting method, line route, and drainage plan before work begins.",
    "sources": [
      {
        "label": "PNNL: outdoor placement and installation",
        "url": "https://basc.pnnl.gov/resource-guides/ductless-mini-split-heat-pumps"
      }
    ]
  },
  {
    "question": "Why do heat pump installation quotes vary so much, and what should the price include?",
    "answer": "Compare the exact equipment and all the work needed to serve the same rooms: indoor units or coil, ducts, electrical work, piping, drainage, outdoor support, backup heat, controls, removal, and applicable permits. Ask for exclusions, startup checks, warranty and registration responsibilities, and the process for approving extra work in writing. Online cost guides are budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air; your actual cost may be lower or substantially higher. Confirm any rebate separately with the utility serving your address before counting it toward the price.",
    "sources": [
      {
        "label": "Carrier: installation assessment and scope",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/hvac-installation/"
      }
    ]
  },
  {
    "question": "How long will installation take, and how do I know the system was checked before handoff?",
    "answer": "Confirm the job’s schedule and expected heating, cooling, and electrical interruptions before work begins. Access, equipment delivery, duct or electrical changes, permits, inspections, and weather can affect completion, so do not assume every installation takes one day. Ask for startup records covering the checks required for your equipment, including airflow, refrigerant setup, controls, and backup operation where applicable. If conditions prevent a required test, get the remaining check and follow-up plan in writing, along with owner instructions and warranty responsibilities.",
    "sources": [
      {
        "label": "Carrier: installation timing and startup",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/hvac-installation/"
      },
      {
        "label": "ENERGY STAR: quality installation checks",
        "url": "https://www.energystar.gov/saveathome/heating-cooling/hvac-quality-installation"
      }
    ]
  }
];
