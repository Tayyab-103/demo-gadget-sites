"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const testimonials = [
  {
    quote:
      "The cotton towels are unbelievably soft and they got even fluffier after the first wash. No shedding, no fading. I ordered a second set for our guest bath.",
    author: "Margaret H.",
    location: "Asheville, NC",
    product: "Soft Towel Set",
  },
  {
    quote:
      "The handmade jute basket is sturdier than I expected and the weave is beautifully even. It holds all my yarn and fabric scraps and looks lovely on the shelf.",
    author: "Daniel R.",
    location: "Richmond, VA",
    product: "Handmade Jute Basket",
  },
  {
    quote:
      "Packed with care and arrived in three days. You can tell every piece is inspected before it ships. It feels like shopping at a real neighborhood fabric store.",
    author: "Priya S.",
    location: "Charlotte, NC",
    product: "Verified Buyer",
  },
  {
    quote:
      "I sew and quilt, so I am picky about textiles. The colors matched the photos exactly and the quality is outstanding for the price. Customer service was friendly too.",
    author: "Linda M.",
    location: "Greenville, SC",
    product: "Verified Buyer",
  },
];

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "12,000+", label: "Happy homes" },
  { value: "98%", label: "Would buy again" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const featured = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-primary text-primary-text py-14 sm:py-20 lg:py-24" id="testimonials">
      {/* Subtle woven texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 12px), repeating-linear-gradient(-45deg, currentColor 0 1px, transparent 1px 12px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: heading + stats */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-3 inline-block">
              Customer Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-[1.12] mb-4">
              Loved in Homes <span className="block text-secondary">Across the Country</span>
            </h2>
            <p className="text-primary-text/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Real words from people who brought {siteConfig.brandName} fabrics and piece goods into their everyday lives.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                  <div className="text-lg sm:text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider text-primary-text/60 font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured quote + selector */}
          <div className="lg:col-span-7">
            <figure className="relative bg-white text-neutral-text rounded-3xl p-7 sm:p-10 shadow-2xl">
              <span
                className="absolute -top-6 left-7 sm:left-10 w-12 h-12 rounded-full bg-secondary text-secondary-text flex items-center justify-center font-serif text-3xl leading-none shadow-lg"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="flex gap-1 text-secondary text-sm mb-4 mt-2" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <blockquote key={active} className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-primary min-h-[9rem] sm:min-h-[8rem]">
                {featured.quote}
              </blockquote>

              <figcaption className="mt-6 pt-6 border-t border-black/10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-primary text-primary-text flex items-center justify-center font-bold text-sm shrink-0">
                  {initials(featured.author)}
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-primary text-sm sm:text-base">{featured.author}</div>
                  <div className="text-xs text-neutral-text/60 truncate">
                    {featured.location} · <span className="text-secondary font-semibold">{featured.product}</span>
                  </div>
                </div>
              </figcaption>
            </figure>

            {/* Reviewer selector */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {testimonials.map((item, idx) => (
                <button
                  key={item.author}
                  onClick={() => setActive(idx)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all cursor-pointer border ${
                    idx === active
                      ? "bg-white/15 border-secondary"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                  aria-label={`Show review from ${item.author}`}
                >
                  <span className="w-7 h-7 rounded-full bg-secondary text-secondary-text flex items-center justify-center text-[0.6rem] font-bold shrink-0">
                    {initials(item.author)}
                  </span>
                  <span className="text-xs font-semibold text-white truncate">{item.author}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
