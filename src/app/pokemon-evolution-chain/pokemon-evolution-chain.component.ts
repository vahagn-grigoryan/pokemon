import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, from, map, toArray } from 'rxjs';
import { PokemonEvolvesTo } from '../core/models/pokemon';

interface Evolutions {
    name: string;
    imageUrl: string;
}

@Component({
    selector: 'app-pokemon-evolution-chain',
    templateUrl: './pokemon-evolution-chain.component.html',
    styleUrls: ['./pokemon-evolution-chain.component.scss'],
})
export class PokemonEvolutionChainComponent implements OnInit {
    private flattenedEvolution: string[] = [];
    private pokemonId = '';
    evolutions: Evolutions[] = [];

    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.pokemonId = this.route.snapshot.paramMap.get('id') ?? '';

        this.getPokemonSpecies();
    }

    private getPokemonSpecies() {
        this.pokemonService.getSpecies(this.pokemonId).subscribe((specie) => {
            this.getEvolutionChain(specie.evolution_chain.url);
        });
    }

    private getEvolutionChain(url: string) {
        this.pokemonService.getEvolutionChainByUrl(url).subscribe((data) => {
            if (this.pokemonId !== data.chain.species.name) {
                this.flattenedEvolution.push(data.chain.species.name);
            }

            data.chain.evolves_to.forEach((evolves_to) => {
                this.flattenEvolution(evolves_to);
            });

            this.getEvolutions();
        });
    }

    private flattenEvolution(chain: PokemonEvolvesTo) {
        if (!chain?.evolves_to) {
            return;
        }

        if (this.pokemonId !== chain.species.name) {
            this.flattenedEvolution.push(chain.species.name);
        }

        chain.evolves_to.forEach((evolves_to) => {
            this.flattenEvolution(evolves_to);
        });
    }

    private getEvolutions() {
        from(this.flattenedEvolution)
            .pipe(
                concatMap((str: string) => {
                    return this.pokemonService.getPokemonById(str).pipe(
                        map((response) => ({
                            name: str,
                            imageUrl: response.sprites.other['official-artwork'].front_default,
                        }))
                    );
                }),
                toArray()
            )
            .subscribe((evolutions) => {
                this.evolutions = evolutions;
            });
    }

    navigateToPokemonDetails(pokemonName: string) {
        window.location.href = `/pokemon-list/${pokemonName}/details`;
    }
}
