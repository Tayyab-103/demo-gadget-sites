"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactMethods = [
  {
    label: "Phone Support",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    caption: "Mon–Fri • 9am–6pm EST",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    label: "Email Concierge",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    caption: "Response within 24 hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
  {
    label: "Headquarters",
    value: siteConfig.address,
    href: undefined,
    caption: "Austin, TX Fulfillment Hub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    label: "Fast Shipping",
    value: `${siteConfig.shippingPeriod} Business Days`,
    href: undefined,
    caption: `Delivered nationwide via ${siteConfig.shippingCarrier}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-28" id="contact">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center mb-3">Direct Concierge</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            We Are Here For <span className="text-secondary">Your Journey</span>
          </h2>
          <div className="mx-auto mt-4 mb-4 w-10 h-px bg-secondary" />
          <p className="text-neutral-text/65 text-xs sm:text-sm md:text-base leading-relaxed">
            Have questions about dimensions, bundle discounts, or tracking your order? Reach our domestic team directly.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => {
            const cardInner = (
              <div className="h-full p-6 sm:p-7 rounded-xl bg-neutral-bg border border-black/6 hover:border-secondary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-1">
                    {method.label}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary break-words leading-snug">
                    {method.value}
                  </h3>
                </div>
                <p className="mt-4 pt-3 border-t border-black/6 text-[0.68rem] text-neutral-text/50 font-medium">
                  {method.caption}
                </p>
              </div>
            );

            return method.href ? (
              <a key={method.label} href={method.href} className="block transition-transform hover:-translate-y-1">
                {cardInner}
              </a>
            ) : (
              <div key={method.label}>{cardInner}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
