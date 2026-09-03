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
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/8 text-center max-w-[620px] mx-auto shadow-md">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl mx-auto mb-6 font-bold shadow-md">
        ✓
      </div>

      <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50 block mb-2">
        ORDER RECEIPT &amp; CONFIRMATION
      </span>
      <h1 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.04em] text-primary mb-3">
        ORDER CONFIRMED
      </h1>
      <p className="text-neutral-text/70 text-xs sm:text-sm mb-8 max-w-md mx-auto leading-relaxed">
        Thank you for choosing {siteConfig.brandName}. Your payment was processed successfully and your bespoke furnishings are being prepared.
      </p>

      {/* Order Info Table */}
      <div className="bg-neutral-bg border border-black/8 rounded-2xl p-6 text-left mb-8 text-xs sm:text-sm">
        <div className="flex justify-between items-center mb-3.5 pb-3 border-b border-black/5">
          <span className="text-neutral-text/50 uppercase tracking-widest text-[0.65rem] font-bold">Order Reference:</span>
          <strong className="text-primary font-bold">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3.5 pb-3 border-b border-black/5">
          <span className="text-neutral-text/50 uppercase tracking-widest text-[0.65rem] font-bold">Order Date:</span>
          <span className="text-neutral-text font-semibold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3.5 pb-3 border-b border-black/5">
          <span className="text-neutral-text/50 uppercase tracking-widest text-[0.65rem] font-bold">Carrier:</span>
          <span className="text-neutral-text font-semibold">{siteConfig.shippingCarrier} Tracked Delivery</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-text/50 uppercase tracking-widest text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-neutral-text font-semibold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.68rem] sm:text-xs text-neutral-text/50 leading-relaxed mb-8">
        A formal confirmation email with package dispatch details will be sent to your inbox.
        For concierge support, contact <strong className="text-primary font-semibold">{siteConfig.email}</strong> or call <strong className="text-primary font-semibold">{siteConfig.phone}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-3 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-neutral-text transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-[0.16em] shadow-md hover:shadow-lg"
        >
          <span>Return to Homepage</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-12 sm:py-16 md:py-24 min-h-[80vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 w-full">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="font-serif text-lg uppercase tracking-wider text-primary">Loading Order Details...</h4>
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

