"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TravelerReview {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
  alt: string;
}

const travelerReviews: TravelerReview[] = [
  {
    id: "01",
    quote: "The Aluminum Carry-On survived 40+ international flights without a flinch. The Hinomoto wheels glide effortlessly.",
    name: "Harrison T.",
    role: "Global Consultant",
    location: "London & New York",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
    alt: "Harrison T. frequent traveler with aluminum suitcase",
  },
  {
    id: "02",
    quote: "The Leather Duffle is the ultimate weekender. The shoe pocket and pass-through sleeve make travel seamless.",
    name: "Elena V.",
    role: "Photographer",
    location: "Zurich, Switzerland",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85",
    alt: "Elena V. traveler with leather weekender duffle",
  },
  {
    id: "03",
    quote: "The compression packing cubes doubled my carry-on space. Essential for efficient travel.",
    name: "David K.",
    role: "Tech Executive",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
    alt: "David K. traveling with packing organizers",
  },
  {
    id: "04",
    quote: "Aerospace aluminum alloy with full-grain leather accents. Outstanding build quality.",
    name: "Sophia L.",
    role: "Creative Director",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=85",
    alt: "Sophia L. airport travel lifestyle review",
  },
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
    }, 400);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + travelerReviews.length) % travelerReviews.length;
    handleNavigate(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % travelerReviews.length;
    handleNavigate(nextIdx);
  };

  const current = travelerReviews[currentIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0D1B2A] leading-tight uppercase">
            Reviews
          </h2>
          <p className="text-[#18222F]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-2.5 max-w-xl mx-auto font-normal">
            Hear directly from global travelers and frequent flyers who rely on Wanderloom.
          </p>
        </div>

        {/* Testimonial Feature Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C87D3B]/25 shadow-lg">
          
          {/* Left Column: Quote & Traveler Info */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[280px] sm:min-h-[300px]">
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[#C87D3B] mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
                <span className="text-xs font-bold text-[#0D1B2A]/70 ml-2 uppercase tracking-wider">5.0 Verified Flight Review</span>
              </div>

              <blockquote
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0D1B2A] leading-snug tracking-tight transition-opacity duration-400 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#C87D3B]/20 flex items-center justify-between">
              <div>
                <div className="text-base sm:text-lg font-extrabold text-[#0D1B2A]">
                  {current.name}
                </div>
                <div className="text-xs font-semibold text-[#C87D3B] tracking-wider mt-0.5 uppercase">
                  {current.role} · {current.location}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-[#F8F6F0] border border-[#C87D3B]/40 flex items-center justify-center text-[#0D1B2A] hover:bg-[#C87D3B] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Previous Testimonial"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#F8F6F0] border border-[#C87D3B]/40 flex items-center justify-center text-[#0D1B2A] hover:bg-[#C87D3B] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Next Testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Traveler Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-black/5 shadow-lg border border-[#C87D3B]/25">
              {travelerReviews.map((note, idx) => (
                <div
                  key={note.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={note.image}
                    alt={note.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center"
                    priority={idx === 0}
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
