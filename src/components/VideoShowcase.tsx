"use client";

import React from "react";
import Image from "next/image";

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5" id="toy-craft">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Craftsmanship &amp; Quality
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Engineered For <span className="text-[#ff4370]">Endless Play</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Inspect the reinforced materials, certified non-toxic coatings, and smooth rounded edges built into every toy.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Action Figures & RC Vehicles */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[400px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl hover:border-[#ff4370]/40">
            <Image
              src="/img/products/action-figure.jpg"
              alt="Detailed superhero action figure toy inspection"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/95 via-[#1e293b]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ff4370] text-[0.62rem] font-black uppercase tracking-widest text-white mb-3 shadow-md">
                Action &amp; Remote Control
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Drop-Tested Durability &amp; Articulated Joints
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Heavy-duty ABS construction tested to withstand toddler drops, dynamic tumbling, and high-speed play.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[#ffb703]">
                <span className="w-2 h-2 rounded-full bg-[#ffb703]" />
                Certified Impact-Resistant ABS
              </div>
            </div>
          </div>

          {/* Card 2: Montessori Puzzles & Board Games */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[400px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl hover:border-[#ff4370]/40">
            <Image
              src="/img/products/wooden-puzzle.jpg"
              alt="Montessori wooden puzzle blocks close up"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/95 via-[#1e293b]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ffb703] text-[0.62rem] font-black uppercase tracking-widest text-[#1e293b] mb-3 shadow-md">
                STEM &amp; Montessori Learning
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Natural Beechwood &amp; Non-Toxic Water Dyes
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Sanded splinter-free wood blocks finished with food-safe non-toxic pastels designed for safe sensory exploration.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[#ffb703]">
                <span className="w-2 h-2 rounded-full bg-[#ffb703]" />
                100% Non-Toxic ASTM Certified
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
