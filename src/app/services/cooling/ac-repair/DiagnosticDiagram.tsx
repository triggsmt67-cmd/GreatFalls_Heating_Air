import styles from "./diagnostic-diagram.module.css";

const areas = [
  ["Thermostat", "Is the system calling for cooling?"],
  ["Filter & airflow", "Can air move through the indoor system?"],
  ["Indoor coil & drainage", "Is there icing or visible water?"],
  ["Outdoor unit", "Are its components operating correctly?"],
  ["Refrigerant circuit", "What do professional measurements establish?"],
];

export function DiagnosticDiagram() {
  return (
    <section className={styles.section} aria-labelledby="ac-diagram-heading">
      <p className="eyebrow">Understand the diagnosis</p>
      <h2 id="ac-diagram-heading">What we check when your AC blows warm air.</h2>
      <figure className={styles.figure}>
        <div className={styles.visual}>
          <svg viewBox="0 0 1120 360" role="img" aria-labelledby="ac-layout-title ac-layout-description">
            <title id="ac-layout-title">Five areas of a central AC assessment</title>
            <desc id="ac-layout-description">A simplified house contains a thermostat, filter, and indoor coil with drainage. Refrigerant lines connect the indoor coil to an outdoor unit. Numbered markers match the five explanations below. Equipment arrangements vary.</desc>
            <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
              <path className={styles.house} d="M50 130 290 24l240 106M84 116v204h412V116" />
              <path className={styles.house} d="M84 210h412M180 210v110M390 77v133" />
              <rect className={styles.equipment} x="160" y="118" width="76" height="57" rx="6" />
              <path d="M175 136h46m-46 12h27" />
              <path className={styles.air} d="M202 280h70m88 0h35m83-54v-42h-49" />
              <rect className={styles.equipment} x="280" y="242" width="42" height="76" rx="3" />
              <path d="m287 251 27 10-27 10 27 10-27 10 27 10-27 9" />
              <rect className={styles.equipment} x="395" y="226" width="82" height="92" rx="4" />
              <path d="m405 292 31-50 31 50m-52-16h42m-46 9h50" />
              <path className={styles.drain} d="M436 318v17h57v12" />
              <path className={styles.coolLine} d="M477 255h115v-52h217" />
              <path className={styles.warmLine} d="M477 286h145v-52h187" />
              <rect className={styles.equipment} x="809" y="135" width="220" height="183" rx="8" />
              <circle cx="891" cy="225" r="57" />
              <circle cx="891" cy="225" r="41" />
              <circle cx="891" cy="225" r="8" />
              <path d="M891 169v48m0 16v48m-56-56h48m16 0h48m-96-40 34 34m12 12 34 34m0-80-34 34m-12 12-34 34m111-69h43m-43 16h43m-43 16h43m-43 16h43m-43 16h43m-174 60v10m160-10v10" />
              <path className={styles.ground} d="M64 328h344m105 0h540" />
            </g>
            <g className={styles.marker}>
              {[[254, 112], [262, 228], [489, 216], [1038, 122], [691, 184]].map(([cx, cy], index) => (
                <g key={index} transform={`translate(${cx} ${cy})`}>
                  <circle r="23" />
                  <text textAnchor="middle" dy=".35em">{index + 1}</text>
                </g>
              ))}
            </g>
          </svg>
          <span className={styles.layoutNote}>Simplified central AC layout · Equipment arrangements vary</span>
        </div>
        <ol className={styles.labels}>
          {areas.map(([name, question], index) => (
            <li key={name}>
              <span className={styles.number} aria-hidden="true">{index + 1}</span>
              <div><h3>{name}</h3><p>{question}</p></div>
            </li>
          ))}
        </ol>
        <figcaption className={styles.caption}>
          <strong>The same symptom can have several causes.</strong> Testing connects the repair recommendation to the actual problem. This map explains areas a technician may assess; it is not a sequence of homeowner repair steps.
        </figcaption>
      </figure>
    </section>
  );
}
