export const repairSources = {
  frozen: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/will-frozen-ac-fix-itself/",
  refrigerants: "https://www.epa.gov/ods-phaseout/homeowners-and-consumers-frequently-asked-questions",
  transition: "https://www.epa.gov/hfcs/frequent-questions-phasedown-hydrofluorocarbons",
  smoke: "https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq",
};
export const repairSymptoms = [
  ["Warm air while the system runs", "Thermostat settings, indoor airflow, outdoor-unit operation, or refrigerant performance may be involved. Report whether the problem affects every room and whether it began suddenly or developed over time."],
  ["Outdoor unit hums, clicks, or will not start", "A capacitor, contactor, motor, compressor, wiring, or control fault can produce overlapping symptoms. Electrical and operating tests identify what needs attention. Keep covers closed and do not reach through the fan grille."],
  ["Ice, weak airflow, or water after shutdown", "Airflow restrictions, blower trouble, or refrigerant issues may cause icing. Drainage problems can also produce water without ice. Stop cooling if ice is visible and report where water appears; leave equipment near electrical hazards alone."],
  ["Cottonwood buildup or unusual outdoor noise", "Visible debris and new sounds are useful observations, not a complete diagnosis. Coil condition, fan operation, and related components may need inspection. Stop using equipment with new grinding, smoke, or a burning smell."],
];
export const homeownerChecks = [
  ["Confirm thermostat settings", "Check that cooling is selected and the setpoint calls for cooling. Note schedules, displayed alerts, and whether fan-only operation explains airflow without cooling. Follow the thermostat’s owner instructions."],
  ["Inspect an accessible filter and grilles", "Turn the system off as instructed before changing its filter. Use the specified size and compatible type, keep supply and return grilles clear, and do not run without a filter. Report any recent filter change or blocked airflow."],
  ["Observe power and outdoor conditions", "Note a tripped breaker or an external switch that appears off. Do not open electrical compartments, handle wiring, operate unfamiliar disconnects, or repeatedly reset a breaker. From outside the cabinet, note debris or visible ice; leave coil washing and disassembly for an approved maintenance procedure."],
  ["Report visible drainage problems", "Tell us about water around the indoor unit or an alert visible without removing panels. A float switch may stop cooling on some systems, but do not bypass it, open equipment, or attempt drain clearing near electrical components. Stay clear of water near electrical equipment."],
];
export const repairDecisions = [
  ["An electrical component or control fault", "Test results, component compatibility, related operating conditions, and the rest of the equipment’s condition.", "Compare the proposed repair and any follow-up with continued service. A part name alone does not establish the scope or completion time."],
  ["Repeated icing or restricted airflow", "Filter fit, blower operation, accessible airflow paths, coil condition, and refrigerant performance under suitable test conditions.", "Address the identified cause and explain how operation will be checked afterward. Thawing is a preparation step, not the repair itself."],
  ["Low charge or an identified refrigerant leak", "Where the loss occurred, repair access, compatible refrigerant, parts availability, and the condition of major components.", "Compare leak diagnosis and repair with replacement where appropriate. Avoid budgeting for repeated recharges as ordinary upkeep."],
  ["A major failure or recurring repair history", "Written repair scope, remaining equipment condition, applicable warranty, compatible parts, and installation requirements for an alternative.", "Compare repair and complete replacement scopes. Age informs the conversation; it does not decide the answer by itself."],
];
export const repairFaqs = [
  {
    question: "Why is my AC running but blowing warm air in Great Falls?",
    answer: "Warm air can involve thermostat settings, restricted airflow, outdoor electrical or mechanical faults, or refrigerant performance. Note whether all rooms are affected, whether the outdoor unit runs, and any visible ice or alerts without opening equipment. A warm afternoon or cottonwood on the cabinet does not identify the failed component. Great Falls Heating and Air’s repair approach connects the recommendation to test findings and explains the proposed work before approval. If there is ice, stop cooling; for smoke, sparking, or a burning smell, stop troubleshooting and stay clear.",
  },
  {
    question: "What should I do if my AC lines or indoor coil are frozen?",
    answer: "Switch cooling OFF and call for guidance. Use fan-only mode only if the blower operates normally and your equipment instructions allow it. Do not chip ice, apply heat, remove panels, or repeatedly restart cooling. Report water near electrical equipment and stay clear. Thawing time varies; there is no guaranteed two-hour window or first-visit repair. Once the system can be tested appropriately, the cause of icing still needs assessment. Weak airflow alone does not prove that the coil is frozen.",
  },
  {
    question: "Does low refrigerant just need a top-off?",
    answer: "Ask what establishes that the charge is low and why refrigerant was lost or the charge is incorrect. Low charge calls for investigation rather than a standing plan for repeated recharges. A technician can explain the diagnostic work, any identified leak, repair access, compatible parts and refrigerant, and how performance will be checked afterward. Review the scope and price before approving work. Refrigerant handling belongs with a qualified technician; do not open connections or attempt a recharge yourself.",
  },
  {
    question: "What affects the cost of an AC repair in Great Falls?",
    answer: "The diagnostic scope, actual fault, parts and refrigerant needed, access, additional testing, and any applicable warranty affect the cost. Confirm the diagnostic fee and what it includes when booking. Ask for the proposed repair price, exclusions, parts availability, and any follow-up before approving the work. Published national averages are not a quote for your home. Call Great Falls Heating and Air to discuss current pricing and availability for your equipment and address.",
  },
  {
    question: "Do refrigerant rules mean I must replace my R-410A or R-22 AC?",
    answer: "No. The transition does not itself require replacing existing R-410A equipment, and EPA does not require replacing an existing R-22 system simply because of its refrigerant. Repair feasibility still depends on equipment condition, compatible parts, refrigerant availability, and cost. R-32 and R-454B are for equipment designed for them; they are not drop-in replacements for R-410A. Have the technician identify the actual refrigerant and explain compatible service options before deciding.",
  },
  {
    question: "When should I compare AC repair with replacement or a heat pump?",
    answer: "Compare options when diagnosis finds a major fault, repeated failures, difficult parts availability, or repair costs that warrant a wider discussion. Review the written repair price alongside the complete installation scope, equipment compatibility, warranty, and expected use of an alternative. A heat pump may be worth comparing when cooling needs replacement, but its value depends on installation work, heating needs, and actual fuel costs. Confirm any utility incentive for your account and exact project separately. Neither age alone nor an advertised rebate settles the decision.",
  },
];
