import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
    title="Task";
    
    name:string='Shraddha';
    date1=new Date("1998-11-03")
    otp:number=0;
    
    verify(){
      this.otp=this.otp
}
}
