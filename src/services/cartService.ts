// src/services/cartService.ts
import { CartItem } from "../types/type";

let cart: CartItem[] = [];

export const fetchCart = async (): Promise<CartItem[]> => {
  return cart;
};

export const addToCart = async (item: CartItem): Promise<CartItem[]> => {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    cart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    cart = [...cart, { ...item, quantity: 1 }];
  }
  return cart;
};

export const updateCartItemQuantity = async (
  itemId: number,
  delta: number
): Promise<CartItem[]> => {
  cart = cart.map((item) =>
    item.id === itemId
      ? { ...item, quantity: Math.max(1, item.quantity + delta) }
      : item
  );
  return cart;
};

export const removeCartItem = async (itemId: number): Promise<CartItem[]> => {
  cart = cart.filter((item) => item.id !== itemId);
  return cart;
};

export const clearCart = async (): Promise<CartItem[]> => {
  cart = [];
  return cart;
};