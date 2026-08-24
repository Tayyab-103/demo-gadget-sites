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
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 text-center max-w-[560px] mx-auto shadow-xs">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full bg-[#FFEBF0] text-[#FF6B8B] flex items-center justify-center text-3xl mx-auto mb-5 font-bold shadow-xs">
        ✓
      </div>

      <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B] block mb-1">
        Order Confirmed
      </span>
      <h2 className="text-2xl sm:text-3xl font-black text-[#1E2330] mb-3 tracking-tight">
        Thank You for Your Order!
      </h2>
      <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed font-normal">
        Your baby treasures are being lovingly prepared for dispatch.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#FAF7F2] border border-[#E5DDD0]/70 rounded-2xl p-5 text-left mb-6 text-xs shadow-xs">
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-gray-500 font-bold uppercase text-[0.65rem] tracking-wider">Order ID:</span>
          <strong className="text-[#1E2330] font-black">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-gray-500 font-bold uppercase text-[0.65rem] tracking-wider">Date:</span>
          <span className="text-[#1E2330] font-semibold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-gray-500 font-bold uppercase text-[0.65rem] tracking-wider">Carrier:</span>
          <span className="text-[#1E2330] font-semibold">{siteConfig.shippingCarrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold uppercase text-[0.65rem] tracking-wider">Estimated Delivery:</span>
          <span className="text-emerald-700 font-bold">{siteConfig.shippingPeriod} Business Days (Free)</span>
        </div>
      </div>

      <p className="text-[0.72rem] text-gray-500 leading-relaxed mb-6 font-normal">
        A confirmation email containing your tracking information will be sent to your registered address shortly.
        For parent support, contact <strong className="text-[#1E2330]">{siteConfig.email}</strong> or call <strong className="text-[#1E2330]">{siteConfig.phone}</strong>.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 font-bold text-center bg-[#FF6B8B] hover:bg-[#FA5679] text-white transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider shadow-sm"
      >
        <span>Back to Storefront</span>
        <span>→</span>
      </Link>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF7F2] py-16 md:py-24 min-h-[85vh] flex items-center justify-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#1E2330]">Loading Order Details...</h4>
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
