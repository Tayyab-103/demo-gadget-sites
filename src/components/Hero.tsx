"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { siteConfig } from "@/lib/brand";
import PawIcon from "@/components/PawIcon";

const products = productsData as unknown as Product[];
const lowestPrice = Math.min(...products.map((p) => parseFloat(p.ssPrice))).toFixed(2);

const avatars = ["/img/contact2.png", "/img/QualityPromise.png", "/img/hero5.jpg", "/img/about2.png"];

const highlights = [
  { value: `${siteConfig.shippingPeriod} days`, label: `Free ${siteConfig.shippingCarrier} delivery` },
  { value: `${siteConfig.trialPeriod}-day`, label: "Happiness guarantee" },
  { value: "Up to 8", label: "Pack bundle savings" },
];

export default function Hero() {
  return (
    <section className="relative bg-brand-wash overflow-hidden">
      {/* Decorative paws */}
      <PawIcon className="absolute top-16 left-[46%] w-10 h-10 text-primary/40 rotate-[-18deg] hidden lg:block" />
      <PawIcon className="absolute bottom-24 left-6 w-14 h-14 text-secondary/40 rotate-[24deg] hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="eyebrow mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-deep" />
              Everyday essentials for dogs &amp; cats
            </span>

            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem] font-semibold text-ink tracking-tight">
              Gear up for every <span className="text-gradient">happy trail</span>
              <PawIcon className="inline-block w-9 h-9 sm:w-12 sm:h-12 ml-2 -mt-2 text-primary align-middle" />
            </h1>

            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Self-cleaning grooming brushes, tough little chew toys and comfy adjustable collars — simple,
              well-made goods that keep tails wagging from the morning walk to the evening brush-down.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-primary-deep transition-colors px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-primary/30"
              >
                Shop the essentials
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur text-ink border border-line hover:border-secondary hover:bg-white transition-colors px-7 py-4 rounded-full text-sm font-bold"
              >
                How it works
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-9 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src) => (
                  <img key={src} src={src} alt="" className="w-11 h-11 rounded-full object-cover border-[3px] border-white shadow-sm" />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400 text-sm leading-none">
                  ★★★★★ <span className="ml-1 text-ink font-bold text-sm">4.9</span>
                </div>
                <p className="text-xs text-muted mt-1">from pet parents across the U.S.</p>
              </div>
            </div>
          </div>

          {/* Photo collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[560px] grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4 h-[420px] sm:h-[520px]">
              <div className="col-span-3 row-span-6 rounded-[2.5rem] overflow-hidden bg-secondary-soft shadow-xl shadow-secondary/30 ring-8 ring-white">
                <img src="/img/hero4.jpg" alt="Happy dog running through the surf" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-3 rounded-[2rem] overflow-hidden bg-primary-soft shadow-lg ring-4 ring-white">
                <img src="/img/hero2.png" alt="French bulldog in a cozy hoodie" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-3 rounded-[2rem] overflow-hidden bg-primary-soft shadow-lg ring-4 ring-white">
                <img src="/img/contact1.png" alt="Fluffy pup ready for a walk" className="w-full h-full object-cover object-top" />
              </div>

            </div>
          </div>
        </div>

        {/* Highlights strip */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto lg:mx-0">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3 bg-white/75 backdrop-blur border border-white rounded-2xl px-5 py-4 shadow-sm">
              <span className="w-2 h-10 rounded-full bg-brand-gradient shrink-0" />
              <div>
                <p className="font-display text-xl font-semibold text-ink leading-none">{h.value}</p>
                <p className="text-xs text-muted mt-1">{h.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
