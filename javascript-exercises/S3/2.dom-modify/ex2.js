let div$$ = document.createElement('div');
document.body.appendChild(div$$);
console.log(div$$)
let p2$$ = document.createElement("p");
p2$$.textContent = "hola soy un texto";
div$$.appendChild(p2$$);
div$$.innerHTML = '<p>me he metido inside</p>'