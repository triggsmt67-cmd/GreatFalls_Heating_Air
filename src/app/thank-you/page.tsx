import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";
export const metadata = buildMetadata({
  title: "Thank You | Request Confirmation",
  description: "Service inquiry confirmation and next steps.",
  canonicalPath: "/thank-you",
  noindex: true,
});
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ preview?: string }>;
}) {
  const params = await searchParams;
  const preview =
    process.env.NODE_ENV !== "production" && params.preview === "1";
  return (
    <div className="utility-page">
      <p className="eyebrow">{preview ? "Development preview" : "Thank you"}</p>
      <h1>
        {preview ? "Test request completed." : "Your next step starts here."}
      </h1>
      <p>
        {preview
          ? "This was a simulated submission. No email was sent."
          : "If you arrived here after a successful submission, your request was accepted by our email provider. Please call if you need to confirm receipt or discuss availability."}
      </p>
      <div className="form-alert">
        <strong>Need urgent heating or cooling help?</strong>
        <p>
          Forms are not continuously monitored. Please call instead of waiting
          for a reply.
        </p>
        <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>
          {siteConfig.phoneDisplay} →
        </a>
      </div>
      <div className="hero-actions">
        <Link className="button button-yellow" href="/">
          Back to home ↗
        </Link>
        <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">
          Explore the rebate guide →
        </Link>
      </div>
    </div>
  );
}
