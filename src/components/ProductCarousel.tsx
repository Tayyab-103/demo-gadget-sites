"use client";

import React, { useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky top-[100px]">
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="relative bg-[#23252B] shadow-xl overflow-hidden h-[340px] sm:h-[420px] md:h-[460px] flex items-center justify-center">
          <img
            src={images[activeIndex]}
            alt={`${name} - image ${activeIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#E5F2C9] hover:text-[#0E0F11] text-white w-10 h-10 rounded-full border border-white/15 flex items-center justify-center cursor-pointer transition-all shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#E5F2C9] hover:text-[#0E0F11] text-white w-10 h-10 rounded-full border border-white/15 flex items-center justify-center cursor-pointer transition-all shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-all bg-[#1A1C20] ${
                activeIndex === idx ? "border-[#E5F2C9] shadow-md" : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
