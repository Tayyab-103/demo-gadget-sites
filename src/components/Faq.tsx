"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What instruments are your capos, tuners, and cables compatible with?",
    answer: "Our hardware is engineered for wide universal compatibility across 6-string and 12-string acoustic guitars, classical nylon-string instruments, electric guitars, electric basses, ukuleles, mandolins, and banjos. The EchoWave tuner also features specialized modes for violin and chromatic wind instruments."
  },
  {
    question: "Will the capo scratch my neck finish or cause fretboard wear?",
    answer: "Absolutely not. Our master capos are cast with ergonomic rounded contours and lined with ultra-dense, non-reactive silicone memory cushions. They distribute uniform clamping pressure across the fret wire without marring nitrocellulose, polyurethane, or satin wood neck finishes."
  },
  {
    question: "What shipping carrier do you use and when will my order arrive?",
    answer: `All orders are inspected, packed in shock-absorbing protective wrap, and dispatched within 1-2 business days. We ship nationwide using ${siteConfig.shippingCarrier}, and delivery typically arrives within ${siteConfig.shippingPeriod} business days.`
  },
  {
    question: "Do you offer a satisfaction guarantee on acoustic tone?",
    answer: "Yes! We stand behind every product with our 30-day tone guarantee. If you are not completely satisfied with the intonation, build quality, or sound performance, reach out to our team for a swift, hassle-free return and refund."
  },
  {
    question: "Are your cables and hardware covered under warranty?",
    answer: "Every item from Velvet Echo Musical Workshop is covered by a 1-year comprehensive manufacturer warranty against defects in materials, soldering, alloy casting, and electronic components."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Transactions will be clearly billed under the charge descriptor "${siteConfig.descriptor}".`
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column — Header, Decoration & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow mb-3">Player Inquiries</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-neutral-text/65 text-sm md:text-base mb-8">
              Find instant answers regarding instrument compatibility, neck care, signal specs, and our workshop guarantee.
            </p>

            {/* CTA Box */}
            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Have a specific gear question?</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Our Austin workshop team is always happy to discuss setup specs and compatibility.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-secondary text-primary font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white transition-all shadow-md"
                >
                  Contact The Workshop
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                    isOpen ? "border-secondary/50 shadow-md" : "border-black/5 hover:border-black/10 hover:shadow-sm"
                  }`}
                >
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
                      <strong className="text-sm md:text-base font-extrabold text-primary">
                        {item.question}
                      </strong>
                    </div>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base font-bold leading-none transition-all duration-300 ${
                        isOpen
                          ? "bg-secondary text-primary rotate-45 shadow-sm"
                          : "bg-neutral-bg border border-black/10 text-primary hover:border-secondary hover:text-secondary rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out px-6 md:px-7"
                    style={{
                      maxHeight: isOpen ? "350px" : "0px",
                    }}
                  >
                    <div className="pb-7 text-sm text-neutral-text/70 leading-relaxed border-t border-black/5 pt-5 pl-8 md:pl-10">
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
