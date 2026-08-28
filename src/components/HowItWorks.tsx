"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Select Specs & Bundles",
    description:
      "Choose precision compression fittings, heavy-duty shutoff valves, or high-temp supply lines. Select bulk bundles to maximize volume discounts.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fast 256-Bit Encrypted Order",
    description:
      "Enter delivery details with seamless, encrypted checkout. Immediate order confirmation and automated billing descriptor tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Direct Job Site Dispatch",
    description:
      "Every piece is packed directly from our distribution center and shipped via UPS with real-time tracking for delivery in 3-5 business days.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-neutral-bg py-14 sm:py-16 md:py-20 lg:py-24" id="how-it-works">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center md:mb-16">
          <span className="eyebrow mb-3 justify-center">Ordering Workflow</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-text/70">
            From residential plumbing repairs to commercial hydronic heating overhauls, getting industrial-grade components delivered to your job site is straightforward.
          </p>
        </div>

        {/* Process row */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group flex flex-col items-center text-center bg-white p-6 sm:p-7 rounded-2xl border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md">
              {/* Step badge */}
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-text shadow-sm transition-all duration-300 group-hover:bg-secondary group-hover:text-secondary-text">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[0.58rem] font-bold text-secondary-text shadow-sm group-hover:bg-primary group-hover:text-primary-text">
                  {step.number}
                </span>
              </div>

              {/* Image */}
              <div className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-bg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-2 text-base sm:text-lg font-bold text-primary">{step.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-text/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
