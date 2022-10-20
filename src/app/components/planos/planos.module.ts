import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanosComponent } from './planos/planos.component';



@NgModule({
  declarations: [
    PlanosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlanosComponent
  ]
})
export class PlanosModule { }
