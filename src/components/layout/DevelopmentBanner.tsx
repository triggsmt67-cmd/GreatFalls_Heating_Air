import { launchReadinessChecklist } from "@/content/site";
export function DevelopmentBanner() {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <details className="development-banner">
      <summary>
        Development preview · Business details & imagery pending verification
      </summary>
      <div className="wrap development-checklist">
        {launchReadinessChecklist
          .filter((i) => i.status !== "ready")
          .map((i) => (
            <p key={i.key}>
              <strong>{i.label}</strong>
              <span>{i.notes}</span>
            </p>
          ))}
      </div>
    </details>
  );
}
