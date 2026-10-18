"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How long does shipping take, and is it really free?",
    answer: `Yes, shipping is free on every order. Orders are packed within 1-2 business days and shipped with ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days. You'll receive a tracking number by email as soon as your package is on its way.`
  },
  {
    question: "What if I'm not happy with my purchase?",
    answer: `Every order is backed by our ${siteConfig.trialPeriod}-day money-back guarantee. If a piece isn't right for you, email ${siteConfig.email} or call ${siteConfig.phone} within ${siteConfig.trialPeriod} days of delivery and we'll walk you through a simple return and refund.`
  },
  {
    question: "Do your pieces come ready to gift?",
    answer: "They do. Every necklace, watch and clock ships in our keepsake gift box, so it's ready to hand over the moment it arrives."
  },
  {
    question: "How should I care for my jewelry and watch?",
    answer: "Store pieces in their box or a soft pouch, keep them away from perfume, lotion and pool water, and wipe them gently with a soft dry cloth after wearing. A little care keeps the gold-tone finish glowing for years."
  },
  {
    question: "How will the charge appear on my card statement?",
    answer: `Your purchase will appear on your statement as "${siteConfig.descriptor}". If you don't recognize a charge, contact us and we'll help right away.`
  },
  {
    question: "How do I reach customer care?",
    answer: `Our team is available Monday through Friday at ${siteConfig.phone} or anytime at ${siteConfig.email}. We reply to every message within 24 hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="faq">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column — Header, Decoration & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow mb-5">Good To Know</span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4 tracking-tight">
              Questions, <span className="marker">Answered</span>
            </h2>
            <p className="text-neutral-text/60 text-sm md:text-base mb-10">
              Everything you need to know about shipping, returns, gifting and caring for your pieces.
            </p>

            {/* CTA */}
            <div className="bg-primary rounded-[2rem] p-8 text-primary-text relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/30 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Still wondering about something?</h3>
                <p className="text-primary-text/75 text-sm mb-6 leading-relaxed">
                  Our customer care team is happy to help with sizing, gifting or anything about your order.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-ink text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-white hover:text-ink transition-all"
                >
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen ? "border-primary shadow-lg shadow-primary/10" : "border-black/5 hover:border-black/10 hover:shadow-sm"
                  }`}
                >
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 md:p-7 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-black tracking-widest transition-colors duration-300 flex-shrink-0 ${
                        isOpen ? "text-secondary" : "text-neutral-text/30"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <strong className="text-sm md:text-base font-extrabold text-ink">
                        {item.question}
                      </strong>
                    </div>

                    {/* Animated Icon */}
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg font-light leading-none transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-primary-text rotate-45 shadow-md"
                          : "bg-neutral-bg border border-black/10 text-ink hover:border-primary hover:bg-accent-light rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* FAQ Body */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out px-6 md:px-7"
                    style={{
                      maxHeight: isOpen ? "400px" : "0px",
                    }}
                  >
                    <div className="pb-7 text-sm text-neutral-text/65 leading-relaxed border-t border-black/5 pt-5 pl-10">
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
