"use client";

import { siteConfig } from "@/lib/brandIcon";
import Link from "next/link";

// Cut-corner "trail tag" shapes for the mosaic tiles
const notchTopRight = "polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 0 100%)";
const notchBottomLeft = "polygon(0 0, 100% 0, 100% 100%, 44px 100%, 0 calc(100% - 44px))";

const tileBase =
  "group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/25";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      {/* Faint grid + orange glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20">
        {/* ---------- Masthead ---------- */}
        <div className="flex items-center justify-between gap-4 border-b-2 border-primary pb-3">
          <span className="text-[0.62rem] sm:text-xs font-black uppercase tracking-[0.25em] text-primary">
            {siteConfig.brandName}
          </span>
          <span className="text-[0.62rem] sm:text-xs font-black uppercase tracking-[0.25em] text-secondary-deep">
            Austin, TX
          </span>
        </div>

        <h1 className="sr-only">{`Train Outside with ${siteConfig.brandName}`}</h1>

        <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 items-end gap-x-8">
          {/* "TRAIN" — each letter hops and turns orange on hover */}
          <div
            className="order-1 lg:col-span-7 flex font-black uppercase leading-[0.8] tracking-tighter text-primary text-[26vw] sm:text-[22vw] lg:text-[12.5rem] select-none"
            aria-hidden="true"
          >
            {"Train".split("").map((letter, idx) => (
              <span key={idx} className="letter-hop" style={{ transitionDelay: `${idx * 25}ms` }}>
                {letter}
              </span>
            ))}
          </div>

          <div className="order-3 lg:order-2 lg:col-span-5 lg:pb-6 mt-6 lg:mt-0">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted max-w-md">
              {`Rugged ${(siteConfig.Product || "sporting goods").toLowerCase()} for the trail, the park and the garage gym. Made for people who'd rather sweat in the open air than wait for a bench.`}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/shop" className="btn-accent group/btn">
                Shop Now
                <span aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          {/* Photo-filled word — photo pans and zooms on hover */}
          <div className="group/word relative order-2 lg:order-3 lg:col-span-12" aria-hidden="true">
            <div
              className="photo-text font-black uppercase leading-[0.85] tracking-tighter text-[20vw] lg:text-[16.9rem] -mt-1 sm:-mt-2 select-none"
              style={{
                backgroundImage:
                  "linear-gradient(color-mix(in srgb, var(--primary-color) 38%, transparent), color-mix(in srgb, var(--primary-color) 38%, transparent)), url('/img/products/sample_kettlebell.jpg')",
              }}
            >
              Outside
            </div>

            {/* Sticker straightens and pops on hover */}
            <span className="absolute right-[2%] -top-5 sm:top-[4%] -rotate-[8deg] rounded-xl bg-secondary px-3 py-2 sm:px-5 sm:py-3 text-[0.6rem] sm:text-sm font-black uppercase tracking-widest text-secondary-text shadow-xl shadow-secondary/30 transition-transform duration-500 ease-out group-hover/word:rotate-0 group-hover/word:scale-110 hover:rotate-3">
              No Gym Required
            </span>
          </div>
        </div>

        {/* ---------- Mosaic ---------- */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Photo: strength */}
          <Link
            href="/shop"
            className={`${tileBase} col-span-1 row-span-2 lg:row-span-1 min-h-[300px] sm:min-h-[340px]`}
            style={{ clipPath: notchTopRight }}
          >
            <img
              src="/img/howitworks3.jpg"
              alt="Athlete training with a dumbbell"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="block text-xs font-black uppercase tracking-widest text-white">01 · Strength</span>
              <span className="mt-1 block max-h-0 overflow-hidden text-xs text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100">
                Add load to every rep →
              </span>
            </div>
          </Link>

          {/* Navy delivery tile — truck drives off on hover */}
          <div className={`${tileBase} bg-primary p-5 sm:p-6 text-white flex flex-col justify-between min-h-[160px] lg:min-h-[340px]`}>
            <div className="absolute inset-0 bg-topo transition-opacity duration-500 group-hover:opacity-60" aria-hidden="true" />
            <div className="relative h-9 overflow-hidden">
              <svg
                className="text-secondary transition-transform duration-700 ease-in-out group-hover:translate-x-[180%]"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary/60 transition-all duration-700 group-hover:w-full" aria-hidden="true" />
            </div>
            <div className="relative">
              <div className="text-3xl sm:text-5xl font-black leading-none transition-colors duration-300 group-hover:text-secondary">
                {siteConfig.shippingPeriod}
              </div>
              <div className="mt-2 text-[0.62rem] sm:text-xs font-bold uppercase tracking-widest text-white/70">
                {`Day ${siteConfig.shippingCarrier} delivery`}
              </div>
            </div>
          </div>

          {/* Photo: together */}
          <Link
            href="/about"
            className={`${tileBase} min-h-[160px] lg:min-h-[340px]`}
            style={{ clipPath: notchBottomLeft }}
          >
            <img
              src="/img/products/test_gym.jpg"
              alt="Group of athletes training together on mats"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute bottom-4 right-4 left-4 text-right">
              <span className="block text-xs font-black uppercase tracking-widest text-white">02 · Together</span>
              <span className="mt-1 block max-h-0 overflow-hidden text-xs text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100">
                Gear for every session →
              </span>
            </div>
          </Link>

          {/* Orange CTA tile — fills navy from the corner on hover */}
          <Link
            href="/shop"
            className={`${tileBase} col-span-2 lg:col-span-1 bg-secondary p-5 sm:p-6 text-secondary-text flex flex-col justify-between min-h-[170px] lg:min-h-[340px]`}
          >
            <span
              className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-primary transition-transform duration-700 ease-out group-hover:scale-[6]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="text-4xl sm:text-6xl font-black leading-none transition-colors duration-500 group-hover:text-secondary">
                {siteConfig.trialPeriod}
              </div>
              <div className="mt-2 text-xs font-black uppercase tracking-widest">Day trial on every order</div>
            </div>
            <div className="relative flex items-end justify-between gap-4">
              <span className="text-lg sm:text-xl font-black uppercase leading-tight">
                Find Your
                <br />
                Next Gear
              </span>
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary transition-all duration-500 group-hover:-rotate-45 group-hover:bg-secondary group-hover:text-secondary-text">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
