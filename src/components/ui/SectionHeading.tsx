import React from "react";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "blue" | "orange" | "cyan" | "slate";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  id?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "blue",
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
  id,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const badgeStyles = {
    blue: isDark
      ? "bg-[#087BEA]/20 text-[#28B9F2] border-[#087BEA]/40"
      : "bg-[#087BEA]/10 text-[#087BEA] border-[#087BEA]/20",
    orange: isDark
      ? "bg-[#F45A1F]/20 text-[#F45A1F] border-[#F45A1F]/40"
      : "bg-[#F45A1F]/10 text-[#F45A1F] border-[#F45A1F]/20",
    cyan: isDark
      ? "bg-[#28B9F2]/20 text-[#28B9F2] border-[#28B9F2]/40"
      : "bg-[#28B9F2]/10 text-[#087BEA] border-[#28B9F2]/30",
    slate: isDark
      ? "bg-slate-800 text-slate-300 border-slate-700"
      : "bg-slate-100 text-slate-700 border-slate-200",
  }[badgeVariant];

  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}
      id={id}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${badgeStyles}`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#071827]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
