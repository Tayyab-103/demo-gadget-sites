"use client";

import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1600&q=80",
    alt: "Traveler wheeling durable spinner luggage along airport walkway",
  },
  {
    src: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1600&q=80",
    alt: "Premium travel luggage ready for departure in terminal",
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=80",
    alt: "Traveler waiting at departure gate with luggage watching aircraft takeoff",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80",
    alt: "Adventure traveler with luggage and gear overlooking scenic winding road",
  },
  {
    src: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=1600&q=80",
    alt: "Expedition hardside luggage set packed for travel journey",
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
