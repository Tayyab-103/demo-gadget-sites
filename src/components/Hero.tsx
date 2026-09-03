"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-black/[0.04]">
      {/* Subtle diagonal grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
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
      {/* Soft ambient radial lighting */}
      <div
        className="absolute -top-40 right-1/4 w-[600px] h-[600px] pointer-events-none rounded-full bg-[#5B6BF0]/[0.04] blur-[120px]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 z-10">

        {/* ══════════════════════════════════════════
            TOP EYEBROW & RATING SOCIAL PROOF
            ══════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F6] border border-black/[0.06] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#5B6BF0] animate-pulse" />
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#111]">
              INDUSTRIAL-GRADE ELECTRICAL SOLUTIONS
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            HEADLINE & DESCRIPTION ROW
            ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-8">
            <h1 className="text-[2.2rem] sm:text-[3.2rem] lg:text-[4.2rem] font-black uppercase tracking-tight text-[#111] leading-[1.05] italic">
              Precision Electrical Parts <br />
              {/* <span className="text-neutral-text/45 font-medium not-italic block sm:inline">
                &amp; High-Performance Equipment
              </span> */}
            </h1>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DUAL HERO IMAGE SHOWCASE (hero1.jpg & hero2.jpg)
            ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

          {/* Left Primary Showcase Card: hero1.jpg */}
          <div className="lg:col-span-7 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#111] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] group min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8">
            <img
              src="/img/hero1.jpg"
              alt="Precision electrical diagnostic equipment and technician workbench"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#111] text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                Diagnostic &amp; Calibration
              </span>
              <span className="bg-black/60 backdrop-blur-md text-white/90 text-[0.65rem] font-mono font-semibold px-3 py-1 rounded-full border border-white/10">
                CAT IV 600V • True-RMS
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 max-w-lg">
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-snug mb-2">
                Engineered for Exacting Calibration &amp; Maximum Jobsite Safety
              </h2>
              <p className="text-white/70 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2">
                High-contrast LCD digital multimeters with silicone anti-shock armor designed to catch micro-voltage variations with zero lag.
              </p>
            </div>
          </div>

          {/* Right Secondary Showcase Card: hero2.jpg */}
          <div className="lg:col-span-5 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#111] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] group min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8">
            <img
              src="/img/hero2.jpg"
              alt="Industrial power infrastructure and high voltage electrical components"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#111] text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Heavy-Duty Hardware
              </span>
              <span className="bg-black/60 backdrop-blur-md text-white/90 text-[0.65rem] font-mono font-semibold px-3 py-1 rounded-full border border-white/10">
                24AWG • High-Carbon Steel
              </span>
            </div>

            {/* Bottom Content with Quick Link */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="max-w-xs">
                <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight leading-snug mb-1">
                  Power Adapters &amp; Magnetic Drive Bits
                </h3>
                <p className="text-white/70 text-xs font-normal leading-relaxed line-clamp-2">
                  Built to withstand high torque, extreme heat cycles, and continuous commercial duty.
                </p>
              </div>

              <Link
                href="/shop"
                className="w-12 h-12 rounded-full bg-white text-[#111] hover:bg-[#5B6BF0] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg flex-shrink-0 group/btn"
                aria-label="View all electrical products"
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
                  className="transition-transform duration-300 group-hover/btn:rotate-45"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
