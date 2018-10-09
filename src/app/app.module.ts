import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Servicios
import { PokemonesService } from "./services/pokemones.service";

//Rutas
import { POKE_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { BuscarPokemonComponent } from './components/buscar-pokemon/buscar-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonesComponent,
    PokemonInfoComponent,
    BuscarPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    POKE_ROUTING
  ],
  providers: [PokemonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
