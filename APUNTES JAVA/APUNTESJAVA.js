//OPERADORES LÓGICOS

//Y --> &
//O --> ||
//NO --> !
//DOBLE NEGACIÓN --> !! --> NOS SIRVE PARA CONVERTIR UN VALOR EN UN BOOLEANO

//TRUTHY OR FALSY
//TRUTHY--> VALOR QUE PUEDE CONSIDERARSE TRUE
//FLASY--> VALOR QUE PUEDE CONSIDERARSE FALSE

let cadena = "Mi cadena";

if(cadena){
    console.log("Mi cadema mp está vacía y la consideramos true" + cadena);
}else{
    console.log("Mi cadena está vacía y la consideramos false" + cadena);
}

let valor = 123;

if(valor){
    console.log("Mi valor no es 0 y la consideramos true" + valor);
}else{
    console.log("Mi valor es 0 y la consideramos false" + valor);
}
console.log(!!null);



let tengoCromos = true;
let amigoConQuienCambiar = true;

let puedoCambiarCromos = tengoCromos && amigoConQuienCambiar;
console.log(puedoCambiarCromos);



let tengoConsola = true;
let amigoConQuienJugar = false;
let puedoJugarConsola = tengoConsola || amigoConQuienJugar;
console.log(puedoJugarConsola);


//CONDICIONALES

//IF --> SI SE CUMPLE LA CONDICIÓN HAGO LO QUE SEA
//ELSE IF --> SI NO SE CUMPLIÓ LA CONDICIÓN ANTERIOR PERO SE CUMPLE ESTA HAGO LO K SEA
//ELSE --> SI NO SE CUMPLE NINGUNA CONDICIÓN HAGO ESTO

    if(true){
        console.log("Se cumple la condición y hago lo que sea");
    }

    if(false){
        console.log("Yo no digo nada");
    }else{
        console.log("No se cumple la condición y hago lo que dice el else");
    }

    if(false){
        console.log("Yo no digo nada");
    }else if(true){
        console.log("No se cumple la condición del if pero si la del else if");
    }else{
        console.log("Yo no digo nada");
    }

//ARRAYS //GRUPO DE ELEMENTOS

const frutas = ["naranja","sandía","melón","plátano","manzana"];

//ACCEDEMOS A UN ELEMENTO DEL ARRAY CON CORCHETES Y SU POSICIÓN DENTRO SIENDO 0 LA PRIMERA
console.log(frutas[0]); //Te da el primer elemento del array,si pones 1 el segundo, y así sucesivamente

//LENGTH --> NOS DICE EL Nº DE ELEMENTOS DE NUESTRO ARRAY
console.log(frutas.length);

let nombre = "pepito"; //PUEDES TRATAR UN STRING COMO UN ARRAY PARA ACCEDER A SU CONTENIDO
console.log(nombre[3])

//MÉTODOS PARA MODIFICAR ARRAY
//POP--> ELIMINA EL ÚLTIMO ELEMENTO DEL ARRAY Y ADEMÁS NOS DEVUELVE ESE ELEMENTO ELIMINADO
let frutaEliminada = frutas.pop();
frutas.pop();
console.log(frutas);
console.log(frutaEliminada, "Fruta que eliminé");

//PUSH --> AÑADE UNO O VARIOS ELEMENTOS A UN ARRAY
frutas.push("aguacate","membrillo");
console.log(frutas);

//REVERSE --> INVIERTE EL ORDEN DEL ARRAY
console.log(frutas.reverse());

//SHIFT --> ELIMINA EL PRIMER ELEMENTO DEL ARRAY Y NOS DEVUELVE EL VALOR ELIMINADO

let eliminado2 = frutas.shift();
console.log(eliminado2, "fruta que eliminé");

//SORT --> ORDENAR EL ARRAY ALFABÉTICAMENTE

frutas.sort();
console.log(frutas); //lo pone por orden alfabetico
    //pero si tengo un array de numeros
let arrayNums = [6,3,8,54,78];
arrayNums.sort();
console.log(arrayNums); //los ordena alfabeticamente

//SPLICE --> ELIMINA ELEMENTOS SEGÚN LOS PARAMETROS QUE RECIBAMOS Y NOS DEVUELVE LOS ELEMENTOS ELIMINADOS
//1º INDICE DESDE DONDE MODIFICAMOS EL ARRAY
//2º NUMERO DE ELEMENTOS A ELIMINAR --> SI ES 0 NO SE ELIMINA
//3º NUEVOS ELEMENTOS A INSERTAR
let eliminoSplice = frutas.splice(1,2, "cereza")
console.log(frutas);
console.log(eliminoSplice, "elementos eliminados")

//UNSHIFT --> AÑADE ELEMENTOS AL PRINCIPIO DEL ARRAY
frutas.unshift("kiwi")
console.log(frutas)


//MÉTODOS QUE NO MODIFICAN EL ARRAY

//CONCAT --> CONCATENA DOS ARRAYS Y NOS DEVUELVE UNO NUEVO
let heroes = ["hulk","spiderman","superman"]
let villanos = ["duende verde", "Thanos"]

const personajesConcat = heroes.concat(villanos)
console.log(personajesConcat);

