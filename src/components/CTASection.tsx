"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-primary" id="cta">
      {/* Background Parallax Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579126038374-6064e9370f0f?w=1600&q=80')` }}
      />
      
      {/* Dark Green Gradient Overlay for Contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10 flex justify-center">
        {/* Frosted Glass Content Card */}
        <div className="glass-card-dark rounded-[2.5rem] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden max-w-3xl w-full border border-secondary/20">
          
          {/* Faint corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <span className="eyebrow eyebrow-invert mb-6 inline-flex text-secondary relative z-10">
            Limited Time Offer
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6 tracking-tight leading-[1.1] relative z-10">
            Ready to Train Harder, <br />
            <span className="text-secondary drop-shadow-md">Recover Smarter?</span>
          </h2>

          <p className="text-white/80 text-sm md:text-[1.05rem] mb-10 max-w-lg mx-auto leading-relaxed relative z-10">
            Join thousands of athletes who&apos;ve upgraded their setup. Bundle up and save on your first order today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-secondary text-secondary-text hover:bg-white hover:text-primary transition-all duration-300 py-4 px-10 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-secondary/10"
            >
              Shop Bundles &amp; Save
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 py-3.5 px-10 rounded-full text-xs uppercase tracking-widest"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
