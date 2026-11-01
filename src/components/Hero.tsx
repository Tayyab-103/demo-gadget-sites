"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

/* ─────────────────────────────────────────────────────────
   Slide data — all images are luggage / travel-accessories
───────────────────────────────────────────────────────── */
const slides = [
  {
    eyebrow: "2026 Expedition Collection",
    headline: "Your journey,\nperfectly packed.",
    sub: "Precision-engineered hardside spinners and travel accessories built for explorers who demand more.",
    /* Hardside suitcase / airport terminal scene */
    bg: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85",
    bgAlt: "Hardside spinner suitcase in a hotel corridor",
  },
  {
    eyebrow: "All-Weather Series",
    headline: "Every terrain,\nevery season.",
    sub: "Weather-resistant waxed canvas and aerospace polycarbonate shells built for the unexpected.",
    /* Road-trip / outdoor travel bag scene */
    bg: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1600&q=85",
    bgAlt: "Travel bags on a scenic road trip route",
  },
  {
    eyebrow: "Smart Organization",
    headline: "Pack smarter,\ntravel lighter.",
    sub: "Compression packing cubes and modular accessories — master any itinerary without the chaos.",
    /* Open suitcase with organised clothing / packing flat-lay */
    bg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=85",
    bgAlt: "Neatly organised open suitcase with clothing and packing cubes",
  },
];

/* ─── Chevron icons ─── */
function ChevLeft() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   Animation keyframes — injected once via <style>
═══════════════════════════════════════════════ */
const ANIM_CSS = `
  @keyframes hero-img-in {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1);    }
  }
  @keyframes hero-text-in {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .hero-img-anim  { animation: hero-img-in  0.65s cubic-bezier(0.22,1,0.36,1) both; }
  .hero-text-anim { animation: hero-text-in 0.55s cubic-bezier(0.22,1,0.36,1) both; }
`;

export default function Hero() {
  const [active, setActive] = useState(0);
  /* imgKey forces the <img> to remount → re-triggers the CSS animation */
  const [imgKey, setImgKey] = useState(0);
  const [txtKey, setTxtKey] = useState(0);
  const total = slides.length;
  const slide = slides[active];

  /* Shared direction change handler */
  const go = useCallback((idx: number) => {
    setActive(idx);
    setImgKey((k) => k + 1);
    setTxtKey((k) => k + 1);
  }, []);

  const prev = useCallback(() => go((active - 1 + total) % total), [active, go, total]);
  const next = useCallback(() => go((active + 1) % total), [active, go, total]);

  /* Auto-advance every 6 s */
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
      setImgKey((k) => k + 1);
      setTxtKey((k) => k + 1);
    }, 6000);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#FAF8F4", minHeight: "min(88vh, 860px)" }}
    >
      {/* ── Inject keyframe CSS once ── */}
      <style>{ANIM_CSS}</style>

      {/* ════════════════════════════════════════════
          BACKGROUND IMAGE — crossfade on slide change
      ════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 sm:left-[38%]"
        aria-hidden="true"
      >
        <img
          key={imgKey}               /* remount → re-triggers animation */
          src={slide.bg}
          alt={slide.bgAlt}
          className="hero-img-anim w-full h-full object-cover object-center"
        />

        {/* Left cream fade (desktop only) */}
        <div
          className="absolute inset-y-0 left-0 w-32 md:w-52 hidden sm:block pointer-events-none"
          style={{ background: "linear-gradient(to right, #FAF8F4 0%, transparent 100%)" }}
        />
        {/* Bottom dark vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(15,36,29,0.38) 0%, transparent 100%)" }}
        />
        {/* Mobile dim overlay */}
        <div
          className="absolute inset-0 sm:hidden pointer-events-none"
          style={{ background: "rgba(250,248,244,0.8)" }}
        />
      </div>

      {/* ════════════════════════════════════════════
          CONTENT ROW
      ════════════════════════════════════════════ */}
      <div className="relative z-10 flex items-center min-h-[min(88vh,860px)]">

        {/* ── LEFT: Text panel ── */}
        <div
          key={txtKey}               /* remount → re-triggers slide-up animation */
          className="hero-text-anim w-full sm:w-[50%] md:w-[45%] lg:w-[42%] flex flex-col justify-center
                     px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 lg:py-28"
        >
          {/* Eyebrow */}
          <span
            className="block text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: "var(--secondary-color)" }}
          >
            {slide.eyebrow}
          </span>

          {/* Headline — Playfair Display serif */}
          <h1
            className="leading-[1.1] font-bold"
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              color: "#141F1A",
              whiteSpace: "pre-line",
            }}
          >
            {slide.headline}
          </h1>

          {/* Thin amber rule */}
          <div
            className="mt-6 mb-6 w-10 h-px flex-shrink-0"
            style={{ background: "var(--secondary-color)" }}
          />

          {/* Sub-text */}
          <p
            className="text-xs sm:text-sm leading-relaxed"
            style={{ color: "rgba(20,31,26,0.55)", maxWidth: "22rem" }}
          >
            {slide.sub}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#shop"
              className="inline-flex items-center justify-center px-6 py-3 text-[0.7rem] font-bold
                         uppercase tracking-widest text-white hover:opacity-85 transition-opacity duration-200"
              style={{ background: "#141F1A", borderRadius: "3px" }}
            >
              Shop Now
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center px-6 py-3 text-[0.7rem] font-bold
                         uppercase tracking-widest hover:bg-black/5 transition-colors duration-200"
              style={{
                color: "#141F1A",
                border: "1.5px solid rgba(20,31,26,0.22)",
                borderRadius: "3px",
              }}
            >
              Explore Collection
            </Link>
          </div>

          {/* ── Slide counter ── */}
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex items-center gap-1 text-[0.7rem] font-semibold cursor-pointer
                         hover:opacity-50 transition-opacity"
              style={{ color: "#141F1A", background: "none", border: "none", padding: 0 }}
            >
              <ChevLeft /> Prev
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { go(i); resetTimer(); }}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === active ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: i === active ? "#141F1A" : "rgba(20,31,26,0.2)",
                    border: "none",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <span
              className="font-bold leading-none"
              style={{ color: "#141F1A" }}
            >
              <span style={{ fontSize: "1.25rem", letterSpacing: "-0.04em" }}>
                0{active + 1}
              </span>
              <span style={{ fontSize: "0.68rem", fontWeight: 400, opacity: 0.38, marginLeft: "3px" }}>
                / 0{total}
              </span>
            </span>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="flex items-center gap-1 text-[0.7rem] font-semibold cursor-pointer
                         hover:opacity-50 transition-opacity"
              style={{ color: "#141F1A", background: "none", border: "none", padding: 0 }}
            >
              Next <ChevRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
