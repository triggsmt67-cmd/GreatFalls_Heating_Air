# Great Falls Heating and Air LLC

Local development preview — not approved for public launch.

## Design

Technical confidence with quiet luxury: Manrope headings, Inter body text, cool-white surfaces, deep navy structure, saturated blue actions, and contrast-safe safety orange reserved for urgent calls. The homepage pairs one precisely framed image field with a solid-navy hero, a progressive service form, custom business trust marks, asymmetric service features, grouped communities, and native FAQ disclosures. Interior routes use the same custom icon family and component finish.

### Premium design system

The homepage service selector is an integrated white section beneath the hero: introduction and compact credentials beside a two-by-two service grid. Each choice explains its purpose and expands the existing accessible form. Mobile stacks the introduction above the grid. The About page retains the wider business-information marks.

- `src/components/ui/ServiceIcon.tsx`: eleven original inline SVG equipment and service drawings on a consistent 32-unit grid. Decorative icons are hidden from assistive technology; adjacent text carries meaning.
- `src/components/ui/TrustMarks.tsx`: linked license, location, and residential-service marks; compact license treatment for contact, calls to action, and footer. Uses the owner-confirmed C1680325 value centrally; no additional certifications or claims.
- `src/app/premium.css`: shared finish layered after the existing layout rules. Motifs are airflow contours, technical registration corners, and thin section markers. Motion uses shared timing tokens, with pointer effects restricted to hover-capable devices.
- Interaction details: navigation indicators, service-menu icons and entrance, button press feedback, icon nudges, image contour response, FAQ indicator rotation and native disclosure transitions, input focus rings, and announced submission status.
- Reduced-motion rules disable transitions, animations, smooth scrolling, and decorative hover movement. Content never depends on animation or scroll-triggered JavaScript to become visible.
- No new dependencies, fonts, raster images, third-party requests, or animation runtime. SVGs and CSS add a small payload; this is not a measured Core Web Vitals guarantee. Real photography still requires responsive encoding and accurate `sizes` values.

The existing Next.js App Router architecture and routes are retained. Rebate data in `src/content/rebates.ts` is preserved; this redesign is not a fresh verification of program availability.

## Local development

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. See `.env.example` for configuration. Local `.env.local` sets `LEAD_EMAIL_MODE=simulate`; development submissions do not send email and redirect to an explicitly simulated confirmation page.

