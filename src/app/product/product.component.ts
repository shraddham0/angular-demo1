import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 productModal:ProductModel = new ProductModel();


}
export class ProductModel{
  productName!:string;
  price!:number;
  quantity!:number;
  discount!:number;
  totalPrice!:number;
}
