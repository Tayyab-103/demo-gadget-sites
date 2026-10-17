"use client";

import React from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import Advantages from "@/components/Advantages";
import NewsletterBanner from "@/components/NewsletterBanner";
import BrandsBlock from "@/components/BrandsBlock";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <AboutUs />
        <DealOfTheWeek />
        <Advantages />
        <NewsletterBanner />
        <BrandsBlock />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
