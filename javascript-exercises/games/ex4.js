let filas = prompt('Cuantas filas quieres?');
let columnas = prompt('Cuántas columnas quieres?')
let teBody$$ = document.querySelector('[data-function = "board"]');
let imgXUrl = './public/exercise-4/x.png';
let imgChestUrl = './public/exercise-4/chest.png';
let imgSkullUrl = './public/exercise-4/skull.png';
function numRandom(max) {
    return Math.floor(Math.random() * max);
}
let aleatorio0 = numRandom(filas);
let aleatorio1 = numRandom(columnas);

for (let i = 0; i < filas; i++) {
    let tR$$ = document.createElement('tr');
    teBody$$.appendChild(tR$$);
    for (let j = 0; j < columnas; j++) {
        let tD$$ = document.createElement('td');
        tR$$.appendChild(tD$$);
        let imagen$$ = document.createElement('img');
        imagen$$.setAttribute('src', imgXUrl)
        tD$$.appendChild(imagen$$);
        imagen$$.addEventListener("click", clicka.bind(imagen$$));
        
        }
    }
        

   

function clicka() {
    this.setAttribute('src', imgSkullUrl);
}








