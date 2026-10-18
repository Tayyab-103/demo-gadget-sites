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
  const orderId = searchParams.get("order_id") || "TW-" + Math.floor(100000 + Math.random() * 900000);
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 text-center max-w-[600px] mx-auto shadow-sm">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full text-secondary bg-secondary/15 flex items-center justify-center text-2xl mx-auto mb-5 font-black">
        ✓
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-secondary">
          ORDER RECEIVED
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-neutral-text mb-3 tracking-tight font-sans">
        Order Confirmed!
      </h1>
      <p className="text-neutral-text/75 text-xs sm:text-sm mb-6 max-w-md mx-auto">
        Thank you for choosing {siteConfig.brandName}. Your garden tools are being inspected and packed, and you'll receive a tracking email once they ship.
      </p>

      {/* Order Info Table */}
      <div className="bg-neutral-bg border border-black/5 rounded-2xl p-5 sm:p-6 text-left mb-6 text-xs sm:text-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Order Reference:</span>
          <strong className="text-neutral-text font-bold font-mono">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Date:</span>
          <span className="text-neutral-text font-medium">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Shipping Carrier:</span>
          <span className="text-neutral-text font-medium">{siteConfig.shippingCarrier} Tracked</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-secondary font-bold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-xs text-neutral-text/60 leading-relaxed mb-6">
        A confirmation email with full receipt and tracking details will arrive shortly.
        For support or care questions, reach us at <strong className="text-neutral-text">{siteConfig.email}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 font-bold text-center bg-secondary text-white hover:bg-secondary-dark transition-all py-3.5 px-8 rounded-lg text-xs uppercase tracking-wider shadow-sm cursor-pointer"
        >
          Back to Home
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-16 md:py-24 min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-text">Loading Order Details...</h4>
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
