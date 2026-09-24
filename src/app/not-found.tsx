import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";
export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "Find heating and cooling services, contact information, and homeowner resources.",
  noindex: true,
});
export default function NotFound() {
  return (
    <div className="utility-page">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>This page may have moved, or the address may be incorrect.</p>
      <div className="hero-actions">
        <Link className="button button-yellow" href="/">
          Back to home ↗
        </Link>
        <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
      <div className="related-links">
        <Link
          className="text-link"
          href="/services/heating/emergency-furnace-repair"
        >
          Furnace repair →
        </Link>
        <Link className="text-link" href="/services/cooling/ac-repair">
          AC repair →
        </Link>
        <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">
          2026 rebates →
        </Link>
      </div>
    </div>
  );
}
