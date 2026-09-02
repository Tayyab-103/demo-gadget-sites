"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Select Your Tone Hardware",
    description:
      "Explore our boutique range of master capos, chromatic clip-on tuners, and dual-shielded cables. Choose individual units or multi-pack savings for your stage and studio rigs.",
    image: "/img/how_step1.jpg",
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
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Workshop Acoustic Calibration",
    description:
      "Prior to leaving the bench, each accessory undergoes rigorous inspection: micro-balanced fret clamping, noise-floor conductivity tests, and precision pitch response.",
    image: "/img/how_step2_calibration_v2.jpg",
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
    number: "03",
    title: "Insured Studio Dispatch",
    description:
      "Packed inside protective shock-absorbing packaging and dispatched nationwide with tracking, reaching your rehearsal room or studio in 3-5 business days.",
    image: "/img/how_step3.jpg",
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
      className="relative overflow-hidden bg-neutral-bg py-16 md:py-24"
      id="how-it-works"
    >
      {/* Background ambient blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-150 w-150 -translate-y-1/2 translate-x-1/3 rounded-full bg-secondary/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-125 w-125 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <span className="eyebrow mb-4 justify-center">
            The Workshop Journey
          </span>

          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-primary md:text-5xl">
            From Our Bench <br />
            <span className="text-secondary">To Your Studio</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-text/65 md:text-base">
            Every piece of music hardware is built with uncompromising attention to acoustic fidelity and durability.
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
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
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
                        isEven ? "lg:items-start" : "lg:items-end"
                      }`}
                    >
                      <span className="mb-2 text-6xl font-black leading-none text-secondary/20 md:text-7xl">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary font-bold shadow-inner">
                      {step.icon}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="relative z-20 -my-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary shadow-lg lg:hidden">
                    {step.icon}
                  </div>

                  {/* Image */}
                  <div
                    className={`flex w-full justify-center lg:w-1/2 ${
                      isEven ? "lg:justify-end" : "lg:justify-start"
                    }`}
                  >
                    <div className="group relative aspect-4/3 w-full max-w-110 overflow-hidden rounded-4xl bg-white shadow-2xl border border-black/5">
                      <div className="pointer-events-none absolute inset-0 z-10 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
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