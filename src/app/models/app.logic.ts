import {Product} from './app.product.model';

export class ProductLogic {
   private products:Array<Product>;
   constructor(){
     this.products = new Array<Product>();
     this.products.push(new Product(101, 'Prd101','Laptop','IBM','Electronics','Gaming',120000 ));
     this.products.push(new Product(102, 'Prd102','Iron','Bajaj','Electrical','Home Applicances',2000 ));
     this.products.push(new Product(103, 'Prd103','Biscuts','Parle','Food','Glucose',20 ));
   } 
   getProducts(): Array<Product> {
     return this.products;
   }
   saveProduct(prd:Product):Array<Product> {
     this.products.push(prd);
     return this.products;
   }
}