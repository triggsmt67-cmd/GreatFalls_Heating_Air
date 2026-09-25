import Link from "next/link";
import { siteConfig } from "@/content/site";
import { LicenseMark } from "@/components/ui/TrustMarks";
export function FinalDarkCTA({
  title = "Let’s talk about your home.",
  subtitle = "Heating trouble, cooling questions, or a replacement on your mind?",
}: {
  title?: string;
  subtitle?: string;
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
          <Link
            className="button button-yellow"
            href="/contact?intent=estimate"
          >
            Request an estimate ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
