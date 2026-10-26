import React from "react";
import Link from "next/link";
import { siteConfig, startingPrice } from "@/lib/brandIcon";

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-gradient px-6 py-14 sm:px-12 text-center text-white">
          <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to restock the toolbox?</h2>
            <p className="mt-4 text-white/80">
              {`Tools from $${startingPrice}, free ${siteConfig.shippingCarrier} shipping and a ${siteConfig.trialPeriod}-day guarantee.`}
            </p>
            <Link href="/shop" className="btn-white mt-8">Shop All Tools</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
