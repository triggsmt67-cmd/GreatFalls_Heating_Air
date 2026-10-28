import { siteConfig } from "@/content/site";

export function canonicalUrl(path: string = "/"): string {
  const url = new URL(path, `${siteConfig.siteUrl}/`);
  url.search = "";
  url.hash = "";
  return url.toString().replace(/\/+$/, "");
}
