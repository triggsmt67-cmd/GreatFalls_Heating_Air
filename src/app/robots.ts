import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo/urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      // All named agents share the same restrictions as the wildcard group.
      // OAI-SearchBot is ChatGPT search; GPTBot is a separate training crawler
      // whose existing wildcard permission is unchanged.
      userAgent: ["*", "Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User"],
      allow: "/",
      disallow: ["/api/", "/api$"],
      // /thank-you remains crawlable so its noindex metadata can be read.
    }],
    sitemap: canonicalUrl("/sitemap.xml"),
  };
}
