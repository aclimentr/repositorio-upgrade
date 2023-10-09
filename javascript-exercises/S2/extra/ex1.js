const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let categoriaAventura = [];
let categoriaComedia = [];
let categoriaAccion = [];
let categoriaThriller = [];
for (let catAvent of movies) {
    if(catAvent.categories.includes("aventura")){
        categoriaAventura.push(catAvent)
    }
    for (let catComedia of movies) {
        if(catComedia.categories.includes("comedia")){
            categoriaComedia.push(catComedia);
            }
        }
        for (let catAccion of movies) {
            if(catAccion.categories.includes("acción")){
                categoriaAccion.push(catAccion);
            }
        }
            for (let catThriller of movies) {
                if(catThriller.categories.includes("thriller")){
                    categoriaThriller.push(catThriller);
                }
            }
}
categoriaComedia.unshift("COMEDIA:");
categoriaAventura.unshift("AVENTURA:");
categoriaAccion.unshift("ACCIÓN:");
categoriaThriller.unshift("THRILLER:");
console.log(categoriaAventura);
console.log(categoriaThriller);
console.log(categoriaAccion);
console.log(categoriaComedia);