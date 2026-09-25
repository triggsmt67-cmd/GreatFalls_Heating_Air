import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
export const metadata = buildMetadata({
  title: "Cold-Climate Heat Pumps in Great Falls, Montana",
  description:
    "Learn about cold-climate heat-pump ratings, backup heat, sizing, and utility incentives for Great Falls homes.",
  canonicalPath: "/services/heat-pumps/cold-climate",
});
export default function Page() {
  return (
    <>
      <div className="wrap interior">
        <Breadcrumbs
          items={[
            { name: "Heating", url: "/services/heating" },
            {
              name: "Cold-climate heat pumps",
              url: "/services/heat-pumps/cold-climate",
            },
          ]}
        />
        <div className="page-heading">
          <ServiceIcon name="heat-pump" size={48} />
          <p className="eyebrow">Homeowner guide / Cold-climate heat pumps</p>
          <h1>
            Can a heat pump work
            <br />
            in a Montana winter?
          </h1>
          <p>
            Some modern cold-climate models operate around −15°F or −20°F. The
            right choice depends on the model, your home, and a plan for backup
            heat.
          </p>
        </div>
        <div className="interior-grid">
          <div className="article-copy">
            <h2>Start with the low-temperature ratings.</h2>
            <p>
              A heat pump moves heat rather than generating it through
              combustion. Variable-speed compressors can adjust output as
              conditions change, but both capacity and efficiency vary with
              outdoor temperature.
            </p>
            <p>
              Look beyond the lowest advertised operating temperature. Ask how
              much heat the exact model delivers at your local design
              temperature and how that compares with your home’s heat loss.
            </p>
            <h2>The home matters as much as the equipment.</h2>
            <p>
              Insulation, air leakage, duct condition, and room layout affect
              performance. A load calculation can inform sizing; an equipment
              recommendation should explain the assumptions behind it.
            </p>
          </div>
          <PhotoPlaceholder
            slot="10"
            subject="Cold-climate heat-pump installation detail"
            dimensions="1600 × 1200"
            crop="Show unit clearance, base, drainage, and surrounding grade."
            tone="blue"
          />
        </div>
        <div className="article-copy">
          <h2>Have a plan for the coldest days.</h2>
          <p>
            A dual-fuel system pairs a heat pump with a furnace. Other
            installations use electric supplemental heat. The appropriate
            balance depends on equipment capacity, local energy costs, controls,
            and the home.
          </p>
          <p>
            Defrost cycles temporarily clear frost from the outdoor coil.
            Placement, snow clearance, drainage, and manufacturer installation
            instructions all matter.
          </p>
        </div>
        <div
          className="comparison-scroll"
          tabIndex={0}
          role="region"
          aria-label="Heating system comparison, scroll horizontally"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Consideration</th>
                <th scope="col">Gas furnace</th>
                <th scope="col">Cold-climate heat pump</th>
                <th scope="col">Dual fuel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Heating source</th>
                <td>Combustion</td>
                <td>Heat moved from outdoor air</td>
                <td>Heat pump plus furnace</td>
              </tr>
              <tr>
                <th scope="row">Cooling</th>
                <td>Separate AC needed</td>
                <td>Included</td>
                <td>Provided by the heat pump</td>
              </tr>
              <tr>
                <th scope="row">Extreme cold</th>
                <td>Capacity must match the home</td>
                <td>Check rated output and backup needs</td>
                <td>Controls switch to furnace as designed</td>
              </tr>
              <tr>
                <th scope="row">Running costs</th>
                <td>Depend on fuel and efficiency</td>
                <td>Depend on electricity, temperature, and efficiency</td>
                <td>Depend on both fuels and controls</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="resource-notice">
          <h2>Check incentives before choosing equipment.</h2>
          <p>
            Utility eligibility, equipment ratings, and application requirements
            vary.
          </p>
          <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">
            Read the 2026 Montana rebate guide →
          </Link>
        </div>
        <div className="related-links">
          <Link className="text-link" href="/services/heating">
            Heating services →
          </Link>
          <Link className="text-link" href="/contact?intent=estimate">
            Discuss a heat-pump estimate →
          </Link>
        </div>
      </div>
      <FinalDarkCTA />
    </>
  );
}
