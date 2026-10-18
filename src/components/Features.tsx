"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    title: "Built for tough soil",
    desc: "Rigid carbon steel heads that bite into clay, roots and stony beds without bending or flexing.",
    icon: (
      <>
        <path d="M14 4.1 12 6" />
        <path d="m5.1 8-2.9-.8" />
        <path d="m6 12-1.9 2" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="M9.04 12.18a1 1 0 0 1 .17-1.6l9.97-5.86a.5.5 0 0 1 .7.69l-5.86 9.97a1 1 0 0 1-1.6.17Z" />
        <path d="m13.5 13.5 7.3 7.3" />
      </>
    ),
  },
  {
    title: "Comfortable all-day grip",
    desc: "Balanced, ergonomic handles that sit naturally in the hand — so a long afternoon of planting doesn't end in sore wrists.",
    icon: (
      <>
        <path d="M18 11V6a2 2 0 0 0-4 0v1" />
        <path d="M14 10V4a2 2 0 0 0-4 0v2" />
        <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </>
    ),
  },
  {
    title: "Sharp, clean cuts",
    desc: "Precision bypass blades snip stems cleanly instead of crushing them, helping plants heal faster after pruning.",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </>
    ),
  },
  {
    title: `Try it for ${siteConfig.trialPeriod} days`,
    desc: "Put every tool to work in your own beds. If it isn't right for your garden, our support team will make it right.",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-neutral-bg py-16 md:py-24" id="features">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Story panel */}
          <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] rounded-[2rem] overflow-hidden">
            <Image
              src="/img/newsletter_garden.jpg"
              alt="Bypass pruners and a trowel on a potting bench beside fresh herbs"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-light">
                Why {siteConfig.brandName.split(" ")[0]}
              </span>
              <h2 className="heading-serif text-3xl sm:text-4xl mt-3 leading-tight">
                Fewer tools. <br />Better ones.
              </h2>
              <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-sm">
                We keep our shelf small on purpose — only the hand tools gardeners reach for every single week.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/40 hover:border-white pb-0.5 transition-colors"
              >
                Our story <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Feature cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className={`group rounded-[1.75rem] p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  idx === 1
                    ? "bg-primary text-white border-primary"
                    : "bg-surface border-black/5 hover:border-secondary/30 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                  <span
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      idx === 1 ? "bg-white/10 text-accent-light" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      {f.icon}
                    </svg>
                  </span>
                  <span className={`heading-serif text-3xl ${idx === 1 ? "text-white/20" : "text-primary/10"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <h3 className={`text-lg font-bold tracking-tight ${idx === 1 ? "text-white" : "text-primary"}`}>
                  {f.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${idx === 1 ? "text-white/75" : "text-neutral-text/70"}`}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
