"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All orders are dispatched within 1-2 business days. We ship using ${siteConfig.shippingCarrier} nationwide, and delivery typically takes between ${siteConfig.shippingPeriod} business days to arrive at your door.`
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: `Yes, we back all our products with a 60-day money-back guarantee. If you are not satisfied with your purchase, contact our support team via email or phone to initiate a hassle-free return and refund.`
  },
  {
    question: "Are your pieces covered by a warranty?",
    answer: "Yes. Every piece ships with a 1-year manufacturer's warranty covering defects in materials and workmanship. If something goes wrong under normal use, we'll repair or replace it free of charge."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card statement will display the charge descriptor as "${siteConfig.descriptor}" to ensure a clean transaction history.`
  },
  {
    question: "How do I contact customer support?",
    answer: `You can reach our customer support team Monday through Friday during business hours at ${siteConfig.phone}, or email us at ${siteConfig.email}. We aim to respond to all inquiries within 24 hours.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-neutral-bg relative overflow-hidden" id="faq">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column — Header, Decoration & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow mb-4">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-neutral-text/60 text-sm md:text-base mb-10">
              Find immediate answers to common questions about our products, shipping, and return policies.
            </p>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Our customer care team is here to help you with anything you need.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-text font-bold text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all"
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
                    isOpen ? "border-secondary/40 shadow-lg" : "border-black/5 hover:border-black/10 hover:shadow-sm"
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
                        isOpen ? "text-secondary" : "text-neutral-text/25"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <strong className="text-sm md:text-base font-extrabold text-primary">
                        {item.question}
                      </strong>
                    </div>

                    {/* Animated Icon */}
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg font-light leading-none transition-all duration-300 ${
                        isOpen
                          ? "bg-secondary text-primary-text rotate-45 shadow-md"
                          : "bg-neutral-bg border border-black/10 text-primary hover:border-secondary/40 hover:text-secondary rotate-0"
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
