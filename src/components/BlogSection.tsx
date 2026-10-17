"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const posts = [
  {
    id: 1,
    title: "Fashion Trends in 2026: Style, Colors & Breathable Textures",
    date: "October 14, 2026",
    image: "/img/blog1.jpg",
    excerpt: "Exploring the revival of artisanal tailoring, natural earth hues, and versatile layering essentials.",
  },
  {
    id: 2,
    title: "Behind the Atelier: Curating Effortless Everyday Womenswear",
    date: "October 02, 2026",
    image: "/img/blog2.jpg",
    excerpt: "How our designers blend timeless European silhouettes with sustainable washed linen and organic cotton.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F7] border-b border-black/5" id="journal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="category-subtitle">
            our <b>journal</b>
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mt-1">
            The Latest in Modern Meadow
          </h3>
          <p className="text-neutral-text/60 text-xs sm:text-sm mt-3 leading-relaxed">
            Stories on sustainable styling, capsule wardrobe curation, and the fine art of relaxed elegance.
          </p>
        </div>

        {/* 2-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm group hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE6E1]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[0.7rem] uppercase tracking-widest text-neutral-text/50 font-semibold block mb-3">
                    {post.date}
                  </span>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <Link href="/about" className="read-more">
                    Read story
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/about" className="fashion-button-outline">
            Read journal
          </Link>
        </div>

      </div>
    </section>
  );
}
