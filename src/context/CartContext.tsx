"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import siteConfigData from "../../config/site-config.json";
import { Product, CartItem, SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (product: Product, quantity: number, price: number | string, label?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getCartTotal: () => string;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const savedCart = localStorage.getItem("cartPdtArr");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    console.error("Error parsing cart data from localStorage", e);
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isInitialMount = React.useRef(true);

  // Hydrate cart from localStorage on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cartPdtArr");
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      }
    } catch (e) {
      console.error("Error parsing cart data from localStorage", e);
    }
  }, []);

  // Save cart to localStorage whenever it changes (only after initial load)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    try {
      localStorage.setItem("cartPdtArr", JSON.stringify(cart));
    } catch (e) {
      console.error("Error saving cart to localStorage", e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number, price: number | string, label = "") => {
    // If site configuration limits cart to one product
    const limitOne = siteConfig.oneProductCartLimit === "yes";

    if (limitOne) {
      const newItem: CartItem = {
        Id: product.id,
        Name: product.name,
        Image: product.image,
        Price: price,
        Qty: quantity,
        Total: (parseFloat(String(price)) * quantity).toFixed(2),
        billModel: product.billingModel,
        StickyId: product.stickyId,
        trlPrice: product.ssPrice,
        EnableMaxqty: product.bundles ? product.bundles.length : 1,
        Label: label,
        bundles: product.bundles
      };
      setCart([newItem]);
      setIsCartOpen(true);
      return;
    }

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.Id === product.id);

      if (existingItemIndex > -1) {
        // Update existing item
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        const newQty = existingItem.Qty + quantity;
        
        updatedCart[existingItemIndex] = {
          ...existingItem,
          Qty: newQty,
          Total: (parseFloat(String(price)) * newQty).toFixed(2)
        };
        return updatedCart;
      } else {
        // Add new item
        const newItem: CartItem = {
          Id: product.id,
          Name: product.name,
          Image: product.image,
          Price: price,
          Qty: quantity,
          Total: (parseFloat(String(price)) * quantity).toFixed(2),
          billModel: product.billingModel,
          StickyId: product.stickyId,
          trlPrice: product.ssPrice,
          EnableMaxqty: product.bundles ? product.bundles.length : 1,
          Label: label,
          bundles: product.bundles
        };
        return [...prevCart, newItem];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.Id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.Id !== productId) return item;

        // Snap to the real configured bundle tier price instead of unit price x qty,
        // since sticky.io bundle pricing is non-linear per tier.
        const matchedBundle = item.bundles?.find((b) => b.quantity === quantity);
        if (matchedBundle) {
          return {
            ...item,
            Qty: matchedBundle.quantity,
            Price: (matchedBundle.price / matchedBundle.quantity).toFixed(2),
            Total: matchedBundle.price.toFixed(2)
          };
        }

        return {
          ...item,
          Qty: quantity,
          Total: (parseFloat(String(item.Price)) * quantity).toFixed(2)
        };
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.Total), 0).toFixed(2);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.Qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
