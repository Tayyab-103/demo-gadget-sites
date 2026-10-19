"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    title: "Free shipping",
    desc: `Sent with ${siteConfig.shippingCarrier}, arriving in ${siteConfig.shippingPeriod} business days.`,
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </>
    ),
  },
  {
    title: `${siteConfig.trialPeriod}-day returns`,
    desc: "Not the right fit for your kitchen? Send it back for a refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10"></polyline>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
      </>
    ),
  },
  {
    title: "Secure checkout",
    desc: "Card details are encrypted and handled by a PCI-compliant gateway.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </>
    ),
  },
  {
    title: "Real people on the phone",
    desc: `Talk to our team Monday to Friday at ${siteConfig.phone}.`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-surface border-b border-line" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 py-7 sm:px-6 lg:first:pl-0 border-b sm:border-b-0 last:border-b-0 border-line lg:border-r lg:last:border-r-0"
          >
            <span className="w-11 h-11 rounded-xl bg-neutral-bg text-ink flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
            </span>
            <div>
              <h3 className="text-sm font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
