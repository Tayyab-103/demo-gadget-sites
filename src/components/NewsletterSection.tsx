"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2 bg-brand-gradient">
          <div className="relative p-8 sm:p-12 lg:p-14 text-white">
            <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
            <div className="relative">
              <span className="eyebrow eyebrow-light">The Workbench Letter</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Project tips and new tools, once a month.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                Practical how-tos, restock alerts and the occasional tool-care checklist. No spam — unsubscribe any time.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-white/15 border border-white/25 p-5 max-w-md">
                  <div className="font-bold">You&apos;re on the list.</div>
                  <p className="mt-1 text-sm text-white/80">{`We'll send the next issue to ${email}.`}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 rounded-full bg-white px-5 py-3.5 text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-4 focus:ring-white/30"
                  />
                  <button type="submit" className="btn-white !bg-ink !text-white">Subscribe</button>
                </form>
              )}
            </div>
          </div>

          <div className="relative min-h-[260px] lg:min-h-full">
            <img
              src="/img/web/newsletterimag.jpg"
              alt="Chrome sockets close-up"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
