"use client";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics/events";
export function StickyMobileActions() {
  return (
    <div
      className="mobile-actions"
      role="region"
      aria-label="Mobile quick actions"
    >
      <a
        className="button button-orange"
        href={`tel:${siteConfig.phoneE164}`}
        onClick={() =>
          trackEvent({
            name: "phone_click",
            properties: {
              route: window.location.pathname,
              placement: "sticky_mobile",
              phoneNumber: siteConfig.phoneE164,
            },
          })
        }
      >
        Tap to call
      </a>
      <Link
        className="button button-yellow"
        href="/contact?intent=estimate"
        onClick={() =>
          trackEvent({
            name: "estimate_cta_click",
            properties: {
              route: window.location.pathname,
              placement: "sticky_mobile",
            },
          })
        }
      >
        Get an estimate ↗
      </Link>
    </div>
  );
}
