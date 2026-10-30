# Contact form delivery with Resend

## Confirmed addresses

Owner confirmed on October 30, 2026:

- From: `Great Falls Heating and Air <notifications@greatfallsheatingandair.com>`
- To: `gfheatingandair@icloud.com`
- One clearly labeled live test email was authorized and delivered at 4:45 p.m. Denver time on October 30, 2026.

The customer's email, when supplied, is used as Reply-To. The browser cannot choose the sender or notification recipient. The expected volume is about 10–15 emails per month. No Redis database or rate-limiting subscription is needed.

## Vercel Production variables

These settings were saved to project **great-falls-heating-air** and verified on October 30:

| Name | Value | Secret |
| --- | --- | --- |
| `EMAIL_PROVIDER_API_KEY` | Saved Resend sending API key (`re_…`) | Yes |
| `CONTACT_FROM_EMAIL` | `Great Falls Heating and Air <notifications@greatfallsheatingandair.com>` | No |
| `CONTACT_TO_EMAIL` | `gfheatingandair@icloud.com` | No |
| `LEAD_EMAIL_MODE` | `live` | No |
| `NEXT_PUBLIC_SITE_URL` | `https://greatfallsheatingandair.com` | No |

The site URL controls canonical URLs, not email delivery. Never add `NEXT_PUBLIC_` to the key or other email settings. Do not set `NODE_ENV` manually. The key is stored as a sensitive/secret variable. Local credentials are in gitignored `.env.local`.

Preview environments should receive email credentials only when deliberately testing live delivery there. Local UI previews can use `LEAD_EMAIL_MODE=simulate`, which explicitly reports that no email was sent. Live mode requires all email settings and fails if credentials are missing or Resend rejects the request.

## Basic spam protection

Server-side validation, required consent, a hidden honeypot, request size limits, escaped email HTML, and a five-attempt-per-IP limit over ten minutes remain in place. The limiter uses bounded process memory, expires old attempts, and works without an external service. It is best-effort: Vercel instances do not share counters and restarts reset them. It is not a global abuse limit or a billing cap. Submission payloads are excluded from logs.

The owner declined additional database infrastructure. No Redis resource was created or purchased; the creation dialog was canceled. No Upstash environment variables are required.

## Current verification status

- Automated tests cover the API route with mocked Resend responses, sender/recipient and Reply-To, missing credentials, provider rejection, consent/honeypot validation, and rate limiting including expiry.
- Browser required-field validation passed. Failed delivery retained input and stayed on `/contact`.
- After the owner saved the key, a browser submission reached Resend and received HTTP 403 because the sending domain was not yet verified. No email was sent.
- All required public DNS records matched. Resend verification was started and subsequently recorded a **DNS verified** event at 4:39 p.m. Denver time. Sending status is now **Verified**.
- Vercel variables are configured. The verified local code is being released through the existing main-branch Git integration.

The single successful test ran from the local browser form through the real Resend service. The browser reached `/thank-you`; Resend reported **Delivered** at 4:45 p.m. Denver time. Message ID: `01a18efd-a047-7367-a362-7608c3d6756d`. Sender and recipient matched the confirmed addresses. Screenshot: `docs/audits/2026-10-30/resend-delivered-test.png`. No second successful email is authorized or needed. The recipient still needs to confirm inbox/Junk placement; Delivered records acceptance by the receiving mail server, not inbox placement.

## Provider documentation

- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/dashboard/domains/manage-domains
- https://vercel.com/docs/environment-variables
