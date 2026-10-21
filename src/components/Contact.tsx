"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = ["/img/contact_1.jpg", "/img/contact_2.jpg", "/img/contact_3.jpg"];

interface ContactProps {
  showHeader?: boolean;
  showForm?: boolean;
}

const contactCards = [
  {
    icon: "☎",
    title: "Call the Store",
    note: "Mon – Fri, 9:00 AM – 6:00 PM CST",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: "✉",
    title: "Email Support",
    note: "We reply within 24 hours",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "⌖",
    title: "Our Address",
    note: siteConfig.address,
    value: "Open Contact Page",
    href: "/contact",
  },
];

export default function Contact({ showHeader = true, showForm = true }: ContactProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!showForm) return;
    const timer = setInterval(() => setActiveImage((i) => (i + 1) % contactImages.length), 4500);
    return () => clearInterval(timer);
  }, [showForm]);

  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="contact">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-black text-neutral-text tracking-tight">
              Questions? <span className="text-gradient">We&apos;re all ears.</span>
            </h2>
            <p className="mt-4 text-muted text-sm md:text-base">
              Need help choosing gear, tracking an order or starting a return? Our team is happy to help.
            </p>
          </div>
        )}

        {showForm ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Visual + Info */}
            <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] border border-line">
              {contactImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`${siteConfig.brandName} — music and live sound`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg via-neutral-bg/70 to-neutral-bg/10" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 md:p-10">
                <div className="flex gap-2 mb-6">
                  {contactImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeImage ? "w-8 bg-brand-gradient" : "w-3 bg-white/30"
                      }`}
                      aria-label={`Show image ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-light block mb-1">
                  Store Address
                </span>
                <p className="text-sm font-semibold text-white/90 mb-6">{siteConfig.address}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3.5 bg-white/5 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/10 flex-1 hover:border-primary/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center flex-shrink-0 font-bold">☎</div>
                    <div className="min-w-0">
                      <div className="text-[0.62rem] text-white/55 uppercase tracking-widest font-bold">Call Us</div>
                      <div className="font-bold text-sm text-white mt-0.5">{siteConfig.phone}</div>
                    </div>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3.5 bg-white/5 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/10 flex-1 hover:border-primary/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center flex-shrink-0 font-bold">✉</div>
                    <div className="min-w-0">
                      <div className="text-[0.62rem] text-white/55 uppercase tracking-widest font-bold">Email</div>
                      <div className="font-bold text-xs text-white mt-0.5 break-all">{siteConfig.email}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card p-6 sm:p-8 md:p-10">
              {contactSubmitted ? (
                <div className="text-center py-12 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center text-3xl mx-auto mb-6 font-bold shadow-lg shadow-primary/30">
                    ✓
                  </div>
                  <h3 className="text-neutral-text font-black text-2xl mb-2">Message Received!</h3>
                  <p className="text-muted text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out to {siteConfig.brandName}. A member of our team will reply within 24 hours.
                  </p>
                  <button className="btn-primary py-3.5 px-8 text-xs uppercase tracking-widest" onClick={() => setContactSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                    (e.target as HTMLFormElement).reset();
                  }}
                >
                  <h3 className="text-xl font-black text-neutral-text mb-1">Send us a message</h3>
                  <p className="text-xs text-muted mb-7">Fill out the form and we&apos;ll get back to you shortly.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-faint">Full Name</label>
                      <input type="text" className="field" placeholder="e.g. Jordan Reyes" required />
                    </div>
                    <div>
                      <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-faint">Email Address</label>
                      <input type="email" className="field" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-faint">Subject</label>
                    <input type="text" className="field" placeholder="e.g. Order status, product question, return" required />
                  </div>

                  <div className="mb-7">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-faint">Your Message</label>
                    <textarea className="field resize-none" rows={5} placeholder="How can we help?" required></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 px-8 text-xs uppercase tracking-widest">
                    Send Message <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactCards.map((c) => {
              const isInternal = c.href.startsWith("/");
              const inner = (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center text-2xl mb-5 shadow-lg shadow-primary/30">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-black text-neutral-text mb-1">{c.title}</h3>
                  <p className="text-xs text-muted mb-4">{c.note}</p>
                  <span className="text-sm font-black text-primary-light group-hover:text-secondary-light transition-colors break-all">
                    {c.value} {isInternal && "→"}
                  </span>
                </>
              );
              return isInternal ? (
                <Link key={c.title} href={c.href} className="card card-hover group p-8 flex flex-col items-center text-center">
                  {inner}
                </Link>
              ) : (
                <a key={c.title} href={c.href} className="card card-hover group p-8 flex flex-col items-center text-center">
                  {inner}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
