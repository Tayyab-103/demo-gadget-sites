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
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-[999] transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white z-[1000] border-l border-black/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-black/5 flex items-center justify-between bg-neutral-bg/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <h3 className="m-0 text-base font-extrabold text-primary tracking-wider uppercase font-serif">
              Your Cart
            </h3>
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
              <div className="w-16 h-16 rounded-full bg-neutral-bg mx-auto flex items-center justify-center text-2xl mb-4 text-neutral-text/40">
                🌿
              </div>
              <p className="text-neutral-text/60 text-sm font-medium">Your tool basket is currently empty.</p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest mt-6 shadow-sm cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Garden Tools
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
                    className="w-[72px] h-[72px] object-cover rounded-xl bg-neutral-bg border border-black/5 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/img/products/garden_tools/trowel_1.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-primary mb-0.5 truncate font-serif">{item.Name}</div>
                    <div className="text-[0.62rem] text-secondary mb-3 uppercase tracking-wider font-bold">
                      {item.Label || "Single Instrument"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-neutral-bg p-1 rounded-lg border border-black/5">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-black/5 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-bg text-xs font-bold text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-primary font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-black/5 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-bg text-xs font-bold text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-primary font-serif">${item.Price}</div>
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
          <div className="p-6 border-t border-black/5 bg-neutral-bg/60 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-primary uppercase text-xs tracking-wider">Estimated Total</span>
              <span className="font-black text-xl text-primary font-serif">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-secondary text-white hover:brightness-110 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full shadow-md mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Secure Checkout
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border border-black/15 text-primary hover:bg-white transition-all duration-300 py-3 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
