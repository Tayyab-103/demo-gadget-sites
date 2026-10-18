"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-neutral-bg py-16 md:py-20" id="cta">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&q=80')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 p-8 sm:p-12 md:p-16 lg:grid-cols-[1.4fr_1fr]">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-text">
                Bundle &amp; Save
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Treat Yourself, <span className="text-primary">Gift Someone</span> Golden
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/70 md:text-base lg:mx-0">
                Add more pieces to your bundle and the price per piece drops, so it&apos;s easy to keep one and give
                one. Every order ships free in our keepsake box.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              {[
                `Free ${siteConfig.shippingCarrier} shipping, ${siteConfig.shippingPeriod} business days`,
                `${siteConfig.trialPeriod}-day money-back guarantee`,
                "Keepsake gift box with every piece",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[0.7rem] font-black text-primary-text" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
              <Link
                href="/#shop"
                className="group mt-3 inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-white"
              >
                Start Your Bundle
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
