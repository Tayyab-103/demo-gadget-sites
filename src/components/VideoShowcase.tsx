"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] border-t border-[#C59B7E]/20" id="textile-atelier">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-2 select-none">
            TEXTILE ARTISTRY &amp; STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-3">
            Pure Noble Fibers <br className="hidden sm:inline" />
            <span className="italic text-[#C59B7E]">In Every Stitch.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Inside the {siteConfig.brandName} materials laboratory. Sourced sustainably from heritage silk mills and French lace looms.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#18121E] text-white shadow-xl min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-7 sm:p-8 border border-[#C59B7E]/30">
            <Image
              src="/img/products/product-silk-slip.jpg"
              alt="Pure Mulberry Silk Charmeuse"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18121E] via-[#18121E]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#C59B7E]/25 text-[0.62rem] font-bold uppercase tracking-widest text-[#E6C2AC] mb-2.5 border border-[#C59B7E]/40">
                22-Momme Mulberry Silk
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                Fluid Bias-Cut Silk Charmeuse
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 font-light">
                Naturally hypoallergenic, temperature-regulating, with a luminous pearlescent sheen and effortless liquid drape.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[#C59B7E]">
                Grade 6A Mulberry Filament Certified
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#18121E] text-white shadow-xl min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-7 sm:p-8 border border-[#C59B7E]/30">
            <Image
              src="/img/products/product-lace-gown.jpg"
              alt="French Corded Chantilly Lace"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18121E] via-[#18121E]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#C59B7E]/25 text-[0.62rem] font-bold uppercase tracking-widest text-[#E6C2AC] mb-2.5 border border-[#C59B7E]/40">
                French Haute Couture Lace
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                Corded Chantilly &amp; Silk Organza
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 font-light">
                Intricate botanical motifs paired with concealed corset boning that supports while enhancing natural grace.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[#C59B7E]">
                Hand-Embroidered Pearl Detailing
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
