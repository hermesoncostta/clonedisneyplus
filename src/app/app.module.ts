import { FooterModule } from './components/footer/footer.module';
import { InfoModule } from './components/info/info.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { FilmesModule } from './components/filmes/filmes.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanosModule } from './components/planos/planos.module';







@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FilmesModule,
    MatTabsModule,
    BrowserAnimationsModule,
    PlanosModule,
    InfoModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
