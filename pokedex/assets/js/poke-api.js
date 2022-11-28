
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    
    // Faz uma requisição da lista de Pokemons
    return fetch(url)
        // Recebe a resposta da requisição e transforma em .JSON
        .then((response) => response.json())
        // Da resposta em .JSON seleciona apenas a chave results
        .then((jsonBody) => jsonBody.results)
        // Converteu a lista retornada pelo results em uma nova lista de requisições com os detalhes dos Pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        // Prepara as respostas anteriores em uma nova lista .JSON
        .then((detailRequests) => Promise.all(detailRequests))
        // Prepara a variavel com os Pokemons detalhados para utilização
        .then((pokemonDetails) => pokemonDetails)
}


