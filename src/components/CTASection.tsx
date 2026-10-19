"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-text px-6 py-14 sm:px-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/5"
            aria-hidden="true"
          />
          <div className="lg:col-span-7 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Upgrade the tools you use every single day.
            </h2>
            <p className="mt-5 text-base opacity-75 max-w-xl leading-relaxed">
              Free {siteConfig.shippingCarrier} delivery in {siteConfig.shippingPeriod} business days and{" "}
              {siteConfig.trialPeriod} days to try everything at home.
            </p>
          </div>
          <div className="lg:col-span-5 relative flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-surface text-ink font-semibold text-sm px-8 py-4 hover:bg-neutral-bg transition-colors"
            >
              Shop all tools
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 font-semibold text-sm px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
