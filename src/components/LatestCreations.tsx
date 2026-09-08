"use client";

import React from "react";
import Link from "next/link";

const creations = [
  {
    id: "organic-muslin",
    image:
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=1000&auto=format&fit=crop&q=80",
    href: "/shop",
    alt: "Organic Muslin Baby Collection",
  },
  {
    id: "beechwood-teethers",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1000&auto=format&fit=crop&q=80",
    href: "/shop",
    alt: "Beechwood Sensory Teethers",
  },
  {
    id: "heirloom-knitwear",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1000&auto=format&fit=crop&q=80",
    href: "/shop",
    alt: "Heirloom Knitted Baby Set",
  },
  {
    id: "nursery-comfort",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1000&auto=format&fit=crop&q=80",
    href: "/shop",
    alt: "Nursery Comfort & Swaddles",
  },
];

export default function LatestCreations() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E1040] tracking-tight">
            Our Latest Creations
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-lg mx-auto">
            A visual collection of our most recent works — each piece crafted with intention, emotion, and style.
          </p>
        </div>

        {/* Expanding Cards without Text Overlay */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:h-[420px] w-full max-w-5xl mx-auto">
          {creations.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative group flex-grow transition-all duration-500 ease-out md:w-56 h-[260px] md:h-[420px] hover:md:w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer block"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
