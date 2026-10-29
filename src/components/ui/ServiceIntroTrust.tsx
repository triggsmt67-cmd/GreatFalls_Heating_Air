import { siteConfig } from "@/content/site";

export function ServiceIntroTrust() {
  return (
    <div className="service-intro-trust" aria-label="Business credentials">
      <span>Veteran-owned · Locally operated</span>
      <span>Montana registration <strong>{siteConfig.montanaRegistration}</strong></span>
    </div>
  );
}
