"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl sm:rounded-4xl shadow-2xl md:grid-cols-2 bg-black text-white">
          
          {/* Left — Image */}
          <div className="relative min-h-72 sm:min-h-88 md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80"
              alt="High performance athletic apparel and training sportswear"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r" />

            {/* Stat badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3.5 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">
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
                    className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-black">10,000+</div>
                <div className="text-[0.62rem] font-bold uppercase tracking-wider text-black/60">
                  Athletes Equipped
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content panel */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 text-white">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[0.68rem] font-black uppercase tracking-widest bg-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Athlete &amp; Team Ready
            </span>

            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-white">
              Gear Up For Your <span className="text-secondary">Next Milestone</span>
            </h2>

            <p className="mb-8 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-white/80 font-normal">
              Order precision athletic training hoodies, compression baselayers, and zoned performance crew socks directly from {siteConfig.brandName}. Fast nationwide UPS shipping on every order.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-black text-xs sm:text-sm uppercase tracking-wider text-black bg-secondary px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:brightness-110 text-center hover:scale-105"
              >
                Shop Collection →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white/40 px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/15 text-center text-white"
              >
                Athlete Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
