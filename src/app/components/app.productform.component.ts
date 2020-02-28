import { Component, OnInit } from '@angular/core';
import {Product} from './../models/app.product.model';
import {Categories, Manufacturers} from './../models/app.constants';
import { ProductActions } from '../actions/index';
import { Store, select } from '@ngrx/store';
import { IAppProductState } from '../state/app.state';
import { selectProductsList } from '../selectors/app.product.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {

  product: Product;


  columnHeaders: Array<string>;
  // read the constants and store their data in local public objects
  categories = Categories;
  manufacturers = Manufacturers;

  constructor(private _store: Store<IAppProductState>,
    private router: Router) {
    this.product = new Product(0,'','','','','',0);
  }
  ngOnInit(): void {}

  clear(): void {
    this.product = new Product(0,'','','','','',0);
  }
  save(): void {
    this._store.dispatch(ProductActions.postProduct({product: this.product}));
    setTimeout(()=>{
      this.router.navigate(['']);
    }, 4000);
  }

}
