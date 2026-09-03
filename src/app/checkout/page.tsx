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
    return null; // Don't render checkout forms if redirecting
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
        <div className="fixed inset-0 bg-neutral-bg/95 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-black/10 border-t-primary rounded-full animate-spin" />
          <h4 className="mt-6 font-serif text-xl uppercase tracking-wider text-primary">Processing Secure Order...</h4>
          <p className="text-xs text-neutral-text/55 uppercase tracking-widest mt-1">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="bg-neutral-bg py-10 sm:py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
          
          {/* Header */}
          <div className="text-center sm:text-left mb-8 sm:mb-12">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50 block mb-2">
              SECURE ENCRYPTED CHECKOUT
            </span>
            <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-primary leading-tight">
              COMPLETE YOUR ORDER
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-black/8 shadow-md">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl mb-6 text-xs sm:text-sm">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* 1. Shipping Information */}
                <h2 className="font-serif font-normal text-lg sm:text-xl uppercase tracking-[0.04em] border-b border-black/5 pb-3.5 mb-6 text-primary">
                  1. Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-4 sm:mb-5">
                  <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Shipping Address</label>
                  <input
                    type="text"
                    name="shippingAddress1"
                    className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                    value={formData.shippingAddress1}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">City</label>
                    <input
                      type="text"
                      name="shippingCity"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      value={formData.shippingCity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">State</label>
                    <input
                      type="text"
                      name="shippingState"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      placeholder="e.g. CA"
                      value={formData.shippingState}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">ZIP / Postal Code</label>
                    <input
                      type="text"
                      name="shippingZip"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      value={formData.shippingZip}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* 2. Payment Details */}
                <h2 className="font-serif font-normal text-lg sm:text-xl uppercase tracking-[0.04em] border-b border-black/5 pb-3.5 mb-6 text-primary mt-10">
                  2. Payment Details
                </h2>

                <div className="flex flex-col mb-4 sm:mb-5">
                  <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Credit Card Number</label>
                  <input
                    type="text"
                    name="cc_no"
                    maxLength={19}
                    className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                    placeholder="•••• •••• •••• ••••"
                    value={formData.cc_no}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData(prev => ({ ...prev, cc_no: val }));
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Expiry Month</label>
                    <select
                      name="cc_month"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg cursor-pointer"
                      value={formData.cc_month}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Month</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Expiry Year</label>
                    <select
                      name="cc_year"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg cursor-pointer"
                      value={formData.cc_year}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">CVV / CVC</label>
                    <input
                      type="password"
                      name="CVV"
                      maxLength={4}
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      placeholder="•••"
                      value={formData.CVV}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-neutral-text transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer mt-4 text-xs uppercase tracking-[0.16em] shadow-md hover:shadow-lg"
                >
                  <span>Complete Secure Purchase</span>
                  <span>→</span>
                </button>
              </form>
            </div>

            {/* Cart Summary Column */}
            <div className="lg:col-span-5 sticky top-[100px] flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-md">
                <h2 className="font-serif font-normal text-lg sm:text-xl uppercase tracking-[0.04em] border-b border-black/5 pb-3.5 mb-6 text-primary">
                  Order Summary
                </h2>

                {/* Cart list items */}
                <div className="flex flex-col divide-y divide-black/5 mb-6">
                  {cart.map((item) => (
                    <div className="flex justify-between items-center py-3.5 first:pt-0 last:pb-0" key={item.Id}>
                      <div className="flex-1 pr-4">
                        <strong className="text-xs sm:text-sm font-bold text-primary block truncate">{item.Name}</strong>
                        <span className="block text-[0.65rem] font-semibold text-neutral-text/50 uppercase tracking-wide mt-0.5">
                          {item.Label} (Qty: {item.Qty})
                        </span>
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-primary">
                        ${item.Total}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Shipping Insurance Checkbox */}
                <div
                  className="p-4 bg-neutral-bg border border-black/10 rounded-2xl mb-6 flex items-center gap-3.5 cursor-pointer hover:border-black/20 transition-all"
                  onClick={() => setShippingInsurance(prev => !prev)}
                >
                  <input
                    type="checkbox"
                    checked={shippingInsurance}
                    onChange={handleInsuranceChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 cursor-pointer accent-primary"
                  />
                  <div>
                    <strong className="text-xs font-bold text-primary block">
                      Add Shipping Insurance
                    </strong>
                    <span className="text-[0.65rem] text-neutral-text/60">
                      Guarantees delivery coverage for damage or transit loss ($1.00)
                    </span>
                  </div>
                </div>

                {/* Subtotals & Grand Total */}
                <div className="flex flex-col gap-3 text-xs sm:text-sm border-t border-black/5 pt-4">
                  <div className="flex justify-between items-center text-neutral-text/70">
                    <span>Cart Subtotal:</span>
                    <span className="font-semibold text-primary">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-text/70">
                    <span>Shipping:</span>
                    <span className="text-green-700 font-bold tracking-wider uppercase text-xs">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between items-center text-neutral-text/70">
                      <span>Shipping Insurance:</span>
                      <span className="font-semibold text-primary">$1.00</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-black/10 pt-4 mt-2">
                    <span className="font-serif font-normal text-base sm:text-lg text-primary uppercase tracking-wide">Grand Total:</span>
                    <span className="font-serif font-bold text-xl sm:text-2xl text-primary">${grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Safety Disclosures */}
              <div className="p-5 text-center text-[0.68rem] text-neutral-text/50 leading-relaxed bg-white border border-black/8 rounded-2xl shadow-2xs">
                <p className="font-semibold text-primary">
                  🔒 256-Bit SSL Encrypted Connection
                </p>
                <p className="mt-1">
                  Card billing statement descriptor: <strong>{siteConfig.descriptor}</strong>
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

