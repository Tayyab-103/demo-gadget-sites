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

  // Redirect to homepage if cart is empty on mount
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

    // Minimal form validations
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
        // Success
        clearCart();
        router.push(`/confirm?order_id=${data.order_id}`);
      } else {
        // Error from CRM gateway
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

  // Generate CC Expiry Months & Years options
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => String(currentYear + i));

  return (
    <>
      <Header />
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-emerald-600 rounded-full animate-spin" />
          <h4 className="mt-6 text-lg font-bold text-gray-900">Processing Secure Order...</h4>
          <p className="text-xs text-gray-500">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="bg-[#f8fafc] py-12 md:py-16 relative overflow-hidden font-sans border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Encrypted 256-Bit SSL</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase text-gray-900 mb-8 tracking-tight">
            Checkout <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Securely</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Form Column (Cols 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl mb-6 text-xs md:text-sm">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Billing/Shipping Address */}
                <h3 className="text-sm font-black uppercase tracking-wider border-b border-gray-100 pb-3 mb-5 text-gray-900">
                  1. Shipping Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">First Name</label>
                    <input type="text" name="firstName" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Last Name</label>
                    <input type="text" name="lastName" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Shipping Address</label>
                  <input type="text" name="shippingAddress1" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.shippingAddress1} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">City</label>
                    <input type="text" name="shippingCity" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.shippingCity} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">State</label>
                    <input type="text" name="shippingState" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" placeholder="e.g. TX" value={formData.shippingState} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">ZIP Code</label>
                    <input type="text" name="shippingZip" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.shippingZip} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Phone Number</label>
                    <input type="tel" name="phone" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Email Address</label>
                    <input type="email" name="email" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                {/* Credit Card Details */}
                <h3 className="text-sm font-black uppercase tracking-wider border-b border-gray-100 pb-3 mb-5 text-gray-900 mt-8">
                  2. Payment Details
                </h3>

                <div className="flex flex-col mb-4">
                  <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Credit Card Number</label>
                  <input
                    type="text"
                    name="cc_no"
                    maxLength={19}
                    className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white"
                    placeholder="•••• •••• •••• ••••"
                    value={formData.cc_no}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData(prev => ({ ...prev, cc_no: val }));
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Expiry Month</label>
                    <select name="cc_month" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.cc_month} onChange={handleChange} required>
                      <option value="">Month</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">Expiry Year</label>
                    <select name="cc_year" className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" value={formData.cc_year} onChange={handleChange} required>
                      <option value="">Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-gray-600">CVV / CVC</label>
                    <input type="password" name="CVV" maxLength={4} className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-gray-900 bg-white" placeholder="•••" value={formData.CVV} onChange={handleChange} required />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white transition-all duration-200 py-4 px-8 rounded-xl w-full cursor-pointer mt-6 text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/20"
                >
                  Complete Secure Order &rarr;
                </button>
              </form>
            </div>

            {/* Cart Summary Column (Cols 5) */}
            <div className="lg:col-span-5 sticky top-[100px] flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider border-b border-gray-100 pb-3 mb-5 text-gray-900">
                  Order Summary
                </h3>

                {/* Cart list items */}
                {cart.map((item) => (
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-gray-100 last:border-b-0" key={item.Id}>
                    <div className="flex-1 pr-4">
                      <strong className="text-xs sm:text-sm font-bold text-gray-900">{item.Name}</strong>
                      <span className="block text-[0.65rem] font-semibold text-gray-400 uppercase tracking-wide mt-0.5">
                        {item.Label} (Qty: {item.Qty})
                      </span>
                    </div>
                    <span className="font-extrabold text-sm text-gray-900">
                      ${item.Total}
                    </span>
                  </div>
                ))}

                {/* Shipping Insurance Checkbox */}
                <div
                  className="p-3.5 bg-emerald-50/50 border border-dashed border-emerald-200 rounded-xl my-4 flex items-center gap-3 cursor-pointer hover:bg-emerald-50 transition-colors duration-200"
                  onClick={() => setShippingInsurance(prev => !prev)}
                >
                  <input
                    type="checkbox"
                    checked={shippingInsurance}
                    onChange={handleInsuranceChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 cursor-pointer accent-emerald-600"
                  />
                  <div>
                    <strong className="text-xs font-bold text-gray-900 block">
                      Add Shipping Protection (+$1.00)
                    </strong>
                    <span className="text-[0.65rem] text-gray-500">
                      Guarantees immediate replacement for loss or damage
                    </span>
                  </div>
                </div>

                {/* Subtotals & Grand Total */}
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm mt-4">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Cart Subtotal:</span>
                    <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Shipping:</span>
                    <span className="text-emerald-700 font-extrabold tracking-wider">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Shipping Protection:</span>
                      <span className="font-semibold text-gray-900">$1.00</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-1 font-bold text-base">
                    <span className="text-gray-900 uppercase tracking-wider text-xs">Total:</span>
                    <span className="text-emerald-600 font-black text-xl">${grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Safety Disclosures */}
              <div className="py-4 px-5 text-center text-[0.68rem] text-gray-500 leading-relaxed bg-white border border-gray-200 rounded-2xl shadow-xs">
                <p className="font-semibold text-gray-700">
                  🔒 256-Bit SSL Encrypted &amp; Secure Checkout
                </p>
                <p className="mt-1">
                  Descriptor: <strong className="text-gray-900">{siteConfig.descriptor}</strong> &bull; Free US Returns
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
