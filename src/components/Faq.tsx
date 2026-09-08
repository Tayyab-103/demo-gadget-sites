"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "Do your 3D wooden mechanical models require glue, cutting, or special tools?",
    answer: "No. Every kit is precision laser-cut from Baltic birch plywood with 0.05mm tolerances. Numbered parts pop out cleanly and lock together with mechanical snug joinery. Illustrated step-by-step assembly blueprints and spare gears are included in every box.",
  },
  {
    question: "What age range are Wonderwick tabletop games and STEM kits recommended for?",
    answer: "Our mechanical model kits and tabletop strategy games are designed for makers and players ages 12+ independently, or ages 8+ with family guidance. Complexity ratings, player counts, and estimated build times are clearly listed for each item.",
  },
  {
    question: "What happens if a wooden piece snaps or a game meeple goes missing?",
    answer: "We offer a 100% Complete Set Promise. If any wooden strut snaps during assembly or a board game token is lost, simply contact our support team and we will dispatch free replacement parts immediately.",
  },
  {
    question: "What shipping carrier do you use and what are the delivery times?",
    answer: `All orders are dispatched from our Austin, TX fulfillment hub within 24 hours. We partner with ${siteConfig.shippingCarrier} to provide reliable tracked delivery nationwide within ${siteConfig.shippingPeriod} business days.`,
  },
  {
    question: `How does the ${siteConfig.trialPeriod || 14}-day risk-free play & build guarantee work?`,
    answer: `Unbox and build with confidence. If you or your family are not completely thrilled with the craftsmanship, fitment, or game night fun, contact us within ${siteConfig.trialPeriod || 14} days of delivery for an immediate full refund.`,
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your card statement will display the clean descriptor as "${siteConfig.descriptor}" for clear, recognizable billing records.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-b border-black/[0.06] font-sans" id="faq">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            Help &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
            Frequently Asked Questions
          </h2>
          <p className="text-black/65 text-sm md:text-base mt-3 max-w-lg mx-auto font-normal">
            Everything you need to know about model assembly, age recommendations, game rules, express UPS delivery, and our 14-day play guarantee.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-3.5">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-[#A36B42]/50 shadow-xs" : "border-black/[0.06] hover:border-black/15"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-bold text-[#A36B42] font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#191716]">
                      {item.question}
                    </span>
                  </div>

                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all flex-shrink-0 ${
                    isOpen ? "bg-[#A36B42] text-white rotate-45" : "bg-[#FAF8F5] text-[#191716]"
                  }`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-black/70 text-xs sm:text-sm leading-relaxed border-t border-black/[0.04] font-normal">
                    <div className="pl-7 pt-2">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="text-center mt-10 text-xs text-black/60">
          Have an unanswered question? Email our maker concierge at <strong className="text-[#191716] font-bold">{siteConfig.email}</strong> or call <strong className="text-[#191716] font-bold">{siteConfig.phone}</strong>.
        </div>

      </div>
    </section>
  );
}
