"use client";

import React from "react";

const steps = [
  {
    step: "01",
    tag: "TIERED BUNDLE SAVINGS",
    title: "Select Your Part & Bundle",
    desc: "Browse our pro-grade automotive parts catalog and select single units or volume bundles to save up to 50%.",
    image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    step: "02",
    tag: "FAST TRACKED DISPATCH",
    title: "Same-Day Express Dispatch",
    desc: "Packed and dispatched within 24 hours with live nationwide tracking straight to your door or garage.",
    image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="13" x="1" y="3" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    step: "03",
    tag: "PLUG & PLAY FITMENT",
    title: "Seamless 20-Min Fitment",
    desc: "Calibrated to strict OEM vehicle tolerances for effortless bolt-on installation with zero modifications.",
    image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=800",
    fallbackImage: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-gray-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ────────────────── SECTION HEADER ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-10 border-b border-gray-200">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-emerald-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              HOW IT WORKS
            </h2>
          </div>

          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500">
            SIMPLE 3-STEP UPGRADE PROCESS
          </span>
        </div>

        {/* ────────────────── 3 STEP CARDS GRID ────────────────── */}
        <div className="relative">
          {/* Subtle connecting dotted bar on desktop */}
          <div className="hidden lg:block absolute top-28 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-[#fafafa] rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col group"
              >
                {/* Image Header Area with Step Badge */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
                  {/* Step Number Badge */}
                  <div className="absolute top-3.5 left-3.5 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg w-10 h-10 flex items-center justify-center shadow-lg font-black text-base">
                    {item.step}
                  </div>

                  {/* Icon Badge Top Right */}
                  <div className="absolute top-3.5 right-3.5 z-20 bg-white/90 backdrop-blur-xs text-gray-900 rounded-lg w-9 h-9 flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Tag */}
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}