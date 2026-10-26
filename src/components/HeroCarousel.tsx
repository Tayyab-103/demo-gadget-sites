"use client";

import React, { useCallback, useEffect, useState } from "react";

const slides = [
  { src: "/img/web/hero1.jpg", alt: "Drill bits organized in a wooden tray", tag: "Workshop", title: "Organized, ready, in reach" },
  { src: "/img/web/hero2.jpg", alt: "Socket and wrench set in a carry case", tag: "Mechanics", title: "Every size, every job" },
  { src: "/img/web/aboutus.jpg", alt: "Hand tools laid out on a wooden bench", tag: "Home repair", title: "The weekend-project kit" },
  { src: "/img/web/cta.jpg", alt: "Cordless drill on a weathered wooden deck", tag: "Power tools", title: "Built for real work" },
];

const INTERVAL = 5000;

// Parallelogram frame: slanted left and right edges
const clip = "polygon(16% 0, 100% 0, 84% 100%, 0 100%)";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  const current = slides[index];

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
      {/* Diagonal accent bars behind the frame */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 bg-white/15 border border-white/30" style={{ clipPath: clip }} aria-hidden="true" />
      <div className="absolute -left-6 top-10 bottom-10 w-24 bg-secondary-light/40 -skew-x-[18deg] blur-[1px]" aria-hidden="true" />

      {/* Slides */}
      <div className="relative aspect-[5/6] sm:aspect-[1/1] overflow-hidden shadow-2xl" style={{ clipPath: clip }}>
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
        {/* Diagonal light sweep */}
        <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[18deg] hero-sweep" key={index} />

        {/* Caption */}
        <div className="absolute bottom-6 sm:bottom-8 left-[12%] right-[22%] text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30 text-[0.6rem] font-bold uppercase tracking-[0.2em]">
            {current.tag}
          </span>
          <div className="mt-2 text-lg sm:text-2xl font-extrabold leading-tight">{current.title}</div>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-[6%] sm:right-[2%] rounded-2xl bg-white text-ink px-4 py-2.5 shadow-xl -skew-x-[12deg]">
        <div className="skew-x-[12deg] font-extrabold text-sm tabular-nums">
          <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-faint"> / {String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>

      </div>

      {/* Controls */}
      <div className="relative mt-6 flex items-center justify-between gap-4 pl-[4%] pr-[10%]">
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-2 -skew-x-[20deg] rounded-sm transition-all duration-500 cursor-pointer ${
                i === index ? "w-10 bg-white" : "w-4 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              onClick={() => go(dir)}
              aria-label={dir < 0 ? "Previous slide" : "Next slide"}
              className="w-11 h-11 -skew-x-[12deg] rounded-xl bg-white/15 border border-white/30 hover:bg-white hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="skew-x-[12deg]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={dir < 0 ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
