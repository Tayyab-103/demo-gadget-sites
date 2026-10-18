"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky top-[140px]">
      <div className="relative bg-surface rounded-3xl overflow-hidden aspect-square">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`${name} - image ${idx + 1}`}
            fill
            priority={idx === 0}
            sizes="(max-width: 1024px) 100vw, 640px"
            className={`object-cover transition-opacity duration-500 ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-bg/90 hover:bg-primary hover:text-primary-text text-neutral-text w-11 h-11 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-bg/90 hover:bg-primary hover:text-primary-text text-neutral-text w-11 h-11 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <span className="absolute bottom-4 right-4 bg-neutral-bg/90 text-neutral-text text-[0.65rem] font-bold tracking-[0.14em] px-3 py-1.5 rounded-full">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3 mt-4">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                activeIndex === idx ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill sizes="160px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
