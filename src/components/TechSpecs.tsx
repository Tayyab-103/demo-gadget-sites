"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

interface SpecDetail {
  id: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
  materials: string[];
}

const productSpecs: Record<string, {
  tagline: string;
  image: string;
  specs: SpecDetail[];
}> = {
  product3: { // Massager
    tagline: "Deep Tissue Percussion Architecture",
    image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?w=1200&q=80",
    specs: [
      {
        id: "motor",
        title: "WhisperQuiet™ Brushless Motor",
        category: "Powerplant",
        metric: "3,200 RPM",
        metricLabel: "Peak Kinetic Velocity",
        description: "Industrial-grade high-torque brushless drive delivering 45 lbs of stall force without bogging down under deep muscle pressure.",
        materials: ["Neodymium Magnets", "Dual-Bearing Shaft", "Copper Wire Stator"],
      },
      {
        id: "chassis",
        title: "Aerospace CNC Alloy Housing",
        category: "Structural Unibody",
        metric: "1.5m",
        metricLabel: "Drop-Tested Resilience",
        description: "Precision-milled aluminum unibody with internal silicone vibration isolation mounts and omni-directional thermal venting.",
        materials: ["6063 Aluminum", "Silicone Dampening", "Matte Anodized Finish"],
      },
      {
        id: "battery",
        title: "High-Density Lithium Cell",
        category: "Power Storage",
        metric: "200 min",
        metricLabel: "Continuous Runtime",
        description: "Integrated 2600mAh battery pack with intelligent cell balancing and over-current thermal surge protection.",
        materials: ["Li-Ion 3S Array", "USB-C Fast IC", "Battery Management System"],
      },
    ],
  },
  product1: { // Bands
    tagline: "Continuous-Dip Latex Elasticity Matrix",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=80",
    specs: [
      {
        id: "latex",
        title: "15-Layer Continuous-Dip Latex",
        category: "Tension Matrix",
        metric: "150 lbs",
        metricLabel: "Total Max Combined Stack",
        description: "Manufactured through sequential dipping of 100% natural Malaysian latex to eliminate micro-tears and maintain linear load curves.",
        materials: ["100% Natural Latex", "Zero Fillers", "UV Resistant Treatment"],
      },
      {
        id: "hardware",
        title: "Anodized Heavy-Duty Carabiners",
        category: "Hardware",
        metric: "1,200 lbs",
        metricLabel: "Tensile Breaking Load",
        description: "Cold-forged steel alloy carabiners with spring-tensioned safety gates designed for instant multi-band stacking.",
        materials: ["Cold-Forged Steel", "Anti-Corrosion Anodization", "Reinforced Girth"],
      },
      {
        id: "stitching",
        title: "Cross-Box Double Stitching",
        category: "Anchor Straps",
        metric: "10x",
        metricLabel: "Load Safety Margin",
        description: "Heavy-gauge nylon thread woven in reinforced cross-box geometry across all door anchors and ankle cuff attachment points.",
        materials: ["High-Tenacity Nylon", "Neoprene Padding", "Dense Foam Core"],
      },
    ],
  },
  product2: { // Tracker
    tagline: "Bio-Telemetry Sensor Array",
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=1200&q=80",
    specs: [
      {
        id: "sensor",
        title: "Multi-Wavelength Optical PPG",
        category: "Bio-Telemetry",
        metric: "24/7",
        metricLabel: "Continuous Heart Rate & HRV",
        description: "Quad-LED infrared and green optical array sampling pulse wave velocity at 100Hz for clinical-grade workout strain measurement.",
        materials: ["Optical Grade Sapphire Glass", "Dual Photodiodes", "Infrared LED Matrix"],
      },
      {
        id: "waterproof",
        title: "5ATM Waterproof Titanium Shell",
        category: "Enclosure",
        metric: "50m",
        metricLabel: "Submersion Rating",
        description: "Hermetically sealed chassis engineered to withstand deep aquatic pressure, heavy salt sweat, and extreme temperature swings.",
        materials: ["Titanium Alloy Bezel", "Hypoallergenic Fluoroelastomer", "O-Ring Seal"],
      },
      {
        id: "power",
        title: "Ultra-Low Power Silicon Core",
        category: "Efficiency",
        metric: "10 Days",
        metricLabel: "Single Charge Battery",
        description: "Custom ARM Cortex low-energy architecture optimized for always-on tracking without daily charging fatigue.",
        materials: ["High-Density LiPo", "Magnetic Pogo Pin", "Bluetooth 5.3 SoC"],
      },
    ],
  },
};

