"use client";

import React, { useState } from "react";
import { siteConfig, trialDays } from "@/lib/brandIcon";

interface FaqGroup {
  id: string;
  label: string;
  questions: { q: string; a: string }[];
}

const faqGroups: FaqGroup[] = [
  {
    id: "orders",
    label: "Orders & shipping",
    questions: [
      {
        q: "How long does delivery take?",
        a: `Orders are packed within 1–2 business days and shipped with ${siteConfig.shippingCarrier}. Delivery usually takes ${siteConfig.shippingPeriod} business days.`,
      },
      {
        q: "How do I track my package?",
        a: `As soon as your order ships we email you a ${siteConfig.shippingCarrier} tracking link, so you can follow it all the way to your door.`,
      },
      {
        q: "Can I change my shipping address after ordering?",
        a: `Yes — contact us at ${siteConfig.email} or ${siteConfig.phone} as soon as possible. If the order hasn't shipped yet, we'll update the address for you.`,
      },
    ],
  },
  {
    id: "returns",
    label: "Trial & returns",
    questions: [
      {
        q: `How does the ${trialDays}-day trial work?`,
        a: `Use your new supplies at your own desk. If they aren't right for you, contact us within ${trialDays} days of delivery and we'll walk you through a return.`,
      },
      {
        q: "When will I see my refund?",
        a: `Once your return arrives, refunds are processed to your original payment method within 5–7 business days. It will appear on your statement as "${siteConfig.descriptor}".`,
      },
      {
        q: "What if something arrives damaged?",
        a: `We're sorry when that happens! Email ${siteConfig.email} with your order number and a quick photo, and we'll make it right.`,
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    questions: [
      {
        q: "How do I fill the fountain pen?",
        a: "Unscrew the barrel, dip the nib fully into the ink bottle and twist the converter to draw ink up. Wipe the nib with a tissue and you're ready to write.",
      },
      {
        q: "Are the notebooks good for everyday pens?",
        a: "Yes. Our journals and notebooks are made for daily writing with ballpoints, gel pens, pencils and fountain pens.",
      },
      {
        q: "Do you offer gift-ready sets?",
        a: "Our Notebook & Pen Desk Gift Set arrives in its own presentation case, so it's ready to give straight out of the box.",
      },
    ],
  },
  {
    id: "billing",
    label: "Payments & billing",
    questions: [
      {
        q: "Which payment methods do you accept?",
        a: "We accept Visa and Mastercard credit and debit cards through our secure checkout.",
      },
      {
        q: "What will appear on my bank statement?",
        a: `Charges from ${siteConfig.brandName} appear as "${siteConfig.descriptor}".`,
      },
    ],
  },
];

export default function Faq() {
  const [groupId, setGroupId] = useState(faqGroups[0].id);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const group = faqGroups.find((g) => g.id === groupId) ?? faqGroups[0];

  const selectGroup = (id: string) => {
    setGroupId(id);
    setOpenIdx(0);
  };

  return (
    <section className="py-20 sm:py-24 bg-paper" id="faq">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: heading + help card */}
        <div className="lg:col-span-4">
          <span className="eyebrow mb-5">Help desk</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
            Questions? <span className="hl">Answers.</span>
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Everything you need to know about ordering, shipping and returns. Still stuck? We&apos;re a quick message away.
          </p>

          <div className="mt-8 rounded-3xl bg-ink p-6 text-paper">
            <p className="text-sm font-semibold text-primary">Talk to a person</p>
            <a href={`tel:${siteConfig.phone}`} className="mt-2 block font-display text-2xl font-bold hover:text-primary transition-colors">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-paper/70 break-all hover:text-primary transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Right: tabs + accordion */}
        <div className="lg:col-span-8">
          <div className="no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto pb-1" role="tablist">
            {faqGroups.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={g.id === groupId}
                onClick={() => selectGroup(g.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
                  g.id === groupId ? "bg-brand-gradient text-primary-text shadow-md" : "border border-line text-muted hover:text-ink hover:border-primary"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {group.questions.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border transition-all ${isOpen ? "border-primary bg-surface shadow-sm" : "border-line bg-paper hover:border-primary/60"}`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-ink text-sm sm:text-base">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ${
                        isOpen ? "bg-ink text-primary rotate-45" : "bg-sun text-ink"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
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
