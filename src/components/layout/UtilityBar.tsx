import { siteConfig } from "@/content/site";
export function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="wrap">
        <span>
          Great Falls, Montana
          <span className="utility-extra"> & surrounding communities</span>
        </span>
        <a href={`tel:${siteConfig.phoneE164}`}>
          Heating & cooling help <strong>{siteConfig.phoneDisplay}</strong>
        </a>
      </div>
    </div>
  );
}
