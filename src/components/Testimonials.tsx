"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote: "The Cotton Relaxed Shirt is pure perfection. The tailoring is clean, the drape is effortless, and it looks just as chic paired with trousers as it does with denim.",
    author: "Sarah M.",
    role: "Verified Purchaser • New York, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  },
  {
    quote: "I ordered the Textured Turtleneck and the Spray Wrap Skirt for autumn events. The fabric is wonderfully soft against the skin, breathable, and flattering in all lighting.",
    author: "Elena R.",
    role: "Verified Purchaser • Austin, TX",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  },
  {
    quote: "Modern Meadow’s sizing was true to standard US measurements. Fast delivery, gorgeous packaging, and the linen maxi dress has become my go-to piece this season.",
    author: "Claire D.",
    role: "Verified Purchaser • Chicago, IL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
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
    <section className="py-16 md:py-24 bg-white border-b border-black/5" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <span className="category-subtitle">
              client <b>impressions</b>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mt-1">
              Loved by Our Community
            </h2>
            <p className="text-neutral-text/60 text-xs sm:text-sm mt-2">
              Authentic styling feedback from women who wear Modern Meadow ready-to-wear pieces every day.
            </p>
          </div>

          {/* Aggregate rating badge */}
          <div className="flex items-center gap-4 bg-[#FAF9F7] border border-black/5 px-6 py-4 rounded-2xl shadow-sm flex-shrink-0">
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <div>
              <span className="font-heading text-sm font-bold text-primary block leading-none">4.9 / 5.0</span>
              <span className="text-[0.65rem] text-neutral-text/50 uppercase tracking-widest mt-0.5 block">5,649+ Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#FAF9F7] rounded-3xl p-8 sm:p-12 lg:p-16 border border-black/5 relative shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-4xl sm:text-6xl text-secondary/30 font-serif leading-none block mb-2">&ldquo;</span>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-text/85 italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="font-heading text-base font-bold uppercase tracking-wider text-primary">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-xs text-neutral-text/50 font-medium">
                  {testimonials[activeIndex].role}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-black/15 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-black/15 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
