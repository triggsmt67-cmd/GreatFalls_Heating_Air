import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./premium.css";
import { siteConfig } from "@/content/site";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActions } from "@/components/layout/StickyMobileActions";
import { getHVACBusinessSchema } from "@/lib/schema/jsonLd";

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hvacSchema = getHVACBusinessSchema();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#071827]">
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
        <UtilityBar />
        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <StickyMobileActions />
      </body>
    </html>
  );
}
