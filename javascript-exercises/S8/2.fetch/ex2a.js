// Dado el siguiente javascript y html. 
// Añade la funcionalidad necesaria usando fetch() 
// para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.



let input$$ = document.querySelector("input");
let button$$ = document.querySelector("button");
button$$.addEventListener('click', function(event) {
    fetch('https://api.nationalize.io?name=' + input$$.value)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
});
  
})

//TENEMOS QUE PASAR EL FETCH EN LA FUNCIÓN DECLARADA EN addEventListener

