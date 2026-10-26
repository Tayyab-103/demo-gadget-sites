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
    notes: "",
  });

  const [shippingInsurance, setShippingInsurance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInsurance(e.target.checked);
  };

  const cartTotal = parseFloat(getCartTotal());
  const insurancePrice = shippingInsurance ? 1.0 : 0.0;
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          products: JSON.stringify(cart),
          "shipping-insurance": shippingInsurance ? "yes" : "no",
        }),
      });

      const data = await response.json();

      if (response.ok && data.order_id) {
        clearCart();
        router.push(`/confirm?order_id=${data.order_id}`);
      } else {
        setErrorMsg(
          data.error_message ||
            "There was an error processing your transaction. Please check your card details and try again."
        );
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

      {loading && (
        <div className="fixed inset-0 bg-surface/95 z-50 flex flex-col items-center justify-center p-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <h4 className="mt-6 text-base sm:text-lg font-display font-bold text-ink uppercase tracking-tight text-center">
            Processing Secure Stationery Acquisition...
          </h4>
          <p className="text-xs text-ink/60 text-center mt-1 font-display">
            Please do not refresh or close this window.
          </p>
        </div>
      )}

      <main className="bg-surface pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-primary/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-[0.68rem] font-display uppercase tracking-widest text-primary-deep mb-2">
              <span>✦</span>
              256-Bit SSL Encrypted Gateway
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
              Secure <span className="hl">Checkout</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-primary/25 shadow-sm">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl mb-6 text-xs md:text-sm font-semibold">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <h3 className="text-sm font-display font-bold uppercase tracking-wider border-b border-primary/20 pb-3 mb-5 text-ink">
                  1. Dispatch Address Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    name="shippingAddress1"
                    className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                    value={formData.shippingAddress1}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      City
                    </label>
                    <input
                      type="text"
                      name="shippingCity"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.shippingCity}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      State
                    </label>
                    <input
                      type="text"
                      name="shippingState"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      placeholder="e.g. TX"
                      value={formData.shippingState}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="shippingZip"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.shippingZip}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Credit Card Details */}
                <h3 className="text-sm font-display font-bold uppercase tracking-wider border-b border-primary/20 pb-3 mb-5 text-ink mt-8">
                  2. Payment Details
                </h3>

                <div className="flex flex-col mb-4">
                  <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                    Credit Card Number
                  </label>
                  <input
                    type="text"
                    name="cc_no"
                    maxLength={19}
                    className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-mono"
                    placeholder="•••• •••• •••• ••••"
                    value={formData.cc_no}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData((prev) => ({ ...prev, cc_no: val }));
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      Month
                    </label>
                    <select
                      name="cc_month"
                      className="block w-full px-2 sm:px-3 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.cc_month}
                      onChange={handleChange}
                      required
                    >
                      <option value="">MM</option>
                      {months.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      Year
                    </label>
                    <select
                      name="cc_year"
                      className="block w-full px-2 sm:px-3 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-display"
                      value={formData.cc_year}
                      onChange={handleChange}
                      required
                    >
                      <option value="">YYYY</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-display font-bold mb-1.5 text-[0.68rem] uppercase tracking-wider text-ink">
                      CVV
                    </label>
                    <input
                      type="password"
                      name="CVV"
                      maxLength={4}
                      className="block w-full px-3.5 py-3 text-xs sm:text-sm border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-ink bg-surface shadow-2xs font-mono"
                      placeholder="•••"
                      value={formData.CVV}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-primary text-ink hover:bg-secondary transition-all duration-200 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-md hover:scale-[1.01]"
                >
                  Complete Secure Acquisition →
                </button>
              </form>
            </div>

            {/* Cart Summary Column */}
            <div className="lg:col-span-5 sticky top-28 flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-primary/25 shadow-sm">
                <h3 className="text-sm font-display font-bold uppercase tracking-wider border-b border-primary/20 pb-3 mb-5 text-ink">
                  Order Summary
                </h3>

                {cart.map((item) => (
                  <div
                    className="flex justify-between items-center py-3.5 border-b border-dashed border-primary/20 last:border-b-0"
                    key={item.Id}
                  >
                    <div className="flex-1 pr-3">
                      <strong className="text-xs sm:text-sm font-display font-bold text-ink block truncate">
                        {item.Name}
                      </strong>
                      <span className="block text-[0.65rem] font-bold text-primary-deep uppercase tracking-wide mt-0.5">
                        {item.Label} (Qty: {item.Qty})
                      </span>
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base text-ink flex-shrink-0">
                      ${item.Total}
                    </span>
                  </div>
                ))}

                {/* Insurance Toggle */}
                <div
                  className="p-3.5 bg-surface border border-dashed border-primary/30 rounded-xl my-5 flex items-center gap-3 cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => setShippingInsurance((prev) => !prev)}
                >
                  <input
                    type="checkbox"
                    checked={shippingInsurance}
                    onChange={handleInsuranceChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 cursor-pointer accent-primary"
                  />
                  <div>
                    <strong className="text-xs font-display font-bold text-ink block">
                      Add Shipping Protection
                    </strong>
                    <span className="text-[0.65rem] text-ink/60">
                      Guarantees immediate replacement if damaged or delayed ($1.00)
                    </span>
                  </div>
                </div>

                {/* Subtotals & Grand Total */}
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm mt-3">
                  <div className="flex justify-between items-center text-ink/70">
                    <span>Goods Subtotal:</span>
                    <span className="font-display font-bold text-ink">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-ink/70">
                    <span>{siteConfig.shippingCarrier} Tracked Delivery:</span>
                    <span className="text-emerald-700 font-display font-bold">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between items-center text-ink/70">
                      <span>Transit Insurance:</span>
                      <span className="font-display font-bold text-ink">$1.00</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-primary/20 pt-3 mt-1 font-bold text-base">
                    <span className="text-ink uppercase tracking-wider text-xs font-display">
                      Grand Total:
                    </span>
                    <span className="text-ink font-display font-bold text-2xl">
                      ${grandTotal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Safety Disclosures */}
              <div className="py-5 px-6 text-center text-[0.68rem] text-ink/60 leading-relaxed bg-white border border-primary/25 rounded-2xl shadow-xs">
                <p className="font-display font-bold text-ink">
                  🔒 256-Bit SSL Encrypted Banking Gateway.
                </p>
                <p className="mt-0.5">
                  Your credit card statement will display: <strong>{siteConfig.descriptor}</strong>.
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
