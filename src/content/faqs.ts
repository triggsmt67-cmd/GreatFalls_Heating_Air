export interface FAQItem {
  question: string;
  answer: string;
  category?: "emergency" | "heat-pumps" | "rebates" | "general";
}
export const generalFaqs: FAQItem[] = [
  {
    question: "My furnace has stopped. Should I call or use the form?",
    answer:
      "Call to discuss service availability if your home is losing heat in freezing weather. Forms are not continuously monitored. If you smell gas or a carbon monoxide alarm sounds, leave the building and contact emergency services from a safe location.",
    category: "emergency",
  },
  {
    question: "Can a heat pump work in a Montana winter?",
    answer:
      "Some cold-climate models are designed to operate around −15°F or −20°F, but output and efficiency vary. Your home’s heat loss, equipment ratings, and a suitable backup heat source all matter.",
    category: "heat-pumps",
  },
  {
    question: "Do you serve communities outside Great Falls?",
    answer:
      "Our service-area information includes Black Eagle, Ulm, Cascade, Vaughn, Sun Prairie, Sun River, Belt, and the Gulch communities. Contact us to confirm availability at your address. Military families in off-base households are welcome to inquire; base access or affiliation is not implied.",
    category: "general",
  },
  {
    question: "Where can I check current HVAC rebates?",
    answer:
      "Our 2026 guide links to official NorthWestern Energy, Sun River Electric Cooperative, IRS, and Montana DEQ sources. Equipment, account eligibility, and application requirements vary. Check the current program terms before buying.",
    category: "rebates",
  },
];
