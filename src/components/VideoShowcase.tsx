"use client";

import React from "react";
import Image from "next/image";

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="uniform-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f2b48] leading-[1.08]">
            Engineered For <span className="text-[#f59e0b]">Daily Shifts</span>
          </h2>
          <p className="text-black/70 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Inspect the reinforced construction, stain-resistant poplin, and heavy-duty stitching built into every uniform piece.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Work Shirts */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl hover:border-[#0f2b48]/30">
            <Image
              src="/img/videoshowcase_shirt.jpg"
              alt="Industrial technician wearing reinforced two-tone work uniform shirt"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2238]/95 via-[#0f2b48]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0f2b48] text-[0.62rem] font-black uppercase tracking-widest text-[#f59e0b] mb-3 shadow-md border border-white/20">
                Work Shirts &amp; Tops
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Stain-Release &amp; Seam Durability
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Commercial-grade poplin engineered with reinforced double-needle seams to withstand repetitive industrial laundry cycles.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                Double-Needle Reinforced Seams
              </div>
            </div>
          </div>

          {/* Card 2: Utility Bottoms & Safety */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl hover:border-[#0f2b48]/30">
            <Image
              src="/img/videoshowcase_pants.jpg"
              alt="Field worker wearing high-vis safety gear and utility cargo work pants"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2238]/95 via-[#0f2b48]/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0f2b48] text-[0.62rem] font-black uppercase tracking-widest text-[#f59e0b] mb-3 shadow-md border border-white/20">
                Utility Bottoms &amp; Outerwear
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Triple-Stitching &amp; Hardware
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Heavy-duty commercial cargo trousers featuring reinforced pocket rivets, brass zipper fly, and articulated knees for mobility.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-[#f59e0b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                Triple-Stitched Main Seams
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
