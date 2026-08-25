"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Quality-Checked Stitching",
    desc: "Every piece is hand-inspected for seams, fabric weight, and finish before it ships, so it holds up to daily wear.",
  },
  {
    title: "30-Day Easy Returns, Every Order",
    desc: "Not the right fit or feel? Send it back within 30 days — no fine print, no hidden exclusions.",
  },
  {
    title: "Responsibly Sourced Fabrics",
    desc: "We partner with vetted mills using quality-checked cottons, fleece, and blends in every piece.",
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-neutral-bg py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            MAIN TWO-CARD LAYOUT
            ========================================================= */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">

          {/* =======================================================
              LEFT — IMAGE CARD
              ======================================================= */}
          <div
            className="
              group
              relative
              w-full
              overflow-hidden
              rounded-[2.5rem]
              bg-white
              shadow-[0_25px_70px_rgba(0,0,0,0.12)]
              min-h-[520px]
              md:min-h-[620px]
              lg:min-h-[720px]
            "
          >
            {/* Full Image
                object-fill keeps the COMPLETE image visible.
                Nothing on the left or right gets cropped.
            */}
            <img
              src="https://images.unsplash.com/photo-1503457574465-52a7a7c3edcc?w=1200&q=80"
              alt={`${siteConfig.brandName} Quality Assurance`}
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
                group-hover:scale-[1.01]
              "
            />

            {/* Very subtle overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
          </div>

          {/* =======================================================
              RIGHT — GUARANTEE CARD
              ======================================================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-black/[0.04]
              bg-white
              shadow-[0_25px_70px_rgba(0,0,0,0.10)]
            "
          >
            {/* Decorative background */}
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-secondary/[0.08]
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-96
                w-96
                rounded-full
                bg-primary/[0.035]
                blur-3xl
              "
            />

            {/* =====================================================
                CARD CONTENT
                ===================================================== */}
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

              {/* =================================================
                  EYEBROW
                  ================================================= */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-8 bg-secondary md:w-10" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-secondary
                    md:text-sm
                  "
                >
                  Our Guarantee
                </span>

                <span className="h-px w-8 bg-secondary md:w-10" />
              </div>

              {/* =================================================
                  HEADING
                  ================================================= */}
              <h2
                className="
                  mb-7
                  max-w-xl
                  text-4xl
                  font-black
                  uppercase
                  leading-[0.98]
                  tracking-[-0.025em]
                  text-primary
                  sm:text-5xl
                  md:text-5xl
                  lg:text-[3.5rem]
                  xl:text-[4rem]
                "
              >
                The Premium
                <br />
                Quality
                <br />
                <span className="text-secondary">
                  You Deserve
                </span>
              </h2>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}
              <p
                className="
                  mb-10
                  max-w-xl
                  text-sm
                  leading-[1.8]
                  text-neutral-text/65
                  sm:text-base
                  md:mb-12
                  md:text-[1.05rem]
                "
              >
                We understand how much clothes your family wears every day have
                to hold up to. That&apos;s why we maintain strict, end-to-end
                quality checks across every piece we source and ship.
              </p>

              {/* =================================================
                  GUARANTEE POINTS
                  ================================================= */}
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
                      py-6
                      first:border-t-0
                      first:pt-0
                      last:pb-0
                      md:gap-6
                      md:py-7
                    "
                  >
                    {/* Number */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-secondary/25
                          bg-secondary/[0.08]
                          text-sm
                          font-black
                          text-secondary
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover/item:border-secondary
                          group-hover/item:bg-secondary
                          group-hover/item:text-primary-text
                        "
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Vertical connector */}
                      {idx < promises.length - 1 && (
                        <div className="mt-3 h-full min-h-[25px] w-px bg-secondary/15" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 pt-0.5">
                      <h3
                        className="
                          mb-2
                          text-base
                          font-bold
                          leading-snug
                          text-primary
                          transition-colors
                          duration-300
                          group-hover/item:text-secondary
                          sm:text-lg
                          md:text-xl
                        "
                      >
                        {promise.title}
                      </h3>

                      <p
                        className="
                          max-w-xl
                          text-xs
                          leading-[1.75]
                          text-neutral-text/60
                          sm:text-sm
                          md:text-[0.95rem]
                        "
                      >
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  BOTTOM ACCENT
                  ================================================= */}
              <div className="mt-10 flex items-center gap-3 md:mt-12">
                <div className="h-1 w-12 rounded-full bg-secondary" />
                <div className="h-1 w-3 rounded-full bg-secondary/30" />
                <div className="h-1 w-2 rounded-full bg-secondary/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}