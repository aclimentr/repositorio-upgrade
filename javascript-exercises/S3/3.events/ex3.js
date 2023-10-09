/*Basandote en el siguiente html, 
añade un evento 'input' que ejecute un console.log 
con el valor del input.*/
let input$$ = document.querySelector('input');
input$$.addEventListener('input', function (event) {
    console.log(input$$.value);
})
