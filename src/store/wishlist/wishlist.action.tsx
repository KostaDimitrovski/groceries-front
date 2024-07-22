import {createAction} from "@reduxjs/toolkit";
import { Product} from "../../types";
import {WISHLIST_ACTION_TYPES} from "./wishlist.types";
import {addWishlistItem, removeWishlistItem} from "./wishlist.helpers";


export const setWishlistItems = createAction<Product[]>(
    WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS
)


export const addItemToWishlist = (wishlistItems: Product[], productToAdd: Product) => {
    const newWishlistItems = addWishlistItem(wishlistItems, productToAdd);
    return setWishlistItems(newWishlistItems);
};

export const removeItemFromWishlist = (wishlistItems: Product[], wishlistItemToRemove: Product) => {
    const newWishlistItems = removeWishlistItem(wishlistItems, wishlistItemToRemove);
    return setWishlistItems(newWishlistItems);
};
