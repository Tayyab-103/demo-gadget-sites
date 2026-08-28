"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const stats = [
  { value: "1,200 PSI", label: "Burst Tolerance" },
  { value: "100%", label: "Hydrostatic Tested" },
  { value: "Lead-Free", label: "Certified Brass" },
  { value: "ASTM / ASME", label: "Standard Compliant" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow mb-4">Our Foundry Heritage</span>

            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.08] tracking-tight text-neutral-text md:text-5xl">
              Master Foundry Engineering, <span className="text-secondary">Built to Endure</span>
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-neutral-text/75 md:text-base">
              At {siteConfig.brandName}, we forge precision plumbing fittings, hydronic valves, and heavy-duty heating supplies engineered to outperform generic hardware. Every casting undergoes strict metallurgical analysis and pressure certification before leaving our foundry.
            </p>

            <p className="mb-10 text-sm leading-relaxed text-neutral-text/75 md:text-base">
              Our mission is clear: supply master plumbers, heating contractors, and property owners with certified, zero-leak components at direct foundry prices. Whether you are installing a high-efficiency hydronic boiler loop or repairing critical potable water lines, our hardware delivers lasting peace of mind.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-secondary/30"
              >
                View Catalog
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-primary/20 bg-transparent px-8 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Foundry Specs
              </Link>
            </div>
          </div>

          {/* RIGHT — Photo mosaic + stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="group relative row-span-2 overflow-hidden rounded-4xl shadow-xl border border-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80"
                  alt={`${siteConfig.brandName} precision plumbing fittings and forge hardware`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg border border-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80"
                  alt="Industrial shutoff ball valve and plumbing installation"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg border border-black/5">
                <Image
                  src="/img/hero_boiler.jpg"
                  alt="Hydronic heating pipe connections and tools"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-5 grid grid-cols-2 gap-4 rounded-3xl border border-black/5 bg-neutral-bg p-6 sm:grid-cols-4 md:gap-6 md:p-8">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`text-center sm:border-l sm:border-black/5 sm:first:border-l-0 ${idx >= 2 ? "border-t border-black/5 pt-4 sm:border-t-0 sm:pt-0" : ""}`}
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
