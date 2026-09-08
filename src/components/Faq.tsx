"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    num: "01",
    category: "SAFETY & PURITY",
    question: "Are your baby products truly 100% organic and non-toxic?",
    answer:
      "Absolutely. Every textile we use carries GOTS (Global Organic Textile Standard) certification — spun from pure organic cotton with no pesticides, no chemical sizing, and no artificial bleaches. Our teethers combine sustainably harvested untreated beechwood with platinum-cured food-grade silicone, certified completely free from BPA, phthalates, lead, and cadmium. We verify every batch."
  },
  {
    num: "02",
    category: "DELIVERY & SHIPPING",
    question: "How are orders shipped and how long does delivery take?",
    answer: `Every order is hand-inspected, wrapped in our signature nursery keepsake packaging, and dispatched within 24–48 hours. We ship via ${siteConfig.shippingCarrier} with full tracking, and delivery takes ${siteConfig.shippingPeriod} business days. You'll receive your tracking number by email the moment your parcel leaves us.`
  },
  {
    num: "03",
    category: "CARE & WASHING",
    question: "How should I wash and care for organic bibs and wooden teethers?",
    answer:
      "Organic muslin bibs and knitted pieces can be machine-washed on a gentle cold cycle with a mild, fragrance-free detergent and laid flat to air-dry. For beechwood and silicone teethers, simply wipe with a warm damp cloth and mild soap after each use. Never submerge wooden pieces in water or put them in the dishwasher — the natural grain prefers gentle care."
  },
  {
    num: "04",
    category: "RETURNS & REFUNDS",
    question: "What is your 30-Day 'Love-It' return guarantee?",
    answer: `We believe wholeheartedly in every item we make. If for any reason you or your little one aren't completely in love, simply contact our nursery care team at ${siteConfig.email} or call ${siteConfig.phone} within 30 days. We'll arrange a free collection and issue a full refund — no questions, no hassle.`
  },
  {
    num: "05",
    category: "BILLING & PAYMENTS",
    question: "How will this purchase appear on my bank statement?",
    answer: `Your transaction will appear as "${siteConfig.descriptor}" on your bank or credit card statement. We accept all major credit and debit cards, and every transaction is protected with 256-bit SSL encryption for your complete peace of mind.`
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F3EEFF] text-[#1E1040] relative overflow-hidden" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
              A Little Help Along The Way
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-purple-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1040] tracking-tight leading-tight">
            The Things Parents <span className="text-[#7C3AED]">Ask Us</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            From choosing the right material to caring for your little one&apos;s keepsakes — everything you need to know, right here.
          </p>
        </div>

        {/* 35 / 65 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Support Info */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-32">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
              Still have questions?
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-[#1E1040] tracking-tight leading-snug mb-3">
              We&apos;re here whenever you need us.
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
              Our nursery care team can help with materials, sizing, gifting ideas, or anything else on your mind.
            </p>

            <div className="h-[1px] w-16 bg-purple-200 mb-6" />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#7C3AED] hover:text-[#6D28D9] transition-colors mb-3"
            >
              <span>Talk to our team</span>
              <span>→</span>
            </Link>

            <div className="text-[0.72rem] text-gray-500 font-medium mb-3">
              Mon–Fri &middot; 9AM–6PM EST
            </div>

            <p className="font-script text-xl text-[#1E1040] opacity-80 mt-1">
              &ldquo;No question is too small.&rdquo;
            </p>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="border-t border-purple-100">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.num} className="border-b border-purple-100 py-6 sm:py-7">
                    <button
                      onClick={() => toggleItem(idx)}
                      className="w-full flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                        <span className={`text-lg sm:text-xl font-bold tracking-widest transition-colors flex-shrink-0 ${isOpen ? "text-[#7C3AED]" : "text-gray-400 group-hover:text-gray-600"}`}>
                          {item.num}
                        </span>
                        <div className="min-w-0">
                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gray-400 block mb-1">
                            {item.category}
                          </span>
                          <h4 className={`text-base sm:text-lg font-black tracking-tight leading-snug transition-colors ${isOpen ? "text-[#1E1040]" : "text-[#1E1040] group-hover:text-[#7C3AED]"}`}>
                            {item.question}
                          </h4>
                        </div>
                      </div>
                      <span className={`text-xl font-light transition-transform duration-200 flex-shrink-0 mt-0.5 ${isOpen ? "text-[#7C3AED]" : "text-gray-400 group-hover:text-gray-600"}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pt-2 pl-10 sm:pl-12 pr-4 sm:pr-8 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-2xl">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
