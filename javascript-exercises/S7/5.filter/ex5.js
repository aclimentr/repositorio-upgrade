const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const nuevoArray = [];
const streamersSelection = streamers.filter(function (element) {
    if(element.name.includes("u")){
        nuevoArray.push(element)
    }
    return element;
})
console.log(nuevoArray);