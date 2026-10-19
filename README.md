# Great Falls Heating and Air LLC

## Checkpoint — October 19, 2026

This is the current client-review website, not a completed public-launch handoff. The owner requested this checkpoint be committed and pushed to `main` so the existing Vercel Git integration can build a fresh client-review version. That branch is connected to Vercel’s **Production** environment; the environment name does not mean form delivery, all content, or launch checks are complete.

- Repository: `triggsmt67-cmd/GreatFalls_Heating_Air`
- Vercel team/project: `trevor-riggs-projects / great-falls-heating-air`
- Local checkout: `/Users/trevorriggs/Desktop/GF Heating And AIr`
- Read `AGENTS.md` before editing. This checkout uses Next.js 16.3.6; consult the relevant guide under `node_modules/next/dist/docs/` rather than assuming older Next.js conventions.
- No database work is required for these content pages. Do not enable or bypass production form safeguards as part of content work.

## Where we are

All three service hubs are updated. All three planned heating subpages now exist. The AC repair subpage exists in its earlier form and still needs its content update. The other five planned cooling/heat-pump subpages have not been built.

| Page | Route | Current status |
| --- | --- | --- |
| Heating hub | `/services/heating` | Updated local copy, equipment and symptom sections, maintenance checklist, repair/replacement comparison, FAQs/schema, and Photo 6 |
| Emergency furnace repair | `/services/heating/emergency-furnace-repair` | Updated call-first layout, prominent safety guidance, homeowner checks, propane note, five FAQs/schema, and Photo 7 |
| Furnace installation & replacement | `/services/heating/furnace-installation` | Built; sizing, venting/shared chimney, airflow, fuel compatibility, six cost factors, seven-line estimate comparison, seven FAQs/schema |
| Furnace maintenance & tune-ups | `/services/heating/furnace-maintenance` | Built; seven-area check/meaning/follow-up table, findings, seasonal planning, owner care, warranty records, six FAQs/schema |
| Cooling hub | `/services/cooling` | Updated equipment, maintenance, smoke/filtration and incentive guidance, six FAQs/schema, and Photo 8 |
| Cold-climate heat-pump hub | `/services/heat-pumps/cold-climate` | Updated Great Falls-specific system options, fuel comparison, winter placement, maintenance/incentive guidance, six FAQs/schema, and Photo 10 |
| AC repair & upgrades | `/services/cooling/ac-repair` | Existing earlier page; next service page to revise and narrow to repair |
| Montana HVAC rebates | `/rebates/2026-montana-hvac-rebates` | Existing page; needs current-source reconciliation before launch |

Emergency furnace repair also includes revised mobile hero spacing to bring the safety warning into the first phone screen.

The homepage, About, Contact, Privacy, and Thank You routes remain. Contact/footer now show the owner-supplied address. They have not received a full new content/launch audit during this checkpoint.

### Content decisions to preserve

- Keep the writing plainspoken, helpful, and specific to how the work changes in Great Falls: Chinook warm-ups, deep freezes, smoke-related filter checks, shared venting in older homes, split-level airflow, and actual gas/propane choices.
- Local examples are illustrative; do not present them as completed customer jobs without evidence.
- No invented testimonials, case studies, credentials, proprietary technical protocols, competitor accusations, guaranteed savings, fixed fuel-changeover temperatures, or unconfirmed response times.
- Natural branding is approved. The installation page includes the owner-confirmed perspective that a replacement quote should explain the surrounding return air, venting, and any water heater sharing the chimney.
- Price ranges are intentionally deferred until the owner confirms actual prices and included scope. The installation page explains cost factors without dollar ranges.
- Link to authoritative sources beside the claims they support. Utility amounts, dates, and eligibility must come from the current applicable application; do not infer eligibility merely from location or a utility name.
- Keep air conditioning separate from smoke filtration. Standard ductless filters are not automatically fine-smoke filters.
- Model-specific service procedures and limits take precedence over generic amperage, resistance, pressure, vent-size, or maintenance-duration claims.
- FAQs use native disclosures. Their structured-data answers come from the same content as the visible answers. FAQ schema is descriptive, not a promised Google rich-result or AI-citation benefit.
- No `speakable`, fabricated coordinates, arbitrary service radius, or `llms.txt` attribution promises were added. External backlinks have not been created.

## Next work: finish the remaining service pages

Start by revising the existing AC repair page, then build the five remaining pages below. These are planned URLs, not live routes yet unless explicitly marked existing.

### Cooling hub: three focused subpages

| Page | Route | Work and distinct purpose |
| --- | --- | --- |
| **AC Repair** | `/services/cooling/ac-repair` — existing | Update the earlier copy; focus on warm air, icing, airflow/electrical symptoms, safe checks, and diagnostic decisions. Keep the URL; move detailed installation material to the new replacement page. Photo 9 is still a placeholder. |
| **AC Installation & Replacement** | `/services/cooling/ac-installation` — proposed | New central AC selection, sizing, upstairs comfort, electrical/ductwork scope, written estimates, and comparison with heat pumps. Avoid repeating the repair page. |
| **AC Maintenance & Coil Cleaning** | `/services/cooling/ac-maintenance` — proposed | Cottonwood buildup, manufacturer-approved condenser care, condensate drainage, filter/airflow checks, seasonal scheduling, and what requires a technician. |

