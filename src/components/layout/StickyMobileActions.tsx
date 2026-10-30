"use client";
import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics/events";
export function StickyMobileActions() {
  const pathname = usePathname();
  const maintenance = pathname.endsWith("/ac-maintenance") || pathname.endsWith("/furnace-maintenance");
  const repair = pathname.endsWith("/ac-repair") || pathname.endsWith("/emergency-furnace-repair") || pathname.endsWith("/repair-maintenance");
  const intent = maintenance ? "maintenance" : repair ? "general" : "estimate";
  const label = pathname === "/" ? "Request service" : maintenance ? "Request a tune-up" : repair ? "Request service" : "Request an estimate";
  return (
    <div
      className="mobile-actions"
      role="region"
      aria-label="Mobile quick actions"
    >
      <a
        className="button button-orange"
        href={`tel:${siteConfig.phoneE164}`}
      >
        Tap to call
      </a>
      <RequestServiceLink className="button button-yellow" intent={pathname === "/" ? "general" : intent} onOpen={() =>
        trackEvent({
          name: intent === "estimate" ? "estimate_cta_click" : "service_request_cta_click",
          properties: { route: pathname, placement: "sticky_mobile" },
        })
      }>
        {label} ↗
      </RequestServiceLink>
    </div>
  );
}
