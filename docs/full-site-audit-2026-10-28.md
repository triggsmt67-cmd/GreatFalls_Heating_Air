# Great Falls Heating and Air prelaunch website audit

October 28, 2026. Repository: `triggsmt67-cmd/GreatFalls_Heating_Air`, branch `main`, HEAD `cbb68e2`, including the current uncommitted About, footer, service-area, and sitemap work.

**Current follow-up status:** the street address has been removed from shared configuration, schema code, README guidance, and the rebuilt browser files. The privacy page has been cleaned up and dated October 28, 2026. All 26 tests and the production build pass. Resend integration and final .com domain verification are deferred at Trevor’s request. The original audit findings below remain as evidence; design recommendations have not yet been implemented. A rebuild is unnecessary.

The initial audit preserved website source. The subsequent address and privacy repairs are recorded in `address-privacy-followup.json`. Evidence is in [the dated audit folder](audits/2026-10-28/).

## Scope and checks

The current production build was served locally on port 3002 to avoid confusing development simulations with production behavior. The user's development server remains on port 3001.

| Check | Result |
| --- | --- |
| Public pages | All 18 return HTTP 200 |
| Confirmation page | `/thank-you` returns 200, is noindex, and is excluded from the XML sitemap |
| Internal link destinations | 23 unique path/query destinations tested; no broken destinations |
| Linked assets | 42 unique asset requests tested; no missing assets |
| Internal anchors | No missing target IDs found |
| Missing route behavior | Deliberately nonexistent route returns a real 404 |
| External references | 70 unique URLs checked. 66 returned HTTP 200 automatically; four loaded correctly in a normal browser after automated 403/404 responses |
| Page structure | Every page has one H1, one main landmark, one canonical, and a description |
| JSON-LD | All emitted blocks parse successfully; 95 FAQ questions and answers match page content after normalization |
| Duplicate IDs and image alt attributes | No duplicate IDs or missing image alt attributes found in page HTML; decorative images intentionally use empty alt |
| Responsive layout | All 19 page routes rendered and measured at 390, 768, and 1440 CSS pixels; no document-level horizontal overflow |
| Images | No failed eager images in the recorded page measurements; linked image responses returned successfully |
| Functional checks | Desktop services menu, mobile menu, Escape/focus return, emergency form warning, inline validation, and native FAQ disclosure exercised |
| Code checks | Lint, TypeScript, all 25 tests, and production build passed |

The four external checker warnings were the FTC warranty article, Angi furnace costs, CPSC heating safety, and HomeAdvisor AC repair costs. Each article loaded in a normal browser. These are not confirmed dead links. Detailed automated results are retained in `crawl.json`, with browser follow-up in `external-browser.json`.

## Findings that affect launch

### Deferred Production form integration

`src/lib/validation/rateLimit.ts:11` unconditionally returns `unavailable` in production. A harmless empty POST to the actual local production endpoint returned HTTP 503 and `Online requests are currently unavailable. Please call 406-781-4027.` No email was sent.

This is an intentional safeguard, but the site currently presents working-looking estimate and service-request forms. A visitor can fill them out and fail at the final step. Email provider configuration and real mailbox receipt remain unverified; development simulation does not establish delivery.

**Required outcome:** implement the shared production rate limiter, configure the authorized email environment, and verify an authorized submission through mailbox receipt and the confirmation screen. Keep existing protections. If launch must occur first, explicitly offer a phone/email-only experience until online requests are operational.

Evidence: [production response](audits/2026-10-28/production-form.json). Related source: `src/app/api/lead/route.ts`, `src/lib/email/adapter.ts`.

### Resolved locally Street address in downloadable code

**Follow-up verification:** 348 generated files, all 19 production page responses, and 10 served JavaScript files were checked with no street-address or ZIP matches. The old development cache was cleared before restarting the dev server. A regression test prevents private address fields from returning to shared configuration.

Original finding: The earlier footer/contact change removed the address from visible page output and JSON-LD. It did not remove it from the browser bundle. The production crawl confirmed the address in a publicly served JavaScript chunk.

`src/content/site.ts:17` still includes it in the shared `siteConfig` object, and client components import that object. `publishStreetAddress: false` governs rendering, not what is bundled for the browser.

**Required outcome:** remove the street address and ZIP from shared browser configuration, or move private/internal information into a server-only module and pass client components only the public fields they need. Rebuild and check served JavaScript as well as HTML and JSON-LD. Update the launch checklist's older “public business address” entry to reflect the service-area decision.

Evidence: [served bundle check](audits/2026-10-28/address-bundle-check.json). No address is repeated in this report.

