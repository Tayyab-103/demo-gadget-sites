import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, text, align = "center", light = false }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto items-center" : "items-start"} flex flex-col max-w-2xl`}>
      <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-4 text-[1.9rem] sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-sm sm:text-base leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{text}</p>
      )}
    </div>
  );
}
