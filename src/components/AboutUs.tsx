"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const stats = [
  { value: "10,000+", label: "Athletes Equipped" },
  { value: "1000D", label: "Ballistic Cordura" },
  { value: "14-Day", label: "Field Guarantee" },
  { value: "4.9★", label: "Verified Rating" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow mb-4">Athlete Heritage</span>

            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.08] tracking-tight text-neutral-text md:text-5xl">
              Engineered in Austin, <span className="text-secondary">Forged for Athletes</span>
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-neutral-text/75 md:text-base">
              At {siteConfig.brandName}, we design military-tough conditioning gear, tactical sports bags, and deep-tissue recovery therapy built to withstand extreme training regimens. Every piece is engineered with biomechanical precision to eliminate friction and elevate your potential.
            </p>

            <p className="mb-8 sm:mb-10 text-sm leading-relaxed text-neutral-text/75 md:text-base">
              Our mission is uncompromising: empower marathoners, CrossFit competitors, collegiate athletes, and fitness enthusiasts with Olympic-caliber gear backed by direct athlete pricing and a 14-day field trial.
            </p>

            <div className="flex flex-col gap-3.5 sm:gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-black uppercase tracking-widest text-primary-text shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-secondary/30"
              >
                Shop The Gear
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-primary/20 bg-transparent px-8 py-3.5 text-center text-xs font-black uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Our Heritage
              </Link>
            </div>
          </div>

          {/* RIGHT — Photo mosaic + stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
              <div className="group relative row-span-2 overflow-hidden rounded-3xl sm:rounded-4xl shadow-xl border border-black/5 min-h-[280px] sm:min-h-[340px]">
                <Image
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&q=80"
                  alt={`${siteConfig.brandName} athletic conditioning and fitness training gear`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80"
                  alt="High intensity athletic conditioning"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80"
                  alt="Performance sports duffle and tactical dry pack"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-4 rounded-3xl border border-black/5 bg-neutral-bg p-5 sm:p-6 sm:grid-cols-4 md:gap-6 md:p-8">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`text-center sm:border-l sm:border-black/5 sm:first:border-l-0 ${idx >= 2 ? "border-t border-black/5 pt-3 sm:border-t-0 sm:pt-0" : ""}`}
                >
                  <div className="text-xl font-black text-primary md:text-2xl">{stat.value}</div>
                  <div className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/55 md:text-[0.65rem]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
