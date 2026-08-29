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
    question: "Is the Aviator Carry-On compliant with all major airlines?",
    answer: "Yes. Dimensions (21.5\" x 14\" x 9\" including wheels) strictly satisfy FAA and IATA domestic & international overhead bin standards across Delta, United, American, Lufthansa, and Emirates.",
  },
  {
    id: "trial",
    category: "guarantee",
    categoryLabel: "Flight Trial",
    question: `How does the ${siteConfig.trialPeriod || 14}-day worldwide flight trial work?`,
    answer: `Pack and travel with our gear on your upcoming trips. If it doesn't elevate your transit comfort, return it within ${siteConfig.trialPeriod || 14} days for a 100% full refund with zero restocking fees.`,
  },
  {
    id: "tsa",
    category: "flight",
    categoryLabel: "Security & Locks",
    question: "How do the integrated dual TSA combination locks operate?",
    answer: "The dual recessed latches feature programmable 3-digit combination dials and TSA master keyways, allowing security agents to inspect baggage without damaging locks.",
  },
  {
    id: "shipping",
    category: "shipping",
    categoryLabel: "Dispatch & Tracking",
    question: "How fast will my order ship from the Austin facility?",
    answer: `Orders are calibrated and dispatched within 1 business day. We ship via ${siteConfig.shippingCarrier} priority air with tracked delivery arriving in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    id: "billing",
    category: "shipping",
    categoryLabel: "Card Statement",
    question: "How will the transaction appear on my billing statement?",
    answer: `Your card statement will clearly display the official merchant descriptor "${siteConfig.descriptor}" alongside your verified order total.`,
  },
  {
    id: "care",
    category: "guarantee",
    categoryLabel: "Materials & Care",
    question: "How do I maintain aluminum alloy and Italian full-grain leather?",
    answer: "Aluminum shells can be wiped clean with a damp microfiber cloth, while Italian vegetable-tanned leather naturally develops a rich patina and can be nourished with standard leather balms.",
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
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
            <span>✈</span>
            Traveler Guidance &amp; Policies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
            Frequently Answered <span className="text-[#C87D3B] font-light italic lowercase">Questions</span>
          </h2>
          <p className="text-[#18222F]/70 text-xs sm:text-sm md:text-base leading-relaxed mt-2.5 max-w-lg mx-auto font-normal">
            Everything you need to know about overhead sizing, TSA security, shipping, and warranty.
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
