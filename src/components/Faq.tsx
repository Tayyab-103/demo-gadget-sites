"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    question: "How does the 14-day trial & return policy work?",
    answer: `Outfit your crew with confidence. If you're not completely satisfied with the uniform fit, fabric, or finish, return items within ${siteConfig.trialPeriod || 14} days for a full refund.`,
  },
  {
    number: "02",
    question: "What fabrics and construction are used in our uniforms?",
    answer: "Our commercial workwear is manufactured using soil-release poly-cotton poplin, rugged ripstop twill, and weatherproof ANSI-rated polyester shells with reinforced double and triple-stitched stress points.",
  },
  {
    number: "03",
    question: "How quickly does my order ship?",
    answer: `Orders are packed and dispatched within 1-2 business days from our distribution center via ${siteConfig.shippingCarrier}, typically arriving in ${siteConfig.shippingPeriod} business days with tracking.`,
  },
  {
    number: "04",
    question: "How do I choose the right uniform sizing for my crew?",
    answer: "Our uniforms fit true to standard US commercial sizing with relaxed articulated cuts designed for ease of movement over base layers and through full work shifts.",
  },
  {
    number: "05",
    question: "How will the charge appear on my card statement?",
    answer: `Your credit card statement will display the transaction descriptor "${siteConfig.descriptor}".`,
  },
  {
    number: "06",
    question: "How should our facility wash and care for the uniforms?",
    answer: "Our uniforms are commercial-laundry friendly. Machine wash warm with like colors; tumble dry medium or hang dry to maintain soil-release properties and seam durability.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f2b48] leading-[1.08]">
            Frequently Asked <span className="text-[#f59e0b]">Questions</span>
          </h2>
          <p className="text-black/70 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Common questions regarding commercial uniform sizing, materials, shipping, and returns.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Support Box */}
          <div className="lg:col-span-4 rounded-3xl bg-[#0b2238] text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between border border-[#0f2b48]/40">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-white">
                Have a Question?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                Our uniform support desk is ready to assist you with sizing recommendations, volume orders, and carrier tracking.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-[#0b2238] text-xs bg-[#f59e0b] hover:bg-[#d97706] transition-all py-3.5 px-6 rounded-xl shadow-sm text-center"
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
                    isOpen ? "border-[#0f2b48]/30 bg-[#f8fafc] shadow-sm" : "border-black/8 bg-white hover:border-[#0f2b48]/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer bg-transparent border-none focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-bold text-[#f59e0b]">
                        {item.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#0f2b48]">
                        {item.question}
                      </h4>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "bg-[#0f2b48] text-white rotate-45" : "bg-black/5 text-black"
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
