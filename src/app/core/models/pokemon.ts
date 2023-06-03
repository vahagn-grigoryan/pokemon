export interface PokemonNamedResource {
    name: string;
    url: string;
}

export interface PokemonList extends Object {
    count: number;
    next: string;
    previous: string;
    results: PokemonNamedResource[];
}
