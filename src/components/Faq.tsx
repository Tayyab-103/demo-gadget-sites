"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `All orders are dispatched within 24–48 hours from our domestic fulfillment center. We partner with ${siteConfig.shippingCarrier} to provide reliable tracked transit, arriving at your doorstep within ${siteConfig.shippingPeriod} business days nationwide.`
  },
  {
    question: "What does the 60-day satisfaction guarantee cover?",
    answer: `We want you to pack, travel, and test our gear in real-world conditions. If you are not thoroughly impressed with the craftsmanship or usability within 60 days of delivery, simply reach out to our support team for an effortless return and full refund.`
  },
  {
    question: "How does the 1-year comprehensive warranty work?",
    answer: "Every piece of luggage and gear includes 12 months of complete defect protection. If any zipper, wheel assembly, telescoping handle, or polycarbonate shell experiences manufacturing failure under normal travel use, we repair or replace it at zero cost."
  },
  {
    question: "How will this purchase appear on my billing statement?",
    answer: `To keep your records clear and recognizable, your credit card statement will display the merchant descriptor as "${siteConfig.descriptor}".`
  },
  {
    question: "Can I reach customer support directly if I have a question?",
    answer: `Absolutely. Our dedicated concierge team is available Monday through Friday via phone at ${siteConfig.phone} or via email at ${siteConfig.email}. Inquiries are typically answered within a few hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-neutral-bg relative overflow-hidden" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Left Column: Summary & Support */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow-start mb-3">Clarity &amp; Transparency</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
              Frequently Answered <span className="text-secondary">Questions</span>
            </h2>
            <div className="mt-4 mb-4 w-10 h-px bg-secondary" />
            <p className="text-neutral-text/65 text-xs sm:text-sm md:text-base mb-8 leading-relaxed">
              Everything you need to know about our expedition warranties, domestic shipping times, and effortless returns.
            </p>

            {/* Quick Contact Card */}
            <div className="rounded-xl bg-white border border-black/6 p-6 sm:p-8 shadow-xs">
              <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary block mb-2">
                Need Specific Help?
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2">
                Our support desk is ready.
              </h3>
              <p className="text-xs text-neutral-text/60 leading-relaxed mb-6">
                Have a question about sizing or compatibility? Contact our concierge team anytime.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-bg border border-black/5 text-primary text-xs font-bold hover:border-secondary/30 transition-all"
                >
                  <span className="text-secondary">📞</span>
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-bg border border-black/5 text-primary text-xs font-bold hover:border-secondary/30 transition-all truncate"
                >
                  <span className="text-secondary">✉️</span>
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col gap-3">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-300 bg-white ${
                    isOpen ? "border-secondary/40 shadow-sm" : "border-black/6 hover:border-black/15"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-primary leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-secondary text-white rotate-180" : "bg-neutral-bg text-primary"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-text/70 leading-relaxed border-t border-black/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
