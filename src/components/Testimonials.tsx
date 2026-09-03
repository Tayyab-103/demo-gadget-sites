"use client";

import React from "react";
import Image from "next/image";

const stories = [
  {
    id: "story-1",
    tag: "LIVING ROOM SANCTUARY",
    title: "AUSTIN HILLSIDE RESIDENCE",
    quote: "The Alderwyn throw blanket transformed our living space. Impossibly soft with the exact warm, tactile aesthetic we needed.",
    author: "Camilla V.",
    location: "Austin, TX",
    image: "/img/brand/hero_interior.jpg",
  },
  {
    id: "story-2",
    tag: "ARCHITECTURAL AMBIENCE",
    title: "MODERN PENTHOUSE LOUNGE",
    quote: "The sculptural lamp radiates the most soothing ambient glow. Exquisite lighting that doubles as an architectural art piece.",
    author: "Marcus T.",
    location: "Dallas, TX",
    image: "/img/brand/how_step3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-primary text-white relative" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6">
          {/* White Oval Pill Badge with '04' */}
          <span className="bg-white text-primary font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl px-3.5 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
            04
          </span>

          {/* Heading */}
          <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-white leading-none break-words">
            CLIENT STORIES
          </h2>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-px bg-white/10 mb-6 sm:mb-10 md:mb-12" />

        {/* Asymmetrical 2-Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Case Study Card */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="relative w-full aspect-square overflow-hidden shadow-2xl border border-white/10 bg-black/20 mb-5 sm:mb-6">
              <Image
                src={stories[0].image}
                alt={stories[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <span className="text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#E2D9C8] mb-1">
              {stories[0].tag}
            </span>

            <h3 className="font-serif font-normal text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.04em] text-white mb-2 sm:mb-3 leading-tight">
              {stories[0].title}
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed italic max-w-lg">
              &ldquo;{stories[0].quote}&rdquo; &mdash; <span className="font-semibold not-italic text-white">{stories[0].author}, {stories[0].location}</span>
            </p>
          </div>

          {/* Right Case Study Card */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pt-12">
            <div className="relative w-full aspect-16/11 overflow-hidden shadow-2xl border border-white/10 bg-black/20 mb-5 sm:mb-6">
              <Image
                src={stories[1].image}
                alt={stories[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <span className="text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#E2D9C8] mb-1">
              {stories[1].tag}
            </span>

            <h3 className="font-serif font-normal text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.04em] text-white mb-2 sm:mb-3 leading-tight">
              {stories[1].title}
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed italic max-w-lg">
              &ldquo;{stories[1].quote}&rdquo; &mdash; <span className="font-semibold not-italic text-white">{stories[1].author}, {stories[1].location}</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

