"use client";

import React from "react";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Dressing Your Little One Stylish and Comfortable Baby Outfits",
    date: "June 4, 2026",
    author: "By Jeams",
    comments: "3 Comments",
    image: "/img/blog1.webp",
    category: "Baby Care",
    excerpt:
      "Discover the latest trends in child-safe fabrics, breathable organic cotton, and adorable outfits designed to keep your little ones cheerful during playful adventures and family outings.",
  },
  {
    id: 2,
    title: "Baby Gear Essentials What You Really Need for Play",
    date: "June 3, 2026",
    author: "By Jeams",
    comments: "5 Comments",
    image: "/img/products/wooden-puzzle.jpg",
    category: "Toy Reviews",
    excerpt:
      "From Montessori developmental wooden puzzles to ergonomic play mats, our comprehensive checklist helps parents choose the highest quality developmental toys without clutter.",
  },
  {
    id: 3,
    title: "Babyproofing Your Home A Comprehensive Family Guide",
    date: "June 2, 2026",
    author: "By Jeams",
    comments: "2 Comments",
    image: "/img/blog2.webp",
    category: "Safety",
    excerpt:
      "Creating a safe home playground is essential as toddlers begin exploring. Learn about ASTM safety standards, non-toxic toy finishes, and secure storage for family board games.",
  },
  {
    id: 4,
    title: "How to Choose the Perfect Toys and Games for Your Toddler",
    date: "June 1, 2026",
    author: "By Jeams",
    comments: "4 Comments",
    image: "/img/blog3.webp",
    category: "Learning",
    excerpt:
      "Age-appropriate toys nurture cognitive growth, spatial problem solving, and social sharing. Here is our expert guide to matching games with your child's developmental milestones.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white font-sans border-b border-black/5 relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Kiddex */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Our News &amp; Updates
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Latest From <span className="text-[#ff4370]">Media</span>
          </h2>
        </div>

        {/* 4 News Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-black/8 hover:border-[#ff4370]/30 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#ff4370] text-white text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {article.category}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-3 text-[0.72rem] text-black/50 font-bold mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="text-[#ff4370]">{article.author}</span>
                  </div>
                  <h3 className="text-base font-black text-[#1e293b] leading-snug group-hover:text-[#ff4370] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5">
                  <Link
                    href="/blog"
                    className="text-xs font-black uppercase tracking-wider text-[#1e293b] group-hover:text-[#ff4370] transition-colors inline-flex items-center gap-1"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
