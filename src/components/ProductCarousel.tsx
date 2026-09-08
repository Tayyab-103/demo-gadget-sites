"use client";

import React, { useState } from "react";

interface ProductCarouselProps {
  images: string[];
  name: string;
}

export default function ProductCarousel({ images, name }: ProductCarouselProps) {
  const [stopScroll, setStopScroll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const rawImages = images && images.length > 0 ? images : ["https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop"];

  // Contextual titles for kit angles and components
  const imageTitles = [
    "Kit Presentation Angle",
    "Precision Laser-Cut Detail",
    "Snug Wooden Gear Fitment",
    "Tabletop Game Board Setup",
    "Natural Baltic Birch Grain",
    "Assembled Model Showcase",
  ];

  const cardData = rawImages.map((img, idx) => ({
    title: `${name} — ${imageTitles[idx % imageTitles.length]}`,
    image: img,
  }));

  // Ensure enough items for a seamless continuous marquee loop
  const repeatCount = Math.max(3, Math.ceil(6 / cardData.length));
  const fullList = Array(repeatCount).fill(cardData).flat();

  return (
    <div className="w-full">
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

      {/* Main Focus / Active Image Display if user clicked on an image */}
      {selectedImage && (
        <div className="mb-6 relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] bg-[#FAF8F5] border border-black/10 shadow-lg">
          <img
            src={selectedImage}
            alt={name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm cursor-pointer transition-colors backdrop-blur-xs"
            aria-label="Close preview"
          >
            &times;
          </button>
          <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-2xl px-4 py-2.5 text-white flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider">{name}</span>
            <span className="text-[0.65rem] text-white/70">Click thumbnails below to switch</span>
          </div>
        </div>
      )}

      {/* Marquee Gallery Container */}
      <div className="relative">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#A36B42]">
            Hobby Gallery Stream
          </span>
          <span className="text-[0.65rem] text-black/50 font-medium">
            Hover to pause &bull; Click to enlarge
          </span>
        </div>

        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto rounded-3xl bg-[#FAF8F5] p-2 sm:p-4 border border-black/[0.06]"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 h-full w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#FAF8F5] to-transparent" />

          {/* Scrolling Marquee Inner Track */}
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: `${Math.max(12, fullList.length * 2000)}ms`,
            }}
          >
            <div className="flex">
              {[...fullList, ...fullList].map((card, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(card.image)}
                  className="w-48 sm:w-56 mx-3 sm:mx-4 h-[16rem] sm:h-[20rem] relative group hover:scale-90 transition-all duration-300 rounded-2xl overflow-hidden shadow-sm cursor-pointer shrink-0 border border-black/10 bg-white"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/30">
                    <p className="text-white text-sm sm:text-base font-semibold text-center mb-2 leading-snug">
                      {card.title}
                    </p>
                    <span className="inline-block bg-white text-[#191716] text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      View Angle
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#FAF8F5] to-transparent" />
        </div>
      </div>
    </div>
  );
}
