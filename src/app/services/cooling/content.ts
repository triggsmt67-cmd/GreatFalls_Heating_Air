export const coolingEquipment = [
  { name: "Central split-system air conditioners", description: "Cooling matched to your home’s ductwork and furnace blower, from single-stage equipment to variable-capacity options. We diagnose existing systems and explain compatible replacement choices." },
  { name: "Ductless mini-splits", description: "Room-by-room cooling for homes without ducts, additions, and hot upstairs spaces. Equipment location, sizing, drainage, and electrical requirements are part of the installation plan." },
  { name: "Central heat pumps", description: "A heat pump provides summer cooling and electric heating. We can discuss how it works with furnace backup, your home’s heat loss, and your utility service." },
  { name: "Evaporative-cooler transitions & filtration", description: "Considering a change from a swamp cooler? We review central and ductless options, along with suitable filtration or room air cleaners for smoky conditions." },
];
export const coolingSymptoms = [
  ["Ice on refrigerant lines or the indoor coil", "Restricted airflow, a refrigerant issue, or another fault may be involved. Switch cooling off and arrange an assessment. Do not chip ice, open refrigerant connections, or keep running a system that freezes repeatedly."],
  ["Outdoor unit runs or hums, but the air stays warm", "A capacitor, contactor, compressor, fan, or refrigerant problem may cause similar symptoms. Electrical testing and operating measurements help identify the fault. Leave electrical covers closed."],
  ["Cottonwood and dust on the outdoor coil", "A buildup on the condenser can restrict airflow and reduce heat rejection. Keep loose debris away from the unit and ask about cleaning that follows the equipment manufacturer’s instructions; pressure washers can damage fins."],
  ["A cold basement and hot upstairs bedrooms", "Uneven temperatures can involve duct leakage, return-air paths, insulation, sun exposure, airflow settings, or equipment sizing. We assess the whole system before recommending balancing or equipment changes."],
];
export const coolingTuneup = [
  ["Outdoor coil & cabinet inspection", "Check for cottonwood, dust, and debris, and assess cleaning needs using the manufacturer’s recommended methods."],
  ["Electrical components & operating readings", "Inspect accessible electrical connections and test relevant capacitors, contactors, and motor or compressor readings for the equipment fitted."],
  ["Airflow & filter check", "Check the filter, accessible airflow paths, and blower operation. Discuss static-pressure measurements or balancing where comfort problems call for them."],
  ["Refrigerant performance assessment", "Assess operation under suitable conditions and use manufacturer-specified testing when needed. A low charge calls for investigation rather than routine topping off."],
  ["Condensate drainage & controls", "Inspect accessible drain components, test thermostat operation, and review findings and recommended work before repairs are authorized."],
];
export const coolingSources = {
  epa: "https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq",
  northwestern: "https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives",
  sunRiver: "https://sunriverelectric.coop/air-source-heat-pumps",
};

