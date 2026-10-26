"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig, trialDays } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const faqItems = [
  {
    question: "How do returns work?",
    answer: `If something doesn't fit or isn't right for you, contact us within ${trialDays} days of delivery at ${siteConfig.email} or ${siteConfig.phone}. We'll give you a return authorization number and the return address, and refund the original payment once the item arrives back with us.`,
  },
  {
    question: "What are the products made from?",
    answer: "The compression baselayer uses a four-way stretch polyester and spandex knit with flatlock seams. The training hoodie is a soft brushed fleece. The crew socks use a cushioned knit footbed with breathable mesh zones and a ribbed arch band.",
  },
  {
    question: "How fast will my order arrive?",
    answer: `Orders are packed within 1-2 business days and shipped free with ${siteConfig.shippingCarrier}. Delivery usually takes ${siteConfig.shippingPeriod} business days, and you'll get a tracking number by email.`,
  },
  {
    question: "How do I pick the right size?",
    answer: "All pieces follow standard US sizing. The baselayer is designed to fit close to the body, so if you prefer a looser feel, go one size up. Not sure? Contact our team with your usual size and we'll help.",
  },
  {
    question: "Is this a subscription?",
    answer: "No. Every order is a single, one-time charge for the pack you choose. There are no recurring payments or memberships.",
  },
  {
    question: "What will I see on my card statement?",
    answer: `The charge will appear as "${siteConfig.descriptor}".`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="hl">answered</span>
              </>
            }
            subtitle="Sizing, shipping, returns and billing. Can't find what you need? Our team is a message away."
          />

          <div className="rounded-[1.5rem] bg-primary text-primary-text p-6 sm:p-7 -mt-2">
            <p className="text-sm font-black uppercase tracking-[0.1em]">Talk to our team</p>
            <a href={`tel:${siteConfig.phone}`} className="mt-3 block text-2xl font-black text-secondary hover:underline">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-white/70 break-all hover:text-white">
              {siteConfig.email}
            </a>
            <Link href="/contact" className="btn-gold mt-6 !py-3">
              Contact us
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqItems.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen ? "border-primary/25 bg-mist" : "border-line bg-white hover:border-primary/25"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs font-black text-gold-ink">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm sm:text-base font-black text-ink">{item.question}</span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-bold transition-all duration-200 flex-shrink-0 ${
                      isOpen ? "bg-secondary text-secondary-text rotate-45" : "bg-neutral-bg text-primary"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 pl-[3.25rem] sm:pl-[3.6rem] text-sm text-muted leading-relaxed">{item.answer}</p>
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
