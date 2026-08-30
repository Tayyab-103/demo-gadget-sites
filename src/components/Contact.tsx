"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactSlides = [
  {
    image: "/img/fashion-hero.jpg",
    title: "Dedicated Styling Concierge",
    quote: "“Our stylists ensure every piece drapes flawlessly for your most memorable galas and occasions.”",
    badge: "Bespoke Styling",
  },
  {
    image: "/img/fashion-atelier-craft.jpg",
    title: "Master Patternmaking Studio",
    quote: "“Precision measurement consultations to verify exact fit across noble silk and cashmere silhouettes.”",
    badge: "Atelier Craftsmanship",
  },
  {
    image: "/img/couture-garment-rail.jpg",
    title: "Private White-Glove Dispatch",
    quote: "“Dispatched in signature protective garment enclosures with expedited UPS air tracking.”",
    badge: "Priority Delivery",
  },
];

const methods = [
  {
    label: "Private Concierge Phone",
    value: siteConfig.phone,
    subtext: "Mon–Fri, 9am–6pm CST",
    href: `tel:${siteConfig.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Atelier VIP Email Desk",
    value: siteConfig.email,
    subtext: "Personal response within 24 hours",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Austin Design & Fulfillment Hub",
    value: siteConfig.address,
    subtext: "Corporate & Logistics Atelier",
    href: undefined,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((i) => (i + 1) % contactSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % contactSlides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + contactSlides.length) % contactSlides.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#C59B7E] mb-3 select-none">
            PRIVATE CONCIERGE &amp; CLIENT SERVICE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-3">
            Have Inquiries? <br className="hidden sm:inline" />
            <span className="italic text-[#C59B7E]">Connect With Our Stylists.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            Our atelier specialists assist with sizing consultations, silk care advice, and bespoke orders.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Column: Smooth Animated Carousel */}
          <div
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-full bg-[#18121E] shadow-2xl border-2 border-[#C59B7E]/30 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slide Images with Smooth Cross-Fade & Scale Animation */}
            {contactSlides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <div
                  key={slide.image}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18121E] via-[#18121E]/60 to-[#18121E]/20" />
                </div>
              );
            })}

            {/* Top Navigation & Counter */}
            <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
              <span className="inline-block px-3 py-1 rounded-full bg-[#18121E]/80 backdrop-blur-md text-[0.65rem] font-bold uppercase tracking-widest text-[#E6C2AC] border border-[#C59B7E]/40 shadow-sm">
                {contactSlides[activeSlide].badge}
              </span>

              <div className="flex items-center gap-1.5 bg-[#18121E]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#C59B7E]/30 text-white text-xs font-mono">
                <span className="text-[#C59B7E] font-bold">0{activeSlide + 1}</span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-400">0{contactSlides.length}</span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 h-full flex flex-col justify-end p-7 sm:p-8 text-white">
              <span className="text-[0.68rem] uppercase tracking-widest text-[#E6C2AC] mb-2 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B7E] animate-pulse" />
                {contactSlides[activeSlide].title}
              </span>

              <p className="text-white text-base sm:text-lg font-serif italic leading-snug max-w-md mb-6 min-h-[54px] transition-opacity duration-500">
                {contactSlides[activeSlide].quote}
              </p>

              {/* Interactive Controls & Indicator Dots */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                {/* Dots */}
                <div className="flex gap-2">
                  {contactSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeSlide ? "w-8 bg-[#C59B7E]" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C59B7E] hover:text-[#18121E] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C59B7E] hover:text-[#18121E] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {methods.map((method) => {
              const Wrapper = method.href ? "a" : "div";
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href } : {})}
                  className="group flex items-center gap-5 rounded-2xl border border-[#C59B7E]/25 bg-[#FAF8F6] p-5 sm:p-6 transition-all hover:border-[#C59B7E] hover:bg-white shadow-xs"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#18121E] text-[#C59B7E] shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.62rem] font-bold uppercase tracking-widest text-[#C59B7E] mb-0.5">
                      {method.label}
                    </div>
                    <div className="font-serif font-bold text-base sm:text-lg text-[#18121E] break-all">
                      {method.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 font-light">
                      {method.subtext}
                    </div>
                  </div>
                </Wrapper>
              );
            })}

            {/* Direct Notice */}
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#18121E] p-5 sm:p-6 text-white border border-[#C59B7E]/30 mt-1 shadow-lg">
              <div className="min-w-0 flex-1">
                <div className="font-serif font-bold tracking-wide text-sm text-white">
                  Austin Atelier &amp; Dispatch Hub
                </div>
                <div className="text-xs text-slate-300 mt-1 font-light">
                  Direct dispatch Monday through Friday via {siteConfig.shippingCarrier} Priority Air.
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#C59B7E]/20 text-[#E6C2AC] text-[0.65rem] font-bold uppercase tracking-widest border border-[#C59B7E]/40">
                ACTIVE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
