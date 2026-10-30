export interface LaunchReadinessItem {
  key: string;
  label: string;
  currentValue: string | null;
  status: "pending_client_confirmation" | "ready";
  notes: string;
}

export const siteConfig = {
  businessName: "Great Falls Heating and Air LLC",
  businessShortName: "Great Falls Heating and Air",
  tagline: "Heating and cooling that make sense for your home.",
  shortDescription:
    "Home heating, emergency furnace repair, air conditioning, and cold-climate heat pumps for Great Falls weather.",
  phoneDisplay: "406-781-4027",
  phoneE164: "+14067814027",
  email: "gfheatingandair@icloud.com",
  locality: "Great Falls",
  region: "MT",
  serviceAreaSummary:
    "Great Falls and surrounding north-central Montana communities",
  hours: "Monday–Friday, 8 a.m.–5 p.m.",
  emergencyAvailability: "24/7 emergency service and repair",
  emergencyAvailabilityBadge: "24/7 emergency service and repair",
  montanaRegistration: "C1680325",
  epaCertification: "[CONFIRM EPA 608 CREDENTIALS]",
  ownerName: "Robert Ross",
  companyHistory: "[CLIENT-APPROVED COMPANY HISTORY]",
  warranty: "[CLIENT-APPROVED WARRANTY]",
  reviewRating: null,
  reviewCount: null,
  googleBusinessProfileUrl: "[GBP URL]",
  siteUrl:
    (process.env.NEXT_PUBLIC_SITE_URL || "https://www.greatfallsheatingandair.com").replace(/\/+$/, ""),
  socials: {
    facebook: "[FACEBOOK URL]",
    instagram: "[INSTAGRAM URL]",
  },
} as const;

// Enable only after the corresponding client evidence has been reviewed.
export const verification = {
  businessIdentity: true,
  contactDetails: true,
  hours: true,
  emergency24Hours: true,
  credentials: false,
  companyHistory: false,
  freeEstimates: false,
  upfrontPricing: false,
  responseTimes: false,
  stockedVehicles: false,
  manufacturerAffiliations: false,
  loadCalculations: false,
  historicHomeExpertise: false,
  warranties: false,
  reviews: false,
  photography: false,
  productionLogo: true,
} as const;

export const temporaryAssets = [
  {
    path: "src/components/ui/PhotoPlaceholder.tsx",
    kind: "Ten labeled photography placeholders",
    status:
      "Replace each numbered slot with approved photography using the displayed source dimensions and crop notes",
  },
] as const;

export const serviceCommunities = [
  {
    name: "Great Falls",
    role: "Core Service Hub",
    notes: "Primary residential service radius",
  },
  {
    name: "Black Eagle",
    role: "Immediate Area",
    notes: "North riverbank residential & historic properties",
  },
  {
    name: "Malmstrom AFB",
    role: "Nearby off-base households",
    notes: "No military affiliation, endorsement, or base access implied",
  },
  {
    name: "Ulm",
    role: "Southwest",
    notes: "Interstate corridor homes & acreage",
  },
  {
    name: "Cascade",
    role: "South",
    notes: "Missouri River canyon communities & rural properties",
  },
  {
    name: "Vaughn",
    role: "West / Northwest",
    notes: "Highway 89 residential corridor",
  },
  { name: "Sun Prairie", role: "West", notes: "Suburban homes & acreages" },
  {
    name: "Sun River",
    role: "West",
    notes: "Agricultural valley & Sun River Electric Co-op territory",
  },
  {
    name: "Belt",
    role: "East / Southeast",
    notes: "Historic older homes & high-demand winter heating",
  },
  {
    name: "Sand Coulee",
    role: "The Gulch",
    notes: "Historic mining community homes requiring careful airflow sizing",
  },
  {
    name: "Stockett",
    role: "The Gulch",
    notes: "Traditional coal-mining area residential properties",
  },
  { name: "Tracy", role: "The Gulch", notes: "Coulee residential properties" },
  {
    name: "Centerville",
    role: "The Gulch",
    notes: "Local agricultural and residential heating needs",
  },
] as const;

