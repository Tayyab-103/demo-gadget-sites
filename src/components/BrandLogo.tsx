import React from "react";
import { brandLead, brandTail } from "@/lib/brandIcon";

// Text-only wordmark: brand name split over two lines
export default function BrandLogo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex flex-col leading-none min-w-0">
      <span className={`text-base min-[375px]:text-lg sm:text-xl font-black uppercase tracking-tight truncate ${invert ? "text-white" : "text-primary"}`}>
        {brandLead}
      </span>
      {brandTail && (
        <span className={`text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.14em] min-[375px]:tracking-[0.2em] sm:tracking-[0.26em] mt-1 truncate ${invert ? "text-secondary" : "text-muted"}`}>
          {brandTail}
        </span>
      )}
    </span>
  );
}
