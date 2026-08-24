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
    question: "Are your baby products 100% safe, organic, and non-toxic?",
    answer:
      "Every textile is spun from 100% GOTS-certified organic cotton muslin without chemical sizing or artificial bleaches. Our sensory teethers and rattles are crafted with sustainably harvested untreated beechwood and food-grade platinum-cured silicone — completely free from BPA, phthalates, lead, and cadmium."
  },
  {
    num: "02",
    category: "DELIVERY & SHIPPING",
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All orders are lovingly hand-inspected, wrapped with nursery keepsake care, and dispatched within 24-48 hours. We ship using ${siteConfig.shippingCarrier} nationwide, with delivery taking between ${siteConfig.shippingPeriod} business days.`
  },
  {
    num: "03",
    category: "WASHING & CARE",
    question: "How do I care for and clean the organic bibs and wooden teethers?",
    answer:
      "Organic cotton muslin bibs and knits can be machine-washed on a gentle cold cycle with mild detergent and air-dried flat. For natural beechwood and silicone teethers, simply wipe down with a damp cloth and warm mild soapy water. Never submerge wooden toys in boiling water."
  },
  {
    num: "04",
    category: "SATISFACTION PROMISE",
    question: "What is your 30-Day 'Happy Baby' return policy?",
    answer: `We stand behind every little keepsake with our 30-day love-it guarantee. If for any reason you or your baby are not delighted, email our parent support team at ${siteConfig.email} or call ${siteConfig.phone} for an easy, no-hassle refund.`
  },
  {
    num: "05",
    category: "BILLING & ACCOUNT",
    question: "How will the charge appear on my bank or credit card statement?",
    answer: `To maintain a clean and clear billing record, your transaction will appear as "${siteConfig.descriptor}" on your bank or credit card statement.`
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-white text-[#1E2330] relative overflow-hidden" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B]">
              A Little Help Along The Way
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-gray-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2330] tracking-tight leading-tight">
            The Things Parents <span className="text-[#FF6B8B]">Ask</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            From choosing the right material to caring for your little one&apos;s treasures, here&apos;s everything you need to know.
          </p>
        </div>

        {/* 35 / 65 Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (35%): Parent assistance */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-32">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
              Need a little help?
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-[#1E2330] tracking-tight leading-snug mb-3">
              We&apos;re here when you need us.
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
              Our nursery team can help with sizing, materials, care, or choosing something special for your little one.
            </p>

            <div className="h-[1px] w-16 bg-gray-200 mb-6" />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF6B8B] hover:text-[#FA5679] transition-colors mb-3"
            >
              <span>Talk to our team</span>
              <span>→</span>
            </Link>

            <div className="text-[0.72rem] text-gray-500 font-medium mb-3">
              Mon–Fri &middot; 9AM–6PM EST
            </div>

            <p className="font-script text-xl text-[#2B2D42] opacity-80 mt-1">
              &ldquo;No question is too small.&rdquo;
            </p>
          </div>

          {/* Right Column (65%): Clean FAQ Index */}
          <div className="lg:col-span-8 flex flex-col">
            
            <div className="border-t border-gray-100">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={item.num}
                    className="border-b border-gray-100 py-6 sm:py-7 transition-colors"
                  >
                    <button
                      onClick={() => toggleItem(idx)}
                      className="w-full flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                        <span
                          className={`text-lg sm:text-xl font-bold tracking-widest transition-colors flex-shrink-0 ${
                            isOpen ? "text-[#FF6B8B]" : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        >
                          {item.num}
                        </span>

                        <div className="min-w-0">
                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gray-400 block mb-1">
                            {item.category}
                          </span>

                          <h4
                            className={`text-base sm:text-lg font-black tracking-tight leading-snug transition-colors ${
                              isOpen ? "text-[#1E2330]" : "text-[#2B2D42] group-hover:text-[#FF6B8B]"
                            }`}
                          >
                            {item.question}
                          </h4>
                        </div>
                      </div>

                      <span
                        className={`text-xl font-light transition-transform duration-200 flex-shrink-0 mt-0.5 ${
                          isOpen ? "text-[#FF6B8B]" : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
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
