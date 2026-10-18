"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import SectionHeading from "@/components/SectionHeading";

const siteConfig = siteConfigData as unknown as SiteConfig;

const inputClass =
  "block w-full px-4 py-3.5 text-sm border border-secondary/70 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-secondary/40 transition-all text-neutral-text bg-surface placeholder:text-neutral-text/35";
const labelClass = "block font-bold mb-2 text-[0.65rem] uppercase tracking-[0.16em] text-neutral-text/60";

export default function Contact({ showHeader = true }: { showHeader?: boolean }) {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const details = [
    { label: "Call us", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "Mailing address", value: siteConfig.address },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-bg relative" id="contact">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">

        {showHeader && (
          <SectionHeading
            eyebrow="Get in Touch"
            title={<>We&apos;d love to <span className="italic text-primary">hear from you.</span></>}
            description="Questions about a piece, an order, or a return? Send us a note and our team will reply within one business day."
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Info card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-primary text-primary-text flex flex-col">
            <div className="relative h-56 sm:h-64">
              <Image
                src="/img/brand/product2-2.jpg"
                alt="Table lamp glowing warmly in a cozy corner"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent" />
            </div>
            <div className="p-6 sm:p-8 pt-2 flex flex-col gap-5 flex-1">
              <h3 className="font-serif text-2xl sm:text-3xl">Customer care</h3>
              <ul className="flex flex-col gap-4">
                {details.map((d) => (
                  <li key={d.label} className="border-t border-primary-text/15 pt-4">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-secondary">{d.label}</span>
                    {d.href ? (
                      <a href={d.href} className="block mt-1 text-sm sm:text-base font-semibold hover:underline break-all">{d.value}</a>
                    ) : (
                      <span className="block mt-1 text-sm sm:text-base font-semibold">{d.value}</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-primary-text/70 mt-auto">Monday &ndash; Friday, 9am &ndash; 6pm CT</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-neutral-bg rounded-3xl p-6 sm:p-8 md:p-12 border border-secondary/70 shadow-xl shadow-primary/5">
            {contactSubmitted ? (
              <div className="text-center py-12 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-text flex items-center justify-center text-2xl mx-auto mb-6">
                  &#10003;
                </div>
                <h3 className="text-neutral-text font-serif text-3xl mb-3">Message received</h3>
                <p className="text-neutral-text/60 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting {siteConfig.brandName}. Our team will reply within one business day.
                </p>
                <button
                  className="inline-flex items-center justify-center font-bold bg-primary text-primary-text hover:bg-primary-dark transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-[0.16em] cursor-pointer"
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
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-neutral-text mb-6">Send us a message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Full name</label>
                    <input id="contact-name" type="text" className={inputClass} placeholder="Jane Carter" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Email address</label>
                    <input id="contact-email" type="email" className={inputClass} placeholder="jane@example.com" required />
                  </div>
                </div>

                <div className="mb-4 sm:mb-5">
                  <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                  <input id="contact-subject" type="text" className={inputClass} placeholder="Order question, product info, returns..." required />
                </div>

                <div className="mb-6 sm:mb-8">
                  <label htmlFor="contact-message" className={labelClass}>Message</label>
                  <textarea id="contact-message" className={`${inputClass} resize-none`} rows={5} placeholder="How can we help?" required></textarea>
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-4 px-8 rounded-full font-bold text-xs uppercase tracking-[0.16em] w-full sm:w-auto cursor-pointer"
                >
                  <span>Send message</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
