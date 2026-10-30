# Final performance and accessibility audit — October 30, 2026

Site: https://www.greatfallsheatingandair.com/

Verified production source: `6ce0b8ef9819f60952d6d8a67a5d0ad46832a8ab`, deployment `dpl_YvQj6Mr5v7mmt2MSqVFvsc7G2qM5` (READY). Fixes are in `11ae45e` and `6ce0b8e`.

## Fixes deployed

- Darkened breadcrumb text from slate-500 to slate-600, and its hover color. The previous Home breadcrumb had 4.37:1 contrast against the cream background; the new normal/hover colors have approximately 6.96:1 and 6.21:1.
- Let the footer wordmark derive its accessible name from the visible business name, with a hidden “home” suffix. Updated the line styling to preserve its appearance. This resolves the label/content mismatch.
- Made the service-area/emergency contact strip a named complementary landmark.
- Added valid group roles to named business-credential, business-information, and social sections, so their labels have supported semantics.
- Prioritized homepage/service priority photos using eager loading and high fetch priority, following this installed Next.js version's Image documentation. The About portrait is now eager/high priority instead of lazy despite being its LCP image.
- Enabled AVIF optimization with WebP fallback. In the sampled mobile homepage response, hero image transfer fell from 65,940 to 35,913 bytes, approximately 45.5%. No source photos or copy were replaced.

## Performance measurements

Lighthouse 13.0.1, mobile preset, direct DevTools network and CPU throttling, against the preferred live domain. These are laboratory samples, not field Core Web Vitals.

| Page | Performance | LCP | Blocking time | Layout shift |
| --- | ---: | ---: | ---: | ---: |
| Home | 95 | 2.6 s | 50 ms | 0 |
| Contact | 97 | 2.1 s | 30 ms | 0 |
| About | 96 | 2.2 s | 70 ms | 0 |
| Rebates | 97 | 2.0 s | 60 ms | 0 |
| Emergency furnace repair | 97 | 2.1 s | 60 ms | 0.003 |

The initial default simulated-throttling samples varied considerably: the baseline five-page performance scores ranged from 78–100 and the first post-change simulated scores ranged from 80–88. The follow-up above uses direct network/CPU throttling to measure the loaded pages rather than relying only on the simulation. These different methods are retained separately in the evidence; the follow-up scores are not a before/after speed-gain claim. Image bytes and loading-priority changes are the concrete improvements. The five full post-fix Lighthouse runs scored 100 for accessibility, best practices, and SEO.

Remaining Lighthouse performance advice primarily concerns Google Tag Manager/framework JavaScript and render-blocking framework styles. There was no long blocking-time or large layout-shift finding in the final direct-throttling measurements. No production analytics or lead-delivery functionality was disabled to raise scores.

## Accessibility and responsive verification

- Final axe-core scans of all 17 public pages plus Thank You: zero reported violations across WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice rule tags.
- All 18 pages at effective 320, 768 and 1440 CSS-pixel widths: no page-level horizontal scrolling. Browser zoom was accounted for by measuring `innerWidth`; page overflow was compared with the root client width.
- Every page had one H1, one main landmark and no missing image alt attributes in the DOM review.
- Desktop Services disclosure and mobile navigation: keyboard reachability, expanded state, Escape closing and focus return verified.
- Skip link visibly focused; keyboard navigation proceeds into main content.
- Native service dialog: named dialog, contained focus, Escape closing, body-scroll restoration, and focus returned to its trigger.
- All four open form intents passed axe checks. Invalid submission focused the alert summary, identified invalid controls, and connected individual errors through `aria-describedby`. No service email was sent.
- Furnace-installation comparison table: named focusable scroll region, visible table caption/column headings, and keyboard horizontal scrolling verified (scrollLeft advanced to 32).
- Reduced-motion emulation: smooth scrolling disabled; mobile-menu and dialog animations disabled. Temporary emulation and viewport overrides were reset; injected audit scripts were cleared by reloading.
- Reviewed axe manual-check items: dialog control IDs refer to a real hidden native dialog and work when opened; decorative arrow glyphs are non-text; offscreen table columns are intentionally clipped inside scroll regions. The hero's solid pseudo-element background prevents automatic contrast inference; source color pairs and the rendered screenshot were reviewed. White/navy is 14.68:1, hero secondary text/navy is at least 9.4:1, and white action-label contrast is at least 4.87:1.
- Browser-extension overlays (`#bottomBar`, `#cgw_action_btn`) were excluded from the in-browser axe scans because they are not website content. Fresh Lighthouse browser runs do not include those extensions.

## Build and production verification

TypeScript, ESLint, production build, and all 41 tests passed. The final deployment was READY and the error/fatal runtime-log query returned no matching records in the checked 10-minute window.

This is a completed automated/browser accessibility pass, not exhaustive WCAG certification. No physical-device or VoiceOver session was performed. Field LCP/CLS/INP need actual visitor data; Lighthouse blocking time is not field INP. Continue normal real-user observation after launch.

## Evidence

- [Sanitized Lighthouse results](performance-accessibility-lighthouse.json), with all 28 baseline and follow-up samples and their throttling method.
- [Browser audit results](performance-accessibility-browser.json), including per-page violations, manual-review items, and responsive measurements.
- [Mobile homepage](final-mobile-home.png).
- [Accessible form error state](final-mobile-form-errors.png).
- Original full Lighthouse reports remain in the local, gitignored `.local-backup/final-audit/` folder.
