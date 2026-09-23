"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const stats = [
  { value: "2019", label: "Founded" },
  { value: "40K+", label: "Orders Shipped" },
  { value: "15", label: "Certified Suppliers" },
  { value: "50", label: "States Served" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow mb-6">Our Story</span>

            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.05] tracking-tight text-neutral-text md:text-5xl">
              Automotive Parts, <span className="text-secondary">Engineered for the Road</span>
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-neutral-text/65 md:text-base">
              At {siteConfig.brandName}, we believe certified, high-performance
              automotive parts and accessories shouldn&apos;t come with exorbitant
              dealership markups. We quality-check every brake pad set, oil filter,
              and specialty tool against rigorous automotive safety benchmarks, so
              your vehicle runs smoothly and reliably on every drive.
            </p>

            <p className="mb-10 text-sm leading-relaxed text-neutral-text/65 md:text-base">
              Our mission is simple: make reliable, OEM-grade replacement parts and
              accessories accessible for daily drivers, fleet managers, and DIY car
              enthusiasts alike. Whether you&apos;re doing a weekend brake upgrade,
              routine engine maintenance, or equipping your garage, every part is
              crafted with precision — because your journey deserves components that
              actually hold up.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#shop"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-secondary/20"
              >
                Explore Products
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-primary/15 bg-transparent px-8 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT — Photo mosaic + stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="group relative row-span-2 overflow-hidden rounded-4xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80"
                  alt={`${siteConfig.brandName} mechanic installing brake pads`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=700&q=80"
                  alt="Automotive engine bay maintenance and filter service"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=700&q=80"
                  alt="Precision automotive tool and tire gauge"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
                  <div className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.65rem]">
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
