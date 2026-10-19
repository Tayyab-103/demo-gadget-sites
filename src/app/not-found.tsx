"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white font-sans">
        <PageHeader
          eyebrow="Lost in the Toybox"
          title="Page Not Found (404)"
          subtitle="Oops! Looks like this toy or page went wandering into another playroom."
          image="/img/hero-banner.jpg"
          currentLabel="404"
        />

        <section className="py-20 sm:py-28 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-8xl sm:text-9xl mb-6 select-none animate-bounce-slow">
              🧸
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mb-4">
              Oops! That Page Can Not be Found.
            </h2>

            <p className="text-black/60 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable in our toy store.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#1e293b] font-black text-xs uppercase tracking-wider border border-black/15 hover:border-[#ff4370] hover:text-[#ff4370] transition-all shadow-xs cursor-pointer"
              >
                ← Go Back
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#ff4370] text-white font-black text-xs uppercase tracking-wider hover:bg-[#e63560] transition-all shadow-md shadow-[#ff4370]/30 cursor-pointer"
              >
                Go to Homepage →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
