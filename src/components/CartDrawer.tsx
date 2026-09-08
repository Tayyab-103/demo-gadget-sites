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

  const totalNum = parseFloat(getCartTotal());

  return (
    <>
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white z-1000 border-l border-purple-100 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-[#F3EEFF] to-[#EDE9FE]">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🛍️</span>
            <div>
              <h3 className="m-0 text-base font-black text-[#1E1040] tracking-tight">Your Baby Bag</h3>
              <span className="text-[0.62rem] text-[#7C3AED] font-bold uppercase tracking-wider">Lullaby Grove Treasures</span>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full bg-white border border-purple-100 flex items-center justify-center text-lg cursor-pointer text-gray-500 hover:text-[#7C3AED] shadow-sm transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        <div className="bg-purple-50 px-5 py-2.5 flex items-center justify-between text-[0.68rem] font-bold text-[#1E1040] border-b border-purple-100/60">
          <span>✨ Fast &amp; Free 3-5 Day Delivery</span>
          <span className="text-[#7C3AED] font-black uppercase tracking-wider">UNLOCKED</span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center text-4xl mb-4">
                🧸
              </div>
              <h4 className="text-base font-black text-[#1E1040] mb-1">Your bag is empty</h4>
              <p className="text-gray-500 text-xs max-w-xs mb-6">
                Discover our organic cotton bibs, natural beechwood rattles, and heirloom knit sets.
              </p>
              <button
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider shadow-md shadow-purple-300/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Baby Treasures
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
                <div className="flex gap-4 pb-4 mb-4 border-b border-purple-100/60 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 object-cover rounded-2xl bg-purple-50/40 border border-purple-100 flex-shrink-0 shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&q=80";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-xs sm:text-sm text-[#1E1040] mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-[#7C3AED] mb-2 uppercase tracking-wider font-bold">
                      {item.Label || "Standard Pack"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-purple-50 px-2 py-0.5 rounded-xl border border-purple-100">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded flex items-center justify-center cursor-pointer text-xs font-bold text-gray-700 hover:text-[#7C3AED] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          -
                        </button>
                        <span className="px-1.5 text-xs text-[#1E1040] font-black">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded flex items-center justify-center cursor-pointer text-xs font-bold text-gray-700 hover:text-[#7C3AED] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-[#1E1040]">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="text-gray-300 hover:text-[#7C3AED] cursor-pointer text-lg px-1 transition-colors leading-none"
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer Summary */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-purple-100 bg-gradient-to-r from-[#F3EEFF] to-[#EDE9FE]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-extrabold text-[#1E1040] uppercase text-xs tracking-wider">Subtotal</span>
              <span className="font-black text-2xl text-[#1E1040]">
                ${totalNum.toFixed(2)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-black text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-all py-3.5 px-6 rounded-full text-xs uppercase tracking-wider w-full shadow-md shadow-purple-300/30 mb-2.5 cursor-pointer hover:scale-[1.02] active:scale-95"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Secure Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center bg-white border border-purple-100 text-gray-700 hover:text-[#7C3AED] hover:border-purple-300 transition-all py-2.5 px-6 rounded-full text-xs uppercase tracking-wider w-full cursor-pointer"
            >
              Keep Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
