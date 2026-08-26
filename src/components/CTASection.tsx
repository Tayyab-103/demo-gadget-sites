"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-primary" id="cta">
      {/* Full-bleed background image */}
      <img
        src="https://images.unsplash.com/photo-1618219940841-a29a1bb7b86e?w=1600&q=80"
        alt="Stunning modern furnished interior sanctuary"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Rich gradient overlays for ultimate readability and depth */}
      <div className="absolute inset-0 bg-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />

      {/* Floating glowing light leaks */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-secondary/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-primary-text/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        
        {/* Floating Glassmorphic Editorial Panel */}
        <div className="p-8 md:p-14 rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
          
          <span className="eyebrow eyebrow-invert justify-center mb-6 text-secondary">
            Sanctuary Awaits
          </span>

          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white mb-6">
            Elevate Your <span className="text-secondary drop-shadow-sm">Living Space</span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-sm md:text-base leading-relaxed text-white/80">
            Join thousands of design lovers who have transformed their houses into warm, organic sanctuaries. Bundle your items today and receive complimentary shipping and structural lifetime warranty protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-xs font-bold uppercase tracking-widest text-secondary-text shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-white hover:text-primary hover:scale-[1.03]"
            >
              Shop The Collection &amp; Save
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-9 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/15 hover:scale-[1.03]"
            >
              Talk to a Designer
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
