"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { useCart } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Checkout() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, [cart, router]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    shippingAddress1: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
    shippingCountry: "US",
    phone: "",
    email: "",
    cc_no: "",
    cc_month: "",
    cc_year: "",
    CVV: "",
    notes: ""
  });

  const [shippingInsurance, setShippingInsurance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInsurance(e.target.checked);
  };

  const cartTotal = parseFloat(getCartTotal());
  const insurancePrice = shippingInsurance ? 1.00 : 0.00;
  const grandTotal = (cartTotal + insurancePrice).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (formData.cc_no.replace(/\s/g, "").length < 13) {
      setErrorMsg("Please enter a valid credit card number.");
      setLoading(false);
      return;
    }

    if (formData.CVV.length < 3) {
      setErrorMsg("Please enter a valid CVV.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          products: JSON.stringify(cart),
          "shipping-insurance": shippingInsurance ? "yes" : "no"
        })
      });

      const data = await response.json();

      if (response.ok && data.order_id) {
        clearCart();
        router.push(`/confirm?order_id=${data.order_id}`);
      } else {
        setErrorMsg(data.error_message || "There was an error processing your transaction. Please verify card details and retry.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Unable to connect to the secure payment server. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return null;
  }

  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => String(currentYear + i));

  return (
    <>
      <Header />
      
      {loading && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-[#121316]">
          <div className="w-12 h-12 border-4 border-stone-200 border-t-[#E06830] rounded-full animate-spin" />
          <h4 className="mt-6 text-lg font-bold">Authorizing Secure Order...</h4>
          <p className="text-xs text-[#121316]/60 mt-1">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="bg-[#F8F6F2] text-[#121316] py-12 md:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-10 text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                256-BIT ENCRYPTED CHECKOUT
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#121316] tracking-tight">
              Complete Your <span className="text-[#E06830] italic font-serif">Kitchen Order</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl mb-6 text-xs md:text-sm">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* 1. Shipping Information */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121316] border-b border-stone-100 pb-3 mb-5 font-serif">
                    1. Shipping Destination
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">First Name</label>
                      <input type="text" name="firstName" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Last Name</label>
                      <input type="text" name="lastName" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Street Address</label>
                    <input type="text" name="shippingAddress1" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.shippingAddress1} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">City</label>
                      <input type="text" name="shippingCity" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.shippingCity} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">State</label>
                      <input type="text" name="shippingState" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" placeholder="e.g. TX" value={formData.shippingState} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">ZIP Code</label>
                      <input type="text" name="shippingZip" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.shippingZip} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Phone Number</label>
                      <input type="tel" name="phone" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Email Address</label>
                      <input type="email" name="email" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                {/* 2. Payment Details */}
                <div className="pt-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-5">
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121316] font-serif">
                      2. Payment Details
                    </h2>
                    <div className="flex items-center gap-2">
                      <img src="/img/mastercard.svg" alt="MasterCard" className="h-5 w-auto object-contain rounded" />
                      <img src="/img/visa.svg" alt="VISA" className="h-5 w-auto object-contain rounded" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Credit Card Number</label>
                    <input
                      type="text"
                      name="cc_no"
                      maxLength={19}
                      className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]"
                      placeholder="•••• •••• •••• ••••"
                      value={formData.cc_no}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                        setFormData(prev => ({ ...prev, cc_no: val }));
                      }}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Month</label>
                      <select name="cc_month" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.cc_month} onChange={handleChange} required>
                        <option value="">Month</option>
                        {months.map((m) => (
                          <option key={m} value={m} className="bg-white">{m}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">Year</label>
                      <select name="cc_year" className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" value={formData.cc_year} onChange={handleChange} required>
                        <option value="">Year</option>
                        {years.map((y) => (
                          <option key={y} value={y} className="bg-white">{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-[#121316]/70">CVV / CVC</label>
                      <input type="text" name="CVV" maxLength={4} className="w-full px-4 py-3 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-[#E06830] transition-all text-[#121316] bg-[#F8F6F2]" placeholder="•••" value={formData.CVV} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* Shipping Insurance Opt-in */}
                  <div className="mt-4 p-4 bg-[#F8F6F2] rounded-2xl border border-stone-200 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="insurance"
                      checked={shippingInsurance}
                      onChange={handleInsuranceChange}
                      className="mt-1 w-4 h-4 rounded text-[#121316] focus:ring-[#E06830] cursor-pointer"
                    />
                    <label htmlFor="insurance" className="text-xs text-[#121316]/80 cursor-pointer">
                      <strong className="text-[#121316] block font-bold">Add Priority Transit Insurance (+$1.00)</strong>
                      Covers lost, stolen, or damaged kitchen parcels with instant priority replacement.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md hover:shadow-lg mt-2 disabled:opacity-50"
                >
                  {loading ? "Authorizing Security Protocol..." : `Complete Order — $${grandTotal}`}
                </button>

              </form>
            </div>

            {/* Cart Summary Column */}
            <div className="lg:col-span-5 sticky top-[100px] flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121316] border-b border-stone-100 pb-3 mb-5 font-serif">
                  Order Summary
                </h3>

                <div className="flex flex-col divide-y divide-stone-100 mb-6">
                  {cart.map((item) => (
                    <div key={item.Id} className="py-3.5 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#121316]">{item.Name}</div>
                        <div className="text-[0.62rem] text-[#121316]/50 uppercase tracking-wider font-semibold">
                          {item.Label} &times; {item.Qty}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm font-black text-[#121316] font-serif">
                        ${item.Total}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 text-xs text-[#121316]/70 border-t border-stone-100 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-[#121316]">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tracked Shipping:</span>
                    <span className="text-emerald-800 font-bold uppercase tracking-wider">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between">
                      <span>Transit Insurance:</span>
                      <span className="font-semibold text-[#121316]">$1.00</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm sm:text-base font-bold text-[#121316] border-t border-stone-200 pt-3 mt-3">
                    <span className="font-serif uppercase tracking-wider">Total:</span>
                    <span className="font-serif text-[#121316]">${grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Security & Descriptor Badge */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/90 text-center text-xs text-[#121316]/60 space-y-1 shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-[#121316] font-bold">
                  <span className="text-[#E06830]">🔒</span> 256-Bit SSL Encrypted Protocol
                </div>
                <div>Card statement will appear as: <strong className="text-[#121316] font-bold">{siteConfig.descriptor}</strong></div>
              </div>
            </div>

          </div>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
