import styles from "./maintenance-diagram.module.css";

const areas = [
  { label: "Outside / Heat release", title: "Outdoor condenser coil", exposure: "Cottonwood, dust & nearby vegetation", check: "Check buildup, clearances, and coil-specific cleaning needs.", drawing: "M17 21h62v54H17zM22 17h52M25 75v5m46-5v5M25 28v39m8-39v39m8-39v39m8-39v39m8-39v39m8-39v39m8-39v39M10 35H3m7 12H1m9 12H3m83-24h7m-7 12h9m-9 12h7" },
  { label: "Inside / Air circulation", title: "Filter & blower airflow", exposure: "Indoor particles & filter resistance", check: "Check filter fit, condition, compatibility, and airflow paths.", drawing: "M29 13h38v70H29zM35 20l9 9-9 9 9 9-9 9 9 9-9 11m17-56 9 9-9 9 9 9-9 9 9 9-9 11M3 35h18m-5-5 5 5-5 5M3 59h18m-5-5 5 5-5 5m54-24h18m-5-5 5 5-5 5M75 59h18m-5-5 5 5-5 5" },
  { label: "Inside / Water removal", title: "Condensate drainage", exposure: "Moisture collected during cooling", check: "Check accessible drains and any fitted pump or overflow controls.", drawing: "M18 16h60v20H18zM25 23h46M25 29h46M42 36v22a12 12 0 0 0 12 12h21m-21-34v19a3 3 0 0 0 3 3h18M81 71s-7 9-7 13a7 7 0 0 0 14 0c0-4-7-13-7-13z" },
];

export function MaintenanceDiagram() {
  return <figure className={styles.diagram} aria-labelledby="maintenance-diagram-heading">
    <figcaption><p className="eyebrow">A quick system map</p><h2 id="maintenance-diagram-heading">Three places maintenance looks.</h2><p>Outdoor debris, indoor filtration, and cooling water involve different parts of the system.</p></figcaption>
    <div className={styles.areas}>{areas.map(({ label, title, exposure, check, drawing }) => <div className={styles.area} key={title}>
      <p className={styles.label}>{label}</p>
      <svg viewBox="0 0 96 96" width="96" height="96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={drawing} /></svg>
      <h3>{title}</h3><p className={styles.exposure}>{exposure}</p><div className={styles.connector} aria-hidden="true">↓</div><p>{check}</p>
    </div>)}</div>
    <p className={styles.note}>Simplified system map. Equipment layout and the appropriate service method vary by model.</p>
  </figure>;
}
