const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}]
let destinofiltrado = [];
// for(let i = 0; i < placesToTravel.length; i++){
//     let lugares = placesToTravel[i];
//     if(lugares.id !== 11 && lugares.id !== 40){
//         destinofiltrado.push(lugares);
//     }
//     console.log(destinofiltrado);
// }
for (let lugares of placesToTravel) {
    if(lugares.id != 11 || lugares.id != 40){
        destinofiltrado.push(lugares);
    }
}
console.log(destinofiltrado)