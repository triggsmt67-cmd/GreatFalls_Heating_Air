# Great Falls Heating and Air LLC

## Checkpoint — October 19, 2026

This is the current client-review website, not a completed public-launch handoff. The owner requested this checkpoint be committed and pushed to `main` so the existing Vercel Git integration can build a fresh client-review version. That branch is connected to Vercel’s **Production** environment; the environment name does not mean form delivery, all content, or launch checks are complete.

- Repository: `triggsmt67-cmd/GreatFalls_Heating_Air`
- Vercel team/project: `trevor-riggs-projects / great-falls-heating-air`
- Local checkout: `/Users/trevorriggs/Desktop/GF Heating And AIr`
- Read `AGENTS.md` before editing. This checkout uses Next.js 16.3.6; consult the relevant guide under `node_modules/next/dist/docs/` rather than assuming older Next.js conventions.
- No database work is required for these content pages. Do not enable or bypass production form safeguards as part of content work.

## Evening client-review handoff — October 19, 2026

This checkpoint completes the planned **three service hubs and nine subpages**. It adds the remaining cooling and heat-pump pages, expands AC repair, introduces lightweight responsive diagrams, and gives each page a distinct decision-making perspective. New routes have incoming internal links, sitemap entries, citations, and FAQs generated from the same answer content as their schema.

- **Review URL:** https://great-falls-heating-air.vercel.app/ — inspect the Vercel deployment for the pushed commit before calling the new version live.
- **Push target:** `origin/main` in `triggsmt67-cmd/GreatFalls_Heating_Air`; the existing Git integration rebuilds the connected Vercel Production target for client review.
- **New since the previous checkpoint:** AC installation, AC maintenance, heat pump installation/replacement, ductless mini-split installation, and heat pump repair/maintenance. AC repair is substantially expanded.
- **Confirmed firsthand account:** the heat pump installation page includes the user-approved Great Falls retrofit story. The reported 19°F startup coil temperature drop documents cooling; heating-season savings remain unmeasured. Photo 10 is not confirmed as that job’s photo.
- **Diagrams:** AC diagnostic guide, AC maintenance system map, dual-fuel control plan, ductless room-coverage floor plan (separate readable phone layout), and heat-pump operating-pattern guide. They are server-rendered with text/SVG and add no client-side interaction bundle.
- **Not finished:** real form delivery, owner/credential and operating-policy confirmations, authentic reviews, remaining dedicated imagery/job evidence, final headline review, and deployed accessibility/performance/indexing checks. Details and checklists below are the next-session starting point.
- **Tonight’s client review:** assess the page perspectives, service descriptions, supplied job story, photo choices, and contact/address accuracy. Use the phone/email links for inquiries; request forms are not connected for real delivery.

### Resume in this order

1. Collect owner feedback and confirm service scope, public owner details, credentials, hours/dispatch, payment, and warranty statements before strengthening any claims.
2. Add approved reviews and real job evidence; obtain dedicated indoor ductless and maintenance photos plus homepage photos 01–05. Keep reused equipment photos separate from claims about a particular job.
3. Revisit the three deferred H1 suggestions under **Pre-publication headline review**. Price ranges stay out until actual prices and scope are confirmed.
4. Finish and test durable rate limiting and email delivery in authorized staging, or disable request-form entry points before public launch. Do not treat a simulated success as delivery.
5. Verify the deployed final domain, canonical URLs, robots/sitemap, mobile performance and accessibility, then Search Console/GBP details and indexing. A client-review deployment is not a completed launch signoff.

## Where we are

All three service hubs are updated. All three planned heating subpages now exist. The AC repair subpage is expanded with diagnostic guidance, safe checks, a decision table, citations, and six matching FAQs/schema; supplied Photo 9 is optimized and placed. AC installation is now built with a room-comfort and written-scope perspective, six matching FAQs/schema, citations, and incoming hub/repair links. All three cooling subpages now exist. All three heat-pump subpages now exist as well. The planned service-page roadmap is complete for local review; launch, form delivery, and owner-evidence tasks remain.

