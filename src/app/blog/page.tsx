"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

const blogPosts = [
  {
    id: 1,
    title: "Dressing Your Little One Stylish and Comfortable Baby Outfits",
    date: "June 4, 2026",
    author: "By Jeams",
    comments: "3 Comments",
    image: "/img/products/plush-bunny.jpg",
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
    image: "/img/products/board-game.jpg",
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
    image: "/img/products/magnetic-blocks.jpg",
    category: "Learning",
    excerpt:
      "Age-appropriate toys nurture cognitive growth, spatial problem solving, and social sharing. Here is our expert guide to matching games with your child's developmental milestones.",
  },
];

const categories = [
  { name: "Toy Safety & Standards", count: 12 },
  { name: "Montessori & STEM Play", count: 18 },
  { name: "Family Game Nights", count: 9 },
  { name: "Plushies & Comfort", count: 14 },
  { name: "Outdoor & Summer Games", count: 7 },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="flex-grow bg-white font-sans">
        <PageHeader
          eyebrow="Parenting &amp; Play Guide"
          title="Playhouse Blog Standard"
          subtitle="Insightful advice, safety reviews, and imaginative toy guides from our childhood experts."
          image="/img/products/board-game.jpg"
          currentLabel="Blog Standard"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Main Blog Posts Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-3xl border border-black/8 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/9] bg-black/5 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-[#ff4370] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 text-xs font-bold text-black/50 mb-3">
                      <span>📅 {post.date}</span>
                      <span>•</span>
                      <span className="text-[#ff4370]">✍️ {post.author}</span>
                      <span>•</span>
                      <span>💬 {post.comments}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1e293b] leading-snug group-hover:text-[#ff4370] transition-colors mb-3">
                      {post.title}
                    </h2>

                    <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider text-white bg-[#ff4370] hover:bg-[#e63560] py-3 px-6 rounded-full transition-all shadow-md shadow-[#ff4370]/20 cursor-pointer"
                    >
                      Read Full Story →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Sidebar Column (4 cols) matching Kiddex */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="rounded-3xl bg-[#fff9fa] p-6 sm:p-7 border border-black/8">
                <h3 className="text-base font-black text-[#1e293b] uppercase tracking-wider mb-4 border-b border-black/8 pb-2">
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search keywords..."
                    className="w-full px-4 py-3 rounded-full border border-black/10 bg-white text-xs sm:text-sm text-black focus:outline-none focus:border-[#ff4370] transition-colors"
                  />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="rounded-3xl bg-white p-6 sm:p-7 border border-black/8 shadow-xs">
                <h3 className="text-base font-black text-[#1e293b] uppercase tracking-wider mb-4 border-b border-black/8 pb-2">
                  Blog Categories
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
                  {categories.map((c) => (
                    <li key={c.name} className="flex items-center justify-between py-1 border-b border-black/5 last:border-none">
                      <span className="text-black/75 hover:text-[#ff4370] cursor-pointer transition-colors">
                        {c.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/5 text-[0.68rem] text-black/50 font-bold">
                        ({c.count})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Promo in Sidebar */}
              <div className="rounded-3xl bg-gradient-to-br from-[#ff4370] to-[#ffb703] p-7 text-white shadow-md">
                <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                  Special Gift
                </span>
                <h4 className="text-2xl font-black mt-3 mb-2 leading-tight">
                  15% Off Your Next Toy Order
                </h4>
                <p className="text-xs text-white/90 mb-5 leading-relaxed">
                  Use coupon code <strong className="font-mono bg-white text-[#ff4370] px-2 py-0.5 rounded">PLAY25</strong> at checkout.
                </p>
                <Link
                  href="/shop"
                  className="inline-block w-full text-center py-3 rounded-full bg-white text-[#ff4370] font-black text-xs uppercase tracking-wider hover:bg-black/90 hover:text-white transition-all shadow-md"
                >
                  Explore Store →
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
