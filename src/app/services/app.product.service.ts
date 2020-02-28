import { Injectable } from '@angular/core';

// import Http Object Model
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './../models/app.product.model';

@Injectable({
  providedIn:'root'
})
export class HttpService {
  url: string;
  // inject the HttpClient in service as ctor injection
  // to use get<T>/post<T>/put<T>/delete<T> methods
  // T is the Observable Reasponse received from Http Request
  constructor(private http: HttpClient) {
    this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/products/';
  }

  getData(): Observable<Product[]> {
    let resp: Observable<Product[]> = null;

    resp = this.http.get<Product[]>(this.url);
    return resp;
  }

  postData(prd: Product): Observable<Product> {
    let resp: Observable<Product> = null;
    // define options for passing Content-Type
    const options = {
      headers: new HttpHeaders({
         'Content-Type':'application/json'
      })
    };
    resp = this.http.post<Product>(this.url, prd, options);
    return resp;
  }

  putData(prd: Product): Observable<Product> {
    let resp: Observable<Product> = null;
    // define options for passing Content-Type
    const options = {
      headers: new HttpHeaders({
         'Content-Type':'application/json'
      })
    };
    // https://apiapptrainingnewapp.azurewebsites.net/api/Products/1
    resp = this.http.put<Product>(`${this.url}/${prd.ProductRowId}`, prd, options);
    return resp;
  }

  deleteData(id:number): Observable<Product> {
   let resp:Observable<Product> = null;
   resp = this.http.delete<Product>(`${this.url}/${id}`);
   return resp;
  }

}
