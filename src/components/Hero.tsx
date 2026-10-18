"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const startingPrice = (p: Product) =>
  p.bundles && p.bundles[0] ? p.bundles[0].price.toFixed(2) : p.ssPrice;

const trustPoints = [
  {
    label: "Free UPS shipping",
    icon: (
      <path d="M10 17h4V5H2v12h3m15 0h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M7.5 19.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
  },
  {
    label: `Delivered in ${siteConfig.shippingPeriod} days`,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    label: `${siteConfig.trialPeriod}-day garden trial`,
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

const sealText = `${siteConfig.brandName} • Grown with care • `.toUpperCase();

export default function Hero() {
  const featured = products[1] ?? products[0];

  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      {/* Leaf texture + warm glow */}
      <Image
        src="/img/testimonial_bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30 -z-10"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/90 to-primary-dark/95" />
      <div className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full bg-secondary/25 blur-[140px] -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-5 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-medium text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              New season collection — hand tools for every grower
            </span>

            <h1 className="heading-serif mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl xl:text-[4.6rem]">
              Good tools make <em className="text-accent-light">greener</em> gardens.
            </h1>

            <p className="mt-6 text-sm sm:text-base text-white/75 leading-relaxed max-w-lg">
              Trowels, pruners and cultivators picked for real soil and real hands — sturdy, comfortable,
              and ready to dig, snip and weed through every season you grow.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors shadow-lg shadow-black/20"
              >
                Shop the Collection
                <span aria-hidden>→</span>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white hover:text-primary text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors"
              >
                How It Works
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {trustPoints.map((point) => (
                <li key={point.label} className="flex items-center gap-2.5 text-xs sm:text-[0.8rem] text-white/80">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accent-light flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {point.icon}
                    </svg>
                  </span>
                  {point.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Image mosaic */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-[400px] sm:h-[520px] lg:h-[600px]">
            {/* Main arch */}
            <div className="absolute right-0 top-0 w-[80%] sm:w-[74%] h-[86%] rounded-t-[999px] rounded-b-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src="/img/hero_section.jpg"
                alt="Garden cultivator resting among potted plants in a greenhouse"
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 80vw"
                className="object-cover animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </div>

            {/* Secondary photo */}
            <div className="absolute left-0 bottom-0 w-[50%] sm:w-[44%] h-[46%] rounded-[1.75rem] overflow-hidden border-[5px] border-primary shadow-2xl">
              <Image
                src="/img/quality_promise_banner.jpg"
                alt="Trowel, fork and pruners laid in fresh garden soil"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating product card */}
            {featured && (
              <Link
                href={`/product/${featured.id}`}
                className="group absolute left-0 top-[8%] sm:top-[12%] w-[190px] sm:w-[230px] bg-white text-neutral-text rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-3 animate-float hover:ring-2 hover:ring-secondary transition-shadow"
              >
                <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-bg">
                  <Image src={featured.image} alt={featured.name} fill sizes="64px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.6rem] font-semibold uppercase tracking-wider text-secondary">Bestseller</span>
                  <span className="block text-xs sm:text-[0.8rem] font-bold leading-tight line-clamp-2">{featured.name}</span>
                  <span className="block text-xs mt-1 text-neutral-text/60">
                    From <b className="text-primary">${startingPrice(featured)}</b>
                  </span>
                </span>
              </Link>
            )}

            {/* Rotating seal */}
            <div className="absolute right-[3%] bottom-[2%] sm:bottom-[4%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-secondary shadow-2xl flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ animation: "spin 22s linear infinite" }} aria-hidden>
                <defs>
                  <path id="seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text fill="currentColor" fontSize="7.6" fontWeight="600" letterSpacing="1.4">
                  <textPath href="#seal-circle" textLength="235">
                    {sealText}
                  </textPath>
                </text>
              </svg>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick-shop strip */}
        <div className="mt-14 lg:mt-16 border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          {products.map((p, idx) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="group flex items-center gap-4 rounded-2xl p-3 hover:bg-white/5 transition-colors"
            >
              <span className="heading-serif text-2xl text-white/30 group-hover:text-accent-light transition-colors w-8">
                0{idx + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold truncate">{p.name}</span>
                <span className="block text-xs text-white/55 truncate">{p.category}</span>
              </span>
              <span className="text-xs font-semibold text-accent-light whitespace-nowrap">
                ${startingPrice(p)} <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
