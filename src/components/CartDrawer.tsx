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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-[#FDFDFD] z-50 border-l border-rose-100 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-rose-100 flex items-center justify-between bg-[#FAFAFA]">
          <div className="flex items-center gap-2">
            <span className="text-[#D2446D] text-lg font-black">📖</span>
            <h3 className="m-0 text-base font-black text-[#4C0519] tracking-tight uppercase">Your Book Cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-gray-400 hover:text-[#D2446D] leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-14">
              <div className="text-rose-200 text-6xl mb-4 font-serif">📚</div>
              <p className="text-gray-500 text-sm font-medium">Your book cart is currently empty.</p>
              <button
                className="inline-block font-black text-center whitespace-nowrap bg-[#4C0519] text-white hover:bg-[#D2446D] transition-all duration-300 py-3.5 px-8 rounded-full text-[0.7rem] uppercase tracking-widest mt-6 shadow-md cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Book Collections
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
                <div className="flex gap-4 pb-5 mb-5 border-b border-rose-100 items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[72px] h-[72px] object-cover rounded-xl bg-[#FAFAFA] border border-rose-100 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/img/gallery1.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-[#000000] mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-[#D2446D] mb-3 uppercase tracking-wider font-extrabold">
                      {item.Label || "Standard Pack"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper */}
                      <div className="flex items-center gap-1.5 bg-[#FAFAFA] p-1 rounded-lg border border-rose-100">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-white border border-rose-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-rose-50 text-xs font-bold text-[#4C0519] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-[#000000] font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-white border border-rose-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-rose-50 text-xs font-bold text-[#4C0519] disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-[#4C0519]">${item.Price}</div>
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
          <div className="p-6 border-t border-rose-100 bg-[#FAFAFA]">
            <div className="flex items-center justify-between mb-5">
              <span className="font-extrabold text-[#000000] uppercase text-xs tracking-widest">Subtotal</span>
              <span className="font-black text-xl text-[#4C0519]">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-[#4C0519] text-white hover:bg-[#D2446D] transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest w-full shadow-md mb-3"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-transparent border border-rose-200 text-[#4C0519] hover:bg-rose-50 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
