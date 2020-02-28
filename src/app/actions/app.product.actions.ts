// the factory function
// the 'props' is an extra metadata
import {createAction, props} from '@ngrx/store';
import { Product } from '../models/app.product.model';

// the new action creation syntax
export const getProducts =  createAction(
  '[Product] Get Product'
);
export const getProductsSuccess =  createAction(
  '[Product] Get Product Success',
   props<{products: Product[]}>()
);
export const getProductById = createAction(
  '[Product]Get Product By Id',
  props<{payload: number}>()
);
export const getProductByIdSuccess = createAction(
  '[Product]Get Product By Id Success',
  props<{product: Product}>()
);
export const postProduct = createAction(
  '[Product] Post Product',
  props<{product: Product}>()
);
export const postProductSuccess = createAction(
  '[Product] Post Product Success',
  props<{product: Product}>()
);
export const putProduct = createAction(
  '[Product] Put Product',
  props<{product: Product}>()
);
export const putProductSuccess = createAction(
  '[Product] Put Product Success',
  props<{product: Product}>()
);
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{product: Product}>()
);
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{product: Product}>()
);
export const searchProduct = createAction(
  '[Product] Search Product',
  props<{input: string, column: string}>()
);
export const searchProductSuccess = createAction(
  '[Product] Search Product Success',
  props<{products: Product[]}>()
);
// ends here
