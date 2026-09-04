"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface TestimonialCard {
  name: string;
  handle: string;
  image: string;
  quote: string;
  date: string;
}

const row1Cards: TestimonialCard[] = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    name: "Marcus Reynolds",
    handle: "@marcus_strength",
    quote: "The Apex-Pro weighted vest transformed our squad's conditioning blocks. Weight bricks stay 100% flush against chest during sprints.",
    date: "Aug 14, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
    name: "Elena Vance",
    handle: "@elena_triathlon",
    quote: "The Hydro-Shield gym duffle is completely impenetrable. Heavy rain and sweaty track spikes stay isolated with zero moisture leak.",
    date: "Aug 02, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    name: "David Kowalski",
    handle: "@david_crossfit",
    quote: "Precision hexagonal dumbbells and resistance cables that never slip under chalk. Olympic-caliber gear at direct athlete pricing.",
    date: "Jul 28, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&h=200&auto=format&fit=crop",
    name: "Sarah Townsend",
    handle: "@sarah_trackcoach",
    quote: "Ordered multi-packs for our collegiate sprinters. The build quality exceeds commercial gym standards by miles.",
    date: "Jul 15, 2026",
  },
];

const row2Cards: TestimonialCard[] = [
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop",
    name: "James Thornton",
    handle: "@thornton_endurance",
    quote: "Shipped fast from their Austin facility in 3 days. The 14-day field guarantee gave our team complete confidence.",
    date: "Jun 30, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    name: "Chloe Mitchell",
    handle: "@chloe_marathontrain",
    quote: "Ergonomic strap geometry means zero chafing across 20-mile weighted endurance prep. Unrivaled construction.",
    date: "Jun 22, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&h=200&auto=format&fit=crop",
    name: "Brandon Hayes",
    handle: "@hayes_hybridfit",
    quote: "Solid cast iron and 1000D ballistic cordura stitching. You can instantly feel the industrial grade durability.",
    date: "Jun 11, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop",
    name: "Rachel Cooper",
    handle: "@cooper_powerlifting",
    quote: "Our gym ordered 8 weighted vests and backpack sets. Best athletic investment we made this entire season.",
    date: "May 29, 2026",
  },
];

function CardItem({ card }: { card: TestimonialCard }) {
  return (
    <div className="p-5 rounded-2xl mx-3 bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 w-80 sm:w-88 shrink-0 flex flex-col justify-between group">
      <div>
        {/* Author Header */}
        <div className="flex items-center gap-3">
          <img
            className="w-11 h-11 rounded-full object-cover border-2 border-secondary/30 flex-shrink-0"
            src={card.image}
            alt={card.name}
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <p className="font-bold text-sm text-primary truncate">{card.name}</p>
              {/* Verified Blue Badge */}
              <svg
                className="w-3.5 h-3.5 flex-shrink-0 text-secondary"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xs text-slate-400 truncate">{card.handle}</span>
          </div>
        </div>

        {/* Quote Content */}
        <p className="text-xs sm:text-sm py-3.5 text-neutral-text/80 leading-relaxed font-normal">
          &ldquo;{card.quote}&rdquo;
        </p>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-slate-400 text-xs pt-2 border-t border-slate-100">
        <div className="flex items-center gap-1 text-slate-500">
          <span>Posted on</span>
          <span className="text-slate-700 font-semibold flex items-center gap-1">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </span>
        </div>
        <p className="text-[0.72rem] text-slate-400">{card.date}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate arrays to create continuous infinite marquee loop
  const row1Repeated = [...row1Cards, ...row1Cards, ...row1Cards];
  const row2Repeated = [...row2Cards, ...row2Cards, ...row2Cards];

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-neutral-bg overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-3 justify-center">Field Tested By Pros</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary">
            Trusted By <span className="text-secondary">Dedicated Athletes</span>
          </h2>
          <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mt-3">
            Coaches, competitors, marathoners, and conditioning specialists rely on {siteConfig.brandName} hardware daily.
          </p>
        </div>

        {/* Marquee Row 1 */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-16 sm:w-28 md:w-36 z-10 pointer-events-none bg-gradient-to-r from-neutral-bg to-transparent" />
          <div className="marquee-inner flex transform-gpu pt-4 pb-3">
            {row1Repeated.map((card, idx) => (
              <CardItem key={`row1-${idx}`} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-16 sm:w-28 md:w-36 z-10 pointer-events-none bg-gradient-to-l from-neutral-bg to-transparent" />
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="w-full overflow-hidden relative mt-2 sm:mt-3">
          <div className="absolute left-0 top-0 h-full w-16 sm:w-28 md:w-36 z-10 pointer-events-none bg-gradient-to-r from-neutral-bg to-transparent" />
          <div className="marquee-inner marquee-reverse flex transform-gpu pt-3 pb-4">
            {row2Repeated.map((card, idx) => (
              <CardItem key={`row2-${idx}`} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-16 sm:w-28 md:w-36 z-10 pointer-events-none bg-gradient-to-l from-neutral-bg to-transparent" />
        </div>

      </div>
    </section>
  );
}
