import Link from "next/link";
import { getFAQSchema } from "@/lib/schema/jsonLd";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { rebatePrograms, rebateGuideMetadata, rebateFaqs } from "@/content/rebates";
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(rebateFaqs)).replace(/</g, "\\u003c") }} />
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
            <a href="#rebate-faq-heading">Rebate questions ↓</a>
            <Link href="/services/heat-pumps/cold-climate">
              Heat-pump guide ↗
            </Link>
          </nav>
          <div className="resource-content">
            <section aria-labelledby="rebate-perspective-heading" className="article-copy">
              <p className="eyebrow">Our view / Incentive planning</p>
              <h2 id="rebate-perspective-heading">Look at the full price before counting a rebate.</h2>
              <p>A suitable system should make sense for your home and budget. Keep the full installed price visible, then confirm the incentive for your utility account, exact equipment, and project. A bigger advertised rebate doesn’t tell you which system fits your home.</p>
              <p>Check who supplies your electricity and gas separately. A Great Falls address or a former Energy West gas account does not establish eligibility for a NorthWestern electric program.</p>
              <ol>
                <li>Identify the utility account and the applicable application.</li>
                <li>Confirm equipment, approval timing, and required records before purchasing.</li>
                <li>Compare the installed cost and operating assumptions with the incentive shown separately.</li>
              </ol>
            </section>
            <aside className="resource-notice" aria-labelledby="rebate-notice-heading">
              <h2 id="rebate-notice-heading">Rebates can change before this page is updated.</h2>
              <p>{rebateGuideMetadata.disclaimer}</p>
            </aside>
            <section id="utility-programs">
              <h2>Published utility incentives — confirm availability</h2>
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
      <section className="faq-section section" aria-labelledby="rebate-faq-heading"><div className="wrap faq-grid"><div><p className="eyebrow">Before counting an incentive</p><h2 id="rebate-faq-heading">Frequently asked questions about Montana HVAC rebates.</h2><p>Checked October 23, 2026. Published programs do not confirm remaining funding or approval for your project.</p></div><div>{rebateFaqs.map(({ question, answer, sources }) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>{sources?.length ? <p className="faq-sources">Sources: {sources.map((source, index) => <span key={source.url}>{index > 0 ? "; " : ""}<a className="text-link" href={source.url}>{source.label}</a></span>)}</p> : null}</details>)}</div></div></section>
      <FinalDarkCTA />
    </>
  );
}
