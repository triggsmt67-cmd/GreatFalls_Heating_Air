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
      <div className="article-copy privacy-copy">
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy" }]} />

        {/* Legal Review Notice */}
        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">
              Pre-Launch Notice for Legal Review
            </span>
            <span>
              This draft explains how the website handles form details and hosting data. The client’s legal counsel must review and approve it before the site launches publicly.
            </span>
          </div>
        </div>

        <div className="page-heading">
          <h1>Privacy Policy & Data Practices</h1>
          <p className="privacy-meta">
            Last Updated: September 24, 2026 • Effective Date: Pre-Launch First
            Pass
          </p>
        </div>

        <div className="privacy-sections">
          <section>
            <h2 className="font-display">
              1. Information We Collect
            </h2>
            <p>
              Great Falls Heating and Air LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              or &ldquo;us&rdquo;) collects the personal information you choose to share when you request an estimate, ask about a service visit, or send a question through this website.
            </p>
            <p>This information includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name</li>
              <li>Phone number</li>
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
            <h2 className="font-display">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information only for business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Talking with you about your heating or cooling problem
              </li>
              <li>
                Arranging a diagnostic visit or an in-home estimate
              </li>
              <li>
                Sizing equipment and preparing written estimates
              </li>
              <li>
                Sending a technician to your home
              </li>
              <li>
                Preparing documents needed for utility rebate claims
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
            <h2 className="font-display">
              3. Form Submissions and Email Transmission
            </h2>
            <p>
              When live form delivery is enabled, an authenticated email service sends your form details to the designated mailbox. Development previews may test the form without sending an email.
              If you smell gas or a carbon monoxide alarm sounds, leave the
              building and contact emergency services from a safe location. Do
              not wait for a form response.
            </p>
          </section>

          <section>
            <h2 className="font-display">
              4. Cookies and Website Analytics
            </h2>
            <p>
              This website may use essential cookies for security and basic operation. We do not currently use invasive cross-site tracking cookies. If we add website analytics, such as Google Analytics 4, they will collect only anonymous usage information, such as page visits, screen widths, and button clicks. They will not record customer identities or form contents.
            </p>
          </section>

          <section>
            <h2 className="font-display">
              5. Data Retention and Security
            </h2>
            <p>
              We use reasonable administrative and technical safeguards to protect your information from unauthorized access, loss, or disclosure. No internet connection or storage system can guarantee complete security. We keep inquiry information only as long as needed to complete your requested service or meet accounting and warranty record requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display">
              6. Your Privacy Rights & Contacting Us
            </h2>
            <p>
              You can contact us at any time to ask to review, correct, or delete your personal contact records from our communication systems:
            </p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-800 space-y-1">
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
