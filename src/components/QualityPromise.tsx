"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Finishes That Last",
    desc: "Tarnish-resistant plating, scratch-resistant crystals and solid hardware chosen to keep their shine through daily wear.",
  },
  {
    title: "Checked by Hand",
    desc: "Every clasp, chain, strap and movement is inspected before it's wrapped, so what you open is ready to wear.",
  },
  {
    title: `${siteConfig.trialPeriod}-Day Money-Back Promise`,
    desc: `If a piece isn't right for you, contact us within ${siteConfig.trialPeriod} days of delivery for a hassle-free refund.`,
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="relative overflow-hidden bg-neutral-bg py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-text">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-white/25" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/15 blur-2xl" aria-hidden="true" />

          <div className="relative grid grid-cols-1 items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            {/* Copy */}
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                The {siteConfig.brandName.split(" ")[0]} Promise
              </span>

              <h2 className="mt-6 max-w-lg text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Quality You Can See, Feel and Keep
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-relaxed opacity-75 md:text-base">
                A piece you wear every day has a lot to live up to. That&apos;s why we hold every necklace, watch and
                clock to the same simple standard: it should look beautiful, feel substantial and last.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {promises.map((promise, idx) => (
                  <div
                    key={promise.title}
                    className="group flex gap-5 rounded-2xl bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-lg md:p-6"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ink text-sm font-black text-white transition-transform duration-300 group-hover:scale-110">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink md:text-lg">{promise.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-text/65 md:text-sm">{promise.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[360px] p-4 pt-0 sm:p-6 sm:pt-0 lg:p-6 lg:pl-0">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&q=80"
                  alt={`${siteConfig.brandName} jewelry detail`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-bold text-ink">Free {siteConfig.shippingCarrier} Shipping</div>
                    <div className="text-xs text-neutral-text/55">Delivered in {siteConfig.shippingPeriod} business days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
