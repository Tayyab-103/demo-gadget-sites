"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    title: `Free ${siteConfig.shippingCarrier} Shipping`,
    description: `Every order ships free and arrives in ${siteConfig.shippingPeriod} business days, with tracking emailed as soon as it leaves the store.`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"></polyline>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
      </svg>
    ),
    title: `${siteConfig.trialPeriod}-Day Returns`,
    description: `Not the right fit? Contact us within ${siteConfig.trialPeriod} days of delivery and we'll help you with a return.`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: "Inspected Before Shipping",
    description: "Each item is checked and carefully packed by our team so it arrives in great shape and ready to play.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "Secure Checkout",
    description: "Encrypted payments with Visa and Mastercard, and a clear one-time charge with no hidden fees.",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="eyebrow">Why Shop With Us</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-black text-neutral-text tracking-tight">
            Less hassle. <span className="text-gradient">More music.</span>
          </h2>
          <p className="mt-4 text-muted text-sm md:text-base max-w-2xl mx-auto">
            Shopping at {siteConfig.brandName} is simple — fair prices, fast delivery and a team that knows its gear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div key={idx} className="card card-hover group relative p-7 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-secondary/20 transition-colors duration-500" />
              <div className="relative w-12 h-12 rounded-2xl bg-brand-gradient text-primary-text flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                {feature.icon}
              </div>
              <h3 className="relative text-base font-black text-neutral-text mb-2">{feature.title}</h3>
              <p className="relative text-xs sm:text-sm text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
