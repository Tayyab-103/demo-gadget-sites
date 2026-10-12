"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import { BoltIcon, CheckIcon } from "@/components/Icons";

const siteConfig = siteConfigData as unknown as SiteConfig;

type CategoryType = "All" | "Orders & Shipping" | "Hardware Specs" | "Warranty & Returns";

interface FaqItem {
  category: CategoryType;
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    category: "Orders & Shipping",
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `All circuit hardware orders are packed and dispatched within 1–2 business days from our domestic fulfillment facility. We ship via ${siteConfig.shippingCarrier}, and delivery typically takes between ${siteConfig.shippingPeriod} business days with real-time end-to-end tracking straight to your address.`,
  },
  {
    category: "Hardware Specs",
    question: "Are your GaN chargers and charging docks universally compatible?",
    answer:
      "Yes! Our GaN fast chargers and MagGrid charging stands support USB-PD 3.1, QC 4.0+, Qi2 wireless standards, and PPS dynamic power delivery. They are engineered to safely charge Apple, Samsung, Google, Dell, MacBook, and Windows USB-C devices at peak speeds.",
  },
  {
    category: "Warranty & Returns",
    question: `How does the ${siteConfig.trialPeriod}-Day Hardware Satisfaction Guarantee work?`,
    answer: `If you are not 100% satisfied with your Modern Circuit Electronics hardware within ${siteConfig.trialPeriod} days of receiving it, simply reach out to our engineering support team via phone at ${siteConfig.phone} or email at ${siteConfig.email} for a complete, hassle-free refund.`,
  },
  {
    category: "Hardware Specs",
    question: "What audio codecs and latency does the VoltAudio Cyber Earbuds support?",
    answer:
      "VoltAudio Cyber Earbuds utilize Bluetooth 5.4 with aptX HD, AAC, and SBC audio codec decoding, alongside an ultra-low latency gaming mode of under 28ms and active hybrid noise cancellation up to -45dB.",
  },
  {
    category: "Hardware Specs",
    question: "What safety and thermal protections are built into the circuits?",
    answer:
      "Every unit integrates multi-stage active thermal monitoring (over 100,000 temperature checks per second), surge protection, over-current cutoff, short-circuit isolation, and flame-retardant aerospace-grade polycarbonate casing.",
  },
  {
    category: "Orders & Shipping",
    question: "How will the charge appear on my credit card statement?",
    answer: `For transparent billing, your card statement will accurately display the descriptor "${siteConfig.descriptor}".`,
  },
];

const categories: CategoryType[] = [
  "All",
  "Orders & Shipping",
  "Hardware Specs",
  "Warranty & Returns",
];

export default function Faq() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const filteredFaqs =
    selectedCategory === "All"
      ? faqList
      : faqList.filter((item) => item.category === selectedCategory);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Header Block */}
        <div className="text-left max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-primary">
              HARDWARE ARCHITECTURE FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight mb-6">
            Frequently Asked <span className="text-primary underline decoration-secondary decoration-4">Questions</span>
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:text-primary hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: STICKY DESK CARD (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-primary text-white rounded-[2rem] p-7 sm:p-9 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-6 shadow-inner">
                <BoltIcon className="w-6 h-6 fill-secondary text-secondary" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-snug">
                Hardware Engineering Desk
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                Have technical inquiries regarding voltage curves, charging protocols, or component testing? Speak with our engineering desk.
              </p>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-text hover:brightness-110 font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all mb-6 cursor-pointer"
              >
                <span>Contact Engineering</span>
                <span>→</span>
              </a>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-2.5 text-xs text-slate-400">
                <CheckIcon className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-[0.72rem] font-medium">Direct US-Based Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACCORDION (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-[2rem] p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col">
            <div className="divide-y divide-slate-200">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndices.includes(idx);

                return (
                  <div key={idx} className="py-5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left bg-transparent border-none cursor-pointer focus:outline-none group py-1"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                        {faq.question}
                      </span>

                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200 ${
                          isOpen
                            ? "bg-secondary text-secondary-text"
                            : "bg-white text-slate-600 border border-slate-200 group-hover:border-secondary"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
