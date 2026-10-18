"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const tickerItems = [
  "Free UPS shipping",
  ...products.map((p) => p.name),
  `${siteConfig.trialPeriod}-day garden trial`,
  "Secure checkout",
  `Delivered in ${siteConfig.shippingPeriod} business days`,
  "Real people on support",
];

export default function ProductMarquee() {
  // Two identical halves so the -50% translate loops seamlessly
  const loop = [...tickerItems, ...tickerItems];

  return (
    <section className="bg-secondary text-white overflow-hidden py-3.5 sm:py-4" aria-label="Store highlights">
      <div className="marquee-track flex w-max">
        {loop.map((item, idx) => (
          <span key={idx} className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 whitespace-nowrap">
            <span className="heading-serif text-base sm:text-lg italic">{item}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" aria-hidden>
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
}
