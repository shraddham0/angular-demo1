import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  count:number = 0;

  login(){
    console.log("Login Success");
  }

  addToCart(){
    ++this.count
  }

  removeFromCart(){
    --this.count;
  }

  performAction(actionName:string){
    if(actionName === 'Increment'){
      this.count++
    }else {
      this.count--;
    }
  }

  
  print(){
    console.log("mouse over");
  }

  getData(data:any){
    console.log("Change event fired ",data);
  }
}



