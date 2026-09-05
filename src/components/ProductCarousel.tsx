"use client";

import React, { useState } from "react";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky top-[120px]">
      <div className="relative bg-[#FAF8F5] shadow-xl rounded-3xl overflow-hidden h-[360px] md:h-[480px] flex items-center justify-center border border-[#C5A059]/30 p-6 sm:p-8">
        <img
          src={images[activeIndex]}
          alt={`${name} - image ${activeIndex + 1}`}
          className="w-full h-full object-contain filter drop-shadow-md transition-all duration-300"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80";
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FAF8F5]/90 backdrop-blur-md hover:bg-[#C5A059] hover:text-[#121820] text-[#121820] w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all border border-[#C5A059]/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FAF8F5]/90 backdrop-blur-md hover:bg-[#C5A059] hover:text-[#121820] text-[#121820] w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all border border-[#C5A059]/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-6">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`w-18 h-18 md:w-22 md:h-22 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 shadow-sm bg-[#FAF8F5] p-1.5 flex items-center justify-center ${
                activeIndex === idx ? "border-[#C5A059] ring-2 ring-[#C5A059]/30 scale-105" : "border-[#C5A059]/20 opacity-70 hover:opacity-100"
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
