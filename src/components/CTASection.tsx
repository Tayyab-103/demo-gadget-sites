"use client";

import { siteConfig } from "@/lib/brandIcon";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[2rem] bg-primary text-white shadow-2xl shadow-primary/30">
          {/* Copy */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 bg-topo" aria-hidden="true" />
            <div className="relative">
              <span className="eyebrow eyebrow-invert mb-4">Ready When You Are</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                Your Next Session
                <br />
                <span className="text-secondary">Starts Here.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-white/75">
                {`Order today and your gear ships with ${siteConfig.shippingCarrier} — at your door in ${siteConfig.shippingPeriod} business days, with ${siteConfig.trialPeriod} days to put it to the test.`}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/shop" className="btn-accent">
                  Shop All Gear <span aria-hidden="true">→</span>
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-ghost-light">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[260px] sm:min-h-[340px]">
            <img
              src="/img/products/product2-3.jpg"
              alt="Pair of hex dumbbells resting on a concrete ledge"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-primary via-primary/20 to-transparent" />
            <div className="absolute bottom-5 right-5 rounded-full bg-secondary px-4 py-2 text-[0.65rem] font-black uppercase tracking-widest text-secondary-text shadow-lg">
              Bundle &amp; Save
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
