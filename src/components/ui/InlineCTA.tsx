import React from "react";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { PrimaryButton } from "./PrimaryButton";

interface InlineCTAProps {
  title?: string;
  description?: string;
  showEmergencyCall?: boolean;
  estimateIntent?: string;
  className?: string;
}

export function InlineCTA({
  title = "Ready to verify heating efficiency for your home?",
  description = "Get an honest, engineering-backed recommendation and a clear estimate tailored to Great Falls winter conditions.",
  showEmergencyCall = true,
  estimateIntent = "estimate",
  className = "",
}: InlineCTAProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-[#F5F7F8] p-6 sm:p-8 my-8 shadow-sm ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087BEA] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Honest Local Advice • No Pressure</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071827] leading-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <PrimaryButton
            href={`/contact?intent=${estimateIntent}`}
            variant="yellow"
            size="md"
          >
            <span>Schedule an Estimate</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </PrimaryButton>

          {showEmergencyCall && (
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#071827] px-4 py-2.5 text-sm font-bold text-[#071827] hover:bg-[#071827] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F45A1F]" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
