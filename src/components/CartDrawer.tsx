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
        className={`fixed inset-0 bg-[#0A0F1D]/70 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-[#FFFFFF] text-[#0A0F1D] z-1000 border-l border-slate-200 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <span className="text-base">🛡️</span>
            <h3 className="m-0 text-sm font-bold text-[#0A0F1D] tracking-widest uppercase">
              WORKFORCE UNIFORM BAG
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-slate-400 hover:text-[#0A0F1D] leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
                Your uniform bag is currently empty.
              </p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-[#0A0F1D] text-white hover:bg-slate-800 transition-all py-3.5 px-7 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Uniform Catalog
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
                  className="flex gap-4 pb-5 mb-5 border-b border-slate-100 items-start relative group bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-cover rounded-xl bg-slate-900 flex-shrink-0 border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-[#0A0F1D] mb-0.5 truncate tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-slate-500 mb-3 uppercase tracking-wider font-semibold">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded bg-[#F8FAFC] text-[#0A0F1D] flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-[#0A0F1D] font-bold">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded bg-[#F8FAFC] text-[#0A0F1D] flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-bold text-[#0A0F1D]">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-slate-400 hover:text-red-500 cursor-pointer text-lg px-1 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-[#0A0F1D] uppercase text-xs tracking-wider">
                Subtotal
              </span>
              <span className="font-bold text-xl text-[#0A0F1D]">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider bg-[#0A0F1D] text-white hover:bg-slate-800 transition-all py-3.5 px-6 rounded-full text-xs w-full shadow-md mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Priority Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center text-xs tracking-wider bg-transparent border border-slate-300 text-[#0A0F1D] hover:bg-slate-50 transition-all py-3 px-6 rounded-full w-full cursor-pointer font-bold"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
