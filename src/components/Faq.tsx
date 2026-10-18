"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How much is shipping and how long does delivery take?",
    answer: `Shipping is free on every order. Orders are dispatched within 1-2 business days and ship with ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days. You'll receive a tracking number by email once your order ships.`,
  },
  {
    question: "What is your return policy?",
    answer: `You have ${siteConfig.trialPeriod} days from delivery to decide. If a piece isn't right for your home, contact us at ${siteConfig.email} or ${siteConfig.phone} for a return authorization, and your refund will be issued to your original payment method once the item is received.`,
  },
  {
    question: "Is this a one-time purchase or a subscription?",
    answer: "Every order is a one-time purchase. You are charged once for the items in your cart and will never be enrolled in a subscription or recurring billing.",
  },
  {
    question: "How do I care for my throw, lamp, and tray?",
    answer: "Spot clean or gently hand wash the knit throw and lay flat to dry. Dust the stoneware lamp base and linen shade with a soft dry cloth. Wipe the oak tray with a slightly damp cloth and dry it right away.",
  },
  {
    question: "How will the charge appear on my card statement?",
    answer: `Your purchase will appear on your statement as "${siteConfig.descriptor}".`,
  },
  {
    question: "How can I reach customer support?",
    answer: `Call us at ${siteConfig.phone} or email ${siteConfig.email}. Our team replies to every message within one business day.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface relative" id="faq">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* Left: heading + help card */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start">
          <span className="eyebrow mb-4">Questions &amp; Answers</span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-neutral-text">
            Good to know <span className="italic text-primary">before you order.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-text/65 leading-relaxed max-w-md">
            Shipping, returns, care, and billing &mdash; everything in one place. Still curious? We&apos;re happy to help.
          </p>

          <div className="mt-8 w-full bg-primary text-primary-text rounded-3xl p-6 sm:p-8">
            <h3 className="font-serif text-2xl">Still have a question?</h3>
            <p className="mt-2 text-sm text-primary-text/80 leading-relaxed">
              Our support team is a call or email away.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm font-semibold">
              <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`} className="hover:underline break-all">{siteConfig.email}</a>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-neutral-bg text-neutral-text hover:bg-secondary hover:text-secondary-text px-6 py-3 rounded-full text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-colors"
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? "bg-neutral-bg border-secondary shadow-lg shadow-primary/5" : "bg-neutral-bg/60 border-secondary/50 hover:bg-neutral-bg"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-4">
                    <span className="font-serif text-sm text-primary pt-0.5 flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-neutral-text leading-snug">
                      {item.question}
                    </span>
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                      isOpen ? "bg-primary text-primary-text rotate-45" : "bg-surface text-primary border border-secondary"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-all duration-500 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 pl-12 sm:pl-14 text-sm text-neutral-text/70 leading-relaxed">
                      {item.answer}
                    </p>
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
