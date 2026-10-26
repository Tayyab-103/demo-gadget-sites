"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, startingPrice, trialDays } from "@/lib/brandIcon";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-bg" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-secondary text-secondary-text grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <span className="text-[0.7rem] font-black uppercase tracking-[0.24em] opacity-75">Ready when you are</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.02]">
              Your next session starts at ${startingPrice}
            </h2>
            <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed opacity-85">
              Build a full training set with {siteConfig.brandName}. Free {siteConfig.shippingCarrier} shipping on every
              order and {trialDays} days to make sure it fits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-plum">
                Shop now
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-ghost text-primary hover:bg-primary hover:text-primary-text">
                Ask about sizing
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-0">
            <img
              src="/img/howitworks1.jpg"
              alt="Athlete in a training hoodie at a squat rack"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-secondary via-secondary/0 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
