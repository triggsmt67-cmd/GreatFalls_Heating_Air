export const installationSources = {
  sizing: "https://www.acca.org/standards/technical-manuals",
  airflow: "https://hvac-blog.acca.org/hey-ed-what-is-the-correct-airflow-for-an-ac/",
  city: "https://greatfallsmt.gov/882/2021-Building-Code-Adoption",
  permits: "https://bsd.dli.mt.gov/Building-Codes-Permits/permit-applications/mechanical-permits/",
  refrigerants: "https://www.govinfo.gov/content/pkg/FR-2026-05-26/pdf/2026-10387.pdf",
  smoke: "https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq",
  rebate: "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf",
};
export const installationPaths = [
  ["Replace an existing central AC", "Compare the outdoor unit with the indoor coil, blower, controls, and refrigerant piping. Keeping a sound furnace may be possible, but the proposed combination and any reused components must meet the selected equipment’s requirements."],
  ["Add cooling to an existing furnace", "Heating ducts do not automatically establish cooling capacity or room coverage. Assess the blower, supply and return paths, coil space, electrical supply, drainage, outdoor placement, and access before defining the work."],
  ["Solve a room-specific comfort problem", "An addition or an upstairs bedroom may need an airflow assessment or a separate ductless option. Define which rooms need cooling, including rooms with closed doors, before choosing a whole-house replacement or an additional system."],
];
export const estimateChecklist = [
  ["Comfort goal and equipment selection", "Rooms included, known limitations, sizing basis, and exact indoor/outdoor equipment and controls."],
  ["Existing furnace and airflow", "Blower compatibility, supply/return changes, filter arrangement, and how cooling airflow will be checked."],
  ["Refrigerant piping and drainage", "Which lines can be reused under manufacturer requirements, which need replacement, and the condensate route and protection."],
  ["Electrical and permits", "Required circuit, disconnect, wiring or panel work; permit responsibility and applicable inspections for the project address."],
  ["Placement and access", "Support, required clearances, service access, line routing, and any agreed landscaping or surface restoration."],
  ["Startup and verification", "Manufacturer-required setup and operating checks, test conditions, recorded results, and any seasonal follow-up needed."],
  ["Handoff, exclusions, and warranty", "Removal/disposal, cleanup, owner controls and filter instructions, warranty terms/registration responsibilities, and work excluded from the price."],
];
export const installationFaqs = [
  { question: "Can I keep my furnace when replacing my AC in Great Falls?", answer: "Often it is worth evaluating, but compatibility must be established for the proposed system. The furnace blower, indoor coil, controls, airflow, and refrigerant piping need assessment against the selected equipment’s requirements. Great Falls Heating and Air’s installation perspective is to explain what stays, what changes, and which rooms the work is intended to cool. A newer outdoor unit alone does not establish that the existing indoor equipment is suitable." },
  { question: "Will a bigger air conditioner fix a hot upstairs bedroom?", answer: "Not necessarily. Room heat gain, sun exposure, supply and return paths, insulation, windows, and door positions can affect comfort. A whole-house capacity increase may leave the original distribution problem unresolved. Identify when and where the room gets hot, then compare airflow or building improvements with the appropriate equipment options. Load calculations and equipment selection should use the home’s actual conditions rather than a square-footage rule alone." },
  { question: "What affects the cost of AC installation in Great Falls?", answer: "Equipment selection, indoor coil and furnace compatibility, ductwork, electrical supply, refrigerant piping, drainage, outdoor placement, permits, removal, and access affect the installed scope and price. Ask for included work, exclusions, startup checks, and warranty responsibilities in writing. Call to discuss a written estimate for your home, what it includes, and current availability." },
  { question: "Do 2026 refrigerant rules mean every new AC must use R-32 or R-454B?", answer: "Do not assume that from the calendar alone. EPA’s May 2026 final rule, effective July 27, 2026, permits continued installation of qualifying higher-GWP residential and light-commercial equipment manufactured or imported before January 1, 2025. Ask for the actual refrigerant, equipment identification, eligibility, and installation requirements in the proposal. Lower-GWP systems may use R-32 or R-454B and require compatible components and model-specific safety provisions; these refrigerants are not drop-in replacements for R-410A." },
  { question: "Should I compare a heat pump with standard central AC?", answer: "Yes, especially when cooling already needs replacement, but compare the complete installed scope and intended use. A heat pump provides cooling and can provide heating; its value depends on equipment performance, existing furnace compatibility, backup planning, controls, and actual electricity and fuel costs. Do not assume an incentive makes it cheaper. Verify the utility account, exact equipment, application requirements, timing, and available funding separately before relying on a rebate." },
  { question: "Does central AC protect my home from Great Falls wildfire smoke?", answer: "Cooling can help you keep windows closed during smoke events, but the AC itself is not a complete smoke-filtration solution. Fine-particle filtration needs a compatible filter or suitable air cleaner and an airflow assessment. Standard ductless filters should not be assumed to remove fine smoke effectively. Plan cooling and filtration together, follow current public-health guidance, and avoid selecting a restrictive filter solely by its MERV rating without checking system compatibility." },
];
