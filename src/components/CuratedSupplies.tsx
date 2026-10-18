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
            Woven With Care
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Natural Textiles for <br className="hidden sm:inline" />
            <span className="text-secondary">Every Home &amp; Project</span>
          </h2>

          <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-7 max-w-lg font-normal">
            From soft cotton terry and breathable linens to hand-knit throws and woven fiber baskets, our piece goods are chosen for sewists, quilters, makers, and anyone who loves the feel of honest, well-made fabric.
          </p>

          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Shop Fabrics
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Studio Image */}
        <div className="relative w-full min-h-[260px] sm:min-h-[340px] lg:min-h-full overflow-hidden order-1 lg:order-2">
          <img
            src="/img/products/product2-1.jpg"
            alt="Hand-knit cotton throw draped in a woven basket"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
