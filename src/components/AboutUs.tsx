"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  const funfacts = [
    { count: "25+", label: "Retails Store in the city", icon: "🏪" },
    { count: "300+", label: "Active Delivery Person", icon: "🚚" },
    { count: "120+", label: "Brands and Companies", icon: "🧸" },
  ];

  const features = [
    {
      title: "100% Non-Toxic & Child-Safe",
      description: "All products undergo rigorous lab quality inspections to comply with ASTM and international child safety standards.",
      icon: "🛡️",
    },
    {
      title: "Encrypted & Secure Checkout",
      description: "State-of-the-art PCI-compliant 256-bit bank encryption ensuring every family purchase is protected.",
      icon: "🔒",
    },
    {
      title: "Fast UPS Tracked Dispatch",
      description: "Prompt fulfillment and nationwide delivery within 3-5 business days directly to your doorstep.",
      icon: "📦",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5 overflow-hidden" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Row matching Kiddex about-section from about.html */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About Us Image Area (Matching uploaded artwork) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] mx-auto group">
              {/* Subtle ambient whimsical glow */}
              <div className="absolute inset-0 rounded-full bg-[#ff4370]/10 blur-3xl scale-90 pointer-events-none -z-10" />

              <div className="relative flex items-center justify-center">
                <img
                  src="/img/about-kids-car.jpg"
                  alt="Happy kids with toys - Playhouse Games and Toy Store"
                  className="w-full h-auto max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/about-kids.webp";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text & Kiddex Inner Funfact Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full w-fit mb-4">
              Our Story &amp; Mission
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#1e293b] tracking-tight leading-[1.15] mb-5">
              We are a premier retail store in <span className="text-[#ff4370]">toys, games, and creative accessories</span> for kids
            </h2>

            <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-3">
              At <strong className="text-[#1e293b] font-bold">{siteConfig.brandName}</strong>, with a rich legacy spanning years of joyful moments, we stand as a beloved destination for families seeking durable, imaginative, and safe play companions.
            </p>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed mb-6">
              All components and toys featured in our inventory undergo comprehensive lab quality checks to meet or exceed consumer safety standards, instilling confidence in parents regarding the durability and safety of their purchases.
            </p>

            {/* Kiddex Inner Funfact Box with Dashed Border and Top Colored Accent */}
            <div className="relative bg-[#fdf7f9] rounded-2xl p-6 sm:p-8 border border-dashed border-[#ff4370]/25 border-t-[3px] border-t-[#ff4370] shadow-xs mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                {funfacts.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-5" : ""}`}
                  >
                    <div className="text-3xl sm:text-4xl font-black text-[#ff4370] tracking-tight flex items-baseline">
                      <span>{stat.count}</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#1e293b] mt-1 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 font-black uppercase tracking-wider text-white text-xs sm:text-sm bg-[#ff4370] hover:bg-[#e63560] transition-all duration-200 py-3.5 px-8 rounded-full shadow-md hover:scale-105 cursor-pointer"
              >
                Explore Toy Catalog →
              </Link>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid (Safety, Security, Delivery) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 sm:pt-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-7 rounded-3xl bg-[#f8fafc] border border-black/5 hover:border-[#ff4370]/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-xs mb-4 border border-black/5">
                {feature.icon}
              </div>
              <h4 className="text-base font-black text-[#1e293b] mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}