| Page | Route | Current status |
| --- | --- | --- |
| Heating hub | `/services/heating` | Updated local copy, equipment and symptom sections, maintenance checklist, repair/replacement comparison, FAQs/schema, and Photo 6 |
| Emergency furnace repair | `/services/heating/emergency-furnace-repair` | Updated call-first layout, prominent safety guidance, homeowner checks, propane note, five FAQs/schema, and Photo 7 |
| Furnace installation & replacement | `/services/heating/furnace-installation` | Built; sizing, venting/shared chimney, airflow, fuel compatibility, six cost factors, seven-line estimate comparison, seven FAQs/schema |
| Furnace maintenance & tune-ups | `/services/heating/furnace-maintenance` | Built; seven-area check/meaning/follow-up table, findings, seasonal planning, owner care, warranty records, six FAQs/schema |
| Cooling hub | `/services/cooling` | Updated equipment, maintenance, smoke/filtration and incentive guidance, six FAQs/schema, and Photo 8 |
| Cold-climate heat-pump hub | `/services/heat-pumps/cold-climate` | Updated Great Falls-specific system options, fuel comparison, winter placement, maintenance/incentive guidance, six FAQs/schema, and the supplied dark-sided-home Mitsubishi heat pump photo (1280×960 WebP, social JPEG, embedded XMP, and matching image metadata) |
| AC repair & diagnostics | `/services/cooling/ac-repair` | Expanded repair page; cause/evidence/operation-check perspective, safe icing guidance, four symptom groups, homeowner observations, decision table, six FAQs/schema, and supplied Photo 9 |
| AC installation & replacement | `/services/cooling/ac-installation` | Built; room-comfort perspective, sizing/compatibility, scope checklist, cost factors without prices, six FAQs/schema, citations, optimized Photo 9 reused, and hub/repair incoming links |
| AC maintenance & seasonal tune-ups | `/services/cooling/ac-maintenance` | Built; seasonal condition perspective, seven-area checklist, verified city water context, owner care, six FAQs/schema, citations, and hub/sibling links; optimized Photo 9 reused; dedicated maintenance job photo pending |
| Heat pump installation & replacement | `/services/heat-pumps/heat-pump-installation` | Built; complete installation and cold-weather plan, six FAQs/schema, Photo 10, dual-fuel diagram, citations, and hub/sibling links |
| Ductless mini-split installation | `/services/heat-pumps/ductless-mini-splits` | Built; room coverage, indoor placement, piping/drainage, six FAQs/schema, citations, and an accessible responsive floor plan; real case/indoor photo pending |
| Heat pump repair & maintenance | `/services/heat-pumps/repair-maintenance` | Built; operating-pattern perspective, safety and observation diagram, six FAQs/schema, citations, Photo 10, maintenance checklist, and hub/sibling links |
| Montana HVAC rebates | `/rebates/2026-montana-hvac-rebates` | Account/project perspective and official-source reconciliation updated October 19; recheck before launch |

Emergency furnace repair also includes revised mobile hero spacing to bring the safety warning into the first phone screen.

Homepage and About now explain the shared service approach; the owner introduction remains pending. Contact/footer show the owner-supplied address. Contact, Privacy, and Thank You have not received a full new content/launch audit during this checkpoint.

### Content decisions to preserve

- Keep the writing plainspoken, helpful, and specific to how the work changes in Great Falls: Chinook warm-ups, deep freezes, smoke-related filter checks, shared venting in older homes, split-level airflow, and actual gas/propane choices.
- Local planning examples are illustrative except the expressly user-supplied and approved Great Falls heat-pump retrofit account. Do not turn other examples into completed-job claims without evidence.
- No invented testimonials, case studies, credentials, proprietary technical protocols, competitor accusations, guaranteed savings, fixed fuel-changeover temperatures, or unconfirmed response times.
- Natural branding is approved. The installation page includes the owner-confirmed perspective that a replacement quote should explain the surrounding return air, venting, and any water heater sharing the chimney.
- Price ranges are intentionally deferred until the owner confirms actual prices and included scope. The installation page explains cost factors without dollar ranges.
- Link to authoritative sources beside the claims they support. Utility amounts, dates, and eligibility must come from the current applicable application; do not infer eligibility merely from location or a utility name.
- Keep air conditioning separate from smoke filtration. Standard ductless filters are not automatically fine-smoke filters.
- Model-specific service procedures and limits take precedence over generic amperage, resistance, pressure, vent-size, or maintenance-duration claims.
- FAQs use native disclosures. Their structured-data answers come from the same content as the visible answers. FAQ schema is descriptive, not a promised Google rich-result or AI-citation benefit.
- No `speakable`, fabricated coordinates, arbitrary service radius, or `llms.txt` attribution promises were added. External backlinks have not been created.

