import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Eyebrow pill + display heading + intro paragraph, shared by every homepage section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-ink tracking-tight leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-muted text-sm sm:text-base leading-relaxed ${centered ? "mx-auto" : ""} max-w-xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
