"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Archival Paper & Acid-Free Printing",
    desc: "Every edition is printed on 120gsm acid-free cream parchment that prevents fading and page brittleness over decades of reading.",
  },
  {
    title: "Smyth-Sewn Binding Guarantee",
    desc: "We stand firmly behind our bookbinding craftsmanship. Any structural binding defect or loose pages within 365 days is covered under our direct replacement guarantee.",
  },
  {
    title: "Foil Embossing & Heirloom Packaging",
    desc: "Our collector editions feature intricate hot-stamped gold foil covers and protective custom slipcases engineered for safe transport and pristine shelf storage.",
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">

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
              border-rose-100
              min-h-[340px]
              sm:min-h-[440px]
              md:min-h-[520px]
              lg:min-h-[600px]
            "
          >
            <img
              src="/img/QualityPromise1.jpg"
              alt={`${siteConfig.brandName} Book Craftsmanship`}
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
                group-hover:scale-105
              "
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4C0519]/90 via-[#4C0519]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs font-black uppercase tracking-widest text-[#D2446D] block mb-1">
                📖 The Bookmaker Master Standard
              </span>
              <h3 className="text-xl md:text-2xl font-black">
                Where Timeless Storytelling Meets Archival Craftsmanship
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
              border-rose-100
              bg-[#FDFDFD]
              shadow-xl
            "
          >
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D2446D]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#4C0519]/5 blur-3xl" />

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
              "
            >
              {/* EYEBROW */}
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D2446D]">
                  📖 Our Literary &amp; Binding Promise
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  mb-6
                  max-w-xl
                  text-3xl
                  font-black
                  uppercase
                  leading-[1.1]
                  tracking-tight
                  text-[#000000]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                The Reader&apos;s Standard <br />
                <span className="text-[#D2446D]">
                  You Deserve
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 font-medium">
                We understand how essential clear typography, comfortable page turn, and durable heirloom bindings are to your reading sanctuary. Every book and journal undergoes careful bench inspection before leaving our marketplace.
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
                      border-rose-100
                      py-5
                      first:border-t-0
                      first:pt-0
                      last:pb-0
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
                          border-rose-200
                          bg-rose-50
                          text-xs
                          font-black
                          text-[#4C0519]
                          shadow-xs
                          transition-all
                          duration-300
                          group-hover/item:bg-[#4C0519]
                          group-hover/item:text-white
                        "
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      {idx < promises.length - 1 && (
                        <div className="mt-2.5 h-full min-h-[22px] w-px bg-rose-200" />
                      )}
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="mb-1 text-base font-black text-[#000000] transition-colors duration-300 group-hover/item:text-[#D2446D]">
                        {promise.title}
                      </h3>
                      <p className="max-w-xl text-xs leading-relaxed text-gray-600 font-medium">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM ACCENT */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1.5 w-12 rounded-full bg-[#4C0519]" />
                <div className="h-1.5 w-3 rounded-full bg-[#D2446D]" />
                <div className="h-1.5 w-2 rounded-full bg-rose-200" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}