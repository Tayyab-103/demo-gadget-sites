"use client";

import React from "react";
import Link from "next/link";

const promoCards = [
  {
    badge: "Featured",
    title: "Baby Toy’s",
    price: "From $00.99",
    image: "/img/products/plush-bunny.jpg",
    bgColor: "bg-[#fff0f4]",
    borderColor: "border-[#ff4370]/20",
    badgeColor: "bg-[#ff4370] text-white",
    href: "/shop?category=Plushies",
  },
  {
    badge: "Hot Sale",
    title: "Gaming",
    price: "From $10.99",
    image: "/img/products/board-game.jpg",
    bgColor: "bg-[#fff8e7]",
    borderColor: "border-[#ffb703]/30",
    badgeColor: "bg-[#ffb703] text-[#1e293b]",
    href: "/shop?category=Board+Games",
  },
  {
    badge: "Latest Deals",
    title: "Accessories",
    price: "From $20.99",
    image: "/img/products/magnetic-blocks.jpg",
    bgColor: "bg-[#f0f9ff]",
    borderColor: "border-sky-200",
    badgeColor: "bg-sky-500 text-white",
    href: "/shop?category=Building",
  },
];

export default function FeaturedPromoBlocks() {
  return (
    <section className="py-12 sm:py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {promoCards.map((card) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl ${card.bgColor} border ${card.borderColor} p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[220px]`}
            >
              {/* Background Product Artwork */}
              <div className="absolute right-[-10px] bottom-[-10px] w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden opacity-90 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Text info */}
              <div className="relative z-10 max-w-[65%]">
                <span className={`inline-block text-[0.68rem] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${card.badgeColor}`}>
                  {card.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] leading-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-sm font-bold text-black/60 mb-5">
                  {card.price}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1e293b] group-hover:text-[#ff4370] transition-colors"
                >
                  Shop Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
