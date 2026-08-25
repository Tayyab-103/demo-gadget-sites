"use client";

import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80",
    alt: "Cozy modern living room with warm wood tones, natural lighting, and elegant furnishings",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
    alt: "Warm wooden dining space with natural fabrics, rattan textures, and low hanging lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?w=1600&q=80",
    alt: "Elegant modern bedroom featuring organic cotton textiles and minimalist warm styling",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    alt: "Aesthetic living corner with a cozy textured chair, wooden accents, and warm ambient light",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80",
    alt: "Bright, minimalist living space featuring curved furnishings and natural elements",
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
