"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#141312] text-white relative overflow-hidden">
      {/* Subtle copper glow background */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        
        <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
            Join 25k+ Equipped Kitchens
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
          Ready to Elevate Your <br />
          <span className="text-secondary">Culinary Craft?</span>
        </h2>

        <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Equip your kitchen with commercial-grade balloon whisks, ultra-precise digital scales, and Japanese steel kitchen shears. Backed by our 60-day money-back guarantee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E5F2C9] text-[#0E0F11] font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-lg hover:bg-white transition-all shadow-md"
          >
            Shop The Collection &rarr;
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg border border-white/20 text-white hover:border-white hover:bg-white/10 transition-all"
          >
            Learn Our Story
          </Link>
        </div>

        {/* Micro guarantees */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[0.68rem] font-bold uppercase tracking-widest text-white/50 pt-8 border-t border-white/10">
          <span>✓ 100% Food-Safe</span>
          <span>✓ Fast Nationwide Shipping</span>
          <span>✓ 60-Day Money-Back Trial</span>
          <span>✓ 1-Year Full Warranty</span>
        </div>

      </div>
    </section>
  );
}
