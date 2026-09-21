"use client";

import React from "react";
import Image from "next/image";

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="studio-showcase">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 12%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Creative Studio in Motion
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Designed For <span className="text-secondary">Creative Studios</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            See our professional stretched canvases, vibrant pigments, and precision brushes in action.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Canvas & Painting */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="/img/lab1.jpg"
              alt="Artist applying paint to primed canvas"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80";
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, color-mix(in srgb, var(--primary-color) 95%, black) 0%, color-mix(in srgb, var(--primary-color) 50%, transparent) 50%, transparent 100%)"
              }}
            />

            <div className="relative z-10">
              <span
                className="inline-block px-3 py-1 rounded-full text-[0.62rem] font-black uppercase tracking-widest text-white mb-3 shadow-md border border-white/20"
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                Canvases &amp; Pigments
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Archival Pigmentation &amp; Texture
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Heavy-body consistency with maximum pigment loading for crisp brush strokes and smooth knife blending.
              </p>
              <div
                className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider"
                style={{ color: "var(--secondary-color)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Triple-Primed Cotton Weave
              </div>
            </div>
          </div>

          {/* Card 2: Brushes & Detailing */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="/img/lab2.jpg"
              alt="Detailed brushwork on studio art piece"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80";
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, color-mix(in srgb, var(--primary-color) 95%, black) 0%, color-mix(in srgb, var(--primary-color) 50%, transparent) 50%, transparent 100%)"
              }}
            />

            <div className="relative z-10">
              <span
                className="inline-block px-3 py-1 rounded-full text-[0.62rem] font-black uppercase tracking-widest text-white mb-3 shadow-md border border-white/20"
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                Brushes &amp; Craft Tools
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Precision Control &amp; Zero Shed
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Ergonomic wooden handles with nickel-plated brass ferrules built for watercolor, oil, and acrylics.
              </p>
              <div
                className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider"
                style={{ color: "var(--secondary-color)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Tapered Multi-Filament Bristles
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
