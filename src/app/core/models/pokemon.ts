export interface Pokemon {
    id: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: Array<{ ability: { name: string } }>;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
    name: string;
}
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

export interface PokemonSpecies {
    evolution_chain: {
        url: string;
    };
}

interface PokemonEvolutionDetails {
    gender: null | string;
    held_item: null | string;
    item: null | string;
    known_move: null | string;
    known_move_type: null | string;
    location: null | string;
    min_affection: null | number;
    min_beauty: null | number;
    min_happiness: null | number;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species: null | string;
    party_type: null | string;
    relative_physical_stats: null | string;
    time_of_day: string;
    trade_species: null | string;
    trigger: {
        name: string;
        url: string;
    };
    turn_upside_down: boolean;
}

export interface PokemonEvolvesTo {
    evolution_details: PokemonEvolutionDetails[];
    evolves_to: PokemonEvolvesTo[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    };
}

export interface PokemonChain {
    evolution_details: PokemonEvolutionDetails[];
    evolves_to: PokemonEvolvesTo[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    };
}

export interface PokemonEvolutionChain {
    baby_trigger_item: null | string;
    chain: PokemonChain;
    id: number;
}
