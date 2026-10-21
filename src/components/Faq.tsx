"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/brand";
import SectionHeading from "@/components/SectionHeading";

const faqList = [
  {
    question: "How much is shipping and how long does delivery take?",
    answer: `Shipping is free on every order. We ship with ${siteConfig.shippingCarrier}, and orders typically arrive within ${siteConfig.shippingPeriod} business days. You'll receive a tracking number by email once your order ships.`,
  },
  {
    question: "What is your satisfaction guarantee?",
    answer: `If you or your pet aren't happy with your purchase, contact us within ${siteConfig.trialPeriod} days of delivery at ${siteConfig.phone} or ${siteConfig.email} and we'll help you with a return or refund. See our Terms of Service for full details.`,
  },
  {
    question: "How do bundles work?",
    answer: "Each product can be bought as a single item or in packs of 2 to 8. Choose your pack size on the product page — the per-item price goes down as the pack gets bigger, and the savings are shown before you add to cart.",
  },
  {
    question: "How does the self-cleaning grooming brush work?",
    answer: "Brush your pet as usual to collect loose fur. Then press the button on the handle: the pins retract so the collected fur slides off the pad in one piece and can be dropped straight into the trash.",
  },
  {
    question: "Which pets are the collar and chew toys designed for?",
    answer: "The adjustable collar is sized for small dogs and cats. The chew toys are designed for small dogs and puppies. As with any toy, please supervise your pet during play and replace the toy if it becomes worn.",
  },
  {
    question: "How will the charge appear on my card statement?",
    answer: `Your purchase will appear on your statement as "${siteConfig.descriptor}".`,
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={<>Questions? <span className="text-gradient">We&apos;ve got answers</span></>}
            description="Everything you need to know about shipping, bundles and our guarantee."
          />

          <div className="mt-8 rounded-[1.75rem] bg-brand-gradient p-6 sm:p-7 text-primary-text">
            <p className="font-display text-xl font-semibold">Still need a hand?</p>
            <p className="text-sm opacity-80 mt-1 mb-5">Our support team is happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center bg-ink text-white rounded-full px-5 py-3 text-sm font-bold hover:bg-primary-deep transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center bg-white/80 text-ink rounded-full px-5 py-3 text-sm font-bold hover:bg-white transition-colors">
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-colors ${isOpen ? "border-primary bg-primary-soft/60" : "border-line bg-white hover:border-primary/60"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-ink leading-snug">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? "bg-ink text-white rotate-45" : "bg-secondary-soft text-secondary-deep"
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 sm:px-6 pb-5 -mt-1 text-sm text-muted leading-relaxed animate-fadeIn">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
