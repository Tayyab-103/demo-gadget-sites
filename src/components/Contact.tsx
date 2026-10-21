"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/brand";
import SectionHeading from "@/components/SectionHeading";

const channels = [
  {
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  },
  {
    label: "Email us",
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
    label: "Mailing address",
    value: siteConfig.address,
    href: undefined,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-wash relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>We&apos;re here to <span className="text-gradient">help</span></>}
          description="Questions about sizing, bundles or an existing order? Send us a message and we'll get back to you within one business day."
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-[1.75rem] overflow-hidden h-48 sm:h-56">
              <img src="/img/contact3.png" alt="French bulldog in a yellow hoodie" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <p className="absolute bottom-4 left-5 right-5 text-white font-display text-xl font-semibold">
                Mon – Fri, 9:00 AM – 6:00 PM CT
              </p>
            </div>
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="w-11 h-11 rounded-xl bg-brand-gradient text-primary-text flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-faint">{c.label}</span>
                    <span className="block text-sm font-bold text-ink break-words">{c.value}</span>
                  </span>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="card flex items-center gap-4 p-4 hover:border-primary transition-colors">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="card flex items-center gap-4 p-4">
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-7 card p-6 sm:p-9 flex flex-col justify-center">
            {contactSubmitted ? (
              <div className="text-center py-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-gradient text-primary-text flex items-center justify-center text-2xl mb-4 font-bold">✓</div>
                <h3 className="font-display text-2xl font-semibold text-ink mb-2">Message sent!</h3>
                <p className="text-muted text-sm max-w-sm mb-8 leading-relaxed">
                  Thanks for reaching out to {siteConfig.brandName}. A member of our team will reply within one business day.
                </p>
                <button
                  className="bg-ink text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-primary-deep transition-colors cursor-pointer"
                  onClick={() => setContactSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                  (e.target as HTMLFormElement).reset();
                }}
                className="space-y-4"
              >
                <h3 className="font-display text-2xl font-semibold text-ink mb-2">Send us a message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-xs font-bold text-muted mb-2">Your name</span>
                    <input type="text" required placeholder="Jane Doe" className="field" />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-bold text-muted mb-2">Email address</span>
                    <input type="email" required placeholder="jane@example.com" className="field" />
                  </label>
                </div>
                <label className="block">
                  <span className="block text-xs font-bold text-muted mb-2">Topic</span>
                  <select className="field cursor-pointer">
                    <option>Product question</option>
                    <option>Bundles &amp; pricing</option>
                    <option>Order status &amp; {siteConfig.shippingCarrier} tracking</option>
                    <option>Returns &amp; {siteConfig.trialPeriod}-day guarantee</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block text-xs font-bold text-muted mb-2">Message</span>
                  <textarea rows={5} required placeholder="Tell us a little about your pet and how we can help…" className="field resize-none" />
                </label>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-primary-deep font-bold text-sm py-4 rounded-full transition-colors cursor-pointer"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
