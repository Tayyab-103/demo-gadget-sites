"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What makes your botanical inks archival?",
    answer:
      "Our botanical inks are milled in small batches using pure organic pigments in natural binders, tested for lightfastness and non-bleeding permanency.",
  },
  {
    question: "How are your cotton sketchbooks crafted?",
    answer:
      "Each journal is hand-bound with 100% acid-free, cold-pressed 300 GSM cotton paper, engineered for heavy watercolor washes and mixed media.",
  },
  {
    question: "How fast is delivery?",
    answer: `Orders ship nationwide via ${siteConfig.shippingCarrier} within 1–2 business days, typically arriving in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    question: "How does the 60-Day Guarantee work?",
    answer:
      "Test our supplies in your studio. If you're not completely satisfied within 60 days, contact us for a hassle-free replacement or full refund.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F5] relative overflow-hidden border-b border-black/5" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14">
          <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2 sm:mb-3 inline-block">
            Frequently Asked
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary tracking-tight">
            Common <span className="text-secondary">Questions</span>
          </h2>
        </div>

        {/* Accordion Cards List */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-black/15 shadow-md"
                    : "border-black/8 hover:border-black/15"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left cursor-pointer focus:outline-none gap-3 sm:gap-4"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-primary tracking-tight pr-2">
                    {item.question}
                  </h3>

                  {/* Toggle Indicator Button */}
                  <span
                    className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-[#FAF9F5] text-primary border border-black/10"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#5A554E] leading-relaxed border-t border-black/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
