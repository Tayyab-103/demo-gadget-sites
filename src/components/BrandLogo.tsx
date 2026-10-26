import React from "react";
import { siteConfig } from "@/lib/brandIcon";

// "Iron Ridge Hardware Tool Shop" -> ["Iron Ridge", "Hardware Tool Shop"]
const words = siteConfig.brandName.split(/\s+/);
const lead = words.slice(0, 2).join(" ");
const rest = words.slice(2).join(" ");

export default function BrandLogo({ size = "md" }: { size?: "md" | "lg" }) {
  const large = size === "lg";
  return (
    <span
      className={`flex flex-col font-extrabold tracking-tight select-none ${
        large
          ? "text-2xl sm:text-[1.75rem] leading-[1.1]"
          : "sm:flex-row sm:items-baseline sm:gap-[0.3em] text-[0.95rem] min-[375px]:text-base sm:text-lg leading-[1.1]"
      }`}
    >
      <span className="text-ink whitespace-nowrap">{lead}</span>
      {rest && <span className="text-gradient whitespace-nowrap">{rest}</span>}
    </span>
  );
}
