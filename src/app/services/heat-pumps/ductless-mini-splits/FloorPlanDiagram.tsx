import styles from "./floor-plan.module.css";

export function FloorPlanDiagram() {
  return <figure className={styles.figure} aria-labelledby="ductless-floor-plan-heading" aria-describedby="ductless-floor-plan-note">
    <figcaption><p className="eyebrow">Illustrative layout / Coverage starts with doors</p><h2 id="ductless-floor-plan-heading">An open living area is one zone. Closed bedrooms need a plan.</h2><p>A unit in the living area does not establish that adjoining bedrooms will reach their setpoints.</p></figcaption>
    <svg className={styles.desktopPlan} viewBox="0 0 900 440" aria-hidden="true" focusable="false">
      <rect className={styles.living} x="30" y="30" width="480" height="360" />
      <rect className={styles.hall} x="510" y="30" width="120" height="360" />
      <rect className={styles.bedroom} x="630" y="30" width="240" height="180" /><rect className={styles.bedroom} x="630" y="210" width="240" height="180" />
      <path className={styles.wall} d="M30 30h840v360H30zM510 30v220m0 60v80M630 30v70m0 60v120m0 60v50m0-180h240" />
      <path className={styles.door} d="M630 100v60m0 120v60" />
      <rect className={styles.unit} x="95" y="65" width="120" height="30" rx="5" /><path className={styles.air} d="M120 112q-15 45 5 75m29-75q-15 45 5 75m29-75q-15 45 5 75" />
      <text x="245" y="88">Indoor unit</text><text x="85" y="255" className={styles.roomLabel}>Living / dining</text><text x="85" y="290">Open living zone</text>
      <text x="570" y="200" textAnchor="middle" transform="rotate(-90 570 200)">Hallway</text>
      <text x="670" y="100" className={styles.roomLabel}>Bedroom 1</text><text x="670" y="135">Door closed</text><text x="670" y="280" className={styles.roomLabel}>Bedroom 2</text><text x="670" y="315">Door closed</text>
    </svg>
    <svg className={styles.mobilePlan} viewBox="0 0 320 440" aria-hidden="true" focusable="false">
      <rect className={styles.living} x="10" y="10" width="300" height="180" /><rect className={styles.hall} x="10" y="190" width="300" height="60" />
      <rect className={styles.bedroom} x="10" y="250" width="150" height="180" /><rect className={styles.bedroom} x="160" y="250" width="150" height="180" />
      <path className={styles.wall} d="M10 10h300v420H10zM10 190h130m40 0h130M10 250h30m60 0h120m60 0h30M160 250v180" />
      <path className={styles.door} d="M40 250h60m120 0h60" /><rect className={styles.unit} x="35" y="30" width="90" height="20" rx="4" />
      <path className={styles.air} d="M50 58q-9 20 0 36m23-36q-9 20 0 36m23-36q-9 20 0 36" />
      <text x="143" y="46">Indoor unit</text><text x="35" y="130" className={styles.roomLabel}>Living / dining</text><text x="160" y="228" textAnchor="middle">Hallway</text>
      <text x="29" y="315" className={styles.roomLabel}>Bedroom 1</text><text x="29" y="345">Door closed</text><text x="179" y="315" className={styles.roomLabel}>Bedroom 2</text><text x="179" y="345">Door closed</text>
    </svg>
    <div className={styles.key}><span><i className={styles.blueKey} aria-hidden="true" />Planned open living zone</span><span><i className={styles.orangeKey} aria-hidden="true" />Closed bedroom doors</span></div>
    <ol className={styles.takeaways}>
      <li><strong>Start with the open area.</strong> Check its load, unit position, airflow direction, and normal use.</li>
      <li><strong>Assess bedrooms separately.</strong> Compare indoor-unit arrangements or another suitable distribution approach for rooms used with doors closed.</li>
      <li><strong>Write down the coverage.</strong> Identify the rooms served and any limitations before selecting equipment.</li>
    </ol>
    <p id="ductless-floor-plan-note" className={styles.note}>Illustrative floor plan, not an actual customer home or a sizing calculation. The right number and type of indoor units depend on the building and equipment.</p>
  </figure>;
}
