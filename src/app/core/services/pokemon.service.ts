import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonEvolutionChain, PokemonList, PokemonSpecies } from '../models/pokemon';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private readonly baseUrl = 'https://pokeapi.co/api/v2';
    constructor(private http: HttpClient) {}
    getPokemonList(offset = 0, limit = 8): Observable<PokemonList> {
        return this.http.get<PokemonList>(
            `${this.baseUrl}/pokemon/?offset=${offset}&limit=${limit}`
        );
    }
    getPokemonListByUrl(url: string): Observable<PokemonList> {
        return this.http.get<PokemonList>(url);
    }

    getPokemonByUrl(url: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }

    getPokemonById(id: string): Observable<Pokemon> {
        return this.getPokemonByUrl(`${this.baseUrl}/pokemon/${id}`);
    }

    getSpecies(id: string) {
        return this.http.get<PokemonSpecies>(`${this.baseUrl}/pokemon-species/${id}`);
    }

    getEvolutionChainByUrl(url: string) {
        return this.http.get<PokemonEvolutionChain>(url);
    }
}
