"use client";

import { SiteConfig } from "@/types";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] bg-[#121316] text-white flex flex-col justify-center overflow-hidden">

      {/* Background Kitchen Visual with Seamless Blend */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-end">
        <div className="relative w-full lg:w-[68%] h-full">
          <img
            src="/hero-kitchen.jpg"
            alt="Modern luxury Scandinavian kitchen with wooden island, copper whisk, shears, and digital scale"
            className="w-full h-full object-cover object-center sm:object-right opacity-35 sm:opacity-75 lg:opacity-95"
          />

          {/* Full dark overlay on small screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/85 to-[#121316]/60 lg:hidden" />

          {/* Left blend gradient for desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#121316] via-[#121316]/90 to-transparent" />

          {/* Top blend gradient */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#121316] to-transparent" />

          {/* Bottom blend gradient */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#121316] to-transparent" />

          {/* Right edge vignette */}
          <div className="hidden sm:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#121316]/60 to-transparent" />
        </div>
      </div>

      {/* Subtle architectural horizontal slat lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
        <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_48px]" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 flex-1 flex items-center">
        <div className="max-w-xl text-left">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-[#E06830]/40 bg-[#E06830]/15 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E06830] animate-pulse" />
            <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#E06830]">
              Artisan Kitchen Workshop
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.12] sm:leading-[1.08] tracking-tight mb-5 sm:mb-6 drop-shadow-md font-serif">
            Handcrafted <br />
            Kitchen Tools <br />
            <span className="text-[#E06830] italic font-serif">For Precision</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/85 leading-relaxed max-w-md mb-8 sm:mb-10 drop-shadow-sm font-normal">
            Order direct from our workshop and receive free nationwide shipping, 1-year warranty coverage, and a {siteConfig.trialPeriod}-day risk-free culinary trial.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#E06830] hover:bg-[#c85622] hover:shadow-[0_0_30px_rgba(224,104,48,0.5)] transition-all duration-300 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-lg cursor-pointer text-center"
            >
              Explore Catalog &rarr;
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-white hover:text-[#E06830] border border-white/20 hover:border-white/40 transition-all duration-300 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full cursor-pointer text-center"
            >
              Our Atelier
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/80 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-[#E06830] font-bold">✓</span>
              <span>100% Food-Safe Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E06830] font-bold">✓</span>
              <span>{siteConfig.shippingCarrier} Tracked Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E06830] font-bold">✓</span>
              <span>{siteConfig.trialPeriod}-Day Trial</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
