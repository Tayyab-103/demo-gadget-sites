"use client";

import React, { useState } from "react";

const cardData = [
  {
    title: "Hand-Forged Carbon Metallurgy",
    subtitle: "58 HRC Tempered Steel",
    image: "/img/products/garden_tools/trowel_1.jpg",
  },
  {
    title: "Japanese SK5 Precision Pruning",
    subtitle: "Surgical Botanical Cuts",
    image: "/img/products/garden_tools/pruner_1.jpg",
  },
  {
    title: "Triple-Tine Root Aeration",
    subtitle: "Deep Soil Cultivation",
    image: "/img/products/garden_tools/cultivator_2.jpg",
  },
  {
    title: "Lathe-Turned Ash Hardwood",
    subtitle: "Linseed Oil Weather-Sealed",
    image: "/img/how_it_works_2.jpg",
  },
  {
    title: "Organic Homestead Cultivation",
    subtitle: "Master Grower Tested",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Heirloom Craftsmanship",
    subtitle: "Built for Generations",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function Gallery() {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-black/5" id="gallery">
      <style>{`
        @keyframes galleryMarqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .gallery-marquee-inner {
          animation: galleryMarqueeScroll linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-14 text-center">
        <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#265C1E] bg-[#FAF9F6] rounded-full px-6 py-2 shadow-xs border border-black/5 inline-block">
          FOUNDRY VISUAL GALLERY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#11281A] mt-5 tracking-tight font-sans">
          The Art of Cultivation
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-text/75 max-w-lg mx-auto mt-3 leading-relaxed">
          A visual collection of our drop-forged tools in the workshop, botanical gardens, and fertile soil.
        </p>
      </div>

      <div
        className="overflow-hidden w-full relative max-w-7xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-28 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Marquee Track */}
        <div
          className="gallery-marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${cardData.length * 3500}ms`,
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-60 sm:w-64 mx-3.5 h-[22rem] relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[0.98] transition-all duration-500 flex-shrink-0 border border-black/5 bg-neutral-200"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/garden_tools/trowel_1.jpg";
                  }}
                />
                
                {/* Always-Visible Subtle Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold group-hover:opacity-0 transition-opacity duration-300 drop-shadow-sm">
                  {card.title}
                </div>

                {/* Hover Reveal Card Overlay */}
                <div className="flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 backdrop-blur-md bg-black/40 text-center">
                  <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#78C470] mb-2">
                    {card.subtitle}
                  </span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">
                    {card.title}
                  </p>
                  <span className="mt-4 px-3.5 py-1 rounded-full bg-white/20 text-white text-[0.68rem] font-bold uppercase tracking-wider border border-white/20">
                    Briarforge Tool
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
}
