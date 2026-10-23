import type { FAQItem } from "@/content/faqs";

export const serviceSources = {
  defrost: "https://www.trane.com/residential/en/resources/blog/what-is-heat-pump-defrost-cycle/",
  symptoms: "https://www.carrier.com/us/en/residential/hvac-resources/heat-pumps/heat-pump-not-heating/",
  auxiliary: "https://www.carrier.com/us/en/residential/hvac-resources/what-is-auxiliary-heat/",
  maintenance: "https://www.trane.com/residential/en/resources/maintenance-tips/heat-pumps/",
  smoke: "https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq",
};
export const serviceSymptoms = [
  ["Ice that persists or returns with poor heating", "Report where ice appears, whether it clears, outdoor conditions, and whether room temperature is falling. Airflow, drainage, refrigerant performance, defrost controls, or another fault may need assessment."],
  ["More backup heat or higher electricity use", "Record thermostat messages, schedules, setpoint changes, weather, and the billing period. Backup use alone does not identify a fault; compare the equipment’s intended operation with actual conditions and test findings."],
  ["Weak airflow, uneven rooms, or a ductless alert", "Note which indoor units or rooms are affected and any displayed code. Filter condition, airflow paths, drainage, controls, or equipment performance may be involved. A code helps guide diagnosis; it is not permission to reset or replace a part."],
  ["Poor summer cooling or indoor water", "Report visible ice, loss of cooling, drainage alerts, and where water appears. Keep clear of water near electrical equipment. Cooling-mode symptoms still need diagnosis rather than assuming the system needs a refrigerant top-off."],
];
export const maintenanceChecks = [
  ["Filters, coils, and airflow", "Inspect the applicable indoor and outdoor components, filter compatibility, access, and airflow concerns.", "Identify cleaning needed, approved methods, and whether deeper access or airflow testing is separate work."],
  ["Defrost and outdoor drainage", "Assess relevant sensors, controls, coil condition, snow/debris exposure, and the defrost-water path.", "Explain what can be tested under current conditions and whether a cold-weather follow-up is needed."],
  ["Electrical and operating performance", "Check the components fitted and relevant operating readings against model requirements.", "Distinguish maintenance findings from faults needing further diagnosis or a separately approved repair."],
  ["Thermostat and backup coordination", "Review schedules, displayed alerts, control settings, and the intended heating/backup arrangement.", "Explain operation to the homeowner and document approved changes; avoid a universal changeover temperature."],
  ["Indoor drainage and service access", "Assess accessible pans, drains, and any fitted pump or overflow protection, including ductless indoor units.", "Confirm included cleaning, repairs, and how future owner care or service can be performed."],
  ["Records and next steps", "Record work performed, available readings, conditions, limits, and recommendations.", "Separate completed work, owner care, further testing, repair scope/price, and follow-up arrangements."],
];
export const serviceFaqs: FAQItem[] = [
  {
    "question": "Is ice or steam on my outdoor heat pump normal, or does it need repair?",
    "answer": "Light frost and a temporary vapor cloud can accompany normal defrost, with changes in fan operation or sound. Persistent ice, a fan striking ice, falling indoor temperature, or repeated alerts deserve a service call rather than an assumption that the unit will clear itself. Do not chip ice, apply heat, force a defrost cycle, or open the cabinet. If you suspect smoke, burning, or sparking, stay clear and stop troubleshooting; for fire or immediate danger, leave and call 911 from a safe place.",
    "sources": [
      {
        "label": "Trane: heat pump defrost",
        "url": "https://www.trane.com/residential/en/resources/blog/what-is-heat-pump-defrost-cycle/"
      },
      {
        "label": "Carrier: icing and operating symptoms",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/heat-pumps/heat-pump-troubleshooting/"
      }
    ]
  },
  {
    "question": "Why is AUX heat coming on more often, and should I turn it off?",
    "answer": "Auxiliary or backup heat can operate because of outdoor conditions, heating demand, thermostat recovery, defrost, the configured control strategy, or a fault. An AUX message alone does not identify the cause, and there is no universal temperature at which it proves something is wrong. Note when it appears, recent schedule or setpoint changes, whether the house stays warm, and any change in total energy use. Do not disable backup heat or change installer settings to hide the message; ask for the system’s intended operation to be compared with actual findings.",
    "sources": [
      {
        "label": "Carrier: auxiliary heat and system-specific controls",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/what-is-auxiliary-heat/"
      }
    ]
  },
  {
    "question": "My heat pump is running but blowing cool air. What can I check safely?",
    "answer": "If there are no danger signs, note the thermostat mode, setpoint, schedule, alerts, indoor temperature, and whether all rooms or only one zone are affected. Brief cooler air can occur during defrost, but persistent loss of heat needs assessment. Check accessible filters and grilles only as your owner instructions allow, and observe outdoor snow or debris from outside the cabinet. Do not open panels, touch wiring or refrigerant connections, or repeatedly reset a breaker; call promptly if the home is losing heat or you are unsure what to do.",
    "sources": [
      {
        "label": "Carrier: heat pump troubleshooting",
        "url": "https://www.carrier.com/us/en/residential/hvac-resources/heat-pumps/heat-pump-troubleshooting/"
      }
    ]
  },
  {
    "question": "How often should a heat pump be serviced, and what should maintenance include?",
    "answer": "Follow the exact model’s maintenance schedule and discuss service before the heating and cooling seasons when the equipment is used year-round. Confirm checks for the relevant filters, coils, airflow, drainage, electrical components, operating performance, controls, and backup coordination. Ask for a record of completed work, findings, available readings, and any tests limited by weather or equipment condition. Ductless deep cleaning, difficult access, further diagnosis, and repairs may be separate work; maintenance cannot guarantee no later breakdowns or warranty coverage.",
    "sources": [
      {
        "label": "Trane: heat pump maintenance",
        "url": "https://www.trane.com/residential/en/resources/maintenance-tips/heat-pumps/"
      }
    ]
  },
  {
    "question": "How much will heat pump diagnosis or repair cost, and is it included in a tune-up?",
    "answer": "Confirm the diagnostic fee and what it covers before booking; do not assume a tune-up includes fault diagnosis, deep cleaning, leak testing, or repairs. The actual price depends on the fault, parts, labor, access, applicable warranty, and any additional testing or visits. General online prices are budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air; actual costs may be lower or substantially higher. Ask for the findings, proposed repair, exclusions, and price before approval, including whether any diagnostic charge is credited toward repair.",
    "sources": [
      {
        "label": "Trane: maintenance scope and professional service",
        "url": "https://www.trane.com/residential/en/resources/maintenance-tips/heat-pumps/"
      }
    ]
  },
  {
    "question": "Should I repair my heat pump or replace it?",
    "answer": "Start with the diagnosis, written repair price, equipment condition, repair history, compatible parts availability, and any applicable warranty. Ask whether airflow, controls, installation, or room-coverage problems also need attention and how the repair will be checked. Compare that with a complete replacement quote when the findings warrant it, rather than deciding from an age cutoff, alert code, or rebate alone. Confirm parts timing and any follow-up, and keep projected operating savings separate from measured results.",
    "sources": [
      {
        "label": "ENERGY STAR: equipment condition and replacement considerations",
        "url": "https://www.energystar.gov/saveathome/heating-cooling/replace"
      }
    ]
  }
];
