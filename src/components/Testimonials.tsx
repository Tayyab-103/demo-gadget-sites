"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The TurboGrip bands replaced half my home gym. 5 days a week for 3 months — zero fraying, progressive tension, and the door anchor is rock solid.",
    author: "Sarah Jenkins",
    role: "CrossFit Coach",
    product: "TurboGrip Resistance Bands",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5,
    location: "Denver, CO",
  },
  {
    quote:
      "PulseFit tracks heart rate accurately during sprint intervals and the battery genuinely lasts over a week. Seamless real-time sync.",
    author: "David Kovacs",
    role: "Triathlete",
    product: "PulseFit Smart Fitness Tracker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 5,
    location: "Austin, TX",
  },
  {
    quote:
      "PowerCore knocked out my post-leg-day soreness in half the time. The brushless motor is whisper quiet even on top gear.",
    author: "Elena Rostova",
    role: "Physical Trainer",
    product: "PowerCore Percussion Massager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    rating: 5,
    location: "San Diego, CA",
  },
  {
    quote:
      "Ordered the bundle for our training squad. Everything arrived in 3 days in pristine condition. Best quality in the market.",
    author: "Marcus Vance",
    role: "Strength Coach",
    product: "TurboGrip Team Bundle",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 5,
    location: "Chicago, IL",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-xl">
            <span className="eyebrow mb-3">Feedback</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0B0E]">
              Athlete <span className="text-gradient-dark">Reviews</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-text/65">
              Direct reviews from coaches, athletes, and daily performers.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="flex items-center gap-3 bg-[#FAFAFA] border border-black/5 px-4 py-2 rounded-2xl shadow-sm self-start md:self-auto">
            <div className="flex text-[#0A0B0E] text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-black text-[#0A0B0E]">4.9 / 5</span>
              <span className="text-[0.62rem] font-bold text-neutral-text/50 uppercase">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Featured Review Card */}
        <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[#0A0B0E] text-white p-6 sm:p-10 shadow-xl border border-white/10 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Author Image & Info */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative h-20 w-20 sm:h-22 sm:w-22 rounded-2xl overflow-hidden mb-3 border-2 border-white/20 shadow-md">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-black text-white">{current.author}</h3>
              <p className="text-xs text-white/70 font-semibold">{current.role}</p>
              <p className="text-[0.68rem] text-white/40">{current.location}</p>
              <span className="mt-2 text-[0.62rem] bg-white/10 text-white/80 px-2.5 py-1 rounded-full">
                {current.product}
              </span>
            </div>

            {/* Right: Quote & Nav */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div className="flex text-amber-400 text-sm mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <blockquote className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed mb-6">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-white/40">
                  {activeIndex + 1} of {testimonials.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
