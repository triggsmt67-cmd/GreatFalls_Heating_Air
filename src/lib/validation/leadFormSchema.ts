export type FormIntent = "emergency" | "estimate" | "maintenance" | "general";

export interface LeadFormData {
  intent: FormIntent;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  preferredContact: "phone" | "email" | "text";
  message: string;
  consent: boolean;
  honeypot?: string;
  sourceRoute?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof LeadFormData, string>>;
  sanitizedData?: LeadFormData;
}

export function validateLeadForm(
  formData: Record<string, unknown>,
): FormValidationResult {
  if (!formData || typeof formData !== "object" || Array.isArray(formData)) {
    return { isValid: false, errors: { message: "Invalid request payload." } };
  }
  const errors: Partial<Record<keyof LeadFormData, string>> = {};

  // 1. Honeypot check for bots
  const honeypot = String(formData.honeypot || "").trim();
  if (honeypot.length > 0) {
    return {
      isValid: false,
      errors: { honeypot: "Spam detected." },
    };
  }

  // 2. Intent validation
  const intentStr = String(formData.intent || "estimate").toLowerCase();
  const validIntents: FormIntent[] = [
    "emergency",
    "estimate",
    "maintenance",
    "general",
  ];
  const intent: FormIntent = validIntents.includes(intentStr as FormIntent)
    ? (intentStr as FormIntent)
    : "estimate";

  // 3. Full Name
  const fullName = String(formData.fullName || "").trim();
  if (!fullName) {
    errors.fullName = "Please enter your full name.";
  } else if (fullName.length < 2) {
    errors.fullName = "Name must be at least 2 characters long.";
  } else if (fullName.length > 100) {
    errors.fullName = "Name must not exceed 100 characters.";
  }

  // 4. Email
  const email = String(formData.email || "")
    .trim()
    .toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Please provide an email address.";
  } else if (!emailRegex.test(email) || email.length > 150) {
    errors.email = "Please provide a valid email address.";
  }

  // 5. Phone
  const rawPhone = String(formData.phone || "").trim();
  // Strip non-digits except +
  const cleanedDigits = rawPhone.replace(/[^\d]/g, "");
  if (!rawPhone) {
    errors.phone = "Please provide a telephone contact number.";
  } else if (
    cleanedDigits.length < 10 ||
    cleanedDigits.length > 15 ||
    rawPhone.length > 30 ||
    !/^[+\d\s().-]+$/.test(rawPhone)
  ) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  // 6. Location (ZIP or Community)
  const location = String(formData.location || "").trim();
  if (!location) {
    errors.location =
      "Please enter your town or ZIP code (e.g., Great Falls or 59404).";
  } else if (location.length < 2 || location.length > 60) {
    errors.location = "Please enter a valid service community or ZIP code.";
  }

  // 7. Preferred Contact Method
  const prefMethodStr = String(
    formData.preferredContact || "phone",
  ).toLowerCase();
  const preferredContact: "phone" | "email" | "text" =
    prefMethodStr === "email" || prefMethodStr === "text"
      ? prefMethodStr
      : "phone";

  // 8. Message / Problem Summary
  const message = String(formData.message || "").trim();
  if (!message) {
    errors.message =
      "Please describe what heating or cooling issue you are experiencing.";
  } else if (message.length < 10) {
    errors.message =
      "Please provide at least 10 characters describing the issue.";
  } else if (message.length > 2500) {
    errors.message = "Message must not exceed 2500 characters.";
  }

  // 9. Consent
  const consent =
    formData.consent === true ||
    formData.consent === "true" ||
    formData.consent === "on";
  if (!consent) {
    errors.consent =
      "You must agree to the privacy policy to submit this request.";
  }

  const sourceRoute = String(formData.sourceRoute || "/").slice(0, 100);

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          intent,
          fullName,
          email,
          phone: rawPhone,
          location,
          preferredContact,
          message,
          consent: true,
          sourceRoute,
        }
      : undefined,
  };
}
