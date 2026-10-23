import { ServiceIcon } from "@/components/ui/ServiceIcon";
import styles from "./operating-pattern.module.css";

export function OperatingPatternDiagram() {
  return <figure className={styles.diagram} aria-labelledby="operating-pattern-heading">
    <figcaption><p className="eyebrow">What to observe / What to report</p><h2 id="operating-pattern-heading">Does normal heating return, or does the problem continue?</h2><p>Look at the whole pattern: outdoor conditions, the equipment’s behavior, and whether the home stays warm.</p></figcaption>
    <div className={styles.paths}>
      <div className={styles.context}><ServiceIcon name="heat-pump" size={50} /><p className={styles.label}>May accompany defrost</p><h3>Frost clears and heating resumes.</h3><p>Temporary vapor, a fan pause, or a change in sound can occur during defrost. Compare with the model’s owner guidance and normal operation.</p><div className={styles.action}><strong>Observe the context.</strong><p>Note the conditions and whether normal heating returns. A cloud alone cannot identify the cause.</p></div></div>
      <div className={styles.assess}><ServiceIcon name="maintenance" size={50} /><p className={styles.label}>Arrange service guidance</p><h3>Ice persists or comfort declines.</h3><p>Report ongoing ice, falling indoor temperature, repeated alerts, loss of heat, or a new harsh noise. Do not force defrost or remove ice yourself.</p><div className={styles.action}><strong>Record and call.</strong><p>Share model, code, timing, weather, and rooms affected. Call promptly when heat is being lost.</p></div></div>
    </div>
    <p className={styles.note}><strong>Danger signs take priority:</strong> suspected smoke, burning, sparking, gas odor, or a CO alarm are not reasons to keep observing. Stay clear and follow the safety guidance above. If you cannot distinguish vapor from smoke, stop troubleshooting and call for help.</p>
    <p className={styles.note}>This guide supports a service conversation; it does not diagnose equipment or prescribe a defrost duration.</p>
  </figure>;
}
