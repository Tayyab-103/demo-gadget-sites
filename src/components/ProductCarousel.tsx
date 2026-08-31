"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductCarousel({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky top-24 flex flex-col gap-4">
      {/* Main High-Res Studio Showcase */}
      <div className="relative aspect-square sm:aspect-4/3 lg:aspect-square w-full rounded-[2.5rem] overflow-hidden bg-neutral-bg border border-black/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.06)] group">
        <Image
          src={images[activeIndex] || images[0]}
          alt={`${name} - angle ${activeIndex + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
          priority
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary shadow-sm border border-black/[0.04]">
            Studio Angle 0{activeIndex + 1}
          </span>
        </div>

        {/* Next / Prev Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={showPrev}
              aria-label="Previous angle"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary w-11 h-11 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 border border-black/[0.06]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={showNext}
              aria-label="Next angle"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary w-11 h-11 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 opacity-0 group-hover:opacity-100 border border-black/[0.06]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}

        {/* Bottom Guaranteed Badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-md text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 border border-white/10 shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
            100% Lab Tested
          </span>
        </div>
      </div>

      {/* Thumbnail Angle Dock */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View angle ${idx + 1}`}
              className={`relative aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                activeIndex === idx
                  ? "border-primary shadow-md scale-[1.02] ring-2 ring-secondary/40"
                  : "border-black/[0.06] opacity-70 hover:opacity-100 hover:border-black/20"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
