"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, trialDays } from "@/lib/brandIcon";

const steps = [
  {
    num: "01",
    title: "Pick your essentials",
    text: "Browse pens and ink, everyday journals and ready-to-give desk sets. Every product page shows clear photos and what's included.",
    image: "/img/desk/cta1.jpg",
    alt: "Notebooks, scissors and desk supplies laid out on a white table",
  },
  {
    num: "02",
    title: "We pack it with care",
    text: `Orders are packed within 1–2 business days and handed to ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days with tracking.`,
    image: "/img/desk/standard-2.jpg",
    alt: "Open notebooks with a gold pen and a gel pen",
  },
  {
    num: "03",
    title: "Write, plan, enjoy",
    text: `Put your new supplies to work. You have ${trialDays} days to make sure they suit your desk — our support team is here if they don't.`,
    image: "/img/desk/step1-craft-essentials.jpg",
    alt: "Journal open on a desk next to a fountain pen and ink",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-surface overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 grid-paper opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">How it works</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
              From cart to desk in <span className="hl">three easy steps</span>
            </h2>
          </div>
          <Link href="/shop" className="btn-dark self-start md:self-auto">
            Start shopping
          </Link>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <li
              key={step.num}
              className={`group card relative overflow-hidden p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                i === 1 ? "md:translate-y-8 md:hover:translate-y-6" : ""
              }`}
            >
              <div className="relative h-56 overflow-hidden rounded-[1.1rem]">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient font-display text-lg font-bold text-primary-text shadow-lg">
                  {step.num}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
