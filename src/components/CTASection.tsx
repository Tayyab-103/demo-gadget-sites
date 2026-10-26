"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/brandIcon";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-paper" id="cta">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-brand-gradient">
          <div className="absolute inset-0 grid-paper opacity-60" aria-hidden="true" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16 text-primary-text">
              <span className="inline-flex rounded-full bg-ink px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                Fresh start
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.08]">
                Your brightest workday starts at the desk.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed opacity-80">
                {`Stock up on the notebooks and pens you'll reach for every day. Delivered by ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days.`}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/shop" className="btn-dark">
                  Shop supplies
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-ghost bg-transparent border-ink/25 hover:bg-paper/40">
                  {`Call ${siteConfig.phone}`}
                </a>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-[460px]">
              <img
                src="/img/desk/cta2.jpg"
                alt="A neat desk with pencils, notepad and a cup"
                className="absolute inset-0 h-full w-full object-cover lg:rounded-l-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
