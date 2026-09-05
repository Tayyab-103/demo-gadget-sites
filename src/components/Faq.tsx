"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface FaqItem {
  id: string;
  category: "flight" | "guarantee" | "shipping";
  categoryLabel: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "carryon",
    category: "flight",
    categoryLabel: "Carry-On Compliance",
    question: "Is the Carry-On compliant with major airlines?",
    answer: "Yes, dimensions satisfy standard FAA and IATA overhead bin requirements across domestic and international airlines.",
  },
  {
    id: "trial",
    category: "guarantee",
    categoryLabel: "Flight Trial",
    question: `How does the ${siteConfig.trialPeriod || 14}-day flight trial work?`,
    answer: `Test our gear on your trips. If not completely satisfied, return within ${siteConfig.trialPeriod || 14} days for a 100% full refund with zero restocking fees.`,
  },
  {
    id: "tsa",
    category: "flight",
    categoryLabel: "Security & Locks",
    question: "How do the TSA combination locks work?",
    answer: "Integrated dual latches feature programmable 3-digit combination dials and TSA master keyways for seamless airport security inspections.",
  },
  {
    id: "shipping",
    category: "shipping",
    categoryLabel: "Dispatch & Tracking",
    question: "How fast does my order ship?",
    answer: `Orders dispatch within 1 business day via ${siteConfig.shippingCarrier} with full tracking, arriving within ${siteConfig.shippingPeriod} business days.`,
  },
  {
    id: "billing",
    category: "shipping",
    categoryLabel: "Card Statement",
    question: "How will the charge appear on my statement?",
    answer: `Your statement will display "${siteConfig.descriptor}" alongside your verified order total.`,
  },
  {
    id: "care",
    category: "guarantee",
    categoryLabel: "Materials & Care",
    question: "How do I care for aluminum and leather gear?",
    answer: "Wipe aluminum with a damp microfiber cloth. Full-grain leather can be conditioned with standard leather balm.",
  },
];

const categories = [
  { key: "all", label: "All Questions" },
  { key: "flight", label: "✈ Flight & Carry-On" },
  { key: "guarantee", label: "🛡️ Guarantee & Locks" },
  { key: "shipping", label: "📦 Shipping & Billing" },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("carryon");

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0D1B2A] leading-tight uppercase">
            FAQ
          </h2>
          <p className="text-[#18222F]/70 text-xs sm:text-sm md:text-base leading-relaxed mt-2.5 max-w-lg mx-auto font-normal">
            Frequently answered questions about sizing, security, shipping, and warranty.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-[#0D1B2A] text-white shadow-md border border-[#C87D3B] scale-105"
                    : "bg-white text-[#18222F]/70 border border-[#C87D3B]/20 hover:border-[#C87D3B] hover:text-[#0D1B2A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleFaq(item.id)}
                className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isOpen
                    ? "bg-white border-[#C87D3B] shadow-xl ring-2 ring-[#C87D3B]/20"
                    : "bg-white/80 border-[#C87D3B]/20 hover:border-[#C87D3B]/50 hover:bg-white hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#C87D3B] bg-[#F8F6F0] px-2.5 py-0.5 rounded-full border border-[#C87D3B]/25">
                      {item.categoryLabel}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
                        isOpen ? "bg-[#0D1B2A] text-white rotate-45" : "bg-[#F8F6F0] text-[#0D1B2A]"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0D1B2A] leading-snug tracking-tight">
                    {item.question}
                  </h3>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pt-3 opacity-100" : "max-h-0 pt-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-[#18222F]/75 leading-relaxed font-normal pt-2 border-t border-[#C87D3B]/15">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
