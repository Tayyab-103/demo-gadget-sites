"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    date: "Jul 2026",
    quote: "The Voltrex 12/2 wire has been solid on every rough-in I've run it on. Consistent gauge, clean jacket, no surprises when the inspector checks the panel.",
    name: "Sarah M.",
    role: "Licensed Electrician",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "Ordered a dozen Ironclad breakers for a panel upgrade and every single one tripped exactly where it should in testing. Zero returns, which never happens with bulk orders.",
    name: "David K.",
    role: "General Contractor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "The LED work light survived a drop off the ladder onto concrete and still runs at full brightness. That alone paid for itself on week one.",
    name: "Elena R.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "Restocked the truck with Voltrex wire for a remodel job and the pricing beat my usual supplier by a wide margin. Sizing and gauge were exactly as listed.",
    name: "Priya N.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "I'm hard on breakers and the Ironclad has handled every overload test I've thrown at it without a single false trip. Great value for how solid it feels.",
    name: "Marcus T.",
    role: "Licensed Electrician",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "The work light's battery life is no joke — I was skeptical but it ran a full 10-hour shift without dimming. Genuinely useful for crawlspace and attic work.",
    name: "Grace L.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-neutral-bg relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4 justify-center">Customer Love</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary tracking-tight">
            Trusted by <span className="text-secondary">40k+ Pros & DIYers</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base mt-4">
            Every review is proof of the quality and testing we put into each part we ship.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-12 md:mt-16 max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-12 text-center shadow-sm">
                    <div className="flex justify-center gap-0.5 text-secondary mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>

                    <p className="text-base md:text-xl leading-relaxed text-neutral-text/75 font-medium max-w-xl mx-auto">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex flex-col items-center gap-3 mt-8">
                      <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-primary">{t.name}</p>
                        <p className="text-xs font-semibold text-neutral-text/45 uppercase tracking-wide">
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
          <div className="flex items-center justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-6 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
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
