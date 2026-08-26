"use client";

import React, { useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky top-[120px]">
      <div className="offset-frame rounded-4xl">
        <div className="relative bg-[#FAF9F6] shadow-md rounded-3xl overflow-hidden h-[340px] md:h-[460px] flex items-center justify-center border border-black/5">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#265C1E] hover:text-white text-[#11281A] w-9 h-9 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#265C1E] hover:text-white text-[#11281A] w-9 h-9 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-5">
          {images.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-all bg-neutral-100 ${
                activeIndex === idx ? "border-[#265C1E] shadow-sm scale-105" : "border-black/10 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
