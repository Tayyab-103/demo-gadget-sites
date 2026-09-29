"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

// Additional showcase items representing our baby products collection for a rich, continuous marquee
const carouselItems = [
  ...products.map((p) => ({
    id: p.id,
    name: p.name,
    price: `$${parseFloat(p.ssPrice).toFixed(2)}`,
    image: p.image,
    href: `/product/${p.id}`,
  })),
  {
    id: "product-bouncer",
    name: "Ergonomic Baby Bouncer",
    price: "$24.95",
    image: "/img/products/Baby Bouncer.jpg",
    href: "/shop",
  },
  {
    id: "product-playgym",
    name: "Sensory Baby Play Gym",
    price: "$29.95",
    image: "/img/products/Baby Play Gym.jpg",
    href: "/shop",
  },
  {
    id: "product-carseat",
    name: "SafeGuard Infant Car Seat",
    price: "$49.95",
    image: "/img/products/Infant Car Seats.jpg",
    href: "/shop",
  },
  {
    id: "product-pillow",
    name: "Ergonomic Nursing Pillow",
    price: "$16.95",
    image: "/img/products/Nursing Pillow & Cover.jpg",
    href: "/shop",
  },
  {
    id: "product-woodgym",
    name: "Solid Wood Baby Gym",
    price: "$27.95",
    image: "/img/products/Solid Wood Baby Gym.jpg",
    href: "/shop",
  },
  {
    id: "product-stroller",
    name: "Compact Baby Stroller",
    price: "$44.95",
    image: "/img/products/Strollers.jpg",
    href: "/shop",
  },
];

interface ProductCarouselProps {
  images?: string[];
  name?: string;
}

export default function ProductCarousel({ images, name }: ProductCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Single Product Gallery Mode fallback (if used inside a single product page)
  if (images && images.length > 0) {
    return (
      <div className="relative bg-neutral-bg shadow-lg rounded-3xl overflow-hidden h-[350px] md:h-[450px] flex items-center justify-center border border-stone-200">
        <img
          src={images[0]}
          alt={name || "Product"}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Duplicate items 4 times to guarantee a seamless, infinite loop without breaks
  const duplicatedItems = [
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
  ];

  return (
    <section
      className="w-full bg-neutral-bg/60 py-4 sm:py-5 overflow-hidden border-y border-stone-200/60 relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Products Ticker"
    >
      {/* Subtle edge fade overlays for smooth entrance and exit */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-neutral-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-neutral-bg to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div
        className="flex w-max items-center gap-3 sm:gap-4.5 will-change-transform"
        style={{
          animation: "marquee 75s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={item.href}
            className="group shrink-0 inline-flex items-center gap-3 bg-white hover:bg-white/95 rounded-full py-2 px-4 sm:py-2.5 sm:px-5 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 cursor-pointer"
          >
            {/* Circular Product Image */}
            <div className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-full overflow-hidden bg-stone-100 border border-stone-200/70 shrink-0 flex items-center justify-center p-0.5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/img/hero1.jpg";
                }}
              />
            </div>

            {/* Product Name */}
            <span className="text-xs sm:text-[0.82rem] font-semibold text-neutral-text group-hover:text-primary transition-colors whitespace-nowrap">
              {item.name}
            </span>

            {/* Price Tag in Bold Green / Highlight */}
            <span className="text-xs sm:text-[0.82rem] font-bold text-[#1a6645] bg-[#eef7f2] px-2 py-0.5 rounded-full whitespace-nowrap">
              {item.price}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
