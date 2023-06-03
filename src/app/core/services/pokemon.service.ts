import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private readonly baseUrl = 'https://pokeapi.co/api/v2';
    constructor(private http: HttpClient) {}
    getPokemonList(offset = 0, limit = 10): Observable<PokemonList> {
        return this.http.get<PokemonList>(
            `${this.baseUrl}/pokemon/?offset=${offset}&limit=${limit}`
        );
    }

    getPokemon(url: string) {
        return this.http.get(url);
    }
}
