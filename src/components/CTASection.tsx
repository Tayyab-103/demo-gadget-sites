"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary" id="cta">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left: Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 md:py-20 lg:py-24">
          {/* Faint corner glow */}
          <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

          <span className="eyebrow eyebrow-invert relative z-10 mb-6 inline-flex text-secondary">
            Limited Time Offer
          </span>

          <h2 className="relative z-10 mb-6 text-3xl font-black uppercase leading-[1.1] tracking-tight text-white md:text-5xl">
            Elevate Your <br />
            <span className="text-secondary drop-shadow-md">Living Space</span>
          </h2>

          <p className="relative z-10 mb-10 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
            Join thousands of design lovers who&apos;ve curated their sanctuaries. Bundle up and enjoy exclusive savings on your first order today.
          </p>

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-xs font-bold uppercase tracking-widest text-secondary-text shadow-lg shadow-secondary/10 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Shop The Collection &amp; Save
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-transparent px-9 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Talk to a Designer
            </Link>
          </div>
        </div>

        {/* Right: Premium Image */}
        <div className="relative min-h-[280px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
            alt="Warm and modern furnished lounge space"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/10 to-transparent lg:bg-gradient-to-r lg:from-primary/70 lg:via-primary/10 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
