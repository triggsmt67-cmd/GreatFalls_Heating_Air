import { LeadFormData } from "../validation/leadFormSchema";

export interface FormEmailPayload {
  data: LeadFormData;
  timestamp: string;
}

export function formatPlainTextEmail({
  data,
  timestamp,
}: FormEmailPayload): string {
  return `GREAT FALLS HEATING AND AIR - NEW WEB INQUIRY
===================================================
Received: ${timestamp}
Source Page: ${data.sourceRoute || "/"}
Intent: ${data.intent.toUpperCase()}

CUSTOMER DETAILS:
-----------------
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Preferred Contact: ${data.preferredContact.toUpperCase()}

ISSUE / ESTIMATE SUMMARY:
-------------------------
${data.message}

CONSENT:
--------
Customer agreed to privacy policy and direct communication.
`;
}

export function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character]!,
  );
}

export function normalizeTelephone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 ? "+1" + digits : "+" + digits;
}

export function formatHtmlEmail(payload: FormEmailPayload): string {
  const data = Object.fromEntries(
    Object.entries(payload.data).map(([key, value]) => [
      key,
      typeof value === "string" ? escapeHtml(value) : value,
    ]),
  ) as unknown as LeadFormData;
  const timestamp = escapeHtml(payload.timestamp);
  const telephone = normalizeTelephone(payload.data.phone);
  const isEmergency = data.intent === "emergency";
  const intentColor = isEmergency ? "#B42318" : "#087BEA";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Lead - Great Falls Heating and Air</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F5F7F8; margin: 0; padding: 24px; color: #071827;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E2E8F0; overflow: hidden;">
    <div style="background-color: #071827; padding: 20px 24px; border-bottom: 3px solid ${intentColor};">
      <h1 style="color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Great Falls Heating and Air</h1>
      <p style="color: #28B9F2; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Web Lead Notification</p>
    </div>

    <div style="padding: 24px;">
      <div style="display: inline-block; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; text-transform: uppercase; background-color: ${
        isEmergency ? "#FEE2E2" : "#E0F2FE"
      }; color: ${isEmergency ? "#B42318" : "#087BEA"}; margin-bottom: 20px;">
        Intent: ${data.intent}
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #F1F5F9;">
          <td style="padding: 10px 0; color: #64748B; width: 35%;">Customer Name:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #071827;">${data.fullName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #F1F5F9;">
          <td style="padding: 10px 0; color: #64748B;">Phone:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #071827;"><a href="tel:${telephone}" style="color: #087BEA; text-decoration: none;">${data.phone}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #F1F5F9;">
          <td style="padding: 10px 0; color: #64748B;">Email:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #071827;"><a href="mailto:${data.email}" style="color: #087BEA; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #F1F5F9;">
          <td style="padding: 10px 0; color: #64748B;">Service Location:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #071827;">${data.location}</td>
        </tr>
        <tr style="border-bottom: 1px solid #F1F5F9;">
          <td style="padding: 10px 0; color: #64748B;">Preferred Contact:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #071827; text-transform: capitalize;">${data.preferredContact}</td>
        </tr>
        <tr style="border-bottom: 1px solid #F1F5F9;">
          <td style="padding: 10px 0; color: #64748B;">Originating Page:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #071827;">${data.sourceRoute || "/"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748B;">Timestamp:</td>
          <td style="padding: 10px 0; color: #64748B;">${timestamp}</td>
        </tr>
      </table>

      <div style="background-color: #F8FAFC; border-left: 4px solid #087BEA; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px;">Message / Problem Details:</h3>
        <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #0F172A; white-space: pre-wrap;">${data.message}</p>
      </div>

      <p style="font-size: 12px; color: #94A3B8; margin: 0;">
        This email was securely delivered from the Great Falls Heating and Air website lead capture form.
      </p>
    </div>
  </div>
</body>
</html>`;
}
