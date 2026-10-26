"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, trialDays } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const promises = [
  {
    title: "Made to be washed",
    desc: "Reinforced seams and fabrics that hold their shape and stretch through regular machine washing.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: `${trialDays}-day returns`,
    desc: `Not the right fit? Contact us within ${trialDays} days of delivery and we'll walk you through the return.`,
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: `Free ${siteConfig.shippingCarrier} shipping`,
    desc: `Every order ships free with tracking and arrives in ${siteConfig.shippingPeriod} business days.`,
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-24 text-primary-text">
      <div className="absolute inset-0 peak-pattern opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Our promise"
          title={
            <>
              Shop with <span className="text-secondary">confidence</span>
            </>
          }
          subtitle={`Every order from ${siteConfig.brandName} comes with the same simple guarantees.`}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {promises.map((promise) => (
            <div key={promise.title} className="rounded-[1.5rem] bg-white/5 border border-white/10 p-7 transition-all hover:bg-white/10 hover:border-secondary/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-text">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight">{promise.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{promise.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/terms" className="text-xs font-black uppercase tracking-[0.14em] text-white/75 hover:text-secondary transition-colors">
            Read our shipping &amp; return terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
