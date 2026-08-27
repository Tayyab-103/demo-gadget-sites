"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Select Expedition Gear",
    description:
      "Browse our catalog of high-performance trail backpacks, polarized eyewear, and trekking poles designed to excel in challenging outdoor environments.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tailor Your Pack",
    description:
      "Select quantities or pack combinations. Enjoy bundle savings when equipping yourself for multi-day expeditions or team outings.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fast Trail Dispatch",
    description:
      "Complete checkout securely. Your order is hand-packed, double-checked, and shipped via fast courier straight to your door in 3-5 business days.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=80",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-neutral-bg py-12 md:py-16"
      id="how-it-works"
    >
      {/* Background ambient blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-150 w-150 -translate-y-1/2 translate-x-1/3 rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-125 w-125 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <span className="eyebrow mb-6 justify-center">Simple Steps</span>

          <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary md:text-5xl">
            How It <span className="text-secondary">Works</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            Equipping your next adventure is straightforward. Follow these three steps to get high-performance, trail-tested sports gear dispatched directly to you.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary text-sm font-black shadow-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-primary md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-text/65">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector arrow (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-primary shadow-md md:flex lg:-right-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
