const aliens = [
{name: 'Zalamero', planet: 'Eden', age: 4029},
{name: 'Paktu', planet: 'Andromeda', age: 32},
{name: 'Cucushumushu', planet: 'Marte', age: 503021}];


const mutations = [
{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

const findAlien = aliens.find(function (params) {
    return params.name === "Cucushumushu";
})
const findMutation = mutations.find(function (params) {
    return params.name === "Porompompero";
})
findAlien.mutation = findMutation.name;

// console.log(findAlien);
// console.log(findMutation);
console.log(aliens);