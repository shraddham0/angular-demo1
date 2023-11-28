import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  message1:string="Welcome to the Velocity";

 employeeObj:any = {
    employeeName:"John",
    designation:"Angular Developer",
    salary:40000,
    skills:["Angular","HTML"]
  }

  

}
