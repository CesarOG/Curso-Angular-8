import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SharedComponent } from './components/shared/shared.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { ImagesPipe } from './pipes/images.pipe';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    SharedComponent,
    ImagesPipe,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule

  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
