"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white z-1000 border-l border-black/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5B6BF0] animate-pulse" />
            <h3 className="m-0 text-base sm:text-lg font-black text-[#111] tracking-tight uppercase">
              Your Equipment Cart
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-[#F4F4F6] flex items-center justify-center text-[#111] text-lg font-bold transition-colors cursor-pointer"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F4F4F6] text-[#111] flex items-center justify-center text-2xl mx-auto shadow-2xs">
                ⚡
              </div>
              <h4 className="text-base font-bold text-[#111]">Your cart is empty</h4>
              <p className="text-neutral-text/50 text-xs max-w-xs mx-auto leading-relaxed">
                Explore our catalog of certified electrical parts, diagnostic testers, and power cables.
              </p>
              <button
                className="inline-block font-bold text-center bg-[#111] hover:bg-[#5B6BF0] text-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-wider shadow-sm cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Equipment
              </button>
            </div>
          ) : (
            cart.map((item) => {
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
                <div className="flex gap-4 p-4 rounded-2xl bg-[#F9F9FB] border border-black/[0.04] items-center relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[68px] h-[68px] object-cover rounded-xl bg-white border border-black/5 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/img/products/product1.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-[#111] truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-[#5B6BF0] font-mono uppercase tracking-wider font-semibold mb-2">
                      {item.Label || "Standard Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-white px-1.5 py-1 rounded-lg border border-black/10 shadow-2xs">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#F4F4F6] text-xs font-bold text-[#111] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-[#111] font-mono font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#F4F4F6] text-xs font-bold text-[#111] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-[#111] font-mono">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="w-7 h-7 rounded-full hover:bg-black/5 text-neutral-text/40 hover:text-red-500 flex items-center justify-center cursor-pointer transition-colors self-start text-sm leading-none"
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-black/[0.06] bg-[#F8F9FB]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-[#111] uppercase text-xs tracking-wider">Estimated Total</span>
              <span className="font-black text-xl text-[#111] font-mono">
                ${getCartTotal()}
              </span>
            </div>

            <div className="space-y-2.5">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center font-bold text-center bg-[#111] hover:bg-[#5B6BF0] text-white transition-all duration-300 py-3.5 px-6 rounded-full text-xs uppercase tracking-wider w-full shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Proceed to Checkout →
              </Link>

              <button
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center justify-center font-bold text-center bg-white hover:bg-[#F4F4F6] border border-black/10 text-[#111] transition-all duration-300 py-3 px-6 rounded-full text-xs uppercase tracking-wider w-full cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-center gap-2 text-[0.68rem] text-neutral-text/50 font-medium">
              <span>🔒 256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
