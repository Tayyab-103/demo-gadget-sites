"use client";

import React from "react";

const featuresData = [
  {
    title: "OEM-Grade Precision",
    description: "Every part meets or exceeds strict OEM fitment and safety standards for seamless installation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
  },
  {
    title: "Built for Heavy-Duty Use",
    description: "Engineered to withstand extreme heat, vibration, and daily road wear without degrading.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z" />
      </svg>
    ),
  },
  {
    title: "Fair, Transparent Pricing",
    description: "Direct-to-driver bundle pricing with no hidden distributor markups or surprise fees.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Trusted by Mechanics & Drivers",
    description: "Every component is road-tested and approved by professional technicians and automotive enthusiasts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
            Engineered to Keep You <span className="text-secondary">Moving</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            We combine precision manufacturing with real-world road testing to deliver parts and accessories that truly hold up.
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
