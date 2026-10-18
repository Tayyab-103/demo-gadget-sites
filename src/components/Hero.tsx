"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import TypewriterText from "@/components/TypewriterText";
import HeroCarousel from "@/components/HeroCarousel";

const rotatingPhrases = ["Glow Every Day", "Be Gifted", "Be Treasured", "Turn Heads"];

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];
const featured = products[0];
const featuredPrice = featured?.bundles?.[0]?.price ?? featured?.ssPrice;

const proofPoints = [
  {
    label: `Free ${siteConfig.shippingCarrier} Shipping`,
    icon: (
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    ),
  },
  {
    label: `${siteConfig.trialPeriod}-Day Money-Back`,
    icon: <path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" />,
  },
  {
    label: "Keepsake Gift Box",
    icon: <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />,
  },
  {
    label: "Secure Checkout",
    icon: <path d="M5 11h14v11H5zM7 11V7a5 5 0 0 1 10 0v4" />,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-bg">
      {/* Soft yellow wash + dotted texture */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] bg-accent-light lg:block" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute right-[38%] top-16 hidden h-40 w-40 opacity-70 lg:block" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-12 pb-16 md:pt-16 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-20 lg:pb-24">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-accent-light px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            The {siteConfig.brandName.split(" ")[0]} Collection
          </span>

          <h1 className="mx-auto mt-7 max-w-xl text-[2.3rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:mx-0 lg:text-[4.1rem]">
            Golden Pieces <br />
            Made to
            <span className="block min-h-[1.15em]">
              <TypewriterText phrases={rotatingPhrases} className="marker text-ink" />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-neutral-text/65 md:text-base lg:mx-0">
            Pearl necklaces, sunburst-dial watches and warm walnut clocks, chosen for their glow and finished to be
            worn, gifted and loved for years. Every order ships free and arrives in a keepsake box.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-primary px-9 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/35 transition-all duration-300 hover:bg-ink hover:text-white"
            >
              Shop The Collection
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-ink transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-ink/10 px-9 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-ink transition-all duration-300 hover:border-primary hover:bg-accent-light"
            >
              How It Works
            </Link>
          </div>

          {/* Mini trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <div className="flex items-center gap-1 text-primary" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-neutral-text/60">
              Loved for gifting &amp; everyday wear
            </span>
          </div>
        </div>

        {/* Right: Arch-framed carousel */}
        <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2.75rem] border-2 border-primary/60 translate-x-4 translate-y-4" aria-hidden="true" />
          <HeroCarousel />

          {/* Floating featured product */}
          {featured && (
            <Link
              href={`/product/${featured.id}`}
              className="animate-float absolute -left-4 bottom-12 z-20 flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-2.5 pr-5 shadow-xl transition-shadow hover:shadow-2xl sm:-left-10"
            >
              <img src={featured.image} alt={featured.name} className="h-14 w-14 rounded-xl object-cover" />
              <div className="text-left">
                <div className="max-w-[150px] truncate text-xs font-bold text-ink">{featured.name}</div>
                <div className="mt-0.5 text-[0.7rem] text-neutral-text/55">
                  From <span className="font-bold text-secondary">${featuredPrice}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Floating badge */}
          <div
            className="animate-float absolute -right-2 top-10 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-center text-primary-text shadow-xl shadow-primary/40 sm:-right-6"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="text-2xl font-black leading-none">{siteConfig.trialPeriod}</span>
            <span className="mt-1 text-[0.55rem] font-bold uppercase leading-tight tracking-wider">
              Day
              <br />
              Returns
            </span>
          </div>
        </div>
      </div>

      {/* Proof points */}
      <div className="relative z-10 border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center justify-center gap-3 border-b border-black/5 px-2 py-5 even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0 md:py-6"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent-light text-ink" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {point.icon}
                </svg>
              </span>
              <span className="text-[0.62rem] font-bold uppercase tracking-widest text-ink md:text-xs">{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
