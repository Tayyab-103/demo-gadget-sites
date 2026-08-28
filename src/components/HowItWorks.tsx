"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Find Your Part",
    description:
      "Browse our inventory of wire, breakers, and equipment, and pick the exact quantity your project needs, from a single connector to a full panel upgrade.",
    image: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=900&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fast Secure Checkout",
    description:
      "Fill in your shipping details and complete your order safely. Our checkout is secured with military-grade 256-bit encryption for your peace of mind.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Nationwide Dispatch",
    description:
      "Your order is packed and dispatched from our fulfillment center directly to your doorstep within 3-5 business days.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <section className="relative overflow-hidden bg-neutral-bg py-12 md:py-16" id="how-it-works">
      {/* Background ambient blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-150 w-150 -translate-y-1/2 translate-x-1/3 rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-125 w-125 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center md:mb-20">
          <span className="eyebrow mb-6 justify-center">Simple Steps</span>
          <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary md:text-5xl">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            Stocking your next job is simple. Follow these three steps to get
            certified electrical parts and equipment delivered straight to your door.
          </p>
        </div>

        {/* Process row */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute top-8 left-[16.6%] right-[16.6%] hidden border-t-2 border-dashed border-primary/15 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="group relative flex flex-col items-center text-center">
              {/* Step badge */}
              <div className="relative z-10 mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text shadow-lg transition-all duration-300 group-hover:bg-secondary group-hover:text-secondary-text">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[0.62rem] font-black text-secondary-text shadow-sm group-hover:bg-primary group-hover:text-primary-text">
                  {step.number}
                </span>
              </div>

              {/* Image */}
              <div className="relative mb-6 aspect-4/3 w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 320px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <h3 className="mb-2.5 text-lg font-extrabold text-primary md:text-xl">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-text/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
