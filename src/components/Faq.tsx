"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    question: "How does the 14-day return policy work?",
    answer: `Try our apparel during your workouts. If you're not satisfied with the fit or quality, return it within ${siteConfig.trialPeriod || 14} days for a full refund.`,
  },
  {
    number: "02",
    question: "What fabrics are used in our apparel?",
    answer: "Our products are made from breathable four-way stretch polyester/spandex blends, soft fleece, and cushioned knit fabrics with reinforced flatlock stitching.",
  },
  {
    number: "03",
    question: "How quickly does my order ship?",
    answer: `Orders are packed and dispatched within 1-2 business days from Austin, TX via ${siteConfig.shippingCarrier}, typically arriving in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    number: "04",
    question: "How do I choose the right size?",
    answer: "Our items fit true to standard US athletic sizing. For a snug compression fit, choose your standard size; for a more relaxed feel, order one size up.",
  },
  {
    number: "05",
    question: "How will the charge appear on my card statement?",
    answer: `Your credit card statement will display the transaction descriptor "${siteConfig.descriptor}".`,
  },
  {
    number: "06",
    question: "How should I care for and wash the apparel?",
    answer: "Machine wash cold with similar colors. Tumble dry on low heat or hang dry to maintain fabric elasticity and fit.",
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
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0d3b2e] leading-[1.08]">
            Frequently Asked <span className="text-[#0d4a36]">Questions</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Common questions about sizing, materials, shipping, and returns.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Support Box */}
          <div className="lg:col-span-4 rounded-3xl bg-[#0a2e22] text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between border border-[#0d4a36]/40">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-white">
                Have a Question?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                Our support team is ready to assist you with sizing recommendations, orders, or tracking details.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-[#0a2e22] text-xs bg-white hover:bg-[#f2f7f4] transition-all py-3.5 px-6 rounded-xl shadow-sm text-center"
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
                    isOpen ? "border-[#0d4a36]/30 bg-[#f2f7f4] shadow-sm" : "border-black/8 bg-white hover:border-[#0d4a36]/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer bg-transparent border-none focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-bold text-[#0d4a36]">
                        {item.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#0d3b2e]">
                        {item.question}
                      </h4>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "bg-[#0d4a36] text-white rotate-45" : "bg-black/5 text-black"
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
