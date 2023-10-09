
console.log('holiis')

const { log } = require('console');
//http--> permite generar servidor HTTP
const http = require('http');
const PORT = 5050;

//permite manejar peticiones hechas a nuestro servidor
const requestServer = (req, res)=>{
    console.log(req.url);
    const url = req.url;
    if(url==="/"){
        res.end('Por el puerto 5050');
    }else if(url==="/user"){
        res.end('datos del usuario');
    }else if(url==='/products'){
        res.end('datos de los productos');
    }
};

//creamos el servidor y le pasamos la función que maneja esas peticiones
const server = http.createServer(requestServer); //se llama server pero podría llamarse pepino o lo que sea

server.listen(PORT, () => {
    console.log(`Server  localhost:${PORT}`);
});
