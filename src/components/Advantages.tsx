"use client";

import React from "react";

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Free Shipping",
    text: "Complimentary carbon-neutral delivery on all orders over $50 with real-time tracking.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Customer Service",
    text: "Dedicated styling consultants and support team ready to assist with sizing and orders.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Money Back Guarantee",
    text: "Hassle-free 30-day returns and exchanges if you are not completely delighted with your fit.",
  },
];

export default function Advantages() {
  return (
    <section className="py-16 bg-[#FAF9F7] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm flex flex-col items-center text-center group hover:border-secondary/40 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FAF9F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>

              <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-primary mb-3">
                {adv.title}
              </h4>

              <div className="w-8 h-0.5 bg-secondary mb-4 rounded-full" />

              <p className="text-neutral-text/60 text-xs sm:text-sm leading-relaxed max-w-xs">
                {adv.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
