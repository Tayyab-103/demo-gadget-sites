"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    label: "SELECTION & MULTI-PACK SAVINGS",
    title: "Curate Baby Essentials",
    description:
      "Select from ergonomic bouncers, carriers, play gyms, and nursery organizers with built-in volume bundle savings.",
    image: "/img/products/Baby Carrier.jpg",
    highlight: "Volume bundle savings applied automatically",
  },
  {
    step: "02",
    label: "DOMESTIC DISPATCH",
    title: `Fast ${siteConfig.shippingCarrier} Delivery`,
    description:
      `Carefully packed in clean protective packaging and dispatched within 1–2 days with live ${siteConfig.shippingCarrier} tracking straight to your door.`,
    image: "/img/hero1.jpg",
    highlight: `Fast ${siteConfig.shippingPeriod} business days delivery`,
  },
  {
    step: "03",
    label: "PEACE OF MIND",
    title: `${siteConfig.trialPeriod}-Day Parent Guarantee`,
    description:
      "Enjoy 100% gentle satisfaction. If you and your baby aren't completely delighted, our concierge provides an easy, risk-free refund.",
    image: "/img/products/Baby Bouncer.jpg",
    highlight: "100% peaceful parenting guarantee",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-neutral-bg py-12 sm:py-16 md:py-20 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="text-xs">✨</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              THE {siteConfig.brandName.toUpperCase()} EXPERIENCE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Thoughtfully Selected, <span className="italic text-primary/80 font-serif">Delivered with Care</span>
          </h2>
          <p className="text-neutral-text/75 text-sm sm:text-base leading-relaxed">
            From our nursery curation to your home, we make everyday baby care, feeding, and travel a seamless, joyous experience.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[2rem] p-7 sm:p-8 border border-stone-200/80 shadow-xs hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-7 bg-neutral-100 shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Number Pill */}
                  <span className="absolute top-3.5 left-3.5 bg-primary/90 backdrop-blur-md text-white text-xs font-serif font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.step}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary/80 block mb-1.5">
                  {item.label}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-3 leading-snug transition-colors">
                  {item.title}
                </h3>

                <p className="text-neutral-text/75 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-4 border-t border-stone-200 flex items-center gap-2 text-xs font-medium text-neutral-text/80">
                <span className="text-primary text-sm font-bold">✓</span>
                <span className="text-[0.75rem]">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}