## Service-page roadmap and remaining launch work

### Perspective and local-example update — October 19, 2026

The current local copy gives each completed page a different decision to help with:

| Page | Perspective to preserve |
| --- | --- |
| Homepage / About | Understand the house, explain the recommendation, and make the proposed work clear |
| Heating hub | Give a repair a fair assessment using the actual fault, condition, repair history, and parts availability |
| Emergency furnace repair | An urgent problem still deserves explained findings, costs, and next steps if parts are unavailable |
| Furnace installation | The whole system and the intended comfort improvements belong in the proposal |
| Furnace maintenance | A useful visit connects checks to findings and a next decision |
| Cooling hub | Assess comfort in the rooms people use, alongside airflow and suitable smoke filtration |
| AC repair | Connect operating tests to the fault before choosing the repair |
| AC installation | Name the rooms to cool, establish whether the house can support the system, and explain the complete written scope |
| AC maintenance | Connect seasonal exposure and actual condition to cleaning, checks, findings, and follow-up |
| Heat pumps | Compare installed scope, actual fuel costs, and the cold-weather plan; keeping equipment or standard AC can also merit consideration |
| Heat pump installation | Explain what stays, what changes, and how the completed system heats the home in cold weather |
| Ductless mini-splits | Start with rooms and normal door positions; agree on coverage, visible routes, and service access before choosing head count |
| Heat pump repair/maintenance | Distinguish operating context from persistent problems, then connect test findings to work and follow-up |
| Rebates | Keep the full project price visible and verify incentives separately |

The heating hub no longer uses the unconfirmed $150 ignitor example, 30% replacement threshold, flat-rate/complimentary promises, daily-call claim, or a single-check safety assurance. Payment, insurance, dispatch, and pricing details still need direct confirmation before stronger promises are added.

Location examples now include Riverview, Skyline, Valley View, Eagles Crossing, Prospect Heights, and the East Side Neighborhood Historic District. Treat these as illustrative planning situations. No location establishes a home's age, layout, fuel, HVAC fault, completed company job, or guaranteed service availability. Existing service-area lists remain separate from these examples.

Geography sources checked October 19, 2026:

