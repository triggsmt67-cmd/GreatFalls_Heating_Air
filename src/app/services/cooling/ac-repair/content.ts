import type { FAQItem } from "@/content/faqs";

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
  ["An electrical component or control fault", "Test results, component compatibility, related operating conditions, and the rest of the equipment’s condition.", "Compare the proposed repair and any follow-up with continued service. Knowing the part name alone won’t tell you all the work needed or how long it will take."],
  ["Repeated icing or restricted airflow", "Filter fit, blower operation, accessible airflow paths, coil condition, and refrigerant performance under suitable test conditions.", "Address the identified cause and explain how operation will be checked afterward. Thawing is a preparation step, not the repair itself."],
  ["Low charge or an identified refrigerant leak", "Where the loss occurred, repair access, compatible refrigerant, parts availability, and the condition of major components.", "Compare leak diagnosis and repair with replacement where appropriate. Avoid budgeting for repeated recharges as ordinary upkeep."],
  ["A major failure or recurring repair history", "Written repair scope, remaining equipment condition, applicable warranty, compatible parts, and installation requirements for an alternative.", "Compare repair and complete replacement scopes. Age informs the conversation; it does not decide the answer by itself."],
];
export const repairFaqs: FAQItem[] = [
  {
    question: "Why is my AC running but blowing warm air?",
    answer: "The fan can move air even when the system isn’t cooling properly. Thermostat settings, restricted airflow, outdoor-unit trouble, icing, or refrigerant performance may be involved. Note whether all rooms are warm, whether the outdoor unit runs, and any visible ice or alerts without opening equipment. Those observations help guide testing; they don’t prove which part failed. Check only the controls and accessible filter your owner instructions allow. If you see ice, stop cooling. For smoke, sparking, or a burning smell, stay clear; leave and call 911 for fire or immediate danger.",
    sources: [{ label: "Carrier: causes of warm air and lost cooling", url: "https://www.carrier.com/residential/en/ca/products/air-conditioners/air-conditioner-service/ac-not-blowing-cold-air/" }],
  },
  {
    question: "My outdoor AC unit is humming but the fan won’t spin. Is it the capacitor?",
    answer: "A capacitor is one possibility, but a motor, power-supply, control, or another fault can produce similar symptoms. Switch cooling off through the normal controls and arrange service. Don’t push the blades with a stick, reach through the grille, remove covers, or try to replace a capacitor yourself. Electrical components can remain hazardous after power is switched off. Ask what the electrical and operating tests found before approving a part replacement; the sound alone isn’t a diagnosis.",
    sources: [
      { label: "Carrier: causes of an AC fan not spinning", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/ac-fan-not-spinning/" },
      { label: "Carrier: capacitor hazards and professional replacement", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/ac-capacitor/" },
    ],
  },
  {
    question: "What should I do if the AC lines or indoor coil are frozen?",
    answer: "Switch cooling off and call for guidance. Use fan-only mode only if the blower operates normally and your equipment instructions allow it. Don’t chip ice, apply heat, remove panels, or keep restarting cooling. Stay clear of water near electrical equipment and report where it appears. The system may need to thaw before useful testing can be completed, but thawing doesn’t fix the cause. Airflow, blower operation, refrigerant performance, or another fault may need assessment. There is no guaranteed thawing time or first-visit repair.",
    sources: [{ label: "Carrier: frozen AC coils and underlying causes", url: repairSources.frozen }],
  },
  {
    question: "If my AC is low on refrigerant, can you just top it off?",
    answer: "Ask how the low charge was established and why it is low. A leak or an incorrect earlier charge may need investigation. If a leak is found, EPA advises locating and repairing it rather than repeatedly topping off the system. Discuss the testing, repair access, compatible refrigerant, and how operation will be checked afterward. Leak detection, parts, and refrigerant may involve separate work and pricing. Review those costs before approval. Leave refrigerant connections and charging to a qualified technician.",
    sources: [{ label: "EPA: refrigerant leaks and qualified service", url: repairSources.refrigerants }],
  },
  {
    question: "How much does an AC repair cost in Great Falls?",
    answer: "HomeAdvisor’s 2026 guide reports a $417 national average, with a typical range of $172–$664 across different AC systems. These figures are general budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Your repair may cost less or substantially more depending on the fault, parts, refrigerant, access, labor, warranty coverage, and any emergency or after-hours charges. Call to confirm the diagnostic fee and what it includes. Review the proposed repair price and any follow-up costs before approving work.",
    sources: [{ label: "HomeAdvisor: national AC repair costs (June 2026)", url: "https://www.homeadvisor.com/cost/heating-and-cooling/repair-an-ac-unit/" }],
  },
  {
    question: "Does the diagnostic fee include the repair or a refrigerant leak test?",
    answer: "Confirm that when booking rather than assuming it does. Ask what the initial visit includes, whether additional testing or leak detection is separately priced, and whether any diagnostic charge is credited toward an approved repair. Those terms need to be agreed for your visit. Ice, equipment access, parts availability, or testing conditions may require another appointment. Before approving more work, ask what it should establish, what it costs, and what happens if further testing or parts are still needed.",
    sources: [{ label: "HomeAdvisor: diagnostic visits and repair-cost factors", url: "https://www.homeadvisor.com/cost/heating-and-cooling/repair-an-ac-unit/" }],
  },
  {
    question: "Do refrigerant rules mean I have to replace my R-410A or R-22 air conditioner?",
    answer: "No. EPA allows continued use and repair of existing R-410A systems and doesn’t require replacing an existing R-22 system solely because of its refrigerant. Repair feasibility still depends on condition, compatible parts, refrigerant availability, and cost. Have the actual refrigerant identified and ask which service options are suitable. Different refrigerants aren’t automatically interchangeable. Compare the written repair proposal with replacement only when the findings and costs make that discussion useful.",
    sources: [
      { label: "EPA: continued repair of existing HFC systems", url: repairSources.transition },
      { label: "EPA: existing R-22 equipment and service choices", url: repairSources.refrigerants },
    ],
  },
  {
    question: "How do I decide whether to repair my AC or replace it?",
    answer: "Start with the fault, written repair price, equipment condition, repair history, parts availability, and any warranty coverage. A targeted repair may make sense for otherwise sound equipment. Repeated failures or a major repair can make replacement worth comparing. Ask how the repair will be checked and whether airflow or room-comfort problems need separate work. Compare the complete installation work if replacement is proposed. Age alone, a fault code, or an advertised rebate can’t decide the answer for your home.",
    sources: [{ label: "ENERGY STAR: replacement and whole-system considerations", url: "https://www.energystar.gov/saveathome/heating-cooling/replace" }],
  },
];