export default function TechSpecs() {
  const [selectedProductId, setSelectedProductId] = useState<string>("product3");
  const [activeSpecIdx, setActiveSpecIdx] = useState<number>(0);

  const activeProductData = productSpecs[selectedProductId] || productSpecs.product3;
  const currentSpec = activeProductData.specs[activeSpecIdx] || activeProductData.specs[0];
  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#FAFAFA] text-[#0A0B0E] relative overflow-hidden" id="tech-specs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="eyebrow mb-3">Engineering</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0B0E]">
              Tech <span className="text-gradient-dark">Specs</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-text/65 max-w-lg">
              Explore the aerospace alloys, telemetry sensors, and durable materials engineered into every unit.
            </p>
          </div>          
          
          {/* Product Switcher Pills */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white border border-black/[0.08] shadow-sm">
            {products.map((p) => {
              const isSelected = p.id === selectedProductId;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProductId(p.id);
                    setActiveSpecIdx(0);
                  }}
                  className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#0A0B0E] text-white font-black shadow-sm scale-[1.02]"
                      : "text-neutral-text/60 hover:text-[#0A0B0E] hover:bg-black/5"
                  }`}
                >
                  {p.name.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Spec Stage: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Exploded Showcase (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square w-full rounded-3xl bg-white p-4 sm:p-8 border border-black/[0.08] overflow-hidden shadow-sm flex items-center justify-center">
              
              {/* Product Visual */}
              <div className="relative h-4/5 w-4/5">
                <Image
                  src={activeProductData.image}
                  alt={selectedProduct?.name || "Product Tech Specs"}
                  fill
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] animate-subtle-float"
                  priority
                />
              </div>

              {/* Verified Material Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#0A0B0E] border border-black/[0.06]">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  {selectedProduct?.name || activeProductData.tagline}
                </span>
              </div>

              {/* Spec Hotspot Selector Pills at Bottom */}
              <div className="absolute bottom-3 inset-x-3 sm:bottom-6 sm:inset-x-6 z-10 flex gap-1.5 sm:gap-2">
                {activeProductData.specs.map((spec, idx) => {
                  const isActive = idx === activeSpecIdx;
                  return (
                    <button
                      key={spec.id}
                      onClick={() => setActiveSpecIdx(idx)}
                      className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[0.6rem] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer truncate text-center border ${
                        isActive
                          ? "bg-[#0A0B0E] text-white border-[#0A0B0E] shadow-sm"
                          : "bg-white text-neutral-text/70 border-black/[0.08] hover:bg-black/5 hover:text-[#0A0B0E]"
                      }`}
                    >
                      {spec.category}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Active Spec Telemetry Deep-Dive (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white border border-black/[0.08] p-5 sm:p-8 md:p-10 shadow-sm min-h-[380px] sm:min-h-[420px]">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0A0B0E]">
                  {currentSpec.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold text-neutral-text/60 bg-black/5 px-3 py-1 rounded-full border border-black/[0.04]">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                  Verified Lab Benchmark
                </span>
              </div>

              {/* Spec Title */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0B0E] mb-6">
                {currentSpec.title}
              </h3>

              {/* Large Metric Display Card */}
              <div className="rounded-2xl bg-neutral-50 border border-black/[0.06] p-5 sm:p-6 mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0B0E] tracking-tight">
                    {currentSpec.metric}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-text/60 mt-1">
                    {currentSpec.metricLabel}
                  </div>
                </div>

                <div className="h-12 w-12 rounded-2xl bg-black/5 text-[#0A0B0E] flex items-center justify-center font-black text-xl">
                  ⚡
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-sm sm:text-base text-neutral-text/70 leading-relaxed mb-6 font-normal">
                {currentSpec.description}
              </p>

              {/* Material Composition Pills */}
              <div className="flex flex-col gap-2 pt-4 border-t border-black/[0.06]">
                <div className="text-[0.65rem] font-black uppercase tracking-widest text-neutral-text/50">
                  Engineered Composition:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentSpec.materials.map((mat, mIdx) => (
                    <span
                      key={mIdx}
                      className="rounded-lg bg-neutral-100 border border-black/[0.04] px-3 py-1 text-xs text-neutral-text/80 font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between gap-4">
              <Link
                href={`/product/${selectedProductId}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0A0B0E] px-6 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-secondary transition-colors duration-200 shadow-sm"
              >
                <span>View Full Product Specs</span>
                <span>→</span>
              </Link>

              <span className="text-xs text-neutral-text/40 font-semibold">
                Lab Tested in Austin, TX
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
