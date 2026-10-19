import { siteConfig, verification } from "@/content/site";
import { getHVACBusinessSchema } from "@/lib/schema/jsonLd";

export const heatingUrl = `${siteConfig.siteUrl.replace(/\/$/, "")}/services/heating`;
export const heatingCommunities = [
  "Great Falls", "Black Eagle", "Belt", "Vaughn", "Ulm", "Sun Prairie",
  "Cascade", "Fort Shaw", "Simms", "Centerville",
];

export function getHeatingPageSchema(title: string, description: string) {
  const businessId = `${siteConfig.siteUrl.replace(/\/$/, "")}/#business`;
  const verifiedBusiness = getHVACBusinessSchema();
  // Preserve the full local-business verification gate. Identity alone is enough
  // for a minimal Organization, without implying a verified address or contacts.
  const provider = verifiedBusiness ? { "@id": businessId } : verification.businessIdentity ? {
    "@type": "Organization", "@id": businessId,
    name: siteConfig.businessName, url: siteConfig.siteUrl,
  } : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": `${heatingUrl}#webpage`,
        url: heatingUrl, name: title, description, inLanguage: "en-US",
        mainEntity: { "@id": `${heatingUrl}#service` },
        breadcrumb: { "@id": `${heatingUrl}#breadcrumb` },
        hasPart: { "@id": `${heatingUrl}#faq` },
      },
      {
        "@type": "Service", "@id": `${heatingUrl}#service`,
        url: heatingUrl, name: "Residential Heating & Furnace Services in Great Falls, MT",
        serviceType: ["Furnace repair", "Furnace maintenance", "Heating system installation"],
        description, provider,
        mainEntityOfPage: { "@id": `${heatingUrl}#webpage` },
        areaServed: heatingCommunities.map((name) => ({ "@type": "Place", name: `${name}, Montana` })),
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "Residential heating services",
          itemListElement: [
            ["Furnace repair & diagnostics", "/services/heating/emergency-furnace-repair"],
            ["Pre-winter furnace tune-up & safety inspection", "/services/heating/furnace-maintenance"],
            ["Furnace installation & replacement", "/services/heating/furnace-installation"],
            ["Cold-climate heat pumps & dual-fuel systems", "/services/heat-pumps/cold-climate"],
            ["Garage & shop unit heaters", "/services/heating"],
            ["Thermostats & airflow balancing", "/services/heating"],
          ].map(([name, path]) => ({
            "@type": "Offer", itemOffered: { "@type": "Service", name,
              url: `${siteConfig.siteUrl.replace(/\/$/, "")}${path}` },
          })),
        },
      },
    ],
  };
}
