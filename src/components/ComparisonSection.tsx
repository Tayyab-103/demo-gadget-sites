"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const comparisonRows = [
  {
    feature: "Build Quality",
    pulse: "Aircraft-grade alloy + multi-layer snap-resistant latex",
    competitor: "Brittle plastics & synthetic rubber",
  },
  {
    feature: "Motor & Power",
    pulse: "Brushless 3,200 RPM whisper-quiet motor",
    competitor: "Loud brushed motors prone to overheating",
  },
  {
    feature: "Battery Life",
    pulse: "Up to 10 days active usage on a single charge",
    competitor: "Requires daily charging",
  },
  {
    feature: "Guarantee & Warranty",
    pulse: "60-Day Trial + 1-Year Full Warranty",
    competitor: "14-day return with restocking fee",
  },
  {
    feature: "Direct Support",
    pulse: `Dedicated support team via ${siteConfig.phone} & email`,
    competitor: "Slow automated chatbots",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="comparison">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow justify-center mb-3">Comparison</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary">
            Why Choose <span className="text-secondary bg-primary px-2.5 py-0.5 rounded-lg">{siteConfig.brandName}</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-text/65">
            Engineered standards vs generic fitness gear.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-neutral-bg shadow-lg">
          <div className="overflow-x-auto">
            <div className="min-w-[540px] md:min-w-0">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-primary text-white p-4 sm:p-5 border-b border-white/10 items-center">
                <div className="col-span-4 text-xs font-black uppercase tracking-wider text-white/60">
                  Feature
                </div>
                <div className="col-span-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-secondary">
                    {siteConfig.brandName}
                  </span>
                </div>
                <div className="col-span-4 text-xs font-bold uppercase tracking-wider text-white/40">
                  Generic Brands
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-black/5 bg-white">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 p-4 sm:p-5 items-center gap-2 transition-colors hover:bg-neutral-bg/50"
                  >
                    {/* Feature Name */}
                    <div className="col-span-4 pr-2">
                      <div className="text-xs sm:text-sm font-black uppercase tracking-tight text-primary">
                        {row.feature}
                      </div>
                    </div>

                    {/* Pulse Gear */}
                    <div className="col-span-4 flex items-start gap-2 bg-secondary/10 p-2.5 sm:p-3 rounded-xl border border-secondary/25">
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary text-[0.65rem] font-black">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-primary leading-snug">
                        {row.pulse}
                      </span>
                    </div>

                    {/* Competitor */}
                    <div className="col-span-4 flex items-start gap-2 pl-2 sm:pl-3 opacity-60">
                      <span className="flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full bg-black/10 text-neutral-text text-[0.65rem] font-black">
                        ✕
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-text leading-snug">
                        {row.competitor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
