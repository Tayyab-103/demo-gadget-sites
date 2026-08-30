"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface CustomerStory {
  id: string;
  logo: string;
  logoSub?: string;
  quote: string;
  authorName: string;
  authorRole: string;
  location: string;
  image: string;
  tag: string;
}

const customerStories: CustomerStory[] = [
  {
    id: "01",
    logo: "VOGUE EDITORIAL",
    logoSub: "PARIS",
    quote:
      "“The Aurelia silk slip dress has an incomparable fluid drape. The bias cut conforms to every curve with pure Parisian nonchalance, moving effortlessly from day soirees to black-tie galas.”",
    authorName: "Elena Rostova",
    authorRole: "Fashion Director & Stylist",
    location: "Paris, France",
    image: "/img/stories/story-silk-blouse.jpg",
    tag: "Silk Charmeuse Collection",
  },
  {
    id: "02",
    logo: "HARPER'S COUTURE",
    logoSub: "MILAN",
    quote:
      "“The Celestia cashmere trench is architectural perfection. The hand-feel of the double-faced virgin wool and cashmere rivals the most storied heritage couture houses on Avenue Montaigne.”",
    authorName: "Camille Dubois",
    authorRole: "Luxury Brand Creative Director",
    location: "Milan, Italy",
    image: "/img/stories/story-cashmere-coat.jpg",
    tag: "Outerwear & Tailoring",
  },
  {
    id: "03",
    logo: "L'OFFICIEL",
    logoSub: "NEW YORK",
    quote:
      "“Wearing the Seraphina Chantilly lace gown to the Metropolitan Gala was breathtaking. The inner corset craftsmanship provided flawless silhouette support and pure comfort all evening.”",
    authorName: "Genevieve Laurent",
    authorRole: "Arts Patron & Gala Chair",
    location: "New York, USA",
    image: "/img/stories/story-lace-gown.jpg",
    tag: "Haute Couture Gowns",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const transitionTo = (newIndex: number, dir: "next" | "prev") => {
    if (isAnimating || newIndex === activeIndex) return;
    setIsAnimating(true);
    setDirection(dir);
    setActiveIndex(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % customerStories.length;
    transitionTo(nextIdx, "next");
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + customerStories.length) % customerStories.length;
    transitionTo(prevIdx, "prev");
  };

  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customerStories.length);
    }, 7000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, activeIndex]);

  const story = customerStories[activeIndex];

  return (
    <section
      className="py-20 sm:py-28 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20 relative overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#C59B7E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#18121E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18121E]/5 border border-[#C59B7E]/30 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#C59B7E] mb-3 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B7E] animate-pulse" />
              <span>EDITORIAL ACCLAIM &amp; PATRONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12]">
              Loved By Connoisseurs, <br className="hidden sm:inline" />
              <span className="italic text-[#C59B7E]">Worn On Global Stages.</span>
            </h2>
          </div>

          {/* Interactive Prev/Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#C59B7E]/30 bg-[#FAF8F6] hover:bg-[#18121E] hover:text-[#E6C2AC] text-[#18121E] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#18121E] hover:bg-[#C59B7E] text-white hover:text-[#18121E] flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Story Animated Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FAF8F6] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#C59B7E]/25 shadow-2xl relative overflow-hidden transition-all duration-500">
            
            {/* Watermark Quote Icon */}
            <div className="absolute top-4 right-8 font-serif text-8xl md:text-9xl text-[#C59B7E]/10 select-none pointer-events-none">
              “
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Portrait with Interactive Frame */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full aspect-[4/5] max-w-[420px] overflow-hidden rounded-3xl shadow-2xl bg-[#18121E] border-2 border-[#C59B7E]/30 group">
                  <Image
                    src={story.image}
                    alt={`${story.authorName}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className={`object-cover object-center transition-all duration-700 ease-out ${
                      isAnimating
                        ? direction === "next"
                          ? "opacity-20 scale-95 translate-x-4"
                          : "opacity-20 scale-95 -translate-x-4"
                        : "opacity-100 scale-100 translate-x-0"
                    }`}
                    priority
                  />
                  
                  {/* Floating Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#18121E]/80 backdrop-blur-md border border-[#C59B7E]/30 text-white flex items-center justify-between">
                    <div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#E6C2AC]">
                        {story.tag}
                      </div>
                      <div className="text-xs font-serif font-bold text-white">
                        {story.location}
                      </div>
                    </div>
                    <span className="text-xs text-[#C59B7E]">✦ Verified</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Animated Editorial Content */}
              <div
                className={`lg:col-span-7 flex flex-col justify-center transition-all duration-500 ease-out ${
                  isAnimating
                    ? direction === "next"
                      ? "opacity-0 translate-y-4"
                      : "opacity-0 -translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {/* Publication Pill & Rating */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C59B7E]/30 shadow-xs">
                    <span className="font-bold text-xs tracking-[0.2em] uppercase text-[#18121E]">
                      {story.logo}
                    </span>
                    {story.logoSub && (
                      <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#C59B7E] bg-[#FAF8F6] px-2 py-0.5 rounded-full border border-[#C59B7E]/20">
                        {story.logoSub}
                      </span>
                    )}
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-[#C59B7E]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-[#18121E] leading-relaxed tracking-tight mb-8">
                  {story.quote}
                </blockquote>

                {/* Author Info & Nav Trigger */}
                <div className="flex items-center justify-between border-t border-slate-200/80 pt-6">
                  <div>
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#18121E]">
                      {story.authorName}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-medium">
                      {story.authorRole} • {story.location}
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#C59B7E] bg-white px-3.5 py-1.5 rounded-full border border-[#C59B7E]/30 shadow-2xs">
                    Story {story.id} / 03
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Patron Thumbnails Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
            {customerStories.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => transitionTo(idx, idx > activeIndex ? "next" : "prev")}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 text-left cursor-pointer ${
                    isSelected
                      ? "bg-[#18121E] text-white border-[#C59B7E] shadow-xl scale-[1.02]"
                      : "bg-[#FAF8F6] text-[#18121E] border-slate-200 hover:border-[#C59B7E] hover:bg-white"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#C59B7E]/30">
                    <Image
                      src={item.image}
                      alt={item.authorName}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`text-xs font-serif font-bold truncate ${isSelected ? "text-[#E6C2AC]" : "text-[#18121E]"}`}>
                      {item.authorName}
                    </div>
                    <div className={`text-[0.65rem] truncate ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                      {item.logo}
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#C59B7E] animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
