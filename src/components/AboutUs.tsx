"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, trialDays } from "@/lib/brandIcon";

const values = [
  {
    title: "Fabric first",
    description: "Four-way stretch knits, brushed fleece and cushioned yarns chosen for how they feel on the third set, not the first.",
    icon: <path d="M4 7c4-4 12-4 16 0M4 12c4-4 12-4 16 0M4 17c4-4 12-4 16 0" />,
  },
  {
    title: "Honest pricing",
    description: "One clear price per pack, free shipping and no subscriptions. Every order is a single, one-time charge.",
    icon: (
      <>
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </>
    ),
  },
  {
    title: "Real support",
    description: `Questions about sizing or an order? Email or call our team and get an answer from a person, not a bot.`,
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      </>
    ),
  },
];

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-mist" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Image stack */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 min-h-[380px] sm:min-h-[460px]">
            <div className="relative rounded-[1.75rem] overflow-hidden bg-neutral-bg row-span-2">
              <img
                src="/img/lab1.jpg"
                alt="Two athletes training outdoors in baselayers and joggers"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-[1.75rem] overflow-hidden bg-neutral-bg">
              <img
                src="/img/testimonialsec3.jpg"
                alt="Athlete in a white long-sleeve top stretching in the gym"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[1.75rem] bg-secondary text-secondary-text p-5 sm:p-6 flex flex-col justify-between">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 20 9.5 6l4 6.5L16 9l6 11Z" />
              </svg>
              <div>
                <div className="text-4xl sm:text-5xl font-black leading-none">{trialDays}</div>
                <div className="mt-1.5 text-[0.65rem] sm:text-xs font-black uppercase tracking-[0.16em]">Day return window</div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-6 rounded-[1.75rem] bg-primary text-primary-text p-7 sm:p-10 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 peak-pattern opacity-40" aria-hidden="true" />
            <div className="relative">
              <span className="eyebrow eyebrow-light">About us</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase tracking-tight leading-[1.05]">
                Kit that keeps up with <span className="text-secondary">your training</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
                {`${siteConfig.brandName} started with a simple idea: most people don't need a wardrobe of gym clothes, they need a few pieces that work. So we focus on three, a compression baselayer, a zip training hoodie and a cushioned crew sock, and sell them in packs so you always have a clean set ready.`}
              </p>

              <ul className="mt-8 grid gap-5">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-secondary flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {v.icon}
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.1em]">{v.title}</h3>
                      <p className="mt-1 text-[0.82rem] text-white/65 leading-relaxed">{v.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/shop" className="btn-gold mt-9">
                See the collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
