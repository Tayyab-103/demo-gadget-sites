"use client";

import React, { useState, useEffect } from "react";
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
  image: string;
}

const customerStories: CustomerStory[] = [
  {
    id: "01",
    logo: "VANGUARD DEFENSE",
    logoSub: "SECURITY",
    quote:
      "“Ironvale provides a standard of durability that’s paramount to our officer safety across 350+ patrol personnel in Texas.”",
    authorName: "Marcus Vance",
    authorRole: "VP of Security Operations",
    image: "/img/stories/story-tactical.jpg",
  },
  {
    id: "02",
    logo: "METRO HEALTH",
    logoSub: "HOSPITAL",
    quote:
      "“The Apex-Core scrubs endure hospital autoclave sterilization without color fade. Our surgical staff enjoys true all-shift comfort.”",
    authorName: "Dr. Claire Sterling, MD",
    authorRole: "Chief Nursing Director",
    image: "/img/stories/story-medical.jpg",
  },
  {
    id: "03",
    logo: "L'ARTISAN",
    logoSub: "CULINARY",
    quote:
      "“The CoolVent airflow panels keep our brigade cool during dinner rushes while preserving the crisp polish our dining room demands.”",
    authorName: "Antoine Moreau",
    authorRole: "Executive Head Chef",
    image: "/img/stories/story-culinary.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customerStories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const story = customerStories[activeIndex];

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 mb-2.5 select-none">
            CUSTOMER STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08]">
            Inspiring Stories, <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">Real Customers.</span>
          </h2>
        </div>

        {/* Featured Story Card */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Arched Photo */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-w-[500px] overflow-hidden rounded-3xl lg:rounded-l-3xl lg:rounded-r-[180px] shadow-lg bg-[#0A0F1D] border border-slate-200 group">
                <Image
                  src={story.image}
                  alt={`${story.authorName}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className={`object-cover object-center transition-all duration-500 ${
                    isAnimating ? "opacity-30 scale-95" : "opacity-100 scale-100"
                  }`}
                  priority
                />
              </div>
            </div>

            {/* Right: Info */}
            <div
              className={`lg:col-span-6 flex flex-col justify-center transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Logo Capsule Pill */}
              <div className="mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200">
                  <span className="font-bold text-xs tracking-[0.16em] uppercase text-[#0A0F1D]">
                    {story.logo}
                  </span>
                  {story.logoSub && (
                    <span className="text-[0.6rem] font-medium uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {story.logoSub}
                    </span>
                  )}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-normal text-[#0A0F1D] leading-relaxed tracking-tight mb-5 italic">
                {story.quote}
              </blockquote>

              {/* Author */}
              <div>
                <div className="text-sm font-bold text-[#0A0F1D]">
                  {story.authorName}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {story.authorRole}
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
            {customerStories.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  activeIndex === idx
                    ? "w-6 h-2 bg-[#0A0F1D]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
