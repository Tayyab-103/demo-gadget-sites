"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Select Your Studio Supplies",
    desc: "Browse our curated collection of professional stretched canvases, heavy-body acrylics, fine artist brushes, and studio easels in single units or studio bundles.",
    badge: "1-Pack to 8-Pack",
    image: "/img/howit1.jpg",
    fallback: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
  },
  {
    step: "02",
    title: "Fast Tracked Dispatch",
    desc: `Orders are carefully protected with archival-safe packaging and dispatched via ${siteConfig.shippingCarrier} with full tracking within ${siteConfig.shippingPeriod} business days.`,
    badge: `${siteConfig.shippingCarrier} Tracked`,
    image: "/img/howit2.jpg",
    fallback: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&q=80",
  },
  {
    step: "03",
    title: "14-Day Studio Guarantee",
    desc: "Test our art and craft supplies in your creative studio. If the texture, pigmentation, or quality does not inspire your work, return for a 100% full refund.",
    badge: "100% Guaranteed",
    image: "/img/howit3.jpg",
    fallback: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 12%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Simple &amp; Reliable
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Streamlined ordering, studio-safe packaging, and a hassle-free 14-day satisfaction policy.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col rounded-3xl border border-black/8 bg-primary-tint overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = item.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Step Number Badge */}
                <span
                  className="absolute top-4 left-4 font-mono font-black text-xs px-3 py-1 rounded-md shadow-md"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--primary-text-color)",
                  }}
                >
                  STEP {item.step}
                </span>

                <span className="absolute bottom-3 left-4 text-[0.68rem] font-black uppercase tracking-wider text-white">
                  {item.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-black uppercase text-primary mb-2 tracking-tight group-hover:text-black transition-colors">
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
