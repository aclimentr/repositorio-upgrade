// import express from 'express';
const express = require('express');
const app = express();



app.use('/pelis', (req, res)=>{
    res.send('este es el listado de pelis');  //RUTA ESTÁTICA
});

app.use('/usuarios', (req, res)=>{
    res.send('este es el listado de pelis');  //RUTA ESTÁTICA
});

app.use('/', (req, res)=>{
    res.send('este es el HOME');              
});


//URL--> parametros(forma de enviar datos al endpoint) , metodos(tipo de rutas que necesito crear : get, 
//put, delete, post)
const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto' + PORT);
});


