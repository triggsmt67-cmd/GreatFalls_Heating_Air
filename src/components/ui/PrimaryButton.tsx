import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "yellow" | "blue" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  id?: string;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  variant = "yellow",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
  id,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  }[size];

  const variantClasses = {
    // Yellow button uses navy text (#071827) per brand specifications for WCAG AA compliance
    yellow:
      "bg-[#FFC21C] hover:bg-[#EBB010] text-[#071827] font-bold shadow-sm active:translate-y-[1px]",
    blue: "bg-[#087BEA] hover:bg-[#066BCE] text-white font-semibold shadow-sm active:translate-y-[1px]",
    orange:
      "bg-[#F45A1F] hover:bg-[#D94B15] text-white font-bold shadow-sm active:translate-y-[1px]",
  }[variant];

  const baseClasses =
    "inline-flex items-center justify-center rounded-md transition-all duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087BEA] disabled:opacity-50 disabled:cursor-not-allowed select-none text-center cursor-pointer";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={combinedClasses}
        aria-label={ariaLabel}
        id={id}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      id={id}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  onClick,
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
  id,
  dark = false,
}: ButtonProps & { dark?: boolean }) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  }[size];

  const themeClasses = dark
    ? "border-2 border-slate-600 hover:border-slate-400 bg-slate-900/60 text-white hover:bg-slate-800/80"
    : "border-2 border-slate-300 hover:border-slate-400 bg-white text-[#071827] hover:bg-slate-50";

  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087BEA] disabled:opacity-50 disabled:cursor-not-allowed select-none text-center cursor-pointer";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${themeClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={combinedClasses}
        aria-label={ariaLabel}
        id={id}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      id={id}
    >
      {children}
    </button>
  );
}
