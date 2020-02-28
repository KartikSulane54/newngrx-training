import { Product } from '../models/app.product.model';

// the ProductState interface type and the initial Product state

export interface IProductState {
   products: Product[];
   product: Product;
   filteredProducts: Product[];
   selectedProduct: Product;
};

export const initialProductState: IProductState = {
  products: null,  //Setting initial values
  product: null,
  selectedProduct: null,
  filteredProducts: null
};
