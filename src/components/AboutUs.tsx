"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const values = [
  { label: "Fewer, better tools", text: "A short catalog we can stand behind." },
  { label: "Fair, clear pricing", text: "Free shipping and multi-pack savings shown upfront." },
  { label: "Help that answers", text: "Phone and email support from our Austin, TX office." },
];

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-neutral-bg" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="section-title mt-4">A small kitchen shop built around the hearth</h2>
          <p className="mt-6 text-muted leading-relaxed">
            {siteConfig.brandName}{" "}
            started with a simple frustration: drawers full of utensils that bent, rusted or
            simply didn&rsquo;t work. So we went the other way &mdash; a handful of well-made tools that earn their place
            beside the stove.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Every whisk, scale and pair of shears is picked for how it feels in the hand, how easily it cleans up and how
            long it lasts. We ship each order ourselves and answer every message personally.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {values.map((v) => (
              <li key={v.label} className="flex items-start gap-3 rounded-2xl bg-surface border border-line p-4">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-primary text-primary-text flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-sm">
                  <strong className="font-bold text-ink">{v.label}.</strong>{" "}
                  <span className="text-muted">{v.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <Link href="/shop" className="btn-primary mt-8">
            Shop our tools
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] overflow-hidden aspect-[4/3] bg-surface shadow-xl">
            <img
              src="/images/about-workshop.jpg"
              alt="Wooden and silicone kitchen utensils arranged on a wooden table"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card absolute -bottom-6 left-4 sm:-left-6 px-5 py-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-neutral-bg flex items-center justify-center text-ink">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span>
              <span className="block text-xs text-muted">Shipping from</span>
              <span className="block text-sm font-bold text-ink">Austin, Texas</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
