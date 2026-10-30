import { siteConfig } from "@/content/site";
export function UtilityBar() {
  return (
    <aside className="utility-bar" aria-label="Service area and emergency contact">
      <div className="wrap">
        <span>
          Great Falls, Montana
          <span className="utility-extra"> & surrounding communities</span>
        </span>
        <a href={`tel:${siteConfig.phoneE164}`}>
          24/7 emergency repair <strong>{siteConfig.phoneDisplay}</strong>
        </a>
      </div>
    </aside>
  );
}
