"use client";

import React from "react";
import Link from "next/link";

interface CreationCard {
  id: string;
  title: string;
  image: string;
  href: string;
}

const creations: CreationCard[] = [
  {
    id: "creation-1",
    title: "Solid Spruce Acoustic",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop",
    href: "/shop",
  },
  {
    id: "creation-2",
    title: "Classical European Violin",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=800&auto=format&fit=crop",
    href: "/shop",
  },
  {
    id: "creation-3",
    title: "17-Key Mahogany Kalimba",
    image: "/img/hero4.jpg",
    href: "/shop",
  },
  {
    id: "creation-4",
    title: "Archival Sonata Score",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=800&auto=format&fit=crop",
    href: "/shop",
  },
  {
    id: "creation-5",
    title: "Artisan Luthier Workshop",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    href: "/shop",
  },
  {
    id: "creation-6",
    title: "Concert Grand Piano",
    image: "/img/hero2.jpg",
    href: "/shop",
  },
  {
    id: "creation-7",
    title: "Gold-Foil Chord Folio",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",
    href: "/shop",
  },
  {
    id: "creation-8",
    title: "Chamber Orchestral Cello",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=800&auto=format&fit=crop",
    href: "/shop",
  },
];

export default function LatestCreations() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] relative overflow-hidden" id="latest-creations">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
            <span>𝄞 Visual Workshop Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000000] tracking-tight">
            Our Latest Creations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-lg mx-auto font-medium">
            A visual collection of our most recent works — each piece crafted with intention, emotion, and style.
          </p>
        </div>

        {/* Grid Cards Container */}
        <div className="flex flex-wrap items-center justify-center mt-10 gap-4 max-w-5xl mx-auto">
          {creations.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                <h3 className="text-base sm:text-lg font-bold leading-tight drop-shadow-sm text-white">
                  {item.title}
                </h3>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-xs text-[#D2446D] hover:text-white font-extrabold mt-1.5 transition-colors"
                >
                  <span>Show More</span>
                  <svg width="14" height="14" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
