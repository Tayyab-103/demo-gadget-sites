"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const categories = ["All", "Care", "Guarantee", "Shipping"];

const faqItems = [
  {
    id: "care-1",
    number: "01",
    category: "Care",
    question: "How do I care for my garden tools?",
    answer:
      "Knock off soil and wipe tools dry after each use. A few drops of light oil on blades and the pruner pivot every few weeks keeps them sharp, smooth and rust-free.",
  },
  {
    id: "guarantee-1",
    number: "02",
    category: "Guarantee",
    question: "What if a tool arrives damaged?",
    answer:
      `Contact us at ${siteConfig.email} or ${siteConfig.phone} with a photo and your order number and we will make it right with a replacement or refund.`,
  },
  {
    id: "shipping-1",
    number: "03",
    category: "Shipping",
    question: "How fast is shipping and delivery?",
    answer: `Orders dispatch within 1-2 business days via ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days with tracking.`,
  },
  {
    id: "guarantee-2",
    number: "04",
    category: "Guarantee",
    question: "Do you offer a money-back trial?",
    answer: `Yes. Every order includes a ${siteConfig.trialPeriod}-day satisfaction trial. If you're not happy, contact us at ${siteConfig.email} to arrange a return.`,
  },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "All"
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-neutral-bg relative overflow-hidden border-b border-black/5" id="faq">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 h-[1.5px] bg-secondary/50 rounded-full" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-secondary">
              COMMON QUESTIONS
            </span>
            <span className="w-6 h-[1.5px] bg-secondary/50 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-text uppercase tracking-tight font-sans">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>

          <p className="mt-2.5 text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
            Quick answers about tool care, shipping, and returns.
          </p>
        </div>

        {/* Centered Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(0);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-neutral-text/70 border border-black/5 hover:border-secondary/30 hover:text-neutral-text"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIdx === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-secondary/30 shadow-md ring-1 ring-secondary/10"
                    : "bg-white/80 hover:bg-white border-black/5 hover:border-black/10 shadow-xs"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Index Pill */}
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black font-mono flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-secondary text-white"
                          : "bg-neutral-bg text-secondary"
                      }`}
                    >
                      {faq.number}
                    </span>

                    {/* Question Title & Category */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-secondary">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-neutral-text tracking-tight leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-neutral-bg text-neutral-text/60 hover:text-neutral-text"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-black/5 animate-fadeIn">
                    <p className="text-neutral-text/80 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
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
