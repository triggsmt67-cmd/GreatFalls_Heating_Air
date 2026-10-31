# Rebate review — October 30, 2026

Scope: all programs listed in the website guide, current official applications/status pages, and matching incentive references on service pages. The guide now contains nine entries: five published utility offers, three expired/repealed tax credits, and one unlaunched state program. This is a review of published terms, not confirmation of a specific customer's eligibility, remaining funds, or contractor enrollment. No providers were contacted and no application was submitted.

| Program | Published terms confirmed | Official source |
| --- | --- | --- |
| NorthWestern gas equipment | $425 furnace; $700 condensing boiler; $70 thermostat. August 1, 2026–June 30, 2027. Former Energy West Montana/Cut Bank Gas accounts excluded. | [2026–27 gas application](https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/mt-residential-natural-gas-equipment.pdf) |
| NorthWestern electric heat pump | $450/unit; ENERGY STAR or SEER2 ≥15.2 and HSPF2 ≥8.5. Current existing-home application window retained. | [Electric application](https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf) |
| NorthWestern water heater | Up to $3,000 through participating contractors. Existing electric-resistance replacement; published property exclusions retained. | [HPWH program](https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives/heat-pump-water-heater-program) |
| Sun River air source | $150/ton, maximum $750; advance approval, invoice and inspection. Published legacy-rating thresholds added without converting them to SEER2/HSPF2. | [Program page](https://sunriverelectric.coop/air-source-heat-pumps) |
| Sun River ground source | $200/ton, maximum $1,000; one rebate/system, served building, invoice and approved installation. | [Official form](https://sunriverelectric.coop/sites/default/files/2025-06/ground-source-heat-pump-rebate-form.pdf), [program steps](https://sunriverelectric.coop/ground-source-heat-pump-rebate) |
| Federal 25C | Not available for property placed in service after December 31, 2025. | [IRS](https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit) |
| Federal 25D | Not available for property placed in service after December 31, 2025; geothermal explicitly separated from the co-op incentive. | [IRS](https://www.irs.gov/credits-deductions/residential-clean-energy-credit) |
| Montana geothermal tax credit | New claims ended after tax year 2021; historical carryforwards are separate. | [Department of Revenue](https://revenue.mt.gov/taxes/repealed/) |
| Montana HOMES/HEEHR | Not launched. Revised DOE guidance, application work and final approval remain necessary. No speculative income tiers or announced dollar maximums advertised as available. | [DEQ current status](https://deq.mt.gov/energy/Programs/efficiency) |

## Changes

Added the omitted natural-gas offer with its account exclusion visible outside collapsed details, and made the furnace-installation page's eligibility warning specific. The linked Sun River geothermal overview still promotes historic federal and state tax credits; the guide now explicitly separates those expired credits from the co-op rebate and retains the official rebate PDF as its main link. Existing advertised utility amounts were confirmed. Clarified invoice/approval requirements and refreshed review dates across the guide, FAQs/schema, cooling and heat-pump pages from one shared date constant.

Search-engine snippets for some utility PDF URLs showed previous-year dates. The opened current application, rather than those snippets, was used for the review. Both NorthWestern forms now show August 1, 2026–June 30, 2027.

## Verification

All 42 tests, TypeScript, ESLint and the production build passed. The regression check keeps expired/repealed tax credits and the unlaunched DEQ program out of active utility offers. Current source-link HTTP results are in [rebate-source-links.json](rebate-source-links.json). Production deployment `dpl_EtEKp7gSb91ms238GTnyYCP3zuMQ` was READY for source `2ef6483`. All six changed pages returned 200. The live guide had five utility entries and four expired/pending entries, the correct canonical, six FAQ-schema answers with the current review date, and no old guide review date. The 320-CSS-pixel layout had no horizontal overflow and the targeted axe scan reported zero violations. [Production verification](rebate-production-verification.json) and [live screenshot](rebate-current-programs.png).
