"use client";

import { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "How fast will my order ship and arrive?",
    answer: `Orders are processed and shipped within 1-2 business days of payment confirmation. We ship with ${siteConfig.shippingCarrier}, and delivery typically takes ${siteConfig.shippingPeriod} business days. Shipping is free on every order.`,
  },
  {
    question: "What is your return and refund policy?",
    answer: `We offer a 60-day money-back guarantee. Contact us at ${siteConfig.email} to start a return, then ship the item to ${siteConfig.address}. Refunds are issued to your original payment method within 5-7 business days of receiving the return.`,
  },
  {
    question: "How do multi-pack bundles work?",
    answer: "Each product can be ordered as a single unit or in multi-packs. The more units in a pack, the lower the price per unit — the exact bundle price is shown before you add it to your cart, with no hidden fees.",
  },
  {
    question: "How will the charge appear on my card statement?",
    answer: `Your purchase will appear on your statement as "${siteConfig.descriptor}".`,
  },
  {
    question: "How do I contact customer support?",
    answer: `Call us at ${siteConfig.phone} (Mon–Fri, 9am–6pm CST) or email ${siteConfig.email}. We reply to every message within 24 hours.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-surface relative overflow-hidden py-16 md:py-24" id="faq">
      <div className="container-page">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left column */}
          <div className="flex w-full flex-col lg:sticky lg:top-36 lg:w-5/12 lg:self-start">
            <span className="eyebrow w-fit">Got Questions?</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="mb-10 mt-4 text-sm text-ink/60 md:text-base">
              Quick answers about shipping, returns, bundles and billing.
            </p>

            <div className="bg-brand-gradient relative overflow-hidden rounded-3xl p-8 text-white shadow-xl">
              <svg className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
              <div className="relative">
                <h3 className="mb-2 text-xl font-bold">Still have questions?</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/85">
                  Our customer care team is happy to help with parts, orders and billing.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-deep transition-transform hover:-translate-y-0.5"
                >
                  Get in Touch
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex w-full flex-col gap-4 lg:w-7/12">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen ? "border-primary/40 shadow-lg shadow-primary/5" : "border-line hover:border-primary/25"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`shrink-0 text-xs font-extrabold tracking-widest ${isOpen ? "text-primary" : "text-ink/30"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <strong className="text-sm font-bold text-ink md:text-base">{item.question}</strong>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-all duration-300 ${
                        isOpen ? "bg-brand-gradient rotate-45 text-white shadow-md" : "border border-line bg-surface text-ink"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="overflow-hidden px-5 transition-all duration-500 ease-in-out md:px-6"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <div className="border-t border-line pb-6 pl-9 pt-4 text-sm leading-relaxed text-ink/65">{item.answer}</div>
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
