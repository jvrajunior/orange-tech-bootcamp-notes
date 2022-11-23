
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return fetch(url)
    // Declaração de função utilizando Arrow Function (=>)
    // Quando a função possuí apenas uma linha, não precisa do corpo da função {}
    // Recebe a resposta do fetch e transforma o body em json
        .then((response) => response.json())
    // Pega a resposta anterior e filtra apenas a chave results
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}


