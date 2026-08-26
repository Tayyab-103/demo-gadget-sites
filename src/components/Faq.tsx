"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqItems = [
  {
    number: "01",
    tag: "CARE & PRESERVATION",
    question: "How do I care for and maintain hand-forged carbon steel tools?",
    answer:
      "After each gardening session, wipe away soil and plant sap with a dry cloth. Occasionally apply a light coat of camellia, mineral, or boiled linseed oil to the steel blade and wooden handle. Storing your tools in a dry area or a bucket of coarse sand mixed with mineral oil keeps the steel rust-free for generations.",
    tip: "A yearly light coat of boiled linseed oil preserves the ash timber grain and repels moisture permanently.",
  },
  {
    number: "02",
    tag: "METALLURGY GUARANTEE",
    question: "What is covered under the Thornwick Lifetime Warranty?",
    answer:
      "Every forged blade, brass rivet, and timber joint is covered for life against manufacturing defects, metal breakage, and structural failure under standard gardening use. If a blade ever snaps or a joint fails, we will repair or replace your tool free of charge.",
    tip: "No receipt required — our stamped foundry hallmark serves as lifetime proof of authenticity.",
  },
  {
    number: "03",
    tag: "DISPATCH & SHIPPING",
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `All orders are carefully hand-packed in eco-friendly protective packaging and dispatched from our Austin workshop within 1-2 business days. We ship using ${siteConfig.shippingCarrier} nationwide, with delivery taking ${siteConfig.shippingPeriod} business days.`,
    tip: "100% recyclable plastic-free packaging standard on all shipments.",
  },
  {
    number: "04",
    tag: "SOIL GUARANTEE",
    question: "Do you offer a trial period or money-back guarantee?",
    answer: `Yes. We provide an unconditional 60-day field satisfaction guarantee. Take your tools into your garden, test them in your soil, and if they don't exceed your expectations, contact us at ${siteConfig.email} for an easy, no-hassle return and full refund.`,
    tip: "60 full days of risk-free testing in clay, gravel, or rocky rootbeds.",
  },
  {
    number: "05",
    tag: "SHARPENING ADVICE",
    question: "Can I re-sharpen the bypass pruner blades and trowel edges?",
    answer:
      "Absolutely. Our Japanese SK5 and high-carbon manganese steel blades can be easily honed with a standard whetstone or diamond file at a 20° to 25° angle to restore a surgical razor edge.",
    tip: "Use a 1000-grit whetstone along the factory bevel for effortless razor cutting.",
  },
];

export default function Faq() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeFaq = faqItems[activeIdx];

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden border-b border-black/5" id="faq">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Left-Aligned Section Header (Consistent with other sections) */}
        <div className="max-w-2xl mb-12 md:mb-16 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
              FOUNDRY KNOWLEDGE BASE
            </span>
            <span className="w-8 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
            Frequently Asked <span className="text-[#265C1E]">Questions</span>
          </h2>

          <p className="mt-3 text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
            Everything you need to know about our carbon steel metallurgy, handle preservation, lifetime warranty, and direct workshop shipping.
          </p>
        </div>

        {/* Unique Dual-Pane Interactive Knowledge Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Interactive Question Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {faqItems.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer border flex items-center justify-between gap-4 ${
                    isActive
                      ? "bg-[#132B1C] text-white border-[#132B1C] shadow-md translate-x-1"
                      : "bg-white text-[#11281A] border-black/5 hover:border-[#265C1E]/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black font-mono flex-shrink-0 ${
                      isActive ? "bg-[#265C1E] text-white" : "bg-[#FAF9F6] text-[#265C1E]"
                    }`}>
                      {item.number}
                    </span>
                    <span className="font-extrabold text-xs sm:text-sm tracking-tight line-clamp-2">
                      {item.question}
                    </span>
                  </div>

                  <span className={`text-sm font-bold flex-shrink-0 ${isActive ? "text-[#78C470]" : "text-neutral-text/40"}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Active Answer Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-md flex flex-col justify-between min-h-[380px]">
            <div>
              {/* Question Tag & Number */}
              <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#265C1E] bg-[#265C1E]/10 px-3 py-1 rounded-md">
                  {activeFaq.tag}
                </span>
                <span className="text-xs font-black font-mono text-neutral-text/40">
                  Question {activeFaq.number} of 05
                </span>
              </div>

              {/* Question Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#11281A] tracking-tight mb-4 leading-snug">
                {activeFaq.question}
              </h3>

              {/* Comprehensive Answer */}
              <p className="text-[#11281A]/80 text-sm sm:text-base leading-relaxed mb-6">
                {activeFaq.answer}
              </p>

              {/* Workshop Pro Tip Callout */}
              <div className="bg-[#FAF9F6] border border-black/5 rounded-2xl p-4 flex items-start gap-3 mb-6">
                <span className="text-base flex-shrink-0">💡</span>
                <div className="text-xs text-[#11281A]/80 leading-relaxed font-medium">
                  <strong className="text-[#265C1E] uppercase tracking-wider block text-[0.62rem] mb-0.5">
                    Foundry Master Tip
                  </strong>
                  {activeFaq.tip}
                </div>
              </div>
            </div>

            {/* Bottom Contact Pill */}
            <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-text/60">
              <span>Have a question about your specific soil?</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-bold text-[#265C1E] hover:text-[#132B1C] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                Ask Our Blacksmiths <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
