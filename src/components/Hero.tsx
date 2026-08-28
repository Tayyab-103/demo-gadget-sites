"use client";

import { SiteConfig } from "@/types";

import React, { useState, useEffect } from "react";
import siteConfigData from "../../config/site-config.json";

const siteConfig = siteConfigData as unknown as SiteConfig;

const sportModes = [
  {
    id: "hiking",
    label: "Wilderness Hike",
    tagline: "Ascend with Comfort",
    heading: "Pioneering the Wilderness Trails",
    desc: "Engineered with dynamic 3D carry suspensions and weather-resistant fabrics to keep you going through high mountain passes.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1600&q=80"
  },
  {
    id: "running",
    label: "Trail Run",
    tagline: "Unleash Active Speed",
    heading: "Conquer Rugged Paths At Pace",
    desc: "Zero-slip wrap trail optics and ultra-breathable mesh apparel built to withstand shifting sun glare and intense paths.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1600&q=80"
  },
  {
    id: "cycling",
    label: "Mountain Bike",
    tagline: "Descend with Control",
    heading: "Master Shifting Steep Declines",
    desc: "Heavy-duty impact protection, cork-cushion contact grips, and aerodynamic ventilation to optimize high-speed trails.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80"
  },
  {
    id: "climbing",
    label: "Alpine Climb",
    tagline: "Push Vertical Limits",
    heading: "Secure Your Ultimate Ascent",
    desc: "Interchangeable structural carbon supports and military-grade double stitching designed for maximum stability on frozen ridges.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
  }
];

export default function Hero() {
  const [activeMode, setActiveMode] = useState(0);

  const currentMode = sportModes[activeMode];

  return (
    <section className="relative min-h-[500px] lg:min-h-[580px] flex items-center overflow-hidden bg-primary py-12 lg:py-16 select-none">
      
      {/* Background Image Cross-Fade Stack */}
      <div className="absolute inset-0 z-0">
        {sportModes.map((mode, idx) => (
          <img
            key={mode.id}
            src={mode.image}
            alt={mode.label}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out transform ${
              idx === activeMode ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* Responsive Readability Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-primary/75 pointer-events-none" />

      {/* Background glow blobbies */}
      <div className="absolute top-[-20%] right-[-100px] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-[-10%] left-[-200px] w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Centered Main Content Wrapper */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        

        {/* Mode label tag */}
        <span className="text-[0.65rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.25em] text-secondary mb-4 block bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-lg w-fit">
          Config: {currentMode.tagline}
        </span>

        {/* Dynamic Centered Active Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black uppercase leading-[1.05] tracking-tight text-white mb-5 max-w-3xl transition-all duration-500">
          {currentMode.heading}
        </h1>

        {/* Dynamic Centered Active Subtext */}
        <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-xl mb-8 min-h-[50px] transition-all duration-500">
          {currentMode.desc}
        </p>


      </div>

      {/* Interactive Mode Control Dock Bar (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-fit max-w-[95vw] overflow-x-auto no-scrollbar bg-white/5 border border-white/10 backdrop-blur-xl py-2 px-3 rounded-full flex gap-1.5 sm:gap-2.5 shadow-2xl select-none mx-auto">
        {sportModes.map((mode, idx) => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(idx)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[0.62rem] sm:text-[0.68rem] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              idx === activeMode
                ? "bg-secondary text-secondary-text shadow-md font-black"
                : "text-white/60 hover:text-white hover:bg-white/5 font-extrabold"
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

    </section>
  );
}
