"use client";

import React from "react";
import { siteConfig } from "@/lib/brandIcon";

const channels = [
  {
    title: "Call us",
    text: "Mon–Fri, 9am–6pm CT",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
  {
    title: "Email us",
    text: "We reply within 24 hours",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    title: "Visit our office",
    text: "Mailing address",
    value: siteConfig.address,
    href: undefined,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-paper" id="contact">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <div className="lg:col-span-6">
          <span className="eyebrow mb-5">Get in touch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
            We&apos;d love to <span className="hl">hear from you</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted leading-relaxed">
            Questions about an order, a product or a bulk purchase for your office or classroom? Reach out — a real person will get back to you.
          </p>

          <div className="mt-8 space-y-4">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-primary-text shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {c.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-faint">{`${c.title} · ${c.text}`}</span>
                    <span className="mt-1 block font-display text-base sm:text-lg font-bold text-ink break-words">{c.value}</span>
                  </span>
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className="card flex items-center gap-4 p-5 transition-all hover:border-primary hover:shadow-lg">
                  {inner}
                </a>
              ) : (
                <div key={c.title} className="card flex items-center gap-4 p-5">
                  {inner}
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-faint">
            {`${siteConfig.brandName} is operated by ${siteConfig.corpName}. Charges appear on statements as "${siteConfig.descriptor}".`}
          </p>
        </div>

        <div className="lg:col-span-6 relative min-h-[360px] overflow-hidden rounded-[2rem]">
          <img src="/img/desk/standard-3.jpg" alt="Organized desk with notebooks, pens and office supplies" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 rounded-2xl bg-paper/95 p-5 sm:p-6 shadow-xl backdrop-blur">
            <p className="font-display text-lg font-bold text-ink">Ordering for a team?</p>
            <p className="mt-1 text-sm text-muted">
              Email us with what you need and how many — we&apos;ll help you put together the right supplies for your office or classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
