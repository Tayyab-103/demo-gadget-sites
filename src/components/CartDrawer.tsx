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
        className={`fixed inset-0 bg-primary-dark/50 backdrop-blur-sm z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-neutral-bg z-1000 border-l border-secondary/70 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-secondary/50 flex items-center justify-between">
          <h3 className="m-0 font-serif font-medium text-xl text-neutral-text">Your Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-neutral-text/50 hover:text-primary leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-14">
              <div className="w-16 h-16 rounded-full bg-surface border border-secondary text-primary flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </div>
              <h4 className="font-serif font-medium text-lg text-neutral-text mb-2">Your Bag Is Empty</h4>
              <p className="text-neutral-text/50 text-xs uppercase tracking-wider mb-6">Find a warm new piece for your home.</p>
              <button
                className="inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-[0.16em] shadow-sm cursor-pointer"
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-secondary/50 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-cover rounded-2xl bg-neutral-bg border border-secondary/50 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100?text=Product";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-serif font-medium text-sm sm:text-base text-neutral-text truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-neutral-text/50 mb-3 uppercase tracking-wider font-semibold">
                      {item.Label || "Single Pack"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-neutral-bg p-1 rounded-xl border border-secondary/70">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-neutral-bg border border-secondary/50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:bg-surface text-xs font-bold text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs text-primary font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-neutral-bg border border-secondary/50 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:bg-surface text-xs font-bold text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-bold text-primary">${item.Price}</div>
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
          <div className="p-6 border-t border-secondary/50 bg-surface">
            <div className="flex items-center justify-between mb-5">
              <span className="font-serif font-medium text-neutral-text text-sm">Subtotal</span>
              <span className="font-bold text-lg text-primary">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-3 font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-[0.16em] w-full shadow-md hover:shadow-lg mb-3"
              onClick={() => setIsCartOpen(false)}
            >
              <span>Proceed to Checkout</span>
              <span>→</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border border-secondary-dark/50 text-primary hover:border-primary hover:bg-surface transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-[0.16em] w-full cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

