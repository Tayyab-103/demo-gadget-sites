"use client";

import React, { useState } from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "The botanical inks have incredible depth and zero bleeding. My calligraphy lines stay crisp and lightfast on heavy watercolor paper.",
    author: "Eleanor Vance",
    role: "Botanical Illustrator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
  },
  {
    quote: "The cold-pressed sketchbook lays completely flat when open. I take it everywhere for plein air watercolor work.",
    author: "Julian Thorne",
    role: "Fine Artist & Educator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    quote: "The sable detail brushes keep their razor-sharp point even after months of intense detailing work.",
    author: "Clara Sterling",
    role: "Master Miniaturist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
    handleNavigate(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % testimonials.length;
    handleNavigate(nextIdx);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 12%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Creator Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Customer <span className="text-secondary">Reviews</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Read how painters, crafters, and art studios create with our supplies.
          </p>
        </div>

        {/* Testimonial Feature Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-primary-tint rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
          
          {/* Left Column: Quote & Artist Info */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[260px]">
            <div>
              <blockquote
                className={`text-xl sm:text-2xl md:text-3xl font-black text-primary uppercase leading-snug tracking-tight transition-opacity duration-400 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              <div>
                <div className="text-base font-black text-primary uppercase tracking-tight">
                  {current.author}
                </div>
                <div className="text-xs font-bold text-black/50 uppercase tracking-wider mt-0.5">
                  {current.role}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Previous Testimonial"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Next Testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Photograph */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full max-w-[380px] mx-auto overflow-hidden rounded-2xl bg-black/5 shadow-md">
              {testimonials.map((item, idx) => (
                <div
                  key={item.author}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`${item.author} - ${item.role}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
