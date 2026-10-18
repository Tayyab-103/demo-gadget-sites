"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface FaqItem {
  id: string;
  category: "sizing" | "durability" | "shipping";
  categoryLabel: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "sizing",
    category: "sizing",
    categoryLabel: "Sizing",
    question: "How do your sizes run for kids and adults?",
    answer: "Our clothing runs true to size with a relaxed, comfortable fit. For growing kids, we recommend sizing up if they are between sizes. Each product page includes a size guide for babies, kids, and adults.",
  },
  {
    id: "trial",
    category: "sizing",
    categoryLabel: "Guarantee",
    question: `How does the ${siteConfig.trialPeriod || 14}-day happy fit guarantee work?`,
    answer: `If anything doesn't fit or your family isn't happy for any reason, return or exchange it within ${siteConfig.trialPeriod || 14} days for a 100% money-back refund or a different size.`,
  },
  {
    id: "laundry",
    category: "durability",
    categoryLabel: "Care",
    question: "How should I wash and care for my clothes?",
    answer: "Machine wash cold with like colors and tumble dry low. Our fabrics are pre-shrunk and colorfast, so they keep their size, softness, and color through regular family laundry.",
  },
  {
    id: "shipping",
    category: "shipping",
    categoryLabel: "Shipping",
    question: "How quickly will my order ship?",
    answer: `Dispatched within 1 business day via ${siteConfig.shippingCarrier} with tracked delivery arriving in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    id: "billing",
    category: "shipping",
    categoryLabel: "Billing",
    question: "How will this charge appear on my card statement?",
    answer: `Your billing statement will display the merchant descriptor "${siteConfig.descriptor}".`,
  },
  {
    id: "bundles",
    category: "durability",
    categoryLabel: "Sizes",
    question: "Do you carry sizes for the whole family?",
    answer: "Yes. We carry sizes for babies, toddlers, kids, teens, women, and men, including matching family sets so everyone can coordinate for photos, holidays, and outings.",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "sizing", label: "Sizing" },
  { key: "durability", label: "Care & Sizes" },
  { key: "shipping", label: "Shipping" },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("sizing");

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200 select-none" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 select-none">
            Family Shopping Help
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight mb-4">
            Frequently Answered Questions.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-md mx-auto">
            Quick answers on sizing, garment care, shipping, and returns.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-[#0A0F1D] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#0A0F1D] hover:text-[#0A0F1D]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleFaq(item.id)}
                className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isOpen
                    ? "bg-white border-[#0A0F1D] shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className="text-[0.62rem] font-mono font-bold uppercase tracking-wider text-slate-500 bg-[#F8FAFC] px-2.5 py-0.5 rounded-full border border-slate-200">
                      {item.categoryLabel}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 ${
                        isOpen ? "bg-[#0A0F1D] text-white rotate-45" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0A0F1D] leading-snug">
                    {item.question}
                  </h3>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-32 pt-2.5 opacity-100" : "max-h-0 pt-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2.5 border-t border-slate-100">
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
