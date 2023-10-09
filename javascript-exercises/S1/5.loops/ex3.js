
// for(var i = 0; i <= 10; i++){
//     console.log("intentando dormir");
//     if(i == 10){
//         console.log("Dormido!");
//     }
// }



let payasos = ["miliki", "it","fofó","diabolico"]
let payasosDeCirco = [];
// for (let i = 0; i < payasos.length; i++) {
//     const circo = payasos[i];
  
// }
// console.log(payasosDeCirco)

for (let circo of payasos) {
    if(!circo.includes("diabolico")){
        payasosDeCirco.push(circo)
    }
}
console.log(payasosDeCirco)


