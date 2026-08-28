"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    date: "Aug 2026",
    quote: "The Northcrest Apex-Pro vest completely transformed our conditioning blocks. The weight bricks sit perfectly flush against the chest with zero bounce during 400m sprint intervals.",
    name: "Marcus R.",
    role: "Head Strength & Conditioning Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    date: "Aug 2026",
    quote: "The Hydro-Shield duffle is impenetrable. Rainstorms, sweaty track spikes, and hydration bottles all stay organized without moisture leaking into my change of clothes.",
    name: "Elena V.",
    role: "Ultra-Endurance Triathlete",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "The Flow-Recovery therapy gun delivers deep 14mm myofascial release on my calves and lower back. Whisper-quiet and charges fast for all-day gym use.",
    name: "David K.",
    role: "Competitive CrossFit Athlete & Gym Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "Ordering multi-packs of the weighted vests and equipment duffles gave our track squad top-tier pro conditioning gear at a fraction of major brand markups.",
    name: "Sarah T.",
    role: "Track & Field Director",
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
  }, [isPaused, testimonials.length]);

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-neutral-bg" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-3 justify-center">Field Tested By Pros</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary">
            Trusted By <span className="text-secondary">Dedicated Athletes</span>
          </h2>
          <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mt-3">
            Coaches, competitors, marathoners, and conditioning specialists rely on Northcrest hardware daily.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white border border-black/5 rounded-3xl p-7 sm:p-10 md:p-12 text-center shadow-sm">
                    <div className="flex justify-center gap-1 text-amber-500 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>

                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-text/85 font-medium max-w-2xl mx-auto italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex flex-col items-center gap-3 mt-8">
                      <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-secondary shadow-md" />
                      <div>
                        <p className="text-base font-black text-primary uppercase tracking-tight">{t.name}</p>
                        <p className="text-[0.72rem] font-bold text-neutral-text/55 uppercase tracking-wider">
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
                  i === index ? "w-8 bg-secondary" : "w-2 bg-primary/20 hover:bg-primary/40"
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
