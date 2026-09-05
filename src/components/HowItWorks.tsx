"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] overflow-hidden border-t border-[#C59B7E]/20"
    >
      {/* Ambient Organic Curved Lines in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left Curving Glow Path */}
        <svg
          className="absolute -left-20 bottom-10 w-[380px] sm:w-[480px] md:w-[600px] h-[400px] opacity-25"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 380 C150 380 180 280 180 200 C180 80 280 40 380 40 C440 40 480 80 480 140 C480 220 380 280 280 280 C160 280 140 380 140 450"
            stroke="url(#left-glow-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="left-glow-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C59B7E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#C59B7E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C59B7E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right Curving Glow Path */}
        <svg
          className="absolute -right-20 bottom-4 w-[380px] sm:w-[480px] md:w-[600px] h-[400px] opacity-25"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M650 380 C450 380 420 300 420 220 C420 120 320 60 220 60 C160 60 120 100 120 160 C120 240 220 300 320 300 C440 300 460 400 460 470"
            stroke="url(#right-glow-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="right-glow-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C59B7E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#C59B7E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C59B7E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Radial Center Ambient Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C59B7E]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow */}
        <div className="text-center mb-3">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] inline-block select-none">
            THE ATELIER PROTOCOL
          </span>
        </div>

        {/* Section Header with Flanking Lines & Dot Nodes */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {/* Left Line with Dot Terminal */}
          <div className="flex items-center flex-1 max-w-[100px] sm:max-w-[180px] md:max-w-[240px]">
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#C59B7E]/40 to-[#C59B7E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C59B7E] shadow-[0_0_8px_rgba(197,155,126,0.6)] shrink-0 -ml-1 border border-white" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#18121E] tracking-tight text-center whitespace-nowrap">
            How It <span className="italic text-[#C59B7E]">works</span>
          </h2>

          {/* Right Line with Dot Terminal */}
          <div className="flex items-center flex-1 max-w-[100px] sm:max-w-[180px] md:max-w-[240px]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C59B7E] shadow-[0_0_8px_rgba(197,155,126,0.6)] shrink-0 -mr-1 border border-white z-10" />
            <div className="h-[1.5px] w-full bg-gradient-to-r from-[#C59B7E] via-[#C59B7E]/40 to-transparent" />
          </div>
        </div>

        {/* Vertical Flowchart Container */}
        <div className="flex flex-col items-center">
          
          {/* Start Node */}
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative flex items-center justify-center w-6 h-6">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-[#C59B7E] animate-ping opacity-30" />
              {/* Middle glowing ring */}
              <div className="absolute inset-0.5 rounded-full border border-[#C59B7E] shadow-[0_0_6px_rgba(197,155,126,0.5)]" />
              {/* Center point */}
              <div className="w-2 h-2 rounded-full bg-[#C59B7E]" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-[#18121E] tracking-wide">
              Start
            </span>
          </div>

          {/* Connector Line 1 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-[1.5px] h-7 sm:h-9 bg-gradient-to-b from-[#C59B7E] to-[#A87654]" />
            <svg
              className="w-3.5 h-3.5 text-[#A87654] -mt-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>

          {/* Step 1 Card: Selection & Sizing */}
          <div className="w-full max-w-lg bg-white/95 hover:bg-white border border-[#C59B7E]/30 hover:border-[#C59B7E] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(24,18,30,0.06)] hover:shadow-[0_10px_30px_-6px_rgba(197,155,126,0.22)] flex items-center gap-4 sm:gap-6 group">
            {/* Left Icon: User / Silhouette */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FAF8F6] border border-[#C59B7E]/35 flex items-center justify-center shrink-0 text-[#8C654B] group-hover:scale-105 group-hover:bg-[#18121E] group-hover:text-[#E6C2AC] transition-all duration-300 shadow-2xs">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            {/* Right Text */}
            <div className="text-left flex-1">
              <p className="text-sm sm:text-[0.95rem] text-slate-700 group-hover:text-[#18121E] font-medium leading-relaxed transition-colors">
                We collect your required silhouette choice & bespoke sizing specifications.
              </p>
            </div>
          </div>

          {/* Connector Line 2 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-[1.5px] h-7 sm:h-9 bg-gradient-to-b from-[#A87654] to-[#C59B7E]" />
            <svg
              className="w-3.5 h-3.5 text-[#C59B7E] -mt-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>

          {/* Step 2 Card: Artisan Craft & Draping */}
          <div className="w-full max-w-lg bg-white/95 hover:bg-white border border-[#C59B7E]/30 hover:border-[#C59B7E] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(24,18,30,0.06)] hover:shadow-[0_10px_30px_-6px_rgba(197,155,126,0.22)] flex items-center gap-4 sm:gap-6 group">
            {/* Left Icon: Geometric Aperture / Artisan Rosette */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FAF8F6] border border-[#C59B7E]/35 flex items-center justify-center shrink-0 text-[#8C654B] group-hover:scale-105 group-hover:bg-[#18121E] group-hover:text-[#E6C2AC] transition-all duration-300 shadow-2xs">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            {/* Right Text */}
            <div className="text-left flex-1">
              <p className="text-sm sm:text-[0.95rem] text-slate-700 group-hover:text-[#18121E] font-medium leading-relaxed transition-colors">
                Our master artisans hand-cut, drape, & tailor your pure silk or cashmere piece.
              </p>
            </div>
          </div>

          {/* Connector Line 3 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-[1.5px] h-7 sm:h-9 bg-gradient-to-b from-[#C59B7E] to-[#A87654]" />
            <svg
              className="w-3.5 h-3.5 text-[#A87654] -mt-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>

          {/* Step 3 Card: Signature Packaging & Dispatch */}
          <div className="w-full max-w-lg bg-white/95 hover:bg-white border border-[#C59B7E]/30 hover:border-[#C59B7E] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(24,18,30,0.06)] hover:shadow-[0_10px_30px_-6px_rgba(197,155,126,0.22)] flex items-center gap-4 sm:gap-6 group">
            {/* Left Icon: Luxury Mail / Signature Parcel Enclosure */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FAF8F6] border border-[#C59B7E]/35 flex items-center justify-center shrink-0 text-[#8C654B] group-hover:scale-105 group-hover:bg-[#18121E] group-hover:text-[#E6C2AC] transition-all duration-300 shadow-2xs">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            {/* Right Text */}
            <div className="text-left flex-1">
              <p className="text-sm sm:text-[0.95rem] text-slate-700 group-hover:text-[#18121E] font-medium leading-relaxed transition-colors">
                The garment is dispatched via {siteConfig.shippingCarrier || "UPS"} in our signature luxury gift enclosure.
              </p>
            </div>
          </div>

          {/* Connector Line 4 leading to Final Badge */}
          <div className="flex flex-col items-center py-1">
            <div className="w-[1.5px] h-7 sm:h-9 bg-gradient-to-b from-[#A87654] to-[#C59B7E]" />
            <svg
              className="w-3.5 h-3.5 text-[#C59B7E] -mt-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>

          {/* Final Node: Scalloped Checkmark Badge & Success Highlight */}
          <div className="w-full max-w-lg flex items-center gap-3.5 sm:gap-4.5 pt-1 pl-1">
            {/* Scalloped / Radiant Starburst Checkmark Badge */}
            <div className="relative shrink-0 flex items-center justify-center">
              {/* Scallop shape via SVG */}
              <svg
                className="w-9 h-9 sm:w-10 sm:h-10 text-[#C59B7E] filter drop-shadow-[0_2px_8px_rgba(197,155,126,0.45)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l2.4 2.1 3.2-.5 1.5 2.8 3.1 1.2-.4 3.2 2.1 2.4-2.1 2.4.4 3.2-3.1 1.2-1.5 2.8-3.2-.5L12 22l-2.4-2.1-3.2.5-1.5-2.8-3.1-1.2.4-3.2-2.1-2.4 2.1-2.4-.4-3.2 3.1-1.2 1.5-2.8 3.2.5L12 2z" />
              </svg>
              {/* Inner Checkmark Icon */}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute inset-0 m-auto stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Completion Text */}
            <p className="text-xs sm:text-sm text-slate-600 leading-snug text-left">
              <span className="text-[#8C654B] font-bold">Once Delivered,</span>{" "}
              Congratulations you experience flawless couture drape with our {siteConfig.trialPeriod || 14}-day fit trial.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
