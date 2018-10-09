import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonesService } from '../../services/pokemones.service';
@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {

  pokemon:any[]=[];
  constructor(private params:ActivatedRoute, private pokemones:PokemonesService) {
    this.params.params.subscribe(params=>{
      //console.log('paramas');
      //this.pokemones.buscarPokemon(params['nombre'])
      //console.log(this.pokemones.buscarPokemon(params['nombre']));
      this.pokemon = this.pokemones.buscarPokemon(params['nombre']);
    })
   }

  ngOnInit() {
  }

}
