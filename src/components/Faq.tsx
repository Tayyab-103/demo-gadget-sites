"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How does the 14-day athletic field trial work?",
    answer: `We encourage you to test our weighted training vests, duffles, and percussion recovery tools during real workouts. If for any reason our gear does not elevate your training standards, return it within ${siteConfig.trialPeriod || 14} days for a 100% full refund with zero hassle.`
  },
  {
    question: "What materials are used in Northcrest training vests and bags?",
    answer: `Our weighted vests and duffles are constructed from 1000D military-grade ballistic Cordura nylon, reinforced with bar-tack box stitching, TPU-welded storm seams, and antimicrobial breathable air-mesh to prevent moisture buildup and skin irritation.`
  },
  {
    question: "How quickly does my order ship and which carrier is used?",
    answer: `All orders are inspected and packaged in our Austin, TX distribution facility within 1 business day. We ship nationwide using ${siteConfig.shippingCarrier}, with standard delivery arriving at your home, gym, or training facility within ${siteConfig.shippingPeriod} business days.`
  },
  {
    question: "How do I choose the right weight and adjust the fit?",
    answer: `The Apex-Pro weighted vest features 16 removable 1.25 lb cast-iron weight bricks, allowing you to scale resistance anywhere from 2.5 lbs to 20 lbs. Dual quick-release micro-adjustment side straps ensure a snug, bounce-free fit for athletes of all body types.`
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your credit card statement will display the official transaction descriptor "${siteConfig.descriptor}" alongside your verified order amount.`
  },
  {
    question: "What is your warranty on percussion therapy guns and electronic gear?",
    answer: `Our Flow-Recovery percussion therapy guns and electronic recovery equipment come with a comprehensive 1-year manufacturer's replacement warranty covering motor integrity, battery life, and mechanical defects.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-neutral-bg" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left Column — Header & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-24 lg:self-start">
            <span className="eyebrow mb-3">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary mb-3">
              Athlete <span className="text-secondary">Inquiries</span>
            </h2>
            <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mb-8">
              Find immediate answers regarding gear sizing, 14-day field trials, materials engineering, and shipping timelines.
            </p>

            {/* CTA card */}
            <div className="bg-primary rounded-3xl p-7 sm:p-8 text-white shadow-xl">
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2">Need Team or Custom Sizing?</h3>
              <p className="text-white/70 text-xs sm:text-sm mb-6 leading-relaxed">
                Our athletic gear advisors and customer care team are standing by to assist with collegiate volume orders and technical specifications.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-text font-black text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-md"
              >
                Contact Support
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col gap-3.5">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 ${
                    isOpen ? "border-secondary/50 shadow-md" : "border-black/5 hover:border-black/10 shadow-xs"
                  }`}
                >
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className={`text-xs font-black tracking-wider flex-shrink-0 ${
                        isOpen ? "text-secondary" : "text-neutral-text/30"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-black text-primary uppercase tracking-tight">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-light leading-none transition-all duration-200 ${
                        isOpen
                          ? "bg-secondary text-secondary-text rotate-45 shadow-md"
                          : "bg-neutral-bg border border-black/10 text-primary"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* FAQ Body */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out px-5 sm:px-6"
                    style={{
                      maxHeight: isOpen ? "350px" : "0px",
                    }}
                  >
                    <div className="pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-text/75 leading-relaxed border-t border-black/5 pt-4 pl-7 sm:pl-8">
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
