import type { MetadataRoute } from "next";
import { siteMapGroups } from "@/content/siteMap";
import { canonicalUrl } from "@/lib/seo/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual significant content-update dates are tracked.
  return siteMapGroups.flatMap((group) =>
    group.pages.map((page) => ({ url: canonicalUrl(page.path) })),
  );
}
