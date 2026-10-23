import { rebateChangeNotice } from "@/content/rebates";

export interface FAQItem {
  question: string;
  answer: string;
  sources?: { label: string; url: string }[];
  category?: "emergency" | "heat-pumps" | "rebates" | "general";
}
export const generalFaqs: FAQItem[] = [
  {
    question: "My furnace stopped working. Can I get help after hours?",
    answer:
      "Yes. We offer 24/7 emergency service and repair. Call 406-781-4027 if your home is losing heat; don’t wait for a form reply. Regular business hours are Monday–Friday, 8 a.m.–5 p.m. If you smell gas or a carbon monoxide alarm sounds, leave the building and call 911 from a safe location before contacting us.",
    category: "emergency",
  },
  {
    question: "How much does a furnace or AC repair cost in Great Falls?",
    answer:
      "Angi reports a national average of $318 for furnace repair, and HomeAdvisor reports $417 for AC repair in their 2026 guides. These national figures are general budgeting references, not a quote, advertised rate, or price cap from Great Falls Heating and Air. Your repair may cost less or substantially more depending on the fault, parts, equipment access, labor, warranty coverage, and any emergency or after-hours charges. Call to confirm the diagnostic fee and what it includes, then review the price for the proposed work before approving the repair.",
    sources: [
      { label: "Angi: furnace repair costs (September 2026)", url: "https://www.angi.com/articles/how-much-does-common-furnace-repair-cost.htm" },
      { label: "HomeAdvisor: AC repair costs (June 2026)", url: "https://www.homeadvisor.com/cost/heating-and-cooling/repair-an-ac-unit/" },
    ],
    category: "general",
  },
  {
    question: "Should I repair my furnace or replace it?",
    answer:
      "Start with the diagnosis. A repair may make sense if it can restore safe operation and the rest of the furnace is in reasonable condition. Repeated failures, unavailable parts, or a costly major repair can make replacement worth comparing. Age is part of the decision, along with repair history, comfort problems, warranty coverage, and the full replacement cost.",
    sources: [{ label: "ENERGY STAR: replacement and system improvements", url: "https://www.energystar.gov/saveathome/heating-cooling/replace" }],
    category: "general",
  },
  {
    question: "Will a heat pump keep my home warm during a Montana winter?",
    answer:
      "A properly selected cold-climate heat pump can provide winter heating, but the model and your home matter. Compare how much heat it delivers in cold weather with how much your house needs. Plan any backup heat around that difference. If you’re keeping a gas or propane furnace, check that the equipment and controls can work together. A low advertised operating temperature alone doesn’t tell you whether it can heat the whole house.",
    sources: [{ label: "PNNL: cold-climate heat pump sizing", url: "https://basc.pnnl.gov/resource-guides/cold-climate-heat-pump-sizing-and-selection" }],
    category: "heat-pumps",
  },
  {
    question: "Do you service homes outside Great Falls?",
    answer:
      "Call to check service at your address in Black Eagle, Ulm, Cascade, Vaughn, Sun Prairie, Sun River, Belt, or the Gulch communities. Share your location and equipment type so we can confirm availability. Military families living off base are welcome to get in touch. We’re independent of the base; on-base access needs separate confirmation.",
    category: "general",
  },
  {
    question: "Can I get a rebate for a new furnace, AC, or heat pump?",
    answer:
      `Possibly. It depends on your utility account, the exact equipment, and the current program rules. Our Montana HVAC rebate guide links to the official programs. Keep the full installation price in view until the incentive is confirmed. ${rebateChangeNotice}`,
    sources: [{ label: "NorthWestern: electric existing-home program", url: "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf" }, { label: "Montana DEQ: current rebate-program status", url: "https://deq.mt.gov/energy/Programs/efficiency" }],
    category: "rebates",
  },
];
