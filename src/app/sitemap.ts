import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toISOString();

  // All 11 public indexable routes (excluding /thank-you per Section 12)
  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: `${baseUrl}/services/heating`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/services/heating/emergency-furnace-repair`,
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/services/cooling`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/services/cooling/ac-repair`,
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/services/heat-pumps/cold-climate`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/rebates/2026-montana-hvac-rebates`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/privacy`,
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
