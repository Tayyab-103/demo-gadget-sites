"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "100-Hour Stress Testing",
    desc: "Rigorous drop tests, pull cycles, and thermal assessments before packaging.",
  },
  {
    title: "1-Year Replacement Warranty",
    desc: "Defect or performance issue within 365 days? We replace it immediately.",
  },
  {
    title: "Eco-Certified Materials",
    desc: "100% natural Malaysian latex and aircraft-grade aluminum alloy.",
  },
];

export default function QualityPromise() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20" id="quality-promise">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Card: Visual (5 cols) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] bg-[#0A0B0E] group">
            <Image
              src="https://images.unsplash.com/photo-1517344368193-41552b6ad3f5?w=1200&q=80"
              alt={`${siteConfig.brandName} Quality Inspection`}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom floating badge */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 z-10 rounded-2xl bg-black/80 backdrop-blur-md p-4 border border-white/10 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-2.5 w-2.5 rounded-full bg-secondary"></span>
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Lab Certified Standard
                </span>
              </div>
              <p className="text-xs text-white/80">
                Zero tolerance for subpar materials or compromised safety.
              </p>
            </div>
          </div>

          {/* Right Card: Promises (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[#FAFAFA] p-6 sm:p-10 border border-black/5 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-5 bg-[#0A0B0E]"></span>
                <span className="text-xs font-black uppercase tracking-wider text-[#0A0B0E]">
                  Our Standard
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0B0E] leading-tight mb-4">
                Built For Performance. <br />
                <span className="text-gradient-dark">Guaranteed Quality.</span>
              </h2>

              <p className="text-sm text-neutral-text/70 leading-relaxed mb-6">
                Tested by athletes so you can focus 100% on training without equipment worries.
              </p>

              {/* 3 Step Standards */}
              <div className="flex flex-col gap-4">
                {promises.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-4 border-b border-black/5 last:border-b-0 last:pb-0">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#0A0B0E] text-white font-black text-xs shadow-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#0A0B0E] mb-0.5">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-text/65 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Indicators */}
            <div className="mt-8 pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-neutral-text/60">
              <span className="text-[#0A0B0E] font-black">60-Day Trial Period</span>
              <span>•</span>
              <span className="text-[#0A0B0E] font-black">100% Satisfaction Guarantee</span>
              <span>•</span>
              <span>Fast Carrier Delivery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}