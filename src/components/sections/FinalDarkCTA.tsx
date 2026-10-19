import Link from "next/link";
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
          <small className="cta-next-step">Call to discuss your needs and current availability.</small>
          <Link
            className="button button-yellow"
            href={requestHref}
          >
            {requestLabel}
          </Link>
          <small className="cta-next-step">Send your request. We’ll contact you to discuss the next steps.</small>
        </div>
      </div>
    </section>
  );
}
