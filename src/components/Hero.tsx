"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, trialDays } from "@/lib/brandIcon";

const todo = [
  { label: "Plan the week", done: true },
  { label: "Refill the pen pot", done: true },
  { label: "New notebook", done: false },
];

const ticker = [
  "Notebooks",
  "Journals",
  "Fountain Pens",
  "Bottled Ink",
  "Gift Sets",
  "Desk Essentials",
  "Note-Taking",
  "Home Office",
];

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Hero() {
  const perks = [
    `Ships via ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days`,
    `${trialDays}-day trial on every order`,
    "Friendly support from real people",
  ];

  return (
    <section className="relative overflow-hidden bg-sunny-wash pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 grid-paper opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center pb-16 sm:pb-20 lg:pb-24">
          {/* Copy */}
          <div className="lg:col-span-6 relative z-10">
            <span className="eyebrow mb-6">{siteConfig.Product || "Stationery & Office Supplies"}</span>

            <h1 className="font-display font-bold text-ink tracking-tight leading-[1.04] text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
              Make every desk a <span className="hl">bright</span> desk.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
              Good work starts with good tools. {siteConfig.brandName} gathers the notebooks, pens and desk
              essentials that make lists easier to keep, ideas easier to catch and Mondays a little more cheerful.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/shop" className="btn-primary">
                Explore the shop
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/#how-it-works" className="btn-ghost">
                How ordering works
              </Link>
            </div>

            <ul className="mt-9 grid gap-3 text-sm text-ink">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient text-primary-text shadow-sm">
                    <CheckIcon />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Desk collage */}
          <div className="lg:col-span-6 relative mx-auto w-full max-w-[560px] h-[420px] sm:h-[520px]">
            {/* Sunburst */}
            <svg
              className="spin-slow absolute -top-6 right-2 sm:right-6 w-44 h-44 sm:w-56 sm:h-56 text-primary opacity-80"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <rect key={i} x="96" y="6" width="8" height="40" rx="4" fill="currentColor" transform={`rotate(${i * 22.5} 100 100)`} />
              ))}
              <circle cx="100" cy="100" r="40" fill="currentColor" />
            </svg>

            {/* Main photo */}
            <div className="absolute left-0 sm:left-2 top-8 w-[78%] -rotate-3 rounded-[1.75rem] bg-paper p-2.5 shadow-2xl ring-1 ring-line">
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />
              <img
                src="/img/desk/standard-3.jpg"
                alt="Flat lay of notebooks, pencils, scissors and desk supplies"
                className="h-[230px] sm:h-[300px] w-full rounded-[1.3rem] object-cover"
              />
            </div>

            {/* Polaroid */}
            <div className="float-slow absolute right-0 bottom-4 sm:bottom-2 w-[46%] rotate-[5deg] rounded-2xl bg-paper p-2.5 pb-9 shadow-2xl ring-1 ring-line">
              <span className="tape -top-3 right-5 -rotate-6" />
              <img
                src="/img/desk/cta2.jpg"
                alt="Hand arranging pencils on a tidy white desk"
                className="h-[150px] sm:h-[200px] w-full rounded-xl object-cover"
              />
              <span className="absolute bottom-2.5 left-0 right-0 text-center text-xs font-semibold text-muted">
                a tidy desk, a clear head
              </span>
            </div>

            {/* Sticky note */}
            <div className="absolute left-3 sm:left-8 bottom-0 w-[52%] sm:w-[46%] -rotate-[4deg] rounded-md bg-brand-gradient p-4 sm:p-5 shadow-xl">
              <div className="ruled rounded-sm">
                <p className="font-display text-sm font-bold text-ink leading-[28px]">Today&apos;s list</p>
                <ul>
                  {todo.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-[0.78rem] sm:text-sm leading-[28px] text-ink">
                      <span
                        className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border-[1.5px] border-ink ${
                          item.done ? "bg-ink text-paper" : ""
                        }`}
                      >
                        {item.done && <CheckIcon />}
                      </span>
                      <span className={`truncate ${item.done ? "line-through opacity-60" : ""}`}>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category ticker */}
      <div className="relative border-y border-ink/10 bg-ink py-4 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((word, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-paper whitespace-nowrap">
              {word}
              <span className="text-primary text-lg">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
