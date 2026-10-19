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
    question: "Should I switch from a swamp cooler to central AC in Great Falls?",
    answer: "It depends on your home, budget, and comfort needs. Evaporative coolers can work well in dry weather, but they draw outdoor air into the home and need an airflow path out. During wildfire smoke events, that can bring smoke indoors. Central AC or ductless cooling can keep you comfortable with windows closed, but fine smoke particles still require suitable filtration or a properly sized room air cleaner. We can compare options for your home without assuming a full replacement is necessary.",
    sources: [{ label: "EPA: wildfire smoke and indoor air", url: coolingSources.epa }],
  },
  {
    question: "How do I clean cottonwood seeds out of my outside AC unit without damaging the fins?",
    answer: "Start with your model’s owner instructions. Turn the system off and follow the manufacturer’s power-isolation procedure before any permitted cleaning; the thermostat alone does not isolate electrical power. Keep loose debris away from the cabinet, and use only the gentle cleaning method approved for that coil. Never use a pressure washer, force a brush into the fins, or spray electrical components. Do not remove panels, the fan, or electrical covers. Matted buildup, hard-to-reach coils, or unfamiliar equipment are reasons to arrange a professional cleaning.",
    sources: [{ label: "Carrier: AC coil cleaning guidance", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/ac-coil-cleaner-tips/" }],
  },
  {
    question: "Why is my upstairs hotter than my basement in my Great Falls home?",
    answer: "Sun exposure, insulation, duct leakage, return-air paths, and airflow balance can all contribute to a warm upstairs and cold basement. Keep supply and return grilles clear and check the filter first. Avoid closing multiple basement registers or changing blower settings yourself; those changes can restrict system airflow. A technician can measure airflow and static pressure and assess the ductwork and equipment sizing. A ductless system may help a difficult room, but it is one option to assess rather than a guaranteed fix for every home.",
    sources: [],
  },
  {
    question: "Can I use a high-MERV air filter during Montana wildfire season without hurting my AC?",
    answer: "Use the highest-efficiency filter your system can accommodate. EPA recommends MERV 13 where compatible, but filter thickness alone does not determine suitability. Filter design, face area, airflow, and the blower’s available pressure all matter. A deeper media cabinet may reduce resistance for a suitable filter, but no filter has zero resistance. Follow your equipment instructions, have compatibility checked if uncertain, and inspect filters more frequently during smoke events rather than relying on a fixed three- or four-week interval. A properly sized portable air cleaner can supplement filtration when your HVAC system cannot support a higher-efficiency filter.",
    sources: [{ label: "EPA: selecting filtration for wildfire smoke", url: coolingSources.epa }],
  },
  {
    question: "Do I have to replace my R-410A air conditioner because of refrigerant rules?",
    answer: "No. The refrigerant transition does not require replacing an existing working R-410A air conditioner. Qualified technicians can continue servicing existing equipment, subject to applicable refrigerant-handling requirements. If the system is low on refrigerant, investigate the cause rather than treating recharging as routine maintenance. Newer refrigerants such as R-32 and R-454B are for equipment designed for them; they are not drop-in replacements for R-410A. When replacement makes sense, compare matched equipment, installation requirements, efficiency, and total cost—not just the refrigerant name.",
    sources: [{ label: "EPA: refrigerant phasedown questions", url: "https://www.epa.gov/hfcs/frequent-questions-phasedown-hydrofluorocarbons" }],
  },
  {
    question: "Are there 2026 utility rebates for cooling or heat pump upgrades in Great Falls?",
    answer: "There may be, depending on your utility service, equipment, and project. NorthWestern Energy offers E+ incentives for qualifying energy-saving measures, and Sun River Electric Cooperative has a separate air-source heat pump rebate program. A particular efficiency rating, ENERGY STAR label, or furnace pairing alone does not establish eligibility. Confirm current program dates, eligible equipment combinations, account requirements, and paperwork with your utility before purchasing. Our Montana HVAC rebate guide is a starting point for comparing programs.",
    sources: [
      { label: "NorthWestern Energy E+ incentives", url: coolingSources.northwestern },
      { label: "Sun River Electric heat pump rebates", url: coolingSources.sunRiver },
    ],
  },
];
