const users = [{id: 1, name: 'Abel'}, 
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'}, 
{id:4, name: 'Amanda'}];

const anacletoAgenteSecreto = users.map(function (ofaiser) {
    if(ofaiser.name.includes("A")){
        return "Anacleto";
    }
    return ofaiser.name;
})
console.log(anacletoAgenteSecreto)