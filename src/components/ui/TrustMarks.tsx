import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ServiceIcon } from "./ServiceIcon";

export function LicenseMark() {
  return (
    <div className="license-mark">
      <ServiceIcon name="license" size={36} />
      <span>
        <small>Licensed contractor</small>
        <strong>{siteConfig.montanaRegistration}</strong>
      </span>
    </div>
  );
}

export function TrustMarks() {
  return (
    <div className="trust-marks" aria-label="Business information">
      <Link href="/about" className="trust-mark">
        <ServiceIcon name="license" size={40} />
        <span>
          <small>Licensed contractor</small>
          <strong>{siteConfig.montanaRegistration}</strong>
        </span>
        <span className="trust-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <Link href="/contact" className="trust-mark">
        <ServiceIcon name="location" size={40} />
        <span>
          <small>Close to home</small>
          <strong>Great Falls, Montana</strong>
        </span>
        <span className="trust-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <Link href="/services/heat-pumps/cold-climate" className="trust-mark">
        <ServiceIcon name="heat-pump" size={40} />
        <span>
          <small>Through the seasons</small>
          <strong>Residential heating & cooling</strong>
        </span>
        <span className="trust-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
    </div>
  );
}
