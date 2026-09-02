"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `Orders ship via ${siteConfig.shippingCarrier} nationwide within 1-2 business days, with typical delivery in ${siteConfig.shippingPeriod} business days.`
  },
  {
    question: "Do you offer an in-home satisfaction guarantee?",
    answer: "Yes. We offer a 60-day in-home satisfaction guarantee. Contact our concierge team for an effortless return and full refund."
  },
  {
    question: "Are your home furnishings covered by a warranty?",
    answer: "Yes. Every Alderwyn piece includes a 1-year craftsmanship warranty covering materials, stitching, and joinery."
  },
  {
    question: "How do I care for and clean my Alderwyn pieces?",
    answer: "Spot-clean or dry-clean throw blankets. Gently wipe ceramic lamps and travertine trays with a dry microfiber cloth."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card statement will display the descriptor "${siteConfig.descriptor}".`
  },
  {
    question: "How do I contact customer support or design advice?",
    answer: `Reach our concierge team Monday through Friday at ${siteConfig.phone}, or email us at ${siteConfig.email}.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-neutral-bg relative" id="faq">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6">
          {/* Black Pill Badge with '05' */}
          <span className="bg-primary text-white font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl px-3.5 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
            05
          </span>

          {/* Heading */}
          <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-primary leading-none break-words">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-px bg-black/10 mb-6 sm:mb-10 md:mb-12" />

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
