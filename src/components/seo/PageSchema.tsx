import { getPageSchema, serializeSchema } from "@/lib/schema/jsonLd";

export function PageSchema(props: Parameters<typeof getPageSchema>[0]) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(getPageSchema(props)) }} />;
}
