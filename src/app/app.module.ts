import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TaskComponent } from './task/task.component';
import { FirstComponent } from './first/first.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

import { ThirdComponent } from './third/third.component';
import { FormsModule } from '@angular/forms';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TaskComponent,
    FirstComponent,
    EventBindingComponent,
    
  ThirdComponent,
   DirectiveExampleComponent,
   
   ProductComponent,
       
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
