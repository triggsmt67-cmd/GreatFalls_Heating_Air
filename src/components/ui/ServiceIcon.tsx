import type { SVGProps } from "react";

export type ServiceIconName =
  | "heating"
  | "emergency"
  | "cooling"
  | "ac-repair"
  | "heat-pump"
  | "estimate"
  | "maintenance"
  | "general"
  | "location"
  | "license"
  | "efficiency";

// Original 32-unit equipment drawings: one stroke system, no external assets.
const drawings: Record<ServiceIconName, string[]> = {
  heating: [
    "M9 4h14v24H9zM12 8h8M12 11h8M12 25h8M7 28h18",
    "M16 14c1 3 4 4 4 7a4 4 0 0 1-8 0c0-2 2-3 2-5l2 2z",
  ],
  emergency: [
    "M5 6h14v22H5zM8 10h8M8 13h6M8 24h4",
    "m24 10-7 10h6l-2 9 8-12h-6z",
  ],
  cooling: [
    "M6 7h20v19H6zM9 29v-3m14 3v-3M9 4v3m14-3v3",
    "M16 11v12m-5-9 10 6m-10 0 10-6m-7-4 2 2 2-2m-4 14 2-2 2 2",
  ],
  "ac-repair": [
    "M4 6h20v9M4 6v20h9M8 10h12M8 14h4M8 18h4",
    "m16 26 7-7a5 5 0 0 0 6-6l-3 3-3-3 3-3a5 5 0 0 0-6 6l-7 7z",
  ],
  "heat-pump": [
    "M8 10h16v13H8zM11 26v-3m10 3v-3M13 13l6 7m0-7-6 7",
    "M5 13V8a3 3 0 0 1 3-3h16l-3-3m3 3-3 3M27 19v5a3 3 0 0 1-3 3H8l3-3m-3 3 3 3",
  ],
  estimate: [
    "M8 4h12l5 5v19H8zM20 4v6h5M12 14h9M12 18h5M12 22h4",
    "M4 9v15m-2-12h4m-4 9h4M20 21v5m-2-2.5h4",
  ],
  maintenance: [
    "m9 26 13-13a6 6 0 0 0 7-7l-4 4-4-4 4-4a6 6 0 0 0-7 7L5 22z",
    "M4 6h8M8 2v8M19 25h9m-4.5-4.5v9",
  ],
  general: [
    "M5 5h22v18H14l-7 5v-5H5z",
    "M13 11a3 3 0 1 1 5 2c-2 1-2 2-2 3M16 19h.01M9 9h.01M23 19h.01",
  ],
  location: [
    "M16 29S6 19 6 12a10 10 0 0 1 20 0c0 7-10 17-10 17z",
    "m10 15 4-6 4 5 3-3 3 5M3 28h7m12 0h7",
  ],
  license: [
    "M8 4h16l4 4v16l-4 4H8l-4-4V8z",
    "M11 7h10M11 25h10M10 16l4 4 8-9M1 12v8m30-8v8",
  ],
  efficiency: [
    "M5 25V9l5-5h12l5 5v16zM9 28h14M9 10h4M9 14h3",
    "m20 8-7 10h6l-2 7 8-11h-6z",
  ],
};

export function ServiceIcon({
  name,
  size = 32,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { name: ServiceIconName; size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`service-icon ${className}`}
      {...props}
    >
      {drawings[name].map((d, i) => (
        <path key={i} d={d} className={i === 1 ? "icon-detail" : undefined} />
      ))}
    </svg>
  );
}
