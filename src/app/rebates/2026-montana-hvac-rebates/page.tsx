import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { rebatePrograms, rebateGuideMetadata } from "@/content/rebates";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RebateTable } from "@/components/ui/RebateTable";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
export const metadata = buildMetadata({
  title: rebateGuideMetadata.metaTitle,
  description: rebateGuideMetadata.metaDescription,
  canonicalPath: "/rebates/2026-montana-hvac-rebates",
});
export default function Page() {
  return (
    <>
      <div className="wrap interior">
        <Breadcrumbs
          items={[
            {
              name: "2026 Montana rebates",
              url: "/rebates/2026-montana-hvac-rebates",
            },
          ]}
        />
        <div className="page-heading">
          <p className="eyebrow">
            Homeowner resource / Reviewed {rebateGuideMetadata.lastReviewedDate}
          </p>
          <h1>
            A clearer picture
            <br />
            of Montana HVAC rebates.
          </h1>
          <p>
            Utility incentives, expired credits, and pending programs. Start
            with the details, then verify your eligibility before you buy.
          </p>
        </div>
        <div className="resource-layout">
          <nav className="resource-aside" aria-label="On this page">
            <a href="#utility-programs">Utility incentives ↓</a>
            <a href="#status-updates">Expired & pending programs ↓</a>
            <Link href="/services/heat-pumps/cold-climate">
              Heat-pump guide ↗
            </Link>
          </nav>
          <div className="resource-content">
            <div className="resource-notice">
              {rebateGuideMetadata.disclaimer}
            </div>
            <section id="utility-programs">
              <h2>Current utility incentives</h2>
              <RebateTable
                programs={rebatePrograms.filter((p) => p.status === "active")}
              />
            </section>
            <section id="status-updates">
              <h2>Expired & pending programs</h2>
              <RebateTable
                programs={rebatePrograms.filter((p) => p.status !== "active")}
              />
            </section>
            <div className="related-links">
              <Link
                className="text-link"
                href="/services/heat-pumps/cold-climate"
              >
                Understand cold-climate heat pumps →
              </Link>
              <Link className="text-link" href="/contact?intent=estimate">
                Discuss an equipment estimate →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FinalDarkCTA />
    </>
  );
}