- [City Neighborhood Council 3 brochure](https://greatfallsmt.net/sites/default/files/fileattachments/neighborhood_councils/page/263491/nc3_trifold_final_2024.pdf): names Riverview, Valley View, Skyline, and Eagles Crossing.
- [City resolution 9948](https://greatfallsmt.gov/DocumentCenter/View/10789/Resolution---09948): identifies the Prospect Heights Addition. The city's [2026 map book](https://www.greatfallsmt.gov/DocumentCenter/View/15644/Great-Falls-Map-Book-2026) also indexes Prospect Heights; the web reader could not open that large PDF, so use the readable resolution as the naming evidence.
- [NPS 2016 National Register weekly list](https://www.nps.gov/subjects/nationalregister/upload/weekly-list-2016-national-register-of-historic-places.pdf): identifies the East Side Neighborhood Historic District in Great Falls, listed April 19, 2016.

### Evidence still needed: owner and real jobs

Do not publish invented examples or biographies. Owner identity/background and other job accounts remain pending. The heat pump installation page now includes the user-supplied Great Falls retrofit account, approved for publication October 19. It reports startup cooling measurements without claiming measured heating savings; Photo 10 has not been identified as that job. Source comments identify suitable future insertion points for other verified accounts.

- [ ] Owner: approved public name, introduction, relevant background, and their own explanation of the service approach. Keep the existing company-history verification gate closed until evidence is approved.
- [ ] Heating repair: actual fault, test findings, repair/replacement reasoning, and outcome.
- [ ] Emergency repair: symptoms, diagnosis, parts constraints, and actual resolution without inventing response times.
- [ ] Installation: original concern, measured/specified scope, surrounding system changes, and handoff.
- [ ] Maintenance: redacted dated service record with checks, available readings, findings, and recommendations.
- [ ] Cooling / AC repair: observed comfort or operating problem, relevant tests, chosen work, and documented outcome.
- [ ] Heat pump: existing fuel, exact equipment, documented comparison assumptions, backup plan, and clearly distinguished projected versus measured results.
- [ ] For every example: confirm location accuracy, photo rights, permission to publish, and removal of addresses, account details, serial numbers, and other identifying information where needed.

Rebate sources were rechecked in this pass. The current NorthWestern electric existing-home form supports the published $450 incentive with account/equipment/timing requirements; Sun River requires approval before installation and distinguishes air-source and ground-source amounts. Water-heater rules and DEQ's not-yet-available status were reconciled with official pages. Recheck all programs before launch or a future dated update.

The AC repair content and supplied Photo 9 are complete for review. It now includes a server-rendered diagnostic diagram: inline SVG layout and five labels on desktop, a connected readable list on phones, with no added client JavaScript or image request. `DiagnosticDiagram.tsx` and its scoped CSS live in `ac-repair/`. AC installation, AC maintenance, and heat pump installation/replacement are also complete for local review. Ductless mini-split installation is also built. Heat pump repair/maintenance is now built as well. All service routes listed below exist locally; remaining work is evidence collection and launch verification.

### Cooling hub: three focused subpages

| Page | Route | Work and distinct purpose |
| --- | --- | --- |
| **AC Repair** | `/services/cooling/ac-repair` — existing | Expanded October 19: diagnostic viewpoint, icing/safety panel, four symptom groups, safe homeowner checks, explained findings, repair comparison, six FAQs from the same source as schema, contextual Carrier/EPA citations, and cooling/heat-pump/rebate links. Riverview and Sand Coulee examples are illustrative, with no claims about neighborhood housing types or completed jobs. Photo 9 now has a 1200×900 WebP, 1200×630 social JPEG, factual alt/caption, descriptive embedded XMP, and connected ImageObject. No technician, repair event, manufacturer, location, GPS, or job outcome is inferred from the photo. Detailed installation scope is on the completed AC installation page. |
| **AC Installation & Replacement** | `/services/cooling/ac-installation` — existing | Built October 19: intended room comfort, three installation paths, sizing/compatibility, cost factors without prices, seven-line written scope, refrigerant inventory exception, heat-pump comparison, handoff, six matching FAQs/schema, ACCA/EPA/permit/utility citations, and sitemap. Reuses optimized Photo 9 with a factual condenser caption; no completed-job claim. Skyline Drive and Cascade situations are illustrative. Price ranges and real installation case/owner details remain pending confirmation. |
| **AC Maintenance & Coil Cleaning** | `/services/cooling/ac-maintenance` — existing | Built October 19: seasonal exposure and actual condition perspective, seven-area check/purpose/follow-up table, cottonwood and verified city water guidance, homeowner care, ductless and winter-care distinctions, service records, six matching FAQs/schema, citations, hub/sibling links, and sitemap. Reuses optimized Photo 9 with factual alt/caption, social metadata, and a connected ImageObject. A lightweight server-rendered diagram distinguishes outdoor coil care, indoor filtration, and condensate drainage. No dedicated maintenance job photo or technician event is implied. Actual included services and real job examples remain subject to owner confirmation. |

### Heat-pump hub: all three subpages completed for local review

Keep `/services/heat-pumps/cold-climate` as the existing hub. The following siblings under `/services/heat-pumps/` should link to that hub with clear breadcrumbs and contextual links.

| Page | Proposed route | Distinct purpose |
| --- | --- | --- |
| **Heat Pump Installation & Replacement** | `/services/heat-pumps/heat-pump-installation` — existing | Built October 19; replaces the proposed `/services/heat-pumps/dual-fuel` page (which was never created). Perspective: what stays, what changes, and how the finished system heats in cold weather. Includes a user-supplied and publication-approved Great Falls AC/furnace retrofit account (15-year-old failed AC, six-year-old furnace retained, 3-ton heat pump, piping/base/drainage/control changes, 19°F startup coil temperature drop; heating savings not yet measured), selection/electrical/placement/control guidance, seven-line scope checklist, handoff and verified utility guidance, six FAQs with matching schema, primary-source citations, optimized Photo 10 reused with factual metadata/ImageObject, a lightweight accessible dual-fuel control diagram, and incoming hub/AC/furnace links. No price range, heating-savings outcome, guaranteed panel capacity, fixed install time, or unverified credential promised. Photo 10 is not confirmed as the case-study job photo. |
| **Ductless Mini-Split Installation** | `/services/heat-pumps/ductless-mini-splits` — existing | Built October 19: room coverage before head count; illustrative Great Falls boiler-home planning example with verified Northside Residential Historic District naming; indoor styles, shared-capacity/mode questions, piping/drainage appearance, winter role, separate smoke filtration, six-line scope checklist, current utility citations, six visible FAQs from the same source as schema, hub/installation/maintenance incoming links, sitemap, and an original responsive SVG floor-plan diagram with text explanation. No actual customer case, indoor photo, fixed savings/noise/temperature promise, or unverified credential added. |
| **Heat Pump Repair & Maintenance** | `/services/heat-pumps/repair-maintenance` — existing | Built October 19: operating pattern before part selection; explicit danger-sign panel, defrost-context versus persistent-problem diagram, four symptom groups, backup-use context, safe homeowner observations, explained diagnostic findings, six-area maintenance/follow-up table, ductless and summer care, repair/replacement decisions, six matching FAQs/schema, manufacturer/EPA citations, factual optimized Photo 10 with social metadata/ImageObject, incoming hub/sibling links, and sitemap. Great Falls/Vaughn situations are illustrative. No actual repair outcome, fixed defrost timing, guaranteed parts/availability, universal backup setting, or failure-free maintenance claim. |

Detailed all-electric option comparison stays on the hub; the installation page briefly identifies its separate electrical and supplemental-heating requirements. Add a separate page only when real customer needs and sufficient distinct content justify it.

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
| 01–05 | Homepage sections | Existing temporary image slots/assets | Still need suitable supplied photos; pre-existing tracked deletions are excluded from this checkpoint |
| 06 | Heating hub; reused on furnace installation | `heating-furnace-installation.webp` | 1600×1200; embedded descriptions and owner-confirmed Great Falls locality metadata, no GPS coordinates |
| 07 | Emergency repair; reused on furnace maintenance | `emergency-furnace-repair-great-falls.webp` | 1600×1200; same locality treatment; dedicated 1200×630 social JPEG on emergency page |
| 08 | Cooling hub | `cooling-service-great-falls.webp` | 1280×960; descriptive metadata, alt/caption, dedicated social JPEG and image schema |
| 09 | AC repair, installation, and maintenance | `ac-repair-outdoor-condenser.webp` | 1200×900, 144,402 bytes; factual alt/caption, descriptive XMP without GPS, dedicated 1200×630 social JPEG (118,476 bytes), and image schema |
| 10 | Heat-pump hub, installation, and repair/maintenance | `cold-climate-heat-pump-installation.webp` | 1280×960; descriptive metadata, alt/caption, dedicated social JPEG and image schema |

No invented GPS coordinates or unconfirmed photo locations were added. Existing photo files can be reused where relevant; request a new actual maintenance/installation photo when one would improve the page. New pages reuse the supplied photo’s dedicated social JPEG where applicable; unique per-page social cards remain optional future work. The ductless page has an original floor plan but no dedicated indoor photo yet.

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

- [x] Complete the service roadmap above locally: three hubs and three subpages per hub. This is content/build completion, not a public-launch signoff.
- [ ] Recheck `src/content/rebates.ts` against current primary sources before launch. October 19 reconciliation confirmed the electric form's $450 amount and dates, clarified electric-account eligibility, Sun River approval timing, and separate air/ground-source programs. Do not extend an electric program to a former Energy West gas-only account.
- [ ] Finish homepage/About copy and imagery; confirm any insurance, hours, payment, pricing, dispatch, manufacturer, and warranty claims sitewide.
- [ ] Add authentic reviews only after obtaining them and permission to use them. The heating page’s sample homeowner-proof block is commented out.
- [ ] Confirm final branding approvals. `Brand.tsx` currently uses the dimensional SVG logo supplied in the previous checkpoint; it is not the old generic temporary mark.
- [ ] Confirm privacy, analytics/consent, and retention disclosures before enabling real leads.
- [ ] Obtain actual price ranges and scope from the owner before adding them.
- [ ] Run deployed mobile performance/Lighthouse and Core Web Vitals checks; local layout/build checks are not measured production performance.
- [ ] Finish real-device, keyboard/screen-reader, zoom/reflow, and reduced-motion checks.
- [ ] Verify Search Console ownership/indexing, live canonical host, sitemap/robots access, and accurate GBP business/service details. No ranking or AI-attribution guarantee is implied.

### Pre-publication headline review — deferred October 19, 2026

Revisit these suggestions before public launch and requesting Google indexing. They are pending editorial choices; the three page H1s below have not been changed.

- [ ] AC repair (`/services/cooling/ac-repair`): consider **“Understand what failed before approving an AC repair.”**
- [ ] Furnace replacement (`/services/heating/furnace-installation`): consider **“Furnace replacement planned around your whole home.”**
- [ ] Furnace maintenance (`/services/heating/furnace-maintenance`): consider **“Furnace tune-ups with clear checks and explained findings.”**
- [ ] Review the headline set for distinct service purposes and natural phrasing. Keep Great Falls in homepage/hub H1s where useful and retain clear local context in subpage eyebrows, introductions, and SEO titles; do not force the same location formula into every H1.

Already completed: AC installation now uses **“AC installation starts with the rooms you need to cool.”** Its local eyebrow and SEO title remain in place.

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
- `src/app/services/cooling/`: updated hub/content/CSS; `ac-repair/` has page/content/scoped CSS with connected WebPage/Service/BreadcrumbList/FAQPage schema. Photo 9 is placed with descriptive metadata, dedicated social image, and ImageObject; the original master remains unchanged in Downloads.
- `src/app/services/heat-pumps/`: updated `cold-climate/` hub plus completed `heat-pump-installation/`, `ductless-mini-splits/`, and `repair-maintenance/` siblings; each has content, page, scoped CSS, and its diagram component.
- `src/app/sitemap.ts`: explicit public route list.
- `src/content/site.ts`: shared identity/contact/address, verification flags, and older launch checklist.
- `src/content/services.ts`: original service registry/navigation; some old hub summaries remain, so inspect consumers before updating broadly.
- `src/lib/schema/jsonLd.ts`: shared schema helpers and full-business verification gate.
- `src/components/sections/FinalDarkCTA.tsx`: defaults to estimate; accepts `requestHref`/`requestLabel` for maintenance-specific requests.
- `src/components/ui/Breadcrumbs.tsx`: optional schema ID connects breadcrumbs to page graphs.
- `src/components/ui/PhotoPlaceholder.tsx`: renders supplied image when `src` is present, numbered placeholder otherwise.
- `src/components/forms/LeadForm.tsx`, `src/app/api/lead/route.ts`, `src/lib/email/`, `src/lib/validation/`: deferred real-lead delivery work.

### Image audit — October 19

Completed a local audit of images across 17 public pages. Repaired five missing homepage image paths, compressed their files by 37% combined, filled heating-page social/schema gaps, and verified embedded image titles/descriptions, alt text, dimensions, and responsive loading. See [image audit details](docs/image-audit.md). Included in the client-review update with the page-specific mobile CTAs and form follow-up copy. Validate the resulting Vercel deployment after pushing; email delivery setup and the remaining public-launch tasks are still separate.
