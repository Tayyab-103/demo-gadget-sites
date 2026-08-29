"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    label: "CURATED SELECTION",
    title: "Select Your Craft Essentials",
    desc: "Choose between German iridium fountain pen suites, Smyth-sewn full-grain leather journals with 160 GSM bleedproof paper, or solid brass executive desk sets tailored for deep creative focus.",
    badge: "1-Pack to Studio Volume",
    image: "/img/step1-craft-essentials.jpg",
    features: [
      "German Iridium Precision Nibs",
      "160 GSM Milled Cotton Parchment",
      "Solid Heavy-Gauge Brass Casting",
    ],
  },
  {
    step: "02",
    label: "ATELIER DISPATCH",
    title: "Austin Atelier Inspection & Wax Seal",
    desc: `Each piece is individually inspected by hand in our Austin atelier, wrapped in protective archival sleeves, boxed with a custom wax seal, and dispatched via ${siteConfig.shippingCarrier} with full tracking within ${siteConfig.shippingPeriod} business days.`,
    badge: `${siteConfig.shippingCarrier} Express Tracked`,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    features: [
      "Hand-Inspected in Austin, Texas",
      "Custom Wax-Sealed Packaging",
      `Dispatched via ${siteConfig.shippingCarrier} Express (3-5 Days)`,
    ],
  },
  {
    step: "03",
    label: "STUDIO PRACTICE",
    title: "14-Day Studio Practice Trial",
    desc: "Put our fountain pens, leather journals, and desk suites through your daily writing, calligraphy, and drafting rituals. If our craftsmanship does not elevate your prose, return for a 100% full refund with zero hassle.",
    badge: "100% Satisfaction Guarantee",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
    features: [
      "14-Day Risk-Free Studio Trial",
      "Zero-Bleed & Ghosting Guarantee",
      "100% Money-Back Satisfaction",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            The Quillhaven Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.1]">
            From The Atelier <span className="text-[#C5A059] italic font-normal">To Your Desk</span>
          </h2>
          <p className="text-[#1A202C]/70 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto font-normal">
            A seamless vertical journey crafted for authors, executives, and calligraphers who demand perfection from selection to the written word.
          </p>
        </div>

        {/* Alternating Vertical Step Sequence (1 -> 2 -> 3) */}
        <div className="flex flex-col gap-14 sm:gap-20 md:gap-24 relative">
          
          {/* Subtle vertical connector line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#C5A059]/30 via-[#C5A059]/50 to-[#C5A059]/20 pointer-events-none" />

          {steps.map((item, idx) => {
            const isEven = idx % 2 === 1; // Step 2 (index 1) is even (description on left, image on right)

            return (
              <div
                key={item.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-[#C5A059]/30 bg-white shadow-xl aspect-[16/11] sm:aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121820]/75 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating badge inside image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#121820]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C5A059]/30">
                        {item.badge}
                      </span>
                      <span className="font-serif font-bold text-xs text-[#C5A059] bg-[#121820]/80 px-2.5 py-1 rounded-md border border-[#C5A059]/20">
                        STAGE {item.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description Column */}
                <div
                  className={`lg:col-span-6 flex flex-col ${
                    isEven ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
                  }`}
                >
                  {/* Large Number & Step Label */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C5A059] leading-none select-none">
                      {item.step}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[0.65rem] font-serif uppercase tracking-[0.28em] text-[#C5A059] font-bold">
                        {item.label}
                      </span>
                      <span className="h-[1.5px] w-12 bg-[#C5A059]/40 mt-1" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121820] mb-3 leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-[#1A202C]/75 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="flex flex-col gap-2 border-t border-[#C5A059]/15 pt-4 text-xs sm:text-sm text-[#121820]">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#121820] flex items-center justify-center text-xs font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="font-serif">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
