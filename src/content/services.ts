export interface ServiceItem {
  id: string;
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  category: "heating" | "cooling" | "heat-pumps";
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  summary: string;
  image: string;
  imageAlt: string;
  badge?: string;
  parentRoute?: string;
  parentTitle?: string;
  isHub?: boolean;
  keyPoints: string[];
  symptoms?: {
    symptom: string;
    whatItMeans: string;
    urgency: "emergency" | "prompt" | "scheduled";
  }[];
  processSteps: { number: string; title: string; description: string }[];
}
const steps = [
  {
    number: "01",
    title: "Tell us what’s happening",
    description: "Share your location, equipment type, and symptoms.",
  },
  {
    number: "02",
    title: "Discuss availability",
    description:
      "Ask about scheduling, diagnostic charges, and what a visit includes.",
  },
  {
    number: "03",
    title: "Consider your options",
    description: "Discuss findings and proposed costs before authorizing work.",
  },
];
function service(
  id: string,
  route: string,
  category: ServiceItem["category"],
  title: string,
  headline: string,
  summary: string,
  isHub = false,
): ServiceItem {
  return {
    id,
    slug: route.split("/").pop()!,
    route,
    category,
    title,
    shortTitle: title,
    navTitle: title,
    metaTitle: title + " in Great Falls, MT",
    metaDescription: summary,
    headline,
    subheadline: summary,
    summary,
    image: "/images/winter-equipment.webp",
    imageAlt:
      "Temporary AI-generated illustration of unbranded HVAC equipment, not a company installation",
    isHub,
    keyPoints: [],
    processSteps: steps,
  };
}
export const servicesData: Record<string, ServiceItem> = {
  "heating-hub": {
    ...service(
      "heating-hub",
      "/services/heating",
      "heating",
      "Heating services",
      "A warmer home starts with understanding the problem.",
      "Furnace repair, maintenance questions, and replacement planning for Great Falls homes.",
      true,
    ),
    keyPoints: [
      "Furnace and thermostat symptoms",
      "Heating maintenance questions",
      "Repair and replacement considerations",
      "Heat-pump and backup heating options",
    ],
    symptoms: [
      {
        symptom: "No heat or cool air",
        whatItMeans:
          "A thermostat, airflow, ignition, or control issue may be involved. Call to discuss the symptoms.",
        urgency: "prompt",
      },
      {
        symptom: "Frequent cycling",
        whatItMeans:
          "Restricted airflow or a control fault may need attention.",
        urgency: "prompt",
      },
      {
        symptom: "Unusual noise",
        whatItMeans:
          "New banging or grinding sounds warrant a professional assessment.",
        urgency: "prompt",
      },
      {
        symptom: "Gas odor or CO alarm",
        whatItMeans:
          "Leave the building and contact emergency services from outside.",
        urgency: "emergency",
      },
    ],
  },
  "emergency-furnace-repair": {
    ...service(
      "emergency-furnace-repair",
      "/services/heating/emergency-furnace-repair",
      "heating",
      "Emergency furnace repair",
      "No heat? Start with a call.",
      "Furnace trouble in freezing weather deserves attention. Call to discuss service availability in Great Falls and surrounding communities.",
    ),
    parentRoute: "/services/heating",
    parentTitle: "Heating services",
  },
  "cooling-hub": {
    ...service(
      "cooling-hub",
      "/services/cooling",
      "cooling",
      "Cooling services",
      "A more comfortable summer starts here.",
      "Explore air conditioning repair, maintenance, and replacement options for your home.",
      true,
    ),
    keyPoints: [
      "Warm or uneven airflow",
      "Seasonal maintenance questions",
      "AC repair and replacement planning",
      "Heat pumps that also provide cooling",
    ],
    symptoms: [
      {
        symptom: "Warm air at the vents",
        whatItMeans:
          "Thermostat settings, airflow, and equipment operation are useful starting points for diagnosis.",
        urgency: "prompt",
      },
      {
        symptom: "Ice on refrigerant lines",
        whatItMeans:
          "Switch cooling off and seek professional advice. Do not chip ice from the equipment.",
        urgency: "prompt",
      },
      {
        symptom: "Water near the indoor unit",
        whatItMeans: "A condensate drainage issue may need inspection.",
        urgency: "prompt",
      },
      {
        symptom: "Repeated breaker trips",
        whatItMeans:
          "Leave the system off and arrange an assessment rather than repeatedly resetting the breaker.",
        urgency: "prompt",
      },
    ],
  },
  "ac-repair": {
    ...service(
      "ac-repair",
      "/services/cooling/ac-repair",
      "cooling",
      "AC repair & upgrades",
      "Repair it. Replace it. Understand the difference.",
      "Equipment age is only one part of the decision. Consider the fault, repair cost, condition, and comfort needs together.",
    ),
    parentRoute: "/services/cooling",
    parentTitle: "Cooling services",
  },
  "cold-climate-heat-pumps": {
    ...service(
      "cold-climate-heat-pumps",
      "/services/heat-pumps/cold-climate",
      "heat-pumps",
      "Cold-climate heat pumps",
      "Can a heat pump work in a Montana winter?",
      "Some modern cold-climate models operate around −15°F or −20°F. The right choice depends on the model, your home, and a plan for backup heat.",
    ),
  },
};
export const navigationServices = [
  {
    title: "Heating services",
    route: "/services/heating",
    description: "Furnace repair and replacement planning",
  },
  {
    title: "Emergency furnace repair",
    route: "/services/heating/emergency-furnace-repair",
    description: "No-heat situations and safety guidance",
  },
  {
    title: "Cooling services",
    route: "/services/cooling",
    description: "Air conditioning and maintenance",
  },
  {
    title: "AC repair & upgrades",
    route: "/services/cooling/ac-repair",
    description: "Repair and replacement considerations",
  },
  {
    title: "Cold-climate heat pumps",
    route: "/services/heat-pumps/cold-climate",
    description: "Cold-weather performance and backup heat",
  },
];
