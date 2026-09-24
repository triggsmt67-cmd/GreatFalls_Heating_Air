import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
export const metadata = buildMetadata({
  title: "AC Repair & Replacement in Great Falls, MT",
  description:
    "Understand air conditioning symptoms and the factors behind repair or replacement decisions for your Great Falls home.",
  canonicalPath: "/services/cooling/ac-repair",
});
export default function Page() {
  return (
    <>
      <div className="wrap interior">
        <Breadcrumbs
          items={[
            { name: "Cooling", url: "/services/cooling" },
            {
              name: "AC repair & upgrades",
              url: "/services/cooling/ac-repair",
            },
          ]}
        />
        <div className="service-page-hero">
          <div className="page-heading">
            <p className="eyebrow">Air conditioning / Repair & replacement</p>
            <h1>
              Repair it. Replace it.
              <br />
              Understand the difference.
            </h1>
            <p>
              Equipment age is only one part of the decision. Consider the
              fault, repair cost, condition, and comfort needs together.
            </p>
            <Link
              className="button button-yellow"
              href="/contact?intent=estimate"
            >
              Request a diagnostic or estimate ↗
            </Link>
          </div>
          <PhotoPlaceholder
            slot="09"
            subject="Residential AC diagnostic or condenser service"
            dimensions="1600 × 1200"
            crop="Landscape crop. Show real working context with clean space around the equipment."
            tone="blue"
          />
        </div>
        <div className="interior-grid">
          <div className="article-copy">
            <h2>When a repair may make sense</h2>
            <p>
              An isolated component problem in otherwise serviceable equipment
              may justify a repair. Ask how the proposed work addresses the
              symptoms and whether other significant issues were found.
            </p>
            <h2>When replacement is worth discussing</h2>
            <p>
              Repeated failures, major component damage, uneven cooling, or a
              system near the end of its useful life can change the calculation.
              Compare the full installed cost, warranty terms, and compatibility
              with existing ductwork.
            </p>
          </div>
          <div className="article-copy">
            <h2>Before your service visit</h2>
            <ul>
              <li>Note whether air is warm, weak, or uneven between rooms.</li>
              <li>Check thermostat settings and an accessible filter.</li>
              <li>If you see ice, switch cooling off and seek advice.</li>
              <li>If a breaker trips repeatedly, leave the system off.</li>
            </ul>
            <p>
              Electrical and refrigerant work belongs with a qualified
              professional. Do not remove panels or attempt a refrigerant
              recharge.
            </p>
          </div>
        </div>
        <div className="related-links">
          <Link className="text-link" href="/services/cooling">
            Cooling services →
          </Link>
          <Link className="text-link" href="/services/heat-pumps/cold-climate">
            Compare heat-pump options →
          </Link>
        </div>
      </div>
      <FinalDarkCTA />
    </>
  );
}
