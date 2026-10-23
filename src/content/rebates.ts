import type { FAQItem } from "@/content/faqs";

export interface RebateProgram {
  id: string;
  name: string;
  provider: string;
  providerType:
    | "Investor-Owned Utility"
    | "Electric Cooperative"
    | "Federal Tax Credit"
    | "State-Administered";
  incentiveAmount: string;
  eligibleEquipment: string;
  status: "active" | "expired" | "pending_federal_approval";
  statusLabel: string;
  effectiveDates: string;
  sourceUrl: string;
  sourceLabel: string;
  lastReviewed: string;
  requirements: string[];
  disclaimerNote?: string;
}

export const rebateChangeNotice = "Rebate amounts, eligibility rules, deadlines, and funding may change, be suspended, or end without notice to Great Falls Heating and Air LLC and without our knowledge. Published offers do not guarantee availability, eligibility, approval, or payment. Before buying equipment or authorizing work, confirm current terms, funding, and any required advance approval directly with the program administrator.";

export const rebateGuideMetadata = {
  title: "2026 Montana HVAC Rebate Guide: Great Falls Homeowner Insights",
  shortTitle: "2026 Montana HVAC Rebates",
  navTitle: "2026 Rebates",
  metaTitle: "2026 Montana HVAC Rebates: Great Falls Homeowner Guide",
  metaDescription:
    "Compare Great Falls HVAC incentives by utility account and project: NorthWestern Energy, Sun River Electric, expired 25C credits, and pending Montana DEQ programs.",
  lastReviewedDate: "October 23, 2026",
  heroSubtitle:
    "Compare the project’s full cost, then confirm any utility incentive for your account and exact equipment before purchasing.",
  disclaimer:
    `${rebateChangeNotice} This guide summarizes official sources as of the review date and may not reflect later changes. We do not administer these programs or guarantee tax outcomes. Do not rely on an estimated rebate as guaranteed payment or a reduction in the amount you must be able to pay. Consult a qualified tax professional about your tax situation.`,
};

