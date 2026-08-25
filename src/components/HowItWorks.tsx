"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Choose Your Gear",
    description:
      "Browse our range of luggage, bags, and travel accessories, and pick a bundle sized for your next trip, from a single piece to a full travel kit.",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=900&q=80",
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
            Getting packed is simple. Follow these three steps to get
            premium travel gear delivered straight to your door.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
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

              {/* Connector arrow (desktop only, between cards) */}
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
