import Link from "next/link";
export function Brand() {
  return (
    <Link
      href="/"
      className="brand"
      aria-label="Great Falls Heating and Air LLC — home"
    >
      <svg
        viewBox="0 0 48 48"
        width="42"
        height="42"
        fill="none"
        aria-hidden="true"
      >
        <path d="M24 2 44 13v22L24 46 4 35V13Z" fill="#122d3d" />
        <path d="m10 31 12-17 7 10 5-7 6 14" stroke="#76b8d6" strokeWidth="2" />
        <path d="M11 35h26" stroke="#69bce0" strokeWidth="2" />
        <circle cx="34" cy="12" r="2" fill="#69bce0" />
      </svg>
      <span>
        <strong>GREAT FALLS</strong>
        <small>HEATING & AIR LLC</small>
      </span>
    </Link>
  );
}
