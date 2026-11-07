import { readFile, writeFile } from "node:fs/promises";
import { siteMapGroups } from "../src/content/siteMap.ts";

// Run after a successful production deployment. Never submit from a page
// request or a build: preview builds and ordinary visits are not updates.
const config = JSON.parse(await readFile(new URL("../indexnow.config.json", import.meta.url), "utf8"));
const origin = new URL(config.origin);
if (origin.href !== "https://www.greatfallsheatingandair.com/") {
  throw new Error("IndexNow submissions must target the canonical production host.");
}
const keyFile = config.keyFile;
if (!/^[a-zA-Z0-9-]{8,128}\.txt$/.test(keyFile)) throw new Error("Invalid IndexNow key filename.");
const key = (await readFile(new URL(`../public/${keyFile}`, import.meta.url), "utf8")).trim();
if (keyFile !== `${key}.txt`) throw new Error("IndexNow filename and key content must match.");

const args = process.argv.slice(2);
const submit = args.includes("--submit");
const paths = args.filter(arg => arg !== "--submit");
const knownPaths = siteMapGroups.flatMap(group => group.pages.map(page => page.path));
if (paths.some(path => !knownPaths.includes(path))) {
  throw new Error("Supply only canonical public paths from the sitemap, or omit paths for the initial full batch.");
}
const urlList = [...new Set(paths.length ? paths : knownPaths)].map(path => new URL(path, origin).toString().replace(/\/+$/, ""));
if (!urlList.length || urlList.length > 10000) throw new Error("Invalid IndexNow batch size.");
const keyLocation = new URL(keyFile, origin).href;

async function checkedFetch(url, options = {}) {
  return fetch(url, { redirect: "error", signal: AbortSignal.timeout(20000), ...options });
}

const proof = await checkedFetch(keyLocation);
if (proof.status !== 200 || (await proof.text()).trim() !== key) {
  throw new Error("Deploy the matching IndexNow key file before submitting URLs.");
}
// Verify the actual published pages, including indexability, before notifying
// search engines. A stale local route list must not submit nonexistent pages.
for (let offset = 0; offset < urlList.length; offset += 4) {
  await Promise.all(urlList.slice(offset, offset + 4).map(async url => {
    const page = await checkedFetch(url);
    const html = await page.text();
    const robots = html.match(/<meta\b[^>]*name="robots"[^>]*content="([^"]*)"/i)?.[1] ?? "";
    if (page.status !== 200 || /noindex/i.test(`${robots} ${page.headers.get("x-robots-tag") ?? ""}`)) {
      throw new Error(`Page is unavailable or noindex: ${url}`);
    }
    if (!html.includes(`rel="canonical" href="${url}"`)) {
      throw new Error(`Page has a different canonical: ${url}`);
    }
  }));
}

const result = {
  timestamp: new Date().toISOString(),
  endpoint: "https://api.indexnow.org/indexnow",
  host: origin.host,
  urlCount: urlList.length,
  urls: urlList,
  ownershipFileVerified: true,
  submitted: submit,
};
if (submit) {
  const response = await checkedFetch(result.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: origin.host, key, keyLocation, urlList }),
  });
  result.httpStatus = response.status;
  result.keyValidationPending = response.status === 202;
  result.responseBody = (await response.text()).replaceAll(key, "[redacted]").slice(0, 2000);
  // Receipt and completed validation are distinct from crawling or indexing.
  result.accepted = [200, 202].includes(response.status);
  if (!result.accepted) process.exitCode = 1;
  await writeFile(new URL("../indexnow-last-submission.json", import.meta.url), `${JSON.stringify(result, null, 2)}\n`);
}
console.log(JSON.stringify(result, null, 2));
if (!submit) console.log("Preflight passed. Add --submit to notify IndexNow; future batches should name only changed paths.");
