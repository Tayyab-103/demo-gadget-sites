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
  const orderId = searchParams.get("orderId") || searchParams.get("order_id") || "CW-" + Math.floor(100000 + Math.random() * 900000);
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-[#16171A] rounded-2xl p-8 md:p-12 border border-white/10 text-center max-w-[580px] mx-auto shadow-2xl text-white">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full border-2 border-[#E5F2C9] text-[#E5F2C9] flex items-center justify-center text-3xl mx-auto mb-6 font-bold bg-[#E5F2C9]/10 shadow-sm">
        ✓
      </div>

      <h1 className="text-2xl md:text-3xl font-black uppercase text-white mb-3 tracking-tight">Order Confirmed</h1>
      <p className="text-white/70 text-xs md:text-sm mb-8 leading-relaxed">
        Thank you for equipping your kitchen with {siteConfig.brandName}. Your order is being prepared in our workshop.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#1A1C20] border border-white/10 rounded-xl p-5 text-left mb-8 text-xs leading-relaxed">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/40 uppercase tracking-wider text-[0.65rem] font-bold">Order Reference:</span>
          <strong className="text-[#E5F2C9] font-bold tracking-wider">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/40 uppercase tracking-wider text-[0.65rem] font-bold">Date:</span>
          <span className="text-white font-medium">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-white/40 uppercase tracking-wider text-[0.65rem] font-bold">Carrier:</span>
          <span className="text-white font-medium">{siteConfig.shippingCarrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/40 uppercase tracking-wider text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-white font-medium">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.7rem] text-white/50 leading-relaxed mb-8">
        A dispatch notification with your tracking link will be sent to your email. For assistance, reach out to <strong className="text-white/80">{siteConfig.email}</strong> or call <strong className="text-white/80">{siteConfig.phone}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold text-center bg-[#E5F2C9] text-[#0E0F11] hover:bg-white transition-all duration-300 py-3.5 px-8 rounded-xl text-xs uppercase tracking-widest shadow-md"
        >
          Return to Workshop Home &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#0E0F11] py-16 md:py-24 min-h-[85vh] flex items-center relative overflow-hidden border-t border-white/5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12 text-white">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">Loading Order Details...</h4>
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
