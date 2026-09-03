"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-primary" id="cta">
      {/* Background Studio Visual */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
        style={{ backgroundImage: `url('/img/cta_bg.jpg')` }}
      />
      
      {/* Dark Ambient Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex justify-center">
        {/* Frosted Glass Content Card */}
        <div className="glass-card-dark rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 text-center shadow-2xl relative overflow-hidden max-w-3xl w-full border border-secondary/30">
          
          {/* Faint corner glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <span className="eyebrow eyebrow-invert mb-5 inline-flex text-secondary relative z-10">
            Elevate Your Sound
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6 tracking-tight leading-[1.1] relative z-10">
            Ready for Pure Tone &amp; <br />
            <span className="text-secondary drop-shadow-md">Studio-Grade Reliability?</span>
          </h2>

          <p className="text-white/80 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed relative z-10">
            Join thousands of musicians and creators who have upgraded their instrument setup. Choose individual packs or save with multi-item studio bundles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2.5 font-black text-center whitespace-nowrap bg-secondary text-primary hover:bg-white hover:text-primary transition-all duration-300 py-3.5 px-9 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-secondary/15"
            >
              Shop Collection &amp; Save
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border border-white/30 text-white hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300 py-3.5 px-9 rounded-full text-xs uppercase tracking-widest"
            >
              Workshop Inquiries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
