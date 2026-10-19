"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const channels = [
  {
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>,
  },
  {
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </>
    ),
  },
  {
    label: "Mailing address",
    value: siteConfig.address,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </>
    ),
  },
];

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-neutral-bg" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-4">We&rsquo;re here to help</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Questions about a tool, an order or a return? Reach the {siteConfig.brandName} team Monday to Friday, 9am&ndash;5pm
            CT. We reply to every email within one business day.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {channels.map((c) => {
              const content = (
                <>
                  <span className="w-11 h-11 rounded-xl bg-neutral-bg text-ink flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{c.label}</span>
                    <span className="block text-sm font-semibold text-ink break-words">{c.value}</span>
                  </span>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="card flex items-center gap-4 p-4 hover:border-ink transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7 card p-6 sm:p-10">
          {contactSubmitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-text flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink">Message sent</h3>
              <p className="mt-2 text-sm text-muted max-w-sm mx-auto">
                Thanks for contacting {siteConfig.brandName}. We&rsquo;ll get back to you within one business day.
              </p>
              <button onClick={() => setContactSubmitted(false)} className="btn-outline mt-6">
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
              className="flex flex-col gap-5"
            >
              <h3 className="text-xl font-bold text-ink">Send us a message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="field-label">Full name</label>
                  <input id="contact-name" type="text" required placeholder="Jane Doe" className="field" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="field-label">Email address</label>
                  <input id="contact-email" type="email" required placeholder="you@example.com" className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="field-label">Subject</label>
                <input id="contact-subject" type="text" required placeholder="Order, product question, return..." className="field" />
              </div>
              <div>
                <label htmlFor="contact-message" className="field-label">Message</label>
                <textarea id="contact-message" rows={5} required placeholder="How can we help?" className="field resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto sm:self-start">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
