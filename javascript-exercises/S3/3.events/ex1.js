/*Añade un botón a tu html con el id btnToClick y 
en tu javascript añade el evento click que ejecute 
un console log con la información del evento del click*/

button$$ = document.querySelector("#btnToClick");
button$$.addEventListener('click', function (event) {
    console.log(event);
})
