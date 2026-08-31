"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "2021 Ford F-150 Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    quote: "These slotted rotors and heavy-duty filters are exactly what I needed. The pedal feel is remarkably firm and there is zero brake fade even when towing through steep hills.",
    stars: 5,
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "2020 BMW 330i xDrive Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    quote: "The filtration quality is top-notch — dense, heavy pleats that blow cheap retail filters out of the water. Fast shipping and my engine runs noticeably quieter.",
    stars: 5,
  },
  {
    id: 3,
    name: "David Kowalski",
    role: "2019 Chevy Silverado Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    quote: "Installed the high-output alternator in under 30 minutes. Voltage stays pinned at 14.4V with my winch and auxiliary light bars running simultaneously. True heavy-duty quality.",
    stars: 5,
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "2022 Toyota Tacoma TRD Owner",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
    quote: "Customer support verified my exact vehicle fitment within minutes. The parts arrived in 3 days with perfect packaging. Truly a 5-star direct replacement experience.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 150);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsFading(false);
    }, 150);
  };

  const handleSelect = (idx: number) => {
    if (idx === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsFading(false);
    }, 150);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#f8f9fa] to-[#eceef1] border-b border-gray-200 relative overflow-hidden" id="reviews">
      {/* Background Soft Glow Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ────────────────── SECTION HEADER ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-gray-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              CUSTOMER TESTIMONIALS
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-xs self-start sm:self-auto">
            <span className="text-red-600 text-sm">★★★★★</span>
            <span>4.9 / 5.0 (1,450+ Verified Ratings)</span>
          </div>
        </div>

        {/* ────────────────── CENTERED CARD CONTAINER (Matching Screenshot 2) ────────────────── */}
        <div className="relative max-w-lg sm:max-w-xl mx-auto">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-0 -translate-x-4 sm:-translate-x-14 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg text-gray-700 hover:text-red-600 hover:border-red-500 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-0 translate-x-4 sm:translate-x-14 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg text-gray-700 hover:text-red-600 hover:border-red-500 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* ── CARD ELEMENT ── */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden relative">
            {/* Frosted / Tinted Glass Top Banner */}
            <div className="h-28 sm:h-32 bg-gradient-to-b from-gray-200/90 via-gray-100/60 to-gray-50/20 relative">
              {/* Circular Avatar Overlapping the seam */}
              <div className="absolute left-1/2 -bottom-12 sm:-bottom-14 -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-900 z-20">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className={`w-full h-full object-cover transition-opacity duration-200 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
            </div>

            {/* Card Body Content */}
            <div className="pt-16 sm:pt-18 pb-8 px-6 sm:px-10 flex flex-col items-center text-center">
              {/* Double Quotes Icon (Matching screenshot 2) */}
              <div className="text-gray-900 mb-3 select-none flex justify-center">
                <svg
                  className="w-7 h-7 text-gray-900 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Review Quote Text */}
              <div className="min-h-[90px] sm:min-h-[100px] flex items-center justify-center">
                <p
                  className={`text-sm sm:text-base text-gray-700 leading-relaxed font-medium transition-opacity duration-200 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author & Vehicle Role */}
              <div className="mt-4 mb-6">
                <h4
                  className={`text-sm sm:text-base font-bold text-gray-900 transition-opacity duration-200 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {activeTestimonial.name} <span className="text-gray-400 font-normal">/</span> <span className="text-gray-600 font-medium text-xs sm:text-sm">{activeTestimonial.role}</span>
                </h4>
              </div>

              {/* Pagination Dots (Matching screenshot 2) */}
              <div className="flex items-center justify-center gap-2.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "bg-gray-900 scale-125 ring-2 ring-gray-900/30"
                        : "bg-transparent border border-gray-400 hover:border-gray-900"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
