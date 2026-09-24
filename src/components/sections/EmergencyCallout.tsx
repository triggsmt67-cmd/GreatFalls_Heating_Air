import { siteConfig } from "@/content/site";
export function EmergencyCallout({
  title = "For urgent service, please call",
  description = "Call to discuss service availability. Forms are not continuously monitored. For gas odors or a carbon monoxide alarm, leave the building and contact emergency services.",
  className = "",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`safety-panel ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="button button-orange" href={`tel:${siteConfig.phoneE164}`}>
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
