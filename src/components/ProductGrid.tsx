"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "../../config/products.json";
import siteConfigData from "../../config/site-config.json";
import { Product, SiteConfig } from "@/types";
import SectionHeading from "@/components/SectionHeading";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ProductGrid({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-bg relative" id="shop">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">

        {showHeader && (
          <SectionHeading
            eyebrow="The Collection"
            title={<>Three pieces, <span className="italic text-primary">endless rooms.</span></>}
            description="A small, focused edit of everyday home essentials — each one easy to place, easy to love, and made to last."
            action={
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
              >
                View all products
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            }
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const hoverImage = product.images && product.images[1];

            return (
              <article
                key={product.id}
                className="group flex flex-col bg-surface rounded-3xl p-3 sm:p-4 border border-secondary/50 hover:border-secondary hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Image */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block aspect-[4/5] rounded-2xl overflow-hidden bg-accent-light"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${hoverImage ? "group-hover:opacity-0" : ""}`}
                  />
                  {hoverImage && (
                    <Image
                      src={hoverImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-cover opacity-0 transition-all duration-700 ease-out scale-105 group-hover:opacity-100 group-hover:scale-100"
                    />
                  )}

                  <span className="absolute top-3 left-3 bg-neutral-bg/95 text-neutral-text text-[0.6rem] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full">
                    {String(idx + 1).padStart(2, "0")} &middot; {product.category}
                  </span>
                </Link>

                {/* Details */}
                <div className="flex flex-col flex-1 px-2 sm:px-3 pt-5 pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-serif font-medium text-2xl sm:text-[1.7rem] text-neutral-text leading-tight hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <span className="font-serif text-xl text-primary whitespace-nowrap pt-1">${currentPrice}</span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-text/60 leading-relaxed line-clamp-2 mb-5">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-secondary/60 flex items-center justify-between gap-3">
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-neutral-text/55">
                      Free {siteConfig.shippingCarrier} shipping
                    </span>
                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-text hover:bg-primary-dark px-5 py-2.5 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.16em] transition-colors"
                    >
                      Shop now
                      <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
