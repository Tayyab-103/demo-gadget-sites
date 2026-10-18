"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface ProtocolStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  tagline: string;
  specs: string[];
}

const steps: ProtocolStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Thoughtful fabrics",
    description: "Soft combed cotton, cozy brushed fleece, and breathable jersey knits chosen for comfort on every member of the family.",
    tagline: "Comfort-First Materials",
    specs: ["Combed Cotton", "Brushed Fleece", "Jersey Knit"],
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Family-tested fit",
    description: "Relaxed, true-to-size cuts with comfy stretch waistbands and room to move for climbing, running, and lounging.",
    tagline: "Room To Grow",
    specs: ["True-To-Size", "Stretch Waistbands", "Tagless Comfort"],
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Built to last",
    description: "Double-stitched seams, reinforced knees, and pre-shrunk, colorfast fabric that holds up wash after wash.",
    tagline: "Everyday Durability",
    specs: ["Double Stitching", "Reinforced Knees", "Colorfast Dyes"],
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Delivered to your door",
    description: `Dispatched in ${siteConfig.shippingPeriod || "3-5"} business days via ${siteConfig.shippingCarrier || "UPS"} with a ${siteConfig.trialPeriod || 14}-day happy fit guarantee and easy size exchanges.`,
    tagline: "Fast Family Delivery",
    specs: [`${siteConfig.shippingCarrier || "UPS"} Express`, `${siteConfig.trialPeriod || 14}-Day Trial`, "Easy Exchanges"],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#F4F5F7] text-[#0A0F1D] py-16 sm:py-20 md:py-24 border-t border-slate-200 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 select-none">
              How We Make It
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1D] leading-[1.12]">
              Style is what people see. <br />
              Comfort is what your family feels.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md lg:text-right font-normal">
              We design for both: fresh, easy-to-wear looks for every age and the everyday comfort built into every fabric, seam, and stitch.
            </p>
          </div>
        </div>

        {/* 4 Protocol Rows with Center Alignment Guideline */}
        <div className="relative border-t border-slate-200/90">
          {/* Subtle Vertical Center Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[55%] lg:left-[50%] w-[1px] bg-blue-200/70 z-0 pointer-events-none" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-6 sm:py-8 border-b border-slate-200/90 transition-all duration-200 cursor-pointer ${
                  isActive ? "bg-white/70 shadow-xs" : "hover:bg-white/40"
                }`}
              >
                {/* Left: Step Title (Right Aligned towards center on desktop) */}
                <div className="md:col-span-6 lg:col-span-5 md:text-right flex md:justify-end items-center">
                  <h3
                    className={`text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight transition-colors duration-200 ${
                      isActive ? "text-[#0A0F1D]" : "text-slate-700"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Center: Monospaced Number Box */}
                <div className="hidden md:flex md:col-span-1 lg:col-span-1 justify-center items-center">
                  <span
                    className={`inline-flex items-center justify-center font-mono text-xs font-bold px-2.5 py-1 transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-xs"
                        : "border border-blue-400/80 text-blue-600 bg-[#F4F5F7]"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                </div>

                {/* Mobile Badge View */}
                <div className="md:hidden flex items-center gap-3">
                  <span
                    className={`inline-flex items-center justify-center font-mono text-xs font-bold px-2.5 py-1 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "border border-blue-400 text-blue-600"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    {step.tagline}
                  </span>
                </div>

                {/* Right: Concise Descriptive Sentence */}
                <div className="md:col-span-5 lg:col-span-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
