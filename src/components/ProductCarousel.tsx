"use client";

import React, { useEffect, useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  // Auto-advance through the gallery
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex gap-4 lg:sticky top-[120px]">
      {/* Vertical thumbnail strip */}
      {images.length > 1 && (
        <div className="flex flex-col gap-3">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 bg-white cursor-pointer transition-colors ${
                activeIndex === idx ? "border-secondary" : "border-black/10 opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="relative flex-1 aspect-square bg-white rounded-xl overflow-hidden flex items-center justify-center">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`${name} - image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-primary-text text-primary w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-primary-text text-primary w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
