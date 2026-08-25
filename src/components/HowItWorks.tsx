"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Choose Your Piece",
    description:
      "Browse our collection of jewelry, watches, clocks, and silverware, and pick a bundle sized for you, from a single piece to a full gift set.",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=900&q=80",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        <div className="mb-16 text-center md:mb-24">
          <span className="eyebrow mb-6 justify-center">
            Simple Steps
          </span>

          <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-primary md:text-5xl">
            How It{" "}
            <span className="text-secondary">
              Works
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            Finding your next piece is simple. Follow these three steps to get
            fine jewelry, watches, clocks, or silverware delivered straight to your door.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute bottom-10 left-1/2 top-10 z-0 hidden w-px -translate-x-1/2 bg-black/10 lg:block" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0;

              return (
                <div
                  key={step.number}
                  className={`relative z-10 flex flex-col items-center gap-10 lg:gap-0 ${
                    isEven
                      ? "lg:flex-row-reverse"
                      : "lg:flex-row"
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`flex w-full flex-col items-center text-center lg:w-1/2 ${
                      isEven
                        ? "lg:items-start lg:pl-20 lg:text-left"
                        : "lg:items-end lg:pr-20 lg:text-right"
                    }`}
                  >
                    <div
                      className={`flex max-w-md flex-col items-center ${
                        isEven
                          ? "lg:items-start"
                          : "lg:items-end"
                      }`}
                    >
                      <span className="mb-2 text-6xl font-black leading-none text-primary/10 md:text-7xl">
                        {step.number}
                      </span>

                      <h3 className="mb-4 text-2xl font-extrabold text-primary md:text-3xl">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-neutral-text/65 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Center Node */}
                  <div className="absolute left-1/2 z-20 hidden h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg lg:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="relative z-20 -my-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white shadow-lg lg:hidden">
                    {step.icon}
                  </div>

                  {/* Image */}
                  <div
                    className={`flex w-full justify-center lg:w-1/2 ${
                      isEven
                        ? "lg:justify-end"
                        : "lg:justify-start"
                    }`}
                  >
                    <div className="group relative aspect-4/3 w-full max-w-110 overflow-hidden rounded-4xl bg-white shadow-2xl">
                      {/* Soft overlay */}
                      <div className="pointer-events-none absolute inset-0 z-10 bg-primary/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />

                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 90vw, 440px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}