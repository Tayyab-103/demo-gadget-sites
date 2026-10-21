"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Honest Product Details",
    desc: "Clear photos, real specs and straightforward descriptions — what you see on the page is what shows up at your door.",
  },
  {
    title: `${siteConfig.trialPeriod}-Day Return Window`,
    desc: `If your gear isn't right, reach out within ${siteConfig.trialPeriod} days of delivery and our team will walk you through a simple return.`,
  },
  {
    title: "Fast, Tracked Delivery",
    desc: `Orders ship within 1-2 business days and arrive via ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days, fully tracked.`,
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="relative overflow-hidden bg-neutral-bg py-16 md:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] p-[1.5px] bg-brand-gradient">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[2.4rem] overflow-hidden bg-neutral-bg">
            {/* LEFT — Image */}
            <div className="group relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden">
              <img
                src="/img/hero3.jpg"
                alt={`Electric guitars on display at ${siteConfig.brandName}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg via-neutral-bg/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-neutral-bg/20 lg:to-neutral-bg" />
              <div className="absolute bottom-7 left-7 right-7 lg:right-1/4">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-light block mb-1.5">
                  The {siteConfig.brandName.split(" ")[0]} Promise
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                  Gear you can trust, from a store that picks up the phone.
                </h3>
              </div>
            </div>

            {/* RIGHT — Promise list */}
            <div className="relative p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

              <span className="eyebrow self-start">Our Promise</span>
              <h2 className="mt-5 mb-5 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-neutral-text">
                Shop with <span className="text-gradient">confidence.</span>
              </h2>
              <p className="mb-9 max-w-xl text-sm leading-relaxed text-muted">
                We know how much the right gear matters to your sound. That&apos;s why we keep things simple: quality products,
                clear policies and support from people who play.
              </p>

              <div className="flex flex-col gap-5">
                {promises.map((promise, idx) => (
                  <div key={promise.title} className="group/item flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface text-sm font-black text-primary-light transition-all duration-300 group-hover/item:bg-brand-gradient group-hover/item:text-primary-text group-hover/item:border-transparent">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1 text-base font-black text-neutral-text">{promise.title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted">{promise.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/terms" className="mt-10 self-start text-xs font-black uppercase tracking-widest text-primary-light hover:text-secondary-light transition-colors">
                Read our shipping &amp; return policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
