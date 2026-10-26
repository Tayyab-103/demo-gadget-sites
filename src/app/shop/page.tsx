"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import HowItWorks from "@/components/HowItWorks";
import { siteConfig, trialDays } from "@/lib/brandIcon";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Shop all"
          title={<>The training collection</>}
          subtitle={`Compression baselayers, zip training hoodies and cushioned crew socks. Free ${siteConfig.shippingCarrier} shipping and ${trialDays}-day returns on every order.`}
          image="/img/herosection3.jpg"
          currentLabel="Shop"
        />
        <ProductGrid showHeading={false} />
        <HowItWorks />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
