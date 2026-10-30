import { afterEach, describe, expect, it, vi } from "vitest";
import { trackEvent } from "@/lib/analytics/events";

afterEach(() => vi.unstubAllGlobals());

describe("Analytics delivery", () => {
  it("queues one form-success event with context and no customer fields", () => {
    const dataLayer: unknown[] = [];
    vi.stubGlobal("window", { dispatchEvent: vi.fn(), dataLayer });
    trackEvent({ name: "lead_form_submit_success", properties: { intent: "estimate", route: "/contact" } });
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
