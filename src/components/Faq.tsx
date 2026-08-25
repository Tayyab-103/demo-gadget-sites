"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All orders are dispatched within 1-2 business days. We ship using ${siteConfig.shippingCarrier} nationwide with real-time tracking, and delivery typically takes between ${siteConfig.shippingPeriod} business days to arrive at your facility or job site.`,
  },
  {
    question: "Are calibration test certificates included with the diagnostic tools?",
    answer: "Yes. Every Voltspire testing instrument, multimeter, and clamp meter undergoes NIST-traceable multi-point calibration at our laboratory and arrives with individual test certification documentation.",
  },
  {
    question: "What is your warranty and money-back guarantee policy?",
    answer: "We offer a 60-day satisfaction money-back guarantee. In addition, all electrical equipment and power inverter modules are backed by our full 1-year commercial manufacturer warranty against defects.",
  },
  {
    question: "Do you supply bulk volume pricing for contractors and utilities?",
    answer: "Yes, our catalog supports multi-pack volume bundles with automatic tier discounts applied directly at checkout. For enterprise grid orders or custom OEM specs, you can reach our engineering team directly.",
  },
  {
    question: "How do I contact technical engineering support?",
    answer: `You can reach our engineering support team directly by emailing ${siteConfig.email} or calling ${siteConfig.phone} during regular business hours. Technical inquiries receive a reply within 24 hours.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#EBECEF] relative overflow-hidden" id="faq">
      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        
        {/* =========================================================
            HEADER: FAQ Pill + Two-Tone Serif Headline (Matching Reference)
            ========================================================= */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/80 border border-black/5 shadow-2xs mb-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111] leading-tight">
            Frequently Asked{" "}
            <span className="font-serif italic font-normal text-[#1A1D24] block sm:inline">
              Questions
            </span>
          </h2>
        </div>

        {/* =========================================================
            CENTER FLOATING ACCORDION CARD (Matching Reference)
            ========================================================= */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/[0.04] mb-16 sm:mb-20">
          
          {/* Header Row: Email on left, "Get in touch" button on right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06]">
            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-neutral-text/40 block">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs sm:text-sm font-bold text-[#111] hover:text-[#5B6BF0] transition-colors underline underline-offset-4 decoration-black/20"
              >
                {siteConfig.email}
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#333] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md self-start sm:self-auto group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Get in touch</span>
            </a>
          </div>

          {/* FAQ Accordion List */}
          <div className="flex flex-col gap-3">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#F9F9FA] border-black/10 shadow-xs"
                      : "bg-[#FAFAFB] border-black/[0.04] hover:border-black/10"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111] leading-snug">
                      {item.question}
                    </span>

                    {/* Circular Action Button (+) */}
                    <span
                      className={`w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-[#5B6BF0]" : "rotate-0"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    className="transition-all duration-500 ease-in-out px-5 sm:px-6"
                    style={{
                      maxHeight: isOpen ? "250px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pb-6 pt-1 text-xs sm:text-sm text-neutral-text/65 leading-relaxed border-t border-black/[0.04]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stylized Signature (Matching Reference) */}
          <div className="text-center pt-8 mt-6 border-t border-black/[0.05]">
            <span className="font-serif italic text-lg sm:text-xl text-[#111] tracking-tight">
              crafted standards for electrical grids
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
