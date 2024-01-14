import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitatoreComponent } from './visitatore/visitatore.component';



@NgModule({
  declarations: [
    VisitatoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VisitatoreComponent
  ]
})
export class VisitatoreModule { }
