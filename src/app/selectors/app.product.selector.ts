import { createSelector } from '@ngrx/store';
import { IAppProductState } from '../state/app.state';
import { IProductState } from '../state/app.product.state';


const selectProducts = (state: IAppProductState) => state.products;
// creating selector
export const selectProductsList = createSelector(
  selectProducts,
  (state: IProductState) => state.products
);

export const selectProduct = createSelector(
  selectProducts,
  (state: IProductState) => state.selectedProduct  // write query type logic
     // (state, id) => selectedProduct
);

export const filterProduct = createSelector(
  selectProducts,
  (state: IProductState) => state.filteredProducts
     // (state, id) => selectedProduct
);
