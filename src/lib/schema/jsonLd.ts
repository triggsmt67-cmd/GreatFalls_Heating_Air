import { siteConfig, serviceCommunities, verification } from "@/content/site";
import { ServiceItem } from "@/content/services";
import { FAQItem } from "@/content/faqs";

/**
 * Global HVACBusiness JSON-LD schema.
 * Note: Per Section 12, this is guarded so unverified structured data is not emitted
 * in production builds until client verification is complete.
 */
export function getHVACBusinessSchema() {
  if (
    !verification.businessIdentity ||
    !verification.contactDetails ||
    !verification.address ||
    !verification.hours ||
    !verification.credentials
  ) {
    // Suppress unverified schema in production
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    description: siteConfig.shortDescription,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      postalCode: siteConfig.postalCode,
      addressCountry: "US",
    },
    areaServed: serviceCommunities.map((c) => ({
      "@type": "City",
      name: c.name,
      containedInPlace: {
        "@type": "State",
        name: "Montana",
      },
    })),
  };
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
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phoneE164,
      url: siteConfig.siteUrl,
    },
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