### Heat-pump hub: three new subpages

Keep `/services/heat-pumps/cold-climate` as the existing hub. The following siblings under `/services/heat-pumps/` should link to that hub with clear breadcrumbs and contextual links.

| Page | Proposed route | Distinct purpose |
| --- | --- | --- |
| **Dual-Fuel Heat Pump Installation** | `/services/heat-pumps/dual-fuel` | Furnace compatibility, load/capacity versus economic balance points, actual gas/propane/electricity rates, control coordination, and installation scope. No universal changeover temperature. |
| **Ductless Mini-Split Installation** | `/services/heat-pumps/ductless-mini-splits` | Boiler/baseboard homes, additions, indoor-unit placement, closed-bedroom coverage, drainage, electrical work, and single/multi-zone choices. |
| **Heat Pump Repair & Maintenance** | `/services/heat-pumps/repair-maintenance` | Defrost versus abnormal icing, backup-heat use, controls, model-specific diagnosis, owner care, and professional maintenance. Do not imply every vapor plume is harmless. |

All-electric heat-pump planning stays on the hub for now. Add a separate page only when real customer needs and sufficient distinct content justify it.

### Integration checklist for each new page

- Keep one clear customer task per page; avoid rewriting the hub with a different title.
- Add an incoming contextual link from its hub and relevant sibling pages; provide useful return links.
- Add the route to `src/app/sitemap.ts`. Update hub offer-catalog destinations when a real subpage replaces an anchor or hub link.
- Use connected `WebPage`, `Service`, `BreadcrumbList`, and `FAQPage` schema; escape `<` in JSON-LD. Add `ImageObject` only when it accurately describes the real image.
- Use real photographs, factual alt text/captions, responsive sizing, lazy loading below the fold, and appropriate social-sharing metadata.
- Check phone/tablet/desktop layout, contained table scrolling, native FAQ interaction, request-form intent links, image delivery, and internal link destinations.
- Recheck the shared navigation when all children exist. The header/footer still use the original five service navigation entries; the new heating children are discoverable through contextual links. Do not add a long ungrouped menu automatically.

## Confirmed public business details

Maintain these centrally in `src/content/site.ts`:

- Business: **Great Falls Heating and Air LLC**
- Phone: **406-781-4027** / `+14067814027`
- Email: **GFheatingandair@icloud.com**
- Address: **108 Riverview B, Great Falls, MT 59404**
- Owner-supplied registration: **C1680325**

The address does not establish walk-in hours or a storefront policy. Hours, insurance/credential evidence, warranty terms, manufacturer affiliations, after-hours arrangements, and some operational claims still need final owner confirmation. The verification flags and launch checklist in `site.ts` contain older pending items; reconcile them with current evidence rather than treating every label as current.

Full sitewide `HVACBusiness` schema remains guarded by unverified hours/credentials. Updated service pages emit truthful page/service information with a minimal Organization provider while that gate remains closed. Identity/contact/address fields are included where verified. Do not bypass the full business-schema gate simply to clear a validator warning.

## Photography checkpoint

Original masters remain outside the public bundle in the owner’s Downloads folder. Optimized files live in `public/images/`; photos are not evidence of authorized dealer status or endorsement.

| Photo | Placement | Current public asset | Status |
| --- | --- | --- | --- |
| 01–05 | Homepage sections | Numbered placeholders | Still need suitable supplied photos |
| 06 | Heating hub; reused on furnace installation | `heating-furnace-installation.webp` | 1600×1200; embedded descriptions and owner-confirmed Great Falls locality metadata, no GPS coordinates |
| 07 | Emergency repair; reused on furnace maintenance | `emergency-furnace-repair-great-falls.webp` | 1600×1200; same locality treatment; dedicated 1200×630 social JPEG on emergency page |
| 08 | Cooling hub | `cooling-service-great-falls.webp` | 1280×960; descriptive metadata, alt/caption, dedicated social JPEG and image schema |
| 09 | AC repair | Placeholder | Needs a supplied condenser/diagnostic photo |
| 10 | Heat-pump hub | `cold-climate-heat-pump-installation.webp` | 1280×960; descriptive metadata, alt/caption, dedicated social JPEG and image schema |

No invented GPS coordinates or unconfirmed photo locations were added. Existing photo files can be reused where relevant; request a new actual maintenance/installation photo when one would improve the page. Reused photos on new pages do not yet have unique social cards.

Five tracked image files were already deleted in the working tree before this session’s edits: `ac-service.webp`, `furnace-diagnostic.webp`, `high-plains-montana.webp`, `home-exterior.webp`, and `winter-heat-pump.webp`. Those unrelated deletions are intentionally excluded from this checkpoint commit; they remain recoverable in Git. Do not stage or restore them without inspecting the intended change.

