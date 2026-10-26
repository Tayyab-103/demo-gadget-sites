"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, trialDays } from "@/lib/brandIcon";

const facts = [
  { value: `${trialDays} days`, label: "to try your order at home" },
  { value: `${siteConfig.shippingPeriod} days`, label: `tracked ${siteConfig.shippingCarrier} delivery` },
  { value: "1–2 days", label: "to pack and ship orders" },
  { value: "Real people", label: "answering every message" },
];

export default function AboutUs() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-paper overflow-hidden" id="about">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Photo stack */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[520px]">
          <div className="absolute left-0 top-0 h-[78%] w-[70%] overflow-hidden rounded-[2rem] shadow-2xl">
            <img src="/img/desk/heritage1.jpg" alt="Person opening a wrap journal" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[56%] w-[58%] overflow-hidden rounded-[2rem] border-[6px] border-paper shadow-2xl">
            <img src="/img/desk/cta1.jpg" alt="Notebooks, scissors and paper clips arranged on a desk" className="h-full w-full object-cover" />
          </div>
          <div className="float-slow absolute left-[52%] top-6 sm:top-10 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-brand-gradient px-5 py-4 text-primary-text shadow-xl rotate-3">
            <p className="font-display text-sm font-bold">Made for everyday work</p>
            <p className="text-xs opacity-80">notebooks · pens · desk sets</p>
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-6">
          <span className="eyebrow mb-5">Our story</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
            We think a good desk <span className="hl">changes your day</span>
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            {`${siteConfig.brandName} started with a simple idea: the tools you touch every day should be a pleasure to use. A pen that writes smoothly, a notebook that's always within reach, a set that turns a blank desk into a workspace.`}
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            So we keep our range small and practical — supplies for students, home-office workers, teachers and anyone who still loves putting ideas on paper. Clear prices, honest descriptions and friendly help when you need it.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-line bg-surface p-4 sm:p-5">
                <dt className="font-display text-xl sm:text-2xl font-bold text-ink">{f.value}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/shop" className="btn-primary">Browse the shop</Link>
            <Link href="/contact" className="btn-ghost">Say hello</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
