"use client";

import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80",
    alt: "Layered gold necklace with a crescent moon pendant",
  },
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80",
    alt: "Cultured pearl necklace in a presentation box",
  },
  {
    src: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=900&q=80",
    alt: "Two polished gold bands",
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80",
    alt: "Diamond halo ring on a black presentation cushion",
  },
  {
    src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=900&q=80",
    alt: "Ornate gold necklace and earring set",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-accent-light shadow-2xl shadow-primary/20">
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        />
      ))}

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-4 right-1/2 translate-x-1/2 sm:bottom-6 sm:right-8 sm:translate-x-0 flex gap-2 z-10">
        {images.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
