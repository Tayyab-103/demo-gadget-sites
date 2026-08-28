"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

function ConfirmContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id") || "N/A";
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 text-center max-w-[620px] mx-auto shadow-xl">
      {/* Success Badge */}
      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-3xl mx-auto mb-6 font-black bg-secondary/10 shadow-md">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-black uppercase text-primary mb-3 tracking-tight">Athlete Order Confirmed!</h2>
      <p className="text-neutral-text/75 text-sm md:text-base mb-8 leading-relaxed">
        Thank you for equipping with {siteConfig.brandName}. Your order has been submitted to our Austin, TX fulfillment lab.
      </p>

      {/* Order Info Table */}
      <div className="bg-neutral-bg border border-black/5 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.68rem] font-black">Order ID:</span>
          <strong className="text-primary font-black">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.68rem] font-black">Order Date:</span>
          <span className="text-neutral-text font-bold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.68rem] font-black">Carrier:</span>
          <span className="text-neutral-text font-bold">{siteConfig.shippingCarrier} Ground Express</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.68rem] font-black">Estimated Dispatch:</span>
          <span className="text-secondary font-black">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] md:text-xs text-neutral-text/60 leading-relaxed mb-8">
        A dispatch confirmation email containing your real-time tracking number will be sent to your registered inbox shortly.
        For apparel support, reach our team at <strong className="text-primary font-bold">{siteConfig.email}</strong> or call <strong className="text-primary font-bold">{siteConfig.phone}</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2.5 font-black text-center whitespace-nowrap bg-secondary text-secondary-text hover:brightness-110 transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg w-full sm:w-auto"
        >
          Explore More Apparel
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-neutral-bg border border-black/10 text-primary hover:bg-black/5 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full sm:w-auto"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-neutral-bg pt-28 pb-16 md:pt-32 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-black uppercase tracking-wider text-primary">Loading Order Confirmation...</h4>
            </div>
          }>
            <ConfirmContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
