import React from "react";
import Link from "next/link";
import { siteConfig, brandShort } from "@/lib/brandIcon";

const points = [
  "Hardened steel bits that seat firmly and resist cam-out",
  "A multimeter that covers household and DIY electrical checks",
  "Long-run power cables sized for real door frames",
  `${siteConfig.trialPeriod}-day satisfaction guarantee on everything we sell`,
];

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface relative overflow-hidden" id="about">
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 sm:-inset-4 rounded-[2.4rem] bg-brand-gradient rotate-[-2deg] opacity-90" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="/img/web/aboutus.jpg"
              alt="Hand tools laid out on a wooden workbench"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 sm:right-8 card px-5 py-4 flex items-center gap-3">
            <span className="icon-tile w-11 h-11 text-base font-extrabold">{siteConfig.shippingPeriod}</span>
            <div>
              <div className="text-[0.62rem] font-bold uppercase tracking-wider text-faint">Business days</div>
              <div className="text-sm font-bold text-ink">{`${siteConfig.shippingCarrier} delivery, free`}</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">{`About ${brandShort}`}</span>
          <h2 className="mt-4 text-[1.9rem] sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12] text-ink">
            The hardware store aisle, <span className="text-gradient">minus the guesswork</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">
            {`${siteConfig.brandName} started with a simple frustration: too many tool listings, too little information. So we narrowed it down to the pieces we actually reach for — and wrote down exactly what each one is made of and what it fits.`}
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Whether you are hanging shelves, troubleshooting an outlet or powering a video doorbell, our goal is the same: the right tool, a fair price, and help when you need it.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-white border border-line p-4">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-gradient text-white flex items-center justify-center flex-shrink-0">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span className="text-sm font-medium text-ink leading-snug">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-primary">Our Story</Link>
            <Link href="/contact" className="btn-ghost">Talk to Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
