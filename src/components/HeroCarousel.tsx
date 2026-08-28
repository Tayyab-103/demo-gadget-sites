"use client";

import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1600&q=80",
    alt: "Hikers ascending a steep mountain ridge under clear blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1600&q=80",
    alt: "Trail runner running along an alpine path at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80",
    alt: "Cyclist descending a dynamic mountain curves path",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    alt: "Stunning snow-capped alpine peaks at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80",
    alt: "Backpacker camping in the wilderness overlooking a lake",
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
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-6">
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
