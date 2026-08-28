"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    step: "01",
    label: "SELECTION & SAVINGS",
    title: "Curate Your Pet's Essentials",
    description:
      "Explore our veterinarian-approved grooming brushes, interactive smart motion toys, and orthopedic calming beds. Choose single units or customize multi-pack bundles with up to 45% volume savings.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    highlight: "Volume bundle discounts applied automatically",
  },
  {
    step: "02",
    label: "DOMESTIC DISPATCH",
    title: "Carefully Packed & Shipped via UPS",
    description:
      "Every order is inspected and prepared in pet-safe, recyclable packaging from our domestic fulfillment center within 1–2 business days. Receive live UPS tracking updates straight to your inbox.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80",
    highlight: "Fast 3–5 business days nationwide delivery",
  },
  {
    step: "03",
    label: "PEACE OF MIND",
    title: "14-Day Happy Tail Guarantee",
    description:
      "Unbox pure joy for your companion. If your dog or cat isn't 100% smitten with their new essential, our friendly pet concierge is here to assist with a zero-stress refund.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=800&q=80",
    highlight: "100% risk-free satisfaction promise",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#FAF8F5] py-12 sm:py-16 md:py-20 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/60 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              THE WHISKER VALE EXPERIENCE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Thoughtfully Crafted, <span className="italic text-secondary font-serif">Delivered with Care</span>
          </h2>
          <p className="text-neutral-text/70 text-sm sm:text-base leading-relaxed">
            From our mercantile to your living room, we make nurturing your pet&apos;s daily health, play, and rest a completely effortless experience.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[2rem] p-7 sm:p-8 border border-stone-200/60 shadow-xs hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Elegant Rounded Corners */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-7 bg-neutral-100 shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Elegant Number Pill */}
                  <span className="absolute top-3.5 left-3.5 bg-[#182825]/90 backdrop-blur-md text-[#FAF8F5] text-xs font-serif font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.step}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-1.5">
                  {item.label}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>

                <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-medium text-neutral-text/80">
                <span className="text-secondary text-sm">✓</span>
                <span className="text-[0.75rem]">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}