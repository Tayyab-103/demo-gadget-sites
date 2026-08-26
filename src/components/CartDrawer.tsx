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
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-[#16171A] text-white z-1000 border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="m-0 text-base font-black text-white tracking-tight uppercase">Workshop Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-white/50 hover:text-white leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-white/20 text-5xl mb-4">🛒</div>
              <p className="text-white/50 text-xs sm:text-sm">Your culinary cart is empty.</p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-[#E5F2C9] text-[#0E0F11] hover:bg-white transition-all duration-300 py-3 px-6 rounded-lg text-xs uppercase tracking-widest mt-6 shadow-sm"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Workshop Tools
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-white/10 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 object-contain rounded-xl bg-[#23252B] p-1.5 border border-white/10 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100?text=Product";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-white mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-white/50 mb-3 uppercase tracking-wider font-semibold">
                      {item.Label || "Single Tool"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-[#23252B] p-1 rounded-lg border border-white/10">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-[#16171A] border border-white/10 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-white/10 text-xs font-bold text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-white font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-[#16171A] border border-white/10 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-white/10 text-xs font-bold text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-xs sm:text-sm font-black text-[#E5F2C9]">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-white/30 hover:text-red-400 cursor-pointer text-lg px-1 transition-colors self-start leading-none"
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#1A1C20]">
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-white uppercase text-xs tracking-widest">Subtotal</span>
              <span className="font-black text-lg text-[#E5F2C9]">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-bold text-center bg-[#E5F2C9] text-[#0E0F11] hover:bg-white transition-all duration-300 py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest w-full shadow-md mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Checkout &rarr;
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center bg-transparent border border-white/15 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-6 rounded-xl text-xs uppercase tracking-widest w-full"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
