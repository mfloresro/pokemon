import { Component, OnInit } from '@angular/core';

//Servicios
import {PokemonesService, PokemonRules} from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  pokemones:PokemonRules[] = [];
  constructor(private _pokemones:PokemonesService) { }

  ngOnInit() {
    console.log(this._pokemones);
    this.pokemones=this._pokemones.obtenerPokemones();
  }

}
