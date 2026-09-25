"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServiceIcon, type ServiceIconName } from "@/components/ui/ServiceIcon";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationServices } from "@/content/services";
import { Brand } from "@/components/ui/Brand";
export function Header() {
  const pathname = usePathname();
  const serviceIcons: ServiceIconName[] = [
    "heating",
    "emergency",
    "cooling",
    "ac-repair",
    "heat-pump",
  ];
  const [open, setOpen] = useState(false),
    [mobile, setMobile] = useState(false);
  const root = useRef<HTMLElement>(null),
    serviceButton = useRef<HTMLButtonElement>(null),
    mobileButton = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    setMobile(false);
  };
  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) {
        setOpen(false);
        setMobile(false);
      }
    };
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);
  return (
    <header
      ref={root}
      className="site-header"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          if (open) serviceButton.current?.focus();
          else if (mobile) mobileButton.current?.focus();
          close();
        }
      }}
    >
      <div className="wrap header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="services-disclosure">
            <button
              ref={serviceButton}
              aria-expanded={open}
              aria-controls="desktop-services"
              onClick={() => setOpen(!open)}
            >
              Services <ChevronDown size={14} />
            </button>
            {open && (
              <div id="desktop-services" className="nav-dropdown">
                {navigationServices.map((s, i) => (
                  <Link
                    key={s.route}
                    href={s.route}
                    onClick={close}
                    aria-current={pathname === s.route ? "page" : undefined}
                  >
                    <ServiceIcon name={serviceIcons[i]} size={28} />
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/rebates/2026-montana-hvac-rebates"
            aria-current={pathname.startsWith("/rebates/") ? "page" : undefined}
          >
            2026 Rebates
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/contact?intent=estimate"
          className="button button-yellow header-cta"
          onClick={close}
        >
          Request an estimate ↗
        </Link>
        <button
          ref={mobileButton}
          className="mobile-toggle"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
      {mobile && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation wrap"
          aria-label="Mobile navigation"
        >
          {navigationServices.map((s, i) => (
            <Link
              key={s.route}
              href={s.route}
              onClick={close}
              aria-current={pathname === s.route ? "page" : undefined}
            >
              <ServiceIcon name={serviceIcons[i]} size={24} /> {s.title} ↗
            </Link>
          ))}
          <Link href="/rebates/2026-montana-hvac-rebates" onClick={close}>
            2026 Rebates
          </Link>
          <Link href="/about" onClick={close}>
            About
          </Link>
          <Link href="/contact" onClick={close}>
            Contact
          </Link>
          <Link
            className="button button-yellow"
            href="/contact?intent=estimate"
            onClick={close}
          >
            Request an estimate
          </Link>
        </nav>
      )}
    </header>
  );
}
