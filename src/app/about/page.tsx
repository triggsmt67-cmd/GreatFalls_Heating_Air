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
            You should know why we recommend the work and what it should improve. That’s where we start.
          </p>
        </div>
        <TrustMarks />
        <div className="interior-grid">
          <div className="article-copy">
            <h2>The house comes first.</h2>
            <p>
              Tell us about your equipment, the rooms you use, and what’s changed. Is one bedroom always cold? Does the furnace keep shutting off? Are you planning a replacement? Those are different problems. We start by understanding yours.
            </p>
            {/* Add the owner’s name, approved introduction, background, and reasons for this approach only after direct confirmation. */}
            {verification.companyHistory && <p>{siteConfig.companyHistory}</p>}
            <h2>Know what you’re approving.</h2>
            <p>
              Ask what we found, what needs attention now, and what can wait. If something needs more testing, you should know that too. Before approving work, make sure you understand what’s included, the price, and the warranty that applies.
            </p>
            <Link className="text-link" href="/contact">
              Start a conversation →
            </Link>
          </div>
          <div className="article-copy">
            <h2>What are you deciding?</h2>
            <ul>
              <li>
                Repair: understand the fault and whether the proposed work can
                restore safe, practical service.
              </li>
              <li>
                Replacement: look at the ductwork, venting, controls, and installation work along with the new equipment.
              </li>
              <li>
                Maintenance: know what was checked, what needs attention, and what to do next.
              </li>
              <li>Heat pumps: compare the home’s demand, actual fuel costs, and cold-weather plan.</li>
            </ul>
            <p>Discuss the approach for your project in our <Link className="text-link" href="/services/heating">heating</Link>, <Link className="text-link" href="/services/cooling">cooling</Link>, and <Link className="text-link" href="/services/heat-pumps/cold-climate">heat-pump guides</Link>.</p>
            {process.env.NODE_ENV !== "production" && (
              <div className="resource-notice">
                <strong>Internal verification pending</strong>
                <p>
                  Company history, EPA credentials,
                  insurance and warranty details require client
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
