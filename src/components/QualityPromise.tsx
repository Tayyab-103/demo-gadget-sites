"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const standards = [
  {
    tag: "01 / Fiber Authenticity",
    title: "Certified Organic Cottons",
    description: "Sourced from organic farms with zero toxic residues for soft, gentle skin comfort.",
  },
  {
    tag: "02 / Structural Integrity",
    title: "Pre-Shrunk & Anti-Pill Weaves",
    description: "Pre-washed French terry and combed jerseys retain shape and softness wash after wash.",
  },
  {
    tag: "03 / Household Guarantee",
    title: "60-Day Easy Fit Protection",
    description: "Try every piece at home with effortless size exchanges and direct satisfaction guarantee.",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]" id="quality-promise">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            Textile Standards
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            The Everden Quality Code
          </h2>
        </div>

        {/* 2-Column Split: Visual & 3 Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Boutique Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-black/[0.08] bg-[#FAF8F5]">
              <img
                src="/img/pexels-prolificpeople-37704845.jpg"
                alt={`${siteConfig.brandName} textile standards`}
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