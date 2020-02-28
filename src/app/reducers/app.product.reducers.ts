import { createReducer, on } from '@ngrx/store';
import {ProductActions} from './../actions/index';
import {initialProductState} from './../state/app.product.state';
// responsible to monitor dispatched actions from View aka store subscribed by View
// the action invocation is managed using on() method
export const reducer = createReducer(
  initialProductState,
  on(ProductActions.getProductsSuccess, (state, {products}) => ({
     ...state,
     products
  })),
  on(ProductActions.getProductByIdSuccess, (state, {product}) => ({
     ...state,
     selectedProduct : product
  })),
  on(ProductActions.postProductSuccess, (state, {product}) => ({
     ...state,
     product
  })),
  on(ProductActions.putProductSuccess, (state, {product}) => ({
     ...state,
     product
  })),
  on(ProductActions.searchProductSuccess, (state, {products}) => ({
    ...state,
    filteredProducts : products
 })),
  on(ProductActions.deleteProductSuccess, (state, {product}) => {
    state.products.forEach((p, index) => {
      if (p.ProductRowId === product.ProductRowId) {
        state.products.splice(index, 1);
      }
    });
    return {
      ...state,
       product
   }}
 )
);
