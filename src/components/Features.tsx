"use client";

import React from "react";

const featuresData = [
  {
    title: "Frictionless Carry Suspensions",
    description: "Our packs are designed with custom 3D mesh spacers and sternum sliders to eliminate pressure points and active shoulder strain.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15 15 0 0 0-9.3 3.5c-.3.3-.4.8-.2 1.1l2.4 4.7c.2.4.7.7 1.1.7h12c.4 0 .9-.3 1.1-.7l2.4-4.7c.2-.4.1-.9-.2-1.1A15 15 0 0 0 12 2z"></path>
        <path d="M12 12v10"></path>
        <path d="M8 22h8"></path>
      </svg>
    )
  },
  {
    title: "Ultra-Durable Cordura Weaves",
    description: "Every seams and panel is stitched with high-density ballistic Cordura, offering maximum scrap resistance on rock faces.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: "Vanguard Polarized Trail Optics",
    description: "Impact-proof active polarized lenses filter 100% of glare while enhancing trail color contrasts and depth contours in direct sun.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
        <path d="M12 2v2M12 20v2M4 12H2m20 0h-2m-2.05-5.95l-1.42 1.42M5.47 18.53l-1.42 1.42M18.53 18.53l1.42 1.42M5.47 5.47L4.05 4.05"></path>
      </svg>
    )
  },
  {
    title: "60-Day Trail Trial Guarantee",
    description: "Head out on your favorite mountain loops, run, or climb. If you're not fully satisfied with performance, return it within 60 days.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      <div className="glow-bg absolute top-[20%] left-[-200px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-[700px] mb-16 md:mb-20">
          <span className="eyebrow mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-5 tracking-tight leading-tight">
            Engineered for <span className="text-secondary">the Ascent</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base leading-relaxed">
            We combine lightweight aerospace carbon, military-grade optics, and ballistic fabrics to bring you active gear that excels in the wild.
          </p>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Premium Highlight Image Card (5 Cols) */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col justify-end min-h-[400px] lg:min-h-0 border border-black/5">
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1000&q=80"
              alt="Summit Hollow active hiking"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Elegant warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            
            {/* Layered Glassmorphic Card */}
            <div className="relative z-10 p-8 md:p-10 m-6 rounded-3xl glass-card border border-white/20 backdrop-blur-md">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                Summit Hollow Legacy
              </span>
              <h3 className="text-xl font-bold text-primary mb-3">
                Trail-Tested, High-Altitude Endurance Gear
              </h3>
              <p className="text-neutral-text/75 text-xs md:text-sm leading-relaxed">
                We believe gear should vanish into your pace. Every seam, clip, and wrap-around lens is designed to withstand extreme mountain elements.
              </p>
            </div>
          </div>

          {/* Right Column: Sleek 2x2 Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {featuresData.map((feature, idx) => (
              <div
                key={idx}
                className="group/card bg-white rounded-3xl p-6 md:p-8 border border-black/[0.04] shadow-sm hover:shadow-xl hover:border-secondary/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rounded Icon Backdrop with clean scale animation */}
                  <div className="mb-6 w-12 h-12 rounded-2xl bg-secondary/[0.07] text-secondary flex items-center justify-center transition-all duration-300 group-hover/card:bg-secondary group-hover/card:text-white shadow-inner group-hover/card:rotate-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-primary mb-3 leading-snug group-hover/card:text-secondary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-neutral-text/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 w-8 h-[2px] bg-black/[0.06] group-hover/card:bg-secondary transition-colors duration-300" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
