"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const standards = [
  {
    tag: "01 / Fiber Authenticity",
    title: "100% Certified Organic Cottons",
    description: "Every thread is sourced from certified organic farms, ensuring zero toxic synthetic residues and gentle softness on sensitive skin.",
  },
  {
    tag: "02 / Structural Integrity",
    title: "Pre-Shrunk Weaves & Anti-Pill Finishing",
    description: "Our French terry and combed jersey fabrics are pre-washed and finished to ensure garments retain their shape and texture across countless wash cycles.",
  },
  {
    tag: "03 / Household Guarantee",
    title: "60-Day Easy Size & Fit Protection",
    description: "Try any garment at home with your family. If the drape, size, or feel isn't perfect, we arrange an effortless exchange or full refund.",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]" id="quality-promise">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            Textile Standards
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            The Everden Quality Code
          </h2>
          <p className="text-neutral-text/65 text-sm md:text-base mt-3">
            We hold every garment to rigorous durability and environmental benchmarks before it joins your household wardrobe.
          </p>
        </div>

        {/* 2-Column Split: Visual & 3 Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Boutique Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-black/[0.08] bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80"
                alt={`${siteConfig.brandName} boutique quality`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: 3 Standards List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {standards.map((item) => (
              <div
                key={item.tag}
                className="bg-[#FAF8F5] p-6 md:p-7 rounded-2xl border border-black/[0.06] hover:border-secondary/40 transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-secondary block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-primary mb-1.5">
                  {item.title}
                </h3>
                <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}