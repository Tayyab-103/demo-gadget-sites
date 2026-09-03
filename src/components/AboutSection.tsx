"use client";

import React from "react";

const aboutFeatures = [
  {
    iconEmoji: "🩺",
    iconBg: "bg-amber-50 border-amber-200/80 text-amber-700",
    title: "Vet-Endorsed Ergonomics & Design",
    description: "Engineered with massage beads and joint-relief memory foam for daily comfort, safety, and longevity.",
  },
  {
    iconEmoji: "🌿",
    iconBg: "bg-emerald-50 border-emerald-200/80 text-emerald-700",
    title: "100% Non-Toxic & Pet-Safe Materials",
    description: "Crafted free from BPA, phthalates, or harsh fillers to ensure safe everyday chewing, grooming, and play.",
  },
  {
    iconEmoji: "🐾",
    iconBg: "bg-stone-100 border-stone-200 text-[#182825]",
    title: "14-Day Happy Tail Guarantee",
    description: "Fast tracked dispatch with dedicated pet concierge support and hassle-free returns on all orders.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5] relative overflow-hidden" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header at Top */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/60 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              ABOUT WHISKER VALE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Thoughtfully Engineered <span className="italic text-secondary font-serif">For Every Companion</span>
          </h2>
          
          <p className="text-neutral-text/75 text-xs sm:text-sm md:text-base leading-relaxed">
            We design premium essentials without compromise — ensuring every brush, toy, and orthopedic bed brings joy, comfort, and well-being to companion animals and their parents.
          </p>
        </div>

        {/* 2-Column Content: Image adjusted lower after the heading & Features list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mt-4 sm:mt-6">
          
          {/* Left Column: Featured Image */}
          <div className="lg:col-span-6 w-full pt-1 sm:pt-3">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/70 bg-white">
              <img
                src="/img/about1.png"
                alt="About Whisker Vale Pet Mercantile"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/img/hero1.png";
                }}
              />
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-6 sm:gap-7">
              {aboutFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200 ${item.iconBg}`}
                  >
                    <span>{item.iconEmoji}</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
