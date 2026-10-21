"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-line min-h-[420px] flex items-center">
          <img
            src="/img/cta_bg.jpg"
            alt="Crowd at a live concert"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-bg via-neutral-bg/85 to-neutral-bg/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/30 mix-blend-screen" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <span className="eyebrow">Ready When You Are</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Your next great sound is <span className="text-gradient">one order away.</span>
            </h2>
            <p className="mt-5 text-white/75 text-sm sm:text-base leading-relaxed max-w-lg">
              Bundle up and save on picks, brass and cables. Free {siteConfig.shippingCarrier} shipping on every order and a{" "}
              {siteConfig.trialPeriod}-day return window for peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/shop" className="btn-primary px-8 py-4 text-sm uppercase tracking-widest">
                Shop Bundles <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn-ghost px-8 py-4 text-sm uppercase tracking-widest text-white">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
