const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const leyendas = [];
const streamy = streamers.filter(function (ofaiser) {
    if(ofaiser.gameMorePlayed.includes("Legends")){        
        leyendas.push(ofaiser);
    }
    if(ofaiser.age > 35){
        ofaiser.gameMorePlayed = ofaiser.gameMorePlayed.toUpperCase();
    }
    return ofaiser;
})
console.log(leyendas);