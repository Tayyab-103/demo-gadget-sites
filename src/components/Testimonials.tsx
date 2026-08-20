"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote: "The TurboGrip bands replaced half my home gym. I've been using them for three weeks and my mobility work has never been more consistent — great tension, no snapping.",
    author: "Sarah M.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  },
  {
    quote: "PulseFit tracks my heart rate accurately through every interval session and the battery genuinely lasts the full 10 days. It's a game-changer for staying on top of training load.",
    author: "David K.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
  },
  {
    quote: "PowerCore cut my post-leg-day soreness in half. Quiet motor, solid battery, and the attachments actually make a difference. I'll definitely keep ordering.",
    author: "Elena R.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-16 bg-neutral-bg relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <span className="eyebrow mb-4">Customer Love</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
              Loved by Our <span className="text-secondary">Community</span>
            </h2>
            <p className="text-neutral-text/60 text-sm md:text-base">
              Real reviews from real athletes who have made our gear part of their daily training routine.
            </p>
          </div>

          {/* Aggregate rating badge */}
          <div className="flex items-center gap-4 bg-white border border-black/5 px-6 py-4 rounded-2xl shadow-sm flex-shrink-0">
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-primary leading-none">4.9/5</span>
              <span className="text-[0.65rem] font-bold text-neutral-text/40 uppercase tracking-widest mt-1">1,200+ Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Feature Card — fixed height on desktop, auto on mobile */}
        <div className="w-full max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 shadow-2xl relative md:h-[420px] overflow-hidden">
          
          {/* Left Column (Image & Author) */}
          <div className="w-full md:w-5/12 flex flex-col flex-shrink-0">
            <div className="w-full h-48 sm:h-56 md:h-0 md:flex-1 rounded-2xl overflow-hidden mb-4 md:mb-5 shadow-lg bg-black/10">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].author}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div>
              <h4 className="text-secondary font-bold text-lg md:text-xl mb-0.5">
                {testimonials[activeIndex].author}
              </h4>
              <span className="text-white/60 text-xs md:text-sm">
                {testimonials[activeIndex].role}
              </span>
            </div>
          </div>

          {/* Right Column (Quote & Controls) */}
          <div className="w-full md:w-7/12 flex flex-col relative min-h-0">
            
            {/* Stars */}
            <div className="flex gap-1 text-secondary mb-4 md:mb-6 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>

            {/* Quote — auto-sizes text to fit */}
            <p className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed font-medium flex-1 flex items-center min-h-0 overflow-hidden">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between mt-6 md:mt-auto pt-5 border-t border-white/10 flex-shrink-0">
              
              {/* Progress Bar / Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2 md:gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors border border-white/10"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors border border-white/10"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
