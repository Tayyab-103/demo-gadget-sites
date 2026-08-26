"use client";

import React from "react";

const featuresData = [
  {
    title: "True-to-Size Fit",
    description: "Consistent sizing across every style, so what fits your family once keeps fitting next time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="8" rx="1.5" />
        <path d="M6 8v3" />
        <path d="M10 8v2" />
        <path d="M14 8v3" />
        <path d="M18 8v2" />
      </svg>
    ),
  },
  {
    title: "Machine Washable, Every Time",
    description: "No special care needed — every piece is built to go straight from the hamper to the closet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <path d="M8 5h.01" />
        <path d="M12 5h.01" />
      </svg>
    ),
  },
  {
    title: "Fair, Transparent Pricing",
    description: "Bundle pricing that gets better the more you stock up — no hidden costs, no fine print.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Loved by Real Parents",
    description: "Every style is shaped by feedback from the families who actually wear it day to day.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="features">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center md:mb-16">
          <span className="eyebrow justify-center mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Built to Be <span className="text-secondary">Kept</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            We combine quality fabrics with real family feedback to bring you clothing that actually holds up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-4xl border border-black/5 bg-neutral-bg p-6 sm:grid-cols-2 md:gap-6 md:p-10 lg:grid-cols-4">
          {featuresData.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group flex flex-col items-center px-2 text-center sm:border-l sm:border-black/5 sm:first:border-l-0 lg:border-l lg:first:border-l-0 ${
                idx >= 2 ? "border-t border-black/5 pt-6 sm:border-t-0 sm:pt-0 lg:border-t-0 lg:pt-0" : ""
              }`}
            >
              <div className="mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-secondary group-hover:text-secondary-text">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-primary md:text-lg">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-neutral-text/60 md:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
