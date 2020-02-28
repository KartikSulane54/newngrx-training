import { Component, OnInit } from '@angular/core';
import { ProductActions } from './../actions/index';
import { Store, select } from '@ngrx/store';
import { IAppProductState } from '../state/app.state';
import { selectProductsList, filterProduct } from '../selectors/app.product.selector';
import {Product} from './../models/app.product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist-component',
  templateUrl: './app.productlist.view.html'
})
export class ProductListComponent implements OnInit {
  columnHeaders: Array<string>;
  product: Product;
  searchInput: string;
  selectedManufacturer: boolean;
  selectedCategory: boolean;
  products$ =  this._store.pipe(select(selectProductsList));
  filter$ = this._store.pipe(select(filterProduct));

  constructor(private _store: Store<IAppProductState>, private router: Router) {
    this.product = new Product(0,'','','','','',0);
    this.columnHeaders = new Array<string>();
  }

  ngOnInit(): void {
  //  alert('called ');
    // JS Reflection
    for (const c in this.product) {
      this.columnHeaders.push(c);
    }
    // dispatch an action from the store
    this._store.dispatch(ProductActions.getProducts());
    // this.filter$ = this.products$;
  }
  addProductView(): void {
    this.router.navigate(['addProduct']);
  }

  editSelectedProduct(id: number): void {
    this.router.navigate(['editProduct', id]);
  }

  deleteSelectedProduct(product: Product): void {
    this._store.dispatch(ProductActions.deleteProduct({product}));
  }

  search()  {
    const input = this.searchInput;
    const column: string = this.selectedManufacturer ? 'Manufacturer' : 'CategoryName';
    this._store.dispatch(ProductActions.searchProduct({input, column}));
    // var input = this.searchInput;
    this.products$ = this.filter$;
  }
}
