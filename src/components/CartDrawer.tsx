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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white text-[#121316] z-1000 border-l border-stone-200 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-[#F8F6F2]">
          <h3 className="m-0 text-base font-bold text-[#121316] tracking-tight uppercase font-serif">Workshop Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-[#121316]/50 hover:text-[#121316] leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-[#121316]/30 text-5xl mb-4">🛒</div>
              <p className="text-[#121316]/60 text-xs sm:text-sm">Your culinary cart is empty.</p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-3.5 px-7 rounded-full text-xs uppercase tracking-widest mt-6 shadow-sm"
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-stone-100 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 object-contain rounded-xl bg-[#F8F6F2] p-1.5 border border-stone-200 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/hero-kitchen.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-[#121316] mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-[#121316]/50 mb-3 uppercase tracking-wider font-semibold">
                      {item.Label || "Single Tool"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-[#F8F6F2] p-1 rounded-lg border border-stone-200">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-stone-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-stone-100 text-xs font-bold text-[#121316] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-[#121316] font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-stone-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-stone-100 text-xs font-bold text-[#121316] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-xs sm:text-sm font-black text-[#121316] font-serif">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-[#121316]/30 hover:text-red-500 cursor-pointer text-lg px-1 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-stone-100 bg-[#F8F6F2]">
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-[#121316] uppercase text-xs tracking-widest">Subtotal</span>
              <span className="font-black text-xl text-[#121316] font-serif">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-bold text-center bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-4 px-6 rounded-full text-xs uppercase tracking-widest w-full shadow-md mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              <span>Proceed to Checkout</span>
              <span className="ml-2">→</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center bg-transparent border border-stone-300 text-[#121316]/70 hover:text-[#121316] hover:bg-white transition-all duration-300 py-3 px-6 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
