"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const allProducts = productsData as unknown as Product[];

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    addToCart,
  } = useCart();

  const [couponApplied, setCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const displayCount = mounted ? cart.length : 0;
  const isCartEmpty = mounted ? cart.length === 0 : true;

  const rawTotal = parseFloat(getCartTotal() || "0.00");
  const discountAmount = couponApplied ? rawTotal * 0.15 : 0;
  const finalSubtotal = Math.max(0, rawTotal - discountAmount).toFixed(2);

  // Multi-tier gamified progress calculation
  // Tier 1: $50 for Free Shipping
  // Tier 2: $89 for Free Mystery Toy Gift Pack
  const tier1Target = 50.0;
  const tier2Target = 89.0;
  const progressPercent = Math.min(100, Math.round((rawTotal / tier2Target) * 100));

  const handleApplyCoupon = (code = couponCode) => {
    if (code.trim().toUpperCase() === "PLAY25") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid code. Try PLAY25 for 15% off!");
    }
  };

  // Find up to 2 items not currently in the cart to show as quick add-ons
  const cartIds = new Set(cart.map((item) => item.Id));
  const suggestedAddOns = allProducts.filter((p) => !cartIds.has(p.id)).slice(0, 2);

  const handleQuickAddSuggested = (product: Product) => {
    const firstBundle = product.bundles && product.bundles[0] ? product.bundles[0] : { quantity: 1, price: Number(product.ssPrice || 9.99) };
    const unitPrice = (firstBundle.price / firstBundle.quantity).toFixed(2);
    addToCart(product, 1, unitPrice, "Single Unit");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[460px] bg-white text-black z-50 border-l border-black/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl font-sans ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-black/8 flex items-center justify-between bg-gradient-to-r from-[#fff5f8] to-white">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#ff4370] animate-ping" />
            <h3 className="m-0 text-sm sm:text-base font-black text-[#1e293b] tracking-wider uppercase" suppressHydrationWarning>
              Toy Cart ({displayCount})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full bg-white text-black/60 hover:text-black hover:bg-black/5 flex items-center justify-center cursor-pointer shadow-xs text-xl border border-black/10 transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {/* Dual-Tier Gamified Rewards Tracker */}
        <div className="bg-[#fff9fa] px-6 py-4 border-b border-black/5 text-xs text-black/75">
          <div className="flex items-center justify-between font-black text-[0.7rem] uppercase tracking-wider mb-2">
            <span className="text-[#ff4370] flex items-center gap-1">
              <span>🎁</span> Rewards Progress
            </span>
            <span className="text-black/60">
              ${rawTotal.toFixed(2)} / ${tier2Target.toFixed(2)}
            </span>
          </div>

          {/* Progress Bar with 2 milestone markers */}
          <div className="relative w-full bg-black/10 h-2.5 rounded-full overflow-visible mb-2.5">
            <div
              className="bg-gradient-to-r from-[#ff4370] via-[#ff6b8b] to-[#ffb703] h-full rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${progressPercent}%` }}
            />
            {/* Milestone 1 Marker: $50 Free Shipping */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[0.6rem] shadow-xs ${
                rawTotal >= tier1Target ? "bg-emerald-500 text-white" : "bg-gray-300 text-gray-700"
              }`}
              style={{ left: `${(tier1Target / tier2Target) * 100}%` }}
              title="Tier 1: Free Shipping at $50"
            >
              ✓
            </div>
            {/* Milestone 2 Marker: $89 Free Mystery Toy */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[0.6rem] shadow-xs ${
                rawTotal >= tier2Target ? "bg-[#ffb703] text-[#1e293b]" : "bg-gray-300 text-gray-700"
              }`}
              style={{ left: "100%" }}
              title="Tier 2: Free Mystery Toy at $89"
            >
              🎁
            </div>
          </div>

          {/* Reward Status Text */}
          <div className="text-[0.72rem] leading-snug">
            {rawTotal >= tier2Target ? (
              <span className="font-extrabold text-emerald-700 flex items-center gap-1.5">
                <span>🏆</span> VIP Unlocked: Free Express Shipping + Mystery Toy Gift!
              </span>
            ) : rawTotal >= tier1Target ? (
              <div>
                <span className="font-extrabold text-emerald-600">✓ Free Shipping Unlocked! </span>
                <span className="text-black/60">
                  Add <strong className="text-[#ff4370]">${(tier2Target - rawTotal).toFixed(2)}</strong> more for a <strong>Free Mystery Toy Gift Pack!</strong>
                </span>
              </div>
            ) : (
              <div>
                <span>Add </span>
                <strong className="text-[#ff4370]">
                  ${(tier1Target - rawTotal).toFixed(2)}
                </strong>
                <span> more to unlock </span>
                <strong className="text-[#1e293b]">Free Express Shipping</strong>!
              </div>
            )}
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {isCartEmpty ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 animate-bounce">🧸</div>
              <h4 className="text-lg font-black text-[#1e293b] mb-1">
                Your Toy Basket is Empty
              </h4>
              <p className="text-black/50 text-xs sm:text-sm font-medium mb-6 max-w-xs mx-auto">
                Discover safe, durable, and delightful toys for all ages and start filling your cart!
              </p>
              <button
                className="inline-flex items-center justify-center font-black bg-[#ff4370] hover:bg-[#e63560] text-white transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md hover:scale-105"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Curated Toys →
              </button>
            </div>
          ) : (
            <>
              {cart.map((item) => {
                const bundles = item.bundles && item.bundles.length > 0 ? item.bundles : null;
                const tierIndex = bundles ? bundles.findIndex((b) => b.quantity === item.Qty) : -1;
                const canDecrease = bundles ? tierIndex > 0 : item.Qty > 1;
                const canIncrease = bundles
                  ? tierIndex > -1 && tierIndex < item.EnableMaxqty - 1
                  : true;

                const handleDecrease = () => {
                  if (bundles) {
                    if (tierIndex > 0) updateQuantity(item.Id, bundles[tierIndex - 1].quantity);
                  } else {
                    updateQuantity(item.Id, item.Qty - 1);
                  }
                };

                const handleIncrease = () => {
                  if (bundles) {
                    if (canIncrease) updateQuantity(item.Id, bundles[tierIndex + 1].quantity);
                  } else {
                    updateQuantity(item.Id, item.Qty + 1);
                  }
                };

                return (
                  <div
                    className="flex gap-4 p-4 rounded-2xl bg-[#fffafb] border border-black/6 relative group hover:border-[#ff4370]/30 transition-all shadow-xs"
                    key={item.Id}
                  >
                    <img
                      src={item.Image}
                      alt={item.Name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-white flex-shrink-0 border border-black/5 p-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-xs sm:text-sm text-[#1e293b] mb-0.5 truncate tracking-tight">
                        {item.Name}
                      </div>
                      <div className="text-[0.68rem] text-black/50 mb-2 font-bold flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-black/5 text-black/70">
                          {item.Label || "Single Unit"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3 mt-1">
                        {/* Stepper Controls */}
                        <div className="flex items-center gap-1 bg-white border border-black/10 p-1 rounded-xl shadow-xs">
                          <button
                            onClick={handleDecrease}
                            disabled={!canDecrease}
                            className="w-6 h-6 rounded-lg bg-black/5 hover:bg-black/10 text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs text-black font-black min-w-[20px] text-center">
                            {item.Qty}
                          </span>
                          <button
                            onClick={handleIncrease}
                            disabled={!canIncrease}
                            className="w-6 h-6 rounded-lg bg-black/5 hover:bg-black/10 text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-base font-black text-[#ff4370]">
                          ${item.Total}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.Id)}
                      className="text-black/30 hover:text-red-500 cursor-pointer text-xl p-1 transition-colors self-start leading-none"
                      aria-label="Remove item"
                      title="Remove item"
                    >
                      &times;
                    </button>
                  </div>
                );
              })}

              {/* Instant One-Click Coupon Applicator */}
              <div className="bg-[#fff9fa] rounded-2xl p-3.5 border border-[#ff4370]/20">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-black text-[#1e293b] flex items-center gap-1.5">
                    <span>🎟️</span> Coupon Code
                  </span>
                  {!couponApplied && (
                    <button
                      onClick={() => handleApplyCoupon("PLAY25")}
                      className="text-[0.68rem] font-bold text-[#ff4370] bg-[#ff4370]/10 px-2.5 py-0.5 rounded-full hover:bg-[#ff4370] hover:text-white transition-colors cursor-pointer"
                    >
                      Tap: Apply PLAY25 (15% OFF)
                    </button>
                  )}
                </div>

                {couponApplied ? (
                  <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl border border-emerald-200">
                    <span className="font-extrabold flex items-center gap-1">
                      <span>✓</span> Code PLAY25 Applied (-15%)
                    </span>
                    <button
                      onClick={() => setCouponApplied(false)}
                      className="text-[0.65rem] underline text-emerald-800 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleApplyCoupon();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-xl border border-black/10 text-xs uppercase font-bold focus:outline-hidden focus:border-[#ff4370]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-xl bg-[#1e293b] hover:bg-black text-white font-black text-xs uppercase cursor-pointer transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <div className="text-[0.65rem] text-red-500 font-bold mt-1.5">
                    {couponError}
                  </div>
                )}
              </div>

              {/* Quick Add Suggested Extras */}
              {suggestedAddOns.length > 0 && (
                <div className="pt-2">
                  <span className="text-[0.7rem] font-black uppercase tracking-wider text-black/50 block mb-2.5">
                    Frequently Added By Parents
                  </span>
                  <div className="space-y-2">
                    {suggestedAddOns.map((addon) => {
                      const firstPrice = addon.bundles && addon.bundles[0] ? addon.bundles[0].price : Number(addon.ssPrice || 9.99);
                      return (
                        <div
                          key={addon.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/8 hover:border-black/20 transition-all text-xs"
                        >
                          <div className="flex items-center gap-2.5 truncate mr-2">
                            <img
                              src={addon.image}
                              alt={addon.name}
                              className="w-10 h-10 object-contain rounded-lg bg-[#fffafb] border border-black/5 p-0.5"
                            />
                            <div className="truncate">
                              <div className="font-black text-[#1e293b] truncate text-xs">
                                {addon.name}
                              </div>
                              <div className="text-[#ff4370] font-black text-[0.7rem]">
                                ${Number(firstPrice).toFixed(2)}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleQuickAddSuggested(addon)}
                            className="px-3 py-1.5 rounded-full bg-[#1e293b] hover:bg-[#ff4370] text-white font-black text-[0.68rem] uppercase tracking-wider flex-shrink-0 cursor-pointer transition-colors"
                          >
                            + Add
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Actions */}
        {mounted && cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-black/8 bg-white shadow-lg">
            {/* Price Breakdown */}
            <div className="space-y-1.5 mb-4 text-xs">
              <div className="flex items-center justify-between text-black/60 font-bold">
                <span>Subtotal:</span>
                <span>${rawTotal.toFixed(2)}</span>
              </div>
              {couponApplied && (
                <div className="flex items-center justify-between text-emerald-600 font-bold">
                  <span>PLAY25 (15% Discount):</span>
                  <span>- ${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-black/60 font-bold">
                <span>Estimated Shipping:</span>
                <span className={rawTotal >= tier1Target ? "text-emerald-600 font-black" : "text-black/80 font-black"}>
                  {rawTotal >= tier1Target ? "FREE" : "$4.95"}
                </span>
              </div>
              <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                <span className="font-extrabold text-sm text-[#1e293b] uppercase tracking-wider">
                  Total:
                </span>
                <span className="font-black text-2xl text-[#ff4370]">
                  ${finalSubtotal}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <Link
                href="/cart"
                className="inline-flex items-center justify-center font-black uppercase tracking-wider bg-[#f8fafc] border border-black/10 hover:bg-black/5 text-[#1e293b] transition-all py-3.5 px-4 rounded-full text-xs text-center shadow-xs"
                onClick={() => setIsCartOpen(false)}
              >
                View Full Cart
              </Link>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center font-black uppercase tracking-wider bg-[#ff4370] hover:bg-[#e63560] text-white transition-all py-3.5 px-4 rounded-full text-xs text-center shadow-md hover:scale-[1.02]"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout →
              </Link>
            </div>

            {/* Trust Assurances */}
            <div className="flex items-center justify-center gap-4 text-[0.65rem] text-black/50 font-bold pt-2 border-t border-black/5">
              <span>🔒 256-Bit SSL</span>
              <span>•</span>
              <span>🚚 UPS Tracked</span>
              <span>•</span>
              <span>🛡️ 14-Day Returns</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}