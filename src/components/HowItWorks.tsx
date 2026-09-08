"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    phase: "Select Your Piece",
    title: "Curate Your Atelier Suite",
    description:
      "Explore our handcrafted collection of 18K solid gold jewelry, Swiss-precision automatic chronographs, and mirror-finished 925 sterling silverware. Choose a single signature piece or customize a multi-piece bundle with exclusive collector savings.",
    badge: "Bespoke Collection",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 2 18 2 22 8 12 22 2 8 6 2"></polygon>
        <line x1="2" y1="8" x2="22" y2="8"></line>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    ),
  },
  {
    step: "02",
    phase: "Master Quality Check",
    title: "Certified Hallmarking & Precision",
    description:
      "Prior to dispatch, each piece is meticulously inspected by our master jewelers and horologists. We verify gemstone clarity, carat hallmarking, and timekeeping accuracy to ensure pristine heirloom standards.",
    badge: "Official Certification",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=900&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11.5 14.5 15 9"></polyline>
      </svg>
    ),
  },
  {
    step: "03",
    phase: "Armored Courier Dispatch",
    title: "Insured Transit & 14-Day Trial",
    description:
      "Your order is secured inside our velvet-lined lacquer keepsake box and dispatched via insured UPS express courier in 3-5 business days. Enjoy an uninterrupted 14-day private home inspection with our guarantee.",
    badge: "100% Risk-Free",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=900&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#F9F7F2] text-[#121E19] relative overflow-hidden font-sans" id="how-it-works">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0C1E17]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C1E17]/5 border border-[#D4AF37]/40 mb-4 shadow-xs">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0C1E17]">
              The Atelier Experience
            </span>
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal uppercase tracking-tight text-[#0C1E17] leading-tight mb-5">
            How Acquiring Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C1E17] via-[#D4AF37] to-[#0C1E17]">
              Heirloom Piece Works
            </span>
          </h2>

          <p className="text-sm md:text-base text-black/65 font-light leading-relaxed max-w-2xl mx-auto">
            From the jeweler&apos;s bench to your doorstep, our three-stage process ensures uncompromised quality, verified authenticity, and complete peace of mind.
          </p>
        </div>

        {/* 3-Step Interactive Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-black/8 hover:border-[#D4AF37]/60 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-[#D4AF37]/15 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0C1E17] via-[#D4AF37] to-[#0C1E17] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#0C1E17] mb-6 shadow-md border border-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop";
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17]/80 via-transparent to-transparent" />

                  {/* Step Numeral Badge */}
                  <span className="absolute top-3 left-3 bg-[#0C1E17]/90 backdrop-blur-md text-[#D4AF37] text-xs font-mono font-bold px-3 py-1 rounded-full border border-[#D4AF37]/30 shadow-sm">
                    STAGE {item.step}
                  </span>

                  {/* Badge */}
                  <span className="absolute bottom-3 right-3 bg-white/95 text-[#0C1E17] text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Step Phase Subheading */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37] mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#0C1E17] text-[#D4AF37] flex items-center justify-center text-[0.65rem] shrink-0 shadow-xs">
                    {item.icon}
                  </span>
                  <span>{item.phase}</span>
                </div>

                {/* Main Card Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0C1E17] tracking-tight mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-black/8 flex items-center justify-between text-xs">
                <span className="font-semibold text-black/50 tracking-wider">
                  Guaranteed by {siteConfig.brandName}
                </span>
                <span className="text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Concierge & Assurance Banner */}
        <div className="mt-16 bg-[#0C1E17] rounded-3xl p-8 sm:p-10 text-white border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              ✦ Personal Atelier Concierge ✦
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-normal tracking-tight text-white mb-2">
              Have Questions About Ring Sizing, Watch Calibers, or Custom Silverware?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Our master jewelry consultants in Austin, TX are on standby to assist with sizing advice, gift curation, or order status.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/#shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C266] to-[#D4AF37] text-[#0C1E17] font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer"
            >
              Browse Products &rarr;
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              Contact Concierge
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}