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

//VARIABLE BOOLEAN
let booleano = false;

console.log(booleano == false);
console.log(booleano != true);

// Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. 
//Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const comida = {isVegan: true}
if(comida.isVegan != true){
    //SOLO ENTRA SI isVegan es false
}


if(comida.isVegan == false){
    //SOLO ENTRA SI isVegan es false
}


comida.isVegan = !comida.isVegan;

if(!comida.isVegan){
    //SOLO ENTRA SI isVegan es false
}else{}


const objeto = {}

console.log(objeto);

objeto.name = "pepe"

console.log(objeto);


objeto["name"] = "manolito"

console.log(objeto);


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


//FUNCIONES 
//LA CREAMOS  CON --> FUNCTION NOMBREFUNCION(PARAMETROS){ LO QUE HAGA MI FUNCION}
//LA EJECUTAMOS CON --> NOMBREFUNCION(PARAMETROS)

function saluda(nombre){
    console.log("saluda", nombre);
}

let nombre = "pepe";
saluda(nombre);

saluda("juan");

function suma(a, b, c){
    return a + b + c;
}

let resultado = suma(3, 6, 9);
console.log(resultado);

function multiplicar(a = 4, b = 5){
    console.log(a * b);
}


multiplicar();
multiplicar(5);
multiplicar(5, 8);

let myDiv$$ = document.querySelector('div');
console.log(myDiv$$);

let myDivPepito$$ = document.querySelector('.pepito');
console.log(myDivPepito$$);

let myDivManolito$$ = document.querySelector('#manolito');
console.log(myDivManolito$$);

let myDivs$$ = document.querySelectorAll('div');
console.log(myDivs$$);


//METODOS ANTIGUOS
let divs$$ = document.getElementsByTagName('div');
console.log(divs$$[2]);

let divsPepito$$ = document.getElementsByClassName('pepito');
console.log(divsPepito$$);

let divManolito$$ = document.getElementById('manolito');
console.log(divManolito$$);

let anchorGoogle$$ = document.querySelector('[href="http://www.google.com"]');
console.log(anchorGoogle$$);

myDiv$$.textContent = "Este texto lo he cambiado con javascript";
myDiv$$.setAttribute('data-info', "soy pepito")

myDiv$$.classList.add("divNuevo")
myDiv$$.classList.add("divNuevo2")
myDiv$$.classList.add("divNuevo3")

myDiv$$.classList.remove("divNuevo")


let p$$ = document.createElement("p");
p$$.textContent = "soy el parrafo que he creado";
myDiv$$.appendChild(p$$);
myDiv$$.innerHTML = `<p>me he includo con innerHtml</p>`;

let divNuevo$$ = document.createElement("div");
divNuevo$$.textContent = "soy el div nuevo";

document.body.appendChild(divNuevo$$);

const simpsons = [
    {
        name: "Homer",
        image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    },
    {
        name: "Marge",
        image: "https://www.neo2.com/wp-content/uploads/2019/12/dia-de-marge-simpson-17-diciembre-neo2-1.jpg"
    },
    {
        name: "Bart",
        image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    },
    {
        name: "Lisa",
        image: "https://assets.stickpng.com/images/5eb95cf617f3c600044a2915.png"
    },
    {
        name: "Maggie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcaTMa0-NUVdc7-4A8zgWOadopWSziF_hr_8Ncmmk&s"
    }
]


for (const personaje of simpsons) {
    let divSimpson$$ = document.createElement('div');
    divSimpson$$.classList.add('personaje');
    let h4Name$$ = document.createElement('h4');
    let imgSimpson$$ = document.createElement('img');

    h4Name$$.textContent = personaje.name;
    imgSimpson$$.setAttribute('src', personaje.image);
    imgSimpson$$.setAttribute('alt', personaje.name);
    imgSimpson$$.style = "width: 250px;"
    
    divSimpson$$.appendChild(h4Name$$);
    divSimpson$$.appendChild(imgSimpson$$);

    divNuevo$$.appendChild(divSimpson$$);

}


// ARROW  FUNCTIONS
// FUNCTION NOMBRE(PARAMETROS) { LO QUE LA FUNCION }
// CONST NOMBRE = (PARAMETROS) => { LO QUE LA FUNCION }

