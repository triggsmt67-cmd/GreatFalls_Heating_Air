export const guideNavigation: Record<string, ReadonlyArray<{ id: string; label: string }>> = {
  "/services/heating": [
    { id: "tune-up-heading", label: "Maintenance checks" },
    { id: "heating-logistics-heading", label: "Scheduling" },
    { id: "heating-faq-heading", label: "Common questions" },
  ],
  "/services/heating/emergency-furnace-repair": [
    { id: "homeowner-checks-heading", label: "Safe homeowner checks" },
    { id: "failures-heading", label: "Common faults" },
    { id: "emergency-faq-heading", label: "Common questions" },
  ],
  "/services/heating/furnace-installation": [
    { id: "furnace-efficiency-heading", label: "Equipment options" },
    { id: "furnace-cost-heading", label: "Cost factors" },
    { id: "furnace-estimate-heading", label: "Quote checklist" },
    { id: "furnace-install-faq-heading", label: "Common questions" },
  ],
  "/services/heating/furnace-maintenance": [
    { id: "maintenance-checklist-heading", label: "Maintenance checklist" },
    { id: "maintenance-owner-heading", label: "Between visits" },
    { id: "furnace-maintenance-faq-heading", label: "Common questions" },
  ],
  "/services/cooling": [
    { id: "cooling-symptoms-heading", label: "Cooling problems" },
    { id: "cooling-tuneup-heading", label: "Maintenance checks" },
    { id: "cooling-smoke-heading", label: "Smoke & filtration" },
    { id: "cooling-faq-heading", label: "Common questions" },
  ],
  "/services/cooling/ac-repair": [
    { id: "ac-symptoms-heading", label: "Symptoms" },
    { id: "ac-findings-heading", label: "Before approving work" },
    { id: "ac-decision-heading", label: "Repair or replace" },
    { id: "ac-repair-faq-heading", label: "Common questions" },
  ],
  "/services/cooling/ac-installation": [
    { id: "ac-paths-heading", label: "Equipment options" },
    { id: "ac-cost-heading", label: "Cost factors" },
    { id: "ac-scope-heading", label: "Quote checklist" },
    { id: "ac-installation-faq-heading", label: "Common questions" },
  ],
  "/services/cooling/ac-maintenance": [
    { id: "ac-maintenance-checks-heading", label: "Maintenance checklist" },
    { id: "ac-owner-care-heading", label: "Between visits" },
    { id: "ac-maintenance-faq-heading", label: "Common questions" },
  ],
  "/services/heat-pumps/cold-climate": [
    { id: "heat-pump-options-heading", label: "System options" },
    { id: "heat-pump-cost-heading", label: "Running costs" },
    { id: "heat-pump-design-heading", label: "Quote checklist" },
    { id: "heat-pump-faq-heading", label: "Common questions" },
  ],
  "/services/heat-pumps/heat-pump-installation": [
    { id: "hp-options-heading", label: "Installation options" },
    { id: "hp-backup-heading", label: "Backup heat" },
    { id: "hp-scope-heading", label: "Quote checklist" },
    { id: "hp-installation-faq-heading", label: "Common questions" },
  ],
  "/services/heat-pumps/ductless-mini-splits": [
    { id: "ductless-uses-heading", label: "Room layouts" },
    { id: "ductless-winter-heading", label: "Winter heating" },
    { id: "ductless-scope-heading", label: "Quote checklist" },
    { id: "ductless-faq-heading", label: "Common questions" },
  ],
  "/services/heat-pumps/repair-maintenance": [
    { id: "hp-service-symptoms-heading", label: "Symptoms" },
    { id: "hp-maintenance-heading", label: "Maintenance" },
    { id: "hp-repair-decision-heading", label: "Repair or replace" },
    { id: "hp-service-faq-heading", label: "Common questions" },
  ],
};
