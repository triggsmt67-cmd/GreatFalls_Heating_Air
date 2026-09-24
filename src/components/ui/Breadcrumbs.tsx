import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/schema/jsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", url: "/" }, ...items];
  const jsonLd = getBreadcrumbSchema(allItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs sm:text-sm text-slate-500 py-3 ${className}`}
      >
        <ol className="flex items-center space-x-1.5 flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className="w-3.5 h-3.5 mx-1.5 text-slate-400 shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-[#071827] truncate max-w-[200px] sm:max-w-xs"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-[#087BEA] transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    {index === 0 && (
                      <Home className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