export const rebatePrograms: RebateProgram[] = [
  {
    id: "northwestern-heat-pump",
    name: "Existing Home Electric Heat Pump Incentive",
    provider: "NorthWestern Energy",
    providerType: "Investor-Owned Utility",
    incentiveAmount: "$450 per unit",
    eligibleEquipment:
      "Central ducted or ductless heat pumps: ENERGY STAR rated or SEER2 at least 15.2 and HSPF2 at least 8.5, subject to utility approval",
    status: "active",
    statusLabel: "Published Utility Offer — Confirm Availability",
    effectiveDates: "Effective August 1, 2026 – June 30, 2027",
    sourceUrl:
      "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf",
    sourceLabel: "NorthWestern Energy Existing Home Electric Rebate PDF",
    lastReviewed: "October 23, 2026",
    requirements: [
      "Must be an active NorthWestern Energy Montana electric residential customer",
      "Applies to existing homes and new materials; new construction and garages are excluded",
      "Confirm the exact equipment rating and account eligibility with NorthWestern; gas service alone does not qualify an electric account",
      "Purchases and completed work must fall within the program window; complete and submit by June 30, 2027, with a recent electric bill and itemized receipts or invoices",
    ],
  },
  {
    id: "northwestern-hpwh",
    name: "Participating-Contractor Heat Pump Water Heater Incentive",
    provider: "NorthWestern Energy",
    providerType: "Investor-Owned Utility",
    incentiveAmount: "Up to $3,000 instant incentive",
    eligibleEquipment:
      "Qualifying high-efficiency hybrid heat pump water heaters installed by participating contractor",
    status: "active",
    statusLabel: "Published Utility Offer — Confirm Availability",
    effectiveDates: "Limited-time program; confirm funding before committing",
    sourceUrl: "https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives/heat-pump-water-heater-program",
    sourceLabel: "NorthWestern Energy Heat Pump Water Heater Program",
    lastReviewed: "October 23, 2026",
    requirements: [
      "Customer must receive residential electric service from NorthWestern Energy in Montana",
      "Must be installed by an approved participating contractor to receive instant customer discount",
      "Replaces an existing electric resistance tank; natural-gas replacement does not qualify",
      "Existing single-family or permanently founded manufactured homes at least 12 months old may qualify; rental properties, new construction, commercial properties, and self-installation are excluded",
      "One incentive per residence; limited funding. Confirm participating-contractor and equipment requirements; this site does not establish our enrollment in that program",
    ],
  },
  {
    id: "sun-river-air-source",
    name: "Air-Source Heat Pump Incentive",
    provider: "Sun River Electric Cooperative",
    providerType: "Electric Cooperative",
    incentiveAmount: "$150 per installed ton (Up to $750 per system)",
    eligibleEquipment:
      "Qualifying air-source heat pump installations meeting cooperative efficiency guidelines",
    status: "active",
    statusLabel: "Published Co-op Offer — Confirm Availability",
    effectiveDates: "Published program; obtain approval before installation",
    sourceUrl: "https://sunriverelectric.coop/air-source-heat-pumps",
    sourceLabel: "Sun River Electric Co-op Air-Source Page",
    lastReviewed: "October 23, 2026",
    requirements: [
      "The installation must be served by Sun River Electric; a nearby town name alone does not establish eligibility",
      "Request the Air Source Heat Pump Rebate Agreement and return it for approval before installation",
      "Confirm the exact model and current efficiency requirements with the co-op; the public page uses older SEER/HSPF terminology",
      "Payment follows installation and co-op compliance inspection; the published amount is $150 per installed ton, capped at $750 per system",
    ],
  },
  {
    id: "sun-river-ground-source",
    name: "Ground-Source (Geothermal) Heat Pump Incentive",
    provider: "Sun River Electric Cooperative",
    providerType: "Electric Cooperative",
    incentiveAmount: "$200 per installed ton (Up to $1,000 per system)",
    eligibleEquipment:
      "Qualifying ground-source heat pump systems approved by the cooperative",
    status: "active",
    statusLabel: "Published Co-op Offer — Confirm Availability",
    effectiveDates: "Published program; obtain approval before installation",
    sourceUrl: "https://sunriverelectric.coop/sites/default/files/2025-06/ground-source-heat-pump-rebate-form.pdf",
    sourceLabel: "Sun River Electric Official Ground-Source Rebate Form",
    lastReviewed: "October 23, 2026",
    requirements: [
      "Must be an active cooperative member on Sun River Electric lines",
      "Request the Geothermal Heat Pump Rebate Agreement and obtain co-op approval before installation",
      "Installation must meet program specifications; payment follows installation and compliance inspection",
      "Published amount: $200 per installed ton, capped at $1,000 per system; confirm current availability and approved equipment directly with the co-op before purchase. No state or federal tax credit is included in this listed incentive",
    ],
  },
  {
    id: "federal-section-25c",
    name: "Federal Energy Efficient Home Improvement Credit (Section 25C)",
    provider: "Internal Revenue Service (IRS)",
    providerType: "Federal Tax Credit",
    incentiveAmount:
      "Expired for property placed in service after Dec 31, 2025",
    eligibleEquipment:
      "Previously applicable to qualifying biomass stoves, heat pumps, central AC, and furnaces",
    status: "expired",
    statusLabel: "Expired Program",
    effectiveDates: "Ended December 31, 2025",
    sourceUrl:
      "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit",
    sourceLabel: "IRS Section 25C Information Notice",
    lastReviewed: "October 23, 2026",
    requirements: [
      "Notice for 2026 purchases: Under current federal statutory terms, the Section 25C tax credit is not available for qualifying property placed in service after December 31, 2025",
      "Homeowners claiming credits for prior 2025 installations should refer to their 2025 tax filing documents and Form 5695",
      "Always consult a licensed CPA or tax professional regarding personal tax situations",
    ],
  },
  {
    id: "mt-deq-homes-heehr",
    name: "Montana DEQ Home Energy Rebate Programs (HOMES & HEEHR)",
    provider: "Montana Department of Environmental Quality (DEQ)",
    providerType: "State-Administered",
    incentiveAmount: "Not yet available; final DOE approval required",
    eligibleEquipment:
      "Planned HOMES and HEEHR programs; final equipment and project rules depend on approved program guidance",
    status: "pending_federal_approval",
    statusLabel: "Pending Launch",
    effectiveDates: "Under Federal Review (Not Currently Available)",
    sourceUrl: "https://deq.mt.gov/energy/Programs/efficiency",
    sourceLabel: "Montana DEQ Energy Efficiency Portal",
    lastReviewed: "October 23, 2026",
    requirements: [
      "Montana DEQ reports that state-administered HOMES and HEEHR rebate programs have not yet launched",
      "DEQ reports revised DOE guidance began June 1, 2026; further guidance, application revision, and final implementation approval remain necessary",
      "The state programs are not currently available; do not count announced incentives toward a purchase until DEQ publishes applicable launch and eligibility rules",
      "Check the DEQ program page for availability before relying on a future incentive in your budget",
    ],
  },
];

