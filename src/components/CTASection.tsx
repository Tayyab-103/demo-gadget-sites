"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-[#F8F6F2]" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#121316] rounded-[2.5rem] p-8 sm:p-12 md:p-14 text-white relative overflow-hidden border border-white/10 shadow-xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E06830]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#E06830]/30 text-[#E06830] text-xs font-bold uppercase tracking-wider mb-4">
                <span>✦</span>
                <span>Special Foundry Toolset Offer</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Equip Your Prep Counter <br />
                <span className="text-[#E06830] italic font-serif">With Master-Forged Tools</span>
              </h2>

              <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-8">
                Bundle the 12-wire balloon whisk, 0.1g digital scale, and multi-prep chef shears today for automatic volume discounts and free nationwide UPS tracked shipping.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#E06830] text-white hover:bg-white hover:text-[#121316] transition-all duration-300 py-3.5 px-8 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg text-center"
                >
                  <span>Shop Tool Bundles &amp; Save</span>
                  <span className="text-sm">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold text-center bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 py-3.5 px-7 rounded-full text-xs uppercase tracking-widest"
                >
                  Contact Culinary Concierge
                </Link>
              </div>
            </div>

            {/* Right Mini Trust Box (4 cols) */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col gap-3.5 text-xs text-white/90">
              <div className="flex items-center gap-2.5">
                <span className="text-[#E06830] font-bold">✓</span>
                <span>{siteConfig.trialPeriod}-Day Risk-Free Culinary Trial</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#E06830] font-bold">✓</span>
                <span>100% Forged Food-Safe Stainless Alloys</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#E06830] font-bold">✓</span>
                <span>{siteConfig.shippingCarrier} Fast Tracked Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#E06830] font-bold">✓</span>
                <span>Dedicated Workshop Support</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
