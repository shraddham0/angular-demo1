import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
  isShow:boolean = true ;
  isDisplay:boolean = false ;
  
  toggle(){
      this.isDisplay = !this.isDisplay;
  }
  
}
