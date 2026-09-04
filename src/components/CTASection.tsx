"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-neutral-bg" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-12 sm:py-16 md:pl-20 md:pr-14 flex flex-col items-start justify-center text-left bg-gradient-to-b from-[#0B132B] via-[#0E1E45] to-[#060D1E] border border-white/10 rounded-3xl sm:rounded-4xl p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Social Proof Avatar Stack & Ratings */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex -space-x-3 pr-1">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Athlete review"
                className="w-8 h-8 rounded-full border-2 border-[#0B132B] hover:-translate-y-0.5 transition-transform duration-200 z-[1] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Athlete review"
                className="w-8 h-8 rounded-full border-2 border-[#0B132B] hover:-translate-y-0.5 transition-transform duration-200 z-[2] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Athlete review"
                className="w-8 h-8 rounded-full border-2 border-[#0B132B] hover:-translate-y-0.5 transition-transform duration-200 z-[3] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z"
                      fill="#FF8F20"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Used by 10k+ athletes &amp; coaches
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-[44px] md:leading-[1.2] font-black mt-5 sm:mt-6 bg-gradient-to-r from-white via-slate-100 to-sky-200 text-transparent bg-clip-text tracking-tight">
            Ready to elevate your training?
          </h2>

          {/* Subheading */}
          <p className="relative z-10 bg-gradient-to-r from-white/90 to-sky-100/80 text-transparent bg-clip-text text-sm sm:text-base md:text-lg mt-2 max-w-xl font-normal leading-relaxed">
            Your next athletic breakthrough is just one click away.
          </p>

          {/* Action Button */}
          <div className="relative z-10 mt-6 sm:mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-10 sm:px-12 py-3 sm:py-3.5 text-white font-bold border border-sky-400/50 bg-secondary/80 hover:bg-secondary transition-all duration-300 rounded-full text-sm sm:text-base shadow-lg shadow-sky-900/40 hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
