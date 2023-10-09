const cities = [{isVisited:true, name: 'Tokyo'}, 
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'}, 
{isVisited:false, name: 'Seul'}];

const ciudades = cities.map(function (element) {
    if(element.isVisited === true){
        return element.name + " Visitado";
    }
    return element.name;
})
console.log(ciudades);