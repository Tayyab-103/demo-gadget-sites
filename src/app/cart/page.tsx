"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import PageHeader from "@/components/PageHeader";
import { useCart } from "@/context/CartContext";
import productsData from "../../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, addToCart } = useCart();
  const [shippingMethod, setShippingMethod] = useState<"free" | "flat" | "local">("free");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const subtotal = parseFloat(getCartTotal());
  const shippingCost = shippingMethod === "flat" ? 10.0 : shippingMethod === "local" ? 20.0 : 0.0;
  const discountAmount = couponApplied ? subtotal * 0.15 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost).toFixed(2);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "PLAY25") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code. Try PLAY25 for 15% off!");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-white font-sans">
        <PageHeader
          eyebrow="Order Review"
          title="Your Shopping Cart"
          subtitle="Review your handpicked toys, games, and bundle packs before proceeding to our secure checkout."
          image="/img/hero-banner.jpg"
          currentLabel="Cart"
        />

        <section className="py-14 sm:py-16 md:py-20 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {cart.length === 0 ? (
              <div className="text-center py-20 bg-[#fffafb] rounded-3xl border border-black/5 p-8 max-w-xl mx-auto">
                <div className="text-6xl mb-4">🧸</div>
                <h3 className="text-2xl font-black text-[#1e293b] mb-2">
                  Your Cart Is Currently Empty
                </h3>
                <p className="text-sm text-black/60 mb-8">
                  Looks like you haven&apos;t added any toys or games yet. Discover our collection of fun for all ages!
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center py-4 px-8 rounded-full bg-[#ff4370] hover:bg-[#e63560] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                >
                  Start Shopping Toys →
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Side: Cart Items Table */}
                <div className="lg:col-span-8">
                  {/* Free shipping progress bar from Kiddex */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#fff5f8] border border-[#ff4370]/20">
                    <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#1e293b] mb-2">
                      {subtotal >= 89.99 ? (
                        <span className="text-emerald-600 flex items-center gap-1.5 font-black">
                          <span>🎉</span> You unlocked FREE Express UPS Shipping!
                        </span>
                      ) : (
                        <span>
                          Add <strong className="text-[#ff4370]">${(89.99 - subtotal).toFixed(2)}</strong> more to cart and get <strong>Free Express Shipping</strong>
                        </span>
                      )}
                      <span className="text-xs font-black text-[#ff4370]">
                        {Math.min(100, Math.round((subtotal / 89.99) * 100))}%
                      </span>
                    </div>
                    <div className="w-full bg-black/10 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#ff4370] h-full rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (subtotal / 89.99) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Cart Table Container */}
                  <div className="overflow-x-auto border border-black/8 rounded-3xl shadow-sm bg-white">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#f8fafc] border-b border-black/8 text-[0.68rem] uppercase font-black tracking-wider text-black/60">
                        <tr>
                          <th className="py-4 px-5">Product</th>
                          <th className="py-4 px-4">Price</th>
                          <th className="py-4 px-4">Quantity</th>
                          <th className="py-4 px-4">Total</th>
                          <th className="py-4 px-4 text-center">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/8">
                        {cart.map((item) => (
                          <tr key={item.Id} className="hover:bg-[#fffdfd] transition-colors">
                            {/* Product column */}
                            <td className="py-4 px-5 flex items-center gap-3.5">
                              <img
                                src={item.Image}
                                alt={item.Name}
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover bg-black/5 flex-shrink-0 border border-black/5"
                              />
                              <div>
                                <Link
                                  href={`/product/${item.Id}`}
                                  className="font-black text-[#1e293b] hover:text-[#ff4370] transition-colors text-xs sm:text-sm line-clamp-1"
                                >
                                  {item.Name}
                                </Link>
                                <span className="text-[0.68rem] text-black/50 block mt-0.5">
                                  {item.Label || "Standard Pack"}
                                </span>
                              </div>
                            </td>

                            {/* Unit price */}
                            <td className="py-4 px-4 font-bold text-black/80">
                              ${item.Price}
                            </td>

                            {/* Quantity spinner */}
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-1.5 bg-black/5 p-1 rounded-xl w-fit">
                                <button
                                  onClick={() => updateQuantity(item.Id, Math.max(1, item.Qty - 1))}
                                  disabled={item.Qty <= 1}
                                  className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25"
                                >
                                  -
                                </button>
                                <span className="px-2 font-black text-xs text-black">
                                  {item.Qty}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.Id, item.Qty + 1)}
                                  className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center cursor-pointer text-xs font-black"
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            {/* Total line item */}
                            <td className="py-4 px-4 font-black text-[#ff4370] text-sm sm:text-base">
                              ${item.Total}
                            </td>

                            {/* Remove button */}
                            <td className="py-4 px-4 text-center">
                              <button
                                onClick={() => removeFromCart(item.Id)}
                                className="text-black/30 hover:text-red-500 text-lg cursor-pointer transition-colors"
                                aria-label="Remove item"
                              >
                                &times;
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Coupon Box */}
                  <div className="mt-8 p-6 bg-[#f8fafc] rounded-3xl border border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <form onSubmit={handleApplyCoupon} className="flex items-center gap-2 w-full sm:w-auto flex-1">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Apply Coupon (e.g. PLAY25)"
                        className="px-4 py-3 bg-white border border-black/10 rounded-2xl text-xs sm:text-sm font-bold uppercase placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[#ff4370] flex-1 max-w-sm"
                      />
                      <button
                        type="submit"
                        className="py-3 px-6 rounded-2xl bg-[#1e293b] hover:bg-[#ff4370] text-white font-black text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
                      >
                        Apply Code
                      </button>
                    </form>

                    <Link
                      href="/shop"
                      className="text-xs font-bold uppercase tracking-wider text-black/60 hover:text-[#ff4370] transition-colors"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>

                  {couponError && (
                    <p className="text-xs font-bold text-red-500 mt-2 ml-2">{couponError}</p>
                  )}
                  {couponApplied && (
                    <p className="text-xs font-bold text-emerald-600 mt-2 ml-2">
                      ✓ Promo Code PLAY25 applied! (15% savings deducted)
                    </p>
                  )}
                </div>

                {/* Right Side: Order Summary */}
                <div className="lg:col-span-4 sticky top-28">
                  <div className="bg-[#fffdfd] p-6 sm:p-8 rounded-3xl border border-black/10 shadow-lg">
                    <h3 className="text-base font-black text-[#1e293b] uppercase tracking-wider pb-3 border-b border-black/8 mb-6">
                      Cart Summary
                    </h3>

                    <div className="flex justify-between items-center text-sm mb-4">
                      <span className="text-black/60 font-medium">Subtotal</span>
                      <span className="font-black text-[#1e293b] text-base">${subtotal.toFixed(2)}</span>
                    </div>

                    {couponApplied && (
                      <div className="flex justify-between items-center text-sm mb-4 text-emerald-600 font-bold">
                        <span>VIP Discount (15%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    {/* Shipping Options */}
                    <div className="py-4 border-y border-black/8 mb-5">
                      <span className="text-xs font-black uppercase text-black/60 tracking-wider block mb-3">
                        Shipping Method
                      </span>
                      <div className="space-y-2.5 text-xs font-bold">
                        <label className="flex items-center justify-between p-2.5 rounded-xl border border-black/8 bg-white cursor-pointer hover:border-[#ff4370]/40">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod === "free"}
                              onChange={() => setShippingMethod("free")}
                              className="accent-[#ff4370]"
                            />
                            <span>Free Tracked Shipping</span>
                          </div>
                          <span className="text-emerald-600">+$0.00</span>
                        </label>

                        <label className="flex items-center justify-between p-2.5 rounded-xl border border-black/8 bg-white cursor-pointer hover:border-[#ff4370]/40">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod === "flat"}
                              onChange={() => setShippingMethod("flat")}
                              className="accent-[#ff4370]"
                            />
                            <span>Flat Rate Ground</span>
                          </div>
                          <span className="text-black/70">+$10.00</span>
                        </label>

                        <label className="flex items-center justify-between p-2.5 rounded-xl border border-black/8 bg-white cursor-pointer hover:border-[#ff4370]/40">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod === "local"}
                              onChange={() => setShippingMethod("local")}
                              className="accent-[#ff4370]"
                            />
                            <span>Priority Rush Express</span>
                          </div>
                          <span className="text-black/70">+$20.00</span>
                        </label>
                      </div>
                    </div>

                    {/* Final Total */}
                    <div className="flex justify-between items-baseline mb-6">
                      <span className="text-sm font-black text-[#1e293b] uppercase tracking-wider">
                        Estimated Total:
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-[#ff4370]">
                        ${finalTotal}
                      </span>
                    </div>

                    {/* Checkout Button */}
                    <Link
                      href="/checkout"
                      className="w-full py-4 px-8 rounded-full bg-[#ff4370] hover:bg-[#e63560] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#ff4370]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <span>Proceed to Checkout</span>
                      <span>→</span>
                    </Link>

                    <div className="mt-4 text-center text-[0.68rem] text-black/50">
                      🔒 256-Bit SSL Encrypted Checkout Guarantee
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </section>

        {/* Related Toys Section from Kiddex */}
        <section className="py-14 sm:py-16 bg-[#fffafb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#ff4370]">Recommended</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1e293b] mt-1">
                You May Also Like
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {products.slice(0, 6).map((toy) => (
                <div key={toy.id} className="toy-card p-3 rounded-2xl bg-white border border-black/8 flex flex-col justify-between">
                  <Link href={`/product/${toy.id}`} className="aspect-square rounded-xl overflow-hidden mb-2.5 block bg-black/5">
                    <img src={toy.image} alt={toy.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[0.62rem] text-[#ff4370] font-bold block">{toy.category.split("&")[0]}</span>
                      <Link href={`/product/${toy.id}`} className="text-xs font-black text-[#1e293b] line-clamp-1 hover:text-[#ff4370]">
                        {toy.name}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/6">
                      <span className="text-xs font-black text-[#ff4370]">${toy.ssPrice}</span>
                      <button
                        onClick={() => addToCart(toy, 1, toy.ssPrice, "Single Unit")}
                        className="w-6 h-6 rounded-full bg-[#1e293b] text-white hover:bg-[#ff4370] text-xs flex items-center justify-center cursor-pointer font-bold"
                        title="Add to cart"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
