import { RequestServiceLink } from "@/components/forms/ServiceRequestDrawer";
import { siteConfig } from "@/content/site";
import { LicenseMark } from "@/components/ui/TrustMarks";
export function FinalDarkCTA({
  title = "Let’s talk about your home.",
  subtitle = "Heating trouble, cooling questions, or a replacement on your mind?",
  requestHref = "/contact?intent=estimate",
  requestLabel = "Request an estimate ↗",
}: {
  title?: string;
  subtitle?: string;
  requestHref?: string;
  requestLabel?: string;
}) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <div>
          <p className="eyebrow">Your next step</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <LicenseMark />
        </div>
        <div className="cta-actions">
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="button button-orange"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <small className="cta-next-step">Tell us what’s happening and ask about availability.</small>
          <RequestServiceLink
            className="button button-yellow"
            intent={requestLabel.startsWith("Request service") ? "general" :
              (["emergency", "maintenance", "general", "estimate"] as const).find(
                intent => requestHref.includes(`intent=${intent}`),
              ) ?? "general"}
          >
            {requestLabel}
          </RequestServiceLink>
          <small className="cta-next-step">Tell us what you need. We’ll be in touch to talk it through.</small>
        </div>
      </div>
    </section>
  );
}
