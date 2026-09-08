"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  const [active, setActive] = useState(0);

  if (!products || products.length === 0) return null;

  const total = products.length;
  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  const leftProduct = products[leftIdx];
  const centerProduct = products[active];
  const rightProduct = products[rightIdx];

  const getPrice = (p: Product) => {
    const bundle = p.bundles && p.bundles[0];
    return bundle ? bundle.price : p.ssPrice;
  };

  const centerPrice = getPrice(centerProduct);
  const centerOriginalPrice = (Number(centerPrice) * 1.4).toFixed(2);

  const leftPrice = getPrice(leftProduct);
  const rightPrice = getPrice(rightProduct);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % total);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans border-b border-black/5" id="shop">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C1E17]/5 border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0C1E17]">
              Curated Masterpieces
            </span>
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal uppercase tracking-tight text-[#0C1E17] leading-tight">
            Explore The <span className="text-[#D4AF37]">Collection</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base mt-2 max-w-md mx-auto leading-relaxed">
            Click to rotate through our signature creations or select a piece to configure your custom suite.
          </p>
        </div>

        {/* 3-Card Spotlight Carousel Row */}
        <div className="w-full flex items-center justify-center gap-3 sm:gap-6 lg:gap-8" id="carouselRow">
          
          {/* ─── 1. LEFT CARD (PREVIEW) ─── */}
          <div
            id="leftCard"
            onClick={handlePrev}
            className="hidden md:flex flex-col items-center cursor-pointer group opacity-60 hover:opacity-95 transition-all duration-500 transform hover:-translate-x-1"
          >
            <div className="w-40 lg:w-56 aspect-4/5 rounded-2xl overflow-hidden bg-[#0C1E17] border border-black/10 shadow-md relative">
              <img
                id="leftImg"
                src={leftProduct.image}
                alt={leftProduct.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17]/80 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-[#0C1E17]/80 backdrop-blur-xs text-[#D4AF37] text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                {leftProduct.category || "Jewelry"}
              </span>
            </div>
            <p id="leftName" className="text-xs lg:text-sm font-serif font-bold text-slate-800 mt-3 text-center max-w-[160px] truncate group-hover:text-[#D4AF37] transition-colors">
              {leftProduct.name}
            </p>
            <span className="text-[0.7rem] font-bold text-black/50">${leftPrice}</span>
          </div>

          {/* ─── 2. CENTER CARD (ACTIVE SPOTLIGHT) ─── */}
          <div className="flex flex-col items-center max-w-sm sm:max-w-md w-full animate-in fade-in zoom-in-95 duration-300">
            <Link
              href={`/product/${centerProduct.id}`}
              className="group relative w-64 sm:w-80 md:w-96 aspect-4/5 rounded-3xl overflow-hidden bg-[#0C1E17] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 block cursor-pointer"
            >
              <img
                id="centerImg"
                src={centerProduct.image}
                alt={centerProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17]/90 via-[#0C1E17]/20 to-transparent" />

              {/* Top Floating Badge */}
              <span className="absolute top-4 left-4 bg-[#0C1E17]/90 backdrop-blur-md text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-md">
                ✦ {centerProduct.category || "Featured Piece"} ✦
              </span>

              {/* Bottom Quick Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[0.65rem] text-white/60 uppercase tracking-widest block font-medium">Starting at</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black text-[#D4AF37]">${centerPrice}</span>
                    <span className="text-xs text-white/50 line-through">${centerOriginalPrice}</span>
                  </div>
                </div>
                <span className="bg-[#D4AF37] text-[#0C1E17] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-md group-hover:bg-white transition-colors">
                  View Piece &rarr;
                </span>
              </div>
            </Link>

            {/* Center Product Details */}
            <div className="text-center mt-5 px-2">
              <h3 id="centerName" className="text-lg sm:text-2xl font-serif font-bold text-[#0C1E17] tracking-tight leading-snug hover:text-[#D4AF37] transition-colors">
                <Link href={`/product/${centerProduct.id}`}>
                  {centerProduct.name}
                </Link>
              </h3>
              
              <p id="centerSubtitle" className="text-xs sm:text-sm text-black/65 mt-2 line-clamp-2 max-w-sm mx-auto font-light leading-relaxed">
                {centerProduct.description}
              </p>
            </div>
          </div>

          {/* ─── 3. RIGHT CARD (PREVIEW) ─── */}
          <div
            id="rightCard"
            onClick={handleNext}
            className="hidden md:flex flex-col items-center cursor-pointer group opacity-60 hover:opacity-95 transition-all duration-500 transform hover:translate-x-1"
          >
            <div className="w-40 lg:w-56 aspect-4/5 rounded-2xl overflow-hidden bg-[#0C1E17] border border-black/10 shadow-md relative">
              <img
                id="rightImg"
                src={rightProduct.image}
                alt={rightProduct.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17]/80 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-[#0C1E17]/80 backdrop-blur-xs text-[#D4AF37] text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                {rightProduct.category || "Fine Jewelry"}
              </span>
            </div>
            <p id="rightName" className="text-xs lg:text-sm font-serif font-bold text-slate-800 mt-3 text-center max-w-[160px] truncate group-hover:text-[#D4AF37] transition-colors">
              {rightProduct.name}
            </p>
            <span className="text-[0.7rem] font-bold text-black/50">${rightPrice}</span>
          </div>

        </div>

        {/* ─── 4. CAROUSEL CONTROLS & DOTS ─── */}
        <div className="flex items-center gap-4 mt-8" id="controls">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-black/15 bg-white hover:border-[#D4AF37] hover:bg-[#0C1E17] hover:text-[#D4AF37] transition-all flex items-center justify-center text-xs font-bold cursor-pointer shadow-xs"
            aria-label="Previous Product"
          >
            &#8592;
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2" id="dots">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "w-8 h-2.5 rounded-full bg-[#0C1E17] border border-[#D4AF37]"
                    : "w-2.5 h-2.5 rounded-full bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Jump to product ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-black/15 bg-white hover:border-[#D4AF37] hover:bg-[#0C1E17] hover:text-[#D4AF37] transition-all flex items-center justify-center text-xs font-bold cursor-pointer shadow-xs"
            aria-label="Next Product"
          >
            &#8594;
          </button>
        </div>

      </div>
    </section>
  );
}
