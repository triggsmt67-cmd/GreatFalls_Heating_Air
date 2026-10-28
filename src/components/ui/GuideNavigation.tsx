import { guideNavigation } from "@/content/guideNavigation";
import styles from "./GuideNavigation.module.css";

export function GuideNavigation({ route }: { route: string }) {
  const links = guideNavigation[route];
  if (!links) return null;

  return (
    <nav className={styles.navigation} aria-label="In this guide">
      <span>In this guide</span>
      <ul>
        {links.map(({ id, label }) => (
          <li key={id}><a href={`#${id}`}>{label} <span aria-hidden="true">↓</span></a></li>
        ))}
      </ul>
    </nav>
  );
}
