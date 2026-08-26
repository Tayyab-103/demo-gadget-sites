"use client";

import React, { useState } from "react";
import Image from "next/image";

const stories = [
  {
    id: "story-1",
    tag: "LIVING ROOM SANCTUARY",
    title: "AUSTIN HILLSIDE RESIDENCE",
    quote: "The Alderwyn throw blanket completely transformed our living room lounge. The weave is impossibly soft and luxurious — it adds the exact warm, tactile aesthetic we needed.",
    author: "Camilla V.",
    location: "Austin, TX",
    image: "/img/brand/hero_interior.jpg",
    aspect: "aspect-square",
  },
  {
    id: "story-2",
    tag: "ARCHITECTURAL AMBIENCE",
    title: "MODERN PENTHOUSE LOUNGE",
    quote: "The sculptural ceramic lamp creates the most soothing, warm ambient glow in our reading corner. It functions as both exquisite lighting and an architectural art piece.",
    author: "Marcus T.",
    location: "Dallas, TX",
    image: "/img/brand/how_step3.jpg",
    aspect: "aspect-16/11",
  },
];

export default function Testimonials() {
  const [activeStory, setActiveStory] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary text-white relative" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header (Exact Reference Screenshot Layout) */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6">
          {/* White Oval Pill Badge with '04' */}
          <span className="bg-white text-primary font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
            04
          </span>

          {/* Heading */}
          <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-white leading-none">
            CLIENT STORIES
          </h2>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-px bg-white/10 mb-8 sm:mb-12 md:mb-14" />

        {/* Asymmetrical 2-Card Showcase (Matching Screenshot Layout) */}
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

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5 sm:mb-6 italic max-w-lg">
              &ldquo;{stories[0].quote}&rdquo; &mdash; <span className="font-semibold not-italic text-white">{stories[0].author}, {stories[0].location}</span>
            </p>

            <button
              onClick={() => setActiveStory(activeStory === stories[0].id ? null : stories[0].id)}
              className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-primary transition-all duration-300 px-5 sm:px-6 py-2.5 rounded-full text-[0.65rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white cursor-pointer shadow-2xs hover:shadow-sm"
            >
              <span>{activeStory === stories[0].id ? "CLOSE DETAILS" : "VIEW STORY"}</span>
              <span>→</span>
            </button>

            {activeStory === stories[0].id && (
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed max-w-lg animate-fadeIn">
                Featuring the <strong>Alderwyn Artisan Cashmere-Touch Throw Blanket</strong> styled in an open-concept living area with floor-to-ceiling natural light.
              </div>
            )}
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

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5 sm:mb-6 italic max-w-lg">
              &ldquo;{stories[1].quote}&rdquo; &mdash; <span className="font-semibold not-italic text-white">{stories[1].author}, {stories[1].location}</span>
            </p>

            <button
              onClick={() => setActiveStory(activeStory === stories[1].id ? null : stories[1].id)}
              className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-primary transition-all duration-300 px-5 sm:px-6 py-2.5 rounded-full text-[0.65rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white cursor-pointer shadow-2xs hover:shadow-sm"
            >
              <span>{activeStory === stories[1].id ? "CLOSE DETAILS" : "VIEW STORY"}</span>
              <span>→</span>
            </button>

            {activeStory === stories[1].id && (
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed max-w-lg animate-fadeIn">
                Featuring the <strong>Alderwyn Sculptural Ceramic Ambient Lamp</strong> and <strong>Travertine &amp; Oak Catchall Tray</strong> curated for a reading corner.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
