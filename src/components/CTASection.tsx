"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl sm:rounded-4xl shadow-2xl md:grid-cols-2 bg-[#121820] text-[#FAF8F5] border border-[#C5A059]/30">
          
          {/* Left — Image */}
          <div className="relative min-h-72 sm:min-h-88 md:min-h-full bg-black/10">
            <img
              src="/img/cta-workspace-banner.jpg"
              alt="Luxury executive stationery workspace"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1200&q=80";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121820] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#121820]/20 md:to-[#121820]" />

            {/* Stat badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3.5 rounded-2xl bg-[#FAF8F5]/95 px-4 py-3 shadow-xl backdrop-blur-md border border-[#C5A059]/30">
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
                    className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-[#C5A059] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-serif font-bold text-[#121820]">15,000+</div>
                <div className="text-[0.62rem] font-bold uppercase tracking-wider text-[#C5A059]">
                  Patrons Equipped
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content panel */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 text-[#FAF8F5]">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#C5A059]/40 px-4 py-1 text-[0.68rem] font-serif uppercase tracking-widest bg-[#C5A059]/15 text-[#C5A059]">
              <span>✦</span>
              Bespoke &amp; Executive Ready
            </span>

            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight tracking-tight text-[#FAF8F5]">
              Elevate Your Workspace <br />
              <span className="text-[#C5A059] italic font-normal">&amp; Written Legacy</span>
            </h2>

            <p className="mb-8 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-[#FAF8F5]/80 font-normal">
              Acquire handcrafted fountain pens, bleedproof leather journals, and precision solid brass desk suites directly from {siteConfig.brandName}. Fast nationwide {siteConfig.shippingCarrier} shipping with tracking on every order.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-[#121820] bg-[#C5A059] px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:bg-[#D4AF37] text-center hover:scale-105"
              >
                Shop Signature Collection →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-serif text-xs sm:text-sm uppercase tracking-wider border border-[#C5A059]/60 px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-[#C5A059]/20 text-center text-[#FAF8F5]"
              >
                Atelier Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
