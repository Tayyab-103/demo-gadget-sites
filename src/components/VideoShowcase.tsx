"use client";

import React, { useState } from "react";
import Link from "next/link";

const athleteHighlights = [
  {
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1000&q=80",
    badge: "Power & Conditioning",
    title: "Maximum Load & Power Endurance",
    desc: "Athletes executing explosive barbell lifts and high-intensity conditioning blocks equipped with Northcrest strength gear.",
    stat: "500+ LBS Load Tolerance",
  },
  {
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=1000&q=80",
    badge: "Core & Speed Training",
    title: "Biomechanical Conditioning",
    desc: "High-cadence conditioning and explosive core reps engineered with zero-slip ergonomic stability.",
    stat: "Zero-Friction Fit",
  },
];

export default function VideoShowcase() {
  const [activeTile, setActiveTile] = useState(0);

  return (
    <section className="py-14 sm:py-16 md:py-24 bg-white relative overflow-hidden" id="athlete-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          
          {/* Left: Copy & Metrics */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="eyebrow justify-center mb-4 lg:justify-start">Athlete Lab Motion</span>
            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.05] tracking-tight text-primary md:text-5xl">
              Engineered For The <span className="text-secondary">Crucial Reps</span>
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-neutral-text/70 md:text-base lg:mx-0">
              Real-world training sessions from our Austin, TX conditioning facility. Witness how our tactical weighted vests, solid cast dumbbells, and heavy-duty gear withstand max-effort loads.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 mb-8">
              <div className="rounded-3xl border border-black/5 bg-neutral-bg p-5 text-left shadow-xs">
                <div className="text-2xl font-black text-primary md:text-3xl">10,000+</div>
                <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50">Athletes Equipped</div>
              </div>
              <div className="rounded-3xl border border-black/5 bg-neutral-bg p-5 text-left shadow-xs">
                <div className="text-2xl font-black text-primary md:text-3xl">4.9★</div>
                <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50">Durability Rating</div>
              </div>
            </div>

            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-9 py-4 text-center text-xs font-black uppercase tracking-widest text-primary-text shadow-xl shadow-primary/20 transition-all duration-300 hover:bg-secondary hover:text-secondary-text"
            >
              Explore Equipment Catalog
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>

          {/* Right: Offset Dynamic Athlete Showcase Collage */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              
              {/* Card 1: Power & Barbell Conditioning */}
              <div
                className="group relative overflow-hidden rounded-[2.5rem] bg-primary shadow-2xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-500 hover:shadow-secondary/20"
                onMouseEnter={() => setActiveTile(0)}
              >
                <img
                  src={athleteHighlights[0].image}
                  alt={athleteHighlights[0].title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-[0.62rem] font-black uppercase tracking-widest text-secondary-text mb-3 shadow-md">
                    {athleteHighlights[0].badge}
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-2">
                    {athleteHighlights[0].title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-4">
                    {athleteHighlights[0].desc}
                  </p>
                  <div className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-wider text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                    {athleteHighlights[0].stat}
                  </div>
                </div>
              </div>

              {/* Card 2: Core & Tactical Vest Conditioning */}
              <div
                className="group relative overflow-hidden rounded-[2.5rem] bg-primary shadow-2xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-500 hover:shadow-secondary/20 sm:translate-y-6"
                onMouseEnter={() => setActiveTile(1)}
              >
                <img
                  src={athleteHighlights[1].image}
                  alt={athleteHighlights[1].title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-[0.62rem] font-black uppercase tracking-widest text-secondary-text mb-3 shadow-md">
                    {athleteHighlights[1].badge}
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-2">
                    {athleteHighlights[1].title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-4">
                    {athleteHighlights[1].desc}
                  </p>
                  <div className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-wider text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                    {athleteHighlights[1].stat}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
