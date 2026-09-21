"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  const features = [
    {
      title: "Archival Quality",
      description: "Non-yellowing, acid-free cotton canvases and high-density pigments built for lasting artwork.",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Secure Studio Ordering",
      description: "Encrypted checkout and safe customer handling for worry-free supply procurement.",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Protected Dispatch",
      description: "Reinforced protective packaging to ensure canvases and brush tips arrive in mint condition.",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Col 1: About Us Card */}
          <div className="lg:col-span-3 bg-primary-tint rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[260px] lg:min-h-[380px] border border-black/5">
            <div>
              <span
                className="text-[0.68rem] font-black uppercase tracking-widest block mb-2"
                style={{ color: "var(--secondary-color)" }}
              >
                Our Studio Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                About Us
              </h2>
            </div>
            <div className="mt-8 lg:mt-0">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--primary-text-color)",
                }}
              >
                See Our Supplies
              </Link>
            </div>
          </div>

          {/* Col 2: Center Large Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] bg-black/5 border border-black/5 shadow-sm">
            <Image
              src="/img/about1.jpg"
              alt="Artist studio painting session"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Col 3: Right Introduction & Image */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5">
            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mb-3">
                About {siteConfig.brandName}
              </h3>
              <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                We curate and supply studio-grade artist materials, canvases, and craft essentials built to empower fine artists, students, and passionate makers.
              </p>
            </div>

            {/* Studio Craft Image */}
            <div className="relative rounded-3xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[210px] w-full bg-black/5 border border-black/5 shadow-sm">
              <Image
                src="/img/about2.jpg"
                alt="Artist craft materials and tools"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* Bottom Section - 3 Feature Cards with Floating Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 pt-12 sm:pt-14 mt-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-primary-tint rounded-3xl pt-10 pb-7 px-6 text-center border border-black/5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Floating Circular Icon Badge */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--primary-text-color)",
                }}
              >
                {feature.icon}
              </div>

              <h4 className="text-base sm:text-lg font-bold text-primary mb-1.5 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
