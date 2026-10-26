"use client";

import { fallbackImage } from "@/lib/brandIcon";

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
        className={`fixed inset-0 bg-ink/75 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-surface text-ink z-1000 border-l border-primary/30 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-primary/20 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <span className="text-primary-deep text-base">✒</span>
            <h3 className="m-0 text-sm font-display font-bold text-ink tracking-widest uppercase">
              SHOPPING CART
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-ink/40 hover:text-ink leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ink/50 text-xs font-display uppercase tracking-wider mb-6">
                Your cart is empty.
              </p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-ink text-paper border border-primary hover:bg-primary hover:text-ink transition-all py-3.5 px-7 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                onClick={() => setIsCartOpen(false)}
              >
                Start Shopping
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
                  className="flex gap-4 pb-5 mb-5 border-b border-primary/15 items-start relative group bg-white p-3.5 rounded-2xl border"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-contain p-1 rounded-xl bg-surface flex-shrink-0 border border-primary/20"
                    onError={(e) => {
                      e.currentTarget.src =
                        fallbackImage;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-xs sm:text-sm text-ink mb-0.5 truncate tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-primary-deep mb-3 uppercase tracking-wider font-bold">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-primary/30">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded bg-white text-ink flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed shadow-2xs"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-ink font-bold font-display">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded bg-white text-ink flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed shadow-2xs"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-display font-bold text-ink">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-ink/30 hover:text-ink cursor-pointer text-lg px-1 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-primary/20 bg-white">
            <div className="flex items-center justify-between mb-5 font-display">
              <span className="font-bold text-ink uppercase text-xs tracking-wider">
                Subtotal
              </span>
              <span className="font-bold text-xl text-ink">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider bg-primary text-ink hover:bg-secondary transition-all py-3.5 px-6 rounded-full text-xs w-full shadow-md mb-2.5 hover:scale-[1.01]"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Secure Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-display text-xs tracking-wider bg-transparent border border-primary/40 text-ink hover:bg-surface transition-all py-3 px-6 rounded-full w-full cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
