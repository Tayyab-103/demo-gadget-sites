"use client";

import { siteConfig } from "@/lib/brandIcon";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: `How does the ${siteConfig.trialPeriod}-day trial work?`,
    answer: `Use your gear in real workouts for up to ${siteConfig.trialPeriod} days after delivery. If it isn't right for you, contact us at ${siteConfig.phone} or ${siteConfig.email} within that window to receive a Return Merchandise Authorization (RMA) number and return instructions. Full details are in our Terms & Conditions.`
  },
  {
    question: "How quickly will my order arrive?",
    answer: `Orders are processed within 1–2 business days at our Austin, TX facility and shipped with ${siteConfig.shippingCarrier}. Delivery typically takes ${siteConfig.shippingPeriod} business days, and a tracking number is emailed to you as soon as your package ships.`
  },
  {
    question: "How do I adjust the weighted training vest?",
    answer: "The vest uses padded shoulder straps and wraparound adjustable side straps. Put it on, then tighten the side straps until the vest sits snug against your torso without restricting your breathing. It should stay put when you jog in place."
  },
  {
    question: "Is the roll-top backpack waterproof?",
    answer: "The pack uses a water-resistant coated shell and a roll-top closure that keeps rain and splashes out during everyday use, wet commutes and lake days. It is not designed to be submerged."
  },
  {
    question: "What are bundles and how do they save me money?",
    answer: "Every product can be ordered as a single unit or as a multi-pack bundle. Bundles lower the price per unit, which is ideal for households, training partners or small group classes. Bundle options and pricing are shown on each product page."
  },
  {
    question: "How will the charge appear on my card statement?",
    answer: `Your purchase will appear on your statement as "${siteConfig.descriptor}". If you don't recognize a charge, please contact us at ${siteConfig.phone} before contacting your bank so we can help right away.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left Column — Header & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-24 lg:self-start">
            <span className="eyebrow mb-3">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary mb-3">
              Good <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mb-8">
              Quick answers about shipping, fit, bundles and our trial period.
            </p>

            {/* CTA card */}
            <div className="relative overflow-hidden bg-primary rounded-3xl p-7 sm:p-8 text-white shadow-xl">
              <div className="absolute inset-0 bg-topo" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2">Still Have A Question?</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-6 leading-relaxed">
                  {`Our support team is available Monday to Friday. Call ${siteConfig.phone} or send us a message.`}
                </p>
                <Link
                  href="/contact"
                  className="btn-accent"
                >
                  Contact Support
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col gap-3.5">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 ${isOpen ? "border-secondary/60 shadow-lg bg-white" : "border-line hover:border-primary/30 bg-surface"
                    }`}
                >
                  {/* FAQ Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 bg-transparent border-none cursor-pointer text-left focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className={`text-xs font-black tracking-wider flex-shrink-0 ${isOpen ? "text-secondary-deep" : "text-primary/30"
                        }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm md:text-base font-bold text-primary">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-light leading-none transition-all duration-200 ${isOpen
                          ? "bg-secondary text-secondary-text rotate-45 shadow-md"
                          : "bg-white border border-line text-primary"
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
                    <div className="pb-5 sm:pb-6 text-xs sm:text-sm text-muted leading-relaxed border-t border-line pt-4 pl-7 sm:pl-8">
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
