import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  productModal:ProductModel = new ProductModel();


  calculateTotalPrice(){
   console.log("product Data",this.productModal);
 
   this.productModal.totalPrice = (Number(this.productModal.price) * Number(this.productModal.quantity)) - Number(this.productModal.discount);
  }
 
  reset(){
   // this.productModal.productName = "";
   // this.productModal.price = 0 ;
   // this.productModal.quantity = 0 ;
   // this.productModal.totalPrice = 0 ;
   // this.productModal.discount = 0 ;
   this.productModal = new ProductModel();
  }
 
 
 }
 
 export class ProductModel {
    productName!:string;
    price!:number;
    quantity!:number;
    discount!:number;
    totalPrice!:number;
 }
 

