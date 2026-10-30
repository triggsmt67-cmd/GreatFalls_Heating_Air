# Google Analytics and Tag Manager

Configured October 30, 2026 for https://www.greatfallsheatingandair.com.

- GA4 measurement ID: `G-7CVS6CRPSM`.
- GTM container: `GTM-N8H44WVW` (account `6401402921`, container `284517169`).
- GTM Version 3, **Track website form and phone events**, was published at 5:15 p.m. Denver time on October 30, following the base GA4 installation in Version 2. No account link or additional account access was added.
- GA4 configuration lives in the GTM tag **GA4 — Great Falls Heating and Air**, on **Initialization - All Pages**. Do not add a second direct GA4 config or another GA4 tag for this ID: that can duplicate page views.
- The site loads the GTM bootstrap and noscript fallback through the root layout. The script loads after hydration via Next.js Script, once per page session. Local development and Preview do not load the tags. No additional Vercel variables are needed for these public IDs.
- The website pushes contextual events to `dataLayer`. The GTM tag **GA4 — Website events** uses `{{Event}}` as its event name, `{{Page Path}}` as route, and `{{DLV - intent}}` for request type. Its custom-event trigger is restricted to the six named website events. No duplicate direct gtag event forwarding is installed.
- GA4 handles default page views and history changes. No additional manual page-view sender is installed.

## Events

| Event | When | Data-layer context |
| --- | --- | --- |
| `lead_form_start` | First field interaction | intent, route |
| `lead_form_submit_success` | API confirms successful delivery | intent, source route |
| `phone_click` | Click on the public business phone link anywhere on the site | route, placement, public business phone number |
| `estimate_cta_click`, `service_request_cta_click` | Existing mobile request control | route, placement |
| `rebate_source_click` | Where an existing source link calls the event adapter | program ID, provider, public source URL |

The GA4 event tag forwards route and intent; additional data-layer context remains available for later GTM configuration. Phone clicks are not completed calls. Form success means provider acceptance; opening Thank You directly does not trigger form success. Google enhanced-measurement form events, if present, must not be treated as confirmed leads. Names, personal email addresses, customer phone numbers, locations, and message text are not passed to the analytics adapter. GTM user-provided data collection is disabled. The privacy page was updated to describe the Analytics/GTM installation, cookies, technical information, and opt-out options.

## Reporting follow-up

Production browser verification passed after deployment of `da8b923`: page views followed client navigation, and `lead_form_start` reached `G-7CVS6CRPSM` with route `/contact` and intent `estimate`, accepted with HTTP 204. No additional service email was sent. Sanitized evidence: `docs/audits/2026-10-30/analytics-verification.json`. The form-success adapter is covered by the passing unit tests; another live email submission was not performed.

Review Realtime reports in GA4. Mark `lead_form_submit_success` as a key event in GA4; optionally mark `phone_click` separately. Key-event/account reporting settings are not established merely by installing site code. Use test interactions without sending another service email unless specifically authorized.
