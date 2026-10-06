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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white z-1000 border-l border-gray-200 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="m-0 text-lg font-black text-gray-900 tracking-tight uppercase">Shopping Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-gray-400 hover:text-emerald-600 leading-none transition-colors p-1"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-emerald-200 text-6xl mb-4">🛒</div>
              <p className="text-gray-500 text-sm">Your cart is currently empty.</p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-wider mt-6 shadow-sm cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-gray-100 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-contain rounded-xl bg-gray-50 border border-gray-200 flex-shrink-0 p-1"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100?text=Product";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-gray-900 mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-emerald-700 mb-3.5 uppercase tracking-wider font-semibold">
                      {item.Label || "Single Pack"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-lg border border-gray-200">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-gray-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:border-emerald-400 text-xs font-bold text-gray-900 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs text-gray-900 font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-gray-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:border-emerald-400 text-xs font-bold text-gray-900 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-emerald-600">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-gray-300 hover:text-emerald-600 cursor-pointer text-xl px-1.5 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-gray-700 uppercase text-xs tracking-widest">Subtotal</span>
              <span className="font-black text-xl text-emerald-600">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-extrabold text-center whitespace-nowrap bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300 py-4 px-8 rounded-xl text-xs uppercase tracking-wider w-full shadow-lg shadow-emerald-600/30 mb-3 cursor-pointer"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Checkout &rarr;
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border-2 border-gray-300 text-gray-700 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 py-3 px-8 rounded-xl text-xs uppercase tracking-wider w-full cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
