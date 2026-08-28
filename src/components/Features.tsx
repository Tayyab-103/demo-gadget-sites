"use client";

import React from "react";

const featuresData = [
  {
    title: "Frictionless Carry",
    description: "Designed with 3D mesh spacers and sternum sliders to eliminate pressure points and active shoulder strain.",
    specs: ["3D Spacer Mesh", "Sternum Sliders", "Ergonomic Harness"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15 15 0 0 0-9.3 3.5c-.3.3-.4.8-.2 1.1l2.4 4.7c.2.4.7.7 1.1.7h12c.4 0 .9-.3 1.1-.7l2.4-4.7c.2-.4.1-.9-.2-1.1A15 15 0 0 0 12 2z"></path>
        <path d="M12 12v10"></path>
        <path d="M8 22h8"></path>
      </svg>
    )
  },
  {
    title: "Cordura Weaves",
    description: "Stitched with high-density ballistic Cordura, offering maximum scrap resistance on rock faces.",
    specs: ["1000D Ballistic Nylon", "Reinforced Stitching", "DWR Water Repellent"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: "Vanguard Trail Optics",
    description: "Impact-proof active polarized lenses filter 100% of glare while enhancing trail depth contours in direct sun.",
    specs: ["Polarized Lenses", "UV400 Glare Filter", "Oleophobic Coating"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
        <path d="M12 2v2M12 20v2M4 12H2m20 0h-2m-2.05-5.95l-1.42 1.42M5.47 18.53l-1.42 1.42M18.53 18.53l1.42 1.42M5.47 5.47L4.05 4.05"></path>
      </svg>
    )
  },
  {
    title: "Trail Trial Guarantee",
    description: "Head out on your favorite mountain loops. If you're not fully satisfied with performance, return within 60 days.",
    specs: ["60-Day Trail Trial", "100% Refund Policy", "Prepaid Returns"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
];


export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="features">
      {/* Background glowing blob */}
      <div className="glow-bg absolute top-[10%] left-[-200px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Bento Grid Main Container */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Row 1: Brand Philosophy & Scenic Image (6 cols + 6 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            
            {/* Cell 1: Philosophy Card */}
            <div className="lg:col-span-7 bg-primary text-primary-text p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-xl min-h-[350px]">
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[0.62rem] md:text-[0.68rem] font-bold uppercase tracking-[0.22em] bg-white/10 px-3.5 py-1.5 rounded-full text-secondary">
                  Innovation Lab
                </span>
                <span className="text-[0.62rem] md:text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/40">
                  Est. 2026
                </span>
              </div>
              
              <div className="relative z-10 mt-8 lg:mt-12">
                <span className="eyebrow eyebrow-invert mb-4">Why Choose Us</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-5">
                  Engineered for <span className="text-secondary">the Ascent</span>
                </h2>
                <p className="text-primary-text/75 text-sm md:text-base leading-relaxed max-w-xl">
                  We combine lightweight aerospace carbon, military-grade optics, and ballistic fabrics to bring you active gear that excels in the wild.
                </p>
              </div>
            </div>

            {/* Cell 2: Image Card */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] shadow-xl border border-black/5 min-h-[320px] lg:min-h-0 flex flex-col justify-end">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1000&q=80"
                alt="Summit hiking route"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
              
              {/* Glassmorphic overlay badge */}
              <div className="relative z-10 p-6 md:p-8 flex justify-between items-center w-full">
                <div className="glass-card-dark border border-white/15 px-4 py-2.5 rounded-2xl backdrop-blur-md">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-secondary block">
                    Summit Range
                  </span>
                  <span className="text-[0.75rem] font-extrabold text-white">
                    Altitude Tested: 14,000+ ft
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: 4 Technical Specification Cards (3 cols each on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuresData.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[2rem] p-6 md:p-8 border border-black/[0.04] shadow-sm hover:shadow-xl hover:border-secondary/35 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Backdrop */}
                  <div className="mb-6 w-11 h-11 rounded-2xl bg-secondary/[0.08] text-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:rotate-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 leading-snug">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-neutral-text/60 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Technical specs bullet tags */}
                <div className="border-t border-black/5 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {feature.specs.map((spec, specIdx) => (
                      <span
                        key={specIdx}
                        className="text-[0.6rem] font-bold uppercase tracking-wider bg-neutral-bg text-neutral-text/50 px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
}
