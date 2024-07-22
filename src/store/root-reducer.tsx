// store/rootReducer.jsx
import {combineReducers} from 'redux';

import {userReducer} from './user/user.reducer';
import {companiesReducer} from './companies/company.reducer';
import {productsReducer} from './products/product.reducer';
import authReducer from './user/authSlice';
import {cartReducer} from "./cart/cart.reducer";
import {wishlistReducer} from "./wishlist/wishlist.reducer";

export interface RootState {
    user: ReturnType<typeof userReducer>;
    companies: ReturnType<typeof companiesReducer>;
    products: ReturnType<typeof productsReducer>;
    auth: ReturnType<typeof authReducer>;
    cart: ReturnType<typeof cartReducer>;
    wishlist: ReturnType<typeof wishlistReducer>;
}

export const rootReducer = combineReducers({
    user: userReducer,
    companies: companiesReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
});