export const launchReadinessChecklist: LaunchReadinessItem[] = [
  {
    key: "temporaryPhotography",
    label: "Temporary imagery",
    currentValue: "Existing images installed; dedicated job photography still needed",
    status: "pending_client_confirmation",
    notes:
      "Obtain dedicated maintenance and indoor ductless photos and confirm rights and project associations for any new job examples. Existing images and Robert's portrait are installed.",
  },
  {
    key: "rateLimiter",
    label: "Production rate limiter",
    currentValue: "Basic in-memory limiter; no external service",
    status: "ready",
    notes:
      "Five attempts per IP per ten minutes on each server instance. Counters reset on restarts and are not shared across instances.",
  },
  {
    key: "businessName",
    label: "Legal Business Name",
    currentValue: siteConfig.businessName,
    status: "ready",
    notes: "Legal business name confirmed by the client.",
  },
  {
    key: "phone",
    label: "Production Phone Line",
    currentValue: siteConfig.phoneDisplay,
    status: "ready",
    notes: "Public telephone number supplied by the client.",
  },
  {
    key: "email",
    label: "Contact & Dispatch Email",
    currentValue: siteConfig.email,
    status: "ready",
    notes: "Confirmed recipient for live Resend notifications. Trevor confirmed receipt of the authorized test email on October 30, 2026.",
  },
  {
    key: "serviceArea",
    label: "Public Service Area",
    currentValue: siteConfig.serviceAreaSummary,
    status: "ready",
    notes: "Service-area business. Publish the service area only; keep the private street address out of website configuration and browser-delivered files.",
  },
  {
    key: "hours",
    label: "Regular Operating Hours",
    currentValue: siteConfig.hours,
    status: "ready",
    notes: "Owner confirmed Monday–Friday, 8 a.m.–5 p.m. on October 23, 2026.",
  },
  {
    key: "emergencyAvailability",
    label: "24/7 Emergency Service Claim",
    currentValue: siteConfig.emergencyAvailability,
    status: "ready",
    notes: "Owner confirmed 24/7 emergency service and repair on October 23, 2026.",
  },
  {
    key: "montanaRegistration",
    label: "Montana Contractor Registration (CR/ICEC)",
    currentValue: siteConfig.montanaRegistration,
    status: "ready",
    notes: "License number confirmed by the client.",
  },
  {
    key: "epaCertification",
    label: "EPA Section 608 Universal Certification",
    currentValue: siteConfig.epaCertification,
    status: "pending_client_confirmation",
    notes:
      "Confirm EPA 608 refrigerant handling certification identifiers for field technicians.",
  },
  {
    key: "ownerStory",
    label: "Owner & Company History",
    currentValue: siteConfig.ownerName,
    status: "ready",
    notes:
      "Approved Robert Ross introduction and portrait are published on Home/About. Additional history or technician biographies still require supplied evidence and approval.",
  },
  {
    key: "warranties",
    label: "Labor & Equipment Warranties",
    currentValue: siteConfig.warranty,
    status: "pending_client_confirmation",
    notes: "Supply written labor warranty and manufacturer warranty terms.",
  },
  {
    key: "reviews",
    label: "Customer Reviews & Star Ratings",
    currentValue: siteConfig.reviewRating,
    status: "pending_client_confirmation",
    notes:
      "Do not display star ratings or testimonials until authentic first-party or Google reviews exist.",
  },
  {
    key: "manufacturerLogos",
    label: "Manufacturer Dealer Affiliations",
    currentValue: null,
    status: "pending_client_confirmation",
    notes:
      "Ensure authorized dealer agreements are in place prior to displaying brand badges.",
  },
  {
    key: "productionLogo",
    label: "Production Vector SVG Logo",
    currentValue: "/images/great-falls-heating-air-logo.svg",
    status: "ready",
    notes: "User-supplied vector logo installed in the shared header and footer brand component.",
  },
  {
    key: "emailCredentials",
    label: "Email Dispatch API Credentials",
    currentValue: "Connected through Resend; recipient confirmed test receipt",
    status: "ready",
    notes:
      "Production credentials and sender domain are configured. Live contact and request-drawer wiring verified October 30, 2026. See docs/resend-setup.md; credentials remain server-side.",
  },
];
