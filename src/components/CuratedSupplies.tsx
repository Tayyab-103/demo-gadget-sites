"use client";

import React from "react";
import Link from "next/link";

export default function CuratedSupplies() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-black/5" id="curated-supplies">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
        {/* Left Column: Clean Editorial Content */}
        <div className="flex flex-col justify-center px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-18 order-2 lg:order-1">
          <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2 sm:mb-3">
            Handcrafted in Small Batches
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Archival Supplies for <br className="hidden sm:inline" />
            <span className="text-secondary">Visionary Artists</span>
          </h2>

          <p className="text-[#5A554E] text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-7 max-w-lg font-normal">
            Discover studio-grade botanical inks, cold-pressed archival cotton papers, and hand-fitted sable brushes crafted for painters, calligraphers, and creators who demand generational permanence.
          </p>

          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Discover Collection
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Studio Image */}
        <div className="relative w-full min-h-[260px] sm:min-h-[340px] lg:min-h-full overflow-hidden order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&q=80"
            alt="Artist studio wall art and creative workspace"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
