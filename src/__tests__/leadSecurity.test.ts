import { afterEach, describe, expect, it, vi } from "vitest";
import { formatHtmlEmail, normalizeTelephone } from "@/lib/email/templates";
import {
  validateLeadForm,
  LeadFormData,
} from "@/lib/validation/leadFormSchema";
import { sendLeadNotificationEmail } from "@/lib/email/adapter";
import { leadRateLimiter } from "@/lib/validation/rateLimit";
import { getHVACBusinessSchema, getServiceSchema } from "@/lib/schema/jsonLd";
import { servicesData } from "@/content/services";
const data: LeadFormData = {
  intent: "estimate",
  fullName: '<img src=x onerror="alert(1)">',
  email: "test@example.com",
  phone: "(406) 555-0100",
  location: "A&B",
  preferredContact: "phone",
  message: '<a href="https://bad.example">fake link</a>',
  consent: true,
  sourceRoute: '/" onclick="bad',
};
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
describe("Lead security", () => {
  it("escapes customer text and attributes in HTML", () => {
    const html = formatHtmlEmail({ data, timestamp: "<now>" });
    expect(html).not.toContain("<img");
    expect(html).not.toContain('<a href="https://bad.example">');
    expect(html).toContain("&lt;img");
    expect(html).toContain("&quot;");
    expect(html).toContain("A&amp;B");
    expect(html).toContain('href="tel:+14065550100"');
    expect(html).toContain("&lt;now&gt;");
  });
  it("normalizes telephone links", () => {
    expect(normalizeTelephone("+1 (406) 555-0100")).toBe("+14065550100");
  });
  it("rejects malformed bodies and phone attribute injection", () => {
    expect(
      validateLeadForm(null as unknown as Record<string, unknown>).isValid,
    ).toBe(false);
    expect(
      validateLeadForm({ ...data, phone: '4065550100" onclick="bad' }).errors
        .phone,
    ).toBeDefined();
  });
  it("fails closed in production without a durable limiter", async () => {
    vi.stubEnv("NODE_ENV", "production");
    expect(await leadRateLimiter.check("test")).toBe("unavailable");
  });
  it("limits local repeated attempts", async () => {
    vi.stubEnv("NODE_ENV", "test");
    const key = "rate-limit-unit-test";
    for (let i = 0; i < 5; i++)
      expect(await leadRateLimiter.check(key)).toBe("allowed");
    expect(await leadRateLimiter.check(key)).toBe("limited");
  });
  it("does not simulate production email", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("EMAIL_PROVIDER_API_KEY", "");
    expect((await sendLeadNotificationEmail(data)).success).toBe(false);
  });
  it("requires a provider confirmation ID", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("EMAIL_PROVIDER_API_KEY", "test-key");
    vi.stubEnv("CONTACT_TO_EMAIL", "to@example.com");
    vi.stubEnv("CONTACT_FROM_EMAIL", "from@example.com");
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    expect((await sendLeadNotificationEmail(data)).success).toBe(false);
    fetchMock.mockResolvedValue(
      new Response('{"id":"confirmed-test"}', { status: 200 }),
    );
    expect((await sendLeadNotificationEmail(data)).messageId).toBe(
      "confirmed-test",
    );
    fetchMock.mockResolvedValue(new Response("Unavailable", { status: 503 }));
    expect((await sendLeadNotificationEmail(data)).success).toBe(false);
  });
  it("suppresses unverified business and service schema", () => {
    vi.stubEnv("NODE_ENV", "production");
    expect(getHVACBusinessSchema()).toBeNull();
    expect(getServiceSchema(servicesData["heating-hub"])).toBeNull();
  });
});
