import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from './reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './effects/app.product.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { ProductFormComponent } from './components/app.productform.component';
import { ProductListComponent } from './components/app.productlist.component';
import { ProductEditFormComponent } from './components/app.editproduct.component';
import { MainComponent } from './components/app.main.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent, ProductFormComponent, ProductListComponent,
    ProductEditFormComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,StoreModule.forRoot(mainReducers),
    EffectsModule.forRoot([ProductsEffects]),
    AppRoutingModule, FormsModule, HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'My NgRx App',
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
