"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface FaqGroup {
  id: string;
  categoryTitle: string;
  categoryIcon: React.ReactNode;
  cardLabel: string;
  questions: {
    q: string;
    a: string;
  }[];
}

const faqCategories: FaqGroup[] = [
  {
    id: "received",
    categoryTitle: "I have received my order",
    categoryIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    cardLabel: "I have received my order",
    questions: [
      {
        q: "I received my package but an item was damaged, what should I do?",
        a: "If your order arrives damaged, message our concierge team at support@quillhaven.com with your order number. We will dispatch a complimentary replacement within 24 hours.",
      },
      {
        q: "How do I insert the ink cartridges or use the piston converter?",
        a: "Unscrew the barrel from the fountain pen grip. Push standard cartridges firmly into the feed, or insert the included piston converter to draw bottled ink into the chamber.",
      },
    ],
  },
  {
    id: "waiting",
    categoryTitle: "I'm waiting for a delivery",
    categoryIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="13" x="1" y="3" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    cardLabel: "I'm waiting for a delivery",
    questions: [
      {
        q: "Where is my package and how do I track it?",
        a: `Orders are wax-sealed and dispatched within 1 business day. You will receive an email with your official ${siteConfig.shippingCarrier} express tracking link immediately upon shipment.`,
      },
      {
        q: "When will my package arrive?",
        a: `Standard express delivery arrives within ${siteConfig.shippingPeriod} business days across the country.`,
      },
    ],
  },
  {
    id: "return",
    categoryTitle: "I want to return or exchange an item",
    categoryIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
    cardLabel: "I want to return or exchange an item",
    questions: [
      {
        q: "How does the 14-day studio practice trial work?",
        a: "Experience our pens, journals, and desk suites in your daily writing rituals. If not completely satisfied, return within 14 days for a 100% full refund with zero hassle.",
      },
      {
        q: "How long does it take for the refund to appear?",
        a: `Refunds are processed within 2-3 business days upon receipt at our Austin atelier. Your statement descriptor will show "${siteConfig.descriptor}".`,
      },
    ],
  },
  {
    id: "change",
    categoryTitle: "I want to change delivery information",
    categoryIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
    ),
    cardLabel: "I want to change delivery information",
    questions: [
      {
        q: "Can I update my shipping address after placing an order?",
        a: "Yes. Reach out to our concierge within 2 hours of ordering and we will gladly update the delivery destination before carrier handover.",
      },
      {
        q: "Can I modify my suite items or add extra ink before dispatch?",
        a: "Yes. Message our support team with your order number to add products or adjust bundle sizes before wax-sealing.",
      },
    ],
  },
];

export default function Faq() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({
    "0": true,
  });

  const handleCardClick = (catId: string) => {
    if (selectedCategory === catId) {
      // Toggle close
      setSelectedCategory(null);
    } else {
      setSelectedCategory(catId);
      setOpenQuestions({ "0": true });
    }
  };

  const toggleQuestion = (idx: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const activeGroup = faqCategories.find((cat) => cat.id === selectedCategory);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            Atelier Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-tight mb-2">
            Questions?
          </h2>
          <p className="text-lg sm:text-xl font-serif text-[#1A202C]/70 font-normal">
            We&apos;re here to help. Select a topic below.
          </p>
        </div>

        {/* TOP 4-COLUMN INTERACTIVE CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {faqCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCardClick(cat.id)}
                className={`group flex flex-col justify-between p-5 sm:p-6 rounded-3xl transition-all duration-300 text-left cursor-pointer min-h-[130px] sm:min-h-[140px] relative overflow-hidden ${
                  isSelected
                    ? "bg-[#121820] text-[#FAF8F5] border-2 border-[#C5A059] shadow-xl scale-[1.02] ring-4 ring-[#C5A059]/20"
                    : "bg-white text-[#121820] border border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-lg hover:-translate-y-1"
                }`}
                aria-expanded={isSelected}
              >
                {/* Active Indicator Pulse */}
                {isSelected && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#C5A059] text-[#121820] px-2.5 py-0.5 rounded-full text-[0.62rem] font-serif font-bold uppercase tracking-wider shadow-xs animate-fadeIn">
                    <span>Active</span>
                    <span className="text-xs leading-none">▼</span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 mb-3 shadow-2xs ${
                    isSelected
                      ? "bg-[#C5A059] text-[#121820]"
                      : "bg-[#C5A059]/15 group-hover:bg-[#C5A059] group-hover:text-[#121820] text-[#C5A059]"
                  }`}
                >
                  {cat.categoryIcon}
                </div>

                {/* Card Label */}
                <div
                  className={`font-serif font-bold text-sm sm:text-base leading-snug tracking-tight transition-colors ${
                    isSelected ? "text-[#FAF8F5]" : "text-[#121820] group-hover:text-[#C5A059]"
                  }`}
                >
                  {cat.cardLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* REVEALABLE FAQ CONTAINER (Smooth Expand Animation) */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            selectedCategory && activeGroup
              ? "max-h-[800px] opacity-100 translate-y-0 pt-4"
              : "max-h-0 opacity-0 translate-y-4"
          }`}
        >
          {activeGroup && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/40 shadow-xl space-y-4">
              
              {/* Active Category Title & Collapse Action */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C5A059]/20 text-[#121820] flex items-center justify-center">
                    {activeGroup.categoryIcon}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820]">
                    {activeGroup.categoryTitle}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs font-serif font-semibold text-[#121820]/50 hover:text-[#121820] transition-colors cursor-pointer"
                >
                  Collapse ✕
                </button>
              </div>

              {/* Accordion Questions */}
              <div className="space-y-3 pt-1">
                {activeGroup.questions.map((item, qIdx) => {
                  const isOpen = !!openQuestions[qIdx];

                  return (
                    <div
                      key={qIdx}
                      className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                        isOpen
                          ? "bg-[#FAF8F5] border-[#C5A059] shadow-sm"
                          : "bg-white border-[#C5A059]/20 hover:border-[#C5A059]/50"
                      }`}
                    >
                      <button
                        onClick={() => toggleQuestion(qIdx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer bg-transparent border-none text-[#121820] gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="text-xs sm:text-sm font-serif font-bold leading-relaxed text-[#121820]">
                          {item.q}
                        </span>

                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 flex-shrink-0 ${
                            isOpen
                              ? "bg-[#C5A059] text-[#121820] rotate-45"
                              : "bg-[#C5A059]/15 text-[#121820]"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-5 ${
                          isOpen ? "max-h-48 pb-4 sm:pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs sm:text-sm text-[#1A202C]/75 leading-relaxed font-normal pt-2 border-t border-[#C5A059]/15">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>

        {/* Helper text when no category is selected */}
        {!selectedCategory && (
          <div className="text-center pt-2">
            <span className="text-xs font-serif text-[#121820]/45 italic">
              Click any topic card above to view answers &amp; guidance ✦
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
