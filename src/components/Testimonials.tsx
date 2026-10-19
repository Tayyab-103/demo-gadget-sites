"use client";

import React from "react";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

const reviews = [
  {
    name: "Rachel M.",
    location: "Denver, CO",
    text: "I didn't think a whisk could make a difference, but this one is so much quicker for whipped cream and pancake batter. The handle has a nice weight and it cleans up in seconds.",
    productId: "product1",
  },
  {
    name: "Owen T.",
    location: "Raleigh, NC",
    text: "I bake bread most weekends and the 0.1 g steps are exactly what I needed. Tare is instant, the display is easy to read and the steel platform wipes clean.",
    productId: "product2",
  },
  {
    name: "Priya S.",
    location: "Sacramento, CA",
    text: "These shears go through chicken wings and twine without any fuss. Love that they come apart for washing — my old pair always had gunk stuck in the hinge.",
    productId: "product3",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-ink" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">From our customers</span>
          <h2 className="section-title mt-4">What home cooks are saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => {
            const product = products.find((p) => p.id === rev.productId);
            return (
              <figure key={rev.name} className="card p-7 flex flex-col">
                <Stars />
                <blockquote className="mt-5 text-[0.95rem] text-ink leading-relaxed flex-1">
                  &ldquo;{rev.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-line flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-neutral-bg text-ink font-bold flex items-center justify-center flex-shrink-0">
                    {rev.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-ink">{rev.name}</span>
                    <span className="block text-xs text-muted truncate">
                      {rev.location}
                      {product && <> &middot; {product.name}</>}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
