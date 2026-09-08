"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function GallerySection() {
  const [stopScroll, setStopScroll] = useState(false);

  const cardData = [
    {
      title: "Hand-Forged 12-Wire Whisk Aeration",
      image: "https://images.unsplash.com/photo-1556911073-38141963c9e0?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "0.1g Precision Sourdough & Pastry Prep",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Multi-Prep Japanese Cutlery In Action",
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Commercial Tested Stainless & Copper Core",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Artisan Culinary Foundry Craftsmanship",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Master Kitchen Flow & Prep Excellence",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#121316] relative overflow-hidden border-t border-stone-200/80" id="gallery">
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-12">
        {/* Section Header */}
        <div className="text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#F8F6F2] px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
              VISUAL ATELIER &amp; FOUNDRY GALLERY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
            Crafted for Mastery, <br />
            <span className="text-[#E06830] italic font-serif">Captured in Culinary Action</span>
          </h2>

          <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed">
            A glimpse into professional culinary kitchens and baking ateliers utilizing {siteConfig.brandName} handcrafted tools.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Gallery Marquee */}
      <div
        className="overflow-hidden w-full relative max-w-7xl mx-auto py-2"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Marquee Inner Track */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${cardData.length * 3500}ms`,
          }}
        >
          <div className="flex items-center">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-64 sm:w-72 mx-3 sm:mx-4 h-[22rem] relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-95 transition-all duration-300 border border-stone-200/80 bg-stone-100 flex-shrink-0 cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-kitchen.jpg";
                  }}
                />

                {/* Glassmorphism Title Overlay */}
                <div className="flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
                  <span className="w-6 h-1 rounded-full bg-[#E06830] mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                  <p className="text-white text-base sm:text-lg font-serif font-bold text-center leading-snug drop-shadow-md">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
}
