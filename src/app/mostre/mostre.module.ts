import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostreComponent } from './mostre/mostre.component';



@NgModule({
  declarations: [
    MostreComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MostreComponent
  ]
})
export class MostreModule { }
