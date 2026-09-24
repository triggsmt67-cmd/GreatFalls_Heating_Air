import React from "react";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AlertCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Privacy Policy | Great Falls Heating and Air LLC",
  description:
    "Privacy policy and data practices disclosure for Great Falls Heating and Air LLC. Information collection, form submissions, and customer communication policies.",
  canonicalPath: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="wrap interior">
      <div className="article-copy">
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy" }]} />

        {/* Legal Review Notice */}
        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-xs text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block uppercase tracking-wide">
              Pre-Launch Notice for Legal Review
            </span>
            <span>
              This starter privacy disclosure outlines current technical data
              practices for lead forms and website hosting. It must be reviewed
              and formally approved by client legal counsel prior to public
              commercial launch.
            </span>
          </div>
        </div>

        <div className="page-heading">
          <h1>Privacy Policy & Data Practices</h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Updated: September 24, 2026 • Effective Date: Pre-Launch First
            Pass
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-[#071827]">
              1. Information We Collect
            </h2>
            <p>
              Great Falls Heating and Air LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              or &ldquo;us&rdquo;) collects personal information that you
              voluntarily provide to us when requesting an HVAC service
              estimate, scheduling emergency heating diagnostics, or submitting
              general inquiries through our website.
            </p>
            <p>This information includes:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              <li>Full name</li>
              <li>Telephone contact number</li>
              <li>Email address</li>
              <li>Service address, community, or ZIP code</li>
              <li>Preferred contact method (phone call, email, or SMS text)</li>
              <li>
                Description of your heating, air conditioning, or heat pump
                issue
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#071827]">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information collected exclusively for legitimate
              business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              <li>
                Contacting you to discuss your heating or cooling system
                symptoms
              </li>
              <li>
                Scheduling on-site diagnostic service or in-home estimate
                appointments
              </li>
              <li>
                Calculating accurate equipment sizing and providing written
                estimates
              </li>
              <li>
                Dispatching service technicians to your residential location
              </li>
              <li>
                Providing necessary documentation for utility rebate claims
                (such as NorthWestern Energy or Sun River Electric Cooperative)
              </li>
            </ul>
            <p className="font-semibold text-[#071827]">
              We do not sell, rent, trade, or distribute your personal contact
              information to third-party marketing companies, lead brokers, or
              advertisers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#071827]">
              3. Form Submissions and Email Transmission
            </h2>
            <p>
              When production delivery is enabled, form data is sent to the
              configured mailbox through an authenticated email provider.
              Development previews may simulate delivery without sending email.
              If you smell gas or a carbon monoxide alarm sounds, leave the
              building and contact emergency services from a safe location. Do
              not wait for a form response.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#071827]">
              4. Cookies and Website Analytics
            </h2>
            <p>
              Our website may utilize essential cookies to maintain page
              security and basic operational functionality. We do not currently
              run invasive cross-site tracking cookies. In the event that
              aggregated website performance analytics (such as Google Analytics
              4) are enabled in the future, they will collect only anonymized
              operational metrics (such as page visit volumes, device screen
              widths, and button interaction counts) without recording personal
              customer identities or form field contents.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#071827]">
              5. Data Retention and Security
            </h2>
            <p>
              We implement reasonable administrative and technological
              safeguards to protect personal information against unauthorized
              access, loss, or disclosure. However, no internet transmission or
              electronic storage method can guarantee absolute security. We
              retain inquiry information only for as long as necessary to
              complete your requested service or fulfill standard accounting and
              warranty documentation obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-[#071827]">
              6. Your Privacy Rights & Contacting Us
            </h2>
            <p>
              You may request review, correction, or deletion of your personal
              contact records from our direct communication systems at any time
              by contacting us:
            </p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs sm:text-sm text-slate-800 space-y-1">
              <div className="font-bold text-[#071827]">
                {siteConfig.businessName}
              </div>
              <div>Telephone: {siteConfig.phoneDisplay}</div>
              <div>Email: {siteConfig.email}</div>
              <div>Service Territory: Great Falls and Cascade County, MT</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
