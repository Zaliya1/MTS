const adapterPokemon = (pokemon: any) => {
    return {
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        img: pokemon.sprites.front_default
    };
}
export {adapterPokemon}
