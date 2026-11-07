import { describe, expect, it } from "vitest";
import { businessId, websiteId, connectSchemaGraph, getPageSchema, getSiteSchema, serializeSchema } from "@/lib/schema/jsonLd";
import { getHeatingPageSchema, heatingUrl } from "@/app/services/heating/schema";

// Relationships are a crawler-facing contract: optional images or rearranged
// graph entries must not disconnect a service from its provider or its page.
describe("Connected structured data", () => {
  it("defines one business and website with a shared publisher", () => {
    const graph = getSiteSchema()["@graph"];
    expect(graph.filter(node => node?.["@id"] === businessId)).toHaveLength(1);
    expect(graph.find(node => node?.["@id"] === websiteId)).toMatchObject({
      "@type": "WebSite", publisher: { "@id": businessId },
    });
  });

  it("preserves the heating service provider and area independently of graph order", () => {
    const graph = getHeatingPageSchema("Heating", "Heating services")["@graph"];
    const service = graph.find(node => node["@type"] === "Service");
    expect(service).toMatchObject({ provider: { "@id": businessId }, mainEntityOfPage: { "@id": `${heatingUrl}#webpage` } });
    expect(service?.areaServed).toEqual(expect.arrayContaining([{ "@type": "Place", name: "Great Falls, Montana" }]));
  });

  it("preserves hub relationships when connecting a subpage to the website", () => {
    const schema = connectSchemaGraph([{
      "@type": "WebPage", "@id": "https://example.com/repair#webpage",
      isPartOf: { "@id": `${heatingUrl}#webpage` },
    }]);
    expect(schema["@graph"][0]).toMatchObject({
      publisher: { "@id": businessId },
      isPartOf: [{ "@id": websiteId }, { "@id": `${heatingUrl}#webpage` }],
    });
  });

  it("uses clean canonical IDs for informational pages", () => {
    const node = getPageSchema({ path: "/contact?intent=estimate", type: "ContactPage", title: "Contact", description: "Request service" })["@graph"][0];
    expect(node).toMatchObject({
      "@type": "ContactPage", url: "https://www.greatfallsheatingandair.com/contact",
      "@id": "https://www.greatfallsheatingandair.com/contact#webpage",
      breadcrumb: { "@id": "https://www.greatfallsheatingandair.com/contact#breadcrumb" },
    });
  });

  it("prevents content from closing a JSON-LD script element", () => {
    const value = { description: "A </script><script>example</script>" };
    const encoded = serializeSchema(value);
    expect(encoded).not.toContain("<");
    expect(JSON.parse(encoded)).toEqual(value);
  });
});
