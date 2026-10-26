"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

// showForm=false renders only the contact details (home page); the form lives on /contact
export default function Contact({ showForm = true }: { showForm?: boolean }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const details = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ),
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      ),
    },
    {
      label: "Address",
      value: siteConfig.address,
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      label: "Website",
      value: siteConfig.websiteUrl,
      icon: (
        <>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </>
      ),
    },
  ];

  if (!showForm) {
    return (
      <section className="py-16 sm:py-20 md:py-24 bg-neutral-bg" id="contact">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-text p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-0 peak-pattern opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-xl">
                <span className="eyebrow eyebrow-light">Contact</span>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.04]">
                  We&apos;re here to <span className="text-secondary">help</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                  Sizing advice, order updates or return requests. Reach our team any way you like.
                </p>
              </div>
              <Link href="/contact" className="btn-gold self-start lg:self-auto">
                Send us a message
              </Link>
            </div>

            <ul className="relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.map((d) => {
                const inner = (
                  <>
                    <span className="w-11 h-11 rounded-xl bg-secondary text-secondary-text flex items-center justify-center flex-shrink-0">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {d.icon}
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/50">{d.label}</span>
                      <span className="mt-1 block text-sm sm:text-base font-semibold break-words">{d.value}</span>
                    </span>
                  </>
                );
                const box = "h-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5";
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a href={d.href} className={`${box} hover:border-secondary/60 hover:bg-white/10 transition-colors`}>
                        {inner}
                      </a>
                    ) : (
                      <div className={box}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-bg" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              We&apos;re here to <span className="hl">help</span>
            </>
          }
          subtitle="Sizing advice, order updates or return requests. Send us a message and we'll reply within one business day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Info card */}
          <div className="lg:col-span-5 rounded-[1.75rem] bg-primary text-primary-text p-7 sm:p-9 relative overflow-hidden">
            <div className="absolute inset-0 peak-pattern opacity-40" aria-hidden="true" />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                {siteConfig.brandName}
              </h3>
              <p className="mt-2 text-sm text-white/65">Customer support, Monday to Friday.</p>

              <ul className="mt-8 flex flex-col gap-5">
                {details.map((d) => {
                  const inner = (
                    <>
                      <span className="w-11 h-11 rounded-xl bg-secondary text-secondary-text flex items-center justify-center flex-shrink-0">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {d.icon}
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/50">{d.label}</span>
                        <span className="block text-sm font-semibold break-words">{d.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a href={d.href} className="flex items-center gap-4 hover:text-secondary transition-colors">
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 card p-6 sm:p-9">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <span className="w-14 h-14 rounded-full bg-secondary text-secondary-text flex items-center justify-center text-2xl font-black">✓</span>
                <h3 className="mt-5 text-xl font-black uppercase text-ink">Message sent</h3>
                <p className="mt-2 text-sm text-muted max-w-sm">
                  Thanks for reaching out. Our team will reply to your email within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-ink">Full name</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jordan Smith" required className="field" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-ink">Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="field" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-ink">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help? Include your order number if you have one."
                    rows={6}
                    required
                    className="field resize-none"
                  />
                </label>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted">We only use your details to answer your message.</p>
                  <button type="submit" className="btn-plum">
                    Send message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
