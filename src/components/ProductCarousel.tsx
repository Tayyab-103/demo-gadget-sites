"use client";

import React, { useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Image Container */}
      <div className="relative w-full aspect-square bg-[#fcfcfc] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100">
        <img
          src={images[activeIndex] || images[0]}
          alt={`${name} - preview ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/400x400?text=Hardware";
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              type="button"
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-emerald-600 hover:text-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors border border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              type="button"
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-emerald-600 hover:text-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors border border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2.5 mt-4 overflow-x-auto max-w-full pb-1">
          {images.map((img, idx) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all bg-white p-0.5 flex-shrink-0 ${
                activeIndex === idx ? "border-emerald-600 ring-2 ring-emerald-600/20" : "border-gray-200 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
