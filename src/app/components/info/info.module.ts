import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports:[
    InfoComponent
  ]
})
export class InfoModule { 

}
