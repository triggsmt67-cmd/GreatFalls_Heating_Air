import { FAQItem } from "@/content/faqs";
import { getFAQSchema } from "@/lib/schema/jsonLd";
export function FaqAccordion({
  faqs,
  title = "Frequently asked questions",
  subtitle = "",
  badge = "Useful answers",
  includeJsonLd = true,
  pageUrl,
}: {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  includeJsonLd?: boolean;
  pageUrl?: string;
}) {
  const faq = includeJsonLd ? getFAQSchema(faqs) : null;
  const schema = faq && { ...faq, ...(pageUrl ? { "@id": `${pageUrl}#faq`, isPartOf: { "@id": `${pageUrl}#webpage` } } : {}) };
  return (
    <section className="faq-section section">
      <div className="wrap faq-grid">
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        )}
        <div>
          <p className="eyebrow">{badge}</p>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div>
          {faqs.map((f) => (
            <details className="faq-item" key={f.question}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
              {f.sources && (
                <p className="faq-sources">
                  Sources: {f.sources.map((source, index) => (
                    <span key={source.url}>
                      {index > 0 && "; "}
                      <a className="text-link" href={source.url}>{source.label}</a>
                    </span>
                  ))}
                </p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
