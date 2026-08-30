"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    num: "01",
    question: "How do Rosethorne silhouettes fit?",
    answer: "Our garments feature tailored bias-cut silhouettes engineered true to standard designer sizing. We recommend selecting your true size; size up if layering outerwear.",
  },
  {
    id: "faq-2",
    num: "02",
    question: `How does the ${siteConfig.trialPeriod || 14}-day fit guarantee work?`,
    answer: `Experience your pieces in the comfort of your home. If the fit or drape is not absolute perfection, return or exchange within ${siteConfig.trialPeriod || 14} days with 100% money-back coverage.`,
  },
  {
    id: "faq-3",
    num: "03",
    question: "How should I care for pure mulberry silk?",
    answer: "We recommend gentle hand-washing in cool water with a dedicated silk wash or professional eco dry-cleaning. Lightly steam on low to remove creases.",
  },
  {
    id: "faq-4",
    num: "04",
    question: "How quickly will my order arrive?",
    answer: `All orders are carefully inspected and dispatched via ${siteConfig.shippingCarrier} tracked air delivery within 1-2 business days, arriving in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    id: "faq-5",
    num: "05",
    question: "How will the transaction appear on my statement?",
    answer: `For complete privacy and discretion, your billing statement will display the merchant descriptor "${siteConfig.descriptor}".`,
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20" id="faq">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-2 select-none">
            FREQUENTLY ASKED
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12]">
            Questions &amp; <span className="italic text-[#C59B7E]">Answers.</span>
          </h2>
        </div>

        {/* New Minimalist Luxury Accordion Design */}
        <div className="divide-y divide-[#C59B7E]/20 border-y border-[#C59B7E]/20">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => toggle(idx)}
                className={`py-6 sm:py-7 transition-all duration-300 cursor-pointer group ${
                  isOpen ? "bg-[#FAF8F6]/60 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-2xl" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#C59B7E] select-none">
                      {item.num}
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-serif transition-colors duration-200 ${
                        isOpen ? "text-[#18121E] font-bold" : "text-[#18121E]/90 group-hover:text-[#C59B7E]"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#18121E] text-[#E6C2AC] rotate-45 shadow-sm"
                        : "bg-[#FAF8F6] text-[#18121E] border border-[#C59B7E]/30 group-hover:border-[#C59B7E]"
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Animated Dropdown Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-8 sm:pl-12">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {item.answer}
                    </p>
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
