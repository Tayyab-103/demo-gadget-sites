"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import SectionHeading from "@/components/SectionHeading";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Free tracked shipping",
    text: `Every order ships free with ${siteConfig.shippingCarrier} and arrives in ${siteConfig.shippingPeriod} business days.`,
    icon: (
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    ),
  },
  {
    title: `${siteConfig.trialPeriod}-day returns`,
    text: "Live with it at home. If it isn't right, contact us for a simple return and refund.",
    icon: <path d="M4 4v6h6M20 20v-6h-6M5 15a7 7 0 0 0 12 3M19 9A7 7 0 0 0 7 6" />,
  },
  {
    title: "Natural materials",
    text: "Solid oak, textured stoneware, linen, and soft knit yarns in warm, natural tones.",
    icon: <path d="M12 21c-5-3-8-7-8-11a8 8 0 0 1 16 0c0 4-3 8-8 11zM12 21V9" />,
  },
  {
    title: "Real support",
    text: `Questions before or after you order? Call ${siteConfig.phone} or email our team.`,
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  },
];

export default function QualityPromise() {
  return (
    <section id="standards" className="relative bg-neutral-bg py-16 sm:py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="The Harbor Promise"
          title={<>Made simple, <span className="italic text-primary">from cart to corner.</span></>}
          description="Shopping for your home should feel as relaxed as the pieces themselves."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Feature image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px]">
            <Image
              src="/img/brand/how_step3.jpg"
              alt={`Bright living room styled with ${siteConfig.brandName} pieces`}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-primary-text">
              <p className="font-serif text-2xl sm:text-3xl leading-snug">
                &ldquo;Home is the place where the little things matter most.&rdquo;
              </p>
              <span className="block mt-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
                {siteConfig.brandName}
              </span>
            </div>
          </div>

          {/* Promise cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {promises.map((p, idx) => (
              <div
                key={p.title}
                className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  idx === 0
                    ? "bg-primary text-primary-text border-primary"
                    : "bg-surface text-neutral-text border-secondary/60 hover:border-secondary"
                }`}
              >
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    idx === 0 ? "bg-primary-text/15 text-primary-text" : "bg-secondary text-secondary-text"
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${idx === 0 ? "text-primary-text/80" : "text-neutral-text/65"}`}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