function diHola(nombre) {
    console.log("hola", nombre);
}

const diHolaArrow = (nombre) => {
    console.log("hola", nombre);
}

diHola("Pepe")
diHolaArrow("Juan")

const diHolaArrow2 = (nombre) => console.log("hola", nombre);
diHolaArrow2("Luis")


function suma(numA, numB){
    return numA + numB;
}

const sumaArrow = (numA, numB) => {
    return numA + numB;
}

console.log(suma(3, 4));
console.log(sumaArrow(5,6));


const sumaArrow2 = (numA = 5, numB = 4) =>  numA + numB;
console.log(sumaArrow2(3, 3));
console.log(sumaArrow2(3));
console.log(sumaArrow2());

const devuelveObjeto = () => {
    return {name: "pepe", apellido: "perez"}
}

const devuelveObjeto2 = () => ({name: "luis", apellido: "lopez"})

console.log(devuelveObjeto());
console.log(devuelveObjeto2());


//CALLBACKS
// ES AQUELLA FUNCION QUE PASAMOS COMO PARAMETRO A OTRA FUNCION
const hola = (nombre) => {
    console.log("Hola", nombre);
}

const adios = (nombre) => {
    console.log("Adios", nombre);
}


const saludar = (nombre, callback) => {
    callback(nombre)
}

saludar("Pepe", hola);
saludar("Pepe", adios);


const suma2 = (numA, numB) => {return numA + numB};
const resta = (numA, numB) => {return numA - numB};
const multiplica = (numA, numB) => {return numA * numB};
const divide = (numA, numB) => { return numA / numB};

const operacion = (num1, num2, opera) => {
    return opera(num1, num2);
}

console.log(operacion(4, 6, suma2));
console.log(operacion(5, 2, resta));
console.log(operacion(8, 2, multiplica));
console.log(operacion(9, 3, divide));


//ES6
//TEMPLATE STRING
//Una alternativa para no estar concatenando todo el rato con el +
let nombre = "Pepe";
let apellido = "Perez";
let edad = 25;
let foto = 'https://images7.memedroid.com/images/UPLOADED430/6075afd2d51ec.jpeg';
let concatNombreApellido = "Me llamo "+ nombre + " " + apellido;
console.log(concatNombreApellido);


let concatTemplateString = `Me llamo ${nombre} ${apellido}`;
console.log(concatTemplateString);

// const div$$ = document.createElement("div");
// div$$.innerHTML = `
//     <p>Nombre: ${nombre}</p>
//     <p>Apellido: ${apellido}</p>
//     <p>Edad: ${edad}</p>
//     <img src="${foto}" alt="${nombre}"/>  
// `;

// "<p>Nombre: "+ nombre + " </p>
// <p> Apellido: " +apellido + " </p>
// <img src = " + foto + " alt=" + nombre  + " /> "


//MAP
//RECORREMOS UN ARRAY Y DEVOLVEMOS UNO NUEVO CON LA INFORMACIÓN QUE QUERAMOS
//ARRAY.MAP((ELEMENTO) => HAGO LO QUE SEA CON EL ELEMENTO Y LO DEVUELVO)

const superheroes = [
    {
        name: 'Peter Parker',
        alias: 'Spiderman',
        power: 50
    },{
        name: 'Bruce Wayne',
        alias: 'Batman',
        power: 70
    },{
        name: 'Clark Kent',
        alias: 'Superman',
        power: 90
    }
]

const aliasSuperheroes = superheroes.map((heroe) => heroe.alias)
console.log(aliasSuperheroes);


const newSuperHeroes = superheroes.map((heroe, index) => ({
    id: index + 1,
    name: heroe.name,
    alias: heroe.alias,
    powerfull: heroe.power
}))

console.log(newSuperHeroes);

