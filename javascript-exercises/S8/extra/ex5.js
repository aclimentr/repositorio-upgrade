const urlBase$$ = 'https://pokeapi.co/api/v2/pokemon';
const body$$ = document.querySelector("body")
const fetchy = () => {
fetch(urlBase$$)
.then((response) => response.json())
.then((data) => {
    const pokemons = data.results;

    const promises = pokemons.map((pokemon) => {
        return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
            // console.log(pokemonData)
            return {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default
            };
        });
    });
    return Promise.all(promises);
})
}



const init = () =>{
 const fetch = fetchy();
 const drawingPokemons = drawPokemons(fetch);
}
init()






























// const body$$ = document.querySelector("body");

// const getPokemons = async () => {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon")
//     const res = await response.json();
//     console.log (res.results);

// const getPokeUrls = async () => {
//     const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
//     const resp = await respuesta.json()
//     console.log(resp)
// }
// }

// const init = async () => {
//     const takePokemons = await getPokemons();
//     const takePokeUrl = await getPokeUrls(takePokemons);
// }

// init();