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
      name: "estimate_cta_click";
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

  // 2. Check for optional dataLayer (GTM / GA4)
  const windowWithDataLayer = window as unknown as {
    dataLayer?: Record<string, unknown>[];
  };
  if (Array.isArray(windowWithDataLayer.dataLayer)) {
    windowWithDataLayer.dataLayer.push({
      event: event.name,
      ...event.properties,
    });
  }

  // 3. Dev-mode logging
  if (process.env.NODE_ENV !== "production") {
    // Debug log for development analytics verification
    // console.log(`[Analytics] ${event.name}:`, event.properties);
  }
}
