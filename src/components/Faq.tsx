"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqCategories = ["All Questions", "Shipping", "Warranty", "Care & Use", "Billing"];

const faqData = [
  {
    category: "Shipping",
    question: "How fast is delivery?",
    answer: `Orders ship within 24-48 hours via ${siteConfig.shippingCarrier}. Delivery takes ${siteConfig.shippingPeriod} business days nationwide with automated tracking.`,
  },
  {
    category: "Warranty",
    question: "How does the 60-Day Trial work?",
    answer: "Try your gear for 60 days. If you are not completely satisfied, contact support for a prompt return and 100% refund.",
  },
  {
    category: "Warranty",
    question: "What is covered under the 1-Year Warranty?",
    answer: "All gear is covered against material and manufacturing defects for 365 days. We repair or replace defective items free of charge.",
  },
  {
    category: "Care & Use",
    question: "How do I maintain the equipment?",
    answer: "Wipe latex bands with a damp cloth and store out of direct sunlight. Wipe massager attachments with disinfectant wipes after use.",
  },
  {
    category: "Billing",
    question: "How will the charge appear on my statement?",
    answer: `The transaction will show as "${siteConfig.descriptor}" on your credit card statement.`,
  },
  {
    category: "Billing",
    question: "How do bundle discounts work?",
    answer: "Multi-unit discounts (up to 35% off) are automatically applied at checkout when selecting 2 or more units.",
  },
];

export default function Faq() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const filteredFaqs = selectedCategory === "All Questions"
    ? faqData
    : faqData.filter((item) => item.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-neutral-bg relative overflow-hidden" id="faq">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <span className="eyebrow justify-center mb-3">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary">
            Quick <span className="text-secondary bg-primary px-2.5 py-0.5 rounded-lg">Answers</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-text/65">
            Key details about shipping, warranty, and orders.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {faqCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-neutral-text/60 border border-black/5 hover:border-black/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordions */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-black text-sm sm:text-base text-primary uppercase tracking-tight cursor-pointer hover:text-secondary transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-bg text-primary text-xs font-black">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-text/70 leading-relaxed border-t border-black/5">
                    {faq.answer}
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
