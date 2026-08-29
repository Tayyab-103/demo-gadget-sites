"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    question: "How does the 14-day studio practice trial work?",
    answer: `We invite you to experience our fountain pens, leather journals, and desk accessories in your daily writing rituals. If for any reason our craftsmanship does not elevate your prose or workspace, return it within ${siteConfig.trialPeriod || 14} days for a 100% full refund with zero hassle.`,
  },
  {
    number: "02",
    question: "What paper and materials are used in Quillhaven goods?",
    answer: `Our journals feature 160 GSM milled archival cotton paper that is completely bleedproof against wet fountain pen inks, watercolors, and calligraphy dip pens. Our pens and desk suites are precision-milled from raw solid brass and paired with German iridium-tipped nibs and vegetable-tanned full-grain leather.`,
  },
  {
    number: "03",
    question: "How quickly does my order ship?",
    answer: `All orders are carefully hand-inspected and wax-sealed at our Austin, TX atelier within 1 business day. We ship nationwide via ${siteConfig.shippingCarrier}, with standard express delivery arriving at your door within ${siteConfig.shippingPeriod} business days.`,
  },
  {
    number: "04",
    question: "Can I use bottled ink and custom ink converters?",
    answer: `Yes. The Sovereign Master Fountain Pen suite includes a precision piston converter for bottled archival inks as well as three standard international noir ink cartridges.`,
  },
  {
    number: "05",
    question: "How will the charge appear on my card statement?",
    answer: `Your credit card statement will display the official merchant descriptor "${siteConfig.descriptor}" alongside your verified order total.`,
  },
  {
    number: "06",
    question: "How do I care for full-grain leather and solid brass?",
    answer: `Our vegetable-tanned full-grain leather journals will naturally develop an exquisite caramel patina over years of handling. For the solid brass desk accessories, you may polish with a microfiber cloth to maintain a mirror shine or allow a stately natural oxidation to form over time.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            Atelier Knowledge &amp; Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.15]">
            Frequently Answered <span className="text-[#C5A059] italic font-normal">Questions</span>
          </h2>
          <p className="text-[#1A202C]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 max-w-xl mx-auto font-normal">
            Paper weights, nib care, shipping, studio trials, and corporate gifting.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Support Box */}
          <div className="lg:col-span-4 rounded-3xl bg-[#121820] text-[#FAF8F5] p-6 sm:p-8 md:p-9 shadow-xl border border-[#C5A059]/30 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059] text-[#121820] text-[0.62rem] font-serif font-bold uppercase tracking-widest mb-4">
                Atelier Concierge
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight mb-3 text-[#FAF8F5]">
                Speak With a Stationery Specialist
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/75 leading-relaxed mb-6 font-normal">
                Our Austin advisors are available to assist with custom monogramming, executive corporate suites, and dispatch tracking.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider text-[#121820] text-xs bg-[#C5A059] hover:bg-[#D4AF37] transition-all py-3.5 px-6 rounded-full shadow-md text-center hover:scale-105"
            >
              Contact Concierge →
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
                    isOpen
                      ? "border-[#C5A059] bg-white shadow-md"
                      : "border-[#C5A059]/20 bg-white/70 hover:border-[#C5A059]/40"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 md:p-6 flex items-center justify-between text-left cursor-pointer bg-transparent border-none focus:outline-none gap-3 sm:gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1">
                      <span className="text-xs font-serif font-bold text-[#C5A059]">
                        {item.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-serif font-bold text-[#121820]">
                        {item.question}
                      </h4>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "bg-[#C5A059] text-[#121820] rotate-45" : "bg-[#C5A059]/15 text-[#121820]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-5 md:px-6 ${
                      isOpen ? "max-h-60 pb-5 sm:pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-[#1A202C]/75 leading-relaxed font-normal pt-2 border-t border-[#C5A059]/15">
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
