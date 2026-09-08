"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    date: "Aug 2026",
    quote: "The brass compression fittings cut our installation time in half. Clean threading, zero burs, and held 100% tight under pressure test.",
    name: "Thomas B.",
    role: "Master Plumber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    date: "Aug 2026",
    quote: "We installed the 3/4\" ball valves across a radiant boiler system. Smooth quarter-turn action and solid forged brass construction.",
    name: "Gregory K.",
    role: "Hydronic Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "Replaced old flex lines with these stainless supply connectors. Solid brass nuts, flawless seal, and zero galvanic corrosion.",
    name: "Marcus V.",
    role: "Facility Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "Ordering contractor bundles saved our crew substantial budget compared to local supply house counter rates. Top quality.",
    name: "Darren P.",
    role: "Mechanical Contractor",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-neutral-bg" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-3 justify-center">Customer Reviews</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
            Trusted by <span className="text-secondary">Trade Professionals</span>
          </h2>
          <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mt-3">
            Real feedback from plumbers, technicians, and contractors using our hardware daily.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white border border-black/5 rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-sm">
                    <div className="flex justify-center gap-1 text-secondary mb-5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-text/80 font-medium max-w-xl mx-auto">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex flex-col items-center gap-2.5 mt-6 sm:mt-8">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-secondary/20 shadow-sm" />
                      <div>
                        <p className="text-sm font-bold text-primary">{t.name}</p>
                        <p className="text-[0.7rem] font-semibold text-neutral-text/50 uppercase tracking-wide">
                          {t.role} · {t.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-6 bg-secondary" : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
