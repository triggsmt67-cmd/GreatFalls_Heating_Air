import { siteConfig, serviceCommunities, verification } from "@/content/site";
import { ServiceItem } from "@/content/services";
import { FAQItem } from "@/content/faqs";

import { canonicalUrl } from "@/lib/seo/urls";

export type SchemaNode = Record<string, unknown>;
export const businessId = `${canonicalUrl()}/#business`;
export const websiteId = `${canonicalUrl()}/#website`;

// Verify each claim independently. Unconfirmed credentials must never suppress
// the business identity and contact details that have already been confirmed.
export function getHVACBusinessSchema() {
  if (!verification.businessIdentity) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": businessId,
    name: siteConfig.businessName,
    url: canonicalUrl(),
    description: siteConfig.shortDescription,
    ...(verification.contactDetails ? {
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phoneE164,
          email: siteConfig.email,
          contactType: "customer service",
          url: canonicalUrl("/contact"),
        },
        ...(verification.emergency24Hours ? [{
          "@type": "ContactPoint",
          telephone: siteConfig.phoneE164,
          contactType: "emergency heating and cooling service",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => `https://schema.org/${day}`),
            opens: "00:00", closes: "23:59",
          },
        }] : []),
      ],
    } : {}),
    ...(verification.hours ? { openingHours: "Mo-Fr 08:00-17:00" } : {}),
    ...(verification.productionLogo ? {
      logo: { "@type": "ImageObject", "@id": `${canonicalUrl()}/#logo`, url: canonicalUrl("/images/great-falls-heating-air-logo.svg") },
    } : {}),
    areaServed: serviceCommunities.map(c => ({
      "@type": "Place", name: `${c.name}, Montana`,
    })),
    // No private address, speculative price range, ratings, credentials, or
    // placeholder social-profile URLs belong in published structured data.
  };
}

export function getBusinessReference() {
  return verification.businessIdentity ? { "@id": businessId } : undefined;
}

export function getSiteSchema() {
  const business = getHVACBusinessSchema();
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...(business ? [business] : []),
      {
        "@type": "WebSite", "@id": websiteId,
        url: canonicalUrl(), name: siteConfig.businessName,
        inLanguage: "en-US", publisher: getBusinessReference(),
      },
    ],
  };
}

// Preserve hub/subpage relationships while connecting every page to the same
// website and publisher. This runs on the server and adds no client bundle.
export function connectSchemaGraph(nodes: SchemaNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map(node => {
      if (!["WebPage", "AboutPage", "ContactPage"].includes(String(node["@type"]))) return node;
      const parents = Array.isArray(node.isPartOf) ? node.isPartOf : node.isPartOf ? [node.isPartOf] : [];
      return {
        inLanguage: "en-US",
        publisher: getBusinessReference(),
        about: getBusinessReference(),
        ...node,
        isPartOf: [{ "@id": websiteId }, ...parents.filter(parent => (parent as SchemaNode)["@id"] !== websiteId)],
      };
    }),
  };
}

export function getPageSchema({ path, title, description, type = "WebPage", ...extra }: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
} & SchemaNode) {
  const url = canonicalUrl(path);
  return connectSchemaGraph([{
    "@type": type, "@id": `${url}#webpage`, url,
    name: title, description,
    ...(path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...extra,
  }]);
}

export function serializeSchema(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

export function getServiceSchema(service: ServiceItem) {
  if (!getHVACBusinessSchema()) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType:
      service.category === "heating"
        ? "Heating Installation & Repair"
        : service.category === "cooling"
          ? "Air Conditioning Repair & Upgrade"
          : "Heat Pump Installation",
    description: service.metaDescription,
    provider: getBusinessReference(),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Cascade County, Montana",
    },
  };
}

export function getFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
