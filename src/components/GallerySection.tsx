"use client";

import React, { useState } from "react";

interface GalleryCard {
  title: string;
  subtitle?: string;
  image: string;
}

const defaultGalleryData: GalleryCard[] = [
  {
    title: "Precision Audio & Cyber Acoustics",
    subtitle: "Active Noise Cancellation Studio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Next-Gen GaN Fast Charging",
    subtitle: "100W Multi-Port Power Station",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Minimalist Smart Circuit Workspace",
    subtitle: "Engineered For Seamless Flow",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Wireless Smart Docking Stations",
    subtitle: "High-Speed Qi2 Magnetic Power",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Ultra-Portable High-Capacity Banks",
    subtitle: "Pocket-Sized Aviation Safe Energy",
    image: "https://images.unsplash.com/photo-1609081219090-a6d8173087ec?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Smart Wearable & Sensor Ecosystem",
    subtitle: "Connected Tech Hardware",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function GallerySection() {
  const [stopScroll, setStopScroll] = useState<boolean>(false);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden" id="gallery">
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
      `}</style>

      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-secondary font-extrabold text-xs tracking-widest uppercase mb-3 border border-secondary/30 shadow-xs">
          <span>Interactive Visual Showcase</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-primary tracking-tight">
          Modern Circuit <span className="text-secondary">In Action</span>
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium mt-2">
          Explore our precision-engineered gadgets, studio setups, and next-generation charging hardware in real-world environments.
        </p>
      </div>

      {/* Marquee Container */}
      <div
        className="overflow-hidden w-full relative py-2"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
        onTouchStart={() => setStopScroll(true)}
        onTouchEnd={() => setStopScroll(false)}
      >
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-28 md:w-25 z-20 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Scrolling Strip */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
          }}
        >
          <div className="flex items-center">
            {[...defaultGalleryData, ...defaultGalleryData].map((card, index) => (
              <div
                key={index}
                className="w-60 sm:w-72 md:w-80 mx-3 sm:mx-4 h-[19rem] sm:h-[23rem] relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer border border-gray-200/80 bg-slate-900"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Ambient Dark Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Caption Overlay with Glassmorphism / Blur */}
                <div className="flex flex-col items-center justify-end p-5 opacity-90 group-hover:opacity-100 transition-all duration-300 absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[2px] group-hover:backdrop-blur-none text-center">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    {card.subtitle && (
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-secondary block mb-1 drop-shadow-xs">
                        {card.subtitle}
                      </span>
                    )}
                    <p className="text-white text-sm sm:text-base md:text-lg font-bold leading-snug drop-shadow-md">
                      {card.title}
                    </p>
                    <div className="w-8 h-0.5 bg-secondary mx-auto mt-2.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-28 md:w-25 z-20 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Bottom Subtle Interaction Hint */}
      <div className="text-center mt-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Hover or tap any card to pause scroll and inspect details
        </span>
      </div>
    </section>
  );
}
