"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Brian Connolly",
    role: "Chief Electrical Inspector",
    company: "Midwest Power Facilities",
    image: "/images/avatar1.jpg",
    quote: "The true-RMS accuracy on commercial switchboards is remarkable. Calibration certificates were included in the box, and the silicone drop casing has survived multiple heavy site drops.",
    rating: 5,
  },
  {
    id: 2,
    name: "Devon Vance",
    role: "Master Industrial Electrician",
    company: "Apex Commercial Systems",
    image: "/images/avatar2.jpg",
    quote: "This is the best diagnostic upgrade we've made for our crew. The thermal clamp caught three phase-balance hotspot issues before they caused a costly plant outage.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Sterling",
    role: "Senior Grid Operations Engineer",
    company: "Sterling Power Co.",
    image: "/images/avatar3.jpg",
    quote: "We deployed Voltspire pure sine wave inverter modules across our regional communication relays. Clean harmonic wave output with zero RF interference on sensitive instruments.",
    rating: 5,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Hannah Bradley",
    role: "Instrumentation & Calibration Lead",
    company: "Northeast Utilities",
    image: "/images/avatar4.jpg",
    quote: "Exceptional build quality and certified compliance right out of the box. Delivery was swift, and the customer engineering support was very responsive with technical specs.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tyler Reynolds",
    role: "Substation Field Technician",
    company: "Reynolds High-Voltage Services",
    image: "/images/avatar5.jpg",
    quote: "By far the most reliable electrical testing gear in our inventory. The auto-ranging speed and backlit high-contrast display make dark cabinet work straightforward.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card (Marcus Sterling) active by default

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F0F4F8] relative overflow-hidden" id="testimonials">
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* =========================================================
            LARGE CURVED BACKDROP CANVAS (Matching Reference)
            ========================================================= */}
        <div className="relative bg-white rounded-[2rem] sm:rounded-[3.5rem] pt-10 sm:pt-16 lg:pt-20 pb-28 sm:pb-40 lg:pb-48 px-4 sm:px-8 lg:px-12 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-black/[0.03] overflow-hidden text-center">
          
          {/* Giant Faint Double Quotes Watermark on Left */}
          <div
            className="absolute top-6 left-6 sm:top-10 sm:left-12 text-[6rem] sm:text-[10rem] lg:text-[13rem] font-serif font-black text-black/[0.04] leading-none pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            “
          </div>

          {/* Heading + Accent Line (Matching Reference) */}
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-[#111] leading-tight">
              What our Clients say!
            </h2>
            
            {/* Elegant Accent Underline Bar */}
            <div className="flex items-center justify-center gap-1.5 mt-2.5 sm:mt-3.5 mb-2">
              <span className="w-12 sm:w-16 h-[3px] rounded-full bg-[#5B6BF0]" />
              <span className="w-2.5 h-[3px] rounded-full bg-[#5B6BF0]/50" />
            </div>

            <p className="text-xs sm:text-sm text-neutral-text/50 font-medium mt-2 sm:mt-3">
              Verified feedback from certified master electricians, facility directors, and electrical grid engineers.
            </p>
          </div>
        </div>

        {/* =========================================================
            OVERLAPPING FLOATING TESTIMONIAL CARDS (Matching Reference)
            ========================================================= */}
        <div className="-mt-24 sm:-mt-32 lg:-mt-36 relative z-20">
          
          {/* Desktop 5-Card Layout */}
          <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-5 items-end">
            {testimonials.map((item, idx) => {
              const isCenter = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative bg-white rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer border ${
                    isCenter
                      ? "shadow-[0_25px_60px_-10px_rgba(0,0,0,0.18)] border-black/10 -translate-y-4 ring-2 ring-[#5B6BF0]/20 z-30 min-h-[380px]"
                      : "shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-black/[0.04] opacity-85 hover:opacity-100 hover:-translate-y-1 min-h-[340px]"
                  }`}
                >
                  <div>
                    {/* Client Avatar Circle with Fallback */}
                    <div className="relative mx-auto w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md bg-[#F4F4F6]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/images/avatar2.jpg";
                        }}
                      />
                    </div>

                    {/* Author Name & Role */}
                    <div className="text-center mb-5">
                      <h4 className="text-sm font-bold text-[#111] tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[0.65rem] text-neutral-text/45 font-medium mt-0.5 line-clamp-1">
                        {item.role}
                      </p>
                    </div>

                    {/* Quote with Background Watermark */}
                    <div className="relative">
                      <div className="absolute -top-3 left-0 text-3xl font-serif text-black/10 select-none">
                        “
                      </div>
                      <p className="text-xs text-neutral-text/70 leading-relaxed font-normal relative z-10 pt-1">
                        {item.quote}
                      </p>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center justify-center gap-0.5 mt-5 pt-3 border-t border-black/5">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-[#F59E0B] text-xs">★</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet & Mobile Carousel View */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-[2rem] p-7 shadow-2xl border border-black/10 min-h-[340px] flex flex-col justify-between">
              <div>
                <div className="relative mx-auto w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md bg-[#F4F4F6]">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/avatar2.jpg";
                    }}
                  />
                </div>

                <div className="text-center mb-5">
                  <h4 className="text-base font-bold text-[#111]">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs text-neutral-text/50">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -top-4 left-0 text-4xl font-serif text-black/10 select-none">“</div>
                  <p className="text-sm text-neutral-text/70 leading-relaxed pt-2">
                    {testimonials[activeIndex].quote}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/5">
                <div className="flex gap-0.5 text-[#F59E0B] text-sm">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Mobile Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full bg-[#F5F5F5] hover:bg-[#111] hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full bg-[#F5F5F5] hover:bg-[#111] hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Pagination Dots */}
            <div className="flex items-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-[#5B6BF0]" : "w-2 bg-neutral-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
