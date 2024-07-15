import { createAction } from '@reduxjs/toolkit'
import {PRODUCTS_ACTION_TYPES} from "./product.types";
import {ProductsMap} from "../../types";

export const setProductsMap = createAction<ProductsMap>(
    PRODUCTS_ACTION_TYPES.SET_PRODUCTS
)