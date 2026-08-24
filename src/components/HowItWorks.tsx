"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    step: "01",
    tag: "SELECT YOUR TREASURES",
    title: "Pick Your Baby Essentials",
    description: "Choose single essentials or build a personalized nursery bundle with organic cotton bibs, natural beechwood rattles, and heirloom knitwear.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
  },
  {
    step: "02",
    tag: "CLEAR & ENCRYPTED",
    title: "Secure 256-Bit Checkout",
    description: "Enjoy zero hidden fees, free nationwide delivery, and military-grade SSL encrypted checkout with instant order confirmation.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    step: "03",
    tag: "NURSERY CARE DELIVERY",
    title: "Lovingly Packaged & Shipped",
    description: "Every item is hand-inspected, wrapped in gentle keepsake packaging, and delivered directly to your doorstep in 3-5 business days.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFDF9] relative overflow-hidden" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B]">
              Seamless Delivery
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-gray-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2330] tracking-tight leading-tight">
            How Your Treasures <span className="text-[#FF6B8B]">Arrive</span>
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            From our nursery care studio directly to your family arms — simple, delightful, and fast.
          </p>
        </div>

        {/* 3 Step Cards Grid (Clean, Editorial, Warm Ivory) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Natural Photo Container */}
              <div className="relative aspect-16/11 w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-[#1E2330] font-black text-xs px-3 py-1 rounded-full shadow-xs">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#FF6B8B] mb-1.5 block">
                  {item.tag}
                </span>

                <h3 className="text-base sm:text-lg font-black text-[#1E2330] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}