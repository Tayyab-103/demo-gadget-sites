"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CollectionBlock from "@/components/CollectionBlock";
import ProductGrid from "@/components/ProductGrid";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import Advantages from "@/components/Advantages";
import BestSellers from "@/components/BestSellers";
import BlogSection from "@/components/BlogSection";
import NewsletterBanner from "@/components/NewsletterBanner";
import BrandsBlock from "@/components/BrandsBlock";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-grow">
        {/* First Screen Hero Slider */}
        <Hero />

        {/* Collection Blocks & Counters */}
        <CollectionBlock />

        {/* Featured Products with Category Tabs */}
        <ProductGrid />

        {/* Deal of the Week with Live Countdown Timer */}
        <DealOfTheWeek />

        {/* Advantage Badges */}
        <Advantages />

        {/* Best Sellers Carousel */}
        <BestSellers />

        {/* Fashion Journal / Blog */}
        <BlogSection />

        {/* Newsletter Callout */}
        <NewsletterBanner />

        {/* Brand & Atelier Partners */}
        <BrandsBlock />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
