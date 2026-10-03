"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote: "The Classic Literature Hardcover Anthology is magnificent. The Smyth-sewn binding opens completely flat, and the gold-foil cover is an heirloom work of art on my study bookshelf.",
    author: "Elena Rostova",
    role: "Professor of Comparative Literature",
    image: "/img/testimonial_1.jpg"
  },
  {
    quote: "Chapterhouse's artisan leather journal is the finest I have ever used. The unlined cotton paper holds fountain pen ink without any bleeding or feathering.",
    author: "David Vance",
    role: "Author & Historical Novelist",
    image: "/img/testimonial_2.jpg"
  },
  {
    quote: "The World History Anthology plates and typography are museum grade. Fast insured shipping and packaged with extraordinary care.",
    author: "Marcus Thorne",
    role: "Book Collector & Archivist",
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
    <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
              <span>📖 Reader Reviews</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#000000] mb-3 tracking-tight">
              Loved By <span className="text-[#D2446D]">Bibliophiles &amp; Collectors</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Real reviews from authors, book collectors, and passionate readers who curate their libraries with Chapterhouse editions.
            </p>
          </div>

          {/* Aggregate rating badge */}
          <div className="flex items-center gap-4 bg-[#FDFDFD] border border-rose-100 px-6 py-4 rounded-2xl shadow-sm flex-shrink-0">
            <div className="flex gap-1 text-[#D2446D]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-[#4C0519] leading-none">4.9 / 5</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">2,400+ Verified Readers</span>
            </div>
          </div>
        </div>

        {/* Testimonial Feature Card */}
        <div className="w-full max-w-5xl mx-auto bg-[#4C0519] rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-10 shadow-2xl relative min-h-[440px] md:h-[420px] overflow-hidden border border-[#D2446D]/30">
          
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
              <h4 className="text-[#D2446D] font-black text-lg md:text-xl mb-0.5">
                {testimonials[activeIndex].author}
              </h4>
              <span className="text-white/70 text-xs md:text-sm font-medium">
                {testimonials[activeIndex].role}
              </span>
            </div>
          </div>

          {/* Right Column (Quote & Controls) */}
          <div className="w-full md:w-7/12 flex flex-col relative min-h-0">
            
            {/* Stars */}
            <div className="flex gap-1 text-[#D2446D] mb-4 md:mb-6 flex-shrink-0">
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
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex ? "w-8 bg-[#D2446D]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2 md:gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-[#D2446D] transition-colors border border-white/10 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-[#D2446D] transition-colors border border-white/10 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
