import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/services/pokemon.service';
import { forkJoin, switchMap } from 'rxjs';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
    pokemonList: any[] = [];
    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.pokemonService
            .getPokemonList()
            .pipe(
                switchMap((pokemonList) => {
                    const pokemonObservables = pokemonList.results.map((pokemon) => {
                        return this.pokemonService.getPokemon(pokemon.url);
                    });
                    return forkJoin(pokemonObservables);
                })
            )
            .subscribe((pokemonDetailsList) => {
                this.pokemonList = pokemonDetailsList;
            });
    }
}
