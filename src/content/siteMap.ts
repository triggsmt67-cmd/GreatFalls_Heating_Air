// Canonical public routes for the XML sitemap.
// Include canonical, indexable pages only; confirmation and API routes stay out.
export const siteMapGroups = [
  {
    title: "Company & helpful information",
    pages: [
      { path: "/", title: "Home" },
      { path: "/about", title: "Meet Robert Ross" },
      { path: "/contact", title: "Contact & estimates" },
      { path: "/rebates/2026-montana-hvac-rebates", title: "2026 Montana HVAC rebates" },
      { path: "/privacy", title: "Privacy policy" },
    ],
  },
  {
    title: "Heating",
    pages: [
      { path: "/services/heating", title: "Heating services" },
      { path: "/services/heating/emergency-furnace-repair", title: "Emergency furnace repair" },
      { path: "/services/heating/furnace-installation", title: "Furnace installation" },
      { path: "/services/heating/furnace-maintenance", title: "Furnace maintenance" },
    ],
  },
  {
    title: "Cooling",
    pages: [
      { path: "/services/cooling", title: "Cooling services" },
      { path: "/services/cooling/ac-repair", title: "AC repair & diagnostics" },
      { path: "/services/cooling/ac-installation", title: "AC installation" },
      { path: "/services/cooling/ac-maintenance", title: "AC maintenance" },
    ],
  },
  {
    title: "Heat pumps",
    pages: [
      { path: "/services/heat-pumps/cold-climate", title: "Cold-climate heat pumps" },
      { path: "/services/heat-pumps/heat-pump-installation", title: "Heat-pump installation" },
      { path: "/services/heat-pumps/ductless-mini-splits", title: "Ductless mini-splits" },
      { path: "/services/heat-pumps/repair-maintenance", title: "Heat-pump repair & maintenance" },
    ],
  },
] as const;
