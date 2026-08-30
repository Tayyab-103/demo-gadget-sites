"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl md:grid-cols-2 bg-[#18121E] text-white shadow-2xl border border-[#C59B7E]/30">
          
          {/* Left — Image */}
          <div className="relative min-h-72 sm:min-h-96 md:min-h-full bg-black/20">
            <img
              src="/img/fashion-hero.jpg"
              alt="Rosethorne Fashion Atelier Haute Couture"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#18121E] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#18121E]/30 md:to-[#18121E]" />

            {/* Stat badge */}
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 flex items-center gap-3.5 rounded-2xl bg-[#18121E]/90 px-4 py-3 shadow-2xl backdrop-blur-md border border-[#C59B7E]/40">
              <div className="flex -space-x-2.5">
                {[
                  "/img/stories/story-silk-blouse.jpg",
                  "/img/stories/story-cashmere-coat.jpg",
                  "/img/stories/story-lace-gown.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-[#18121E] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xs font-serif font-bold text-white">Private Patrons</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-[#E6C2AC]">
                  Worldwide
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 text-white">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#E6C2AC] block mb-2 select-none">
              PRIVATE ATELIER INVITATION
            </span>

            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.12] tracking-tight text-white">
              Experience The Allure <br />
              <span className="italic text-[#E6C2AC]">Of Bespoke Couture.</span>
            </h2>

            <p className="mb-8 max-w-md text-xs sm:text-sm leading-relaxed text-slate-300 font-light">
              Pure mulberry silk slip dresses, sculpted cashmere trench coats, and French Chantilly lace evening gowns. Dispatched via {siteConfig.shippingCarrier} with our risk-free {siteConfig.trialPeriod || 14}-day fit and drape guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-[#18121E] bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 px-8 py-3.5 rounded-full transition-all text-center uppercase tracking-wider shadow-lg"
              >
                Shop Collection →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-wider border border-[#C59B7E]/50 px-7 py-3.5 rounded-full transition-all hover:bg-white/10 text-center text-[#E6C2AC] font-semibold"
              >
                Private Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
