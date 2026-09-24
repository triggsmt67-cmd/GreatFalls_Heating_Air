import React from "react";
import { ExternalLink, Calendar, AlertCircle } from "lucide-react";

interface SourceNoteProps {
  sourceUrl: string;
  sourceLabel: string;
  lastReviewed: string;
  notes?: string;
  className?: string;
}

export function SourceNote({
  sourceUrl,
  sourceLabel,
  lastReviewed,
  notes,
  className = "",
}: SourceNoteProps) {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-[#F5F7F8] p-4 text-xs text-slate-600 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2 mb-2">
        <div className="flex items-center gap-1.5 font-medium text-[#071827]">
          <AlertCircle className="w-3.5 h-3.5 text-[#087BEA]" />
          <span>Verified Program Source</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <Calendar className="w-3 h-3" />
          <span>Reviewed: {lastReviewed}</span>
        </div>
      </div>

      {notes && <p className="mb-2 leading-relaxed text-slate-600">{notes}</p>}

      <div className="flex items-center gap-1">
        <span className="font-semibold text-slate-700">Official Link:</span>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#087BEA] hover:underline font-medium break-all"
        >
          <span>{sourceLabel}</span>
          <ExternalLink className="w-3 h-3 shrink-0" />
        </a>
      </div>
    </div>
  );
}
