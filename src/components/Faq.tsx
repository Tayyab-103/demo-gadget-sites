"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How do I choose the right size for Modern Meadow garments?",
    answer: "Our women's collection is tailored to standard US/European sizing with relaxed, graceful silhouettes. Each product detail page includes standard size measurements (XS through XXL). If you are between sizes or desire an oversized aesthetic, our styling team suggests ordering your typical size or sizing up for knits."
  },
  {
    question: "What fabrics and materials are used in your ready-to-wear apparel?",
    answer: "We prioritize natural, premium textiles including 100% organic cotton, European washed linen, breathable mulberry silk blends, and ethically sourced cashmere-merino yarns that feel pleasant against the skin and maintain their shape over time."
  },
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All orders are carefully packed and dispatched within 1-2 business days from Austin, TX. We ship using ${siteConfig.shippingCarrier} with carbon-neutral transit, and delivery typically arrives within ${siteConfig.shippingPeriod} business days.`
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a 30-day money-back guarantee. If an item does not fit or match your expectations, you can return unworn garments with tags attached for a full refund or complimentary size exchange."
  },
  {
    question: "How will the transaction appear on my billing statement?",
    answer: `All orders processed through our secure portal will display the billing descriptor "${siteConfig.descriptor}" on your credit card statement.`
  },
  {
    question: "How can I contact styling support or order assistance?",
    answer: `Our dedicated concierge team is available Monday through Friday at ${siteConfig.phone} or via email at ${siteConfig.email}. We aim to answer all styling and order inquiries within 24 hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/5" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="category-subtitle">
            <b>client</b> service
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-text/60 text-xs sm:text-sm mt-3 leading-relaxed">
            Everything you need to know about our sizing, sustainable fabrics, shipping, and concierge care.
          </p>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <h3 className="font-heading text-base sm:text-lg font-bold text-primary uppercase tracking-wide group-hover:text-secondary transition-colors pr-4">
                    {item.question}
                  </h3>
                  <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-primary font-bold transition-transform flex-shrink-0 group-hover:border-secondary">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-xs sm:text-sm text-neutral-text/75 leading-relaxed animate-fadeIn">
                    {item.answer}
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
