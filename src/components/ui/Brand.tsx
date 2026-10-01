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
        src="/images/test-logo.webp"
        alt="Great Falls Heating and Air LLC"
        width={48}
        height={60}
        priority
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
