import Link from "next/link";
import { TrustMarks } from "@/components/ui/TrustMarks";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import { verification, siteConfig } from "@/content/site";
export const metadata = buildMetadata({
  title: "About Great Falls Heating and Air LLC",
  description:
    "Great Falls Heating and Air’s approach to home heating and cooling: understand the house, explain findings, and make the proposed work clear.",
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
            Understand the house.
            <br />
            Explain the recommendation.
          </h1>
          <p>
            Our view is simple: a homeowner should understand why work is being
            recommended and what it is intended to improve.
          </p>
        </div>
        <TrustMarks />
        <div className="interior-grid">
          <div className="article-copy">
            <h2>The house comes first.</h2>
            <p>
              Great Falls Heating and Air starts the conversation with your
              equipment, the rooms you use, and what has changed. A cold bedroom,
              a recurring shutdown, and a planned replacement call for different
              questions. The recommendation should follow the findings.
            </p>
            {/* Add the owner’s name, approved introduction, background, and reasons for this approach only after direct confirmation. */}
            {verification.companyHistory && <p>{siteConfig.companyHistory}</p>}
            <h2>Know what you’re approving.</h2>
            <p>
              A useful explanation connects the finding to the proposed work.
              Ask what is needed now, what is optional, and which concern needs
              further diagnosis. Confirm the scope, price, and applicable warranty
              before approving work.
            </p>
            <Link className="text-link" href="/contact">
              Start a conversation →
            </Link>
          </div>
          <div className="article-copy">
            <h2>What that means for each decision.</h2>
            <ul>
              <li>
                Repair: understand the fault and whether the proposed work can
                restore safe, practical service.
              </li>
              <li>
                Replacement: compare the surrounding ductwork, venting, controls,
                and installation scope alongside the equipment.
              </li>
              <li>
                Maintenance: leave with understandable findings and next steps.
              </li>
              <li>Heat pumps: compare the home’s demand, actual fuel costs, and cold-weather plan.</li>
            </ul>
            <p>Discuss the approach for your project in our <Link className="text-link" href="/services/heating">heating</Link>, <Link className="text-link" href="/services/cooling">cooling</Link>, and <Link className="text-link" href="/services/heat-pumps/cold-climate">heat-pump guides</Link>.</p>
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
