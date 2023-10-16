export interface PokemonList {
    count:    number;
    next?:     string;
    previous?: string;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
    _id:  number;
    img:  string;
}
