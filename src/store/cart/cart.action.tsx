import { createAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";
import { addCartItem, clearCartItem, removeCartItem } from "./cart.helpers";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = createAction<boolean>(
    CART_ACTION_TYPES.SET_IS_CART_OPEN
);

export const setCartItems = createAction<CartItem[]>(
    CART_ACTION_TYPES.SET_CART_ITEMS
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};
