"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Select Your Apparel",
    desc: "Explore technical compression baselayers, double-knit fleece hoodies, and zoned performance crew socks designed for maximum athletic output.",
    badge: "1-Pack to 8-Pack",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
  },
  {
    step: "02",
    title: "Austin Lab Dispatch",
    desc: `Inspected and packaged at our Austin facility, then dispatched via ${siteConfig.shippingCarrier} express with tracking in ${siteConfig.shippingPeriod} business days.`,
    badge: `${siteConfig.shippingCarrier} Tracked`,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    step: "03",
    title: "14-Day Field Trial",
    desc: "Put our activewear through grueling conditioning blocks. If it doesn't elevate your performance and comfort, return for a 100% full refund.",
    badge: "100% Guaranteed",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Green Accent in Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-black/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            From Selection <span className="text-secondary">To Your Door</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto font-normal">
            A streamlined customer journey engineered for athletes who demand precision from order placement to daily workout execution.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col rounded-3xl border border-black/8 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-secondary/40 hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Step Number Badge */}
                <span className="absolute top-4 left-4 bg-secondary text-black font-mono font-black text-xs px-2.5 py-1 rounded-md shadow-sm">
                  STEP {item.step}
                </span>

                <span className="absolute bottom-3 left-4 text-[0.68rem] font-black uppercase tracking-wider text-white">
                  {item.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-black uppercase text-primary mb-2.5 tracking-tight group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