export const rebateFaqs: FAQItem[] = [
  {
    "question": "Can I still claim the federal $2,000 heat pump tax credit for a 2026 installation?",
    "answer": "No. The federal Energy Efficient Home Improvement Credit under Section 25C is not available for property placed in service after December 31, 2025. Older pages advertising a heat pump credit through 2032 do not reflect that change. A qualifying 2025 installation is a separate tax-filing question; use the IRS guidance and your tax professional rather than counting a federal credit toward a new 2026 project.",
    "sources": [
      {
        "label": "IRS: Section 25C credit",
        "url": "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
      }
    ]
  },
  {
    "question": "Does my NorthWestern account qualify for the $450 heat pump rebate?",
    "answer": "NorthWestern’s current Montana existing-home electric application lists $450 per qualifying ducted or ductless heat pump. It requires residential electric service; a NorthWestern gas account alone does not establish eligibility. The equipment must be ENERGY STAR rated or meet SEER2 of at least 15.2 and HSPF2 of at least 8.5, along with the application’s other conditions. Confirm your account and exact models before purchase; the utility makes the final eligibility decision and funding is limited.",
    "sources": [
      {
        "label": "NorthWestern: current electric existing-home application",
        "url": "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf"
      }
    ]
  },
  {
    "question": "Do I need approval before installing a heat pump to get a Sun River Electric rebate?",
    "answer": "Yes. Sun River’s published air-source program says to request its rebate agreement and return it for approval before the contractor installs the system. It lists $150 per installed ton, capped at $750 per system, for buildings served by the cooperative. Payment follows installation and the co-op’s compliance inspection. Confirm the exact equipment, current efficiency requirements, and availability with Sun River before committing; its public page uses older SEER and HSPF terminology.",
    "sources": [
      {
        "label": "Sun River: air-source rebate and approval steps",
        "url": "https://sunriverelectric.coop/air-source-heat-pumps"
      }
    ]
  },
  {
    "question": "Can I apply for Montana’s HOMES or HEEHR rebates now?",
    "answer": "Not yet, according to Montana DEQ’s program page checked October 23, 2026. DEQ says the programs are not currently available and need final U.S. Department of Energy implementation approval before rollout. Announced funding or an estimated rebate is not an approval for your home. Do not assume a purchase made now will qualify later; wait for official application, timing, income, and equipment rules before relying on a future rebate.",
    "sources": [
      {
        "label": "Montana DEQ: current Home Energy Rebates status",
        "url": "https://deq.mt.gov/energy/Programs/efficiency"
      }
    ]
  },
  {
    "question": "Is NorthWestern’s up-to-$3,000 incentive for the heat pump that heats my house?",
    "answer": "That offer is for a heat pump water heater, not the space-heating heat pump. NorthWestern’s separate program requires an existing electric resistance water-heater tank and a participating contractor; replacing a gas water heater does not qualify. Home type, age, account, and other restrictions apply, with one incentive per residence and limited funding. Confirm the current requirements and participating contractor before ordering; this page does not establish Great Falls Heating and Air’s enrollment in that program.",
    "sources": [
      {
        "label": "NorthWestern: heat pump water heater program",
        "url": "https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives/heat-pump-water-heater-program"
      }
    ]
  },
  {
    "question": "What paperwork and deadlines should I confirm before counting a rebate in my budget?",
    "answer": "Use the application for your utility account and project, and check approval timing before buying. NorthWestern’s current existing-home electric form excludes work completed or materials purchased before August 1, 2026, and requires project completion and submission by June 30, 2027, with a recent bill and itemized receipts or invoices. Other programs have different steps, so keep model details, approvals, invoices, and a copy of the submitted application. Do not subtract an unapproved incentive from the amount you must be able to pay, and ask each administrator before assuming incentives can be combined.",
    "sources": [
      {
        "label": "NorthWestern: dates, records and terms",
        "url": "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf"
      },
      {
        "label": "Sun River: pre-installation approval",
        "url": "https://sunriverelectric.coop/air-source-heat-pumps"
      }
    ]
  }
];
