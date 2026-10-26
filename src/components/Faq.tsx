"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All studio orders are packed in protective archival wrapping and dispatched within 1-2 business days. We ship nationwide using ${siteConfig.shippingCarrier}, and delivery typically takes between ${siteConfig.shippingPeriod} business days to reach your doorstep or atelier.`
  },
  {
    question: "Do you offer a satisfaction guarantee on art and craft supplies?",
    answer: `Yes, we back every product with our 60-day satisfaction guarantee. If any paint set, brush suite, or canvas fails to meet your creative standards, simply contact our studio support team for a prompt replacement or refund.`
  },
  {
    question: "Are your pigments, paints, and canvases archival grade?",
    answer: "Absolutely. Our pigments are formulated for ASTM Class I & II lightfastness to resist fading and yellowing. Our canvases are acid-free, double-primed Belgian linens and cotton designed for long-term museum permanence."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card statement will display the billing descriptor as "${siteConfig.descriptor}" for clean and straightforward accounting.`
  },
  {
    question: "How can I contact the North Star studio support team?",
    answer: `You can reach our customer support team Monday through Friday during business hours at ${siteConfig.phone}, or via email at ${siteConfig.email}. We answer all artist inquiries within 24 hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-neutral-bg relative overflow-hidden" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">

          {/* Left Column — Header, Decoration & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow mb-4">Studio Inquiries</span>
            <h2 className="text-2.5xl sm:text-4xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mb-6 sm:mb-10 leading-relaxed">
              Find immediate answers regarding our artist formulations, craft tools, dispatch timelines, and guarantee standards.
            </p>

            {/* Decorative Palette / Brush Illustration */}
            <div className="hidden lg:block relative mb-10">
              <svg viewBox="0 0 200 200" className="w-44 h-44 text-secondary/20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 20 C50 20 10 60 10 110 C10 160 50 190 90 190 C110 190 120 175 120 165 C120 155 110 145 110 135 C110 120 125 110 140 110 L160 110 C180 110 190 95 190 80 C190 45 150 20 100 20 Z M45 90 C37 90 30 83 30 75 C30 67 37 60 45 60 C53 60 60 67 60 75 C60 83 53 90 45 90 Z M85 60 C77 60 70 53 70 45 C70 37 77 30 85 30 C93 30 100 37 100 45 C100 53 93 60 85 60 Z M135 65 C127 65 120 58 120 50 C120 42 127 35 135 35 C143 35 150 42 150 50 C150 58 143 65 135 65 Z" />
              </svg>
            </div>

            {/* CTA Box */}
            <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Need Custom Advice?</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                  Our dedicated studio support team is here to assist with product specs, bulk orders, or recommendations.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-secondary text-primary font-bold text-xs sm:text-sm px-5 py-3 rounded-full hover:bg-white transition-all shadow-md"
                >
                  Contact Our Atelier
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col gap-3.5 sm:gap-4">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen ? "border-secondary/40 shadow-lg" : "border-black/5 hover:border-black/10 hover:shadow-sm"
                  }`}
                >
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-4 sm:p-6 md:p-7 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-3 sm:gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className={`text-xs font-black tracking-widest transition-colors duration-300 flex-shrink-0 ${
                        isOpen ? "text-secondary" : "text-neutral-text/30"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <strong className="text-xs sm:text-sm md:text-base font-extrabold text-primary leading-snug">
                        {item.question}
                      </strong>
                    </div>

                    {/* Animated Icon */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-lg font-light leading-none transition-all duration-300 ${
                        isOpen
                          ? "bg-secondary text-primary rotate-45 shadow-md font-bold"
                          : "bg-neutral-bg border border-black/10 text-primary hover:border-secondary/40 hover:text-secondary rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* FAQ Body */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-6 md:px-7"
                    style={{
                      maxHeight: isOpen ? "400px" : "0px",
                    }}
                  >
                    <div className="pb-5 sm:pb-7 text-xs sm:text-sm text-neutral-text/75 leading-relaxed border-t border-black/5 pt-4 sm:pt-5 pl-0 sm:pl-10">
                      {item.answer}
                    </div>
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
