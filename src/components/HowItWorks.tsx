"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Select Your Instrument & Scores",
    description:
      "Explore our catalog of handcrafted solid spruce guitars, European maple violins, African mahogany kalimbas, and archival gold-embossed sheet music folios.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    icon: "𝄞",
  },
  {
    number: "02",
    title: "Workshop Acoustic Voicing & Setup",
    description:
      "Every instrument is hand-calibrated by master luthiers — checking string action, intonation, bridge alignment, and acoustic resonance before leaving the workshop.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Climate-Controlled Insured Dispatch",
    description:
      "Packed inside custom humidity-sealed protective hard casing and dispatched nationwide with full tracking, arriving at your studio in 3-5 business days.",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    icon: "🚚",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-24"
      id="how-it-works"
    >
      {/* Background ambient blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#D2446D]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#4C0519]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
            <span>𝄞 The Luthier Journey</span>
          </div>

          <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-[#000000] md:text-5xl">
            From Our Workshop <br />
            <span className="text-[#D2446D]">To Your Studio Sanctuary</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base font-medium">
            Every instrument and sheet music collection is crafted, inspected, and packaged with unwavering devotion to musical excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute bottom-10 left-1/2 top-10 z-0 hidden w-px -translate-x-1/2 bg-rose-200 lg:block" />

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
                      <span className="mb-2 text-6xl font-black leading-none text-[#D2446D]/25 md:text-7xl">
                        {step.number}
                      </span>

                      <h3 className="mb-3 text-2xl font-extrabold text-[#000000] md:text-3xl">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600 md:text-base font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Center Node */}
                  <div className="absolute left-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-rose-200 bg-white shadow-lg lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4C0519] text-white font-bold text-sm shadow-inner">
                      {step.icon}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="relative z-20 -my-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#4C0519] text-white shadow-lg lg:hidden text-lg">
                    {step.icon}
                  </div>

                  {/* Image */}
                  <div
                    className={`flex w-full justify-center lg:w-1/2 ${
                      isEven ? "lg:justify-end" : "lg:justify-start"
                    }`}
                  >
                    <div className="group relative aspect-4/3 w-full max-w-[440px] overflow-hidden rounded-3xl bg-[#FDFDFD] shadow-xl border border-rose-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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