### Resolved locally Privacy page cleanup

**Follow-up:** removed the draft notice and prelaunch date, simplified the policy around current website behavior, and verified the desktop and mobile layouts. The form-delivery wording remains conditional until Resend is connected.

Original finding: The production privacy page displayed “Pre-Launch Notice for Legal Review” and “Effective Date: Pre-Launch First Pass.” It also describes email delivery conditionally and contains forward-looking analytics wording.

**Required outcome:** finish review against the actual launch configuration, use an actual effective date, and publish the final approved version. Removing the notice alone would not complete that work. This finding concerns the page's visible draft status; this audit is not a legal opinion.

Evidence: [privacy screenshot](audits/2026-10-28/privacy-desktop.png). Source: `src/app/privacy/page.tsx:25`.

### Deferred Final domain and deployment verification

`https://great-falls-heating-air.vercel.app/` returned HTTP 200. The intended canonical host, `https://greatfallsheatingandair.com`, timed out from the audit environment. The .com and www names resolve, but a successful response and redirect policy were not established. This does not establish the reason for the timeout or prove universal unavailability.

The Vercel connector could not inspect this project's domain settings because its current connection lacks access to the project team. No account or hosting changes were made. Today's uncommitted changes are local and are not established as deployed by the older review URL.

**Required outcome:** verify project domain assignment, DNS, HTTPS, one preferred host, HTTP/www redirects, final deployed content, sitemap and robots delivery, and matching production canonicals. Then verify Search Console ownership and submit the final sitemap. Check actual bot access separately from ordinary HTTP access.

## Readability and usability repairs

### P2 Mobile text deserves a modest increase

Desktop body text is generally 15px; measured mobile body text is 14px, while form inputs are already 16px. Many supporting notices, captions, and source labels are 12–13px. The typography is coherent, but sustained reading on a phone takes more effort than necessary.

Raise primary mobile body text toward 16px and keep line height around 1.65–1.8. Use smaller text for secondary references, rather than key service details or next steps. Keep the current font family and headline character. Apply changes to shared tokens before adding page-specific overrides.

This is a design recommendation, not a claim that 14px text automatically violates an accessibility criterion.

### P2 Darken blue text slightly

Measured `#0877b5` text on the cream background has approximately 4.47:1 contrast; on some light blue surfaces it is approximately 4.34:1. Small text requires at least 4.5:1 under WCAG AA. A modestly darker shared link/eyebrow color would repair this without changing the brand direction.

The initial automated contrast scan cannot resolve pseudo-element backgrounds, so its apparent homepage hero failures were excluded from this conclusion. The visible hero uses a dark background. The confirmed finding is the solid-background blue text, not white text on the hero.

