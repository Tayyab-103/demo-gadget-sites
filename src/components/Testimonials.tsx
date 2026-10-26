"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

interface Review {
  id: string;
  quote: string;
  name: string;
  role: string;
  product: string;
  image: string;
  alt: string;
}

const reviews: Review[] = [
  {
    id: "01",
    quote: "I bought the 3-pack of crew socks for marathon training. The cushioning under the heel is the first thing I noticed, and they still fit snugly after a month of washes.",
    name: "Dana K.",
    role: "Weekend runner",
    product: "Peak Cushion Crew Socks",
    image: "/img/testimonialsec1.jpg",
    alt: "Runner in white crew socks and sneakers on the street",
  },
  {
    id: "02",
    quote: "The compression baselayer stays tucked through deadlifts and doesn't ride up. Flat seams mean no rubbing under the arms, which was my problem with cheaper tops.",
    name: "Luis M.",
    role: "Strength training",
    product: "Peak Compression Baselayer",
    image: "/img/testimonialsec2.jpg",
    alt: "Lifter holding a weighted vest in a dark gym",
  },
  {
    id: "03",
    quote: "My go-to warmup layer for early sessions. Warm without being heavy, and the zip pockets actually hold my phone and keys when I jog to the gym.",
    name: "Priya S.",
    role: "Boxing & conditioning",
    product: "Peak Zip Training Hoodie",
    image: "/img/testimonialsec3.jpg",
    alt: "Athlete in a white long-sleeve top in a boxing gym",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = reviews[index];

  const go = (dir: number) => setIndex((i) => (i + dir + reviews.length) % reviews.length);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-primary text-primary-text" id="testimonials">
      <div className="absolute inset-0 peak-pattern opacity-40" aria-hidden="true" />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Customer reviews"
          title={
            <>
              Worn in <span className="text-secondary">real sessions</span>
            </>
          }
          subtitle="What customers say after putting our kit through their own training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/4.4] w-full overflow-hidden rounded-[1.75rem] bg-primary-dark">
              {reviews.map((r, i) => (
                <img
                  key={r.id}
                  src={r.image}
                  alt={r.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="absolute -bottom-5 right-5 rounded-2xl bg-secondary text-secondary-text px-5 py-3 shadow-xl">
              <span className="block text-[0.6rem] font-black uppercase tracking-[0.16em] opacity-70">Reviewing</span>
              <span className="block text-sm font-black uppercase tracking-tight">{current.product}</span>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-7 lg:pl-4 pt-6 lg:pt-0">
            <svg width="54" height="40" viewBox="0 0 54 40" className="text-secondary" fill="currentColor" aria-hidden="true">
              <path d="M0 40V24C0 10 6 2 20 0l2 6c-7 2-10 6-10 12h10v22H0Zm32 0V24c0-14 6-22 20-24l2 6c-7 2-10 6-10 12h10v22H32Z" />
            </svg>
            <blockquote key={current.id} className="mt-6 text-xl sm:text-2xl md:text-[1.75rem] font-bold leading-snug tracking-tight">
              {current.quote}
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-5">
              <div>
                <div className="text-base font-black uppercase tracking-tight">{current.name}</div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/55 mt-1">{current.role}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 mr-2">
                  {reviews.map((r, i) => (
                    <button
                      key={r.id}
                      onClick={() => setIndex(i)}
                      aria-label={`Show review ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${i === index ? "w-8 bg-secondary" : "w-3 bg-white/30"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(-1)}
                  className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-secondary hover:text-secondary-text hover:border-secondary transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  ←
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-11 h-11 rounded-full bg-secondary text-secondary-text flex items-center justify-center hover:bg-secondary-dark transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
