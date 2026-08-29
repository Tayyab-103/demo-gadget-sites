"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200" id="aviation-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 mb-3 select-none">
            LAB &amp; STRESS TESTING
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-3">
            Stress-Tested For <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">Continuous Duty.</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-normal">
            Inside our Austin testing laboratories. Verified for abrasion resistance and chemical barrier defense.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0F1D] text-white shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7">
            <Image
              src="/img/textile-lab-test.jpg"
              alt="Textile fluid barrier test"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-[0.62rem] font-bold uppercase tracking-wider text-white mb-2">
                Fluid Shield Lab
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                DuPont Teflon™ Barrier
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                Repels harsh automotive oils, clinical fluids, and liquid spills before fiber absorption occurs.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                ASTM D3393 Waterproof Standard
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0F1D] text-white shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7">
            <Image
              src="/img/uniform-tailoring-atelier.jpg"
              alt="Uniform seam calibration"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-[0.62rem] font-bold uppercase tracking-wider text-white mb-2">
                Austin Atelier
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Triple-Needle Stitching
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                Reinforced bar-tacking on stress points ensures zero seam blowouts under tactical mobility.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                120-lb Tensile Strength Certified
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