export const coolingFaqs = [
  {
    question: "How much does AC repair cost in Great Falls?",
    answer: "HomeAdvisor’s 2026 guide reports a $417 national average for AC repair, with a typical range of $172–$664 across different AC systems. These figures are general budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Your repair may cost less or substantially more depending on the fault, parts, refrigerant, equipment access, labor, warranty coverage, and any emergency or after-hours charges. Call to confirm the diagnostic fee and what it includes, then review the proposed repair price before approving work.",
    sources: [{ label: "HomeAdvisor: national AC repair costs (June 2026)", url: "https://www.homeadvisor.com/cost/heating-and-cooling/repair-an-ac-unit/" }],
  },
  {
    question: "Why is my AC running but the house isn’t getting cool?",
    answer: "Thermostat settings, a restricted filter or airflow path, outdoor-unit trouble, icing, or a refrigerant problem can cause similar symptoms. Check the homeowner controls and accessible filter only as your equipment instructions allow. Tell us whether every room is warm or just one area, when the problem started, and whether you see ice or an alert. Those details help guide testing; they don’t identify a failed part by themselves. Keep electrical covers closed. For smoke, sparking, or a burning smell, stop troubleshooting and stay clear; leave and call 911 for fire or immediate danger.",
    sources: [{ label: "Carrier: reasons an AC runs without cooling", url: "https://www.carrier.com/residential/en/ca/products/air-conditioners/air-conditioner-service/ac-not-blowing-cold-air/" }],
  },
  {
    question: "My AC lines are covered in ice. Should I keep it running?",
    answer: "No. Switch cooling off and call for guidance. Use fan-only mode only if the blower is operating normally and your equipment instructions allow it. Don’t chip ice, apply heat, remove panels, or keep restarting cooling. Thawing doesn’t fix the underlying cause, and there isn’t one thawing time that fits every system. Airflow restrictions, refrigerant trouble, or another fault may need testing. Stay clear of water near electrical equipment and report it when you call.",
    sources: [{ label: "Carrier: frozen AC coils and underlying causes", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/will-frozen-ac-fix-itself/" }],
  },
  {
    question: "Why is my upstairs hot when the basement and main floor are cool?",
    answer: "The system may be cooling while air isn’t reaching the rooms that need it. Sun exposure, insulation, duct leaks, return-air paths, thermostat location, and airflow can all matter. Tell us which rooms overheat, when it happens, and whether doors are usually closed. Keep grilles clear, but don’t close a group of downstairs vents or change blower settings to force air upstairs. Have the airflow and room conditions assessed before assuming a bigger AC or a new part will fix the problem.",
    sources: [{ label: "Trane: hot upstairs rooms and uneven temperatures", url: "https://www.trane.com/residential/en/resources/blog/help-house-hot-upstairs-cold-downstairs/" }],
  },
  {
    question: "Can I run my AC during wildfire smoke, and will it filter the smoke out?",
    answer: "Cooling can help you keep windows closed during a smoke event, but fine-smoke removal needs suitable filtration. For central systems, EPA recommends MERV 13 or the highest efficiency the system can accommodate. Check compatibility, fit, and filter condition; a higher rating alone doesn’t mean a filter suits your blower. Inspect more often during heavy smoke. A properly sized portable air cleaner can help. Standard ductless washable screens aren’t a substitute for fine-particle filtration. Follow current local guidance, and seek a cooler location if you can’t keep the home comfortably cool.",
    sources: [{ label: "EPA: cooling, compatible filters, and indoor air during wildfire smoke", url: coolingSources.epa }],
  },
  {
    question: "Can I wash cottonwood fluff off my outdoor AC unit myself?",
    answer: "Only do the cleaning your exact model’s owner instructions permit. Turn the system off and follow its power-isolation instructions first; turning down the thermostat doesn’t isolate electrical power. Keep loose debris away and use only the coil’s approved gentle cleaning method. Don’t remove the fan or panels, spray electrical components, use a pressure washer, or force a brush into the fins. Matted fluff, difficult access, or an unfamiliar unit are reasons to arrange professional cleaning. A clean-looking cabinet alone doesn’t tell you the coil is clear.",
    sources: [{ label: "Carrier: coil-specific cleaning methods and precautions", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/ac-coil-cleaner-tips/" }],
  },
  {
    question: "Should I repair my older air conditioner or replace it?",
    answer: "Start with the diagnosis, equipment condition, repair history, parts availability, warranty, and written repair price. A repair may make sense for an otherwise sound system. Repeated failures or a major repair can make replacement worth comparing. Age alone doesn’t settle it. If the main problem is one hot room, assess airflow and the house too. When replacement makes sense, compare the full installation work for standard AC and a heat pump, including existing-furnace compatibility and expected heating use. Confirm any rebate separately before counting it toward the price.",
    sources: [
      { label: "ENERGY STAR: replacement and whole-system considerations", url: "https://www.energystar.gov/saveathome/heating-cooling/replace" },
      { label: "DOE: heat pumps for heating and cooling", url: "https://www.energy.gov/heat-pumps" },
    ],
  },
  {
    question: "Do refrigerant rules mean I have to replace my working R-410A air conditioner?",
    answer: "No. EPA says existing systems can continue to be used and repaired as refrigerants are phased down. That doesn’t guarantee every part or refrigerant will always be available at the same price. Have the actual refrigerant and compatible repair options identified before deciding. A different refrigerant isn’t automatically suitable for your equipment, and recharging isn’t routine upkeep for a leaking system. Ask what caused any refrigerant loss, what repair is proposed, and how operation will be checked afterward.",
    sources: [{ label: "EPA: continued use and repair of existing air conditioners", url: "https://www.epa.gov/hfcs/frequent-questions-phasedown-hydrofluorocarbons" }],
  },
];
