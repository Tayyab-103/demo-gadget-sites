"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  ssPrice: string;
}

export default function ProductMarquee() {
  const products = productsData as unknown as ProductItem[];
  const [isPaused, setIsPaused] = useState(false);

  // Repeat products list multiple times to ensure smooth infinite loop
  const marqueeItems = [...products, ...products, ...products, ...products];

  return (
    <section className="bg-[#FAF9F6] border-y border-neutral-200/70 py-6 relative overflow-hidden">
      <div className="w-full mx-auto px-4 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#265C1E] animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#132B1C]/80">
            Handcrafted Tool Editions
          </span>
        </div>
        <Link
          href="/shop"
          className="text-xs font-semibold text-[#265C1E] hover:text-[#132B1C] transition-colors flex items-center gap-1 group"
        >
          <span>View All Series</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      <div
        className="overflow-hidden w-full relative w-full mx-auto select-none py-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-[#FAF9F6] to-transparent"></div>

        {/* Marquee Inner Track */}
        <div
          className={`marquee-inner flex will-change-transform min-w-[200%] ${
            isPaused ? "paused-marquee" : ""
          }`}
        >
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {marqueeItems.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={`/product/${item.id}`}
                className="group flex-shrink-0 flex items-center gap-3.5 bg-white border border-gray-200/80 hover:border-[#265C1E]/50 rounded-2xl p-2.5 pr-5 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-neutral-100 border border-gray-100 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    draggable="false"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#265C1E] block">
                    {item.category.split("&")[0].trim()}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#11281A] group-hover:text-[#265C1E] transition-colors whitespace-nowrap">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    From <span className="font-bold text-[#132B1C]">${item.ssPrice}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#FAF9F6] to-transparent"></div>
      </div>

      <style jsx>{`
        .marquee-inner {
          animation: marqueeScroll 22s linear infinite;
        }

        .paused-marquee {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
