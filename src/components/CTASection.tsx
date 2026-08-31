"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden bg-[#0A0B0E] text-white" id="cta">
      {/* Studio lighting glow */}
      <div className="studio-spotlight -top-40 left-1/2 -translate-x-1/2 opacity-50" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dark Glass Content Card */}
        <div className="rounded-3xl p-6 sm:p-10 md:p-12 text-center border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 mb-5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-[0.65rem] font-black uppercase tracking-wider text-white/90">
              2026 Gear Edition
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4 max-w-2xl mx-auto">
            Upgrade Your Training. <br />
            <span className="text-gradient-lime">Speed Up Recovery.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-lg mx-auto leading-relaxed mb-8">
            Experience pro-grade performance with {siteConfig.brandName}. Backed by our 60-day trial and 1-year replacement guarantee.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-secondary px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_25px_rgba(14,165,233,0.3)] active:scale-[0.98]"
            >
              <span>Shop The Collection</span>
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[0.65rem] font-bold uppercase tracking-wider text-white/60">
            <span className="flex items-center gap-1.5">
              <span className="text-secondary">✓</span> 60-Day Trial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-secondary">✓</span> 1-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-secondary">✓</span> Fast Nationwide Shipping
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
