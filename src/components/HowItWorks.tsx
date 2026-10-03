"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    label: "PRECISION HARDWARE SELECTION",
    title: "Choose Your Circuit Gear",
    description:
      "Explore our catalog of smart watches, hi-fi acoustic headphones, and high-performance gaming consoles with bundle discounts.",
    image: "/img/products/product01.jpg",
    highlight: "Multi-device volume savings",
  },
  {
    step: "02",
    label: "EXPEDITED DISPATCH",
    title: `Fast ${siteConfig.shippingCarrier} Delivery`,
    description:
      `Precision-packed in anti-static protective packaging and dispatched within 24–48 hours with live ${siteConfig.shippingCarrier} tracking.`,
    image: "/img/products/product2.png",
    highlight: `Fast ${siteConfig.shippingPeriod} business days delivery`,
  },
  {
    step: "03",
    label: "GUARANTEED PERFORMANCE",
    title: `${siteConfig.trialPeriod}-Day Circuit Guarantee`,
    description:
      "Experience zero-risk tech exploration. If you aren't completely thrilled by the performance and build quality, our support team makes returns easy.",
    image: "/img/products/product3.jpg",
    highlight: "100% money-back satisfaction guarantee",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-neutral-bg py-12 sm:py-16 md:py-20 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-secondary px-4 py-1.5 rounded-full border border-secondary/30 shadow-xs mb-3.5">
            <span className="text-xs">⚡</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em]">
              THE MODERN CIRCUIT EXPERIENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-primary tracking-tight leading-tight mb-3">
            Engineered For Excellence, <span className="text-secondary">Delivered Fast</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From our testing laboratory to your doorstep, we make upgrading your daily consumer tech and electronics effortless.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-7 bg-slate-900 shadow-inner flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Step Number Pill */}
                  <span className="absolute top-3.5 left-3.5 bg-primary/90 backdrop-blur-md text-secondary text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-secondary/30">
                    {item.step}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-1.5">
                  {item.label}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-primary">
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