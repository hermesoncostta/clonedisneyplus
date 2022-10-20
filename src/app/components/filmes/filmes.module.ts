import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes/filmes.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports:[
    FilmesComponent
  ]
})
export class FilmesModule { }
