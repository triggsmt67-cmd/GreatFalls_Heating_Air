import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Great Falls Heating and Air LLC — Residential heating and cooling";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#142e3d",
        color: "#f7f9fb",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 24, letterSpacing: 5, display: "flex" }}>
        GREAT FALLS / MONTANA
      </div>
      <div
        style={{
          fontSize: 68,
          lineHeight: 1.1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Heating and cooling</span>
        <span style={{ color: "#9ac9dd" }}>built for Great Falls weather.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #49606a",
          paddingTop: 24,
          fontSize: 22,
        }}
      >
        <span>GREAT FALLS HEATING & AIR LLC</span>
        <span style={{ color: "#69c1e8" }}>Residential HVAC</span>
      </div>
    </div>,
    size,
  );
}
