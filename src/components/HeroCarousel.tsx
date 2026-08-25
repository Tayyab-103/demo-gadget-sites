"use client";

import React, { useEffect, useState } from "react";

const images = [
  "/img/hero1.png",
  "/img/hero2.png",
  "/img/hero3.png",
  "/img/hero4.jpg",
  "/img/hero5.jpg",
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
    <div className="relative w-full h-[380px] md:h-[450px] rounded-3xl shadow-2xl overflow-hidden bg-neutral-bg">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Happy customer enjoying a healthy, active lifestyle"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        />
      ))}

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Show image ${idx + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? "w-6 h-2 bg-secondary" : "w-2 h-2 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
