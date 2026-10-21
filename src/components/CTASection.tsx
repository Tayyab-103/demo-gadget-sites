import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/brand";
import PawIcon from "@/components/PawIcon";

const perks = [
  `Free ${siteConfig.shippingCarrier} shipping`,
  `${siteConfig.trialPeriod}-day guarantee`,
  "Bundle savings up to 8-packs",
  "Secure checkout",
];

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <PawIcon className="absolute -right-6 -top-6 w-48 h-48 text-white/25 rotate-12" />
          <PawIcon className="absolute left-[42%] -bottom-10 w-32 h-32 text-white/20 -rotate-12 hidden md:block" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text tracking-tight leading-[1.08]">
                Your pet&apos;s next favorite thing is one click away
              </h2>
              <p className="mt-4 text-primary-text/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                Stock up on grooming, chew and walk essentials — pick a bundle, save per item, and we&apos;ll ship it free.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-primary-deep transition-colors px-8 py-4 rounded-full text-sm font-bold shadow-lg">
                  Shop now →
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-white/70 hover:bg-white text-ink transition-colors px-7 py-4 rounded-full text-sm font-bold">
                  Talk to our team
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/75 backdrop-blur rounded-[1.75rem] p-6 sm:p-7 shadow-xl">
                <div className="flex -space-x-3 mb-5">
                  {["/img/products/brush.jpg", "/img/products/chew-toy.jpg", "/img/products/collar.jpg"].map((src) => (
                    <img key={src} src={src} alt="" className="w-14 h-14 rounded-2xl object-cover border-4 border-white shadow-sm" />
                  ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm font-semibold text-ink">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-text flex items-center justify-center text-xs shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
