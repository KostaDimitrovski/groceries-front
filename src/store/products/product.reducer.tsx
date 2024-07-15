import {PRODUCTS_ACTION_TYPES} from "./product.types";
import {Product} from "../../types";




interface ProductsState {
    products: Product[]
}



export const PRODUCTS_INITIAL_STATE: ProductsState = {
    products: [],
};


interface SetProductsMapAction {
    type: typeof PRODUCTS_ACTION_TYPES.SET_PRODUCTS;
    payload: Product[];
}

type ProductsAction = SetProductsMapAction;

export const productsReducer = (state: ProductsState = PRODUCTS_INITIAL_STATE, action: ProductsAction): ProductsState => {
    const {type , payload} = action;

    switch (type){
        case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}