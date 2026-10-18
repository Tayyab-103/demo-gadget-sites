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
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center max-w-[620px] mx-auto shadow-2xl">
      {/* Success Badge */}
      <div className="w-[72px] h-[72px] rounded-full border-2 border-cyan-400 text-white flex items-center justify-center text-3xl mx-auto mb-6 font-bold bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/25">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-black uppercase text-[#0A0F1D] mb-3 tracking-tight">Order Confirmed!</h2>
      <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-normal">
        Thank you for shopping with {siteConfig.brandName}. Your family&apos;s order is being carefully packed and will be dispatched soon.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#F8FAFC] border border-blue-500/20 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Order ID:</span>
          <strong className="text-[#0A0F1D] font-black">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Order Date:</span>
          <span className="text-[#0A0F1D] font-semibold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Carrier:</span>
          <span className="text-[#0A0F1D] font-semibold">{siteConfig.shippingCarrier} Priority Air Tracked</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Estimated Dispatch:</span>
          <span className="text-blue-600 font-black">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] md:text-xs text-slate-500 leading-relaxed mb-8 font-normal">
        A dispatch confirmation email containing your UPS tracking number will be sent to your registered inbox shortly.
        For order assistance, contact our team at <strong className="text-[#0A0F1D] font-bold">{siteConfig.email}</strong> or call <strong className="text-[#0A0F1D] font-bold">{siteConfig.phone}</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2.5 font-extrabold text-center whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:shadow-xl w-full sm:w-auto hover:scale-105"
        >
          Continue Shopping
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-[#F8FAFC] border border-blue-500/30 text-[#0A0F1D] hover:bg-blue-50 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full sm:w-auto"
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
      <main className="bg-[#F8FAFC] pt-28 pb-16 md:pt-32 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">Loading Order Confirmation...</h4>
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
