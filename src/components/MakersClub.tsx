"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const galleryItems = [
  {
    title: "Completed Chronos Clock",
    author: "@maker_elena",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop",
    tag: "3D Wooden Model",
  },
  {
    title: "Sunday Game Night Victory",
    author: "@boardgame_marcus",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=600&auto=format&fit=crop",
    tag: "Tabletop Night",
  },
  {
    title: "Walnut Chess Tournament Match",
    author: "@chess_vault_dan",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=600&auto=format&fit=crop",
    tag: "Classic Chess",
  },
  {
    title: "Family STEM Build Session",
    author: "@the_vance_family",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
    tag: "Family Craft",
  },
];

export default function MakersClub() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/[0.06] font-sans" id="community">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/[0.08]">
          <div>
            <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              #WonderwickMakers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
              Built By You. Shared With Pride.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-black/60">Follow along &bull;</span>
            <span className="text-xs font-bold text-[#A36B42] bg-[#FAF8F5] px-3 py-1 rounded-full border border-black/[0.06]">
              14,000+ Tabletop Enthusiasts
            </span>
          </div>
        </div>

        {/* 4 Gallery Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#191716] shadow-sm hover:shadow-lg border border-black/10 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-xs text-[#191716] text-[0.62rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-2xs">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold leading-snug text-white group-hover:text-[#E5B887] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[0.68rem] text-white/70 mt-0.5 font-mono">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-10 bg-[#FAF8F5] rounded-2xl p-6 border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#A36B42] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              🎲
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#191716]">Have you completed a Wonderwick model or won game night?</h4>
              <p className="text-xs text-black/60">Tag your tabletop victory on social media with <strong className="text-[#191716]">#WonderwickMakers</strong> for a chance to be featured!</p>
            </div>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#191716] text-white hover:bg-[#A36B42] transition-all text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-xs whitespace-nowrap cursor-pointer"
          >
            <span>Start Your Build</span>
            <span>&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