Source: [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Evidence: computed colors and text sizes in `browser-desktop.json`, `browser-390.json`, and `browser-768.json`. `readability.json` is an automated candidate list, not a final accessibility verdict.

### P2 Move the form up on mobile

On the mobile Contact page, the form begins approximately 1,394px from the top of the initial viewport, after the heading and all contact/sidebar information. Visitors arriving from “Request an estimate” must scroll through a substantial introduction before entering details.

Place the form before the longer service-area sidebar on mobile, while keeping the phone number and urgent-help guidance prominent. An explicit form anchor or “Jump to request form” link would also help. Preserve field labels, error summaries, retained input, and emergency messaging, which worked well in testing.

Both phone and email are currently mandatory even when a visitor selects one preferred contact method. Consider requiring the selected method and making the other optional, after confirming operational needs.

Evidence: [mobile validation screenshot](audits/2026-10-28/contact-validation-mobile.png). Sources: `src/app/contact/page.tsx`, `src/components/forms/LeadForm.tsx`.

### P2 Repair the mobile homepage heading space

The live rendered heading becomes **“What does yourhome need?”** on mobile. `src/app/page.tsx:78` relies on a `<br />` between `your` and `home`; `src/app/premium.css:735` hides that break on smaller screens. There is no literal intervening space.

Use real whitespace independent of the visual line break. Recheck the desktop and mobile result. This is a specific rendering defect, not a proposed copy rewrite.

Evidence: [mobile homepage](audits/2026-10-28/home-390.png).

### P2 Replace the default favicon

The current `/favicon.ico` displays the Vercel triangle. Replace it with a legible small-format brand mark derived from the approved logo. Test the actual 16px and 32px result; the full detailed logo will likely be too intricate at those sizes.

Evidence: [current favicon](audits/2026-10-28/favicon-default.png). Source: `src/app/favicon.ico`.

## Make the site more specific without rebuilding

The strongest existing devices are the custom neighborhood footer, the restrained cream/ink palette, the HVAC icon system, and diagrams that adapt into readable mobile lists. Keep them.

The largest missing ingredient is **Robert's visible presence and documented work**. Add a real owner portrait to About and a compact owner introduction on the homepage. Use verified project photos with concise captions describing the problem, the work, and the observed result. Do not imply a generic equipment image documents a particular case unless that association is confirmed.

The heat-pump retrofit story already has useful firsthand detail. Preserve the distinction between its recorded cooling startup measurement and heating savings that remain unmeasured. Two or three similarly documented examples would do more for differentiation than extra decorative effects.

Across service pages, preserve the consistent structure but introduce a small, useful point of variation: a documented repair decision, a short owner explanation, a specific installation detail, or a task-appropriate diagram. AC installation and AC maintenance currently repeat the same outdoor-condenser photo; a verified maintenance image would distinguish those pages immediately.

Keep the approved footer and discreet TruePath credit. Facebook and Instagram are intentionally inactive until profile URLs are supplied. Before public launch, either connect those profiles or decide whether to hide the inactive controls temporarily. They are not broken URLs, but their current appearance suggests links.

## Content depth and page priorities

There is no obvious thin service-page problem. The 12 service pages contain roughly 1,900–2,400 main-content words each, including FAQs. They answer different repair, installation, and maintenance questions. About and Contact are shorter because they serve different purposes; padding them to a word target would not improve them. Google explicitly recommends useful, original, people-first content rather than writing to an assumed preferred word count: [Google's guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

The practical issue is length and scanning. At 390px, service pages measure roughly 9,300–12,300px tall, including their shared footer and collapsed FAQ questions. Add compact section links to the longer guides and a brief service summary near the opening. Retain the deeper explanations below. Avoid deleting safety guidance or required caveats simply to shorten a page.

Counts below are approximate main-content text counts, excluding navigation and the site footer. They include source labels, FAQ content, and shared calls to action and are not SEO scores.

| Page | Words | Assessment and best next improvement |
| --- | ---: | --- |
| Home | 1,197 | Strong overview and local voice. Fix the mobile heading space; add a compact owner/proof introduction. Make the route to service requests as clear as the rebate resource. |
| About | 270 | Appropriate depth for the supplied owner introduction. Add Robert's real portrait and verified supporting detail, not filler. |
| Contact | 202 | Information is sufficient. Production form delivery and mobile form order are the priorities. |
| Heating | 2,066 | Useful equipment/symptom guidance. Add quick section navigation and reduce repetitive presentation between overview and dedicated guides. |
| Emergency furnace repair | 1,926 | Strong call-first hierarchy and prominent hazard instructions. Keep emergency calling dominant. |
| Furnace installation | 2,414 | Detailed sizing, venting, quote, and installation guidance. One of the longest pages; add a quote checklist summary and section links. |
| Furnace maintenance | 2,044 | Good inspection-versus-homeowner-care distinction. Summarize included work and separate optional extras using owner-confirmed scope. |
| Cooling | 2,080 | Good local cottonwood/smoke context. Consider a clearer repair/maintenance/replacement selector before the long guide. |
| AC repair | 2,310 | Diagnostic diagram is a strong custom feature, including its mobile list alternative. Add quick links to symptoms, safe checks, repair decisions, and FAQs. |
| AC installation | 1,983 | Substantial and purpose-specific. A confirmed installation example would add more value than additional general text. |
| AC maintenance | 2,025 | Useful seasonal guidance. Use a distinct verified maintenance image instead of repeating the installation photo. |
| Cold-climate heat pumps | 2,105 | Strong equipment/backup-plan framing. Shorten the opening headline or adjust its mobile balance; summarize fit criteria before deeper guidance. |
| Heat-pump installation | 2,244 | Firsthand retrofit example is valuable. Clearly distinguish the case's observed results from illustrative imagery and future heating performance. Add section links. |
| Ductless mini-splits | 2,131 | Good room/door/zone distinctions. Tighten the long heading while preserving its specific promise; add a verified indoor-unit placement example if available. |
| Heat-pump repair and maintenance | 2,224 | Clear diagnostic-versus-maintenance scope. Surface a short “call for repair / plan maintenance” summary. |
| Rebate guide | 1,684 | Strongly sourced and purpose-specific. Keep important eligibility conditions visible; preserve the existing disclaimer. |
| Privacy | 423 | Draft status is the issue. Finalize the actual operating practices and effective date before launch. |
| HTML sitemap | 67 | Appropriate utility page; no need for filler. |
| Thank you | 62 | Appropriate confirmation length and noindex handling. Real delivery must precede a real success confirmation. |

## Search and source checks

The XML and HTML sitemaps contain the same 18 public pages. Canonicals agree with those sitemap URLs, queries are removed from canonical metadata, and the robots rules permit the named search crawlers while excluding API paths. A deliberately missing route returns HTTP 404, which is correct behavior; the goal is no broken links to nonexistent pages.

Rebate source spot checks still support the listed NorthWestern heat-pump amount and published water-heater offer, Sun River's air-source rate, the IRS credit end date, and Montana DEQ's pending program status. The linked ground-source PDF returned successfully during the link crawl; its detailed terms were not independently re-certified in this pass. Published pages do not confirm current funding or an individual customer's eligibility. Official references:

- [NorthWestern existing-home application](https://www.northwesternenergy.com/docs/default-source/default-document-library/billing-and-payment/e-programs/e-rebate-electric-existing-home.pdf)
- [NorthWestern water-heater program](https://www.northwesternenergy.com/billing-payment/ways-to-save/rebates-incentives/heat-pump-water-heater-program)
- [Sun River air-source program](https://sunriverelectric.coop/air-source-heat-pumps)
- [IRS credit guidance](https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit)
- [Montana DEQ program status](https://deq.mt.gov/energy/Programs/efficiency)

Structured data is not a substitute for verified business facts. The existing conservative business-schema guard should not be bypassed to invent credentials, warranties, reviews, or ratings. Synchronize the stale internal owner/checklist placeholders with approved information as part of launch housekeeping.

## Performance and measurement limits

The footer artwork source is approximately 1.9MB, but it is lazy-loaded through Next's image optimizer. A tested mobile-selected image request with browser-style WebP support returned approximately 111KB. The source file size alone is not evidence that every visitor downloads 1.9MB. Further image compression is secondary to the launch blockers and readable content.

The production build and local asset checks passed. These are not deployed Core Web Vitals or Lighthouse scores. Measure the final domain on mobile after deployment and check real image sizes, loading behavior, LCP, CLS, and interaction responsiveness there.

The analytics adapter currently dispatches events and can use an existing dataLayer; a complete analytics installation and broad phone-click tracking were not established. Only the sticky mobile phone control is visibly wired to `phone_click` in source. Decide the desired measurement setup explicitly before adding third-party scripts.

## Recommended order

1. Repair production lead delivery and verify a real authorized delivery, or choose a clearly stated call/email-only launch.
2. Completed locally: remove the address from browser-delivered configuration and rebuild.
3. Privacy cleanup completed locally. Final domain/deployment verification is deferred until the .com move.
4. Repair the mobile heading space, favicon, and blue-text contrast; improve mobile form order and primary body text sizes.
5. Add Robert's photo and a small amount of verified project proof, plus quick navigation for long service guides.
6. Deploy, repeat final-host links/canonicals/robots/form checks, measure mobile performance, and then submit the sitemap in Search Console.

**Address removal and privacy cleanup are complete locally. Resend and final-host verification remain intentionally deferred.** The clean internal crawl is a strong baseline, not a claim of guaranteed Google indexing or complete accessibility certification.

## Design follow-up completed October 28, 2026

The authorized design repairs are complete locally: 16px primary body text, stronger blue-text contrast, corrected mobile heading spacing, a form-first mobile/tablet contact layout with the urgent phone link near the opening, shorter heat-pump headlines, and compact section navigation on all 12 service guides. The homepage now uses Robert's approved introduction and statement of purpose within the existing layout. A real owner portrait and additional documented project photos still require supplied photographs.

The supplied flame/snowflake emblem replaces the default favicon. The ICO contains 16px, 32px, and 48px frames (8.2KB), with separate 96px PNG and 180px Apple touch icons. The original upload is unchanged.

At the user's request, the HTML sitemap presentation has been removed. The footer now has one discreet Sitemap link to `/sitemap.xml`; `/sitemap` redirects there with HTTP 308. The XML sitemap contains 17 canonical public pages. Earlier counts and screenshots in this report describe the original audit baseline.

Verification passed: lint, TypeScript, 27 tests, production build, all 18 page responses including the confirmation page, all 44 guide anchors, and 57 internal link/asset destinations. All 54 page/viewport combinations at 390px, 768px, and 1440px had one H1, 16px body text, and no horizontal overflow. The private-address regression check also passed across 436 compiled files. Evidence: `audits/2026-10-28/design-followup.json`, `design-viewports.json`, and the `design-*.png` screenshots. Resend and final-domain verification remain deferred.
