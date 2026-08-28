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
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[440px] bg-white z-1000 border-l border-secondary/20 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-secondary-text">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </span>
            <h3 className="m-0 text-base font-black text-primary tracking-tight uppercase">Athlete Cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-neutral-text/50 hover:text-secondary leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-neutral-text/20 text-6xl mb-4">⚡</div>
              <p className="text-neutral-text/60 text-sm font-medium">Your athlete cart is empty.</p>
              <button
                className="inline-block font-black text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest mt-6 shadow-md cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Gear Catalog
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-black/5 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[75px] h-[75px] object-cover rounded-2xl bg-neutral-bg border border-black/5 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=150&q=80";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-sm text-primary mb-0.5 truncate uppercase tracking-tight">{item.Name}</div>
                    <div className="text-[0.62rem] text-secondary mb-3.5 uppercase tracking-wider font-bold">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-neutral-bg p-1 rounded-xl border border-black/5">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-black/5 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:bg-neutral-bg hover:border-secondary/30 text-xs font-black text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-primary font-black">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-black/5 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:bg-neutral-bg hover:border-secondary/30 text-xs font-black text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-primary">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-neutral-text/30 hover:text-red-600 cursor-pointer text-xl px-1.5 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-black/5 bg-neutral-bg/70 backdrop-blur-md">
            <div className="flex items-center justify-between mb-5">
              <span className="font-black text-primary uppercase text-xs tracking-widest">Cart Subtotal</span>
              <span className="font-black text-xl text-primary">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-secondary text-secondary-text hover:brightness-110 transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest w-full shadow-lg shadow-secondary/25 hover:scale-[1.01] mb-3"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Secure Checkout &rarr;
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-transparent border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
