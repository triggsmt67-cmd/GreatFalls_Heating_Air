# Internal linking and routing audit — October 23, 2026

Target: Great Falls Heating and Air local checkout, http://localhost:3001.

## Results

- 18 existing page routes returned HTTP 200.
- 478 rendered internal anchor references checked, including header, footer, breadcrumbs, service cross-links, CTAs and in-page fragments.
- No linked 404s, missing anchor IDs, or unexpected destination redirects found.
- All 17 public/indexable pages are reachable from the homepage within two clicks.
- `/thank-you` is intentionally not linked from ordinary navigation. LeadForm routes there after success (or `/thank-you?preview=1` for development simulation); the API also declares this destination. Its page exists, is noindex, and is excluded from the sitemap. No form submission was made.
- All 17 sitemap URLs resolve to existing routes, without duplicates; canonical paths match the rendered routes.
- `/sitemap.xml` and `/robots.txt` returned HTTP 200. Robots points to the configured production sitemap and excludes `/api/` and `/thank-you`.
- Contact query URLs `intent=emergency`, `estimate`, `general`, and `maintenance` returned HTTP 200.
- `/services/heating/` normalizes with HTTP 308 to `/services/heating`.
- A deliberately nonexistent test path correctly returned HTTP 404; the application does not disguise nonexistent routes as successful pages.

No routing code changes were required. This audit checks the rendered local site and configured canonical paths. It does not establish live production availability, email delivery, or form submission success. Production-domain availability was not reverified in this pass; the preceding audit recorded timeouts from this environment.

## Page inventory

- `/` — HTTP 200
- `/about` — HTTP 200
- `/contact` — HTTP 200
- `/privacy` — HTTP 200
- `/rebates/2026-montana-hvac-rebates` — HTTP 200
- `/services/cooling` — HTTP 200
- `/services/cooling/ac-installation` — HTTP 200
- `/services/cooling/ac-maintenance` — HTTP 200
- `/services/cooling/ac-repair` — HTTP 200
- `/services/heat-pumps/cold-climate` — HTTP 200
- `/services/heat-pumps/ductless-mini-splits` — HTTP 200
- `/services/heat-pumps/heat-pump-installation` — HTTP 200
- `/services/heat-pumps/repair-maintenance` — HTTP 200
- `/services/heating` — HTTP 200
- `/services/heating/emergency-furnace-repair` — HTTP 200
- `/services/heating/furnace-installation` — HTTP 200
- `/services/heating/furnace-maintenance` — HTTP 200
- `/thank-you` — HTTP 200
