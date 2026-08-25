"use client";

import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=80",
    alt: "Traveler waiting at the airport gate with a suitcase, plane taking off",
  },
  {
    src: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=1600&q=80",
    alt: "Traveler wheeling two hardshell suitcases out the door",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
    alt: "View of an airplane wing above the clouds at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1600&q=80",
    alt: "Canal city skyline, a classic travel destination",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80",
    alt: "Hikers crossing a snowy mountain ridge",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Background image stack */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Show slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? "w-8 bg-secondary" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </>
  );
}