## Deferred form delivery — required before enabling real submissions

The owner explicitly deferred connecting the forms. Public contact details do **not** configure web-lead delivery.

- Production `POST /api/lead` intentionally returns **HTTP 503** because `src/lib/validation/rateLimit.ts` has only a development in-memory limiter.
- Development can simulate success; no message is sent in simulation mode. Do not present that as inbox-delivery proof.
- [ ] Implement a durable shared rate limiter without a bypass flag.
- [ ] Configure `EMAIL_PROVIDER_API_KEY`, `CONTACT_FROM_EMAIL` (verified sender), and `CONTACT_TO_EMAIL`; confirm the intended recipient.
- [ ] Test successful inbox delivery, provider failure, preserved form input, and failure/no-success-redirect behavior in an authorized staging environment.
- [ ] Before public launch, either finish delivery or clearly disable request-form entry points. Client-review builds currently retain the forms and their call-first notices.

Customer input is validated, email HTML escaped, body sizes limited, and payloads excluded from logs. Failed delivery must not redirect to Thank You. Provider acceptance/message ID alone does not prove inbox delivery.

## Remaining launch and client-review work

- [ ] Complete the service roadmap above.
- [ ] Reconcile `src/content/rebates.ts` and the rebate page with current primary sources. Differentiate Sun River air-source versus ground-source programs; verify former Energy West eligibility and current NorthWestern applications instead of copying a $450 claim or expired dates.
- [ ] Finish homepage/About copy and imagery; confirm any insurance, hours, payment, pricing, dispatch, manufacturer, and warranty claims sitewide.
- [ ] Add authentic reviews only after obtaining them and permission to use them. The heating page’s sample homeowner-proof block is commented out.
- [ ] Confirm final branding approvals. `Brand.tsx` currently uses the dimensional SVG logo supplied in the previous checkpoint; it is not the old generic temporary mark.
- [ ] Confirm privacy, analytics/consent, and retention disclosures before enabling real leads.
- [ ] Obtain actual price ranges and scope from the owner before adding them.
- [ ] Run deployed mobile performance/Lighthouse and Core Web Vitals checks; local layout/build checks are not measured production performance.
- [ ] Finish real-device, keyboard/screen-reader, zoom/reflow, and reduced-motion checks.
- [ ] Verify Search Console ownership/indexing, live canonical host, sitemap/robots access, and accurate GBP business/service details. No ranking or AI-attribution guarantee is implied.

### Post-push verification

For the exact pushed commit, verify Vercel/GitHub deployment success, record its deployment URL, and inspect the rendered new routes and optimized images. A READY state or HTTP 200 alone is insufficient. Check the client-review deployment at phone/tablet/desktop widths and confirm contact links, native FAQs, canonical/schema output, and form behavior appropriate to the unfinished delivery state. Do not submit a real lead or turn on email as part of a content checkpoint.

## Development and validation

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Review `.env.example`; keep `.env.local` and credentials out of Git.

```sh
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

During this session, the updated pages were checked at approximately 390, 768, and 1440 CSS pixels: no document-level horizontal overflow; wide comparison tables scroll within labeled regions; FAQ disclosures expand. Checks also covered matching FAQ schema, connected entity references, citations, real image loading, form intent links, incoming internal links, and sitemap entries. Emergency mobile spacing was tightened so its safety warning appears sooner.

Build/typecheck/lint and all 22 existing tests passed during the content work. Rerun the commands above before each checkpoint push. Existing tests cover configuration, validation, delivery outcomes, and rate-limit safeguards; they do not prove live email delivery or indexing. Screenshots generated in `/tmp` during the chat are temporary and are not a durable handoff artifact.

## Code map for resuming

- `src/app/services/heating/page.tsx`, `HeatingFaq.tsx`, `schema.ts`: heating hub and synchronized content/schema; child routes each have `page.tsx`, content, and scoped CSS.
- `src/app/services/cooling/`: updated hub/content/CSS; existing `ac-repair/` still needs revision.
- `src/app/services/heat-pumps/cold-climate/`: updated hub/content/CSS; future siblings are listed above.
- `src/app/sitemap.ts`: explicit public route list.
- `src/content/site.ts`: shared identity/contact/address, verification flags, and older launch checklist.
- `src/content/services.ts`: original service registry/navigation; some old hub summaries remain, so inspect consumers before updating broadly.
- `src/lib/schema/jsonLd.ts`: shared schema helpers and full-business verification gate.
- `src/components/sections/FinalDarkCTA.tsx`: defaults to estimate; accepts `requestHref`/`requestLabel` for maintenance-specific requests.
- `src/components/ui/Breadcrumbs.tsx`: optional schema ID connects breadcrumbs to page graphs.
- `src/components/ui/PhotoPlaceholder.tsx`: renders supplied image when `src` is present, numbered placeholder otherwise.
- `src/components/forms/LeadForm.tsx`, `src/app/api/lead/route.ts`, `src/lib/email/`, `src/lib/validation/`: deferred real-lead delivery work.
