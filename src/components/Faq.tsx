"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All workshop orders are processed and dispatched within 1-2 business days. We ship using ${siteConfig.shippingCarrier} nationwide, and standard delivery typically takes between ${siteConfig.shippingPeriod} business days to arrive directly at your kitchen door.`
  },
  {
    question: "Are Copper Whisk kitchen tools food-safe and dishwasher safe?",
    answer: "Yes, absolutely. Every tool in our catalog is crafted from 100% toxin-free, food-grade 304 and 420J2 stainless steel with food-safe protective finishes. All utensils and shears are top-rack dishwasher safe, while digital scales should be wiped clean with a damp microfiber cloth."
  },
  {
    question: "Do you offer a money-back satisfaction guarantee?",
    answer: `Yes, we back every product with a 60-day money-back culinary guarantee. If our tools don't exceed your cooking or baking expectations, contact our customer concierge at ${siteConfig.email} or call ${siteConfig.phone} for an easy, hassle-free return and refund.`
  },
  {
    question: "What is covered under the 1-Year Kitchen Workshop Warranty?",
    answer: "Every product ships with a 1-year comprehensive manufacturer's warranty covering material defects, blade integrity, handle welds, and electronic scale accuracy. If anything fails under normal kitchen use, we will replace it promptly free of charge."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card statement will display the charge descriptor as "${siteConfig.descriptor}" for clear, recognizable billing records.`
  },
  {
    question: "How do I contact workshop customer support?",
    answer: `You can reach our culinary concierge team Monday through Friday during business hours at ${siteConfig.phone}, or by emailing ${siteConfig.email}. We respond to all inquiries within 24 hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0E0F11] text-white relative overflow-hidden border-t border-white/5" id="faq">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Direct Answers
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              Frequently Asked <br />
              <span className="text-white/80">Questions</span>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Find immediate information regarding our food-safe metallurgy, 1-year warranty coverage, and shipping timelines.
            </p>

            <div className="bg-[#16171A] p-6 rounded-xl border border-white/10 shadow-md">
              <h3 className="font-extrabold text-sm uppercase text-white mb-2">Need personal assistance?</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Our culinary support team is available Monday through Friday to assist with product inquiries or orders.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5F2C9] hover:text-white transition-colors"
              >
                Contact Concierge &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`bg-[#16171A] rounded-xl border transition-all duration-300 ${
                    isOpen ? "border-white/25 shadow-xl bg-[#1A1C20]" : "border-white/8 hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-black tracking-widest transition-colors duration-300 flex-shrink-0 ${
                        isOpen ? "text-[#E5F2C9]" : "text-white/30"
                      }`}>
                        0{idx + 1}
                      </span>
                      <strong className="text-sm md:text-base font-extrabold text-white">
                        {item.question}
                      </strong>
                    </div>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#E5F2C9] text-[#0E0F11] rotate-45 shadow-sm"
                          : "bg-white/5 border border-white/10 text-white"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 px-6"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                    }}
                  >
                    <div className="pb-6 text-xs md:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4 pl-8">
                      {item.answer}
                    </div>
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
