"use client";

import React from "react";
import Link from "next/link";
import { products } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

// One lifestyle shot per product, in the same order as config/products.json
const looks: { image: string; alt: string; note: string; studio?: boolean }[] = [
  { image: "/img/lab2.jpg", alt: "Runner pulling up a black crew sock before a run", note: "Cushioned footbed · arch band" },
  { image: "/img/products/product-compression3.jpg", alt: "Athlete wearing a black long-sleeve compression top", note: "Four-way stretch · flatlock seams", studio: true },
  { image: "/img/products/product-hoodie3.jpg", alt: "Woman wearing a light grey zip hoodie outdoors", note: "Brushed fleece · zip pockets" },
];

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="in-action">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="In action"
          title={
            <>
              Built for the <span className="hl">whole session</span>
            </>
          }
          subtitle="How each piece is meant to be worn, from the first lace-up to the last cooldown lap."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {products.slice(0, looks.length).map((product, i) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`group relative overflow-hidden rounded-[1.75rem] min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-7 ${
                looks[i].studio ? "bg-secondary" : "bg-primary"
              }`}
            >
              <img
                src={looks[i].image}
                alt={looks[i].alt}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  looks[i].studio ? "mix-blend-multiply object-top" : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              <div className="relative">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.16em] text-secondary-text">
                  {product.category}
                </span>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-white leading-tight">{product.name}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">{looks[i].note}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-secondary">
                  Shop now
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
