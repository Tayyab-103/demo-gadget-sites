"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  imagePosition: "top" | "bottom";
}

const featuresList: FeatureItem[] = [
  {
    id: 1,
    title: "Soft Breathable Cotton",
    description: "Gentle, skin-friendly cotton and cotton blends that feel great on sensitive skin, from newborns to adults.",
    image: "/img/hero3.jpg",
    link: "/shop",
    imagePosition: "top",
  },
  {
    id: 2,
    title: "Sizes For Every Age",
    description: "Baby, kids, teens, women, and men in one place, so outfitting the whole family takes a single stop.",
    image: "/img/feature.jpg",
    link: "/shop",
    imagePosition: "bottom",
  },
  {
    id: 3,
    title: "Wash-Tested Durability",
    description: "Reinforced seams and pre-shrunk, colorfast fabrics hold their shape and color through countless laundry days.",
    image: "/img/contact.jpg",
    link: "/shop",
    imagePosition: "top",
  },
  {
    id: 4,
    title: `${siteConfig.trialPeriod || 14}-Day Happy Fit Guarantee`,
    description: "Shop risk-free for the whole family with 100% money-back coverage and easy size exchanges for growing kids.",
    image: "/img/newletterpopup.jpg",
    link: "/shop",
    imagePosition: "bottom",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200 select-none" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Light Theme Container matching site aesthetics */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200/90 shadow-2xs">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Why Families Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1D] mb-4">
              Made For Real Family Life
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              Every piece from {siteConfig.brandName} is designed to keep up with school runs, playdates, weekend outings, and busy everyday routines.
            </p>
          </div>

          {/* 4 Alternating Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuresList.map((feature) => {
              const isImageTop = feature.imagePosition === "top";

              return (
                <div
                  key={feature.id}
                  className="group flex flex-col bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:border-slate-400 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Top Block */}
                  {isImageTop ? (
                    // Top Image
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    // Top Text
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-h-[190px] bg-white">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0A0F1D] mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                          {feature.description}
                        </p>
                      </div>
                      <Link
                        href={feature.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A0F1D] group-hover:text-blue-600 transition-colors mt-4"
                      >
                        <span>Learn more</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  )}

                  {/* Bottom Block */}
                  {isImageTop ? (
                    // Bottom Text
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-h-[190px] bg-white">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0A0F1D] mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                          {feature.description}
                        </p>
                      </div>
                      <Link
                        href={feature.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A0F1D] group-hover:text-blue-600 transition-colors mt-4"
                      >
                        <span>Learn more</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  ) : (
                    // Bottom Image
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
