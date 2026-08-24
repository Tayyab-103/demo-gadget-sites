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
        setErrorMsg(data.error_message || "There was an error processing your transaction. Please check your card details and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Unable to connect to the payment server. Please try again later.");
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
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF6B8B] rounded-full animate-spin" />
          <h4 className="mt-6 text-base font-black text-[#1E2330]">Processing Secure Order...</h4>
          <p className="text-xs text-gray-500">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="bg-[#FAF7F2] py-10 sm:py-16 lg:py-20 relative min-h-[80vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B] block mb-1">
              Encrypted Checkout
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2330] tracking-tight">
              Complete Your Baby <span className="text-[#FF6B8B]">Order</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xs">
              {errorMsg && (
                <div className="bg-[#FFF0F4] border border-[#FFCCD7] text-[#FF6B8B] p-4 rounded-2xl mb-6 text-xs font-bold">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <h3 className="text-sm font-black uppercase tracking-wider border-b border-gray-100 pb-3 mb-6 text-[#1E2330]">
                  1. Shipping Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">First Name</label>
                    <input type="text" name="firstName" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Last Name</label>
                    <input type="text" name="lastName" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Shipping Address</label>
                  <input type="text" name="shippingAddress1" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.shippingAddress1} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">City</label>
                    <input type="text" name="shippingCity" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.shippingCity} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">State</label>
                    <input type="text" name="shippingState" placeholder="e.g. TX" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.shippingState} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">ZIP Code</label>
                    <input type="text" name="shippingZip" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.shippingZip} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Phone</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Email</label>
                    <input type="email" name="email" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                {/* Payment Details */}
                <h3 className="text-sm font-black uppercase tracking-wider border-b border-gray-100 pb-3 mb-6 text-[#1E2330]">
                  2. Payment Information
                </h3>

                <div className="mb-4">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Credit Card Number</label>
                  <input
                    type="text"
                    name="cc_no"
                    maxLength={19}
                    placeholder="•••• •••• •••• ••••"
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]"
                    value={formData.cc_no}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData(prev => ({ ...prev, cc_no: val }));
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Month</label>
                    <select name="cc_month" className="w-full px-3 py-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2] cursor-pointer" value={formData.cc_month} onChange={handleChange} required>
                      <option value="">MM</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">Year</label>
                    <select name="cc_year" className="w-full px-3 py-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2] cursor-pointer" value={formData.cc_year} onChange={handleChange} required>
                      <option value="">YYYY</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">CVV</label>
                    <input type="password" name="CVV" maxLength={4} placeholder="•••" className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B8B] text-[#1E2330] bg-[#FAF7F2]" value={formData.CVV} onChange={handleChange} required />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF6B8B] hover:bg-[#FA5679] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all cursor-pointer mt-4"
                >
                  Confirm &amp; Place Order →
                </button>
              </form>
            </div>

            {/* Summary Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
                <h3 className="text-sm font-black uppercase tracking-wider border-b border-gray-100 pb-3 mb-4 text-[#1E2330]">
                  Order Summary
                </h3>

                {cart.map((item) => (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0" key={item.Id}>
                    <div className="pr-3">
                      <div className="text-xs sm:text-sm font-black text-[#1E2330]">{item.Name}</div>
                      <div className="text-[0.65rem] text-[#FF6B8B] font-bold uppercase mt-0.5">
                        {item.Label} &middot; Qty {item.Qty}
                      </div>
                    </div>
                    <div className="font-black text-sm text-[#1E2330]">
                      ${item.Total}
                    </div>
                  </div>
                ))}

                {/* Insurance Option */}
                <div
                  className="p-3.5 bg-[#FFF9EE] border border-[#FFE8B8] rounded-2xl my-4 flex items-center gap-3 cursor-pointer"
                  onClick={() => setShippingInsurance(prev => !prev)}
                >
                  <input
                    type="checkbox"
                    checked={shippingInsurance}
                    onChange={handleInsuranceChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 cursor-pointer accent-[#FF6B8B]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#1E2330]">Add Shipping Insurance</div>
                    <div className="text-[0.65rem] text-gray-500">Damage &amp; loss guarantee ($1.00)</div>
                  </div>
                </div>

                {/* Totals */}
                <div className="flex flex-col gap-2 text-xs pt-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between text-gray-600">
                      <span>Insurance:</span>
                      <span className="font-bold">$1.00</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-2 font-black text-base text-[#1E2330]">
                    <span>Total:</span>
                    <span className="text-xl text-[#FF6B8B]">${grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Safety Disclosures */}
              <div className="p-4 text-center text-[0.7rem] text-gray-500 bg-white border border-gray-100 rounded-2xl shadow-xs">
                🔒 256-Bit SSL Encrypted &middot; Descriptor: <strong>{siteConfig.descriptor}</strong>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
