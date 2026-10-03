"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    title: "Archival Smyth-Sewn Binding",
    description: "Durable stitched spine construction ensuring books open flat effortlessly without cracking or loose pages."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: "120gsm Acid-Free Paper",
    description: "Museum-grade cream parchment paper with zero bleed-through that naturally resists aging and yellowing."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    title: "Handcrafted Gold Foiling",
    description: "Deluxe embossed gold foil titles, gilded edges, and genuine leather accents crafted for timeless shelf beauty."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "30-Day Reader Guarantee",
    description: "Read every page risk-free in your personal library with our 30-day money-back satisfaction guarantee."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-3">The Chapterhouse Standard</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Crafted for <span className="text-secondary">Lifelong Reading</span>
          </h2>
          <p className="text-neutral-text/65 text-sm md:text-base max-w-2xl mx-auto">
            At {siteConfig.brandName}, we combine premium materials with timeless literary curation to bring you books that inspire for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-neutral-bg rounded-3xl p-7 border border-black/5 flex flex-col items-start hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-primary transition-all duration-300 font-bold">
                {feature.icon}
              </div>
              <h3 className="text-base font-black text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-neutral-text/65 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
