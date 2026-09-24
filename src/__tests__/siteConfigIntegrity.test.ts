import { describe, it, expect } from "vitest";
import {
  siteConfig,
  serviceCommunities,
  launchReadinessChecklist,
} from "@/content/site";
import { rebatePrograms } from "@/content/rebates";
import { navigationServices } from "@/content/services";

describe("Site Configuration & Content Integrity", () => {
  it("should use the confirmed legal business identity", () => {
    expect(siteConfig.businessName).toBe("Great Falls Heating and Air LLC");
    expect(siteConfig.montanaRegistration).toBe("C1680325");
  });

  it("should have valid centralized telephone numbers", () => {
    expect(siteConfig.phoneDisplay).toMatch(/^\d{3}-\d{3}-\d{4}$/);
    expect(siteConfig.phoneE164).toMatch(/^\+\d{11}$/);
  });

  it("should include all 13 core service communities", () => {
    const names = serviceCommunities.map((c) => c.name);
    expect(names).toContain("Great Falls");
    expect(names).toContain("Black Eagle");
    expect(names).toContain("Malmstrom AFB");
    expect(names).toContain("Ulm");
    expect(names).toContain("Cascade");
    expect(names).toContain("Vaughn");
    expect(names).toContain("Sun Prairie");
    expect(names).toContain("Sun River");
    expect(names).toContain("Belt");
    expect(names).toContain("Sand Coulee");
    expect(names).toContain("Stockett");
    expect(names).toContain("Tracy");
    expect(names).toContain("Centerville");
  });

  it("should have launch readiness checklist items defined", () => {
    expect(launchReadinessChecklist.length).toBeGreaterThanOrEqual(10);
    const keys = launchReadinessChecklist.map((item) => item.key);
    expect(keys).toContain("montanaRegistration");
    expect(keys).toContain("epaCertification");
    expect(keys).toContain("emergencyAvailability");
  });

  it("should include valid 2026 rebate programs with official sources", () => {
    expect(rebatePrograms.length).toBe(6);
    for (const prog of rebatePrograms) {
      expect(prog.sourceUrl).toMatch(/^https?:\/\//);
      expect(prog.lastReviewed).toBe("September 24, 2026");
    }
  });

  it("should have all 5 navigation services mapped correctly", () => {
    expect(navigationServices.length).toBe(5);
    const routes = navigationServices.map((s) => s.route);
    expect(routes).toContain("/services/heating");
    expect(routes).toContain("/services/heating/emergency-furnace-repair");
    expect(routes).toContain("/services/cooling");
    expect(routes).toContain("/services/cooling/ac-repair");
    expect(routes).toContain("/services/heat-pumps/cold-climate");
  });
});
