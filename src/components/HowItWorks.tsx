"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Select Styles & Bundles",
    desc: "Choose from our 3 foundational family staples. Mix and match individual garments or select multi-pack family bundles to save up to 40%.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
  },
  {
    step: "02",
    title: "Fast Encrypted Checkout",
    desc: "Complete your order with peace of mind. Our checkout utilizes bank-level 256-bit SSL encryption with clear descriptor billing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    step: "03",
    title: "Doorstep Delivery",
    desc: `Your items are hand-inspected, wrapped in recyclable packaging, and delivered nationwide via ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days.`,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-b border-black/[0.06]" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            How It Works
          </h2>
          <p className="text-neutral-text/65 text-sm md:text-base mt-3">
            Dressing the entire household in certified organic comfort is straightforward and reliable.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl overflow-hidden border border-black/[0.06] shadow-xs flex flex-col justify-between group hover:border-secondary/40 hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3.5 left-3.5 bg-primary text-white text-xs font-black px-3 py-1 rounded-full">
                  Step {item.step}
                </span>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-text/65 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}