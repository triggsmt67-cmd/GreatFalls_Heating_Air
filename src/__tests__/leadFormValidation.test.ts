import { describe, it, expect } from "vitest";
import { validateLeadForm } from "@/lib/validation/leadFormSchema";

describe("validateLeadForm", () => {
  it("should validate a complete, valid estimate request", () => {
    const input = {
      intent: "estimate",
      fullName: "Michael Miller",
      email: "miller@example.com",
      phone: "406-555-0199",
      location: "Great Falls",
      preferredContact: "phone",
      message:
        "Looking for an estimate on replacing our 18-year-old gas furnace.",
      consent: true,
      honeypot: "",
    };

    const result = validateLeadForm(input);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
    expect(result.sanitizedData?.fullName).toBe("Michael Miller");
    expect(result.sanitizedData?.intent).toBe("estimate");
  });

  it("should catch honeypot spam attempts", () => {
    const spamInput = {
      intent: "estimate",
      fullName: "Spam Bot",
      email: "bot@spam.com",
      phone: "406-555-0100",
      location: "Great Falls",
      message: "Visit our spam website now!",
      consent: true,
      honeypot: "http://spam.ru",
    };

    const result = validateLeadForm(spamInput);
    expect(result.isValid).toBe(false);
    expect(result.errors.honeypot).toBeDefined();
  });

  it("should reject invalid email formats", () => {
    const invalidEmailInput = {
      intent: "maintenance",
      fullName: "Sarah Jenkins",
      email: "not-an-email",
      phone: "406-555-0155",
      location: "Belt",
      message: "Need seasonal tune-up for winter heating.",
      consent: true,
    };

    const result = validateLeadForm(invalidEmailInput);
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("should reject too-short phone numbers", () => {
    const shortPhoneInput = {
      intent: "emergency",
      fullName: "Tom Davis",
      email: "tom@example.com",
      phone: "123",
      location: "Malmstrom AFB",
      message: "Furnace stopped running completely.",
      consent: true,
    };

    const result = validateLeadForm(shortPhoneInput);
    expect(result.isValid).toBe(false);
    expect(result.errors.phone).toBeDefined();
  });

  it("should require privacy policy consent", () => {
    const noConsentInput = {
      intent: "general",
      fullName: "Alice Cooper",
      email: "alice@example.com",
      phone: "406-555-0144",
      location: "Sun River",
      message: "Do you service Sun River Electric Co-op territory?",
      consent: false,
    };

    const result = validateLeadForm(noConsentInput);
    expect(result.isValid).toBe(false);
    expect(result.errors.consent).toBeDefined();
  });
});
