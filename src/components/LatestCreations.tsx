"use client";

import React from "react";
import Link from "next/link";

interface GalleryCard {
  id: string;
  title: string;
  caption: string;
  image: string;
  span: string;
}

// Bento layout: spans are tuned for a 4-column desktop grid
const gallery: GalleryCard[] = [
  { id: "g1", title: "Stage Ready", caption: "Live sound, big nights", image: "/img/cta_bg.jpg", span: "sm:col-span-2 sm:row-span-2" },
  { id: "g2", title: "Pick Your Attack", caption: "Steel guitar picks", image: "/img/products/product1-1.jpg", span: "" },
  { id: "g3", title: "Brass Section", caption: "Trumpets & horns", image: "/img/products/product2-1.jpg", span: "" },
  { id: "g4", title: "Clean Signal", caption: "Instrument cables", image: "/img/products/product3.jpg", span: "" },
  { id: "g5", title: "Front of House", caption: "Mic check, one two", image: "/img/contact_1.jpg", span: "" },
  { id: "g6", title: "Unplugged", caption: "Acoustic moments", image: "/img/quality_promise.jpg", span: "" },
  { id: "g7", title: "Plug Into Tone", caption: "Amp-side setups", image: "/img/hero4.jpg", span: "col-span-2 sm:col-span-3" },
];

export default function LatestCreations() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-bg relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Inside the Store</span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-neutral-text tracking-tight">
            Made for every <span className="text-gradient">kind of player</span>
          </h2>
          <p className="text-sm sm:text-base text-muted mt-4 max-w-lg mx-auto">
            From bedroom riffs to brass bands and packed venues — find the gear that fits the way you play.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {gallery.map((item) => (
            <Link
              key={item.id}
              href="/shop"
              className={`relative group rounded-3xl overflow-hidden border border-line ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg/90 via-neutral-bg/10 to-transparent" />
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-30 mix-blend-multiply transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="block text-[0.6rem] font-black uppercase tracking-[0.2em] text-secondary-light mb-1">
                  {item.caption}
                </span>
                <h3 className="text-sm sm:text-lg font-black text-white leading-tight flex items-center justify-between gap-2">
                  {item.title}
                  <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-xs hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
