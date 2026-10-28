import { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { canonicalUrl as getCanonicalUrl } from "./urls";

interface MetadataOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
}

export function buildMetadata({
  title,
  description,
  canonicalPath = "/",
  noindex = false,
  ogImage = "/opengraph-image",
  ogImageAlt,
}: MetadataOptions): Metadata {
  const fullTitle = title.includes(siteConfig.businessName)
    ? title
    : `${title} | ${siteConfig.businessName}`;

  const canonicalUrl = getCanonicalUrl(canonicalPath);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage.startsWith("http")
            ? ogImage
            : `${siteConfig.siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage.startsWith("http")
            ? ogImage
            : `${siteConfig.siteUrl}${ogImage}`,
          alt: ogImageAlt ?? fullTitle,
        },
      ],
    },
  };
}
