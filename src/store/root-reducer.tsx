import { combineReducers } from "redux";

import {userReducer} from './user/user.reducer'
import {companiesReducer} from './companies/company.reducer'
import {productsReducer} from "./products/product.reducer";


export interface RootState {
    user: ReturnType<typeof userReducer>;
    companies: ReturnType<typeof companiesReducer>
    products: ReturnType<typeof productsReducer>
}


export const rootReducer = combineReducers({
    user: userReducer,
    companies: companiesReducer,
    products: productsReducer,
})