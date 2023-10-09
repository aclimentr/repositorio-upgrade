/*En base al ejercicio anterior, 
crea un botón con el texto 'X' 
para cada uno de los p que hayas 
insertado y que si el usuario hace c
lick en este botón eliminemos el parrafo asociado.*/

let body$$ = document.querySelector('body');
let input$$ = document.querySelector("input");
let button$$ = document.querySelector("button");
button$$.addEventListener('click', function peticion(event) {
    fetch('https://api.nationalize.io?name=' + input$$.value)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson.country);
      for (const nombres of myJson.country) {
        let p$$ = document.createElement('p');
        p$$.textContent = "El nombre " + input$$.value + " tiene un " + nombres.probability + "% de ser de " + nombres.country_id;
        body$$.appendChild(p$$);
        console.log(p$$)
        let buttonX$$ = document.createElement('button')
        p$$.appendChild(buttonX$$);
        buttonX$$.textContent = "x";
        buttonX$$.addEventListener('click', () => {
        p$$.remove(); 
        })    
      }
    })
  })
