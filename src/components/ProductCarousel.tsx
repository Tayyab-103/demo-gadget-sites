"use client";

import React, { useState } from "react";

export default function ProductCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length <= 1) {
    const singleImg = images && images.length === 1 ? images[0] : "/img/gallery1.jpg";
    return (
      <div className="lg:sticky top-[120px]">
        <div className="relative bg-[#FAFAFA] shadow-xl rounded-3xl overflow-hidden h-[380px] md:h-[480px] flex items-center justify-center border border-rose-100">
          <img
            src={singleImg}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:sticky top-[120px] w-full">
      {/* Accordion expanding gallery layout */}
      <div className="flex items-center gap-2 md:gap-3 h-[380px] md:h-[480px] w-full mx-auto">
        {images.map((img, idx) => {
          const isSelected = activeIndex === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative group flex-grow transition-all duration-500 ease-out rounded-2xl overflow-hidden h-[380px] md:h-[480px] cursor-pointer shadow-lg border border-rose-100 hover:w-full ${
                isSelected ? "w-full flex-grow-[3]" : "w-24 md:w-32 flex-grow-[1]"
              }`}
            >
              <img
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src={img}
                alt={`${name} - view ${idx + 1}`}
                onError={(e) => {
                  e.currentTarget.src = "/img/gallery1.jpg";
                }}
              />

              {/* Angle Tag on hover / active */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
                <span className="text-white text-[0.72rem] font-black uppercase tracking-wider bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  View {idx + 1}
                </span>
                <span className="text-[#4C0519] text-[0.65rem] font-black uppercase tracking-widest bg-white/95 px-2.5 py-1 rounded-full shadow-sm">
                  {idx === 0 ? "Main Angle" : `Detail ${idx}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicator Pill Bar */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Select angle ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "w-8 bg-[#D2446D] shadow-sm"
                : "w-2.5 bg-rose-200 hover:bg-rose-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
