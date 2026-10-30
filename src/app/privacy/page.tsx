import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy | Great Falls Heating and Air LLC",
  description:
    "How Great Falls Heating and Air LLC handles website inquiries, contact information, and basic website usage data.",
  canonicalPath: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="wrap interior">
      <div className="article-copy privacy-copy">
        <Breadcrumbs items={[{ name: "Privacy policy", url: "/privacy" }]} />
        <header className="page-heading">
          <h1>Privacy policy</h1>
          <p className="privacy-meta">
            Effective date: <time dateTime="2026-10-30">October 30, 2026</time>
          </p>
          <p>
            This policy explains how Great Falls Heating and Air LLC handles
            information you share through this website or when contacting us
            about service.
          </p>
        </header>

        <div className="privacy-sections">
          <section aria-labelledby="privacy-information">
            <h2 id="privacy-information">1. Information you share</h2>
            <p>
              When you ask about service or an estimate, you may provide your
              name, phone number, email address, town or ZIP code, preferred
              contact method, and details about your heating or cooling system.
              You may also share a service address when arranging a visit.
            </p>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use">2. How we use your information</h2>
            <p>
              We use the information you provide to respond to your questions,
              discuss service availability, prepare estimates, arrange requested
              work, and communicate about your project. Information related to
              completed work may also be used for service records, invoices,
              warranty questions, or rebate documentation you request.
            </p>
            <p>
              Sending a service inquiry does not sign you up for marketing
              emails. We do not sell your contact information to advertisers or
              lead brokers.
            </p>
          </section>

          <section aria-labelledby="privacy-delivery">
            <h2 id="privacy-delivery">3. Online requests and service providers</h2>
            <p>
              When online form delivery is available, your request is sent to our
              business email through an email delivery service. If the website
              cannot send your request, it displays an error and provides our
              phone number. An online request does not confirm an appointment.
            </p>
            <p>
              Providers that host the website or deliver email may process
              information as part of providing those services. For urgent
              heating or cooling needs, please call. Forms are not continuously
              monitored.
            </p>
          </section>

          <section aria-labelledby="privacy-technical">
            <h2 id="privacy-technical">4. Website operation and usage data</h2>
            <p>
              Website hosting and security systems may process technical
              information such as IP addresses, browser details, requested pages,
              and request times to operate the website, identify errors, and
              help prevent abuse.
            </p>
            <p>
              We use Google Analytics through Google Tag Manager
              to understand visits, pages viewed, and interactions such as clicks
              on our phone links and successful service requests. These tools may
              use cookies and device identifiers and process technical information
              about your visit. A phone-link click does not establish that a call
              was completed.
            </p>
            <p>
              We do not send the names, personal phone numbers, email addresses,
              or message text entered into our service-request forms as analytics
              event parameters. Google explains its data practices in its{" "}
              <a href="https://policies.google.com/privacy" className="text-link">privacy policy</a>.
              You can manage cookies through your browser settings or use Google’s{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-link">Analytics opt-out browser add-on</a>.
            </p>
          </section>

          <section aria-labelledby="privacy-records">
            <h2 id="privacy-records">5. Records and security</h2>
            <p>
              We keep inquiry and service information as needed to respond to
              requests, carry out work, maintain related business records, and
              meet applicable recordkeeping obligations. No website or email
              service can guarantee complete security.
            </p>
            <p>
              You can contact us to ask about information you have shared, request
              a correction, or ask for its deletion. Some records may need to be
              retained for completed services, accounting, or other applicable
              obligations.
            </p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2 id="privacy-contact">6. Contact us</h2>
            <p>For questions about this policy or information you have shared:</p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-800 space-y-1">
              <p className="font-semibold">{siteConfig.businessName}</p>
              <p>
                Phone: <a className="text-link" href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a>
              </p>
              <p>
                Email: <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <p>Service area: {siteConfig.serviceAreaSummary}.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
