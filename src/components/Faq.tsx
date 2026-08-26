"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All orders are processed and dispatched within 1-2 business days. We ship using ${siteConfig.shippingCarrier} nationwide, and delivery typically takes between ${siteConfig.shippingPeriod} business days to arrive securely at your door.`
  },
  {
    question: "Do you offer an in-home satisfaction guarantee?",
    answer: `Yes, we back all our home furnishings with a 60-day in-home satisfaction guarantee. If a piece does not completely harmonize with your space, contact our concierge support team via email or phone to initiate a hassle-free return and refund.`
  },
  {
    question: "Are your home furnishings covered by a warranty?",
    answer: "Yes. Every Alderwyn piece ships with a comprehensive 1-year manufacturer's craftsmanship warranty covering materials, textile stitching, joinery, and electrical components against defects."
  },
  {
    question: "How do I care for and clean my Alderwyn pieces?",
    answer: "Our woven throw blankets can be gently spot-cleaned with mild wool-safe detergent or dry cleaned. For ceramic lamps and travertine catchalls, gently wipe with a soft, dry or slightly damp microfiber cloth. Avoid abrasive chemical cleansers."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card statement will clearly display the charge descriptor as "${siteConfig.descriptor}" to ensure a clean, recognizable transaction record.`
  },
  {
    question: "How do I contact customer support or design advice?",
    answer: `You can reach our dedicated customer care team Monday through Friday during regular business hours at ${siteConfig.phone}, or email us at ${siteConfig.email}. We respond to all inquiries within 24 business hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-neutral-bg relative" id="faq">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header (Matching Reference Design Language) */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6">
          {/* Black Pill Badge with '05' */}
          <span className="bg-primary text-white font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
            05
          </span>

          {/* Heading */}
          <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-primary leading-none">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-px bg-black/10 mb-8 sm:mb-12 md:mb-14" />

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3.5 sm:gap-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-primary shadow-md" : "border-black/5 hover:border-black/15 shadow-2xs"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 md:p-7 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-3 sm:gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-6">
                    <span className="font-serif text-sm sm:text-base md:text-lg font-bold text-primary tracking-wider flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-primary uppercase tracking-[0.02em] leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <span
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-45 shadow-sm"
                        : "bg-neutral-bg text-primary border border-black/10"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Body */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out px-5 sm:px-6 md:px-7"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                  }}
                >
                  <div className="pb-6 sm:pb-7 text-xs sm:text-sm text-neutral-text/75 leading-relaxed border-t border-black/5 pt-4 sm:pt-5 pl-7 sm:pl-12">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
