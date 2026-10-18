"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    number: "01",
    title: "Find Your Glow",
    description:
      "Explore necklaces, watches and clocks, then choose a single piece or a money-saving bundle for gifting and matching sets.",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=900&q=80",
    icon: (
      <>
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </>
    ),
  },
  {
    number: "02",
    title: "Check Out Securely",
    description:
      "Enter your shipping details and pay with Visa or Mastercard on our encrypted checkout. Your order is confirmed instantly.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    number: "03",
    title: "Unbox Something Beautiful",
    description: `We pack every piece in a keepsake gift box and send it free with ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days.`,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&q=80",
    icon: (
      <>
        <path d="M20 12v10H4V12" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24" id="how-it-works">
      <div className="dot-grid pointer-events-none absolute -left-6 top-10 h-48 w-48 opacity-60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <span className="eyebrow mb-5 justify-center">Simple As 1-2-3</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            From Our Studio to <span className="marker">Your Door</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-text/60 md:text-base">
            Shopping {siteConfig.brandName}{" "}takes just a few minutes. Here&apos;s how your next favorite piece finds its way
            to you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col overflow-hidden rounded-4xl border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/40 to-transparent" />
                <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/85 drop-shadow">
                  {step.number}
                </span>
              </div>

              {/* Icon node sits on the image edge */}
              <div className="relative z-10 -mt-7 ml-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-text shadow-lg shadow-primary/40 ring-4 ring-white transition-transform duration-500 group-hover:rotate-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {step.icon}
                </svg>
              </div>

              <div className="flex flex-1 flex-col px-7 pb-8 pt-5">
                <h3 className="mb-3 text-xl font-bold text-ink md:text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-text/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
