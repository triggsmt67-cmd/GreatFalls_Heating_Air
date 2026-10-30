import "server-only";
import { LeadFormData } from "../validation/leadFormSchema";
import { formatHtmlEmail, formatPlainTextEmail } from "./templates";
import { siteConfig } from "@/content/site";
export interface SendLeadEmailResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}
export async function sendLeadNotificationEmail(
  data: LeadFormData,
): Promise<SendLeadEmailResult> {
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const failure = {
    success: false,
    error: `Unable to confirm delivery. Please call ${siteConfig.phoneDisplay}.`,
  };
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.LEAD_EMAIL_MODE === "simulate"
  ) {
    console.info(
      "[EMAIL] Development simulation: no email sent; customer details are not logged.",
    );
    return {
      success: true,
      messageId: `simulated-dev-${Date.now()}`,
      simulated: true,
    };
  }
  if (process.env.LEAD_EMAIL_MODE !== "live" || !apiKey || !toEmail || !fromEmail) {
    console.error("[EMAIL] Live delivery configuration is incomplete.");
    return failure;
  }
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    dateStyle: "medium",
    timeStyle: "short",
  });
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: AbortSignal.timeout(10_000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        ...(data.email ? { reply_to: data.email } : {}),
        subject: `[GF HVAC ${data.intent.toUpperCase()}] New web inquiry`,
        text: formatPlainTextEmail({ data, timestamp }),
        html: formatHtmlEmail({ data, timestamp }),
      }),
    });
    if (!response.ok) {
      console.error("[EMAIL] Provider response status:", response.status);
      return failure;
    }
    const result = (await response.json()) as { id?: unknown };
    if (typeof result.id !== "string" || !result.id) return failure;
    return { success: true, messageId: result.id };
  } catch {
    console.error("[EMAIL] Delivery failed");
    return failure;
  }
}
