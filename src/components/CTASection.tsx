"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-white" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-14 text-white relative overflow-hidden border border-secondary/30 shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-black uppercase tracking-wider mb-4">
                <span>⚡</span>
                <span>Special Hardware Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight uppercase">
                Upgrade Your Daily Setup <br />
                <span className="text-secondary">With Circuit Precision</span>
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-6 font-normal">
                Bundle GaN fast chargers, ANC wireless earbuds, and 3-in-1 magnetic charging stands today for multi-tier volume discounts and expedited {siteConfig.shippingCarrier} delivery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2.5 bg-secondary text-secondary-text hover:brightness-110 transition-all duration-300 py-3.5 px-8 rounded-xl text-xs font-black uppercase tracking-widest shadow-md hover:shadow-lg text-center"
                >
                  <span>Shop Hardware Bundles</span>
                  <span className="text-sm">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold text-center bg-transparent border border-white/30 text-white hover:border-secondary hover:text-secondary transition-all duration-300 py-3.5 px-7 rounded-xl text-xs uppercase tracking-widest"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Right Mini Trust Box (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col gap-3.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-black">✓</span>
                <span>{siteConfig.trialPeriod}-Day Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-black">✓</span>
                <span>Certified GaN Semiconductor Tech</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-black">✓</span>
                <span>{siteConfig.shippingCarrier} Tracked Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-black">✓</span>
                <span>Direct Hardware Support: {siteConfig.phone}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
