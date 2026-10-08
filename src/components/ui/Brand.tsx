import Link from "next/link";
import Image from "next/image";

export function Brand({ hideText = false }: { hideText?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${hideText ? "brand--logo-only" : ""}`}
      aria-label="Great Falls Heating and Air LLC — home"
    >
      <Image
        src={
          hideText
            ? "/images/great-falls-hvac-dimensional.svg"
            : "/images/test-logo.webp"
        }
        alt="Great Falls Heating and Air LLC"
        width={hideText ? 1905 : 48}
        height={hideText ? 865 : 60}
        loading={hideText ? "eager" : "lazy"}
        unoptimized={hideText}
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
