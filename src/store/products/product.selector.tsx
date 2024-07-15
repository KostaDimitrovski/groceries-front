import { RootState } from '../root-reducer';

export  const selectProductsMap = (state: RootState) => state.products.products;