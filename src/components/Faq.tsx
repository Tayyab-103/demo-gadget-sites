"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "How much is shipping and how long does it take?",
    answer: `Shipping is free on every order. Orders are packed within 1-2 business days and shipped by ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days. A tracking number is emailed as soon as your package leaves us.`,
  },
  {
    question: "What if the tool isn't right for me?",
    answer: `Every purchase is covered by our ${siteConfig.trialPeriod}-day satisfaction guarantee. Contact us within ${siteConfig.trialPeriod} days of delivery and we'll walk you through the return. Approved refunds go back to your original payment method.`,
  },
  {
    question: "Will the power cable work with my doorbell camera?",
    answer: "The cable is designed for Blink Video Doorbell, Blink Outdoor and Blink Mini. Full input/output ratings are listed on the product page — if you're unsure, send us your model and we'll confirm before you order.",
  },
  {
    question: "How does bundle pricing work?",
    answer: "On each product page you can choose a quantity. Larger bundles carry a lower per-unit price, and the discount is applied automatically — no codes needed.",
  },
  {
    question: "How will the charge appear on my statement?",
    answer: `Your purchase will appear as "${siteConfig.descriptor}" on your card statement.`,
  },
  {
    question: "How do I reach customer support?",
    answer: `Call ${siteConfig.phone} or email ${siteConfig.email}. We reply to every message within one business day.`,
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={<>Questions, <span className="text-gradient">answered</span></>}
            text="Shipping, returns, compatibility and billing — the things people ask us most."
          />
          <div className="mt-8 rounded-3xl bg-brand-gradient text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
            <div className="relative">
              <div className="text-sm font-bold">Still have a question?</div>
              <p className="mt-1 text-sm text-white/80">Our team is happy to help.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={`tel:${siteConfig.phone}`} className="btn-white !py-3 !px-5">Call Us</a>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center rounded-full border border-white/40 px-5 py-3 text-[0.8rem] font-bold hover:bg-white/10 transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-3">
          {faqs.map((item, i) => {
            const open = active === i;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all ${open ? "border-primary/40 bg-surface shadow-sm" : "border-line bg-white"}`}
              >
                <button
                  onClick={() => setActive(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 cursor-pointer"
                  aria-expanded={open}
                >
                  <span className={`text-sm sm:text-base font-bold ${open ? "text-primary" : "text-ink"}`}>{item.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      open ? "bg-brand-gradient text-white rotate-45" : "bg-tint text-primary"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm text-muted leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
