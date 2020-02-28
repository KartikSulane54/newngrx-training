export class Category {
  constructor(public CatId: number,public CatName: string){
  }
}

export const Categories: Array<Category> = [
   {CatId:1,CatName:'C1'},{CatId:2,CatName:'C2'},{CatId:3,CatName:'C3'},
];

export class ProductInfo {
  constructor(
    public PrdId:number, public PrdName:string, public CatId:number
  ){}
}

export const products:Array<ProductInfo>=  [
   {PrdId:101,PrdName:'P1',CatId:1},
   {PrdId:102,PrdName:'P2',CatId:2},
   {PrdId:103,PrdName:'P3',CatId:3},
   {PrdId:104,PrdName:'P4',CatId:1},
   {PrdId:105,PrdName:'P5',CatId:2},
   {PrdId:106,PrdName:'P6',CatId:3}
];