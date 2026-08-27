"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Precision Intonation Calibration",
    desc: "Every capo clamping curve and tuner vibration sensor is tested against reference studio strobe tuners to ensure pitch-perfect performance.",
  },
  {
    title: "1-Year Comprehensive Workshop Warranty",
    desc: "We stand firmly behind our metallurgy and craftsmanship. Any manufacturing defect within 365 days is replaced immediately.",
  },
  {
    title: "Acoustic Metallurgy & OFC Copper",
    desc: "We select only resonance-tested zinc-brass alloys, 24K gold-plated connectors, and 99.99% oxygen-free copper for total signal fidelity.",
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-neutral-bg py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">

          {/* LEFT — IMAGE CARD */}
          <div
            className="
              group
              relative
              w-full
              overflow-hidden
              rounded-[2.5rem]
              bg-white
              shadow-2xl
              border
              border-black/5
              min-h-[500px]
              md:min-h-[600px]
              lg:min-h-[680px]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=1200&q=80"
              alt={`${siteConfig.brandName} Acoustic Craftsmanship`}
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.02]
              "
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs font-black uppercase tracking-widest text-secondary block mb-1">
                Luthier-Inspected Quality
              </span>
              <h3 className="text-xl md:text-2xl font-black">
                Where Acoustic Physics Meets Master Metalwork
              </h3>
            </div>
          </div>

          {/* RIGHT — GUARANTEE CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-black/[0.06]
              bg-white
              shadow-xl
            "
          >
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl" />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                justify-center
                p-8
                sm:p-10
                md:p-12
                lg:p-14
                xl:p-16
              "
            >
              {/* EYEBROW */}
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-secondary md:w-10" />
                <span className="text-xs font-black uppercase tracking-[0.24em] text-secondary md:text-sm">
                  Our Tone Promise
                </span>
                <span className="h-px w-8 bg-secondary md:w-10" />
              </div>

              {/* HEADING */}
              <h2
                className="
                  mb-6
                  max-w-xl
                  text-3xl
                  font-black
                  uppercase
                  leading-[1.05]
                  tracking-tight
                  text-primary
                  sm:text-4xl
                  md:text-5xl
                "
              >
                The Acoustic <br />
                Standard <br />
                <span className="text-secondary">
                  You Deserve
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-neutral-text/65 sm:text-base">
                We understand how critical clean intonation, zero buzz, and transparent audio transmission are to your music. That&apos;s why every batch undergoes end-to-end bench testing.
              </p>

              {/* GUARANTEE POINTS */}
              <div className="flex flex-col">
                {promises.map((promise, idx) => (
                  <div
                    key={promise.title}
                    className="
                      group/item
                      relative
                      flex
                      gap-5
                      border-t
                      border-black/[0.07]
                      py-5
                      first:border-t-0
                      first:pt-0
                      last:pb-0
                      md:gap-6
                      md:py-6
                    "
                  >
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-secondary/30
                          bg-secondary/10
                          text-xs
                          font-black
                          text-secondary
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover/item:bg-secondary
                          group-hover/item:text-primary
                        "
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      {idx < promises.length - 1 && (
                        <div className="mt-2.5 h-full min-h-[22px] w-px bg-secondary/20" />
                      )}
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="mb-1 text-base font-bold text-primary transition-colors duration-300 group-hover/item:text-secondary sm:text-lg">
                        {promise.title}
                      </h3>
                      <p className="max-w-xl text-xs leading-relaxed text-neutral-text/60 sm:text-sm">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM ACCENT */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-secondary" />
                <div className="h-1 w-3 rounded-full bg-secondary/40" />
                <div className="h-1 w-2 rounded-full bg-secondary/20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}