"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics/events";
export function StickyMobileActions() {
  const pathname = usePathname();
  const maintenance = pathname.endsWith("/ac-maintenance") || pathname.endsWith("/furnace-maintenance");
  const repair = pathname.endsWith("/ac-repair") || pathname.endsWith("/emergency-furnace-repair") || pathname.endsWith("/repair-maintenance");
  const intent = maintenance ? "maintenance" : repair ? "general" : "estimate";
  const label = maintenance ? "Request a tune-up" : repair ? "Request service" : "Request an estimate";
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
        href={`/contact?intent=${intent}`}
        onClick={() =>
          trackEvent({
            name: intent === "estimate" ? "estimate_cta_click" : "service_request_cta_click",
            properties: {
              route: window.location.pathname,
              placement: "sticky_mobile",
            },
          })
        }
      >
        {label} ↗
      </Link>
    </div>
  );
}
