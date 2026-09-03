"use client";

import React from "react";

const features = [
  {
    title: "Quality You Can Trust",
    description:
      "Every product is carefully selected to meet our high standards of quality.",
    offset: "md:translate-y-4",
    icon: (
      <svg
        className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0l-1.3 1.3" />
        <path d="m14.7 9.3-1.4-1.4a1 1 0 0 0-1.4 0L7.6 12.2a1 1 0 0 0 0 1.4l2 2a1 1 0 0 0 1.4 0l1.3-1.3" />
        <path d="M2 8.5 7.5 3l4.2 4.2" />
        <path d="M22 15.5 16.5 21l-4.2-4.2" />
      </svg>
    ),
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "Your orders are shipped quickly and handled with care every step of the way.",
    offset: "md:-translate-y-2",
    icon: (
      <svg
        className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.24-4.05a1 1 0 0 0-.78-.38H14v10" />
        <circle cx="17" cy="18.5" r="2.5" />
        <circle cx="6.5" cy="18.5" r="2.5" />
        <path d="M1.5 8h3" />
        <path d="M1 12h3.5" />
      </svg>
    ),
  },
  {
    title: "Hassle-Free Returns",
    description:
      "Changed your mind? Enjoy simple and easy returns with our return policy.",
    offset: "md:translate-y-4",
    icon: (
      <svg
        className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5] relative overflow-hidden" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Pill Badge */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center bg-[#182825] text-white px-6 sm:px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-secondary transition-all duration-300 cursor-default">
            Explore Our Features
          </div>
        </div>

        {/* 3-Card Features Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2 pb-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-9 md:p-10 border border-stone-200/70 shadow-xs hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col items-center text-center group ${feature.offset}`}
            >
              {/* Feature Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#182825] flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-sm group-hover:bg-secondary transition-colors duration-300 flex-shrink-0">
                {feature.icon}
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full border-t border-stone-200/80 mb-6 sm:mb-7" />

              {/* Feature Title */}
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-neutral-text/75 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
