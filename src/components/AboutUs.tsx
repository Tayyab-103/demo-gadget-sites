"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const pillars = [
  {
    step: "01",
    title: "Curated, Not Cluttered",
    desc: "We keep a tight catalog of gear we would put in our own gig bag — guitar picks, brass and cables that earn their place on stage and in the studio.",
  },
  {
    step: "02",
    title: "Checked Before It Ships",
    desc: "Every order is inspected and packed by our team before it leaves the store, so it arrives ready to play straight out of the box.",
  },
  {
    step: "03",
    title: "Real People, Real Support",
    desc: `Questions about sizing, tone or your order? Call ${siteConfig.phone} or email us — a musician on our team will help you out.`,
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-neutral-bg py-20 sm:py-28" id="about">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[480px] w-[480px] translate-x-1/3 rounded-full bg-secondary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/3 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* LEFT — Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none pb-10 sm:pb-0">
              <div className="relative rounded-[2rem] overflow-hidden border border-line aspect-[4/3] sm:aspect-[16/12]">
                <img
                  src="/img/newsletter_guitar.jpg"
                  alt={`Musician playing an acoustic guitar — ${siteConfig.brandName}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg/90 via-neutral-bg/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary-light block mb-1">
                    Based in Austin, Texas
                  </span>
                  <p className="text-lg sm:text-xl font-black leading-tight text-white max-w-sm">
                    A music store built by players, for players.
                  </p>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-10 -right-6 w-48 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-neutral-bg shadow-2xl">
                <img src="/img/quality_promise.jpg" alt="Acoustic guitar resting against a wooden door" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -top-5 left-4 sm:-left-6 rounded-2xl border-gradient p-3.5 flex items-center gap-3 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-black text-lg">♫</div>
                <div>
                  <p className="text-[0.62rem] font-bold text-faint uppercase tracking-wider leading-none">Every Order</p>
                  <p className="text-xs font-black text-neutral-text leading-tight mt-1">Inspected &amp; Packed by Hand</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Story */}
          <div className="lg:col-span-6">
            <span className="eyebrow">About {siteConfig.brandName}</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-text tracking-tight leading-[1.1]">
              The music store you{" "}
              <span className="text-gradient">actually want to shop.</span>
            </h2>
            <p className="mt-5 text-muted text-sm sm:text-base leading-relaxed">
              {siteConfig.brandName} started with a simple idea: buying music gear online should feel like walking into
              your favorite local shop. Honest product details, fair prices, fast {siteConfig.shippingCarrier} delivery
              and a {siteConfig.trialPeriod}-day return window if something isn&apos;t right.
            </p>

            <div className="mt-9 flex flex-col gap-4">
              {pillars.map((pillar) => (
                <div key={pillar.step} className="card card-hover group p-5 sm:p-6 flex items-start gap-5">
                  <span className="text-2xl sm:text-3xl font-black text-gradient leading-none pt-0.5">{pillar.step}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-neutral-text mb-1">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link href="/shop" className="btn-primary px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest">
                Explore the Store <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn-ghost px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