//FILTER
// RECORRE MI ARRAY Y PARA CADA ELEMENTO COMPRUEBA UNA CONDICION Y NOS DEVUELVE EL ELEMENTO
// ARRAY.FILTER((ELEMENTO) => CONDICION)
const personajes = [
    {name: "batman", tipo:"heroe", power: 70, isAlive: false},
    {name: "spiderman", tipo:"heroe", power: 50, isAlive: true},
    {name: "joker", tipo:"villano", power: 60, isAlive: false},
    {name: "dr. octopus", tipo:"villano", power: 40, isAlive: true},
    {name: "superman", tipo:"heroe", power: 90, isAlive: true },
    {name: "hulk", tipo:"heroe", power: 110, isAlive: true},
    {name: "duende verde", tipo:"villano", power: 75, isAlive: false}
]

const heroes = personajes.filter((personaje) => personaje.tipo === "heroe");
console.log(heroes);


const poderosos = personajes.filter((personaje) => {
    if(personaje.power > 70){
        return personaje
    }    
});
console.log(poderosos);

const personajesMuertos = personajes.filter((personaje) => !personaje.isAlive);
console.log(personajesMuertos);

const personajesAcabadosMan = personajes.filter((personaje) => personaje.name.includes('man') || personaje.power >= 70);
console.log(personajesAcabadosMan);

//FIND
// RECORRE UN ARRAY Y PARA CADA ELEMENTO NOS COMPRUEBA UNA CONDICIÓN Y NOS DEVUELVE EL PRIMERO QUE LA CUMPLA
// ARRAY.FIND((ELEMENTO) => CONDICION )

const firstVillano = personajes.find((personaje) => personaje.tipo === "villano")
console.log(firstVillano)


const firstVillanoAlive = personajes.find((personaje) => personaje.tipo === "villano" && personaje.isAlive)
console.log(firstVillanoAlive)



//REDUCE
// RECORREMOS UN ARRAY Y PARA CADA ELEMENTO AÑADIMOS UN VALOR A UN ACUMULADOR
// ARRAY.REDUCE((ACUMULADOR, ELEMENTO) => SUMA ACUMULADOR + VALOR, VALOR INICIAL ACUMULADOR)

const totalPower = personajes.reduce((acc, personaje) => acc + personaje.power, 0);
console.log(totalPower);

const totalPowerVillanos = personajes.filter((personaje) => personaje.tipo === "villano")
                            .reduce((acc, personaje) => acc + personaje.power, 0)
console.log(totalPowerVillanos);

const productos = [
    {
        name: "pantalon vaquero",
        cantidad: 2,
        precio: 20
    },
    {
        name: "camiseta blanca",
        cantidad: 1,
        precio: 10
    },
    {
        name: "calcetines",
        cantidad: 3,
        precio: 2
    }
]

const total = productos.reduce((acc, producto) => acc + (producto.cantidad * producto.precio),0);
console.log(total);

//REPASO EVENTOS

const button$$ = document.createElement('button');

button$$.textContent = "Mi botoncito";

document.body.appendChild(button$$);

// ELEMENTO.ADDEVENTLISTENER(TIPO, FUNCION)
button$$.addEventListener('click', function(){console.log("Hola")})
button$$.addEventListener('click', () => { console.log("Hola Soy Arrow")});

function hola() {
    console.log("Hola Funcion Externa");
}

const holaArrow = () => {
    console.log("Hola Funcion Externa Arrow");
}

button$$.addEventListener('click', hola);
button$$.addEventListener('click', holaArrow);


const input$$ = document.createElement('input');
document.body.appendChild(input$$);

button$$.addEventListener('click', function(){
    console.log("Hola Input", input$$.value)
})


button$$.addEventListener('click', () => {
    console.log("Hola Arrow Input", input$$.value)
})

function input (texto) {
    console.log("Hola Input Externa", texto);
}

const inputArrow = (texto) => {
    console.log("Hola Input Arrow Externa", texto);
}

button$$.addEventListener('click', () => input(input$$.value))
button$$.addEventListener('click', () => inputArrow(input$$.value))


//EVENT PREDEFINIDO
input$$.addEventListener('input', function(event){
    console.log(event.target)
})

function inputEvent(event, nombre){
    console.log(event.target.value, nombre);
}

// input$$.addEventListener('input', inputEvent )
input$$.addEventListener('input', (evento) => inputEvent(evento, "pepe") )