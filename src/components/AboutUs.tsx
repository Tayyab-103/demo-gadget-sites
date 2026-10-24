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
      title: "Commercial Durability",
      description: "Reinforced double-needle stitching, heavy-duty hardware, and soil-release fabrics built for demanding work environments.",
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
      title: "Secure Procurement",
      description: "Encrypted payment gateway and PCI-compliant processing for individual and commercial supply orders.",
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
      title: "Fast Tracked Dispatch",
      description: "Prompt fulfillment and reliable nationwide UPS carrier delivery with tracking on all packages.",
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
          <div className="lg:col-span-3 bg-[#f8fafc] rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[260px] lg:min-h-[380px] border border-black/5">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b48] tracking-tight">
                About Us
              </h2>
            </div>
            <div className="mt-8 lg:mt-0">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0f2b48] hover:bg-[#0b2238] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
              >
                See Uniform Catalog
              </Link>
            </div>
          </div>

          {/* Col 2: Center Large Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] bg-black/5 border border-black/5 shadow-sm">
            <Image
              src="/img/aboutus_crew.jpg"
              alt="Diverse commercial team wearing professional work uniforms"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Col 3: Right Introduction & Lab Image */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5">
            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b48] tracking-tight mb-3">
                About {siteConfig.brandName}
              </h3>
              <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                We supply commercial-grade uniforms, work shirts, and protective apparel built for facility technicians, logistics crews, and service personnel. Our focus is long-lasting durability, professional team presentation, and all-day comfort.
              </p>
            </div>

            {/* Quality testing image */}
            <div className="relative rounded-3xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[210px] w-full bg-black/5 border border-black/5 shadow-sm">
              <Image
                src="/img/aboutus_inspection.jpg"
                alt="Uniform fabric and seam quality inspection"
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
              className="relative bg-[#f8fafc] rounded-3xl pt-10 pb-7 px-6 text-center border border-black/5 hover:border-[#0f2b48]/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Floating Circular Icon Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0f2b48] flex items-center justify-center shadow-md">
                {feature.icon}
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#0f2b48] mb-1.5 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
