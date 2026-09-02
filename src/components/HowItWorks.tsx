"use client";

import React, { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    label: "METALLURGY & QUENCHING",
    title: "58 HRC Drop-Forged Steel",
    desc: "High-carbon steel blades oil-quenched to 58 HRC for zero bending and superior edge retention.",
    stat: "58 HRC Hardness",
    image: "/img/how_it_works_1.jpg",
    caption: "Master Trowel with calibrated soil depth markings",
  },
  {
    number: "02",
    label: "TIMBER CRAFT",
    title: "Lathe-Turned Ash Hardwood",
    desc: "Sustainably harvested American white ash handles, linseed-oil sealed with solid brass ferrules.",
    stat: "100% Solid Hardwood",
    image: "/img/how_it_works_2.jpg",
    caption: "Precision Bypass Pruning Shears with alloy handles",
  },
  {
    number: "03",
    label: "WORKSHOP DISPATCH",
    title: "25° Bevel Honing & Packaging",
    desc: "Honed to a 25° razor bevel, hand-inspected, and shipped in plastic-free packaging.",
    stat: "25° Honed Edge",
    image: "/img/how_it_works_3.jpg",
    caption: "3-Prong Hand Cultivator aerating rich topsoil",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="bg-white py-16 md:py-20 border-b border-black/5" id="foundry-standards">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
                FOUNDRY STANDARDS
              </span>
              <span className="w-8 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
              How Our Tools <br />
              <span className="text-[#265C1E]">Are Engineered</span>
            </h2>
          </div>
          <p className="text-neutral-text/70 text-xs sm:text-sm max-w-md leading-relaxed">
            Every Thornwick instrument is hand-forged from Japanese SK5 and high-carbon manganese steel, built to endure generations of planting.
          </p>
        </div>

        {/* Innovative Horizontal Split Blueprint Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-black/5 shadow-sm">
          
          {/* Left Column: Interactive Garden Tool Visual Showcase */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md bg-neutral-200">
            <img
              key={current.image}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-opacity duration-500 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Top Floating Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-[#132B1C] text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#265C1E]" />
              {current.stat}
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-bold drop-shadow-sm">
              {current.caption}
            </div>
          </div>

          {/* Right Column: 3 Stepped Process Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-[#265C1E] shadow-md translate-x-1"
                      : "bg-white/50 border-black/5 hover:bg-white hover:border-black/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[0.62rem] font-bold uppercase tracking-[0.2em] ${isActive ? "text-[#265C1E]" : "text-neutral-text/50"}`}>
                      STEP {step.number} • {step.label}
                    </span>
                    <span className={`text-xs font-extrabold px-2 py-0.5 rounded ${isActive ? "bg-[#265C1E]/10 text-[#265C1E]" : "text-neutral-text/40"}`}>
                      {step.stat}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-extrabold text-[#11281A] mb-1.5 tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[0.82rem] text-neutral-text/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}