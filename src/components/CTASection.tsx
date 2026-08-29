"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl sm:rounded-4xl shadow-2xl md:grid-cols-2 bg-[#0D1B2A] text-white border border-[#C87D3B]/30">
          
          {/* Left — Image */}
          <div className="relative min-h-72 sm:min-h-88 md:min-h-full bg-black/10">
            <img
              src="/img/hero-luggage-travel.jpg"
              alt="Wanderloom luxury travel and airport luggage"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=1200&q=80";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#0D1B2A]/20 md:to-[#0D1B2A]" />

            {/* Stat badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3.5 rounded-2xl bg-[#0D1B2A]/90 px-4 py-3 shadow-2xl backdrop-blur-md border border-[#C87D3B]/40">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-[#C87D3B] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-white">25,000+</div>
                <div className="text-[0.62rem] font-bold uppercase tracking-wider text-[#C87D3B]">
                  Travelers Equipped
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content panel */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 text-white">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#C87D3B]/40 px-4 py-1 text-[0.68rem] font-bold uppercase tracking-widest bg-[#C87D3B]/20 text-[#C87D3B]">
              <span>✈</span>
              Priority Boarding Ready
            </span>

            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white uppercase">
              Upgrade Your Next <br />
              <span className="text-[#C87D3B] font-light italic lowercase">Global Departure</span>
            </h2>

            <p className="mb-8 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-white/80 font-normal">
              Acquire aerospace aluminum carry-on spinners, Italian leather weekender bags, and modular compression packing sets directly from {siteConfig.brandName}. Fast tracked {siteConfig.shippingCarrier} dispatch with {siteConfig.trialPeriod || 14}-day worldwide flight trial.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#C87D3B] px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:bg-[#D98745] text-center hover:scale-105"
              >
                Shop Luggage &amp; Gear →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-wider border border-white/40 px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 text-center text-white font-semibold"
              >
                Travel Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
