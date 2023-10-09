// Convierte la siguiente función con un fetch 
// utilizando async-await. Recuerda que para usar 
// .fetch() tendrás que probar el ejercicio en el 
// navegador;


// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(characters => console.log(characters));
// }

// getCharacters();

const getcharacters = async () => {
    try{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    console.log(results);
    }
    catch (error){
        console.error('error al obtener a los personajes', error);
    }
    // for (const personajes of characters.results) {
    //     console.log(personajes);
    // }
}

const inicio = async () => {
    const personajes = await getcharacters();
}

inicio();
