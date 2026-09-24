import Link from "next/link";
import { ServiceItem } from "@/content/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FinalDarkCTA } from "./FinalDarkCTA";
import { getServiceSchema } from "@/lib/schema/jsonLd";
export function ServiceHub({ service }: { service: ServiceItem }) {
  const heating = service.category === "heating";
  const schema = getServiceSchema(service);
  return (
    <>
      <div className="wrap interior">
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        <Breadcrumbs items={[{ name: service.title, url: service.route }]} />
        <div className="page-heading">
          <p className="eyebrow">
            {heating ? "Winter heating" : "Summer cooling"} / Great Falls
          </p>
          <h1>{service.headline}</h1>
          <p>{service.summary}</p>
          <div className="hero-actions">
            <Link
              className="button button-yellow"
              href="/contact?intent=estimate"
            >
              Request service or an estimate ↗
            </Link>
            <Link
              className="text-link"
              href={
                heating
                  ? "/services/heating/emergency-furnace-repair"
                  : "/services/cooling/ac-repair"
              }
            >
              {heating ? "Furnace repair & safety" : "AC repair & upgrades"} →
            </Link>
          </div>
        </div>
        <div className="interior-grid">
          <div className="article-copy">
            <h2>Start with what you’ve noticed.</h2>
            <p>
              A useful conversation starts with the symptoms, when they began,
              and the type of equipment in your home.
            </p>
            <ul>
              {service.keyPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h2>Questions worth asking</h2>
            <p>
              Before scheduling, confirm availability, diagnostic fees, and the
              scope of the visit. Before approving work, ask for the findings,
              proposed cost, and applicable warranty terms.
            </p>
          </div>
          <div className="service-hub-media">
            <PhotoPlaceholder
              slot={heating ? "06" : "08"}
              subject={
                heating
                  ? "Technician inspecting residential heating equipment"
                  : "Technician servicing residential cooling equipment"
              }
              dimensions="1600 × 1200"
              crop={
                heating
                  ? "Landscape crop with technician, tools, and furnace controls visible."
                  : "Landscape crop with equipment and technician both visible."
              }
              tone="blue"
            />
            {heating && (
              <div className="safety-panel">
                <h2>Loss of heat in cold weather?</h2>
                <p>
                  Call to discuss service availability. If you smell gas or a
                  carbon monoxide alarm sounds, leave the home and contact
                  emergency services from a safe place.
                </p>
                <Link
                  className="text-link"
                  href="/services/heating/emergency-furnace-repair"
                >
                  Read the safety guide →
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="service-symptoms">
          {service.symptoms?.map((s) => (
            <article key={s.symptom}>
              <h3>{s.symptom}</h3>
              <p>{s.whatItMeans}</p>
            </article>
          ))}
        </div>
        <div className="related-links">
          <Link className="text-link" href="/services/heat-pumps/cold-climate">
            Considering a heat pump? →
          </Link>
          <Link className="text-link" href="/rebates/2026-montana-hvac-rebates">
            Review utility incentives →
          </Link>
        </div>
      </div>
      <FinalDarkCTA />
    </>
  );
}
