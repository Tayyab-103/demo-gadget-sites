import React from "react";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: React.ReactNode;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", tone = "light", action }: Props) {
  const centered = align === "center";
  const titleColor = tone === "dark" ? "text-primary-text" : "text-neutral-text";
  const bodyColor = tone === "dark" ? "text-primary-text/75" : "text-neutral-text/65";
  const eyebrowColor = tone === "dark" ? "text-secondary" : "text-primary";

  return (
    <div
      className={`flex flex-col gap-6 mb-10 sm:mb-14 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={`flex flex-col ${centered ? "items-center max-w-2xl" : "items-start max-w-2xl"}`}>
        <span className={`eyebrow ${eyebrowColor} mb-4`}>{eyebrow}</span>
        <h2 className={`font-serif font-medium text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight ${titleColor}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${bodyColor}`}>{description}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
