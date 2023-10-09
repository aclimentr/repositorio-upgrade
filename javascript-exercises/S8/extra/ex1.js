fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson)
    for (let i = 0; i < myJson.results.length; i++) {
        const character = myJson.results[i];
        const titulo = document.createElement('h2');
        const imagen = document.createElement('img');
        document.body.appendChild(titulo);
        document.body.appendChild(imagen);
        imagen.setAttribute('src', character.image);
        titulo.textContent = character.name;    
    }
});
