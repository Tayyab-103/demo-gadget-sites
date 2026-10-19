"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const ROTATE_MS = 6500;

// Short spec callouts shown on the showcase stage for each tool
const specs: Record<string, { tagline: string; points: string[] }> = {
  product1: {
    tagline: "Airy cream, smooth batter, glossy sauces.",
    points: ["12 stainless wires", "Weighted copper-finish grip", "Dishwasher safe"],
  },
  product2: {
    tagline: "Measure straight into the bowl, to the tenth of a gram.",
    points: ["0.1 g precision", "One-touch TARE", "Stainless platform"],
  },
  product3: {
    tagline: "Herbs, poultry, twine and packaging in one tool.",
    points: ["Forged steel blades", "Micro-serrated edge", "Comes apart to clean"],
  },
};

const arrowBtn =
  "w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-ink transition-colors cursor-pointer";

export default function ToolShowcase() {
  const { addToCart } = useCart();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance through the tools until the visitor hovers or interacts
  useEffect(() => {
    if (paused || products.length < 2) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % products.length), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  const product = products[active];
  if (!product) return null;

  const spec = specs[product.id];
  const firstBundle = product.bundles && product.bundles[0];
  const price = firstBundle ? firstBundle.price : parseFloat(product.ssPrice);
  const inUseImage = product.images && product.images[1];

  const select = (idx: number) => {
    setActive((idx + products.length) % products.length);
    setPaused(true);
  };

  return (
    <section
      className="relative overflow-hidden bg-surface"
      id="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        {/* Headline row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-8 lg:mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">The {siteConfig.brandName.split(" ")[0]} kitchen edit</span>
            <h2 className="mt-4 text-[2.4rem] leading-[1.04] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink">
              Three tools.
              <br />
              <span className="text-secondary">Every meal.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base sm:text-lg text-muted leading-relaxed lg:pb-2">
            No drawer full of gadgets &mdash; just a whisk, a scale and a pair of shears that do their jobs properly. Pick a
            tool to take a closer look.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Showcase stage */}
          <div className="lg:col-span-8 lg:order-2">
            <div className="relative rounded-4xl overflow-hidden bg-primary aspect-4/5 sm:aspect-16/11 lg:aspect-auto lg:h-full lg:min-h-130 shadow-2xl">
              {products.map((p, idx) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={idx === active ? p.name : ""}
                  aria-hidden={idx !== active}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    idx === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/25" />

              {/* Counter */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white">
                <span className="tabular-nums">0{active + 1}</span>
                <span className="w-6 h-px bg-white/60" />
                <span className="tabular-nums opacity-70">0{products.length}</span>
              </div>

              {/* In-use inset */}
              {inUseImage && (
                <Link
                  href={`/product/${product.id}`}
                  className="hidden sm:block absolute top-6 right-6 w-36 lg:w-44 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl group"
                >
                  <img
                    key={inUseImage}
                    src={inUseImage}
                    alt={`${product.name} in use`}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 animate-[hero-rise_0.6s_ease-out]"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[0.65rem] font-semibold text-ink">
                    In use
                  </span>
                </Link>
              )}

              {/* Product story */}
              <div key={product.id} className="absolute left-0 right-0 bottom-0 p-5 sm:p-8 sm:pr-36 text-white animate-[hero-rise_0.6s_ease-out]">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">{product.category}</span>
                <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight max-w-lg">{product.name}</h3>
                {spec && <p className="mt-2 text-sm sm:text-base opacity-85 max-w-md">{spec.tagline}</p>}
                {spec && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {spec.points.map((pt) => (
                      <li key={pt} className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-medium">
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Prev / next */}
              <div className="absolute bottom-8 right-8 hidden sm:flex gap-2">
                <button onClick={() => select(active - 1)} aria-label="Previous tool" className={arrowBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button onClick={() => select(active + 1)} aria-label="Next tool" className={arrowBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Tool selector + actions */}
          <div className="lg:col-span-4 lg:order-1 flex flex-col">
            <div
              role="tablist"
              aria-label="Choose a kitchen tool"
              className="grid grid-cols-3 gap-2 sm:flex lg:flex-col sm:gap-3"
            >
              {products.map((p, idx) => {
                const isActive = idx === active;
                const pPrice = p.bundles && p.bundles[0] ? p.bundles[0].price : parseFloat(p.ssPrice);
                return (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => select(idx)}
                    className={`relative sm:flex-1 lg:flex-none text-center sm:text-left rounded-2xl p-2.5 sm:p-3.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 overflow-hidden transition-all cursor-pointer border ${
                      isActive ? "bg-surface border-line shadow-lg" : "bg-transparent border-line/70 lg:border-transparent hover:bg-surface/70"
                    }`}
                  >
                    <span className={`hidden sm:inline text-xs font-bold tabular-nums ${isActive ? "text-ink" : "text-muted"}`}>0{idx + 1}</span>
                    <img
                      src={p.image}
                      alt=""
                      className={`w-14 h-14 rounded-xl object-cover shrink-0 transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="hidden sm:block text-xs text-muted">{p.category}</span>
                      <span className="block text-[0.7rem] sm:text-sm font-bold text-ink leading-snug line-clamp-2">{p.name}</span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-muted sm:text-ink shrink-0">${pPrice.toFixed(2)}</span>

                    {/* Auto-advance progress */}
                    {isActive && products.length > 1 && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-line">
                        <span
                          key={`${active}-${paused}`}
                          className="block h-full bg-primary origin-left"
                          style={paused ? { transform: "scaleX(1)" } : { animation: `hero-progress ${ROTATE_MS}ms linear forwards` }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 lg:mt-auto lg:pt-6 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button onClick={() => addToCart(product, 1, price.toFixed(2), "Single tool")} className="btn-primary flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Add {product.name.split(" ").slice(-1)[0].toLowerCase()} to cart &middot; ${price.toFixed(2)}
              </button>
              <Link href={`/product/${product.id}`} className="btn-outline flex-1">
                See details &amp; multi-packs
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted text-center sm:text-left">
              Free {siteConfig.shippingCarrier} shipping &middot; {siteConfig.trialPeriod}-day returns &middot; One-time purchase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
