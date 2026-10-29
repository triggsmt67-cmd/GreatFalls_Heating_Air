import { siteConfig } from "@/content/site";
import Link from "next/link";
import Image from "next/image";

export function Brand({ hideText = false }: { hideText?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${hideText ? "brand--logo-only" : ""}`}
      aria-label={`${siteConfig.businessName} — home`}
    >
      <Image
        src="/images/great-falls-heating-air-logo.svg"
        alt={siteConfig.businessName}
        width={1600}
        height={1040}
        loading={hideText ? "eager" : "lazy"}
        unoptimized
        className="brand-logo"
      />
      {!hideText && (
        <span>
          <strong>GREAT FALLS</strong>
          <small>HEATING & AIR LLC</small>
        </span>
      )}
    </Link>
  );
}
