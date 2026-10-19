"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  const funfacts = [
    { count: "25+", label: "Retail Partner Hubs", icon: "🏪" },
    { count: "300+", label: "Active Delivery Network", icon: "🚚" },
    { count: "120+", label: "Toy & Game Brands", icon: "🧸" },
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
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Row matching Kiddex about-section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fff0f4] aspect-[4/3] sm:aspect-square bg-[#fff0f4]">
              <img
                src="/img/hero-banner.jpg"
                alt="Kids playing with toys at Playhouse Games and Toy Store"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Curved/Rotating Style Badge from Kiddex */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-black/5 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ff4370] text-white flex items-center justify-center font-black text-xl">
                  30+
                </div>
                <div>
                  <div className="text-sm font-black text-[#1e293b]">Years of Playful Joy</div>
                  <div className="text-xs text-black/60 font-semibold">Inspiring Kids Everyday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Funfacts */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full w-fit mb-4">
              Our Story &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight leading-[1.1] mb-5">
              We are a premier retail store in <span className="text-[#ff4370]">toys, games, and creative accessories</span> for kids
            </h2>

            <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4">
              At <strong className="text-[#1e293b] font-bold">{siteConfig.brandName}</strong>, we believe play is the greatest teacher. With a rich heritage of bringing laughter and discovery to families, we curate toys that ignite curiosity, foster teamwork, and spark lifelong fond memories.
            </p>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed mb-8">
              All toys, board games, puzzles, and plush companions in our inventory undergo comprehensive quality checks to meet or exceed consumer safety standards, instilling absolute confidence in parents and gift-givers alike.
            </p>

            {/* Funfacts Row matching Kiddex */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-black/8 mb-8">
              {funfacts.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-black text-[#ff4370] flex items-center gap-1.5">
                    <span>{stat.count}</span>
                  </div>
                  <span className="text-xs text-black/60 font-bold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
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

        {/* Feature Cards Grid */}
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
