"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const specs = ["OEM Standards", "Ships Same Day", "40K+ Orders Shipped"];

const carouselImages = [
  {
    src: "/img/hero1.jpg",
    alt: "Automotive vehicle and road accessories",
  },
  {
    src: "/img/products/product2.jpg",
    alt: "Magnetic suction car phone mount",
  },
  {
    src: "/img/products/product1.jpg",
    alt: "Blind spot car mirror set",
  },
  {
    src: "/img/hero4.jpg",
    alt: "High-performance car tuned and road ready",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const dots = (
    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
      {carouselImages.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setActiveImage(idx)}
          aria-label={`Show image ${idx + 1}`}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            idx === activeImage ? "w-6 bg-secondary" : "w-2 bg-white/60 hover:bg-white/90"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-neutral-bg">
      {/* Blueprint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 text-primary opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Right: full-height diagonal image panel — desktop only */}
      <div
        className="absolute inset-y-0 right-0 z-10 hidden w-[58%] overflow-hidden lg:block"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {carouselImages.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/5 to-transparent" />
        {dots}
      </div>

      <div className="relative z-20 mx-auto flex min-h-140 w-full max-w-7xl flex-col justify-center px-6 py-16 md:min-h-155 md:py-20">
        {/* Copy */}
        <div className="max-w-lg text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-primary shadow-sm">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
            Automotive Parts &amp; Accessories
          </span>

          <h1 className="mx-auto mt-6 text-4xl font-black uppercase leading-[1.05] tracking-tight text-primary md:text-6xl lg:mx-0">
            The Parts Drivers &amp; Pros Trust to <span className="text-secondary">Stay Road Ready</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-neutral-text/60 md:text-base lg:mx-0">
            From wide-angle blind-spot mirrors to magnetic suction phone mounts and interior accessories, we stock what drivers need — reliable, durable, and ready to ship today.
          </p>

          {/* Spec ticker */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            {specs.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-primary/10 bg-white px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-widest text-primary/70"
              >
                {spec}
              </span>
            ))}
          </div>

          <div className="mt-9 flex justify-center lg:justify-start">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-secondary/20"
            >
              Shop Auto Parts &amp; Accessories
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* Mobile/tablet image — the diagonal panel only shows on lg+ */}
        <div className="relative mt-12 aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-black/5 shadow-2xl lg:hidden">
          {carouselImages.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === activeImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
          {dots}
        </div>
      </div>
    </section>
  );
}
