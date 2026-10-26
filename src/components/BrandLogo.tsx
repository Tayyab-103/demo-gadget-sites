import React from "react";
import { brandLead, brandTail } from "@/lib/brandIcon";

// Text-only wordmark: brand name split over two lines
export default function BrandLogo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`text-lg sm:text-xl font-black uppercase tracking-tight ${invert ? "text-white" : "text-primary"}`}>
        {brandLead}
      </span>
      {brandTail && (
        <span className={`text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.26em] mt-1 ${invert ? "text-secondary" : "text-muted"}`}>
          {brandTail}
        </span>
      )}
    </span>
  );
}
