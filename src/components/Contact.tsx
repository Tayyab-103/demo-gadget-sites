"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      {/* Inner Top Header Banner */}
      <section className="bg-[#FAF9F7] py-12 md:py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary mb-3">
                Contact Us
              </h1>
              <nav aria-label="Breadcrumb" className="breadcrumbs-list">
                <Link href="/">Home</Link>
                <span className="breadcrumbs-separator" />
                <span className="text-primary font-bold">Contact</span>
              </nav>
            </div>

            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-sm bg-[#EAE6E1]">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=80"
                alt="Modern Meadow Customer Concierge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contacts Section */}
      <div className="py-16 md:py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Get In Touch Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF9F7] rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
              <div className="mb-8">
                <span className="category-subtitle">
                  we are <b>here</b> for you
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary mt-1 mb-2">
                  Get In Touch
                </h2>
                <p className="text-xs sm:text-sm text-neutral-text/60">
                  Write us your impressions, sizing questions, or styling requests.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 text-green-800 rounded-2xl text-center space-y-2">
                  <div className="text-2xl">✓</div>
                  <h3 className="font-heading text-lg font-bold uppercase">Message Received</h3>
                  <p className="text-xs leading-relaxed">
                    Thank you for reaching out to Modern Meadow! A dedicated fashion consultant will respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="fashion-button mt-4 text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[0.7rem] uppercase font-bold tracking-wider text-neutral-text/60 block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                      />
                    </div>

                    <div>
                      <label className="text-[0.7rem] uppercase font-bold tracking-wider text-neutral-text/60 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.7rem] uppercase font-bold tracking-wider text-neutral-text/60 block mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write us your feedback or question..."
                      required
                      className="w-full bg-white border border-black/15 rounded-xl p-4 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="fashion-button w-full sm:w-auto text-xs py-3.5 px-8"
                  >
                    Send a Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Contact Card 1: Phone & Email */}
              <section className="bg-[#FAF9F7] p-8 rounded-3xl border border-black/5">
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                  Contacts:
                </h3>
                <div className="space-y-1.5 text-sm sm:text-base font-bold text-primary">
                  <div>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div>
                    <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm text-neutral-text/70 hover:text-secondary transition-colors font-medium break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </section>

              {/* Contact Card 2: Location */}
              <section className="bg-[#FAF9F7] p-8 rounded-3xl border border-black/5">
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                  Location &amp; Corporate:
                </h3>
                <div className="text-xs sm:text-sm leading-relaxed text-neutral-text/80">
                  <strong className="text-primary block font-bold mb-1">{siteConfig.corpName}</strong>
                  <span>{siteConfig.address}</span>
                  <div className="text-[0.72rem] text-neutral-text/50 mt-2">
                    Billing Descriptor: <span className="font-mono text-primary font-bold">{siteConfig.descriptor}</span>
                  </div>
                </div>
              </section>

              {/* Contact Card 3: Find Us */}
              <section className="bg-[#FAF9F7] p-8 rounded-3xl border border-black/5">
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                  Find Us:
                </h3>
                <div className="flex items-center gap-6 text-sm font-bold text-primary">
                  <a href="#" className="hover:text-secondary">Fb</a>
                  <a href="#" className="hover:text-secondary">Tw</a>
                  <a href="#" className="hover:text-secondary">Ins</a>
                  <a href="#" className="hover:text-secondary">Pt</a>
                </div>
              </section>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
