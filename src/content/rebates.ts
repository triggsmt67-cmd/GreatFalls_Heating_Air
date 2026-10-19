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
    "Compare Great Falls HVAC incentives by utility account and project: NorthWestern Energy, Sun River Electric, expired 25C credits, and pending Montana DEQ programs.",
  lastReviewedDate: "October 19, 2026",
  heroSubtitle:
    "Compare the project’s full cost, then confirm any utility incentive for your account and exact equipment before purchasing.",
  disclaimer:
    "Important Disclaimer: Great Falls Heating and Air LLC is an independent HVAC installation and service contractor. We do not administer utility programs, determine individual rebate eligibility, or guarantee incentive payouts, program funding, or tax outcomes. Utility incentive rules, efficiency tier minimums, and funding caps are set solely by program administrators and are subject to change without notice. Homeowners must verify current program rules directly with the sponsoring utility or tax advisor prior to equipment purchase.",
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
    statusLabel: "Active Utility Program",
    effectiveDates: "Effective August 1, 2026 – June 30, 2027",
    sourceUrl:
      "https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf",
    sourceLabel: "NorthWestern Energy Existing Home Electric Rebate PDF",
    lastReviewed: "October 19, 2026",
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
    statusLabel: "Active Utility Program",
    effectiveDates: "Limited-time program; confirm funding before committing",
    sourceUrl: "https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives/heat-pump-water-heater-program",
    sourceLabel: "NorthWestern Energy Heat Pump Water Heater Program",
    lastReviewed: "October 19, 2026",
    requirements: [
      "Customer must receive residential electric service from NorthWestern Energy in Montana",
      "Must be installed by an approved participating contractor to receive instant customer discount",
      "Replaces an existing electric resistance tank; natural-gas replacement does not qualify",
      "Existing single-family or permanently founded manufactured homes may qualify; rental properties, new construction, commercial properties, and self-installation are excluded",
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
    statusLabel: "Active Co-op Program",
    effectiveDates: "Published program; obtain approval before installation",
    sourceUrl: "https://sunriverelectric.coop/air-source-heat-pumps",
    sourceLabel: "Sun River Electric Co-op Air-Source Page",
    lastReviewed: "October 19, 2026",
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
      "Qualifying closed-loop or open-loop ground-source heat pump systems",
    status: "active",
    statusLabel: "Active Co-op Program",
    effectiveDates: "Published program; obtain approval before installation",
    sourceUrl: "https://sunriverelectric.coop/ground-source-heat-pump-rebate",
    sourceLabel: "Sun River Electric Co-op Ground-Source Page",
    lastReviewed: "October 19, 2026",
    requirements: [
      "Must be an active cooperative member on Sun River Electric lines",
      "Request the Geothermal Heat Pump Rebate Agreement and obtain co-op approval before installation",
      "Installation must meet program specifications; payment follows installation and compliance inspection",
      "Published amount: $200 per installed ton, capped at $1,000 per system; this is separate from the air-source program",
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
    lastReviewed: "October 19, 2026",
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
      "Planned HOMES and HEEHR programs; final equipment and project rules depend on approved program guidance",
    status: "pending_federal_approval",
    statusLabel: "Pending Launch",
    effectiveDates: "Under Federal Review (Not Currently Available)",
    sourceUrl: "https://deq.mt.gov/energy/Programs/efficiency",
    sourceLabel: "Montana DEQ Energy Efficiency Portal",
    lastReviewed: "October 19, 2026",
    requirements: [
      "Montana DEQ reports that state-administered HOMES and HEEHR rebate programs have not yet launched",
      "DEQ reports revised DOE guidance began June 1, 2026; further guidance, application revision, and final implementation approval remain necessary",
      "No contractor can issue instant state HOMES or HEEHR rebates until the official launch date is published by Montana DEQ",
      "Check the DEQ program page for availability before relying on a future incentive in your budget",
    ],
  },
];
