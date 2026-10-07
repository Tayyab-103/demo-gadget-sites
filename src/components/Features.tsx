"use client";

import React from "react";

const featuresData = [
  {
    title: "Pure Mineral Pigments",
    description: "Formulated with unadulterated, lightfast mineral pigments for superior color saturation and blending control.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    )
  },
  {
    title: "Handcrafted Studio Brushes",
    description: "Every brush is balanced with ergonomic birchwood handles and rustproof nickel ferrules.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      </svg>
    )
  },
  {
    title: "Archival Linen Supports",
    description: "Double-primed, acid-free Belgian linen and cotton canvases built to resist humidity and warping.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    )
  },
  {
    title: "60-Day Studio Guarantee",
    description: "Experiment freely with our materials. If they don't surpass your expectations, return them within 60 days.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11.5 14.5 15 9"></polyline>
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 bg-neutral-bg" id="features">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-[600px] mb-12 md:mb-16">
          <span className="eyebrow mb-4">Atelier Benchmark</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">Built for Fine Artists &amp; Crafters</h2>
          <p className="text-neutral-text/70">
            We combine historical pigment traditions with modern archival engineering to deliver tools you can trust on every canvas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, idx) => (
            <div
              className="bg-white rounded-2xl p-6 border border-black/5 hover:border-secondary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              key={idx}
            >
              <div className="mb-5 w-14 h-14 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-xs md:text-sm text-neutral-text/60 leading-relaxed mb-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
