import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import SectionHeading from "@/components/SectionHeading";

const products = productsData as unknown as Product[];

// Lifestyle shot (2nd gallery image) + short pitch for each product
const needs: Record<string, { title: string; blurb: string; tint: string }> = {
  product1: { title: "Brush-out time", blurb: "Lift loose fur and tangles, then click to clean.", tint: "from-primary/90" },
  product2: { title: "Chew & play", blurb: "Textured toys for busy little mouths.", tint: "from-secondary/90" },
  product3: { title: "Walk in comfort", blurb: "Soft, adjustable collars for small pets.", tint: "from-primary/90" },
};

export default function ShopByNeed() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-gradient-soft" id="shop-by-need">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            align="left"
            eyebrow="Shop by need"
            title={<>What&apos;s on your pet&apos;s <span className="text-gradient">to-do list?</span></>}
          />
          <Link href="/shop" className="self-start md:self-auto text-sm font-bold text-primary-deep hover:text-ink transition-colors whitespace-nowrap">
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, idx) => {
            const need = needs[product.id] ?? { title: product.category, blurb: "", tint: "from-primary/90" };
            const image = product.images?.[1] ?? product.image;
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className={`group relative h-[360px] sm:h-[420px] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-shadow ${
                  idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <img
                  src={image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t ${need.tint} via-white/30 to-transparent`} />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink bg-white/85 backdrop-blur px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink leading-tight">{need.title}</h3>
                  <p className="text-sm text-ink/80 mt-1">{need.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-2 bg-ink text-white text-xs font-bold px-4 py-2.5 rounded-full group-hover:gap-3 transition-all">
                    Shop now <span>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
