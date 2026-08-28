"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    question: "How does the 14-day field trial work?",
    answer: `We encourage you to test our compression tops, technical hoodies, and performance socks during real workouts. If for any reason our apparel does not elevate your training standards or fit comfortably, return it within ${siteConfig.trialPeriod || 14} days for a 100% full refund with zero hassle.`,
  },
  {
    number: "02",
    question: "What fabrics are used in Vantage apparel?",
    answer: `Our athletic apparel is constructed from proprietary AeroWeave™ technical yarn, high-gauge four-way stretch nylon-spandex blends, and double-knit fleece. Every piece features flatlock anti-chafing seams, targeted moisture-ventilation zones, and antimicrobial yarn treatments.`,
  },
  {
    number: "03",
    question: "How quickly does my order ship?",
    answer: `All orders are inspected and packaged in our Austin, TX distribution facility within 1 business day. We ship nationwide using ${siteConfig.shippingCarrier}, with standard delivery arriving at your home, gym, or training facility within ${siteConfig.shippingPeriod} business days.`,
  },
  {
    number: "04",
    question: "How do I choose the right size?",
    answer: `Our sporting apparel features an athletic, ergonomic cut. For compression baselayers, select your standard size for a supportive second-skin feel, or size up for a relaxed fit. Technical hoodies and socks fit true to standard US athletic sizing.`,
  },
  {
    number: "05",
    question: "How will the charge appear on my card statement?",
    answer: `Your credit card statement will display the official transaction descriptor "${siteConfig.descriptor}" alongside your verified order amount.`,
  },
  {
    number: "06",
    question: "How do care for and wash technical apparel?",
    answer: `For optimal longevity and fabric performance, machine wash inside-out on cold with similar colors. Avoid fabric softeners and tumble dry low or hang dry to preserve moisture-wicking and elastic recovery.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Green Accent */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-black/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Athlete Knowledge &amp; Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Questions Before <span className="text-secondary">You Move</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto font-normal">
            Sizing, shipping, fabrics, field trials, and everything in between.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Support Box */}
          <div className="lg:col-span-4 rounded-3xl bg-black text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-black text-[0.62rem] font-mono font-bold uppercase tracking-widest mb-4">
                Need Help?
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
                Talk to an Apparel Specialist
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                Our Austin advisors are available to assist with custom sizing, volume team orders, and dispatch tracking.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-black text-xs bg-secondary hover:brightness-110 transition-all py-3 px-6 rounded-full shadow-sm text-center"
            >
              Contact Support →
            </Link>
          </div>

          {/* Right Column: Accordion Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {faqItems.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={item.number}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-secondary/60 bg-black/3 shadow-sm" : "border-black/8 bg-white hover:border-black/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer bg-transparent border-none focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-bold text-secondary">
                        {item.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-primary">
                        {item.question}
                      </h4>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "bg-secondary text-black rotate-45" : "bg-black/5 text-black"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                      isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal pt-2 border-t border-black/5">
                      {item.answer}
                    </p>
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
