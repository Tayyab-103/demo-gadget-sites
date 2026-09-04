"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CtaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#E5E6EB] relative overflow-hidden" id="cta-banner">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 z-10">

        {/* Large Rounded CTA Banner Canvas */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-[#111] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/[0.06] p-8 sm:p-14 lg:p-20 flex flex-col justify-between min-h-[440px] sm:min-h-[500px]">

          {/* Background Image: /img/cta.jpg */}
          <img
            src="/img/cta.jpg"
            alt="Electrical parts and precision diagnostic tools workshop"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-105"
          />

          {/* Ambient Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 pointer-events-none" />

          {/* Top Row: Eyebrow + Guarantee Badge */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
              <span className="w-2 h-2 rounded-full bg-[#5B6BF0] animate-pulse" />
              <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em]">
                UPGRADE YOUR WORKSHOP &amp; FIELD GEAR
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs font-mono bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              <span>⚡</span>
              <span>100% NIST-Traceable Calibrated</span>
            </div>
          </div>

          {/* Center Content: Headline & Subtitle */}
          <div className="relative z-10 max-w-2xl my-8 sm:my-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[1.08] italic">
              Ready to Equip Your Team With Certified Electrical Parts?
            </h2>

            <p className="text-xs sm:text-base text-white/75 leading-relaxed font-normal">
              Join thousands of master electricians, facility directors, and automation engineers who rely on {siteConfig.brandName} for precision diagnostics and heavy-duty hardware.
            </p>

            {/* 4 Feature Checklist Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 text-xs text-white/85">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Tracked {siteConfig.shippingCarrier} nationwide dispatch in 1-2 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{siteConfig.trialPeriod}-Day satisfaction trial guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Bulk multi-pack volume discount pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Direct electrical engineer technical support</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: CTAs & Trust Badges */}
          <div className="relative z-10 flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#5B6BF0] text-[#111] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              <span>Explore Equipment Catalog</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-colors border border-white/20"
            >
              Request Custom / Bulk Quote
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
