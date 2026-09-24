import { RebateProgram } from "@/content/rebates";
export function RebateTable({ programs }: { programs: RebateProgram[] }) {
  return (
    <div>
      {programs.map((p) => (
        <article className="rebate-row" key={p.id} id={p.id}>
          <div className="rebate-heading">
            <div>
              <span className="rebate-provider">
                {p.provider} · {p.statusLabel}
              </span>
              <h3>{p.name}</h3>
            </div>
            <div className="rebate-amount">{p.incentiveAmount}</div>
          </div>
          <small>{p.effectiveDates}</small>
          <p>{p.eligibleEquipment}</p>
          <details>
            <summary className="text-link">Eligibility & requirements</summary>
            <ul>
              {p.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </details>
          <small>Last reviewed: {p.lastReviewed}</small>
          <a
            className="text-link"
            href={p.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.sourceLabel} ↗
          </a>
        </article>
      ))}
    </div>
  );
}
