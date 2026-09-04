"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What pipe materials are your brass fittings compatible with?",
    answer: `Our forged brass compression fittings feature standard NPT threads compatible with copper tubing, brass pipe, steel, and PEX lines.`
  },
  {
    question: "Are your brass products certified lead-free for drinking water?",
    answer: `Yes. All Copperline brass fittings, ball valves, and water heater connectors meet federal Safe Drinking Water Act (SDWA) standards for potable water.`
  },
  {
    question: "What are the temperature and pressure limits for your supplies?",
    answer: `Our compression fittings handle up to 1,200 PSI and 250°F. Ball valves are rated to 600 WOG, and stainless lines support up to 200°F continuous heat at 250 PSI.`
  },
  {
    question: "How fast is shipping and which carrier do you use?",
    answer: `Orders ship via ${siteConfig.shippingCarrier} within 1-2 business days, with delivery typically taking ${siteConfig.shippingPeriod} business days nationwide.`
  },
  {
    question: "What is your return policy and warranty?",
    answer: `We offer a 60-day money-back guarantee and a 1-year warranty on all products. Contact support at ${siteConfig.email} or call ${siteConfig.phone} for assistance.`
  },
  {
    question: "How will the charge appear on my credit card?",
    answer: `Your card statement will display "${siteConfig.descriptor}" next to the purchase amount.`
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
            <span className="eyebrow mb-3">Help Center</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary mb-3">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mb-8">
              Quick answers about our plumbing hardware, shipping, warranties, and compatibility.
            </p>

            {/* CTA card */}
            <div className="bg-primary rounded-2xl p-6 sm:p-7 text-white shadow-md">
              <h3 className="text-base sm:text-lg font-bold mb-2">Have a question?</h3>
              <p className="text-white/70 text-xs sm:text-sm mb-5 leading-relaxed">
                Our support team is ready to help you with product compatibility, order status, or bulk requests.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-text font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition-all shadow-sm"
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
                  className={`bg-white rounded-xl sm:rounded-2xl border transition-all duration-200 ${
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
                      <span className={`text-xs font-bold tracking-wider flex-shrink-0 ${
                        isOpen ? "text-secondary" : "text-neutral-text/30"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-primary">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-light leading-none transition-all duration-200 ${
                        isOpen
                          ? "bg-secondary text-secondary-text rotate-45 shadow-sm"
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
