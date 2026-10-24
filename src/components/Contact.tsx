"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactMethods = [
  {
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
  {
    label: "Visit Us",
    value: siteConfig.address,
    href: undefined,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    label: "Support Hours",
    value: "Mon – Fri, 9am – 6pm",
    href: undefined,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-12 md:py-16 bg-primary relative overflow-hidden" id="contact">
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-secondary/5 blur-3xl" aria-hidden="true" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-[700px] mx-auto text-center mb-14 md:mb-16">
          <span className="eyebrow eyebrow-invert justify-center mb-4">Reach Out</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4 tracking-tight">
            Have Questions? <span className="text-secondary">Get in Touch</span>
          </h2>
          <p className="text-white/65 text-sm md:text-base">
            Our customer care representatives are available to help guide you on products, shipping, or billing support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method) => {
            const content = (
              <div className="h-full w-full min-w-0 flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-8 transition-all duration-300 hover:bg-white/10 hover:border-secondary/30 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0">
                  {method.icon}
                </div>
                <div className="w-full min-w-0">
                  <div className="text-[0.65rem] text-white/50 uppercase tracking-widest font-bold mb-1.5">{method.label}</div>
                  <div className="font-semibold text-sm text-white break-all">{method.value}</div>
                </div>
              </div>
            );

            return method.href ? (
              <a key={method.label} href={method.href} className="block h-full min-w-0">
                {content}
              </a>
            ) : (
              <div key={method.label} className="h-full min-w-0">
                {content}
              </div>
            );
          })}
        </div>

        <div className="text-center px-2">
          <Link
            href="/#faq"
            className="group inline-flex max-w-full items-center justify-center gap-2 font-bold text-center bg-secondary text-secondary-text hover:bg-white hover:text-primary transition-all duration-300 py-3.5 px-6 sm:py-4 sm:px-9 rounded-full text-[0.7rem] sm:text-xs uppercase tracking-wider sm:tracking-widest shadow-lg shadow-secondary/10"
          >
            <span>Browse Common Questions</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