//JOIN --> DEVUELVE UN STRING CONCATENANDO NUESTROS ELEMENTOS CON UN SEPARADOR
let joinHeroes = heroes.join("--")
console.log(joinHeroes) //Devuelve un string con separadores (-). Devolvería hulk-spiderman-superman

//SLICE --> DEVUELVE UN ARRAY CON ELEMENTOS QUE HAYAMOS PEDIDO CON PARAMETROS
//1º INDICE DESDE DONDE DEVUELVE EL ARRAY (DONDE EMPIEZA)
//2º INDICE DONDE TERMINA LO QUE DEVUELVE EL ARRAY (DONDE ACABA)
let slicePersonajes = personajesConcat.slice(1,3);
console.log(slicePersonajes); //spiderman, superman

//TOSTRING --> CONVIERTE EL ARRAY EN STRING
let toStringPersonajes = personajesConcat.toString();
console.log(toStringPersonajes)


//MÉTODOS PARA BUSCAR EN UN ARRAY
//INDEX OF --> NOS DEVUELVE LA PRIMERA POSICIÓN DONDE ESTÁ EL ELEMENTO QUE BUSCAMOS
let heroes2 = ["spiderman", "hulk", "capitan america","spiderman"]
let spidermanIndexOff = heroes2.indexOf("spiderman")
console.log(spidermanIndexOff)

//LAST INDEX OF --> NOS DEVUELVE LA ULTIMA POSICIÓN DONDE ESTÁ EL ELEMENTO QUE BUSCAMOS

//INCLUDES --> NOS DEVUELVE TRUE O FALSE SEGÚN SI UN ELEMENTO ESTÁ EN NUESTRO ARRAY O NO
let includeBatman = heroes2.includes("batman")
console.log(includeBatman)//false


//OBJETOS --> SON PARES DE PROPIEDADES (KEY) Y VALORES (VALUE)

const persona = {
    nombre: "pepito",
    apellido: "perez",
    edad: 18,
    padre: false,
    frutasFavoritas: ["manzana", "platano"]
}
//accedo a un valor de un objeto a través de su propiedad
console.log(persona.nombre)
console.log(persona["apellido"])

persona.nombre = "Luis";
console.log(persona.nombre); //Luis

persona.telefono = 6266754894 //si existe la propiedad la modifica y si no existe la añade
console.log(persona)

//BUCLES

//BUCLE FOR --> REPITE EL CONTENIDO DEL BUCLE TANTAS VECES HASTA QUE SE CUMPLE UNA CONDICION
// 1º Variable inicial --> normalmente i = 0
// 2º Condicion --> con esta condicion definimos cuando finaliza el bucle
// 3º Modificamos la variable inicial

for(let i = 0; i < 10; i++){
    console.log(i);
}

const frutas = ["naranja", "sandia", "melon", "pera", "platano", "manzana"]

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}


const personas = [
    {
        nombre: "pepito",
        apellido: "perez",
        edad: 20
    },
    {
        nombre: "luis",
        apellido: "lopez",
        edad: 30
    },
    {
        nombre: "juanito",
        apellido: "sanchez",
        edad: 33
    }
]
let sumaEdades = 0
for(let i = 0; i < personas.length; i++){
    let persona = personas[i];
    console.log(persona.nombre);
    sumaEdades += persona.edad
}
console.log(sumaEdades, "es la suma de todas las edades");

//FOREACH  --> Funcion que recorre cada uno de los elementos del array y hace lo que sea en la funcion
//array.foreEach(function(ELEMENTO){ TRATO EL ELEMENTO })

personas.forEach(function(elemento){
    console.log(elemento.nombre)
})


personas.forEach(function(elemento, index){
    if(elemento.nombre == "pepito"){
        personas.splice(index, 1)
    }
})

console.log(personas)


//BUCLE  FOR OF --> COGE UN ELEMENTO DEL ARRAY Y LE ASIGNAMOS UNA VARIABLE PARA TRATARLE
//for(let elemento of array){ TRATO EL ELEMENTO }
for(let persona of personas){
    console.log(persona.edad)
}

//BUCLE FOR IN --> COGE CADA PROPIEDAD(KEY) DE UN OBJETO
//for(let propiedad of object){}
let personita = personas[0]
for(let key in personita){
    console.log("Mi propiedad", key, "tiene el valor", personita[key])
}


for (let personita of personas) {   //RECORRO UN ARRAY Y COJO UN ELEMENTO DEL ARRAY
    console.log(personita)
    for(let propiedad in personita){    //RECORRER EL OBJETO Y COGER CADA PROPIEDAD DEL OBJETO
        console.log("Mi propiedad", propiedad, "tiene el valor", personita[propiedad])
    }
}


let objeto = {
    nombre: "luis",
    apellido: "lopez",
    edad: 30
}

for (let propiedad in objeto) {
    console.log(propiedad, objeto[propiedad])
}

//let --> variable a la que puedo asignar un nuevo valor
//const --> variable a la que puedo no asignar un nuevo valor

let nombre = "juanito"
nombre = "pepito"

const nombre2 = "juanito"
// nombre2 = "manolito" //Falla al asignar valor a una variable