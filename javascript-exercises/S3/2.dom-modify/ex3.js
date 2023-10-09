let myDiv$$ = document.createElement('div')

for(let i = 0; i < 6; i++){
let p$$ = document.createElement("p");
p$$.textContent = "hola soy otro texto";
myDiv$$.appendChild(p$$);
}
document.body.appendChild(myDiv$$);
// let div$$ = document.createElement('div');
// for(let i = 0; i <= 5; i++){
//     let p$$ = document.createElement('p');
//     div$$.appendChild(p);
// }
// document.body.appendChild(div$$);
// console.log(div$$)