"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How long does shipping take, and what does it cost?",
    answer: `Shipping is free on every order. Orders leave us within 1–2 business days and travel with ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days. You'll get a tracking link by email as soon as your parcel ships.`,
  },
  {
    question: "What is your return policy?",
    answer: `You have ${siteConfig.trialPeriod} days from delivery to try your tools. If you're not happy, email ${siteConfig.email} or call ${siteConfig.phone} and we'll help you send it back for a refund to your original payment method.`,
  },
  {
    question: "Are the tools dishwasher safe?",
    answer: "The balloon whisk and kitchen shears can go on the top rack of the dishwasher (take the shears apart at the pivot first). The digital scale is electronic — wipe the stainless platform and body with a damp cloth and never submerge it.",
  },
  {
    question: "Is this a one-time purchase or a subscription?",
    answer: "Every order is a one-time purchase. There are no memberships, subscriptions or recurring charges.",
  },
  {
    question: "How will the charge appear on my card statement?",
    answer: `Your statement will show "${siteConfig.descriptor}". If you don't recognise a charge, contact us at ${siteConfig.phone} and we'll look it up straight away.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-neutral-bg" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-4">Good questions, straight answers</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Can&rsquo;t find what you&rsquo;re looking for? Our team is happy to help.
          </p>
          <Link href="/contact" className="btn-outline mt-6">
            Contact support
          </Link>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-3">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-colors ${isOpen ? "bg-surface border-line shadow-md" : "bg-surface border-line"}`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{item.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen ? "bg-primary text-primary-text rotate-45" : "bg-neutral-bg text-ink"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-sm text-muted leading-relaxed">{item.answer}</p>
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
