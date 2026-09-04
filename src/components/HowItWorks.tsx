"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Choose Your Apparel",
    desc: "Browse our collection of compression tops, fleece hoodies, and athletic socks available in individual units or bundle packs.",
    badge: "1-Pack to 8-Pack",
    image: "/img/howitworks1.jpg",
  },
  {
    step: "02",
    title: "Fast Shipping",
    desc: `Orders are packed and dispatched from Austin via ${siteConfig.shippingCarrier} with tracking in ${siteConfig.shippingPeriod} business days.`,
    badge: `${siteConfig.shippingCarrier} Tracked`,
    image: "/img/howitworks2.jpg",
  },
  {
    step: "03",
    title: "14-Day Guarantee",
    desc: "Try our apparel risk-free. If the fit or comfort isn't right for you, return your items within 14 days for a full refund.",
    badge: "100% Guaranteed",
    image: "/img/howitworks3.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0d3b2e] leading-[1.08]">
            How It <span className="text-[#0d4a36]">Works</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Simple ordering, fast delivery, and a hassle-free 14-day return policy.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col rounded-3xl border border-black/8 bg-[#f2f7f4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#0d4a36]/30 hover:-translate-y-1"
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
                <span className="absolute top-4 left-4 bg-[#0d4a36] text-white font-mono font-black text-xs px-3 py-1 rounded-md shadow-md">
                  STEP {item.step}
                </span>

                <span className="absolute bottom-3 left-4 text-[0.68rem] font-black uppercase tracking-wider text-white">
                  {item.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-black uppercase text-[#0d3b2e] mb-2 tracking-tight group-hover:text-black">
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
