import React from "react";
import { siteConfig } from "@/lib/brandIcon";

export default function BrandLogo({ invert = false }: { invert?: boolean }) {
  return (
    <span
      className={`font-display text-base sm:text-xl font-bold tracking-tight leading-tight ${invert ? "text-paper" : "text-ink"}`}
    >
      {siteConfig.brandName}
    </span>
  );
}
