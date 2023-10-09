console.log('holiis')

//http--> permite generar servidor HTTP
const http = require('http');
const PORT = 5050;

//permite manejar peticiones hechas a nuestro servidor
const requestServer = (req, res)=>{
    res.end("EL BUENO DE BATIATO *************** AL MISMISIMO JUPITER");
};

//creamos el servidor y le pasamos la función que maneja esas peticiones
const server = http.createServer(requestServer); //se llama server pero podría llamarse pepino o lo que sea

server.listen(PORT, () => {
    console.log(`Server  localhost:${PORT}`);
});
