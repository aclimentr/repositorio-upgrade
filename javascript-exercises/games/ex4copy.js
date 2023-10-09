let teBody$$ = document.querySelector('[data-function = "borad"]')


const ventanaPrompt = () => {
    let filas = prompt("Cuantas filas quieres?")
    let columnas = prompt("Cuantas columnas quieres?")
    for (let i = 0; i < filas; i++) {
        const posFilas = filas[i];
        let tR$$ = document.createElement('tr')
        teBody$$.appendChild(tR$$)
    }
}



const init = () => {
    ventanaPrompt();
}
init();