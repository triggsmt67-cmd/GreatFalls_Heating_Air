import { describe, it, expect, vi, afterEach } from "vitest";
import { sendLeadNotificationEmail } from "@/lib/email/adapter";
import { formatPlainTextEmail, formatHtmlEmail } from "@/lib/email/templates";
import { LeadFormData } from "@/lib/validation/leadFormSchema";

describe("Email Adapter and Templates", () => {
  afterEach(() => vi.unstubAllEnvs());
  const sampleData: LeadFormData = {
    intent: "emergency",
    fullName: "John Smith",
    email: "john@example.com",
    phone: "406-555-0188",
    location: "Belt",
    preferredContact: "phone",
    message: "No heat during cold freeze, pilot light will not stay lit.",
    consent: true,
    sourceRoute: "/services/heating/emergency-furnace-repair",
  };

  it("should format plain text email without leaking secrets", () => {
    const text = formatPlainTextEmail({
      data: sampleData,
      timestamp: "Sep 24, 2026, 11:30 AM",
    });
    expect(text).toContain("John Smith");
    expect(text).toContain("406-555-0188");
    expect(text).toContain("EMERGENCY");
    expect(text).toContain("Belt");
  });

  it("should format HTML email with correct styling and recipient information", () => {
    const html = formatHtmlEmail({
      data: sampleData,
      timestamp: "Sep 24, 2026, 11:30 AM",
    });
    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain("Great Falls Heating and Air LLC");
    expect(html).toContain("John Smith");
    expect(html).toContain("john@example.com");
  });

  it("should simulate email dispatch in test/dev environment", async () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("LEAD_EMAIL_MODE", "simulate");
    const result = await sendLeadNotificationEmail(sampleData);
    expect(result.success).toBe(true);
    expect(result.simulated).toBe(true);
    expect(result.messageId).toBeDefined();
  });
});
