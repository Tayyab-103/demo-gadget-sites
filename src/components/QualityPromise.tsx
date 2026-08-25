"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function QualityPromise() {
  const p1 = products[0] || {
    id: "product1",
    name: "Voltspire Pro Digital Multimeter",
    category: "Precision Diagnostic Equipment",
    image: "/img/products/product1.jpg",
  };

  const p2 = products[1] || {
    id: "product2",
    name: "Voltspire Industrial Thermal Clamp Meter",
    category: "Thermal & Current Measurement",
    image: "/img/products/product2.jpg",
  };

  const p3 = products[2] || {
    id: "product3",
    name: "Voltspire Heavy-Duty Power Inverter Module",
    category: "Power Conditioning & Conversion",
    image: "/img/products/product3.jpg",
  };

  return (
    <section id="guarantee" className="py-12 sm:py-16 md:py-20 bg-[#F5F5F7] relative overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        
        {/* =========================================================
            HEADER: Centered Pill + Title + Subtitle (Matching Reference)
            ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/80 border border-black/5 shadow-2xs mb-5">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-text/60">
              OUR GUARANTEE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111] leading-[1.15] mb-4">
            Why industry leaders choose VOLTSPIRE
          </h2>

          <p className="text-sm sm:text-base text-neutral-text/55 leading-relaxed">
            Exceptional engineering and certified durability that set the benchmark for modern electrical infrastructure
          </p>
        </div>

        {/* =========================================================
            BENTO GRID (4 Cards matching the reference layout)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">

          {/* ──── CARD 1: Product 1 (Voltspire Pro Digital Multimeter) ──── */}
          <div className="lg:col-span-4 bg-[#ECECEE] rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between border border-black/[0.03] shadow-xs group hover:shadow-md transition-all duration-300">
            {/* Product Image Showcase */}
            <Link
              href={`/product/${p1.id}`}
              className="w-full aspect-4/3 sm:aspect-square bg-white rounded-2xl p-4 mb-8 flex items-center justify-center overflow-hidden shadow-xs relative block group/img"
            >
              <img
                src={p1.image}
                alt={p1.name}
                className="w-full h-full object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=80";
                }}
              />
              <span className="absolute top-3 left-3 bg-[#111] text-white text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                {p1.category}
              </span>
            </Link>

            {/* Content & CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111] leading-snug tracking-tight mb-6">
                Calibrated by master technicians to deliver timeless reliability and unmatched safety.
              </h3>

              <Link
                href={`/product/${p1.id}`}
                className="inline-flex items-center gap-3 bg-[#111] hover:bg-[#333] text-white text-xs font-semibold pl-5 pr-2 py-2 rounded-full transition-all duration-300 group/btn shadow-sm"
              >
                <span>View {p1.name.split(" ")[1] || "Equipment"}</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#111] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* ──── RIGHT COLUMN: 3 Nested Bento Cards ──── */}
          <div className="lg:col-span-8 flex flex-col gap-5 md:gap-6">
            
            {/* Top Row: 2 Cards (Card 2 & Card 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 md:gap-6">
              
              {/* ──── CARD 2: Industrial Trust & Partnership ──── */}
              <div className="sm:col-span-7 bg-[#ECECEE] rounded-[2rem] p-7 flex flex-col justify-between border border-black/[0.03] shadow-xs group hover:shadow-md transition-all duration-300 min-h-[260px]">
                <div className="w-full h-36 rounded-2xl overflow-hidden mb-6 bg-white relative">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                    alt="Trusted Industrial Partnership"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xl sm:text-2xl leading-snug tracking-tight font-bold">
                  <span className="text-[#111]">Trusted by</span>{" "}
                  <span className="text-neutral-text/45 font-medium">electrical engineers & contractors worldwide.</span>
                </div>
              </div>

              {/* ──── CARD 3: Precision Component Guarantee ──── */}
              <div className="sm:col-span-5 bg-[#ECECEE] rounded-[2rem] p-7 flex flex-col justify-between border border-black/[0.03] shadow-xs group hover:shadow-md transition-all duration-300 min-h-[260px]">
                <div className="flex items-center justify-end">
                  <div className="w-20 h-20 rounded-2xl bg-white p-1.5 shadow-xs overflow-hidden border border-black/5">
                    <img
                      src="/img/products/product3.jpg"
                      alt="Certified Hardware"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#111] tracking-tight leading-none mb-2">
                    99.9%
                  </div>
                  <p className="text-xs text-neutral-text/50 font-medium leading-relaxed">
                    Certified tolerance rating across all industrial test cycles.
                  </p>
                </div>
              </div>

            </div>

            {/* ──── CARD 4: Modern Grid Infrastructure ──── */}
            <div className="bg-[#ECECEE] rounded-[2rem] p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-black/[0.03] shadow-xs group hover:shadow-md transition-all duration-300 flex-1">
              <div className="max-w-md">
                <h3 className="text-xl sm:text-2xl md:text-[1.7rem] leading-snug tracking-tight font-bold">
                  <span className="text-[#111]">Elevates grid stability and transforms</span>{" "}
                  <span className="text-neutral-text/45 font-medium">your electrical setup into a statement of power.</span>
                </h3>
              </div>

              <div className="w-full sm:w-56 h-44 sm:h-48 rounded-2xl overflow-hidden bg-white flex-shrink-0 shadow-xs border border-black/5 relative">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?w=800&q=80"
                  alt="Industrial power infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}