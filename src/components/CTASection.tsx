"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl md:grid-cols-2 bg-[#0A0F1D] text-white shadow-xl">
          
          {/* Left — Image */}
          <div className="relative min-h-64 sm:min-h-80 md:min-h-full bg-black/10">
            <img
              src="/img/hero-uniforms.jpg"
              alt="Ironvale workforce team apparel"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#0A0F1D]/20 md:to-[#0A0F1D]" />

            {/* Stat badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 rounded-2xl bg-[#0A0F1D]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xs border border-white/10">
              <div className="flex -space-x-2">
                {[
                  "/img/stories/story-tactical.jpg",
                  "/img/stories/story-medical.jpg",
                  "/img/stories/story-culinary.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="h-7 w-7 flex-shrink-0 rounded-full border-2 border-[#0A0F1D] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xs font-bold text-white">45,000+</div>
                <div className="text-[0.6rem] font-medium uppercase tracking-wider text-slate-300">
                  Outfitted
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 text-white">
            <div className="mb-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-white/70 select-none">
              FLEET OUTFITTING
            </div>

            <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.08] tracking-tight text-white">
              Upgrade Your Workforce <br />
              <span className="font-bold text-white">Apparel Standard.</span>
            </h2>

            <p className="mb-6 max-w-md text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
              Heavy-duty tactical workwear, antimicrobial scrubs, and chef coats. Dispatched via {siteConfig.shippingCarrier} with our {siteConfig.trialPeriod || 14}-day fit guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-[#0A0F1D] bg-white hover:bg-slate-200 px-6 py-3 rounded-full transition-all text-center"
              >
                Shop Catalog →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-wider border border-white/20 px-6 py-3 rounded-full transition-all hover:bg-white/10 text-center text-white font-bold"
              >
                Fleet Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
