"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactDetails = [
  {
    label: "Telemetry Dispatch",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    label: "Direct Email Sync",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    label: "HQ Gear Studio",
    value: siteConfig.address,
    href: undefined,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  }
];

export default function Contact() {
  return (
    <section className="py-10 md:py-14 bg-primary relative overflow-hidden select-none" id="contact">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-[-30%] right-[-100px] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-[-20%] left-[-200px] w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Responsive centered container */}
      <div className="w-full max-w-5xl mx-auto px-6 relative z-25">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="eyebrow eyebrow-invert justify-center mb-3">Gear Concierge</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-none mb-4">
            Connect with <span className="text-secondary">Our Team</span>
          </h2>
          <p className="text-white/70 text-xs leading-relaxed mx-auto max-w-xl">
            Skip the generic queue. Dial or email our specialized department labs directly. Our adventure specialists are available to guide your gear selections, pack fittings, sizing advice, or telemetry tracking.
          </p>
        </div>

        {/* Info Cards Row (3 columns side-by-side) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 w-full max-w-4xl mx-auto">
          {contactDetails.map((method) => {
            const inner = (
              <div className="h-full flex flex-col items-center text-center gap-2.5 bg-white/5 border border-white/10 hover:border-secondary/25 hover:bg-white/10 p-5 rounded-2xl backdrop-blur-md transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[0.58rem] font-bold uppercase tracking-wider text-white/40 block mb-1">
                    {method.label}
                  </span>
                  <span className="text-[0.72rem] sm:text-xs font-bold text-white block break-words leading-snug">
                    {method.value}
                  </span>
                </div>
              </div>
            );

            return method.href ? (
              <a key={method.label} href={method.href} className="block w-full h-full">
                {inner}
              </a>
            ) : (
              <div key={method.label} className="w-full h-full">
                {inner}
              </div>
            );
          })}
        </div>

        {/* Support hours and FAQ redirect */}
        <div className="text-center mt-8 space-y-4">
          <div className="flex items-center justify-center gap-2 text-white/50 text-[0.62rem] font-bold uppercase tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Telemetry Support: Mon – Fri, 9am – 6pm</span>
          </div>

          <div className="pt-1">
            <Link
              href="/#faq"
              className="inline-flex items-center justify-center gap-1.5 font-bold text-center bg-white/5 border border-white/10 hover:bg-white/10 text-white hover:text-secondary transition-all duration-300 py-3 px-6 rounded-full text-[0.68rem] uppercase tracking-widest"
            >
              Browse FAQ
              <span className="text-[10px]">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
