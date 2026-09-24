import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig, verification } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { FormIntent } from "@/lib/validation/leadFormSchema";
export const metadata = buildMetadata({
  title: "Contact & Request Service",
  description:
    "Contact Great Falls Heating and Air LLC about heating, cooling, maintenance, or an equipment estimate.",
  canonicalPath: "/contact",
});
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent = (
    ["emergency", "estimate", "maintenance", "general"].includes(
      params.intent || "",
    )
      ? params.intent
      : "estimate"
  ) as FormIntent;
  return (
    <div className="wrap interior">
      <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />
      <div className="page-heading">
        <p className="eyebrow">Contact / Great Falls, Montana</p>
        <h1>Let’s start with your home.</h1>
        <p>
          Tell us what’s happening or what you’re considering. For urgent
          heating or cooling needs, please call.
        </p>
      </div>
      <div className="contact-grid">
        <aside className="contact-info">
          <div>
            <h2>Prefer to talk?</h2>
            <a className="contact-phone" href={`tel:${siteConfig.phoneE164}`}>
              {siteConfig.phoneDisplay}
            </a>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>
              {verification.hours
                ? siteConfig.hours
                : "Call to confirm current service availability."}
            </p>
          </div>
          <div>
            <h2>Great Falls & nearby communities</h2>
            <p>
              Contact us to confirm service at your address. Military families
              in off-base households are welcome to inquire; no base affiliation
              or access is implied.
            </p>
            <div className="form-alert">
              <strong>Gas odor or CO alarm?</strong>
              <p>
                Leave the building and contact emergency services from a safe
                location. Do not wait for a form response.
              </p>
            </div>
          </div>
        </aside>
        <LeadForm initialIntent={intent} sourceRoute="/contact" />
      </div>
    </div>
  );
}
