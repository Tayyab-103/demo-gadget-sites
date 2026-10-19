"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

// Where each tool sits in /images/how-it-works-tools.jpg (percent of width / height)
const hotspots: { productId: string; x: number; y: number }[] = [
  { productId: "product1", x: 60, y: 50 },
  { productId: "product2", x: 66, y: 74 },
  { productId: "product3", x: 86, y: 77 },
];

const getPrice = (p: Product) =>
  p.bundles && p.bundles[0] ? p.bundles[0].price : parseFloat(p.ssPrice);

// Hover previews only on devices with a real pointer; touch uses taps
const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

function HotspotCard({
  product,
  price,
  onAdd,
}: {
  product: Product;
  price: number;
  onAdd: () => void;
}) {
  return (
    <>
      <div className="flex gap-3">
        <img
          src={product.image}
          alt=""
          className="w-16 h-16 rounded-xl object-cover shrink-0"
        />
        <div className="min-w-0">
          <span className="block text-[0.7rem] text-muted">
            {product.category}
          </span>
          <span className="block text-sm font-bold text-ink leading-snug">
            {product.name}
          </span>
          <span className="block text-sm font-extrabold text-ink mt-0.5">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Link
          href={`/product/${product.id}`}
          className="rounded-full border border-line text-center text-xs font-semibold text-ink py-2 hover:border-ink transition-colors"
        >
          Details
        </Link>
        <button
          onClick={onAdd}
          className="rounded-full bg-primary text-primary-text text-xs font-semibold py-2 hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

// Concave corner that lets the white headline panel flow into the photo
const notchCorner = {
  background:
    "radial-gradient(circle 2.5rem at 100% 100%, transparent 2.45rem, var(--color-surface) 2.5rem)",
};

export default function Hero() {
  const { addToCart } = useCart();
  const [openId, setOpenId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const openProduct = products.find((p) => p.id === openId);

  // Close an open hotspot card when tapping elsewhere
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (stageRef.current && !stageRef.current.contains(e.target as Node))
        setOpenId(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <section className="relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="relative">
          {/* Headline panel: stacked on mobile, cut into the photo's corner on desktop */}
          <div className="relative z-20 lg:absolute lg:top-0 lg:left-0 lg:w-[46%] bg-surface lg:rounded-br-[2.5rem] pb-8 lg:pr-10 lg:pb-10">
            <span
              className="hidden lg:block absolute top-0 left-full w-10 h-10"
              style={notchCorner}
              aria-hidden="true"
            />
            <span
              className="hidden lg:block absolute top-full left-0 w-10 h-10"
              style={notchCorner}
              aria-hidden="true"
            />

            <div className="flex items-center gap-3 pt-4 lg:pt-2">
              <span className="inline-flex -space-x-2">
                {products.map((p) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-surface"
                  />
                ))}
              </span>
              <span className="text-xs sm:text-sm text-muted">
                <strong className="text-ink font-semibold">
                  {products.length} essential tools
                </strong>{" "}
                &middot; free {siteConfig.shippingCarrier} shipping
              </span>
            </div>

            <h1 className="mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-ink">
              The counter,
              <br />
              <span className="text-secondary">sorted.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-md">
              A balanced whisk, a precise scale and forged shears &mdash; the
              three tools that do most of the work in a home kitchen, from{" "}
              {siteConfig.brandName}.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/#shop" className="btn-primary">
                Shop the tools
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="/#showcase" className="btn-outline">
                Compare the three
              </Link>
            </div>
          </div>

          {/* Photo stage; the photo keeps its native ratio so hotspots stay on the tools */}
          <div ref={stageRef}>
            <div className="relative">
              <div className="relative z-10 rounded-[1.75rem] lg:rounded-[2.5rem] overflow-hidden bg-primary aspect-1376/768">
                <img
                  src="/images/how-it-works-tools.jpg"
                  alt="Balloon whisk, digital kitchen scale and kitchen shears on a dark stone counter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 hidden sm:flex items-center gap-2 rounded-full bg-black/35 backdrop-blur-md px-3.5 py-2 text-xs font-medium text-white">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-white animate-ping" />
                    <span className="relative w-2 h-2 rounded-full bg-white" />
                  </span>
                  Hover or tap a tool on the counter
                </div>
                <div className="absolute right-4 top-4 sm:right-6 sm:top-6 hidden md:flex items-center gap-4 rounded-2xl bg-surface/95 px-4 py-3 shadow-lg">
                  <div>
                    <span className="block text-lg font-extrabold text-ink leading-none">
                      {siteConfig.trialPeriod} days
                    </span>
                    <span className="block text-[0.7rem] text-muted mt-1">
                      to try &amp; return
                    </span>
                  </div>
                  <span className="w-px h-8 bg-line" />
                  <div>
                    <span className="block text-lg font-extrabold text-ink leading-none">
                      {siteConfig.shippingPeriod} days
                    </span>
                    <span className="block text-[0.7rem] text-muted mt-1">
                      {siteConfig.shippingCarrier} delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Hotspots sit above the headline panel so open cards are never hidden */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                {hotspots.map((spot) => {
                  const product = products.find((p) => p.id === spot.productId);
                  if (!product) return null;
                  const isOpen = openId === product.id;
                  const price = getPrice(product);

                  return (
                    <div
                      key={spot.productId}
                      className={`absolute pointer-events-auto ${isOpen ? "z-10" : ""}`}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      onMouseEnter={() => canHover() && setOpenId(product.id)}
                      onMouseLeave={() => canHover() && setOpenId(null)}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : product.id)}
                        aria-label={`Show ${product.name}`}
                        aria-expanded={isOpen}
                        className={`relative -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors ${
                          isOpen
                            ? "bg-primary text-primary-text"
                            : "bg-surface text-ink"
                        }`}
                      >
                        {!isOpen && (
                          <span className="absolute inset-0 rounded-full bg-surface/70 animate-ping" />
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className={`relative transition-transform ${isOpen ? "rotate-45" : ""}`}
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>

                      {/* Floating card (tablet & desktop) */}
                      {isOpen && (
                        <div className="hidden sm:block absolute bottom-6 right-0 translate-x-4 w-72 card p-3 animate-[hero-rise_0.25s_ease-out]">
                          <HotspotCard
                            product={product}
                            price={price}
                            onAdd={() =>
                              addToCart(
                                product,
                                1,
                                price.toFixed(2),
                                "Single tool",
                              )
                            }
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: the selected tool appears under the photo */}
            {openProduct && (
              <div className="sm:hidden mt-3 card p-3 animate-[hero-rise_0.25s_ease-out]">
                <HotspotCard
                  product={openProduct}
                  price={getPrice(openProduct)}
                  onAdd={() =>
                    addToCart(
                      openProduct,
                      1,
                      getPrice(openProduct).toFixed(2),
                      "Single tool",
                    )
                  }
                />
              </div>
            )}
          </div>
          {!openProduct && (
            <p className="sm:hidden mt-3 text-xs text-muted text-center">
              Tap the dots to explore each tool
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
