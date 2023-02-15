import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SideFitersComponent } from './side-fiters/side-fiters.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    FilmPageComponent,
    FilmItemComponent,
    MainHeaderComponent,
    SideFitersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
