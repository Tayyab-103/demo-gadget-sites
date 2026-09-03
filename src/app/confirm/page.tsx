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
    <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-black/[0.04] text-center max-w-[620px] mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full bg-[#111] text-white flex items-center justify-center text-2xl mx-auto mb-6 font-bold shadow-md">
        ✓
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F4F6] border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-[#111] mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Payment Authorized
      </div>

      <h1 className="text-2xl sm:text-3xl font-black uppercase text-[#111] mb-3 tracking-tight">
        Order Confirmed!
      </h1>
      <p className="text-neutral-text/65 text-xs sm:text-sm mb-8 leading-relaxed">
        Thank you for choosing {siteConfig.brandName}. Your equipment package is being prepared for dispatch.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#F8F9FB] border border-black/[0.05] rounded-2xl p-6 text-left mb-8 text-xs sm:text-sm space-y-3">
        <div className="flex justify-between items-center pb-2 border-b border-black/[0.04]">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Order ID:</span>
          <strong className="text-[#111] font-mono font-bold">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-black/[0.04]">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Order Date:</span>
          <span className="text-[#111] font-medium">{today}</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-black/[0.04]">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Shipping Carrier:</span>
          <span className="text-[#111] font-medium">{siteConfig.shippingCarrier} Tracked Delivery</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-text/50 uppercase tracking-wider text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-[#111] font-bold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] sm:text-xs text-neutral-text/50 leading-relaxed mb-8">
        A confirmation dispatch email with your tracking number will be sent shortly.
        For technical assistance, contact <strong className="text-[#111]">{siteConfig.email}</strong> or call <strong className="text-[#111]">{siteConfig.phone}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2.5 font-bold text-center bg-[#111] hover:bg-[#5B6BF0] text-white transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
        >
          <span>Return to Homepage</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#E5E6EB] py-12 sm:py-20 min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111]">Loading Order Details...</h4>
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
