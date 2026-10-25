"use client";

import React, { useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky lg:top-[120px]">
      <div className="offset-frame rounded-4xl">
        <div className="relative bg-neutral-bg shadow-xl rounded-4xl overflow-hidden h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] flex items-center justify-center p-4 md:p-6">
          <img
            src={images[activeIndex]}
            alt={`${name} - image ${activeIndex + 1}`}
            className="w-full h-full object-contain transition-all duration-300"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-primary-text text-primary w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-primary-text text-primary w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm z-10"
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
        <div className="flex flex-wrap gap-3 mt-4 sm:mt-6">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-colors bg-neutral-bg flex items-center justify-center p-1.5 ${
                activeIndex === idx ? "border-secondary shadow-sm" : "border-black/10 opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
