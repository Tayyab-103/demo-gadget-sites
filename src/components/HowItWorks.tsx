"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    number: "01",
    label: "Select Gear",
    title: "Choose Gear & Bundles",
    description: "Pick your training equipment and select multi-pack bundles for volume savings.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=80",
    badge: "Step 1",
  },
  {
    number: "02",
    label: "Fast Dispatch",
    title: "Austin Lab Dispatch",
    description: `Packed in Austin and shipped via ${siteConfig.shippingCarrier} with real-time tracking in ${siteConfig.shippingPeriod} business days.`,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    badge: "Step 2",
  },
  {
    number: "03",
    label: "14-Day Trial",
    title: "14-Day Field Guarantee",
    description: "Test our gear on your toughest workouts. If you're not satisfied, return for a 100% full refund.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=80",
    badge: "Step 3",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth auto-rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-neutral-bg" id="how-it-works">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="eyebrow mb-2.5 justify-center">Simple Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-neutral-text/65 text-xs sm:text-sm mt-2">
            Three simple steps to equip yourself with pro-grade athletic training gear.
          </p>
        </div>

        {/* Minimal Interactive Tab Switcher */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "bg-primary text-primary-text shadow-md scale-105"
                  : "bg-white text-neutral-text/60 hover:text-primary hover:bg-white/80 border border-black/5"
              }`}
            >
              <span className={`text-[0.65rem] font-bold ${activeTab === idx ? "text-secondary" : "text-neutral-text/40"}`}>
                {step.number}
              </span>
              <span>{step.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Feature Display Card */}
        <div
          className="relative overflow-hidden rounded-3xl sm:rounded-4xl shadow-xl bg-primary border border-black/5 min-h-[360px] sm:min-h-[420px] flex items-end"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Images */}
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeTab === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
            </div>
          ))}

          {/* Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-[0.62rem] font-black uppercase tracking-widest text-secondary-text mb-3 shadow-sm">
                {steps[activeTab].badge}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
                {steps[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                {steps[activeTab].description}
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-black text-xs uppercase tracking-wider text-secondary-text bg-secondary hover:brightness-110 transition-all py-3 px-6 rounded-full shadow-md hover:scale-105 whitespace-nowrap"
              >
                Shop Gear &rarr;
              </Link>
            </div>
          </div>

          {/* Step Indicator Dots */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex gap-1.5">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === idx ? "w-6 bg-secondary" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
