export class Product {
  constructor(
    public ProductRowId:number,
    public ProductId:string,
    public ProductName:string,
    public Manufacturer:string,
    public CategoryName:string,
    public Description:string,
    public BasePrice:number
  ){}
}