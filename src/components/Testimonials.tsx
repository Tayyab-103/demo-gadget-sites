"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    date: "Sep 2026",
    quote: "The Solenne pearl has such a soft glow in person. It sits right at my collarbone and I've worn it every day since it arrived. The keepsake box was a lovely touch.",
    name: "Hannah W.",
    product: "Solenne Pearl Drop Necklace",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    date: "Sep 2026",
    quote: "The sunburst dial on the Halden watch catches the light beautifully. It's light on the wrist and the woven strap has gotten more comfortable every week.",
    name: "Jason P.",
    product: "Halden Sunburst Dial Watch",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "Aug 2026",
    quote: "Lumière is the quietest clock we've ever owned. Not a single tick, and the walnut and brass look warm and elegant above our console table.",
    name: "Olivia M.",
    product: "Lumière Walnut & Brass Wall Clock",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    date: "Aug 2026",
    quote: "I ordered two Solenne necklaces with the bundle, one for me and one for my mom's birthday. Both arrived quickly and looked like they came from a boutique.",
    name: "Aisha R.",
    product: "Solenne Pearl Drop Necklace",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "Bought the Halden as an anniversary gift for my husband. The gold-tone case looks much more expensive than it was, and he wears it to work daily.",
    name: "Rebecca T.",
    product: "Halden Sunburst Dial Watch",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "Clean, simple and exactly as pictured. The Lumière clock was easy to hang and the brass hands match the rest of the hardware in my office perfectly.",
    name: "Michael D.",
    product: "Lumière Walnut & Brass Wall Clock",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const count = isMobile ? 1 : 3;
  const visible = testimonials.slice(index, index + count);

  const goPrev = () => {
    setIndex((prev) => (prev - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prev - 3));
  };

  const goNext = () => {
    setIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24" id="testimonials">
      <div className="dot-grid pointer-events-none absolute -right-8 top-12 h-44 w-44 opacity-70" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-xl">
            <span className="eyebrow mb-5 justify-center md:justify-start">Customer Love</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Reviews That <span className="marker">Shine</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-text/60 md:text-base">
              Real words from shoppers who wear, gift and live with our pieces every day.
            </p>
          </div>

          {/* Prev / Next controls (desktop only) */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-ink/10 bg-white text-ink transition-all hover:border-primary hover:bg-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonials"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-text transition-all hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <figure
              key={t.name}
              className={`relative flex flex-col rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
                i === 1 && !isMobile
                  ? "border-primary bg-primary text-primary-text shadow-lg shadow-primary/25"
                  : "border-black/5 bg-white hover:border-primary/40"
              }`}
            >
              <span
                className={`absolute right-7 top-4 font-serif text-7xl leading-none ${
                  i === 1 && !isMobile ? "text-white/70" : "text-primary"
                }`}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className={`flex gap-0.5 ${i === 1 && !isMobile ? "text-ink" : "text-primary"}`}>
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>

              <blockquote className={`mt-5 flex-1 text-sm leading-relaxed md:text-[0.95rem] ${i === 1 && !isMobile ? "text-ink/85" : "text-neutral-text/70"}`}>
                {t.quote}
              </blockquote>

              <figcaption className={`mt-7 flex items-center gap-4 border-t pt-5 ${i === 1 && !isMobile ? "border-ink/15" : "border-black/5"}`}>
                <img src={t.image} alt={t.name} className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-white" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className={`truncate text-[0.68rem] font-semibold uppercase tracking-wide ${i === 1 && !isMobile ? "text-ink/60" : "text-neutral-text/45"}`}>
                    {t.product} &middot; {t.date}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Dots (mobile only) */}
        <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2.5 bg-ink/15 hover:bg-ink/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
