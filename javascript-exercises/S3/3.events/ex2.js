/*Basandote en el siguiente html, 
añade un evento 'focus' que ejecute un console.log 
con el valor del input.*/

let input$$ = document.querySelector('input');
input$$.addEventListener('focus', function (event) {
    input$$.style.backgroundColor = "lightblue";
    console.log(input$$.value);
})
input$$.addEventListener('blur', function (event) {
    input$$.style.backgroundColor = "";
})