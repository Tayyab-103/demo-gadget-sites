"use client";

import React, { useState } from "react";

interface ProductGalleryMarqueeProps {
  images: string[];
  productName: string;
}

export default function ProductGalleryMarquee({ images, productName }: ProductGalleryMarqueeProps) {
  const [stopScroll, setStopScroll] = useState(false);
  const rawImages = images && images.length > 0 ? images : ["/img/product1.jpg"];

  const titles = [
    "Signature Silhouette",
    "Tailored Fit & Drape",
    "Organic Fabric Detail",
    "Reinforced Twin-Needle Stitch",
    "All-Day Family Comfort",
    "Pre-Shrunk Weave Texture",
  ];

  const cardData = rawImages.map((img, idx) => ({
    title: `${productName} — ${titles[idx % titles.length]}`,
    image: img,
  }));

  // Repeat for continuous seamless marquee loop
  const repeatCount = Math.max(3, Math.ceil(6 / cardData.length));
  const fullCards = Array(repeatCount).fill(cardData).flat();

  return (
    <>
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

      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto py-4"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#FAF8F5] to-transparent" />

        {/* Scrolling Track */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${Math.max(12, fullCards.length * 2500)}ms`,
          }}
        >
          <div className="flex">
            {[...fullCards, ...fullCards].map((card, index) => (
              <div
                key={index}
                className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300 rounded-3xl overflow-hidden shadow-sm border border-black/10 bg-white shrink-0 cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/30">
                  <p className="text-white text-base font-semibold text-center leading-snug">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#FAF8F5] to-transparent" />
      </div>
    </>
  );
}
