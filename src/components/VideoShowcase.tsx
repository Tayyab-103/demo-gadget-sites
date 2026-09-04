"use client";

import React from "react";
import Image from "next/image";

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="athlete-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0d3b2e] leading-[1.08]">
            Designed For <span className="text-[#0d4a36]">Training</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            See our compression baselayers and hoodies in action during daily workout routines.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Compression */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl hover:border-[#0d4a36]/30">
            <Image
              src="/img/lab1.jpg"
              alt="Athletes training in compression activewear"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e22]/95 via-[#0d3b2e]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0d4a36] text-[0.62rem] font-black uppercase tracking-widest text-white mb-3 shadow-md border border-white/20">
                Baselayers &amp; Tops
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Comfort &amp; Moisture Control
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Flexible four-way stretch fabrics with flatlock seams to minimize chafing during workouts.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Flatlock Anti-Chafe Seams
              </div>
            </div>
          </div>

          {/* Card 2: Outerwear */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl hover:border-[#0d4a36]/30">
            <Image
              src="/img/lab2.jpg"
              alt="Technical fleece hoodie conditioning"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e22]/95 via-[#0d3b2e]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0d4a36] text-[0.62rem] font-black uppercase tracking-widest text-white mb-3 shadow-md border border-white/20">
                Outerwear &amp; Hoodies
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Warmth &amp; Flexibility
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Comfortable fleece layers designed for warmups, cool-downs, and casual athletic wear.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Four-Way Stretch Knit
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
