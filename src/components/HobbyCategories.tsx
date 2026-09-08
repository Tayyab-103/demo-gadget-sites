"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    id: "classic-chess",
    title: "Heirloom Tournament Chess Sets",
    description: "Solid walnut and maple tournament boards, weighted Staunton pieces, and velvet-lined storage.",
    itemsCount: "8 Sets Available",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    link: "/product/product1",
  },
  {
    id: "wooden-ludo",
    title: "Classic Wooden Ludo & Board Games",
    description: "Handcrafted dual-sided wooden boards, solid brass dice, and vibrant wooden playing pegs for game nights.",
    itemsCount: "12 Games Available",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=800&auto=format&fit=crop",
    link: "/product/product2",
  },
  {
    id: "puzzle-books",
    title: "Strategy Guides & Puzzle Books",
    description: "Illustrated master-level chess lore playbooks, logic riddles, and tabletop strategy game books.",
    itemsCount: "15 Books Available",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    link: "/product/product3",
  },
  {
    id: "stem-models",
    title: "3D Mechanical Wooden Models",
    description: "Self-propelled kinetic gears, pendulum clocks, and laser-cut automata with zero glue required.",
    itemsCount: "10 Kits Available",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    link: "/shop",
  },
];

export default function HobbyCategories() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-black/[0.06] font-sans" id="categories">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              Explore By Passion
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
              Featured Hobby Worlds
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold uppercase tracking-widest text-[#A36B42] hover:text-[#191716] transition-colors self-start md:self-auto"
          >
            View Full Guild Catalog &rarr;
          </Link>
        </div>

        {/* 4-Grid Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group relative flex flex-col justify-end min-h-[380px] rounded-3xl overflow-hidden p-6 border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-[#191716]"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-75 group-hover:opacity-85"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop";
                }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191716] via-[#191716]/60 to-transparent" />

              {/* Card Content */}
              <div className="relative z-10">
                <span className="inline-block bg-[#A36B42] text-white text-[0.62rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 shadow-xs">
                  {cat.itemsCount}
                </span>

                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#E5B887] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                  {cat.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#E5B887] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore World</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
