"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote: "The Velvet Resonance capo holds pitch-perfect intonation even up on the 7th fret of my vintage Martin acoustic. Zero string buzz and zero retuning needed between songs.",
    author: "Sarah M.",
    role: "Session Guitarist & Songwriter",
    image: "/img/testimonial_1.jpg"
  },
  {
    quote: "EchoWave tracks pitch instantaneously even in noisy green rooms and backstage setups. The vibration sensor is razor sharp and the color screen is visible from any angle.",
    author: "David K.",
    role: "Touring Bassist & Multi-Instrumentalist",
    image: "/img/testimonial_2.jpg"
  },
  {
    quote: "The Velvet Tone studio cables solved our live tracking hum completely. High-grade OFC copper with rugged 24K gold jacks that withstand heavy studio stompboxes.",
    author: "Marcus T.",
    role: "Recording Studio Producer",
    image: "/img/testimonial_3.jpg"
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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <span className="eyebrow mb-3">Musician Feedback</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-3 tracking-tight">
              Trusted on <span className="text-secondary">Stage &amp; Studio</span>
            </h2>
            <p className="text-neutral-text/65 text-sm md:text-base">
              Real reviews from recording artists, touring players, and studio producers who rely on Velvet Echo hardware.
            </p>
          </div>

          {/* Aggregate rating badge */}
          <div className="flex items-center gap-4 bg-neutral-bg border border-black/5 px-6 py-4 rounded-2xl shadow-sm flex-shrink-0">
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-primary leading-none">4.9 / 5</span>
              <span className="text-xs font-bold text-neutral-text/50 uppercase tracking-wider mt-1">1,400+ Verified Musicians</span>
            </div>
          </div>
        </div>

        {/* Testimonial Feature Card */}
        <div className="w-full max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-10 shadow-2xl relative min-h-[440px] md:h-[420px] overflow-hidden border border-white/10">
          
          {/* Left Column (Image & Author) */}
          <div className="w-full md:w-5/12 flex flex-col flex-shrink-0">
            <div className="w-full h-48 sm:h-56 md:h-0 md:flex-1 rounded-2xl overflow-hidden mb-4 md:mb-5 shadow-lg bg-black/20 border border-white/10">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].author}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div>
              <h4 className="text-secondary font-black text-lg md:text-xl mb-0.5">
                {testimonials[activeIndex].author}
              </h4>
              <span className="text-white/60 text-xs md:text-sm font-medium">
                {testimonials[activeIndex].role}
              </span>
            </div>
          </div>

          {/* Right Column (Quote & Controls) */}
          <div className="w-full md:w-7/12 flex flex-col relative min-h-0">
            
            {/* Stars */}
            <div className="flex gap-1 text-secondary mb-4 md:mb-6 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium flex-1 flex items-center min-h-0 overflow-hidden italic">
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
                      idx === activeIndex ? "w-8 bg-secondary" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2 md:gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors border border-white/10"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors border border-white/10"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
