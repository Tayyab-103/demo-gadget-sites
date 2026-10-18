"use client";

import React from "react";
import Image from "next/image";

const tiles = [
  {
    image: "/img/cta_garden_bg.jpg",
    title: "Raised beds at first light",
    tag: "Kitchen garden",
    span: "col-span-2 row-span-2",
  },
  {
    image: "/img/products/garden_tools/pruner_1.jpg",
    title: "Deadheading the roses",
    tag: "Pruning",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/img/products/garden_tools/trowel_3.jpg",
    title: "Repotting day",
    tag: "Planting",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/img/how_it_works_3.jpg",
    title: "Herbs, seeds & a trusty trowel",
    tag: "Potting bench",
    span: "col-span-1 row-span-1",
  },
  {
    image: "/img/products/garden_tools/cultivator_3.jpg",
    title: "Turning autumn beds",
    tag: "Soil care",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg" id="gallery">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow">In the Garden</span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-primary mt-4 leading-tight">
            Made to get <em className="text-secondary">dirty</em>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-text/70 leading-relaxed">
            From balcony pots to backyard vegetable plots — this is where our tools spend their days.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[220px] lg:auto-rows-[250px] gap-3 sm:gap-4">
          {tiles.map((tile) => (
            <figure key={tile.image} className={`group relative overflow-hidden rounded-[1.5rem] bg-primary/10 ${tile.span}`}>
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <figcaption className="absolute left-3 right-3 bottom-3 sm:left-5 sm:right-5 sm:bottom-5 text-white">
                <span className="inline-block text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full mb-1.5">
                  {tile.tag}
                </span>
                <span className="block text-xs sm:text-base font-semibold leading-snug">{tile.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
