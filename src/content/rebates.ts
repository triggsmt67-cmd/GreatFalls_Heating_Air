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

export const rebateGuideMetadata = {
  title: "2026 Montana HVAC Rebate Guide: Great Falls Homeowner Insights",
  shortTitle: "2026 Montana HVAC Rebates",
  navTitle: "2026 Rebates",
  metaTitle: "2026 Montana HVAC Rebates: Great Falls Homeowner Guide",
  metaDescription:
    "Comprehensive guide to 2026 HVAC rebates in Great Falls, MT. Details on NorthWestern Energy, Sun River Electric, expired federal 25C credits, and pending DEQ programs.",
  lastReviewedDate: "September 24, 2026",
  heroSubtitle:
    "Cut the upfront investment of upgrading to high-efficiency heating and cooling with current 2026 utility incentives. Here is the verified breakdown for Great Falls and Cascade County homeowners.",
  disclaimer:
    "Important Disclaimer: Great Falls Heating and Air is an independent HVAC installation and service contractor. We do not administer utility programs, determine individual rebate eligibility, or guarantee incentive payouts, program funding, or tax outcomes. Utility incentive rules, efficiency tier minimums, and funding caps are set solely by program administrators and are subject to change without notice. Homeowners must verify current program rules directly with the sponsoring utility or tax advisor prior to equipment purchase.",
};

export const rebatePrograms: RebateProgram[] = [
  {
    id: "northwestern-heat-pump",
    name: "Existing Home Electric Heat Pump Incentive",
    provider: "NorthWestern Energy",
    providerType: "Investor-Owned Utility",
    incentiveAmount: "$450 per unit",
    eligibleEquipment:
      "Qualifying central ducted or ductless cold-climate heat pump systems meeting SEER2 and HSPF2 minimums",
    status: "active",
    statusLabel: "Active Utility Program",
    effectiveDates: "Effective August 1, 2026 – June 30, 2027",
    sourceUrl:
      "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf",
    sourceLabel: "NorthWestern Energy Existing Home Electric Rebate PDF",
    lastReviewed: "September 24, 2026",
    requirements: [
      "Must be an active NorthWestern Energy Montana electric residential customer",
      "Equipment must be installed in an existing single-family or manufactured home",
      "Qualifying heat pumps must meet AHRI-certified ratings specified on current application form",
      "Application must be submitted with paid contractor invoice within designated program timeframe",
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
    statusLabel: "Active Utility Program",
    effectiveDates: "Current 2026 Program Window",
    sourceUrl: "https://northwesternenergyhpwh.com/",
    sourceLabel: "NorthWestern Energy HPWH Official Site",
    lastReviewed: "September 24, 2026",
    requirements: [
      "Customer must receive residential electric service from NorthWestern Energy in Montana",
      "Must be installed by an approved participating contractor to receive instant customer discount",
      "Replaces electric resistance water heating; eligibility criteria, unit sizing, and capacity rules apply",
      "Subject to total program budget and utility inspection verification",
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
    statusLabel: "Active Co-op Program",
    effectiveDates: "Active 2026 Co-op Calendar Year",
    sourceUrl: "https://sunriverelectric.coop/air-source-heat-pumps",
    sourceLabel: "Sun River Electric Co-op Air-Source Page",
    lastReviewed: "September 24, 2026",
    requirements: [
      "Must be a member receiving electric service on Sun River Electric Cooperative lines (e.g., Sun River, Vaughn, Simms area)",
      "System must meet minimum SEER2/HSPF2 efficiency thresholds set by cooperative guidelines",
      "Requires pre-installation coordination or post-installation co-op inspection approval",
      "Incentive calculated as $150 per ton up to a maximum cap of 5 tons ($750)",
    ],
  },
  {
    id: "sun-river-ground-source",
    name: "Ground-Source (Geothermal) Heat Pump Incentive",
    provider: "Sun River Electric Cooperative",
    providerType: "Electric Cooperative",
    incentiveAmount: "$200 per installed ton (Up to $1,000 per system)",
    eligibleEquipment:
      "Qualifying closed-loop or open-loop ground-source heat pump systems",
    status: "active",
    statusLabel: "Active Co-op Program",
    effectiveDates: "Active 2026 Co-op Calendar Year",
    sourceUrl: "https://sunriverelectric.coop/ground-source-heat-pump-rebate",
    sourceLabel: "Sun River Electric Co-op Ground-Source Page",
    lastReviewed: "September 24, 2026",
    requirements: [
      "Must be an active cooperative member on Sun River Electric lines",
      "System design and ground loop must satisfy cooperative engineering and AHRI certification guidelines",
      "Requires completed application and post-installation inspection approval",
      "Incentive calculated as $200 per ton up to a maximum cap of 5 tons ($1,000)",
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
    lastReviewed: "September 24, 2026",
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
    incentiveAmount: "Pending federal program launch / Approval required",
    eligibleEquipment:
      "Anticipated whole-home efficiency retrofits and point-of-sale electrification rebates for income-qualified households",
    status: "pending_federal_approval",
    statusLabel: "Pending Launch",
    effectiveDates: "Under Federal Review (Not Currently Available)",
    sourceUrl: "https://deq.mt.gov/energy/Programs/efficiency",
    sourceLabel: "Montana DEQ Energy Efficiency Portal",
    lastReviewed: "September 24, 2026",
    requirements: [
      "Montana DEQ reports that state-administered HOMES and HEEHR rebate programs have not yet launched",
      "Final federal review and administrative rules must be executed before consumer applications open",
      "No contractor can issue instant state HOMES or HEEHR rebates until the official launch date is published by Montana DEQ",
      "We will update this guide as soon as Montana DEQ announces live consumer application dates",
    ],
  },
];
