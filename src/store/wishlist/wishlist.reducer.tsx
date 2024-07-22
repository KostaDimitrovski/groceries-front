import {Product} from "../../types";
import {WISHLIST_ACTION_TYPES} from "./wishlist.types";



export interface WishlistItemState {
    wishlistItems: Product[];
}

export interface SetWishlistItemAction {
    type : typeof WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS;
    payload: Product[];
}

type WishlistAction = SetWishlistItemAction;

export const WISHLIST_INITIAL_STATE: WishlistItemState = {
    wishlistItems: [],

};

export const wishlistReducer = (state = WISHLIST_INITIAL_STATE, action: WishlistAction) : WishlistItemState => {
    const { type, payload } = action;
    switch (type) {
        case WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS:
            return { ...state, wishlistItems: payload };
        default:
            return state;
    }
}