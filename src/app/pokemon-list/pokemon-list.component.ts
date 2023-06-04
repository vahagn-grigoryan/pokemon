import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PokemonService } from '../core/services/pokemon.service';
import { forkJoin, switchMap } from 'rxjs';
import { Carousel } from 'bootstrap';
import { Pokemon, PokemonList } from '../core/models/pokemon';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, AfterViewInit {
    @ViewChild('carouselExample', { static: true }) carouselExample: ElementRef = {} as ElementRef;
    private pokemonList: PokemonList = {} as PokemonList;
    pokemonCarousel: Pokemon[][] = [];
    nextListIsLoading = false;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.pokemonService
            .getPokemonList()
            .pipe(
                switchMap((pokemonList) => {
                    this.pokemonList = pokemonList;

                    const pokemonObservables = pokemonList.results.map((pokemon) => {
                        return this.pokemonService.getPokemonByUrl(pokemon.url);
                    });

                    return forkJoin(pokemonObservables);
                })
            )
            .subscribe((pokemonList) => {
                this.pokemonCarousel.push(pokemonList);

                this.loadNextList();
            });
    }

    ngAfterViewInit() {
        new Carousel(this.carouselExample.nativeElement, {
            interval: 2000,
            touch: false,
        });
    }

    loadNextList() {
        if (!this.pokemonList.next || this.nextListIsLoading) {
            return;
        }

        this.nextListIsLoading = true;

        this.pokemonService
            .getPokemonListByUrl(this.pokemonList.next)
            .pipe(
                switchMap((pokemonList) => {
                    this.pokemonList = pokemonList;

                    const pokemonObservables = pokemonList.results.map((pokemon) => {
                        return this.pokemonService.getPokemonByUrl(pokemon.url);
                    });

                    return forkJoin(pokemonObservables);
                })
            )
            .subscribe((pokemonList: Pokemon[]) => {
                this.nextListIsLoading = false;
                this.pokemonCarousel.push(pokemonList);
                // if (this.pokemonCarousel.length > 3) {
                //     this.pokemonCarousel.shift();
                // }
            });
    }
}
