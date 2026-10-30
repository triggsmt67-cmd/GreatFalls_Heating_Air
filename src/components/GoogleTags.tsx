"use client";

import { useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/content/site";
import { GTM_CONTAINER_ID } from "@/lib/analytics/config";
import { trackEvent } from "@/lib/analytics/events";

export function GoogleTags() {
  useEffect(() => {
    function phoneClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a[href^='tel:']") : null;
      if (link?.getAttribute("href") !== `tel:${siteConfig.phoneE164}`) return;
      const placement = link.closest(".mobile-actions") ? "sticky_mobile"
        : link.closest("footer") ? "footer"
        : link.closest(".utility-bar") ? "utility_bar"
        : link.closest("header") ? "header"
        : link.closest(".form-alert") ? "form_emergency_warning" : "hero";
      trackEvent({ name: "phone_click", properties: {
        route: window.location.pathname, placement, phoneNumber: siteConfig.phoneE164,
      } });
    }
    document.addEventListener("click", phoneClick);
    return () => document.removeEventListener("click", phoneClick);
  }, []);

  return (
    <>
      <Script id="google-tag-initialization" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
      </Script>
    </>
  );
}
