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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white z-50 border-l border-black/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-black/10 flex items-center justify-between bg-[#FAF9F7]">
          <h3 className="m-0 text-base font-bold text-primary tracking-wider uppercase font-heading">
            Shopping Bag ({cart.length})
          </h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-2xl cursor-pointer text-primary/60 hover:text-primary transition-colors leading-none"
            aria-label="Close Shopping Bag"
          >
            &times;
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-primary/20 text-5xl mb-4 font-heading">Empty</div>
              <p className="text-neutral-text/50 text-xs sm:text-sm">Your shopping bag is currently empty.</p>
              <button
                className="fashion-button mt-6 text-xs"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div className="flex gap-4 pb-5 border-b border-black/5 items-start relative group" key={`${item.Id}-${item.size || "M"}`}>
                <img
                  src={item.Image}
                  alt={item.Name}
                  className="w-20 h-24 object-cover rounded-xl bg-neutral-bg flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-primary truncate mb-1">
                    {item.Name}
                  </h4>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/50 bg-[#FAF9F7] px-2 py-0.5 rounded border border-black/5">
                      Size: {item.size || "M"}
                    </span>
                    {item.Label && (
                      <span className="text-[0.65rem] text-secondary font-semibold">
                        {item.Label}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    {/* Stepper */}
                    <div className="count-stepper">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.Id, item.Qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <input type="text" readOnly value={item.Qty} />
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.Id, item.Qty + 1)}
                        disabled={item.Qty >= (item.EnableMaxqty || 8)}
                        className="disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-primary">${item.Total}</div>
                      {item.Qty > 1 && (
                        <div className="text-[0.65rem] text-neutral-text/40">(${item.Price} each)</div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.Id)}
                  className="text-neutral-text/30 hover:text-red-500 cursor-pointer text-lg p-1 transition-colors self-start leading-none"
                  aria-label="Remove item"
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-black/10 bg-[#FAF9F7] space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span className="text-primary">Subtotal</span>
              <span className="text-base font-extrabold text-primary">${getCartTotal()}</span>
            </div>

            <p className="text-[0.68rem] text-neutral-text/50">
              Shipping &amp; taxes calculated at checkout. Complimentary delivery on orders over $50.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <Link
                href="/checkout"
                className="fashion-button w-full text-center"
                onClick={() => setIsCartOpen(false)}
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/cart"
                className="fashion-button-outline w-full text-center text-xs"
                onClick={() => setIsCartOpen(false)}
              >
                View Bag &amp; Order Details
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
