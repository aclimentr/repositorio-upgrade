const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}];
let peliculaPequeña = [];
let peliculaMediana = [];
let peliculaGrande = [];
let contador = 0;
for(let i = 0; i < movies.length; i++){
    let movieTamaño = movies[i];
    if(movieTamaño.durationInMinutes < 100){
        peliculaPequeña.push(movieTamaño);
    }else if((movieTamaño.durationInMinutes >= 100) && (movieTamaño.durationInMinutes < 200)){
        peliculaMediana.push(movieTamaño);
    }       
    else if(movieTamaño.durationInMinutes >= 200){
        peliculaGrande.push(movieTamaño);
    }
}
console.log(peliculaGrande);
console.log(peliculaMediana);
console.log(peliculaPequeña);