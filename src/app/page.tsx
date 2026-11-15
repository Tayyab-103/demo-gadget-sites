"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicePerks from "@/components/ServicePerks";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedPromoBlocks from "@/components/FeaturedPromoBlocks";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import FeaturedStyleTwo from "@/components/FeaturedStyleTwo";
import CollectionTabs from "@/components/CollectionTabs";
import AboutUs from "@/components/AboutUs";
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

        {/* 2. Slide Text Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. Service Perks & Trust Guarantees (Matching uploaded design: Free Shipping, Support 24/7, Money Return) */}
        <ServicePerks />

        {/* 4. Category Section with 6 Whimsical Shapes (Shop by Category) */}
        <CategoriesSection />

        {/* 5. Featured 3-Block Section (Baby Toy's, Gaming, Accessories) */}
        {/* <FeaturedPromoBlocks /> */}

        {/* 6. Deal of the Day with Live Countdown Timer */}
        <DealsOfTheDay />

        {/* 7. Featured Style Two: Puzzle for Kids $50, Buy One Get One, Puzzle for Kids $40 */}
        <FeaturedStyleTwo />

        {/* 8. Select from Collection with Tabs */}
        <CollectionTabs />

        {/* 9. About Us Section (Story, Mission & Quality Guarantees) */}
        <AboutUs />

        {/* 10. Parent Testimonials Section (What Parents Say About Us) */}
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