import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/brand";
import PawIcon from "@/components/PawIcon";

const values = [
  {
    title: "Useful over flashy",
    description: "We stock a small range of essentials that pets actually use every day — and skip the gimmicks.",
  },
  {
    title: "Fair, transparent pricing",
    description: "Clear per-item pricing, bundle discounts shown up front, and free shipping on every order.",
  },
  {
    title: "Here when you need us",
    description: `Our support team answers by phone and email, and every order is covered by a ${siteConfig.trialPeriod}-day guarantee.`,
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 sm:-inset-6 bg-brand-gradient-soft rounded-[3rem] -rotate-2" aria-hidden="true" />
            <div className="relative grid grid-cols-5 gap-4">
              <img
                src="/img/about1.png"
                alt="Pet parent sharing a moment with their dog"
                className="col-span-3 h-72 sm:h-[420px] w-full object-cover rounded-[2rem] shadow-lg"
              />
              <div className="col-span-2 flex flex-col gap-4">
                <img
                  src="/img/hero1.png"
                  alt="Two guinea pigs enjoying a snack"
                  className="h-32 sm:h-[200px] w-full object-cover rounded-[1.5rem] shadow-md"
                />
                <div className="flex-1 rounded-[1.5rem] bg-brand-gradient p-4 sm:p-5 flex flex-col justify-end text-primary-text">
                  <PawIcon className="w-7 h-7 mb-auto opacity-70" />
                  <p className="font-display text-2xl sm:text-3xl font-semibold leading-none">Every pet</p>
                  <p className="text-xs sm:text-sm font-medium opacity-80 mt-1">deserves good gear</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-4">Our story</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-ink tracking-tight leading-[1.12]">
              Made for the walks, the naps <span className="text-gradient">and everything between</span>
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              {`${siteConfig.brandName} started with a simple idea`}: everyday pet care shouldn&apos;t be complicated or
              overpriced. We focus on a handful of things that make daily life with a dog or cat easier — a brush that
              actually cleans itself, chew toys that keep small dogs busy, and a collar that fits right.
            </p>

            <ul className="mt-8 space-y-5">
              {values.map((v, i) => (
                <li key={v.title} className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary-soft text-primary-deep font-display font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/shop"
              className="mt-9 inline-flex items-center gap-2 bg-ink text-white hover:bg-primary-deep transition-colors px-7 py-3.5 rounded-full text-sm font-bold"
            >
              Browse the shop →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
