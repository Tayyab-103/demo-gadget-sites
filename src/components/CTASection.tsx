"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-bg" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl md:grid-cols-2 bg-secondary">
          {/* Left — Image */}
          <div className="relative min-h-64 sm:min-h-80 md:min-h-full">
            <img
              src="/img/cold1.jpg"
              alt="Plumbing engineers and precision hydronic supply hardware"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent md:bg-gradient-to-r" />

            {/* Stat badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
                ].map((src) => (
                  <img key={src} src={src} alt="" aria-hidden="true" className="h-7 w-7 flex-shrink-0 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-primary">25,000+</div>
                <div className="text-[0.6rem] font-semibold uppercase tracking-wider text-neutral-text/60">Parts Dispatched</div>
              </div>
            </div>
          </div>

          {/* Right — Content panel */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 text-secondary-text">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-secondary-text/25 px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider bg-black/10">
              Contractor &amp; DIY Ready
            </span>

            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight tracking-tight">
              Equip Your Next Job with Master-Grade Fittings
            </h2>

            <p className="mb-8 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-secondary-text/85">
              Order precision brass compression fittings, shutoff valves, and hydronic supply lines directly from {siteConfig.brandName}. Fast nationwide UPS shipping on every order.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-primary-text bg-primary px-7 py-3.5 rounded-full shadow-md transition-all duration-200 hover:brightness-125 text-center"
              >
                Shop Catalog &rarr;
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-secondary-text/30 px-7 py-3 rounded-full transition-all duration-200 hover:bg-secondary-text/15 text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
