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
    <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-14 border border-black/8 text-center max-w-[620px] mx-auto shadow-xl relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Success Badge */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4 sm:mb-6 font-black shadow-xs">
        ✓
      </div>

      <span className="eyebrow justify-center mb-2">Order Confirmed</span>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3 tracking-tight">
        Your Expedition is Ready
      </h2>
      <div className="mx-auto mt-2 mb-4 w-10 h-px bg-secondary" />
      <p className="text-neutral-text/65 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto">
        Thank you for choosing {siteConfig.brandName}. Your transaction has been securely processed and your dispatch is being prepared.
      </p>

      {/* Order Info Table */}
      <div className="bg-neutral-bg border border-black/6 rounded-2xl p-4 sm:p-6 text-left mb-6 sm:mb-8 text-xs sm:text-sm divide-y divide-black/5">
        <div className="flex justify-between items-center pb-3 gap-2">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.62rem] sm:text-[0.65rem] font-bold flex-shrink-0">Order ID:</span>
          <span className="text-primary font-black font-mono break-all text-right">{orderId}</span>
        </div>
        <div className="flex justify-between items-center py-3 gap-2">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.62rem] sm:text-[0.65rem] font-bold flex-shrink-0">Date:</span>
          <span className="text-neutral-text font-semibold text-right">{today}</span>
        </div>
        <div className="flex justify-between items-center py-3 gap-2">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.62rem] sm:text-[0.65rem] font-bold flex-shrink-0">Shipping Carrier:</span>
          <span className="text-neutral-text font-semibold text-right">{siteConfig.shippingCarrier} Delivery</span>
        </div>
        <div className="flex justify-between items-center pt-3 gap-2">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.62rem] sm:text-[0.65rem] font-bold flex-shrink-0">Estimated Delivery:</span>
          <span className="text-emerald-700 font-bold text-right">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.68rem] sm:text-[0.7rem] text-neutral-text/55 leading-relaxed mb-6 sm:mb-8">
        A dispatch notification with active tracking credentials has been sent to your inbox. For assistance, reach our concierge team at <strong className="text-primary break-all">{siteConfig.email}</strong> or <strong className="text-primary">{siteConfig.phone}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary transition-all duration-300 py-3.5 sm:py-4 px-7 sm:px-9 rounded-[3px] text-xs uppercase tracking-widest shadow-md cursor-pointer"
        >
          <span>Return To Homepage</span>
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
      <main className="bg-neutral-bg py-10 sm:py-16 md:py-24 min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Loading Confirmation...</h4>
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
