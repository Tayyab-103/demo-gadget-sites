"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const specs = ["UL Listed", "Ships Same Day", "40K+ Orders Shipped"];

export default function Hero() {
  const { addToCart } = useCart();
  const featured = products[0];

  const firstBundle = featured?.bundles && featured.bundles[0];
  const price = firstBundle ? firstBundle.price : featured?.ssPrice;

  const handleQuickAdd = () => {
    if (!featured) return;
    const quantity = firstBundle ? firstBundle.quantity : 1;
    const unitPrice = firstBundle ? (firstBundle.price / firstBundle.quantity).toFixed(2) : featured.ssPrice;
    addToCart(featured, quantity, unitPrice, "Single Pack");
  };

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

      {/* Angled dark panel, desktop only */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-primary lg:block"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-10">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-primary shadow-sm">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
            Electrical Parts &amp; Equipment
          </span>

          <h1 className="mx-auto mt-6 max-w-lg text-4xl font-black uppercase leading-[1.05] tracking-tight text-primary md:text-6xl lg:mx-0">
            The Parts Pros Trust to Get the <span className="text-secondary">Job Done</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-neutral-text/60 md:text-base lg:mx-0">
            From copper wire to certified breakers, we stock what contractors and electricians need — tested, code-compliant, and ready to ship today.
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
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-9 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary-text shadow-lg transition-all duration-300 hover:bg-secondary hover:text-secondary-text"
            >
              Shop Parts &amp; Equipment
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* Right: Featured product spotlight */}
        {featured && (
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-secondary/25 blur-3xl" />

            {/* Floating spec badge */}
            <div className="absolute -left-4 top-6 z-20 hidden rotate-[-4deg] rounded-xl border border-black/5 bg-white px-3 py-2 shadow-lg sm:block">
              <span className="text-[0.6rem] font-black uppercase tracking-widest text-secondary">Code Compliant</span>
            </div>

            <div className="relative rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  In Stock
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/40">{featured.category}</span>
              </div>

              <Link href={`/product/${featured.id}`} className="block overflow-hidden rounded-2xl bg-neutral-bg">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>

              <Link href={`/product/${featured.id}`}>
                <h3 className="mt-4 text-base font-bold leading-snug text-primary hover:text-secondary transition-colors">
                  {featured.name}
                </h3>
              </Link>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                <span className="text-2xl font-black text-primary">${price}</span>
                <button
                  onClick={handleQuickAdd}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary-text shadow-md transition-all duration-300 hover:bg-secondary hover:text-secondary-text"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
