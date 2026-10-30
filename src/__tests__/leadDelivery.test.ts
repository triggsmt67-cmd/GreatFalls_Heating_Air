import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "@/app/api/lead/route";
import { sendLeadNotificationEmail } from "@/lib/email/adapter";

const lead = {
  intent: "general" as const,
  fullName: "Website Delivery Test",
  email: "test@example.com",
  phone: "",
  preferredContact: "email" as const,
  location: "Great Falls",
  message: "TEST ONLY — no service request. Checking website delivery.",
  consent: true,
  sourceRoute: "/contact",
};

let testNumber = 0;
beforeEach(() => {
  testNumber++;
  vi.stubEnv("NODE_ENV", "production");
  vi.stubEnv("VERCEL", "1");
  vi.stubEnv("LEAD_EMAIL_MODE", "live");
  vi.stubEnv("EMAIL_PROVIDER_API_KEY", "test-secret");
  vi.stubEnv("CONTACT_FROM_EMAIL", "Great Falls Heating and Air <notifications@greatfallsheatingandair.com>");
  vi.stubEnv("CONTACT_TO_EMAIL", "gfheatingandair@icloud.com");
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

function request(body: unknown = lead) {
  return new NextRequest("https://greatfallsheatingandair.com/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-vercel-forwarded-for": `192.0.2.${testNumber}`, "x-forwarded-for": "spoofed" },
    body: JSON.stringify(body),
  });
}

describe("Production lead delivery", () => {
  it("passes validated data to Resend and confirms acceptance without exposing keys", async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(Response.json({ id: "resend-test-id" }));
    vi.stubGlobal("fetch", fetchMock);
    const response = await POST(request());
    const result = await response.json();
    expect(response.status).toBe(200);
    expect(result).toMatchObject({ success: true, simulated: false, redirectUrl: "/thank-you", messageId: "resend-test-id" });
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(options.headers.Authorization).toBe("Bearer test-secret");
    expect(JSON.parse(options.body)).toMatchObject({
      from: "Great Falls Heating and Air <notifications@greatfallsheatingandair.com>",
      to: ["gfheatingandair@icloud.com"],
      reply_to: "test@example.com",
    });
    expect(JSON.stringify(result)).not.toContain("secret");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns an error without a success redirect when Resend rejects delivery", async () => {
    vi.stubGlobal("fetch", vi.fn()
      .mockResolvedValueOnce(Response.json({ message: "Rejected" }, { status: 403 })));
    const response = await POST(request());
    expect(response.status).toBe(502);
    expect(await response.json()).toMatchObject({ success: false });
  });

  it("blocks spam and invalid submissions before sending email", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    for (const body of [{ ...lead, honeypot: "bot" }, { ...lead, consent: false }]) {
      expect((await POST(request(body))).status).toBe(422);
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects the sixth attempt and allows another after ten minutes", async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn().mockImplementation(() => Promise.resolve(Response.json({ id: "accepted" })));
    vi.stubGlobal("fetch", fetchMock);
    for (let i = 0; i < 5; i++) expect((await POST(request())).status).toBe(200);
    const limited = await POST(request());
    expect(limited.status).toBe(429);
    expect(limited.headers.get("Retry-After")).toBe("600");
    expect(fetchMock).toHaveBeenCalledTimes(5);
    vi.setSystemTime(Date.now() + 600_001);
    expect((await POST(request())).status).toBe(200);
  });

  it("does not silently simulate in live mode without credentials", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("EMAIL_PROVIDER_API_KEY", "");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    expect((await sendLeadNotificationEmail(lead)).success).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("never simulates successful production delivery", async () => {
    vi.stubEnv("LEAD_EMAIL_MODE", "simulate");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    expect((await sendLeadNotificationEmail(lead)).success).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
