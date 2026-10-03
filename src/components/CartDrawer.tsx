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
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary text-secondary flex items-center justify-center text-sm font-black border border-secondary/40">
              ⚡
            </div>
            <h3 className="m-0 text-base font-black text-primary tracking-tight uppercase">Your Hardware Cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-xl cursor-pointer text-gray-400 hover:text-primary leading-none transition-colors"
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-base font-black text-primary mb-1 uppercase">Your cart is empty</h4>
              <p className="text-gray-500 text-xs">Explore our cutting-edge electronic devices and GaN chargers.</p>
              <button
                className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-primary text-secondary hover:bg-slate-800 transition-all duration-300 py-3 px-7 rounded-xl text-xs uppercase tracking-widest mt-6 shadow-sm cursor-pointer border border-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Shop Electronics
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
                    className="w-[70px] h-[70px] object-cover rounded-xl bg-gray-50 border border-gray-200 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/img/products/charger.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-primary mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-secondary mb-3 uppercase tracking-wider font-bold">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-lg border border-gray-200">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-gray-200 w-6 h-6 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 text-xs font-bold text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-primary font-black">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-gray-200 w-6 h-6 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 text-xs font-bold text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-primary">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-gray-300 hover:text-red-600 cursor-pointer text-xl px-1.5 transition-colors self-start leading-none"
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
          <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between mb-5">
              <span className="font-black text-primary uppercase text-xs tracking-wider">Subtotal</span>
              <span className="font-black text-xl text-primary">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-primary text-secondary hover:bg-slate-800 transition-all duration-300 py-3.5 px-8 rounded-xl text-xs uppercase tracking-widest w-full shadow-md hover:shadow-lg mb-2.5 border border-primary"
              onClick={() => setIsCartOpen(false)}
            >
              <span>Proceed to Checkout</span>
              <span>→</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border border-gray-300 text-primary hover:bg-gray-100 transition-all duration-300 py-3 px-8 rounded-xl text-xs uppercase tracking-wider w-full cursor-pointer mb-3"
            >
              Continue Browsing
            </button>

            {/* Payment Trust Badges */}
            <div className="flex flex-col items-center gap-1.5 pt-2.5 border-t border-gray-200">
              <div className="flex items-center gap-1.5 text-[0.68rem] text-gray-500 font-semibold">
                <span className="text-secondary">🔒</span>
                <span>256-Bit SSL Encrypted &amp; PCI-DSS Level 1</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/img/mastercard.svg"
                  alt="MasterCard"
                  className="h-5 w-auto object-contain rounded"
                />
                <img
                  src="/img/visa.svg"
                  alt="VISA"
                  className="h-5 w-auto object-contain rounded"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
