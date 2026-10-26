"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, products, trialDays } from "@/lib/brandIcon";

const marqueeWords = [
  "Compression baselayers",
  "Zip training hoodies",
  "Cushioned crew socks",
  `Free ${siteConfig.shippingCarrier} shipping`,
  `${trialDays}-day returns`,
  "Bundle & save",
];

export default function Hero() {

  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-text pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-20">
        <div className="absolute inset-0 peak-pattern opacity-60" aria-hidden="true" />
        <div
          className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full bg-secondary/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <span className="eyebrow eyebrow-light">{siteConfig.Product || "Sporting Apparel"}</span>

            <h1 className="mt-5 text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              Train hard.
              <br />
              Reach your <span className="text-secondary">peak.</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-white/75">
              Three training essentials, done properly: a compression baselayer that stays put, a zip hoodie
              for warmups, and crew socks with real cushioning. Sold singly or in money-saving bundles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-gold">
                Shop the collection
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="#how-it-works" className="btn-ghost text-white hover:bg-white hover:text-primary">
                How it works
              </a>
            </div>

          </div>

          {/* Image collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4 h-[380px] sm:h-[500px] lg:h-[560px]">
              <div className="col-span-3 row-span-2 relative rounded-[1.75rem] overflow-hidden ring-1 ring-white/10">
                <img
                  src="/img/herosection1.jpg"
                  alt="Two players on a clay court in matching athletic apparel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 relative rounded-[1.75rem] overflow-hidden ring-1 ring-white/10">
                <img
                  src="/img/herosection2.jpg"
                  alt="Athlete in a black training tee with arm sleeve"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="col-span-2 relative rounded-[1.75rem] overflow-hidden bg-secondary ring-1 ring-white/10">
                <img
                  src="/img/herosection3.jpg"
                  alt="Training shirt, shorts and running shoes laid out"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating product card */}
            <Link
              href="/shop"
              className="absolute -bottom-6 left-4 sm:left-6 flex items-center gap-3 rounded-2xl bg-white text-ink p-2.5 pr-5 shadow-2xl hover:-translate-y-0.5 transition-transform"
              style={{ animation: "floatSlow 6s ease-in-out infinite" }}
            >
              <span className="flex -space-x-3">
                {products.map((p) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt=""
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white bg-mist"
                  />
                ))}
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-black uppercase tracking-wide">{products.length} essentials</span>
                <span className="block text-[0.68rem] text-muted">Singles or packs up to 8</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gold marquee strip */}
      <div className="bg-secondary text-secondary-text py-3.5 overflow-hidden border-y border-primary/10" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {marqueeWords.map((w) => (
                <span key={w + dup} className="flex items-center gap-6 px-6 text-xs sm:text-sm font-black uppercase tracking-[0.18em] whitespace-nowrap">
                  {w}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 20 9.5 6l4 6.5L16 9l6 11Z" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
