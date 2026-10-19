import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
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
          <ServiceIcon name="efficiency" size={48} />
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
            <section aria-labelledby="rebate-perspective-heading" className="article-copy">
              <p className="eyebrow">Our view / Incentive planning</p>
              <h2 id="rebate-perspective-heading">Compare the project before subtracting the rebate.</h2>
              <p>A suitable system should make sense for your home and budget. Keep the full installed price visible, then confirm the incentive for your utility account, exact equipment, and project. A larger advertised rebate does not establish which option is the better fit.</p>
              <p>Check who supplies your electricity and gas separately. A Great Falls address or a former Energy West gas account does not establish eligibility for a NorthWestern electric program.</p>
              <ol>
                <li>Identify the utility account and the applicable application.</li>
                <li>Confirm equipment, approval timing, and required records before purchasing.</li>
                <li>Compare the installed cost and operating assumptions with the incentive shown separately.</li>
              </ol>
            </section>
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
