"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  const subtotal = parseFloat(getCartTotal());
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingFee = subtotal >= 50 || subtotal === 0 ? 0 : 9.95;
  const total = Math.max(0, subtotal - discountAmount + shippingFee).toFixed(2);

  const applyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === "MEADOW15" || code === "WELCOME15") {
      setDiscountPercent(15);
      setPromoMessage("15% Promo discount applied!");
    } else if (code === "SALE10") {
      setDiscountPercent(10);
      setPromoMessage("10% Promo discount applied!");
    } else if (code) {
      setDiscountPercent(0);
      setPromoMessage("Invalid promo code. Try MEADOW15");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FAF9F7]">
        
        {/* Inner Top Header Banner */}
        <section className="py-12 md:py-16 border-b border-black/5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary mb-3">
                  Shopping Bag
                </h1>
                <nav aria-label="Breadcrumb" className="breadcrumbs-list">
                  <Link href="/">Home</Link>
                  <span className="breadcrumbs-separator" />
                  <span className="text-primary font-bold">Cart</span>
                </nav>
              </div>

              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-sm bg-[#EAE6E1]">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80"
                  alt="Modern Meadow Cart"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cart Page Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {cart.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-black/5 shadow-sm max-w-2xl mx-auto p-12">
              <span className="font-heading text-6xl text-primary/20 block mb-4">Empty</span>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-primary mb-3">
                Your Shopping Bag is Empty
              </h2>
              <p className="text-neutral-text/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Explore our curated collection of contemporary dresses, knitwear, skirts, and tailored blouses.
              </p>
              <Link href="/shop" className="fashion-button">
                Discover Catalog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Cart Table & Promo Code (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Cart Items Table */}
                <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
                  <div className="divide-y divide-black/5">
                    {cart.map((item) => (
                      <article key={`${item.Id}-${item.size || "M"}`} className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group">
                        
                        {/* Thumbnail */}
                        <Link href={`/product/${item.Id}`} className="w-24 h-32 rounded-xl overflow-hidden bg-neutral-bg flex-shrink-0">
                          <img
                            src={item.Image}
                            alt={item.Name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </Link>

                        {/* Title & Size */}
                        <div className="flex-1 text-center sm:text-left min-w-0">
                          <h2 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide text-primary line-clamp-1 mb-1">
                            <Link href={`/product/${item.Id}`} className="hover:text-secondary transition-colors">
                              {item.Name}
                            </Link>
                          </h2>
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-neutral-text/50 bg-[#FAF9F7] px-2.5 py-0.5 rounded border border-black/5">
                              Size: {item.size || "M"}
                            </span>
                            {item.Label && (
                              <span className="text-xs text-secondary font-semibold">
                                {item.Label}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-neutral-text/60">
                            Unit Price: <span className="font-bold text-primary">${item.Price}</span>
                            {item.oldPrice && (
                              <span className="line-through text-neutral-text/40 ml-2">${item.oldPrice}</span>
                            )}
                          </div>
                        </div>

                        {/* Stepper Controls */}
                        <div className="flex items-center gap-6">
                          <div className="count-stepper">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.Id, item.Qty - 1)}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input type="text" readOnly value={item.Qty} />
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.Id, item.Qty + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right min-w-[70px]">
                            <span className="font-heading text-base sm:text-lg font-bold text-primary">
                              ${item.Total}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.Id)}
                            className="text-neutral-text/30 hover:text-red-500 text-xl p-2 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            &times;
                          </button>
                        </div>

                      </article>
                    ))}
                  </div>
                </div>

                {/* Promo Code Section */}
                <section className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
                  <div className="mb-4">
                    <h3 className="font-heading text-base font-bold uppercase tracking-wider text-primary">
                      Have a Promo Code?
                    </h3>
                    <p className="text-xs text-neutral-text/60 mt-1">
                      Enter your VIP subscriber code (use <strong className="text-secondary">MEADOW15</strong> for 15% off).
                    </p>
                  </div>

                  <form onSubmit={applyPromoCode} className="flex gap-3 max-w-md">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 bg-[#FAF9F7] border border-black/15 rounded-full px-5 py-3 text-xs uppercase tracking-wider text-primary focus:outline-none focus:border-secondary"
                    />
                    <button
                      type="submit"
                      className="fashion-button text-xs py-3 px-6 cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>

                  {promoMessage && (
                    <p className={`text-xs mt-3 font-semibold ${discountPercent > 0 ? "text-green-600" : "text-red-500"}`}>
                      {promoMessage}
                    </p>
                  )}
                </section>

              </div>

              {/* Right Column: Order Summary (4 cols) */}
              <aside className="lg:col-span-4 bg-white rounded-3xl border border-black/5 p-8 shadow-sm lg:sticky lg:top-28">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-primary pb-4 border-b border-black/10 mb-6">
                  Your Order
                </h3>

                <ul className="space-y-4 text-xs tracking-wide pb-6 border-b border-black/10">
                  <li className="flex justify-between items-center text-neutral-text/70">
                    <span>Order price</span>
                    <span className="font-bold text-primary text-sm">${subtotal.toFixed(2)}</span>
                  </li>

                  {discountPercent > 0 && (
                    <li className="flex justify-between items-center text-green-600">
                      <span>Promo discount ({discountPercent}%)</span>
                      <span className="font-bold">- ${discountAmount.toFixed(2)}</span>
                    </li>
                  )}

                  <li className="flex justify-between items-center text-neutral-text/70">
                    <div>
                      <span>Delivery</span>
                      <span className="text-[0.65rem] text-neutral-text/40 block">
                        {subtotal >= 50 ? "Complimentary delivery (3-5 days)" : "Standard Shipping"}
                      </span>
                    </div>
                    <span className="font-bold text-primary">
                      {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </li>
                </ul>

                <div className="flex justify-between items-baseline py-6">
                  <span className="font-heading text-base font-bold uppercase text-primary">Total</span>
                  <span className="font-heading text-2xl font-extrabold text-primary">${total}</span>
                </div>

                <Link
                  href="/checkout"
                  className="fashion-button w-full text-center py-4"
                >
                  Checkout
                </Link>

                <div className="mt-6 text-center">
                  <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-neutral-text/50 hover:text-primary transition-colors">
                    ← Continue Shopping
                  </Link>
                </div>
              </aside>

            </div>
          )}
        </div>

      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
