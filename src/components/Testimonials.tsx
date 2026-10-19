"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    date: "Jul 2026",
    quote: "The Expedition Hardside Spinner glides effortlessly through train stations and cracked pavements. The whisper wheels are genuinely silent and the shell took multiple baggage tosses without a single crack.",
    name: "Sarah M.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "The Weekender Duffel is hands-down the best travel bag I've owned. The dedicated shoe pocket keeps everything clean, and sliding it over my suitcase handle makes terminal sprints completely seamless.",
    name: "David K.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "The compression packing cubes allowed me to pack 10 days of outfits into a single carry-on suitcase. The double compression zippers are rock solid and save an unbelievable amount of luggage room.",
    name: "Elena R.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "Ordered 2 sets of packing cubes and the spinner luggage for our family trip. Kept everyone's clothes perfectly sorted and saved us from checked bag fees. Exceptional travel gear from Journey Trail!",
    name: "Priya N.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "Took the Journey Trail luggage set on a 3-week tour across rugged routes and metropolitan hotels. The zippers, handles, and wheels performed flawlessly throughout every single leg.",
    name: "Marcus T.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "The weekender duffel looks even better in person than online. The waxed canvas has that rugged outdoor heritage feel while keeping all my gear bone-dry during an unexpected rainstorm.",
    name: "Grace L.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
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
          Loved by <span className="text-secondary">15k+ Travelers</span>
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
