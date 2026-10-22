"use client";

import { brandShort, siteConfig } from "@/lib/brandIcon";
import Link from "next/link";

const promises = [
  {
    title: "Inspected Before It Ships",
    desc: "Every order is checked by hand at our Austin, TX facility — straps, stitching, zippers and hardware — before it goes in the box.",
  },
  {
    title: `${siteConfig.trialPeriod}-Day Trial Period`,
    desc: `Use your gear in real workouts. If it's not right, reach out within ${siteConfig.trialPeriod} days and we'll walk you through a return under our trial terms.`,
  },
  {
    title: "Tracked Delivery",
    desc: `Shipped with ${siteConfig.shippingCarrier} and delivered in ${siteConfig.shippingPeriod} business days, with tracking sent straight to your inbox.`,
  },
  {
    title: "Support That Picks Up",
    desc: `Questions about sizing, bundles or an order? Call ${siteConfig.phone} or email ${siteConfig.email}.`,
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-28 text-white">
      <div className="absolute inset-0 bg-topo" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ---------- Left: heading + photo stamp ---------- */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow eyebrow-invert mb-3">{`The ${brandShort} Standard`}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05]">
              Gear You Can <span className="text-secondary">Count On</span>
            </h2>
            <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-white/65">
              {`We keep the catalog small so we can stand behind every item. Here's what comes with every ${siteConfig.brandName} order.`}
            </p>

            <div className="group relative mt-10 mr-6 sm:mr-10">
              <div className="overflow-hidden rounded-3xl border-4 border-white/10 aspect-[4/3]">
                <img
                  src="/img/products/sample_gym.jpg"
                  alt="Bright training space with weights and bikes"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Stamp badge */}
              <div className="absolute -bottom-8 -right-6 sm:-right-10 flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-secondary text-secondary-text shadow-2xl shadow-black/40 transition-transform duration-700 group-hover:rotate-[-12deg] group-hover:scale-105">
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/60" aria-hidden="true" />
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-black leading-none">{siteConfig.trialPeriod}</div>
                  <div className="mt-1 text-[0.6rem] font-black uppercase tracking-[0.2em]">Day Trial</div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Right: spec-sheet rows ---------- */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between border-b-2 border-secondary pb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-white/50">
              <span>Our Promise</span>
              <span>{String(promises.length).padStart(2, "0")} Points</span>
            </div>

            <ol>
              {promises.map((promise, idx) => (
                <li
                  key={promise.title}
                  className="group relative grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] items-start gap-5 sm:gap-8 border-b border-white/10 py-7 sm:py-8 pl-4 transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  {/* Orange bar that grows on hover */}
                  <span
                    className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-secondary transition-transform duration-500 group-hover:scale-y-100"
                    aria-hidden="true"
                  />

                  <span className="w-12 sm:w-20 text-4xl sm:text-6xl font-black leading-none tabular-nums text-white/15 transition-all duration-300 group-hover:text-secondary group-hover:-translate-y-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight transition-colors group-hover:text-secondary">
                      {promise.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65 wrap-break-word">{promise.desc}</p>
                  </div>

                  <span className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-text group-hover:-rotate-45">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/shop" className="btn-accent">
                Shop With Confidence <span aria-hidden="true">→</span>
              </Link>
              <Link href="/terms" className="btn-ghost-light">
                Trial &amp; Return Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
