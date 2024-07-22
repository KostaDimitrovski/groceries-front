import {Product} from "../../types";

export const addWishlistItem = (wishlistItems: Product[], productToAdd: Product): Product[] => {
    const existingWishlistItem = wishlistItems.find((wishlistItem) => wishlistItem.id === productToAdd.id);
    if (existingWishlistItem) {
        return wishlistItems;
    }
    return [...wishlistItems, productToAdd];
};

export const removeWishlistItem = (wishlistItems: Product[], wishlistItemToRemove: Product): Product[] => {
    return wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id);
};
