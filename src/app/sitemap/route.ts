import { NextResponse } from "next/server";

// Preserve existing sitemap links without a separate presentation page.
export function GET(request: Request) {
  return NextResponse.redirect(new URL("/sitemap.xml", request.url), 308);
}
