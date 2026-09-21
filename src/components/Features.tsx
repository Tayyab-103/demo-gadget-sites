"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "High-Density Archival Pigments",
    description: "Formulated with pure lightfast pigments that retain rich color brilliance and depth over decades without fading.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Triple-Gessoed Cotton Canvas",
    description: "Heavyweight 100% natural cotton woven tightly and pre-primed with acid-free acrylic titanium gesso for instant brush adhesion.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Ergonomic Zero-Shed Brushes",
    description: "Seamless nickel-plated brass ferrules lock bristles securely to prevent shedding during detailed strokes and broad washes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "14-Day Studio Guarantee",
    description: "Test our art and craft supplies in your creative studio. If you're not completely inspired, return within 14 days for a full refund.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center md:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 12%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Masterpiece Standards
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary">
            Engineered For The <span className="text-secondary">Dedicated Artist</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-black/70">
            Every {siteConfig.brandName} medium, canvas, and brush is crafted to meet the strict demands of fine artists and studio workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-primary-tint border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl shadow-md"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--primary-text-color)",
                }}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-black text-primary uppercase tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/65">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
