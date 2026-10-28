# Homepage conversion update

The approved site before this update is saved in commit `b877323`, tagged `savepoint-before-conversion-2026-10-28`. This includes the approved footer, owner copy, crawl metadata, privacy cleanup, and favicon.

The conversion update makes service requests prominent beside emergency calls, brings approved owner credentials into the opening, moves the owner introduction ahead of equipment research, replaces the large rebate feature with a compact resource, and uses explicit service headings. The mobile hero image is shorter.

The shared form now requests the selected contact channel only, puts contact preference before the fields, makes location optional for the repair/question option, and explains that a request does not book an appointment. Server validation matches these rules. Notification formatting supports omitted contact details and excludes an empty email reply-to. Resend configuration, delivery guards, and production credentials were not changed.

Validation: lint, TypeScript, 32 tests, and production build passed. The production crawl passed for 18 page responses, 44 guide anchors, and 58 internal link/asset destinations. Browser checks covered the homepage at 390px, 768px, and 1440px, the service-request anchor, and the email-only form state. No real request was submitted. Resend delivery and final-domain verification remain deferred.

To restore the earlier design after this update is committed, revert the commit titled `Improve homepage service request conversion path`. The original checkpoint tag remains available for comparison. No changes were pushed or deployed.
