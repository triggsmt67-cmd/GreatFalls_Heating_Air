export interface LaunchReadinessItem {
  key: string;
  label: string;
  currentValue: string | null;
  status: "pending_client_confirmation" | "ready";
  notes: string;
}

export const siteConfig = {
  businessName: "Great Falls Heating and Air LLC",
  tagline: "Heating and cooling that make sense for your home.",
  shortDescription:
    "Home heating, emergency furnace repair, air conditioning, and cold-climate heat pumps for Great Falls weather.",
  phoneDisplay: "406-781-4027",
  phoneE164: "+14067814027",
  email: "GFheatingandair@icloud.com",
  streetAddress: "108 Riverview B",
  locality: "Great Falls",
  region: "MT",
  postalCode: "59404",
  serviceAreaSummary:
    "Great Falls and surrounding north-central Montana communities",
  hours: "Monday–Friday, 8 a.m.–5 p.m.",
  emergencyAvailability: "24/7 emergency service and repair",
  emergencyAvailabilityBadge: "24/7 emergency service and repair",
  montanaRegistration: "C1680325",
  epaCertification: "[CONFIRM EPA 608 CREDENTIALS]",
  ownerName: "[OWNER NAME]",
  companyHistory: "[CLIENT-APPROVED COMPANY HISTORY]",
  warranty: "[CLIENT-APPROVED WARRANTY]",
  reviewRating: null,
  reviewCount: null,
  googleBusinessProfileUrl: "[GBP URL]",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://greatfallsheatingandair.com",
  socials: {
    facebook: "[FACEBOOK URL]",
  },
} as const;

// Enable only after the corresponding client evidence has been reviewed.
export const verification = {
  businessIdentity: true,
  contactDetails: true,
  address: true,
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
    currentValue: "Ten labeled photography placeholders",
    status: "pending_client_confirmation",
    notes:
      "Replace Photo 01–10 with approved authentic or licensed photography. Each slot displays its recommended source dimensions, subject, and crop guidance.",
  },
  {
    key: "durableRateLimiter",
    label: "Production rate limiter",
    currentValue: "Development-only limiter",
    status: "pending_client_confirmation",
    notes:
      "Production lead endpoint fails closed until a durable shared rate-limiter implementation is configured and tested.",
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
    status: "pending_client_confirmation",
    notes: "Public email supplied by the client. Production web lead delivery still requires mailbox configuration and verification.",
  },
  {
    key: "physicalAddress",
    label: "Business Address & GBP Location",
    currentValue: `${siteConfig.streetAddress}, ${siteConfig.locality}, ${siteConfig.region} ${siteConfig.postalCode}`,
    status: "ready",
    notes: "Public business address supplied by the client. Walk-in availability and office hours are not implied.",
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
    status: "pending_client_confirmation",
    notes:
      "Client approval required for founder bio, local roots, and technician backgrounds.",
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
    currentValue: process.env.EMAIL_PROVIDER_API_KEY
      ? "Configured"
      : "Simulated Local Fallback",
    status: process.env.EMAIL_PROVIDER_API_KEY
      ? "ready"
      : "pending_client_confirmation",
    notes:
      "Set CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, and EMAIL_PROVIDER_API_KEY in production env.",
  },
];
