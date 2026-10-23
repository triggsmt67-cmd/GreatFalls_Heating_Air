import type { FAQItem } from "@/content/faqs";

export const ductlessSources = {
  planning: "https://basc.pnnl.gov/resource-guides/ductless-mini-split-heat-pumps",
  sizing: "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection",
  historic: "https://npgallery.nps.gov/AssetDetail/8327df66-87d9-43fb-91bf-259b58154a5c",
  zoning: "https://www.mitsubishicomfort.com/articles/zoned-home",
  smoke: "https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq",
  northwestern: "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf",
  sunRiver: "https://sunriverelectric.coop/air-source-heat-pumps",
};
export const ductlessUses = [
  ["Add cooling to a boiler-heated home", "Identify the living areas and bedrooms that need cooling, existing heating to retain, and practical indoor-unit locations. Check whether the planned zones cover daily use with doors in their usual positions."],
  ["Address a particular room", "An addition, upper-floor bedroom, or separate workspace may need its own assessment. Compare the room’s load, insulation, sun exposure, and existing airflow before selecting a single-zone unit or another solution."],
  ["Compare an electric-heating upgrade", "Assess the intended heating coverage and cold-weather output alongside existing baseboards or other heaters. Compare expected electricity use using actual equipment data and rates, with a defined supplemental-heating plan."],
];
export const indoorStyles = [
  ["High-wall unit", "Wall space, airflow direction, mounting clearances, filter access, and a workable piping/drain route.", "Confirm the position from normal seating and sleeping areas, including any visible indoor piping or covers."],
  ["Ceiling cassette", "Ceiling depth and framing, access, drainage or pump requirements, electrical routing, and service space.", "A suitable opening and accessible space must be established; a flush grille does not mean no ceiling work."],
  ["Floor console", "Low-wall space, required clearances, room layout, airflow, and access for cleaning and service.", "Compare with furniture and any existing radiators or baseboards; follow the exact model’s mounting instructions."],
];
export const ductlessScope = [
  ["Rooms and coverage", "A zone plan showing rooms served, doors normally closed, intended heating/cooling use, loads, and any coverage limitations."],
  ["Equipment combination", "Exact indoor/outdoor models, approved combination, minimum and maximum output, shared capacity, controls, and operating-mode restrictions."],
  ["Indoor appearance and access", "Unit style and location, visible piping, wall/ceiling openings, finish restoration, filter access, and space for future service."],
  ["Piping and drainage", "Proposed routes and covers, approved wall penetrations and seals, condensate destination, gravity drainage or a pump, and maintenance access."],
  ["Outdoor and electrical work", "Support, snow/drainage/clearance and noise considerations, electrical assessment, required circuits, and permit responsibilities."],
  ["Completion and ownership", "Manufacturer-required installation/startup checks, controls demonstration, owner care, actual warranty terms, written price/exclusions, and rebate documentation."],
];
export const ductlessFaqs: FAQItem[] = [
  {
    "question": "Can one mini-split cool several rooms if the bedroom doors are closed?",
    "answer": "Do not assume a unit in the living room or hallway will keep closed bedrooms comfortable. Room loads, layout, and airflow paths determine how much heating or cooling reaches each space. Ask for a room-by-room plan that reflects how you actually use the house, including closed doors at night. That plan may use separate indoor units or another distribution arrangement; a bigger living-room unit alone does not fix a blocked airflow path.",
    "sources": [
      {
        "label": "ENERGY STAR: mini-split placement and room coverage",
        "url": "https://www.energystar.gov/products/ductless_heating_cooling"
      }
    ]
  },
  {
    "question": "Is one multi-zone mini-split better than separate single-zone systems?",
    "answer": "Neither arrangement is automatically better. Compare the rooms’ loads and schedules, the approved equipment combination, minimum output when only one room needs conditioning, shared capacity, outdoor space, and installed cost. Small bedrooms deserve particular attention because a system can have more minimum output than those rooms need. Ask about the selected system’s mode restrictions too; separate temperature controls do not necessarily allow heating in one room while another cools.",
    "sources": [
      {
        "label": "PNNL: system configuration and capacity selection",
        "url": "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection"
      },
      {
        "label": "PNNL: ductless zone planning",
        "url": "https://basc.pnnl.gov/resource-guides/ductless-mini-split-heat-pumps"
      }
    ]
  },
  {
    "question": "Can a ductless mini-split replace my boiler or baseboards for a Great Falls winter?",
    "answer": "Possibly, but the decision needs a heating-load calculation and the exact equipment’s available output at local winter design conditions. A low advertised operating temperature does not establish that the system can heat every room. Have the proposal identify the intended heating coverage, any shortfall, and the supplemental heat and controls needed to cover it. Do not remove existing heating until the complete plan is established; a boiler or baseboard system will not automatically coordinate with the mini-split.",
    "sources": [
      {
        "label": "PNNL: cold-climate capacity and supplemental heat",
        "url": "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection"
      }
    ]
  },
  {
    "question": "How much does a ductless mini-split cost, and what should be included in the quote?",
    "answer": "The number and style of indoor units, exact equipment combination, electrical work, piping routes, drains or pumps, outdoor support, access, and applicable permits affect the installed price. Compare quotes for the same rooms and heating and cooling coverage, with finish repairs, startup checks, warranty responsibilities, and exclusions spelled out. Online prices are budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air; actual costs may be lower or substantially higher. Confirm any incentive separately with your utility before relying on it, and agree on the price of extra work before approving it.",
    "sources": [
      {
        "label": "PNNL: ductless installation scope",
        "url": "https://basc.pnnl.gov/resource-guides/ductless-mini-split-heat-pumps"
      }
    ]
  },
  {
    "question": "Will installation leave visible pipes or require a drain pump?",
    "answer": "Ask the installer to show the indoor-unit positions, line routes, wall or ceiling openings, and drain destination before work begins. Some locations allow gravity drainage, while others need a suitable condensate pump with access for maintenance. Confirm which piping and covers will be visible, how penetrations will be sealed, and who handles patching or finish repairs. A clean-looking indoor unit still needs filter and service access; do not assume every route can be hidden inside a wall.",
    "sources": [
      {
        "label": "PNNL: mini-split routing, drainage and installation",
        "url": "https://basc.pnnl.gov/resource-guides/ductless-mini-split-heat-pumps"
      }
    ]
  },
  {
    "question": "Is cleaning the washable filters enough to maintain a mini-split?",
    "answer": "Filter care is only part of maintenance. Follow the exact model’s owner instructions for permitted cleaning, safe shutdown, filter type, and frequency; keep that access clear of furniture. Coils, blower components, drains, any fitted pump, and outdoor equipment also need appropriate inspection and service. Ask what a maintenance visit includes and whether deeper cleaning costs extra, and leave electrical work, refrigerant handling, and unfamiliar disassembly to a qualified technician.",
    "sources": [
      {
        "label": "Carrier: ductless maintenance and professional service",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/ductless-mini-splits/mini-split-maintenance/"
      }
    ]
  }
];