```sh
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

## Code map

- `src/app/`: homepage, about, contact, privacy, thank-you, 404, service routes, heat-pump guide, rebates, lead API, robots, sitemap, and dedicated 1200×630 social image.
- `src/app/globals.css`: design tokens, composition rules, responsive styles, focus, and reduced motion.
- `src/components/forms/LeadForm.tsx`: progressive homepage and full contact form.
- `src/content/site.ts`: contact placeholders, verification flags, communities, temporary assets, launch checklist.
- `src/lib/validation/`: shared validation and rate-limit adapter.
- `src/lib/email/`: provider adapter and escaped notification templates.
- `src/lib/schema/`: business/service schema verification guard.

## Lead delivery and production safeguards

Production submissions intentionally return HTTP 503 until a durable, shared rate limiter is implemented in `src/lib/validation/rateLimit.ts`. The bounded in-memory limiter is development-only. Do not bypass this safeguard on Vercel.

After adding a durable limiter, configure `EMAIL_PROVIDER_API_KEY`, `CONTACT_FROM_EMAIL` (verified sender), and `CONTACT_TO_EMAIL`. The Resend adapter requires a successful provider response containing a message ID; it does not simulate success in production. Test successful delivery and provider failure in an authorized staging environment before launch. Provider acceptance is not proof of inbox delivery.

Customer-controlled email HTML is escaped, telephone links normalized, API body size limited, and validation shared. Errors preserve form entries. No customer payload is logged. Failed requests never redirect to Thank You.

Business and service JSON-LD are suppressed until required identity, contact, address, hours, and credential flags are verified. Thank You is noindex and excluded from the sitemap. Unknown routes return HTTP 404. Metadata uses one business-name suffix.

## Launch checklist

The authoritative checklist and flags live in `src/content/site.ts`. Before public launch:

- [x] Owner confirmed Great Falls Heating and Air LLC and license C1680325.
- [ ] Confirm production domain, telephone, email, address/service-area model, and hours.
- [ ] Replace placeholder `406-555-0148` and `hello@example.com` centrally.
- [ ] Confirm service coverage and after-hours availability; no 24/7, response-time, free-estimate, or pricing promises are currently made.
- [ ] Supply approved credentials, company history, warranties, and authorized manufacturer affiliations.
- [ ] Supply authentic reviews and permission before adding testimonials.
- [ ] Replace the temporary mark in `src/components/ui/Brand.tsx` with approved vector artwork.
- [ ] Supply real company photography and usage rights for numbered Photo 01–10; replace each placeholder and write accurate alt text.
- [ ] Implement durable rate limiting and configure/test production email delivery.
- [ ] Recheck rebate source documents and dates with program administrators before launch.
- [ ] Approve privacy disclosures, analytics, consent, and retention practices.
- [ ] Complete staging, real-device, screen-reader, and production email checks; authorize deployment separately.

## Photography plan and recovery

The rendered site uses ten numbered placeholders rather than generated imagery. Each slot displays its subject, minimum source dimensions, aspect ratio, and crop guidance.

| Slot | Page                       | Recommended subject                               | Minimum source |
| ---- | -------------------------- | ------------------------------------------------- | -------------- |
| 01   | Homepage hero              | Home exterior, technician, or installed equipment | 1800 × 1350    |
| 02   | Homepage heating feature   | Furnace diagnostic                                | 1200 × 1500    |
| 03   | Homepage cooling feature   | AC service or mechanical detail                   | 1400 × 1050    |
| 04   | Homepage heat-pump feature | Outdoor heat pump in winter                       | 1600 × 1200    |
| 05   | Homepage local section     | Great Falls home or high-plains context           | 1920 × 1080    |
| 06   | Heating hub                | Technician inspecting heating equipment           | 1600 × 1200    |
| 07   | Furnace-repair page        | Diagnostic tools and furnace controls             | 1400 × 1050    |
| 08   | Cooling hub                | Technician servicing cooling equipment            | 1600 × 1200    |
| 09   | AC-repair page             | Residential condenser diagnostic                  | 1600 × 1200    |
| 10   | Heat-pump guide            | Installed unit showing clearance and grade        | 1600 × 1200    |

Replacement photos should contain no unauthorized manufacturer marks, certification badges, phone numbers, or implied company affiliations. Export final photographs as responsive WebP or AVIF assets and retain an original master outside the public bundle.

The earlier `public/images/winter-equipment.webp` illustration remains in the workspace but is not rendered. It can be removed after the client photo set is installed.

Old visual assets and superseded components are recoverable from `.local-backup/original-visuals.tar`, outside the public directory and ignored by Git. The geometric brand mark is temporary original artwork, not a trace of the supplied raster logo.

## Verification — September 24, 2026

- 22 tests across four files pass: business identity, validation, email escaping, provider outcomes, rate limits, and schema suppression.
- ESLint, TypeScript, and optimized production build pass.
- Browser review covers homepage, furnace repair, heat pumps, rebates, contact, simulated Thank You, and 404 at desktop/mobile widths.
- Homepage overflow checks pass at 390, 768, 1024, and 1440 CSS pixels. Required interior mobile pages have no document-level horizontal overflow; the comparison table scrolls within its own region.
- Desktop/mobile navigation Escape behavior, progressive intent selection, emergency guidance, validation error focus, retained input, and simulated submission were exercised.
- Native FAQ Enter-key behavior and sticky header top offset (0px after scrolling) pass with the development banner expanded and collapsed. A 720px reflow check passes; actual browser 200% zoom remains a manual launch check.
- Production HTTP checks confirm route responses, titles/canonicals, noindex Thank You, sitemap exclusion, suppressed business/service schema, social image, and fail-closed lead endpoint.
- Screenshots: `qa/screenshots/home-390.png` and `qa/screenshots/home-1440.png`.

This is not a full assistive-technology audit or a live email delivery test. No public deployment was performed.

### Premium refinement verification

All eleven public page routes plus a missing-route/404 page were inspected in the browser at 390, 768, 1024, and 1440 CSS pixels. All 48 layout checks reported one H1, no document overflow, the correct footer license, and preserved Photo 01–10 placement. Visual review included every page type. Desktop service-menu Escape restores focus; mobile menu opens and Escape restores focus; native FAQ Enter toggles correctly. Invalid form submission focuses the error summary; a completed local simulated submission shows the explicit no-email-sent confirmation. Loading feedback was observed during submission.

Reduced-motion media rules were inspected in the browser stylesheet; an operating-system reduced-motion preference and assistive-technology audit remain manual launch checks. Existing API/security tests cover provider failure and production safeguards. No live email was sent. Updated full-page homepage references are in `qa/screenshots/home-1440.png` and `qa/screenshots/home-390.png`.
