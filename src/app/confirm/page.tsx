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
  const orderId = searchParams.get("orderId") || searchParams.get("order_id") || "CW-849201";
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/90 text-center max-w-[580px] mx-auto shadow-md text-[#121316]">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full border-2 border-[#E06830] text-[#121316] flex items-center justify-center text-3xl mx-auto mb-6 font-bold bg-[#E06830]/15 shadow-sm">
        ✓
      </div>

      <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#121316] mb-3 tracking-tight">Order Confirmed!</h1>
      <p className="text-[#121316]/70 text-xs md:text-sm mb-8 leading-relaxed">
        Thank you for equipping your kitchen with {siteConfig.brandName}. Your order is being prepared in our workshop.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#F8F6F2] border border-stone-200 rounded-2xl p-5 text-left mb-8 text-xs leading-relaxed">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#121316]/50 uppercase tracking-wider text-[0.65rem] font-bold">Order Reference:</span>
          <strong className="text-[#121316] font-bold tracking-wider">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#121316]/50 uppercase tracking-wider text-[0.65rem] font-bold">Date:</span>
          <span className="text-[#121316] font-medium">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#121316]/50 uppercase tracking-wider text-[0.65rem] font-bold">Carrier:</span>
          <span className="text-[#121316] font-medium">{siteConfig.shippingCarrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#121316]/50 uppercase tracking-wider text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-[#121316] font-medium">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.7rem] text-[#121316]/60 leading-relaxed mb-8">
        A dispatch notification with your tracking link will be sent to your email. For assistance, reach out to <strong className="text-[#121316]">{siteConfig.email}</strong> or call <strong className="text-[#121316]">{siteConfig.phone}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold text-center bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
        >
          <span>Return to Workshop Home</span>
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F6F2] py-16 md:py-24 min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12 text-[#121316]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#121316]/60">Loading Order Details...</h4>
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
