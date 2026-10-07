"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  author: string;
  role: string;
  location: string;
  discipline: "painters" | "illustrators" | "studios";
  productPurchased: string;
  rating: number;
  title: string;
  quote: string;
  image: string;
  artworkSample?: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Elena Vance",
    role: "Gallery Exhibitor & Fine Artist",
    location: "Chicago, IL",
    discipline: "painters",
    productPurchased: "MasterSeries Archival Pigment Set",
    rating: 5,
    title: "Vibrancy that completely transformed my gallery collection",
    quote: "The chromatic purity in these paints is extraordinary. The pigment load holds knife impasto marks without collapsing or cracking upon drying. It mixes cleanly without turning chalky or muddy like commercial student brands.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    verified: true
  },
  {
    id: 2,
    author: "Marcus Thorne",
    role: "Botanical Illustrator & Calligrapher",
    location: "Portland, OR",
    discipline: "illustrators",
    productPurchased: "Celestial Kolinsky & Studio Brush Suite",
    rating: 5,
    title: "Bristle spring and needle-sharp control that never frays",
    quote: "Finding brushes with resilient belly capacity and a razor-sharp snap is rare. These handles are weighted impeccably for 8-hour illustration marathons, and the seamless ferrules show zero bristle shedding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    verified: true
  },
  {
    id: 3,
    author: "Clara Dupont",
    role: "Atelier Director & Restorer",
    location: "Santa Fe, NM",
    discipline: "studios",
    productPurchased: "Artisan Primed Linen Canvas & Easel Kit",
    rating: 5,
    title: "Belgian linen with the perfect tooth for multi-layer glazing",
    quote: "We ordered bulk canvas rolls and studio easel kits for our 12-artist residency. The tensioning on the stretchers is flawless, and the acid-free priming provides an exceptionally luminous base for indirect glazing.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    verified: true
  },
  {
    id: 4,
    author: "Julian Reyes",
    role: "Plein Air Landscape Painter",
    location: "Denver, CO",
    discipline: "painters",
    productPurchased: "MasterSeries Travel & Studio Paint Pack",
    rating: 5,
    title: "ASTM I lightfast permanence under intense sunlight",
    quote: "Painting plein air in the Rockies demands lightfast pigments that won't fade under UV exposure. North Star supplies are now the sole materials packed in my outdoor gear.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    verified: true
  },
  {
    id: 5,
    author: "Aria Montgomery",
    role: "Printmaker & Craft Artisan",
    location: "Providence, RI",
    discipline: "studios",
    productPurchased: "Custom Mixed Studio Bundle Pack",
    rating: 5,
    title: "Carefully packaged, studio-grade quality in every shipment",
    quote: "Customer support answered my exact vehicle chemistry questions within hours, and the FedEx shipment arrived double-boxed with zero leakage or dented canvas corners. Unmatched attention to detail!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    verified: true
  },
  {
    id: 6,
    author: "David Chen",
    role: "Classical Realist Painter",
    location: "New York, NY",
    discipline: "painters",
    productPurchased: "Precision Kolinsky Detailing Set",
    rating: 5,
    title: "Delivers the crisp micro-details necessary for portraiture",
    quote: "The micro-point control for rendering eyelashes, specular skin highlights, and fabric filigree is superior to imported European brushes that cost twice as much.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    verified: true
  }
];

export default function Testimonials() {
  const [filter, setFilter] = useState<"all" | "painters" | "illustrators" | "studios">("all");
  const [activeHighlight, setActiveHighlight] = useState(0);

  const filteredTestimonials = filter === "all"
    ? testimonials
    : testimonials.filter((t) => t.discipline === filter);

  const currentFeatured = testimonials[activeHighlight];

  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="testimonials">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-2xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Artist Community Endorsements</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-primary tracking-tight">
              Trusted in <span className="text-secondary">25,000+ Studios</span>
            </h2>
            <p className="text-neutral-text/70 text-sm sm:text-base mt-3 leading-relaxed">
              Read direct feedback from gallery painters, botanical illustrators, and fine art studio directors creating with North Star archival materials.
            </p>
          </div>

          {/* Social Proof Aggregate Card */}
          <div className="flex items-center gap-5 bg-white border border-black/8 px-6 py-4 rounded-3xl shadow-sm flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex gap-1 text-secondary">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-lg leading-none">{star}</span>
                ))}
              </div>
              <span className="text-2xl font-black text-primary leading-none mt-1">4.9 / 5.0</span>
            </div>
            <div className="h-10 w-px bg-black/10" />
            <div className="flex flex-col text-xs text-neutral-text/70">
              <span className="font-bold text-primary">2,480+ Verified</span>
              <span className="text-[0.68rem] text-neutral-text/50">Studio Orders Reviewed</span>
            </div>
          </div>
        </div>

        {/* Featured Master Review Spotlight Card */}
        <div className="bg-primary text-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl mb-14 relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Artist Profile */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-5">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-secondary/40 flex-shrink-0">
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.author}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-secondary text-primary rounded-full p-1 shadow-md" title="Verified Artist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
              </div>

              <div>
                <h4 className="text-xl font-black uppercase text-white tracking-tight">
                  {currentFeatured.author}
                </h4>
                <p className="text-xs text-secondary font-bold uppercase tracking-wider mt-0.5">
                  {currentFeatured.role}
                </p>
                <span className="text-[0.68rem] text-white/50 block mt-1">
                  📍 {currentFeatured.location}
                </span>

                <span className="inline-block mt-3 bg-white/10 text-white/90 text-[0.65rem] font-bold px-3 py-1 rounded-full border border-white/10">
                  Purchased: {currentFeatured.productPurchased}
                </span>
              </div>
            </div>

            {/* Right: Detailed Quote */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-secondary text-base mb-3">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                  <span className="text-xs font-bold text-white/60 ml-2">Verified Studio Purchase</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
                  &ldquo;{currentFeatured.title}&rdquo;
                </h3>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed italic">
                  &ldquo;{currentFeatured.quote}&rdquo;
                </p>
              </div>

              {/* Navigation Selector for Spotlight */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/50 font-semibold uppercase tracking-wider mr-2">
                    Select Artist:
                  </span>
                  {testimonials.slice(0, 3).map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveHighlight(idx)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        activeHighlight === idx
                          ? "bg-secondary text-primary shadow-sm"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      {t.author.split(" ")[0]}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-white/50">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>100% Authentic Fine Art Review</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filter Pills for Community Grid */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: "all", label: "All Reviews (6)" },
            { id: "painters", label: "Fine Art Painters (3)" },
            { id: "illustrators", label: "Illustrators & Calligraphy (1)" },
            { id: "studios", label: "Residencies & Studios (2)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-neutral-text/70 border border-black/8 hover:border-secondary/40 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Multi-Card Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-secondary text-sm">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[0.65rem] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                    <span>✓</span> Verified Buyer
                  </span>
                </div>

                <h4 className="text-base font-bold text-primary mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-text/75 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Product Footer */}
              <div className="pt-4 border-t border-black/5">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-black/10 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-bold text-primary block truncate">
                      {item.author}
                    </span>
                    <span className="text-[0.68rem] text-neutral-text/60 block truncate">
                      {item.role} • {item.location}
                    </span>
                  </div>
                </div>

                <span className="text-[0.62rem] text-secondary font-bold uppercase tracking-wider block mt-3 truncate">
                  ✦ {item.productPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
