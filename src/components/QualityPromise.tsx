"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: `${siteConfig.trialPeriod}-day garden trial`,
    desc: "Use your tools in real soil. If they don't earn their place in your shed, reach out and we'll sort it.",
  },
  {
    title: "Free, tracked shipping",
    desc: `Every order ships free with ${siteConfig.shippingCarrier} and arrives in ${siteConfig.shippingPeriod} business days.`,
  },
  {
    title: "Secure checkout",
    desc: "Pay safely with Visa or Mastercard through our encrypted checkout.",
  },
  {
    title: "Real people, real answers",
    desc: `Questions about care or sizing? Call ${siteConfig.phone} or email us — we reply within one business day.`,
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-neutral-bg py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary text-white grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-full">
            <Image
              src="/img/quality_promise_banner.jpg"
              alt="Garden trowel, fork and pruners resting in a planted vegetable bed"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-primary/70" />
          </div>

          <div className="p-7 sm:p-10 lg:p-14">
            <span className="eyebrow eyebrow-invert">Our Promise</span>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl mt-4 leading-tight">
              Shop with <em className="text-accent-light">confidence</em>.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-lg">
              Buying tools online should feel as easy as picking them off a garden-center shelf. Here&apos;s what comes with every order.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {promises.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span className="mt-0.5 w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-semibold">{p.title}</span>
                    <span className="block mt-1 text-sm text-white/65 leading-relaxed">{p.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
