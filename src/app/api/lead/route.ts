import { NextRequest, NextResponse } from "next/server";
import { validateLeadForm } from "@/lib/validation/leadFormSchema";
import { sendLeadNotificationEmail } from "@/lib/email/adapter";
import { leadRateLimiter } from "@/lib/validation/rateLimit";
import { siteConfig } from "@/content/site";
export async function POST(req: NextRequest) {
  const fallback = `Your request could not be delivered. Please call ${siteConfig.phoneDisplay}.`;
  try {
    const key =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limit = await leadRateLimiter.check(key);
    if (limit === "unavailable")
      return NextResponse.json(
        {
          success: false,
          error: `Online requests are currently unavailable. Please call ${siteConfig.phoneDisplay}.`,
        },
        { status: 503 },
      );
    if (limit === "limited")
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Wait ten minutes or call ${siteConfig.phoneDisplay}.`,
        },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    if (Number(req.headers.get("content-length")) > 16_384)
      return NextResponse.json(
        { success: false, error: "Request too large." },
        { status: 413 },
      );
    let body: Record<string, unknown>;
    try {
      const raw = await req.text();
      if (raw.length > 16_384)
        return NextResponse.json(
          { success: false, error: "Request too large." },
          { status: 413 },
        );
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request format." },
        { status: 400 },
      );
    }
    const validation = validateLeadForm(body);
    if (!validation.isValid || !validation.sanitizedData)
      return NextResponse.json(
        {
          success: false,
          error: "Please check the fields below.",
          fieldErrors: validation.errors,
        },
        { status: 422 },
      );
    const result = await sendLeadNotificationEmail(validation.sanitizedData);
    if (!result.success)
      return NextResponse.json(
        { success: false, error: result.error || fallback },
        { status: 502 },
      );
    return NextResponse.json({
      success: true,
      redirectUrl: "/thank-you",
      simulated: result.simulated === true,
      messageId: result.messageId,
    });
  } catch {
    console.error("[LEAD_API] Request failed");
    return NextResponse.json(
      { success: false, error: fallback },
      { status: 500 },
    );
  }
}
