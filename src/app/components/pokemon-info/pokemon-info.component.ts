import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  pokemon:any[]=[];

  constructor(private ParamsRouter:ActivatedRoute, private pokemoServicio:PokemonesService) {
    this.ParamsRouter.params.subscribe(params=>{
      //console.log(params['id']);
      //this.pokemoServicio.obtenerPokemon(params['id']);
      //console.log(this.pokemoServicio.obtenerPokemon(params['id']))
      this.pokemon=this.pokemoServicio.obtenerPokemon(params['id']);
    });
   }

  ngOnInit() {
  }

}
