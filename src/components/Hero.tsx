"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import TypewriterText from "@/components/TypewriterText";

const rotatingPhrases = ["Grow Up In", "Play Hard In", "Feel Good In", "Pass Down"];

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden md:min-h-[80vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519457851758-fa14f0ee13b1?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span aria-hidden="true">✨</span>
            <span>{siteConfig.brandName} — Fall Family Edit</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.1] tracking-tight mb-6">
            Clothes made to{" "}
            <span className="text-secondary">
              <TypewriterText phrases={rotatingPhrases} />
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            Soft, durable everyday wear for the whole family, matched across sizes and built to survive school runs, playgrounds, and everything after.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-secondary-text text-sm md:text-base bg-secondary hover:brightness-105 transition-all duration-300 py-4 px-10 rounded-full shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:scale-[1.02]"
            >
              Shop The Collection
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-bold text-white text-sm md:text-base bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-300 py-4 px-8 rounded-full backdrop-blur-sm"
            >
              Our Story
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
            <div>
              <div className="text-xl md:text-2xl font-black text-white">100%</div>
              <div className="text-xs text-white/50 mt-0.5">Quality-Checked Fabrics</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white">4.9★</div>
              <div className="text-xs text-white/50 mt-0.5">Customer Rating</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-white">Free</div>
              <div className="text-xs text-white/50 mt-0.5">Nationwide Shipping</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-secondary z-10" />
    </section>
  );
}
