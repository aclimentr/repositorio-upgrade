/*En base al ejercicio anterior. 
Crea dinamicamente un elemento <p> 
por cada petición a la api que 
diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.*/
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
      }
     });
})

