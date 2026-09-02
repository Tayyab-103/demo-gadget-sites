"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const categories = ["All", "Care & Maintenance", "Lifetime Guarantee", "Shipping & Delivery", "Sharpening & Tech"];

const faqItems = [
  {
    id: "care-1",
    number: "01",
    category: "Care & Maintenance",
    question: "How do I care for hand-forged carbon steel tools?",
    answer:
      "Wipe off soil with a dry cloth after use and occasionally apply a light coat of mineral or linseed oil to protect the steel and wooden handle.",
    tip: "A yearly coat of boiled linseed oil preserves the timber grain against moisture.",
  },
  {
    id: "guarantee-1",
    number: "02",
    category: "Lifetime Guarantee",
    question: "What is covered under the Thornwick Lifetime Warranty?",
    answer:
      "Every forged blade and timber joint is covered for life against structural failure under standard garden use. If a tool fails, we will repair or replace it.",
    tip: "Our stamped foundry hallmark serves as lifetime proof of authenticity.",
  },
  {
    id: "shipping-1",
    number: "03",
    category: "Shipping & Delivery",
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `Orders ship from our workshop via ${siteConfig.shippingCarrier} within 1-2 business days, arriving in ${siteConfig.shippingPeriod} business days with tracking included.`,
    tip: "Shipped in 100% plastic-free recyclable kraft packaging.",
  },
  {
    id: "guarantee-2",
    number: "04",
    category: "Lifetime Guarantee",
    question: "Do you offer a trial period or money-back guarantee?",
    answer: `Yes. We offer an unconditional 60-day garden trial. If you are not completely satisfied, contact us at ${siteConfig.email} for a full refund.`,
    tip: "60 full days of risk-free soil testing.",
  },
  {
    id: "tech-1",
    number: "05",
    category: "Sharpening & Tech",
    question: "Can I re-sharpen the bypass pruner blades and trowel edges?",
    answer:
      "Yes. Our Japanese SK5 and manganese steel can easily be honed with a standard whetstone or diamond file at a 20° to 25° bevel angle.",
    tip: "Use a 1000-grit whetstone along the factory bevel for a razor edge.",
  },
  {
    id: "care-2",
    number: "06",
    category: "Care & Maintenance",
    question: "Why do you use solid ash hardwood for handles?",
    answer:
      "American White Ash absorbs planting vibrations, reduces wrist fatigue, and resists splitting under heavy leverage.",
    tip: "Hand-turned on traditional wood lathes with natural oil finish.",
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
    <section className="py-16 md:py-20 bg-[#FAF9F6] relative overflow-hidden border-b border-black/5" id="faq">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#265C1E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#265C1E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
              FOUNDRY KNOWLEDGE BASE
            </span>
            <span className="w-6 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
            Frequently Asked <span className="text-[#265C1E]">Questions</span>
          </h2>

          <p className="mt-2.5 text-[#11281A]/70 text-xs sm:text-sm leading-relaxed">
            Quick answers about our metallurgy, handle care, and lifetime foundry warranty.
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
                    ? "bg-[#132B1C] text-white shadow-sm"
                    : "bg-white text-[#11281A]/70 border border-black/5 hover:border-[#265C1E]/30 hover:text-[#11281A]"
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
                    ? "bg-white border-[#265C1E]/30 shadow-md ring-1 ring-[#265C1E]/10"
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
                          ? "bg-[#265C1E] text-white"
                          : "bg-[#FAF9F6] text-[#265C1E]"
                      }`}
                    >
                      {faq.number}
                    </span>

                    {/* Question Title & Category */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#265C1E]">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#11281A] tracking-tight leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#132B1C] text-white rotate-180"
                        : "bg-[#FAF9F6] text-[#11281A]/60 hover:text-[#11281A]"
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
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-black/5 animate-fadeIn">
                    <p className="text-[#11281A]/80 text-xs sm:text-sm leading-relaxed mb-5">
                      {faq.answer}
                    </p>

                    {/* Pro Tip Box */}
                    {faq.tip && (
                      <div className="bg-[#F4F8F3] border border-[#265C1E]/15 rounded-xl p-4 flex items-start gap-3">
                        <span className="text-base flex-shrink-0">🌿</span>
                        <div className="text-xs text-[#11281A]/85 leading-relaxed">
                          <strong className="text-[#265C1E] uppercase tracking-wider block text-[0.62rem] font-bold mb-0.5">
                            Foundry Pro Tip
                          </strong>
                          {faq.tip}
                        </div>
                      </div>
                    )}
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
