"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedPromoBlocks from "@/components/FeaturedPromoBlocks";
import ProductGrid from "@/components/ProductGrid";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import TopSellingSection from "@/components/TopSellingSection";
import FeaturedStyleTwo from "@/components/FeaturedStyleTwo";
import CollectionTabs from "@/components/CollectionTabs";
import Testimonials from "@/components/Testimonials";
import MarqueeTicker from "@/components/MarqueeTicker";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 1. Kiddex Banner / Hero Section matching media_1792413693163.png */}
        <Hero />
{/* 10. Slide Text Marquee Ticker */}
        <MarqueeTicker />
        {/* 2. Category Section with 6 Whimsical Shapes */}
        <CategoriesSection />

        {/* 3. Featured 3-Block Section (Baby Toy's, Gaming, Accessories) */}
        <FeaturedPromoBlocks />

        {/* 4. Today's Popular Picks Section */}
        <ProductGrid />

        {/* 5. Deal of the Day with Live Countdown Timer */}
        <DealsOfTheDay />

        {/* 6. Shop Section: Kid Toy Collection for Summer + Top Selling Products */}
        <TopSellingSection />

        {/* 7. Featured Style Two: Puzzle for Kids $50, Buy One Get One, Puzzle for Kids $40 */}
        <FeaturedStyleTwo />

        {/* 8. Select from Collection with Tabs (3d Toys, Toys for Boys, Metal Toy, Teddy Doll, Stickers) */}
        <CollectionTabs />

        {/* 9. Parent Testimonials Section */}
        <Testimonials />

        

        {/* 11. Latest From Media (News Section) */}
        <NewsSection />
      </main>

      {/* 12. Soft Baby Pink Footer matching media_1792414735514.png */}
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
