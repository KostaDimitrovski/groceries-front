import { CART_ACTION_TYPES } from "./cart.types";
import {Company} from "../../types";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    discount: string;
    description: string;
    company: Company;
}

interface CartState {
    isCartOpen: boolean;
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
}

interface SetCartItemsAction {
    type: typeof CART_ACTION_TYPES.SET_CART_ITEMS;
    payload: CartItem[];
}

interface SetIsCartOpenAction {
    type: typeof CART_ACTION_TYPES.SET_IS_CART_OPEN;
    payload: boolean;
}

type CartAction = SetCartItemsAction | SetIsCartOpenAction;

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};


export const cartReducer = (state = CART_INITIAL_STATE, action: CartAction): CartState => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:

            const cartItems = payload as CartItem[];
            const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
            const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

            return {
                ...state,
                cartItems,
                cartCount,
                cartTotal
            };

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return { ...state, isCartOpen: payload as boolean };

        default:
            return state;
    }
};
