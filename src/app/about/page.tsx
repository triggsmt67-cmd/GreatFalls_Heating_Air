import Link from "next/link";
import { TrustMarks } from "@/components/ui/TrustMarks";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { verification, siteConfig } from "@/content/site";
export const metadata = buildMetadata({
  title: "About Great Falls Heating and Air LLC",
  description:
    "Company information and questions to ask about contractor credentials, estimates, and service in Great Falls, Montana.",
  canonicalPath: "/about",
});
export default function Page() {
  return (
    <>
      <div className="wrap interior">
        <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
        <div className="page-heading">
          <p className="eyebrow">Great Falls Heating & Air LLC</p>
          <h1>
            A practical conversation
            <br />
            about your home.
          </h1>
          <p>
            Heating and cooling decisions should start with clear information
            about the equipment, the work, and the people you hire.
          </p>
        </div>
        <TrustMarks />
        <div className="interior-grid">
          <div className="article-copy">
            <h2>Rooted in the needs of a home.</h2>
            <p>
              Homes around Great Falls face changing seasons, varying
              insulation, and a wide range of heating systems. Those differences
              belong in the conversation when considering repair or replacement.
            </p>
            {verification.companyHistory && <p>{siteConfig.companyHistory}</p>}
            <h2>Know what you’re approving.</h2>
            <p>
              Ask what a diagnostic visit includes, how proposed work will be
              explained, and which warranty terms apply. Confirm costs and
              availability directly before scheduling.
            </p>
            <Link className="text-link" href="/contact">
              Start a conversation →
            </Link>
          </div>
          <div className="article-copy">
            <h2>Questions to ask any contractor</h2>
            <ul>
              <li>
                Which registrations, licenses, and insurance apply to this work?
              </li>
              <li>
                Who will perform the work, and what qualifications are required?
              </li>
              <li>
                Will you receive a written scope and price before approving
                repairs?
              </li>
              <li>Which labor and equipment warranty terms are included?</li>
            </ul>
            {process.env.NODE_ENV !== "production" && (
              <div className="resource-notice">
                <strong>Internal verification pending</strong>
                <p>
                  Company history, EPA credentials,
                  insurance, hours, and warranty details require client
                  confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <FinalDarkCTA />
    </>
  );
}
