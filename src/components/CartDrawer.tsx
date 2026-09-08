"use client";

import React from "react";
import Image from "next/image";
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
        className={`fixed inset-0 bg-[#18121E]/70 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-[#FFFFFF] text-[#18121E] z-1000 border-l border-[#C59B7E]/30 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-[#C59B7E]/20 flex items-center justify-between bg-[#FAF8F6]">
          <div className="flex items-center gap-2.5">
            <span className="text-[#C59B7E] font-serif text-lg font-bold">✦</span>
            <h3 className="m-0 text-sm font-serif font-bold text-[#18121E] tracking-widest uppercase">
              YOUR ATELIER SELECTIONS
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-slate-400 hover:text-[#18121E] leading-none transition-colors"
            aria-label="Close Shopping Bag"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F6] text-[#C59B7E] flex items-center justify-center text-xl mx-auto mb-4 border border-[#C59B7E]/30">
                ✦
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
                Your atelier bag is currently empty.
              </p>
              <button
                className="inline-block font-bold text-center whitespace-nowrap bg-[#18121E] text-white hover:bg-[#C59B7E] hover:text-[#18121E] transition-all py-3.5 px-7 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Couture Collection
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
                  className="flex gap-4 pb-5 mb-5 border-b border-slate-100 items-start relative group bg-[#FAF8F6] p-4 rounded-2xl border border-[#C59B7E]/20"
                  key={item.Id}
                >
                  <div className="w-[72px] h-[72px] rounded-xl overflow-hidden bg-slate-900 flex-shrink-0 border border-[#C59B7E]/20 relative">
                    <Image
                      src={item.Image}
                      alt={item.Name}
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-serif font-bold text-xs sm:text-sm text-[#18121E] mb-0.5 truncate tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-[#C59B7E] mb-3 uppercase tracking-wider font-semibold">
                      {item.Label || "Single Atelier Piece"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded bg-[#FAF8F6] text-[#18121E] flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-[#18121E] font-bold">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded bg-[#FAF8F6] text-[#18121E] flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-serif font-bold text-[#18121E]">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-slate-400 hover:text-red-500 cursor-pointer text-lg px-1 transition-colors self-start leading-none"
                    aria-label="Remove piece"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#C59B7E]/20 bg-[#FAF8F6]">
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-[#18121E] uppercase text-xs tracking-wider">
                Subtotal
              </span>
              <span className="font-serif font-bold text-2xl text-[#18121E]">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 text-[#18121E] transition-all py-3.5 px-6 rounded-full text-xs w-full shadow-lg mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Priority Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center text-xs tracking-wider bg-white border border-slate-300 text-[#18121E] hover:bg-slate-50 transition-all py-3 px-6 rounded-full w-full cursor-pointer font-bold"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
