"use client";

import { siteConfig } from "@/lib/brandIcon";
import Link from "next/link";
import { useState } from "react";

const scenes = [
  {
    tag: "Trail & Commute",
    title: "Carry It All, Rain Or Shine",
    desc: "Roll-top packs that handle wet trails, long commutes and gym-to-field days without soaking your gear.",
    image: "/img/products/product3-3.jpg",
    alt: "Black backpack standing on an empty urban road",
  },
  {
    tag: "Core & Conditioning",
    title: "Add Load To Bodyweight",
    desc: "Strap on a weighted vest and turn simple circuits, hill walks and sit-ups into serious work.",
    image: "/img/products/sample_bottle.jpg",
    alt: "Athlete doing a sit-up on a gym floor",
  },
  {
    tag: "Studio & Group",
    title: "Built For Shared Sessions",
    desc: "Portable strength kits that set up in seconds for classes, partner workouts and park bootcamps.",
    image: "/img/products/test_gym.jpg",
    alt: "Group of athletes training together on mats",
  },
  {
    tag: "Garage Gym",
    title: "Strength Without The Membership",
    desc: "Compact dumbbells and bands that turn a corner of the garage into a full-body training space.",
    image: "/img/howitworks1.jpg",
    alt: "Row of dumbbells on a dark gym rack",
  },
];

export default function TrainAnywhere() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24" id="train-anywhere">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-3">Train Anywhere</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] text-primary">
              Your Gym Doesn&apos;t <span className="text-secondary">Need Walls</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end justify-between gap-6">
            <p className="text-sm md:text-base leading-relaxed text-muted">
              {`${siteConfig.brandName} gear is chosen to move with you. Pick a setting and see how it fits your routine.`}
            </p>
            <span className="hidden sm:block flex-shrink-0 text-5xl font-black leading-none text-primary/10 tabular-nums">
              {String(active + 1).padStart(2, "0")}
              <span className="text-2xl">/{String(scenes.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        {/* Expanding panels */}
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[540px]">
          {scenes.map((scene, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={scene.tag}
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                aria-expanded={isActive}
                className={`group relative overflow-hidden rounded-3xl text-left cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isActive ? "h-[420px] lg:h-auto lg:flex-[4]" : "h-24 lg:h-auto lg:flex-[1]"
                  }`}
              >
                <img
                  src={scene.image}
                  alt={scene.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${isActive ? "scale-100" : "scale-110 group-hover:scale-105"}`}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${isActive ? "bg-gradient-to-t from-primary via-primary/30 to-transparent" : "bg-primary/70 group-hover:bg-primary/55"
                    }`}
                />

                {/* Collapsed label */}
                <div
                  className={`absolute inset-0 flex items-center lg:items-end lg:justify-center gap-4 px-6 lg:px-0 lg:pb-8 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
                    }`}
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-secondary text-xs font-black text-white lg:absolute lg:top-6 lg:left-1/2 lg:-translate-x-1/2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
                    {scene.tag}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 sm:p-8 transition-all duration-500 ${isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[0.6rem] font-black uppercase tracking-widest text-secondary-text">
                    {String(idx + 1).padStart(2, "0")} · {scene.tag}
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white max-w-md">
                    {scene.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{scene.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-6 py-5">
          <p className="text-sm font-bold text-primary text-center sm:text-left">
            {`Every order ships with ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days and includes a ${siteConfig.trialPeriod}-day trial.`}
          </p>
          <Link href="/shop" className="btn-primary flex-shrink-0">
            Explore The Collection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
