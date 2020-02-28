import { Component, OnInit } from '@angular/core';
import {Product} from './../models/app.product.model';
import {Categories, Manufacturers} from './../models/app.constants';
import { ProductActions } from '../actions/index';
import { Store, select } from '@ngrx/store';
import { IAppProductState } from '../state/app.state';
import {  selectProduct } from '../selectors/app.product.selector';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editproduct-component',
  templateUrl: './app.editproduct.view.html'
})
export class ProductEditFormComponent implements OnInit {

  product: Product;
  // read the constants and store their data in local public objects
  categories = Categories;
  manufacturers = Manufacturers;
  id: number;
  product$: Observable<Product>;



  // tslint:disable-next-line: variable-name
  constructor(private _store: Store<IAppProductState>,
    private router: Router,
    private act: ActivatedRoute) {
    this.product = new Product(0,'','','','','',0);
    this.product$ = new Observable<Product>();

  }
  ngOnInit(): void {
    this.act.params.subscribe((p)=> {
      this.product.ProductRowId = p.id;

      this._store.dispatch(ProductActions.getProductById({payload : this.product.ProductRowId}));
      this.product$ =  this._store.pipe(select(selectProduct));
      this.product$.subscribe((p) => {
        this.product =p;
      });
    });
  }

  clear(): void {
    this.product = new Product(0,'','','','','',0);
  }
  save(): void {
    this._store.dispatch(ProductActions.putProduct({product:this.product}));
    setTimeout(()=>{
      this.router.navigate(['']);
    }, 4000);
  }
}
