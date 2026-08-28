"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What thread standards and pipe materials are your brass fittings compatible with?",
    answer: `Our forged brass compression fittings feature standard American National Taper Pipe Threads (NPT / NPTF) compliant with ANSI/ASME B1.20.1. They connect seamlessly with Type K, L, and M copper tubing, brass pipe, schedule 40/80 steel, and standard PEX lines.`
  },
  {
    question: "Are your brass products certified lead-free for potable drinking water?",
    answer: `Yes. All Copperline brass fittings, ball valves, and water heater connectors meet the federal Safe Drinking Water Act (SDWA) requirements with less than 0.25% weighted average lead content across wetted surfaces, certified for residential and commercial drinking water.`
  },
  {
    question: "What are the temperature and pressure limits for your hydronic heating supplies?",
    answer: `Our compression fittings are rated for pressures up to 1,200 PSI and hydronic temperatures from -65°F to 250°F. The Master-Forge shutoff ball valves are rated to 600 WOG / 150 WSP, and our stainless supply lines support up to 200°F continuous heat at 250 PSI.`
  },
  {
    question: "What shipping carrier do you use and how quickly will my order arrive?",
    answer: `All orders are dispatched from our foundry distribution center within 1-2 business days. We ship nationwide using ${siteConfig.shippingCarrier}, with standard delivery arriving at your shop or job site within ${siteConfig.shippingPeriod} business days.`
  },
  {
    question: "What is your return policy and warranty on plumbing components?",
    answer: `We back our foundry hardware with a 60-day money-back guarantee and a comprehensive 1-year manufacturer's warranty against defects in material and workmanship. If you receive any piece that does not meet spec, contact us at ${siteConfig.email} or call ${siteConfig.phone} for immediate resolution.`
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your credit card statement will display the clean transaction descriptor "${siteConfig.descriptor}" alongside your verified order amount.`
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
            <span className="eyebrow mb-3">Technical FAQs</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary mb-3">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mb-8">
              Find immediate answers regarding thread dimensions, material certifications, pressure tolerances, and contractor shipping.
            </p>

            {/* CTA card */}
            <div className="bg-primary rounded-2xl p-6 sm:p-7 text-white shadow-md">
              <h3 className="text-base sm:text-lg font-bold mb-2">Need custom specifications?</h3>
              <p className="text-white/70 text-xs sm:text-sm mb-5 leading-relaxed">
                Our plumbing and hydronic engineering support team is available to assist with product compatibility and bulk contractor orders.
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
