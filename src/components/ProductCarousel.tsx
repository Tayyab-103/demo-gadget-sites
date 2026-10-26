"use client";

import React, { useState } from "react";
import { fallbackImage } from "@/lib/brandIcon";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="md:sticky md:top-32">
      <div className="relative bg-mist rounded-[1.1rem] overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={images[activeIndex]}
          alt={`${name} - image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-secondary hover:text-secondary-text text-primary w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-secondary hover:text-secondary-text text-primary w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-18 h-18 md:w-22 md:h-22 rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-200 shadow-sm ${
                activeIndex === idx ? "border-primary ring-2 ring-secondary" : "border-transparent opacity-60 hover:opacity-100"
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
