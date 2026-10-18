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
    logo: "WOMEN'S APPAREL",
    logoSub: "VERIFIED BUYER",
    quote:
      "“The leaf print maxi dress is stunning and so flattering! The fabric is lightweight, breathable, and so soft. Family Clothing Stores everywhere has become our household go-to.”",
    authorName: "Sarah Jenkins",
    authorRole: "Verified Family Shopper",
    image: "/img/about.jpg",
  },
  {
    id: "02",
    logo: "MEN'S APPAREL",
    logoSub: "VERIFIED BUYER",
    quote:
      "“The quilted crewneck sweatshirt is my new daily favorite. Premium soft interior, sharp diamond stitching, and holds its shape wash after wash. Outstanding quality!”",
    authorName: "Marcus Vance",
    authorRole: "Verified Customer",
    image: "/img/hero2.jpg",
  },
  {
    id: "03",
    logo: "FAMILY WARDROBE",
    logoSub: "VERIFIED BUYER",
    quote:
      "“Shopping for our whole household was seamless. Fast UPS delivery, true-to-size fits, and the 14-day fit trial gave us complete confidence. Wonderful shopping experience!”",
    authorName: "Dr. Claire Sterling",
    authorRole: "Verified Customer",
    image: "/img/newletterpopup.jpg",
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200 select-none" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 select-none">
            Customer Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight mb-4">
            Inspiring Stories, Real Families.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-lg mx-auto">
            Discover why thousands of households choose Family Clothing Stores everywhere for daily comfort and wardrobe essentials.
          </p>
        </div>

        {/* Featured Story Card */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Arched Photo */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl lg:rounded-l-3xl lg:rounded-r-[180px] shadow-lg bg-[#0A0F1D] border border-slate-200 group">
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
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {story.logo}
                </span>
                {story.logoSub && (
                  <span className="text-xs text-slate-400 font-mono">
                    • {story.logoSub}
                  </span>
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#0A0F1D] leading-snug tracking-tight mb-6">
                {story.quote}
              </blockquote>

              {/* Author info */}
              <div className="border-t border-slate-200 pt-4 mb-8">
                <div className="font-extrabold text-sm sm:text-base text-[#0A0F1D]">
                  {story.authorName}
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  {story.authorRole}
                </div>
              </div>

              {/* Story Navigator Thumbnails */}
              <div className="flex items-center gap-3">
                {customerStories.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        isActive
                          ? "w-8 bg-blue-600 shadow-xs"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`View story ${idx + 1}`}
                    />
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
