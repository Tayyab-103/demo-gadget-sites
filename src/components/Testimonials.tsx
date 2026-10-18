"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const stories = [
  {
    quote: "The knit throw is so soft and the color is exactly the warm oatmeal I wanted. It lives on our reading chair now and nobody wants to give it up.",
    author: "Rachel M.",
    location: "Portland, OR",
    product: "Harbor Knit Throw Blanket",
    image: "/img/brand/product1_blanket.jpg",
  },
  {
    quote: "I bought one lamp for the bedroom and came back for a second one for the living room. The linen shade gives such a cozy glow in the evenings.",
    author: "Daniel K.",
    location: "Charlotte, NC",
    product: "Stoneware Table Lamp",
    image: "/img/brand/product2_lamp.jpg",
  },
  {
    quote: "Finally something to keep my coffee table tidy that actually looks good. The oak is lovely and it arrived well packed and fast.",
    author: "Priya S.",
    location: "Denver, CO",
    product: "Oak & Stone Catchall Tray",
    image: "/img/brand/product3_tray.jpg",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden" id="testimonials">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-primary-text/10" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full border border-primary-text/10" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="Kind Words"
          title={<>Loved in homes <span className="italic text-secondary">across the country.</span></>}
          tone="dark"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {stories.map((story) => (
            <figure
              key={story.author}
              className="flex flex-col bg-neutral-bg rounded-3xl p-6 sm:p-8 shadow-xl shadow-primary-dark/20"
            >
              <div className="flex items-center justify-between mb-5">
                <Stars />
                <span className="font-serif text-5xl leading-none text-secondary h-6">&ldquo;</span>
              </div>

              <blockquote className="text-sm sm:text-[0.95rem] text-neutral-text/80 leading-relaxed flex-1">
                {story.quote}
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-secondary/60 flex items-center gap-3">
                <span className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-surface">
                  <Image src={story.image} alt={story.product} fill sizes="48px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-neutral-text">
                    {story.author} <span className="font-medium text-neutral-text/50">&middot; {story.location}</span>
                  </span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary truncate">
                    {story.product}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
