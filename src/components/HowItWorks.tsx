"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    step: "01",
    tag: "CHOOSE YOUR BUNDLE",
    title: "Select Your Baby Essentials",
    description: "Browse our thoughtfully curated nursery bundles or handpick individual items — organic bibs, natural beechwood teethers, and heirloom knitwear all in one place.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
  },
  {
    step: "02",
    tag: "SAFE & ENCRYPTED",
    title: "Checkout in Seconds",
    description: "Simple, secure checkout with military-grade SSL encryption. No hidden fees, multiple payment options, and instant email confirmation the moment you order.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    step: "03",
    tag: "DOORSTEP DELIVERY",
    title: "Delivered With Care",
    description: "Every item is hand-inspected and wrapped in keepsake-ready packaging. Your order arrives in 3–5 business days, ready to be unboxed with pure joy.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#F3EEFF] relative overflow-hidden" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
              Simple & Seamless
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-purple-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1040] tracking-tight leading-tight">
            How Your Treasures <span className="text-[#7C3AED]">Arrive</span>
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            From our nursery studio straight to your family&apos;s arms — a delightfully simple journey, every single time.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-16/11 w-full overflow-hidden bg-purple-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#7C3AED] text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                  {item.step}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#7C3AED] mb-1.5 block">
                  {item.tag}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#1E1040] mb-2 leading-snug">
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