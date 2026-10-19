"use client";

import React, { useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/95 text-ink border border-line shadow-md flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-text hover:border-primary transition-colors";

  return (
    <div className="lg:sticky top-[120px]">
      <div className="relative rounded-3xl overflow-hidden bg-neutral-bg aspect-square">
        <img src={images[activeIndex]} alt={`${name} - image ${activeIndex + 1}`} className="w-full h-full object-cover" />

        {images.length > 1 && (
          <>
            <button onClick={showPrev} aria-label="Previous image" className={`${arrowClass} left-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button onClick={showNext} aria-label="Next image" className={`${arrowClass} right-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-surface/95 px-3 py-1 text-xs font-semibold text-ink">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all bg-neutral-bg ${
                activeIndex === idx ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"
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
