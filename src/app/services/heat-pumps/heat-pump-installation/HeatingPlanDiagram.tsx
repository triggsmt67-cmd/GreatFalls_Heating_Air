import { ServiceIcon } from "@/components/ui/ServiceIcon";
import styles from "./heating-plan.module.css";

export function HeatingPlanDiagram() {
  return <figure className={styles.diagram} aria-labelledby="heating-plan-heading">
    <figcaption><p className="eyebrow">A central dual-fuel example</p><h2 id="heating-plan-heading">Two heat sources. One coordinated heating plan.</h2><p>The controls coordinate the heat pump and furnace according to the approved equipment arrangement.</p></figcaption>
    <div className={styles.control}><ServiceIcon name="estimate" size={38} /><div><h3>Thermostat &amp; approved controls</h3><p>Respond to heating demand using the selected capacity, fuel-cost, and operating-limit settings.</p></div></div>
    <div className={styles.branch} aria-hidden="true"><span>↓</span><span>↓</span></div>
    <div className={styles.sources}>
      <div><ServiceIcon name="heat-pump" size={56} /><h3>Heat pump</h3><p>Supplies heat within the selected operating plan.</p></div>
      <div><ServiceIcon name="heating" size={56} /><h3>Gas or propane furnace</h3><p>Supplies backup heat when the control strategy calls for it.</p></div>
    </div>
    <div className={styles.delivery}><strong>Shared indoor airflow</strong><p>A compatible coil, blower, and duct system deliver heat to the rooms served.</p></div>
    <p className={styles.note}>Conceptual control plan, not a piping or wiring diagram. Changeover settings and permitted operation are equipment-specific; no fixed outdoor temperature applies to every home.</p>
  </figure>;
}
