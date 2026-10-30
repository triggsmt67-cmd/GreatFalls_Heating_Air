import { afterEach, describe, expect, it, vi } from "vitest";
import { trackEvent } from "@/lib/analytics/events";

afterEach(() => vi.unstubAllGlobals());

describe("Analytics delivery", () => {
  it("forwards form-success context to the configured GA4 property without customer fields", () => {
    const gtag = vi.fn();
    const dataLayer: unknown[] = [];
    vi.stubGlobal("window", { dispatchEvent: vi.fn(), dataLayer, gtag });
    trackEvent({ name: "lead_form_submit_success", properties: { intent: "estimate", route: "/contact" } });
    expect(gtag).toHaveBeenCalledExactlyOnceWith("event", "lead_form_submit_success", {
      intent: "estimate", route: "/contact", send_to: "G-7CVS6CRPSM",
    });
    expect(dataLayer).toEqual([{ event: "lead_form_submit_success", intent: "estimate", route: "/contact" }]);
  });

  it("does not turn a tracking failure into a form error", () => {
    vi.stubGlobal("window", {
      dispatchEvent: () => { throw new Error("blocked"); },
      dataLayer: { push: () => { throw new Error("blocked"); } },
      gtag: () => { throw new Error("blocked"); },
    });
    expect(() => trackEvent({ name: "lead_form_start", properties: { intent: "general", route: "/" } })).not.toThrow();
  });

  it("is safe before browser tracking is initialized", () => {
    vi.stubGlobal("window", { dispatchEvent: vi.fn() });
    expect(() => trackEvent({ name: "lead_form_start", properties: { intent: "general", route: "/" } })).not.toThrow();
    vi.stubGlobal("window", undefined);
    expect(() => trackEvent({ name: "lead_form_start", properties: { intent: "general", route: "/" } })).not.toThrow();
  });
});
