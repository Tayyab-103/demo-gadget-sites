"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

interface Slide {
  id: string;
  image: string;
  title: string;
  tag: string;
}

const slides: Slide[] = [
  { id: "acoustic", image: "/img/hero1.jpg", title: "Acoustic Sessions", tag: "Strum & Pick" },
  { id: "electric", image: "/img/hero3.jpg", title: "The Electric Wall", tag: "Six-String Culture" },
  { id: "amp", image: "/img/hero4.jpg", title: "Plug In, Turn Up", tag: "Amp & Signal" },
  { id: "strings", image: "/img/hero2.jpg", title: "Orchestral Corner", tag: "Bows & Brass" },
];

const eqBars = [0.2, 0.55, 0.35, 0.8, 0.45, 0.95, 0.6, 0.3, 0.7, 0.4, 0.85, 0.5];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const featured = products[0];
  const featuredPrice = featured?.bundles?.[0]?.price ?? featured?.ssPrice;

  const tickerItems = [
    ...products.map((p) => p.name),
    `${siteConfig.shippingCarrier} ${siteConfig.shippingPeriod} Day Delivery`,
    `${siteConfig.trialPeriod}-Day Returns`,
    "Secure Checkout",
  ];

  return (
    <section id="hero-section" className="relative overflow-hidden bg-neutral-bg">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-secondary/25 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT — Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="eyebrow">{siteConfig.brandName}</span>

            <h1 className="mt-6 font-black tracking-tight leading-[1.04] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] text-neutral-text">
              Gear that makes
              <br className="hidden sm:block" /> your music{" "}
              <span className="text-gradient">sound bigger.</span>
            </h1>

            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your neighborhood music store, online. We stock hand-picked guitar picks, brass
              instruments and studio-ready cables — checked before they ship and delivered by{" "}
              {siteConfig.shippingCarrier} in {siteConfig.shippingPeriod} business days.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link href="/shop" className="btn-primary w-full sm:w-auto px-8 py-4 text-sm uppercase tracking-widest">
                Shop the Store
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href="#shop" className="btn-ghost w-full sm:w-auto px-8 py-4 text-sm uppercase tracking-widest">
                Browse Products
              </a>
            </div>

            {/* Equalizer + trust row */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex items-end gap-1 h-10" aria-hidden="true">
                {eqBars.map((h, i) => (
                  <span
                    key={i}
                    className="soundwave-bar w-1.5 rounded-full bg-brand-gradient"
                    style={{ height: `${Math.round(h * 40)}px`, animationDelay: `${i * 0.09}s` }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface/70 backdrop-blur-md">
                <div className="px-4 sm:px-5 py-3 text-center">
                  <div className="text-lg sm:text-xl font-black text-neutral-text">{siteConfig.shippingPeriod}</div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider text-faint">Day Delivery</div>
                </div>
                <div className="px-4 sm:px-5 py-3 text-center">
                  <div className="text-lg sm:text-xl font-black text-neutral-text">{siteConfig.trialPeriod}</div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider text-faint">Day Returns</div>
                </div>
                <div className="px-4 sm:px-5 py-3 text-center">
                  <div className="text-lg sm:text-xl font-black text-neutral-text">SSL</div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider text-faint">Secure Pay</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Image stage */}
          <div
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Gradient frame */}
              <div
                className="rounded-[2.25rem] p-[1.5px] bg-brand-gradient"
                style={{ boxShadow: "0 40px 120px -40px color-mix(in srgb, var(--primary-color) 70%, transparent)" }}
              >
                <div className="relative rounded-[2.2rem] overflow-hidden bg-surface aspect-[4/5] sm:aspect-[5/4] lg:aspect-square">
                  {slides.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        current === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    >
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    </div>
                  ))}

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg via-neutral-bg/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-secondary/25 mix-blend-overlay" />

                  {/* Slide caption */}
                  <div className="absolute left-5 right-5 sm:left-7 sm:right-7 bottom-5 sm:bottom-7 z-10">
                    <span className="inline-block text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-light mb-1.5">
                      {slides[current].tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {slides[current].title}
                    </h2>

                    {/* Progress bars */}
                    <div className="mt-4 flex gap-2">
                      {slides.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setCurrent(idx)}
                          aria-label={`Show ${s.title}`}
                          className="relative h-1 flex-1 rounded-full bg-white/20 overflow-hidden cursor-pointer"
                        >
                          <span
                            className={`absolute inset-y-0 left-0 rounded-full bg-brand-gradient transition-all ${
                              idx < current ? "w-full duration-300" : idx === current ? "w-full duration-[5000ms] ease-linear" : "w-0 duration-0"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y border-line bg-surface/60 backdrop-blur-md overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 py-4">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-muted whitespace-nowrap">
              {item}
              <span className="w-2 h-2 rounded-full bg-brand-gradient" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
