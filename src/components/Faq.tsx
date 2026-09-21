"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    question: "How does the 14-day studio satisfaction guarantee work?",
    answer: `Try our art and craft supplies in your creative studio. If you're not completely satisfied with the quality, pigment intensity, or canvas tension, return your order within ${siteConfig.trialPeriod || 14} days for a full refund.`,
  },
  {
    number: "02",
    question: "Are the stretched canvases pre-primed and ready for paint?",
    answer: "Yes, our canvases are pre-primed with three coats of acid-free acrylic titanium gesso, providing an optimal tooth for acrylics, oils, gouache, and mixed media without any extra preparation required.",
  },
  {
    number: "03",
    question: "What types of mediums work best with the brush sets?",
    answer: "Our artist brushes feature resilient multi-filament synthetic and natural hairs engineered for smooth flow and elasticity across heavy-body acrylics, fluid oils, watercolors, inks, and gouache.",
  },
  {
    number: "04",
    question: "How quickly does my art supply order ship?",
    answer: `Orders are packed with protective studio wrapping and dispatched within 1-2 business days via ${siteConfig.shippingCarrier}, typically arriving at your doorstep in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    number: "05",
    question: "How will the charge appear on my credit card statement?",
    answer: `Your credit card statement will display the transaction descriptor "${siteConfig.descriptor}".`,
  },
  {
    number: "06",
    question: "How should I clean and preserve the artist brushes?",
    answer: "Rinse acrylics and watercolors with lukewarm water and mild artist soap immediately after painting. For oils, use an odorless solvent followed by brush conditioner, and dry horizontally to preserve ferrule integrity.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 12%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Studio Knowledgebase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Common questions about canvases, pigments, brush care, shipping, and returns.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Support Box */}
          <div
            className="lg:col-span-4 rounded-3xl text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between border border-white/15"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            <div>
              <span
                className="text-[0.68rem] font-black uppercase tracking-widest block mb-2"
                style={{ color: "var(--secondary-color)" }}
              >
                Need Assistance?
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-white">
                Have an Art Supply Question?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
                Our creative support team is here to help you with pigment inquiries, bulk studio packs, or tracking.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-xs bg-white hover:bg-black/5 transition-all py-3.5 px-6 rounded-xl shadow-sm text-center"
              style={{ color: "var(--primary-color)" }}
            >
              Contact Studio Support →
            </Link>
          </div>

          {/* Right Column: Accordion Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {faqItems.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={item.number}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-secondary/40 bg-primary-tint shadow-sm" : "border-black/8 bg-white hover:border-black/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer bg-transparent border-none focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-bold text-secondary">
                        {item.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-primary">
                        {item.question}
                      </h4>
                    </div>

                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 flex-shrink-0"
                      style={{
                        backgroundColor: isOpen ? "var(--primary-color)" : "rgba(0,0,0,0.05)",
                        color: isOpen ? "var(--primary-text-color)" : "inherit",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                      isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal pt-2 border-t border-black/5">
                      {item.answer}
                    </p>
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
