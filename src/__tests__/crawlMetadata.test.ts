import { describe, expect, it } from "vitest";
import { readdirSync } from "node:fs";
import path from "node:path";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { canonicalUrl } from "@/lib/seo/urls";
import { buildMetadata } from "@/lib/seo/metadata";
import { GET as sitemapRedirect } from "@/app/sitemap/route";

function pageRoutes(directory: string, prefix = ""): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return pageRoutes(path.join(directory, entry.name), `${prefix}/${entry.name}`);
    return entry.name === "page.tsx" ? [prefix || "/"] : [];
  });
}

describe("Canonical routes and crawler metadata", () => {
  it("keeps old HTML sitemap links working without an extra presentation page", () => {
    const response = sitemapRedirect(new Request("https://greatfallsheatingandair.com/sitemap"));
    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe("https://greatfallsheatingandair.com/sitemap.xml");
    expect(sitemap().some((entry) => new URL(entry.url).pathname === "/sitemap")).toBe(false);
  });

  it("includes every public page exactly once and excludes the confirmation page", () => {
    const expected = pageRoutes(path.resolve("src/app"))
      .filter((route) => route !== "/thank-you").map(canonicalUrl).sort();
    const actual = sitemap().map((entry) => entry.url).sort();
    expect(actual).toEqual(expected);
    expect(new Set(actual).size).toBe(actual.length);
    expect(sitemap().every((entry) => entry.lastModified === undefined)).toBe(true);
  });

  it("uses identical clean canonical URLs in metadata and the sitemap", () => {
    for (const entry of sitemap()) {
      const pathname = new URL(entry.url).pathname;
      const metadata = buildMetadata({ title: "Test", description: "Test", canonicalPath: pathname });
      expect(metadata.alternates?.canonical).toBe(entry.url);
    }
    expect(canonicalUrl("/contact/?intent=estimate#form")).toBe(canonicalUrl("/contact"));
  });

  it("shares API restrictions across named crawlers and lets crawlers read noindex pages", () => {
    const config = robots();
    const rule = Array.isArray(config.rules) ? config.rules[0] : config.rules;
    expect(rule.userAgent).toEqual(expect.arrayContaining(["*", "Googlebot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User"]));
    expect(rule.allow).toBe("/");
    expect(rule.disallow).toContain("/api/");
    expect(rule.disallow).not.toContain("/thank-you");
    expect(config.sitemap).toBe(canonicalUrl("/sitemap.xml"));
  });
});
