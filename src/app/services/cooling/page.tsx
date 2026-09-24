import { servicesData } from "@/content/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceHub } from "@/components/sections/ServiceHub";
const service = servicesData["cooling-hub"];
export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonicalPath: service.route,
});
export default function Page() {
  return <ServiceHub service={service} />;
}
