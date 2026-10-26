"use client";

import React, { useState } from "react";

interface Review {
  quote: string;
  name: string;
  role: string;
  product: string;
}

const reviews: Review[] = [
  {
    quote:
      "I keep the wrap journal in my work bag and it's become my go-to for meeting notes. The tie keeps it closed and the pages are lovely to write on.",
    name: "Priya S.",
    role: "Project coordinator",
    product: "Wrap-Tie Writing Journal",
  },
  {
    quote:
      "First fountain pen I've owned. Filling it from the bottle was easier than I expected and it writes smoothly on regular printer paper too.",
    name: "Daniel R.",
    role: "High-school teacher",
    product: "Fountain Pen & Ink Bottle Set",
  },
  {
    quote:
      "Bought the gift set for my sister's first office job. It arrived in the case, well packed, and looked great without any extra wrapping.",
    name: "Monica L.",
    role: "Gift shopper",
    product: "Notebook & Pen Desk Gift Set",
  },
  {
    quote:
      "My home-office desk finally feels organized. Delivery was quick and when I had a question about my order, support answered the same day.",
    name: "James K.",
    role: "Remote accountant",
    product: "Notebook & Pen Desk Gift Set",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = reviews[active];

  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-ink text-paper overflow-hidden" id="testimonials">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gradient opacity-25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-primary opacity-15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
            Kind words
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Notes from <span className="text-primary">happy desks</span>
          </h2>
          <p className="mt-4 max-w-md text-paper/70 leading-relaxed">
            What customers tell us after their supplies arrive — from first notebooks to office gifts.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setActive(i)}
                aria-label={`Show review from ${r.name}`}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all cursor-pointer ${
                  i === active ? "bg-brand-gradient text-primary-text scale-110 shadow-lg" : "bg-paper/10 text-paper/70 hover:bg-paper/20"
                }`}
              >
                {initials(r.name)}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <figure key={active} className="relative rounded-[2rem] bg-brand-gradient p-8 sm:p-12 text-primary-text shadow-2xl">
            <svg className="absolute right-8 top-8 h-16 w-16 opacity-20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.41A1.76 1.76 0 0 1 7.17 9.41V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-3.42a1.76 1.76 0 0 1 1.76-1.76V6Z" />
            </svg>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] opacity-70">On the {current.product}</p>
            <blockquote className="mt-4 font-display text-xl sm:text-2xl md:text-[1.7rem] font-semibold leading-snug">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper font-bold">
                {initials(current.name)}
              </span>
              <span>
                <span className="block font-bold">{current.name}</span>
                <span className="block text-sm opacity-75">{current.role}</span>
              </span>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 hover:bg-paper/10 transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={() => setActive((active + 1) % reviews.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-text hover:brightness-105 transition cursor-pointer"
              aria-label="Next review"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
