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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Container */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[440px] bg-white z-[1000] border-l border-black/8 flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-black/6 flex items-center justify-between bg-neutral-bg/60">
          <div>
            <span className="text-[0.6rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.2em] text-secondary block">
              Your Expedition Gear
            </span>
            <h3 className="m-0 text-base sm:text-lg font-black uppercase text-primary tracking-tight">
              Cart ({cart.reduce((sum, item) => sum + item.Qty, 0)})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-black/8 flex items-center justify-center text-primary hover:text-secondary cursor-pointer transition-colors text-base sm:text-lg"
            aria-label="Close Cart"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Strip */}
        <div className="px-3 sm:px-6 py-2 sm:py-2.5 bg-emerald-50 text-emerald-800 text-[0.62rem] sm:text-[0.68rem] font-bold flex items-center justify-center gap-1.5 sm:gap-2 border-b border-emerald-100 text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="truncate">Free Express Nationwide Shipping Included</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-3 sm:space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-neutral-bg flex items-center justify-center mx-auto mb-4 text-2xl text-primary/40">
                🎒
              </div>
              <h4 className="text-base font-bold text-primary mb-1">Your cart is empty</h4>
              <p className="text-xs text-neutral-text/50 max-w-xs mx-auto">
                Discover durable spinner luggage, duffels, and compression cubes.
              </p>
              <button
                className="mt-6 inline-flex items-center justify-center bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all py-3 px-7 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Collection
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
                  className="p-4 rounded-2xl border border-black/6 bg-neutral-bg/50 flex gap-4 items-center relative group"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 object-cover rounded-xl bg-white border border-black/5 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100?text=Product";
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-primary truncate">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-secondary font-bold uppercase tracking-wider mt-0.5">
                      {item.Label || "Single Piece"}
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center bg-white rounded-lg border border-black/8 p-0.5">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-6 h-6 rounded flex items-center justify-center text-primary disabled:opacity-20 hover:bg-neutral-bg cursor-pointer text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-primary">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-6 h-6 rounded flex items-center justify-center text-primary disabled:opacity-20 hover:bg-neutral-bg cursor-pointer text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-primary">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="text-neutral-text/30 hover:text-red-500 cursor-pointer p-1 text-base leading-none transition-colors self-start"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-black/6 bg-neutral-bg">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-xs uppercase tracking-widest text-neutral-text/60">
                Order Total
              </span>
              <span className="font-black text-xl text-primary">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-[3px] bg-secondary text-white hover:bg-primary transition-all duration-300 font-bold text-xs uppercase tracking-widest shadow-md mb-2.5 cursor-pointer"
              onClick={() => setIsCartOpen(false)}
            >
              <span>Secure Checkout</span>
              <span>→</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 rounded-[3px] border border-black/15 text-primary text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
