import { createSelector } from "@reduxjs/toolkit";
import { RootState } from '../root-reducer';


export const selectWishlistReducer = (state: RootState) => state.wishlist;

export const selectCartItems = createSelector(
    [selectWishlistReducer],
    (wishlist) => wishlist.wishlistItems
);