export type AnalyticsEvent =
  | {
      name: "phone_click";
      properties: {
        route: string;
        placement:
          | "utility_bar"
          | "header"
          | "hero"
          | "emergency_callout"
          | "form_emergency_warning"
          | "footer"
          | "sticky_mobile";
        phoneNumber: string;
      };
    }
  | {
      name: "estimate_cta_click" | "service_request_cta_click";
      properties: {
        route: string;
        placement:
          | "header"
          | "hero"
          | "service_section"
          | "footer"
          | "sticky_mobile"
          | "inline";
      };
    }
  | {
      name: "lead_form_start";
      properties: {
        intent: string;
        route: string;
      };
    }
  | {
      name: "lead_form_submit_success";
      properties: {
        intent: string;
        route: string;
      };
    }
  | {
      name: "rebate_source_click";
      properties: {
        programId: string;
        provider: string;
        sourceUrl: string;
      };
    };

/**
 * Dispatches custom analytics events without PII.
 * Pluggable for future Google Tag Manager, GA4, or PostHog configurations.
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // 1. Dispatch custom DOM event
  try {
    const customEvent = new CustomEvent("gf_analytics", {
      detail: event,
    });
    window.dispatchEvent(customEvent);
  } catch {
    // Fail silently in non-browser environments
  }

  // GTM forwards these named events to GA4. No form field
  // values are passed here; only event context and the public business number.
  const windowWithDataLayer = window as unknown as {
    dataLayer?: Record<string, unknown>[];
  };
  try {
    if (Array.isArray(windowWithDataLayer.dataLayer)) {
      windowWithDataLayer.dataLayer.push({ event: event.name, ...event.properties });
    }
  } catch { /* Analytics must never interrupt an inquiry. */ }
}
