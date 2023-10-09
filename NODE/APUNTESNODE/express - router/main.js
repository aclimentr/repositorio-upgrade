// import express from 'express';
const express = require('express');
const app = express();
app.use(express.json());

const router = express.Router();
const routerUser = express.Router();
//router, contiene un conjunto de información de las rutas, e
//entre ellos los metodos(get, post, put, delete) CRUD --> Crear, leer, modificar y eliminar


router.get('/movies', (req, res) => { 
    res.send('este es el listado de las pelis')
});//el req y el res pueden ser pepino y lechuga
router.get('/characters', (req, res) => { 
    res.send('este es el listado de los personajes')
});

routerUser.get('/profile', (req, res)=>{
    res.send('este es el perfil de usuario');
})

routerUser.post('/register', (req, res)=>{
    console.log(req.body);
    res.json({message:'se ha registrado con éxito', datos: req.body});
})

app.use('/cine', router);
app.use('/users', routerUser);

//URL--> parametros(forma de enviar datos al endpoint) , metodos(tipo de rutas que necesito crear : get, 
//put, delete, post)
const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto' + PORT);
});


