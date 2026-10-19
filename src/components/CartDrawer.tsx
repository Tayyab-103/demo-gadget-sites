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
    getCartTotal,
  } = useCart();

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
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-white text-black z-50 border-l border-black/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl font-sans ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-black/8 flex items-center justify-between bg-[#fff5f8]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4370]" />
            <h3 className="m-0 text-sm font-black text-[#1e293b] tracking-wider uppercase">
              Shopping Cart ({cart.length})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full bg-white text-black/60 hover:text-black flex items-center justify-center cursor-pointer shadow-xs text-xl border border-black/5"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {/* Free Shipping Tracker */}
        <div className="bg-[#fff9fa] px-6 py-3 border-b border-black/5 text-xs text-black/75">
          {Number(getCartTotal()) >= 89.99 ? (
            <span className="font-bold text-emerald-600 flex items-center gap-1.5">
              <span>🎉</span> Congratulations! You unlocked FREE UPS Express Shipping!
            </span>
          ) : (
            <div>
              <span>Add </span>
              <strong className="text-[#ff4370]">
                ${(89.99 - Number(getCartTotal())).toFixed(2)}
              </strong>
              <span> more to unlock </span>
              <strong className="text-[#1e293b]">Free Shipping</strong>!
              <div className="w-full bg-black/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-[#ff4370] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(100, (Number(getCartTotal()) / 89.99) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🧸</div>
              <p className="text-black/50 text-sm font-bold uppercase tracking-wider mb-6">
                Your toy cart is empty.
              </p>
              <button
                className="inline-block font-black text-center whitespace-nowrap bg-[#ff4370] hover:bg-[#e63560] text-white transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md"
                onClick={() => setIsCartOpen(false)}
              >
                Start Exploring Toys
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
                <div
                  className="flex gap-4 pb-5 mb-5 border-b border-black/8 items-start relative group"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 object-cover rounded-2xl bg-black/5 flex-shrink-0 border border-black/5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-xs sm:text-sm text-[#1e293b] mb-0.5 truncate tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.68rem] text-black/50 mb-2 font-bold">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-black/5 p-1 rounded-xl">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed shadow-xs"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-black font-black">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed shadow-xs"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-[#ff4370]">
                        ${item.Total}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-black/30 hover:text-red-500 cursor-pointer text-xl px-1 transition-colors self-start leading-none"
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-black/8 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-black/70 uppercase text-xs tracking-wider">
                Subtotal:
              </span>
              <span className="font-black text-2xl text-[#ff4370]">
                ${getCartTotal()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              <Link
                href="/cart"
                className="inline-flex items-center justify-center font-black uppercase tracking-wider bg-[#f8fafc] border border-black/10 hover:bg-black/5 text-[#1e293b] transition-all py-3.5 px-4 rounded-full text-xs text-center shadow-xs"
                onClick={() => setIsCartOpen(false)}
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center font-black uppercase tracking-wider bg-[#ff4370] hover:bg-[#e63560] text-white transition-all py-3.5 px-4 rounded-full text-xs text-center shadow-md hover:scale-[1.02]"
                onClick={() => setIsCartOpen(false)}
              >
                Checkout →
              </Link>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-xs font-bold text-black/50 hover:text-black py-2 transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
