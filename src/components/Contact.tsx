"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface ContactProps {
  showForm?: boolean;
}

const channels = [
  {
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    note: "Speak with our support team",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "We reply within one business day",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "Mailing address",
    value: siteConfig.address,
    href: undefined,
    note: siteConfig.corpName,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact({ showForm = false }: ContactProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const inputClass =
    "w-full bg-neutral-bg border border-black/10 rounded-xl px-4 py-3.5 text-sm text-neutral-text placeholder:text-neutral-text/40 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition";

  return (
    <section className="py-16 md:py-24 bg-surface" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Info column */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="eyebrow">Need a Hand?</span>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-primary mt-4 leading-tight">
              Talk to a <em className="text-secondary">real gardener</em>.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-text/70 leading-relaxed max-w-md">
              Questions about an order, which tool fits your beds, or how to keep blades sharp? Our support team is happy to help.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {channels.map((c) => {
                const content = (
                  <>
                    <span className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {c.icon}
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-neutral-text/50">{c.label}</span>
                      <span className="block text-sm font-semibold text-primary break-words">{c.value}</span>
                      <span className="block text-xs text-neutral-text/50 mt-0.5">{c.note}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} className="group flex items-center gap-4 bg-white rounded-2xl p-4 border border-black/5 hover:border-secondary/30 hover:shadow-md transition-all">
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 bg-white rounded-2xl p-4 border border-black/5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form / image column */}
          <div className="lg:col-span-7">
            {showForm ? (
              <div className="h-full bg-white rounded-[2rem] border border-black/5 shadow-sm p-6 sm:p-10 flex flex-col justify-center">
                {contactSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary mx-auto flex items-center justify-center mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="heading-serif text-2xl text-primary mb-2">Message sent!</h3>
                    <p className="text-neutral-text/70 text-sm max-w-md mx-auto mb-6">
                      Thanks for reaching out to {siteConfig.brandName}. We&apos;ll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="font-semibold bg-secondary text-white hover:bg-secondary-dark transition-colors py-3.5 px-7 rounded-full text-sm cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3 className="heading-serif text-2xl text-primary mb-1">Send us a message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="block text-xs font-semibold text-neutral-text/70 mb-1.5">Full name</span>
                        <input type="text" required placeholder="Jane Gardener" className={inputClass} />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-semibold text-neutral-text/70 mb-1.5">Email address</span>
                        <input type="email" required placeholder="jane@example.com" className={inputClass} />
                      </label>
                    </div>
                    <label className="block">
                      <span className="block text-xs font-semibold text-neutral-text/70 mb-1.5">Order number (optional)</span>
                      <input type="text" placeholder="e.g. 10482" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold text-neutral-text/70 mb-1.5">How can we help?</span>
                      <textarea rows={5} required placeholder="Tell us about your question, order or garden project..." className={`${inputClass} resize-none`} />
                    </label>
                    <button
                      type="submit"
                      className="w-full font-semibold text-sm bg-secondary hover:bg-secondary-dark text-white transition-colors py-4 px-6 rounded-full cursor-pointer mt-1"
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="relative h-full min-h-[360px] rounded-[2rem] overflow-hidden">
                <Image
                  src="/img/contact_workshop.jpg"
                  alt="Garden tools hanging on a rustic potting-shed wall"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5 text-white">
                  <div>
                    <h3 className="heading-serif text-2xl sm:text-3xl">Prefer to write it down?</h3>
                    <p className="text-sm text-white/75 mt-1">Send a message and we&apos;ll reply within one business day.</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-secondary hover:text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    Contact Form <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
