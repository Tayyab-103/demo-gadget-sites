"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky top-[120px]">
      <div className="relative bg-white shadow-2xl rounded-3xl overflow-hidden h-[380px] md:h-[500px] flex items-center justify-center border border-[#C59B7E]/30">
        <Image
          src={images[activeIndex] || "/img/fashion-hero.jpg"}
          alt={`${name} - image ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover transition-all duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#18121E]/80 backdrop-blur-md hover:bg-[#C59B7E] hover:text-[#18121E] text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all border border-[#C59B7E]/40 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#18121E]/80 backdrop-blur-md hover:bg-[#C59B7E] hover:text-[#18121E] text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all border border-[#C59B7E]/40 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              className={`relative w-18 h-18 md:w-22 md:h-22 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 shadow-sm ${
                activeIndex === idx ? "border-[#C59B7E] ring-2 ring-[#C59B7E]/40 scale-105" : "border-[#C59B7E]/20 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="88px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
