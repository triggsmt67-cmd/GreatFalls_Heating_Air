import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./premium.css";
import { siteConfig } from "@/content/site";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { ServiceRequestProvider } from "@/components/forms/ServiceRequestDrawer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActions } from "@/components/layout/StickyMobileActions";
import { getHVACBusinessSchema } from "@/lib/schema/jsonLd";
import { GoogleTags } from "@/components/GoogleTags";
import { GTM_CONTAINER_ID } from "@/lib/analytics/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071827",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "HVAC Services in Great Falls, MT | Great Falls Heating and Air LLC",
  description: siteConfig.shortDescription,
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hvacSchema = getHVACBusinessSchema();
  const analyticsEnabled = process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production";

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#071827]">
        {analyticsEnabled && <noscript><iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        /></noscript>}
        {analyticsEnabled && <GoogleTags />}
        {/* Skip to Content for WCAG 2.2 AA Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-md bg-[#FFC21C] px-4 py-2 font-bold text-[#071827] shadow-xl ring-2 ring-[#087BEA]"
        >
          Skip to main content
        </a>

        {/* Global JSON-LD Schema (Safe Guarded) */}
        {hvacSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacSchema) }}
          />
        )}

        {/* Global Shell */}
        <ServiceRequestProvider>
          <UtilityBar />
          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
          <StickyMobileActions />
        </ServiceRequestProvider>
      </body>
    </html>
  );
}
