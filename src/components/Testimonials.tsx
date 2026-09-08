"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    date: "Jul 2026",
    quote: "The Aurelia 18K Gold Solitaire Pendant is breathtaking in person. The diamond has incredible fire and the South Sea pearl luster draws compliments wherever I go. The velvet-lined presentation box made unboxing feel truly luxurious.",
    name: "Genevieve V.",
    role: "Verified Collector",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "The Sovereign Automatic Chronograph is horological perfection. The 28-jewel mechanical movement runs with remarkable precision, and the sapphire exhibition glass back reveals stunning finishing.",
    name: "Alexander M.",
    role: "Verified Horologist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "We set our formal anniversary table with the Grand Heritage Sterling Silverware and mantel clock. The heavyweight 925 silver has an unmistakable mirror shine that elevates every dinner party.",
    name: "Eleanor & James R.",
    role: "Verified Purchasers",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "Presented the Aurelia pendant to my wife for our 10th anniversary. The certificate of authenticity and craftsmanship exceeded our highest expectations.",
    name: "Julian B.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "I own several luxury timepieces, and The Sovereign easily rivals Swiss brands costing ten times more. Flawless dial symmetry and hand-stitched leather comfort.",
    name: "Marcus T.",
    role: "Verified Watch Connoisseur",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "The silent-sweep pendulum clock and hallmark sterling silverware arrived in impeccable condition via insured UPS transit. True heirloom quality.",
    name: "Victoria H.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
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
    }, 3500);
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
    <section className="py-12 md:py-16 bg-neutral-bg relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <span className="eyebrow mb-4 justify-center md:justify-start">Customer Love</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-primary tracking-tight text-center md:text-left">
          Loved by <span className="text-secondary">15k+ Customers</span>
        </h2>
        <p className="text-neutral-text/60 text-sm md:text-base mt-4 max-w-md text-center md:text-left mx-auto md:mx-0">
          Every review is proof of the quality and care we put into each piece we ship.
        </p>

        {/* Prev / Next controls (desktop only) */}
        <div className="hidden md:flex justify-end gap-2 mt-4">
          <button
            onClick={goPrev}
            aria-label="Previous testimonials"
            className="h-10 w-10 rounded-lg bg-white border border-black/10 flex items-center justify-center cursor-pointer hover:border-secondary hover:text-secondary transition-all text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonials"
            className="h-10 w-10 rounded-lg bg-white border border-black/10 flex items-center justify-center cursor-pointer hover:border-secondary hover:text-secondary transition-all text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-6">
          {visible.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-black/5 rounded-2xl p-6 space-y-6 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/25 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-0.5 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-neutral-text/40">{t.date}</p>
              </div>

              <p className="text-sm leading-relaxed text-neutral-text/70">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-13 h-13 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-primary">{t.name}</p>
                  <p className="text-xs font-semibold text-neutral-text/45 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots (mobile only) */}
        <div className="flex md:hidden items-center justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
