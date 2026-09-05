"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function Hero() {
  const { addToCart } = useCart();
  const product1 = products[0];

  const handleQuickAddPen = () => {
    if (product1) {
      const firstBundle = product1.bundles?.[0];
      const price = firstBundle ? String(firstBundle.price) : product1.ssPrice;
      addToCart(product1, 1, price, "Single Unit");
    }
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] text-[#121820] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-[#C5A059]/20">
      
      {/* Background Ambient Warmth */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & CTAs (Granola-inspired) */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Top Badge */}
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#EFE9DF] border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-200 mb-6 sm:mb-8 text-xs text-[#121820]"
            >
              <span className="px-2 py-0.5 rounded-full bg-[#C5A059] text-[#121820] font-bold text-[0.68rem] tracking-wide uppercase">
                New
              </span>
              <span className="font-serif font-semibold text-xs tracking-tight">
                Austin Atelier Autumn Suite
              </span>
              <span className="text-[#C5A059] group-hover:translate-x-0.5 transition-transform duration-200 font-bold">
                →
              </span>
            </Link>

            {/* Giant Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-serif font-bold text-[#121820] leading-[1.05] tracking-tight mb-6">
              The artisanal <br />
              notepad for <br />
              visionary <br />
              thinkers
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-[#121820]/75 font-serif leading-relaxed mb-8 max-w-lg">
              Words, sketches, and daily rituals. <br />
              Without bleed or ghosting.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-7 w-full sm:w-auto">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#2A3B2B] hover:bg-[#1E2B1F] text-[#FAF8F5] transition-all duration-200 py-4 px-8 rounded-full shadow-lg hover:scale-105 text-center cursor-pointer"
              >
                Explore Collection
                <span className="text-base leading-none">↓</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center font-serif text-xs sm:text-sm border border-[#C5A059]/60 text-[#121820] hover:bg-[#C5A059]/15 transition-all duration-200 py-4 px-7 rounded-full text-center"
              >
                Our Story
              </Link>
            </div>

            {/* Trust Checkmark Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#121820]/70 font-normal">
              <span className="flex items-center justify-center w-4 h-4 rounded-full border border-[#C5A059] text-[#C5A059] text-[0.65rem] font-bold">
                ✓
              </span>
              <span>160 GSM Bleedproof Milled Cotton &amp; 18k German Iridium Nibs</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Atelier Manuscript Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Background Layer 1: Angled Parchment Slate */}
            <div className="absolute -top-5 -right-2 sm:right-4 w-72 sm:w-84 h-96 sm:h-[450px] bg-[#EAE3D5] rounded-3xl -rotate-6 opacity-70 border border-[#C5A059]/30 shadow-md pointer-events-none" />
            
            {/* Background Layer 2: Milled Cotton Green Texture Backing */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 w-64 sm:w-76 h-80 sm:h-[380px] bg-[#8FA782]/20 rounded-3xl rotate-3 border border-[#8FA782]/35 shadow-md pointer-events-none" />

            {/* Main Manuscript Card */}
            <div className="relative w-full max-w-[480px] bg-white rounded-3xl border border-[#C5A059]/35 shadow-2xl p-6 sm:p-7 text-[#121820] z-20 transition-all duration-300">
              
              {/* Header: Atelier Wax Stamp & Serial */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 border border-[#C5A059] flex items-center justify-center text-[#C5A059] text-xs font-serif font-bold">
                    ✒
                  </div>
                  <div>
                    <div className="text-[0.62rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] font-bold">
                      Atelier Specimen № 184
                    </div>
                    <div className="text-xs font-serif font-bold text-[#121820]">
                      Austin Studio Manuscript
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[0.65rem] font-bold text-[#121820]/60 uppercase tracking-wider">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Manuscript Written Excerpt */}
              <div className="relative p-5 rounded-2xl bg-[#FAF8F5] border border-[#C5A059]/25 mb-5 overflow-hidden">
                {/* Decorative background watermark */}
                <div className="absolute right-2 bottom-1 text-5xl font-serif text-[#C5A059]/10 select-none pointer-events-none font-bold">
                  Quillhaven
                </div>

                <div className="flex items-center justify-between text-[0.62rem] font-serif uppercase tracking-wider text-[#121820]/50 mb-2">
                  <span>Drafting Record · 160 GSM</span>
                  <span>Carbon Noir</span>
                </div>

                <blockquote className="text-sm sm:text-base font-serif italic leading-relaxed text-[#121820]">
                  &ldquo;To write by hand is to deliberate with time. Every drop of pigment caught in milled cotton preserves thought in enduring permanence.&rdquo;
                </blockquote>

                <div className="mt-3 pt-3 border-t border-[#C5A059]/15 flex items-center justify-between text-[0.68rem] text-[#121820]/70 font-serif">
                  <span>160 GSM Milled Cotton Parchment</span>
                  <span className="text-[#C5A059] font-bold">Zero Bleed Verified ✓</span>
                </div>
              </div>

              {/* Craft Integrity Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/25 text-center">
                  <div className="text-[0.65rem] font-serif uppercase tracking-wider text-[#C5A059] font-bold mb-0.5">
                    Nib
                  </div>
                  <div className="text-xs font-serif font-bold text-[#121820]">
                    18k German
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/25 text-center">
                  <div className="text-[0.65rem] font-serif uppercase tracking-wider text-[#C5A059] font-bold mb-0.5">
                    Binding
                  </div>
                  <div className="text-xs font-serif font-bold text-[#121820]">
                    180° Lay-Flat
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C5A059]/25 text-center">
                  <div className="text-[0.65rem] font-serif uppercase tracking-wider text-[#C5A059] font-bold mb-0.5">
                    Origin
                  </div>
                  <div className="text-xs font-serif font-bold text-[#121820]">
                    Austin, TX
                  </div>
                </div>
              </div>

              {/* Floating Companion Badge: Fountain Pen Quick View */}
              <div className="absolute -bottom-7 -right-4 sm:-right-6 w-48 sm:w-56 rounded-2xl bg-[#121820] border border-[#C5A059]/50 shadow-2xl p-3 z-30 flex items-center justify-between text-[#FAF8F5]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src="/img/products/fountain-pen.jpg"
                    alt="Fountain Pen Suite"
                    className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-[#C5A059]/30 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-[0.62rem] font-bold text-[#C5A059] uppercase tracking-wider truncate">
                      Archival Pen Suite
                    </div>
                    <div className="text-xs font-serif font-bold truncate">
                      ${product1?.ssPrice || "6.95"}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleQuickAddPen}
                  className="h-8 px-3 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] text-[#121820] text-[0.65rem] font-bold uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-105"
                  aria-label="Quick Add Fountain Pen"
                >
                  Add +
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
