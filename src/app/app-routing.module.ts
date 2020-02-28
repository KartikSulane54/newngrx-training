import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/app.productlist.component';
import { ProductFormComponent } from './components/app.productform.component';
import { ProductEditFormComponent } from './components/app.editproduct.component';



const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'addProduct', component: ProductFormComponent},
  {path: 'editProduct/:id', component: ProductEditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
