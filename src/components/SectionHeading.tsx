import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  invert?: boolean;
}

// Shared heading block: gold-bar eyebrow, bold uppercase title, short intro line
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", invert = false }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-2xl mb-10 sm:mb-14`}>
      <span className={`eyebrow ${invert ? "eyebrow-light" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.04] ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${centered ? "mx-auto" : ""} max-w-xl ${
            invert ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
