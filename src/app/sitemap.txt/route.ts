import sitemap from "@/app/sitemap";

// An alternative supported sitemap format for diagnosing Bing's XML fetch
// failure. Both formats derive from the same canonical, indexable route list.
export const dynamic = "force-static";

export function GET() {
  return new Response(`${sitemap().map(({ url }) => url).join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
