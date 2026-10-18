"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const tickerItems = [
  `Free ${siteConfig.shippingCarrier} shipping`,
  `Delivered in ${siteConfig.shippingPeriod} business days`,
  `${siteConfig.trialPeriod}-day returns`,
  "Secure checkout",
  "Warm, natural materials",
  "Real people on the phone",
];

export default function Hero() {
  const featured = products[2] || products[0];
  const featuredPrice = featured.bundles && featured.bundles[0] ? featured.bundles[0].price : featured.ssPrice;

  return (
    <section className="relative bg-neutral-bg overflow-hidden">
      {/* Soft background wash */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full bg-surface" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* Copy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="eyebrow mb-5">Home Furnishing Market</span>

          <h1 className="font-serif font-medium text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4rem] xl:text-[4.6rem] text-neutral-text tracking-tight">
            Warm pieces for
            <span className="block italic text-primary">the rooms you love.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-neutral-text/70 leading-relaxed max-w-lg">
            Soft knit throws, glowing stoneware lamps, and natural oak trays &mdash; simple, well-made home pieces
            chosen to make every corner of your home feel calm and lived-in.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow-lg shadow-primary/20"
            >
              <span>Shop the Collection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 border border-secondary-dark/50 text-neutral-text hover:bg-surface hover:border-primary transition-all duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
            >
              Our Story
            </Link>
          </div>

          {/* Quick stats */}
          <dl className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg border-t border-secondary pt-6">
            <div>
              <dt className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.16em] text-neutral-text/50">Shipping</dt>
              <dd className="font-serif text-2xl sm:text-3xl text-neutral-text mt-1">Free</dd>
            </div>
            <div>
              <dt className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.16em] text-neutral-text/50">Delivery</dt>
              <dd className="font-serif text-2xl sm:text-3xl text-neutral-text mt-1">{siteConfig.shippingPeriod} days</dd>
            </div>
            <div>
              <dt className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.16em] text-neutral-text/50">Returns</dt>
              <dd className="font-serif text-2xl sm:text-3xl text-neutral-text mt-1">{siteConfig.trialPeriod} days</dd>
            </div>
          </dl>
        </div>

        {/* Imagery */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6] rounded-t-[12rem] sm:rounded-t-[16rem] rounded-b-3xl overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="/img/brand/hero_otto.jpg"
              alt={`${siteConfig.brandName} living room styled with a linen lamp and knit throw`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover"
            />
          </div>

          {/* Floating product card */}
          <Link
            href={`/product/${featured.id}`}
            className="animate-float absolute -bottom-6 left-3 sm:left-6 lg:-left-10 flex items-center gap-3 bg-neutral-bg/95 backdrop-blur-md rounded-2xl p-3 pr-5 shadow-xl border border-secondary/70 max-w-[280px]"
          >
            <span className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
              <Image src={featured.image} alt={featured.name} fill sizes="56px" className="object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-primary">Customer favorite</span>
              <span className="block font-serif text-base text-neutral-text leading-tight truncate">{featured.name}</span>
              <span className="block text-xs font-semibold text-neutral-text/60">From ${featuredPrice}</span>
            </span>
          </Link>

          {/* Round badge */}
          <div className="hidden sm:flex absolute top-8 -right-2 lg:-right-6 w-28 h-28 rounded-full bg-secondary text-secondary-text flex-col items-center justify-center text-center shadow-lg rotate-[-8deg]">
            <span className="font-serif text-3xl leading-none">{siteConfig.trialPeriod}</span>
            <span className="text-[0.55rem] font-bold uppercase tracking-[0.16em] mt-1">Day easy<br />returns</span>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative bg-primary text-primary-text py-3.5 overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex items-center" aria-hidden={loop === 1}>
              {tickerItems.map((item) => (
                <span key={`${loop}-${item}`} className="flex items-center gap-6 px-6 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.22em] whitespace-nowrap">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
