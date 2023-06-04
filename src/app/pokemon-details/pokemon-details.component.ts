import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonEvolutionChain } from '../core/models/pokemon';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
    pokemon: Pokemon = {} as Pokemon;
    evolutionChain: PokemonEvolutionChain = {} as PokemonEvolutionChain;

    constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

    ngOnInit() {
        const pokemonId = this.route.snapshot.paramMap.get('id') ?? '';

        this.pokemonService.getPokemonById(pokemonId).subscribe((pokemon) => {
            this.pokemon = pokemon;
        });
    }
}
