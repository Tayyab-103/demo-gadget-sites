"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const bgImages = [
  "https://images.unsplash.com/photo-1519457851758-fa14f0ee13b1?w=1800&q=80",
  "https://images.unsplash.com/photo-1543168256-418811576931?w=1800&q=80",
  "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=1800&q=80",
  "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=1800&q=80",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden md:min-h-[80vh]">
      {/* Background image carousel */}
      {bgImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight mb-6">
            Clothes made to <span className="text-secondary">Grow Up In</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            Soft, durable everyday wear for the whole family, matched across sizes and built to survive school runs, playgrounds, and everything after.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-secondary-text text-sm md:text-base bg-secondary hover:brightness-105 transition-all duration-300 py-4 px-10 rounded-full shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:scale-[1.02]"
            >
              Shop The Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel indicator dots */}
      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 md:flex lg:right-10">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeImage ? "w-6 bg-secondary" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Show background image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-secondary z-10" />
    </section>
  );
}
