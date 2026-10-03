"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CTASection() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden" id="cta">
      <div className="md:grid md:grid-cols-2 max-w-7xl bg-[#FDFDFD] mx-4 md:mx-auto rounded-2xl overflow-hidden shadow-xl border border-rose-200/80">
        <div className="hidden md:block w-full h-full relative min-h-[360px]">
          <img
            src="/img/cta1.jpg"
            alt="Chapterhouse promotional book collection"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative flex items-center justify-center p-6 md:p-10">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-5 right-5 bg-rose-50 hover:bg-rose-100 text-[#4C0519] rounded-full p-2.5 transition-colors cursor-pointer border border-rose-200"
            aria-label="Close promotion"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 2 2 13M2 2l11 11"
                stroke="#4C0519"
                strokeOpacity=".8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="max-md:py-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] leading-tight">
              <span className="text-[#D2446D]">Expand your personal library</span> with special collector bundles.
            </h2>

            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
              Save up to 40% when you bundle classic literature sets and hand-bound journals today.
            </p>

            <Link
              href="/shop"
              className="inline-block rounded-xl bg-[#4C0519] hover:bg-[#D2446D] transition-all duration-300 text-sm font-bold px-10 sm:px-14 py-3.5 mt-6 text-white cursor-pointer shadow-md hover:shadow-lg"
            >
              Check out Book Collections
            </Link>

            <button
              onClick={() => setIsDismissed(true)}
              className="block mx-auto px-8 py-2.5 mt-3 text-sm text-gray-600 hover:text-[#4C0519] transition-colors cursor-pointer"
            >
              No thanks, I don&apos;t want the discounts.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
