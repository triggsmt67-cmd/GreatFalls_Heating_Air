import sitemap from "@/app/sitemap";

// An alternative supported sitemap format for diagnosing Bing's XML fetch
// failure. Both formats derive from the same canonical, indexable route list.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  // Runtime logs let us correlate Bing submissions with actual origin fetches
  // without collecting visitor IPs, cookies, query strings, or credentials.
  console.info(JSON.stringify({
    event: "text_sitemap_fetch",
    userAgent: request.headers.get("user-agent")?.slice(0, 300) ?? "",
    responseStatus: 200,
  }));
  return new Response(`${sitemap().map(({ url }) => url).join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
