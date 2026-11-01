"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#141F1A] text-white" id="cta">
      {/* Subtle radial warmth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 90% 50%, color-mix(in srgb, var(--secondary-color) 12%, transparent), transparent)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-12 min-h-[480px] relative z-10">
        
        {/* Left: Content Stage */}
        <div className="flex flex-col justify-center px-4 sm:px-8 md:px-12 py-14 sm:py-20 lg:col-span-7">
          <span className="block text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
            Seasonal Travel Promotion
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
            Pack Smarter. <br />
            Travel Farther with <br />
            <span className="text-secondary">{siteConfig.brandName}</span>
          </h2>

          <div className="mb-6 w-10 h-px bg-secondary" />

          <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-8 font-normal">
            Equip your journeys with luggage and organizers that outlast every itinerary. Bundle multiple pieces today to save up to 40% with fast free nationwide delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              href="/#shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-white hover:opacity-90 transition-all duration-200 py-3.5 px-8 rounded-[3px] text-xs font-bold uppercase tracking-widest text-center"
            >
              <span>Explore Gear &amp; Save</span>
              <span>→</span>
            </Link>

            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-8 rounded-[3px] border border-white/20 hover:bg-white/10 text-white transition-all text-xs font-bold uppercase tracking-widest text-center"
            >
              Contact Support
            </Link>
          </div>

          {/* Quick reassurance strip */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-8 text-[0.7rem] text-white/60 font-medium uppercase tracking-wider">
            <span>✓ 60-Day Trial</span>
            <span>✓ 1-Year Warranty</span>
            <span>✓ Secure Checkout</span>
          </div>
        </div>

        {/* Right: Cinematic Showcase */}
        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-full lg:col-span-5 overflow-hidden">
          <video
            src="/cta-video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141F1A] lg:bg-gradient-to-r lg:from-[#141F1A] lg:via-transparent lg:to-transparent" />
        </div>

      </div>
    </section>
  );
}
