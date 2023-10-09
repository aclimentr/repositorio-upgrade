
const body$$ = document.querySelector("body");
let button$$ = document.querySelector("button")
button$$.addEventListener('click', function (event) {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        for (const gatos of myJson) {
            let div$$ = document.createElement("div")
            let image$$ = document.createElement("img")
            image$$.setAttribute("src", gatos.url)
            image$$.setAttribute("alt", gatos.id)
            body$$.appendChild(div$$)
            div$$.appendChild(image$$)
            console.log(gatos)
            let button2$$ = document.createElement("button")
            button2$$.textContent = "Eliminar gato"
            div$$.appendChild(button2$$)
            button2$$.addEventListener("click", () => {
                image$$.remove();
                button2$$.remove();
            })
        }
    })
})
