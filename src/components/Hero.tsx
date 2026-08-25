"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function Hero() {
  const p1 = products[0];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle diagonal marble/wave texture background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 80px,
            #000 80px,
            #000 81px
          )`,
        }}
      />
      {/* Soft radial wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230,230,235,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-10 sm:pb-14">

        {/* ═══════════════════════════════════════
            HEADLINE + SUBTITLE + CTA ROW
            ═══════════════════════════════════════ */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] xl:text-[3.8rem] font-black uppercase tracking-tight text-[#111] leading-[1.08] italic">
            Your Power, Our Precision
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-3">
            <p className="text-sm sm:text-[0.95rem] text-neutral-text/50 font-medium tracking-wide">
              Exceeding Standards In Industrial Electrical Solutions
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#333] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-sm flex-shrink-0"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            MAIN IMAGE BANNER (with overlaid info card + arrow)
            ═══════════════════════════════════════ */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_50px_-12px_rgba(0,0,0,0.2)] group">
          {/* Dual image layout mimicking reference (two side-by-side photos of modern infrastructure) */}
          <div className="flex">
            <div className="w-1/2 relative bg-[#1A1D24]">
              <img
                src="/img/hero/hero_left.jpg"
                alt="Modern commercial infrastructure"
                className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02] filter brightness-95"
              />
            </div>
            <div className="w-1/2 relative bg-[#1A1D24]">
              <img
                src="/img/hero/hero_right.jpg"
                alt="Industrial power architecture"
                className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02] filter brightness-95"
              />
            </div>
          </div>

          {/* Dark vignette overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Overlaid Info Card (bottom-left) — matching reference dark glass card */}
          <div className="absolute bottom-5 left-5 right-20 sm:right-24 z-10">
            {/* "NEW" tag with indicator dot */}
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-[6px] h-[6px] rounded-full bg-[#5B6BF0] animate-pulse" />
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white/60">
                Featured
              </span>
            </div>
            <h2 className="text-white text-base sm:text-lg lg:text-xl font-bold tracking-tight leading-snug">
              Leaders in precision electrical equipment
            </h2>
            <p className="text-white/50 text-[0.7rem] sm:text-xs font-medium mt-1.5 max-w-[520px] leading-relaxed line-clamp-2">
              Our product range includes diagnostic multimeters, thermal clamp meters, industrial power inverters, and certified testing equipment.
            </p>
          </div>

          {/* Circular arrow button (bottom-right) — matching reference */}
          <Link
            href="/shop"
            className="absolute bottom-5 right-5 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#111] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 group/arrow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 group-hover/arrow:rotate-45"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
