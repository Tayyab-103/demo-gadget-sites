"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import PawIcon from "@/components/PawIcon";

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
        className={`fixed inset-0 bg-ink/40 backdrop-blur-sm z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-white z-1000 border-l border-line flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-line flex items-center justify-between bg-brand-gradient-soft">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-brand-gradient text-primary-text flex items-center justify-center"><PawIcon className="w-5 h-5" /></span>
            <h3 className="m-0 font-display text-xl font-semibold text-ink">Your cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-muted hover:text-ink leading-none transition-colors"
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-soft text-primary-deep flex items-center justify-center"><PawIcon className="w-10 h-10" /></div>
              <h4 className="font-display text-lg font-semibold text-ink mb-1">Your cart is empty</h4>
              <p className="text-muted text-sm">Treat your furry friend to something new.</p>
              <button
                className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-ink text-white hover:bg-primary-deep transition-colors py-3 px-7 rounded-full text-sm mt-6 shadow-sm cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Keep shopping
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-line items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-cover rounded-2xl bg-primary-soft border border-line flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100?text=Pet+Item";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-ink mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-primary-deep mb-3 uppercase tracking-wider font-bold">
                      {item.Label || "Single Pack"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1.5 bg-neutral-bg p-1 rounded-xl border border-line">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-black/5 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary text-xs font-bold text-ink disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-ink font-black">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-black/5 w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary text-xs font-bold text-ink disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-ink">${item.Price}</div>
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
          <div className="p-6 border-t border-line bg-brand-gradient-soft">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-ink text-sm">Subtotal</span>
              <span className="font-display font-semibold text-2xl text-ink">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-ink text-white hover:bg-primary-deep transition-colors py-4 px-8 rounded-full text-sm w-full shadow-md mb-3"
              onClick={() => setIsCartOpen(false)}
            >
              <span>Proceed to checkout</span>
              <span>→</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-white border border-line text-ink hover:border-primary transition-colors py-3.5 px-8 rounded-full text-sm w-full cursor-pointer mb-4"
            >
              Continue shopping
            </button>

            {/* Payment Trust Badges */}
            <div className="flex flex-col items-center gap-2 pt-3 border-t border-ink/10">
              <div className="flex items-center gap-2 text-[0.68rem] text-muted font-semibold">
                <span className="text-emerald-600">🔒</span>
                <span>Guaranteed Safe &amp; Secure Checkout</span>
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
