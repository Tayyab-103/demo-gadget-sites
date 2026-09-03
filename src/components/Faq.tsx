"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How do your sizes fit across adults, youth, and children?",
    answer: "Our pieces are tailored with a classic, relaxed modern fit that runs true-to-size. For a standard tailored look, select your regular size. If you prefer a generous oversized drape for lounging or layering, order one size up. Comprehensive measurements are provided on each product page.",
  },
  {
    question: "How should I launder and care for Everden organic fabrics?",
    answer: "To preserve organic fiber softness and shape, machine wash on cold with like colors using mild detergent. Tumble dry low or air dry on a line. Our cottons and French terry weaves are pre-shrunk to prevent unwanted tightening.",
  },
  {
    question: "What shipping carrier do you use and what are the delivery times?",
    answer: `All orders are dispatched from our domestic fulfillment center within 1-2 business days. We partner with ${siteConfig.shippingCarrier} to provide reliable tracked delivery nationwide within ${siteConfig.shippingPeriod} business days.`,
  },
  {
    question: "How does the 60-day satisfaction & size exchange guarantee work?",
    answer: "Try your new pieces at home. If you are not completely thrilled with the fit, fabric, or color, contact our team within 60 days of delivery for a seamless size exchange or 100% money-back refund.",
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card transaction will display the clean descriptor as "${siteConfig.descriptor}" for clear, recognizable billing records.`,
  },
  {
    question: "How can I contact customer support for sizing or styling advice?",
    answer: `Our family wardrobe concierge is available Monday through Friday via phone at ${siteConfig.phone} or email at ${siteConfig.email}. We respond to all queries within 24 hours.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-b border-black/[0.06]" id="faq">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            Help &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-text/65 text-sm md:text-base mt-3 max-w-lg mx-auto">
            Everything you need to know about fabric care, family sizing, shipping timelines, and our 60-day exchange guarantee.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-3.5">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-secondary/50 shadow-xs" : "border-black/[0.06] hover:border-black/15"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-bold text-secondary font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-primary">
                      {item.question}
                    </span>
                  </div>

                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all flex-shrink-0 ${
                    isOpen ? "bg-secondary text-white rotate-45" : "bg-[#FAF8F5] text-primary"
                  }`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-neutral-text/70 text-xs sm:text-sm leading-relaxed border-t border-black/[0.04]">
                    <div className="pl-7 pt-2">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="text-center mt-10 text-xs text-neutral-text/60">
          Have an unanswered question? Email our concierge team at <strong className="text-primary font-bold">{siteConfig.email}</strong> or call <strong className="text-primary font-bold">{siteConfig.phone}</strong>.
        </div>

      </div>
    </section>
  );
}
