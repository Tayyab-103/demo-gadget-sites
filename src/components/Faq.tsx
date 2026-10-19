"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    question: "Are your toys and games child-safe and non-toxic?",
    answer: "Yes, 100%. Every toy, plush animal, wooden puzzle, and action figure in our store is manufactured with BPA-free, lead-free, non-toxic materials rigorously tested to meet or exceed ASTM and CPSIA child safety regulations.",
  },
  {
    number: "02",
    question: "How does the 14-day happiness & return guarantee work?",
    answer: `We want every child and family to love their toys. If you or your little ones are not completely delighted with your purchase, you may return the item in original condition within ${siteConfig.trialPeriod || 14} days for a hassle-free full refund.`,
  },
  {
    number: "03",
    question: "How fast is shipping and will I receive a tracking code?",
    answer: `Orders are packed and dispatched from our fulfillment center within 1-2 business days via ${siteConfig.shippingCarrier}. Delivery typically arrives within ${siteConfig.shippingPeriod} business days with end-to-end tracking sent directly to your email.`,
  },
  {
    number: "04",
    question: "What age groups are your toys and games designed for?",
    answer: "Our catalog is thoughtfully categorized for all developmental stages: infants (0-12 months), toddlers (1-3 years), preschoolers (4-6 years), early school age (7-9 years), and preteens, teens, and whole families for board games and complex STEM sets.",
  },
  {
    number: "05",
    question: "How will this transaction appear on my card statement?",
    answer: `For complete billing clarity, your credit card statement will display the descriptor: "${siteConfig.descriptor}".`,
  },
  {
    number: "06",
    question: "Can I order bundle packs for party favors or holiday gifts?",
    answer: "Yes! We offer discounted bundle tiers on all popular items (2-Packs, 3-Packs, 4-Packs, etc.), making it easy and economical to shop for siblings, classroom gifts, birthday party favors, and family holidays.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Help &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Frequently Asked <span className="text-[#ff4370]">Questions</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Everything you need to know about toy safety, shipping, 14-day trials, and family recommendations.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Support Box */}
          <div className="lg:col-span-4 rounded-3xl bg-[#1e293b] text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between border border-white/10">
            <div>
              <div className="text-4xl mb-3">🧸</div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3 text-white">
                Have a Toy Question?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                Our customer care desk is always excited to assist you with age recommendations, game rules, and shipment tracking.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-[#1e293b] text-xs bg-[#ffb703] hover:bg-white transition-all py-3.5 px-6 rounded-full shadow-sm text-center"
            >
              Contact Support Desk →
            </Link>
          </div>

          {/* Right Column: Accordion Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {faqItems.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={item.number}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#ff4370]/30 bg-[#fff9fa] shadow-sm" : "border-black/8 bg-white hover:border-[#ff4370]/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer bg-transparent border-none focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-black text-[#ff4370]">
                        {item.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-[#1e293b]">
                        {item.question}
                      </h4>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "bg-[#ff4370] text-white rotate-45" : "bg-black/5 text-black"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                      isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal pt-2 border-t border-black/5">
                      {item.answer}
                    </p>
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
